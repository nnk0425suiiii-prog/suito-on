const SITE_ORIGIN = 'https://suito-on.com';
const SITE_NAME = 'すいとおん。';
const DEFAULT_IMAGE = 'blog/images/suion-01.png';
const detailRoutes = new Set(['article','guide-article','comic-detail','comic-series','event-detail']);
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const plain = value => String(value || '').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
function isPublished(item, now) {
  if (!item) return false;
  if (item.publishDate) {const date=Date.parse(item.publishDate);return !Number.isFinite(date)||date<=now;}
  return !item.comingSoon;
}
export function resolveShare(url, now = Date.now()) {
  const route=url.pathname.replace(/^\//,'').replace(/\.html$/,'').replace(/\/$/,'');
  if(!detailRoutes.has(route)) return null;
  let key=route==='comic-series'?'series':'id';
  let id=url.searchParams.get(key);
  if(route==='article' && ['about-sui','about-on'].includes(id)) id=id==='about-sui'?'introduce-sui':'introduce-on';
  let item, title, description, image;
  if(route==='article'||route==='guide-article'){
    item=(route==='article'?CONTENT.blog:CONTENT.guide).find(x=>String(x.id)===id);
    if(!isPublished(item,now)) return {missing:true,route};
    title=item.title;description=item.lead;image=item.image;
  } else if(route==='comic-detail'){
    item=CONTENT.comics.find(x=>String(x.id)===id);
    if(!isPublished(item,now))return {missing:true,route};
    title=`${item.title}｜${item.series} #${item.number}`;description=item.description;image=item.image;
  } else if(route==='comic-series'){
    item=CONTENT.series.find(x=>String(x.id)===id);
    if(!item || item.comingSoon || !CONTENT.comics.some(x=>x.series===item.name&&isPublished(x,now)))return {missing:true,route};
    title=item.name;description=item.description;image=item.thumbnail;
  } else {
    item=CONTENT.events.find(x=>String(x.id)===id);
    if(!isPublished(item,now))return {missing:true,route};
    title=item.title;description=item.description||item.lead||`${item.title}の開催情報。`;image=item.image;
  }
  const social=CONTENT.socialImages[`${route}:${id}`];
  // Only use the pre-encoded asset while its corresponding editorial image matches.
  const socialImage=social?.source===(image||DEFAULT_IMAGE)?social:null;
  return {route,id,item,title:`${plain(title)} | ${SITE_NAME}`,description:plain(description||title),
    canonical:`${SITE_ORIGIN}/${route}?${key}=${encodeURIComponent(id)}`,
    image:new URL(socialImage?.image||image||DEFAULT_IMAGE,SITE_ORIGIN).href,
    width:socialImage?.width,height:socialImage?.height};
}
export function rewriteSharingHTML(html, share) {
  // These are controlled project templates, not arbitrary third-party HTML.
  html=html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi,'')
    .replace(/<meta\b[^>]*(?:name|property)\s*=\s*["'](?:description|robots|og:[^"']*|twitter:[^"']*)["'][^>]*>/gi,'')
    .replace(/<link\b[^>]*rel\s*=\s*["']canonical["'][^>]*>/gi,'');
  if(share.missing){
    return html.replace('</head>','<title>記事が見つかりません | すいとおん。</title><meta name="robots" content="noindex, follow"></head>');
  }
  const meta=[`<title>${escapeHTML(share.title)}</title>`,
    `<meta name="description" content="${escapeHTML(share.description)}">`,
    `<link rel="canonical" href="${escapeHTML(share.canonical)}">`,
    `<meta name="twitter:card" content="summary_large_image">`];
  for(const [name,value] of Object.entries({'og:type':'article','og:locale':'ja_JP','og:site_name':SITE_NAME,
    'og:title':share.title,'og:description':share.description,'og:url':share.canonical,'og:image':share.image,
    'og:image:alt':share.item.title||share.item.name,'og:image:width':share.width,'og:image:height':share.height})){
    if(value)meta.push(`<meta property="${name}" content="${escapeHTML(value)}">`);
  }
  return html.replace('</head>',meta.join('\n')+'\n</head>');
}
async function assetResponse(request, env) {
  let response=await env.ASSETS.fetch(request);
  // Asset serving may normalize .html paths. Follow only same-origin normalizations.
  for(let count=0;count<3&&[301,302,307,308].includes(response.status);count++){
    const next=new URL(response.headers.get('location'),request.url);
    if(next.origin!==new URL(request.url).origin) break;
    request=new Request(next,{method:'GET',headers:request.headers});
    response=await env.ASSETS.fetch(request);
  }
  return response;
}
export default {
  async fetch(request, env) {
    const url=new URL(request.url);
    const share=resolveShare(url);
    if(!share)return env.ASSETS.fetch(request);
    if(!['GET','HEAD'].includes(request.method))return new Response('Method Not Allowed',{status:405,headers:{Allow:'GET, HEAD'}});
    // Fetch only the common HTML template. Never put UTM or an arbitrary ID into an asset path.
    const assetURL=new URL(`/${share.route}`,url.origin);
    const response=await assetResponse(new Request(assetURL,{headers:request.headers}),env);
    if(!response.ok)return response;
    const html=rewriteSharingHTML(await response.text(),share);
    const headers=new Headers(response.headers);
    headers.set('content-type','text/html; charset=utf-8');
    headers.set('cache-control','no-store');
    headers.delete('etag');headers.delete('content-length');headers.delete('content-encoding');
    if(share.missing)headers.set('x-robots-tag','noindex, follow');
    return new Response(request.method==='HEAD'?null:html,{status:share.missing?404:200,headers});
  }
};
