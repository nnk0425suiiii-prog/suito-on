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
  const cleanHeaders=new Headers(request.headers);
  for(const name of ['if-none-match','if-modified-since','range','if-range'])cleanHeaders.delete(name);
  request=new Request(request,{headers:cleanHeaders});
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
    const index=await respondIndex(request,env,url);
    if(index)return index;
    const outing=await respondOuting(request,env,url);
    if(outing)return outing;
    const share=resolveShare(url);
    if(!share)return env.ASSETS.fetch(request);
    if(!['GET','HEAD'].includes(request.method))return new Response('Method Not Allowed',{status:405,headers:{Allow:'GET, HEAD'}});
    // Fetch only the common HTML template. Never put UTM or an arbitrary ID into an asset path.
    const assetURL=new URL(`/${share.route}`,url.origin);
    const response=await assetResponse(new Request(assetURL,{headers:request.headers}),env);
    if(!response.ok)return response;
    const html=renderArticleHTML(rewriteSharingHTML(await response.text(),share),share);
    const headers=new Headers(response.headers);
    headers.set('content-type','text/html; charset=utf-8');
    headers.set('cache-control','no-store');
    headers.delete('etag');headers.delete('content-length');headers.delete('content-encoding');
    if(share.missing)headers.set('x-robots-tag','noindex, follow');
    return new Response(request.method==='HEAD'?null:html,{status:share.missing?404:200,headers});
  }
};

// OUTING uses one HTML template. Old article URLs keep working via redirects.
async function respondOuting(request,env,url) {
  const route=url.pathname.replace(/^\//,'').replace(/\/$/,'').replace(/\.html$/,'');
  const features=CONTENT.outing||[];
  const legacy=features.find(f=>f.id===route);
  if(!legacy&&route!=='outing-article')return null;
  if(!['GET','HEAD'].includes(request.method))return new Response('Method Not Allowed',{status:405,headers:{Allow:'GET, HEAD'}});
  if(legacy){
    const target=new URL('/outing-article',url.origin);
    target.search=url.search;target.searchParams.set('id',legacy.id);
    return new Response(null,{status:301,headers:{Location:target.href}});
  }
  const id=url.searchParams.get('id');
  const item=features.find(f=>f.id===id);
  const assetURL=new URL('/outing-article.html',url.origin);
  const assetHeaders=new Headers(request.headers);
  for(const name of ['if-none-match','if-modified-since','range','if-range'])assetHeaders.delete(name);
  const response=await assetResponse(new Request(assetURL,{headers:assetHeaders}),env);
  if(!response.ok)return response;
  const source=await response.text();
  // A mismatched deployment must not return a successful empty article.
  if(!source.includes('<!-- OUTING_CONTENT_START -->'))return new Response('OUTING template unavailable',{status:503});
  let html=source.replace(/<!-- OUTING_CONTENT_START -->[\s\S]*?<!-- OUTING_CONTENT_END -->/,()=>OutingRender.article(item,CONTENT.outingPlaces||[],features));
  if(item)html=html.replace('id="outingArticle"',`id="outingArticle" data-rendered-id="${escapeHTML(id)}"`);
  html=rewriteSharingHTML(html,item?{
    item,title:`${plain(item.title)} | ${SITE_NAME}`,description:plain(item.description),
    canonical:OutingRender.canonical(id),image:new URL(item.image,SITE_ORIGIN).href
  }:{missing:true});
  const headers=new Headers(response.headers);
  headers.set('content-type','text/html; charset=utf-8');headers.set('cache-control','no-store');
  headers.delete('etag');headers.delete('content-length');headers.delete('content-encoding');
  if(!item)headers.set('x-robots-tag','noindex, follow');
  return new Response(request.method==='HEAD'?null:html,{status:item?200:404,headers});
}

// Only edit controlled, empty template slots; content comes from our editorial data.
function fillSlot(html, id, value) {
  const re = new RegExp('(<([a-z][a-z0-9]*)\\b[^>]*\\bid=["\\\']'+id+'["\\\'][^>]*>)[\\s\\S]*?(<\\/\\2>)', 'i');
  if (!re.test(html)) throw new Error('Missing content slot: '+id);
  return html.replace(re, (_,open,tag,close)=>open+value+close);
}
function imageSlot(html,id,item) {
  return html.replace(new RegExp('<img\\b[^>]*\\bid=["\\\']'+id+'["\\\'][^>]*>', 'i'), tag => tag
    .replace(/\s(?:src|alt)\s*=\s*["'][^"']*["']/gi,'')
    .replace(/\s*\/?\s*>$/,` src="${escapeHTML(item.image||DEFAULT_IMAGE)}" alt="${escapeHTML(item.title)}">`));
}
export function renderArticleHTML(html,share) {
  if (share.missing) {
    if (share.route === 'event-detail') {
      html = html.replace(/(<article\b[^>]*id="eventDetail"[^>]*)(>)/, '$1 hidden$2');
      html = html.replace(/(id="eventNotFound")\s+hidden/, '$1');
    }
    return html;
  }
  const p=share.item, e=escapeHTML;
  const prefix=share.route==='article'?'article':share.route==='guide-article'?'guideArticle':null;
  if(prefix) {
    for(const [suffix,value] of Object.entries({Title:p.title,Date:p.date,Category:p.category,Lead:p.lead}))
      html=fillSlot(html,prefix+suffix,e(value));
    html=fillSlot(html,prefix+'Body',p.content||'');
    html=imageSlot(html,prefix==='article'?'articleMainImage':'guideArticleImage',p);
  } else if(share.route==='event-detail') {
    // Ship the exact same record as the server-rendered body; cached list data must not hide it.
    const payload = JSON.stringify(p).replace(/</g, '\\u003c');
    html = html.replace(/<script\s+src="event-data\.js[^"]*"><\/script>/, `<script type="application/json" id="eventPageData">${payload}</script>`);
    html = html.replace(/<section\b[^>]*id="eventNotFound"[^>]*>[\s\S]*?<\/section>/, '');
    const ended = (p.endDate || p.startDate) < new Date().toLocaleDateString('sv-SE', {timeZone:'Asia/Tokyo'});
    html = fillSlot(html, 'eventDetailMeta', `<span class="event-type-label">${p.type==='adoption'?'譲渡会':'EVENT'}</span>${ended ? '<span class="event-status">開催済みの記録</span>' : ''}`);
    const date=[p.startDate,p.endDate!==p.startDate?p.endDate:''].filter(Boolean).join(' ～ ');
    for(const [id,value] of Object.entries({eventDetailTitle:p.title,eventDetailDate:date,eventDetailLocation:[p.prefecture,p.place].filter(Boolean).join(' / '),eventInfoDate:date,eventInfoPlace:p.place,eventInfoAddress:p.address})) html=fillSlot(html,id,e(value));
    html=fillSlot(html,'eventDetailContent',p.content||`<p>${e(p.description||'')}</p>`);
    html=fillSlot(html,'eventDetailImage',p.image?`<img src="${e(p.image)}" alt="${e(p.title)}">`:'');
    for(const [id,url,label] of [['eventInfoMap',p.mapUrl,'地図を見る'],['eventInfoOfficial',p.url,'公式情報を見る']])
      html=fillSlot(html,id,/^https?:\/\//.test(url||'')?`<a href="${e(url)}" rel="noopener noreferrer">${label} ↗</a>`:'');
  }
  return html;
}
const listingRoutes = new Map([['blog','blog'],['guide','guide'],['event','events']]);
export function listingHTML(kind,now=Date.now()) {
  const posts=CONTENT[kind].filter(p=>isPublished(p,now)).filter(p=>kind!=='events'||(p.endDate||p.startDate||'')>=new Date(now+9*3600000).toISOString().slice(0,10))
    .sort((a,b)=>kind==='events'?String(a.startDate).localeCompare(String(b.startDate)):String(b.datetime).localeCompare(String(a.datetime)));
  const e=escapeHTML,route=kind==='blog'?'article':kind==='guide'?'guide-article':'event-detail';
  if(kind==='events')return posts.map(p=>`<article class="event-ref-card"><a href="/${route}?id=${encodeURIComponent(p.id)}"><h3>${e(p.title)}</h3></a><p>${e(p.startDate)} ～ ${e(p.endDate||p.startDate)} / ${e(p.place)}</p><p>${e(p.description||'')}</p></article>`).join('')||'<p>公開中の開催予定はありません。</p>';
  return posts.map((p,i)=>{
    const k=kind,href=`/${route}?id=${encodeURIComponent(p.id)}`,img=`<img src="${e(p.image)}" alt="${e(p.title)}" loading="lazy">`,meta=`<time datetime="${e(p.datetime)}">${e(p.date)}</time> <span>${e(p.category)}</span>`;
    if(i===0)return `<article class="${k}-ref-featured"><a class="${k}-ref-featured-link" href="${href}"><div class="${k}-ref-featured-${k==='guide'?'photo':'image'}">${img}</div><div class="${k}-ref-featured-content"><div class="${k}-ref-featured-meta">${meta}</div><h2>${e(p.title)}</h2><p>${e(p.lead)}</p><span>続きを読む →</span></div></a></article>`;
    return `<article class="${k==='blog'?'blog-ref-row':'guide-ref-card'}"><a class="${k}-ref-row-link" href="${href}"><div class="${k==='blog'?'blog-ref-row-image':'guide-ref-card-image'}">${img}</div><div class="${k}-ref-row-content">${meta}<h2>${e(p.title)}</h2></div></a></article>`;
  }).reduce((out,card,i)=>i===0?card:out+(i===1?`<div class="${kind==='blog'?'blog-ref-archive':'guide-ref-archive-wrap'}">`:'')+card,'')+(posts.length>1?'</div>':'');
}
export function sitemapXML(now=Date.now()) {
  const paths=['/','/blog','/guide','/event','/outing','/items','/comic','/about','/privacy','/contact'];
  for(const [kind,route] of [['blog','article'],['guide','guide-article'],['events','event-detail'],['comics','comic-detail'],['outing','outing-article']])
    for(const p of CONTENT[kind]||[]) if(isPublished(p,now))paths.push(`/${route}?id=${encodeURIComponent(p.id)}`);
  for(const s of CONTENT.series||[])if(!s.comingSoon&&CONTENT.comics.some(p=>p.series===s.name&&isPublished(p,now)))paths.push(`/comic-series?series=${encodeURIComponent(s.id)}`);
  return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[...new Set(paths)].map(p=>`<url><loc>${escapeHTML(SITE_ORIGIN+p)}</loc></url>`).join('')+'</urlset>';
}
async function respondIndex(request,env,url) {
  const route=url.pathname.replace(/^\//,'').replace(/\.html$/,'').replace(/\/$/,'');
  if(route!=='sitemap.xml'&&!listingRoutes.has(route))return null;
  if(!['GET','HEAD'].includes(request.method))return new Response('Method Not Allowed',{status:405,headers:{Allow:'GET, HEAD'}});
  if(route==='sitemap.xml')return new Response(request.method==='HEAD'?null:sitemapXML(),{headers:{'Content-Type':'application/xml; charset=utf-8','Cache-Control':'no-store'}});
  const response=await assetResponse(new Request(new URL('/'+route,url.origin),{headers:request.headers}),env);
  if(!response.ok)return response;
  const html=fillSlot(await response.text(),route==='event'?'eventList':route+'List',listingHTML(listingRoutes.get(route)));
  const headers=new Headers(response.headers);headers.set('Content-Type','text/html; charset=utf-8');headers.set('Cache-Control','no-store');
  for(const name of ['etag','content-length','content-encoding'])headers.delete(name);
  return new Response(request.method==='HEAD'?null:html,{headers});
}
