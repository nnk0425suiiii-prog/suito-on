import fs from 'node:fs';
import vm from 'node:vm';
import os from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
const root=process.cwd();
const ctx=vm.createContext({Date,Intl,URL,URLSearchParams});
for(const f of ['publish-schedule.js','blog-data.js','guide-data.js','comic-data.js','event-data.js','outing-features.js','outing-data.js'])vm.runInContext(fs.readFileSync(f,'utf8'),ctx);
const content=vm.runInContext('({blog:blogPosts,guide:guidePosts,events:calendarEvents,comics:comicData,series:comicSeriesData,outing:outingFeatures,outingPlaces})',ctx);content.socialImages={};
const source='const CONTENT='+JSON.stringify(content)+';\n'+fs.readFileSync('outing-render.js','utf8')+'\n'+fs.readFileSync('edge/sharing-runtime.mjs','utf8');
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'suito-render-'));
const workerFile=path.join(temp,'worker.mjs');
fs.writeFileSync(workerFile,source);
const mod=await import(pathToFileURL(workerFile));
fs.rmSync(temp,{recursive:true});
const now=Date.parse('2026-11-04T15:00:00+09:00');
let count=0;
for(const [kind,route] of [['blog','article'],['guide','guide-article'],['events','event-detail']]) {
 for(const p of content[kind]) {
  const share=mod.resolveShare(new URL('https://suito-on.com/'+route+'?id='+encodeURIComponent(p.id)),now);
  if(share.missing)continue;
  const html=mod.renderArticleHTML(mod.rewriteSharingHTML(fs.readFileSync(route+'.html','utf8'),share),share);
  assert(html.includes(p.content||p.description));assert(html.includes(p.title.replaceAll('&','&amp;')));
  assert(!/<meta name="robots" content="noindex/.test(html));count++;
 }
}
const map=mod.sitemapXML(now);
assert(map.startsWith('<?xml'));assert(map.includes('aburatsubo-first-trip'));
for(const p of [...content.blog,...content.guide])if(p.publishDate&&Date.parse(p.publishDate)>now){assert(!map.includes(encodeURIComponent(p.id)));}
for(const kind of ['blog','guide','events'])assert(mod.listingHTML(kind,now).includes('<a '));
assert(mod.resolveShare(new URL('https://suito-on.com/article?id=%3Cscript%3E'),now).missing);
const env={ASSETS:{fetch:async(req)=>{
 assert(!req.headers.has('if-none-match'));const u=new URL(req.url);let p=u.pathname.replace(/^\//,'');if(!p.endsWith('.html'))p+='.html';
 try{return new Response(fs.readFileSync(root+'/'+p),{headers:{'content-type':'text/html','etag':'old'}})}catch{return new Response('',{status:404})}
}}};
for(const path of ['/article?id=aburatsubo-first-trip','/guide-article?id=heartworm-prevention','/event-detail?id=tokyo-wanwan-halloween-2026','/blog','/guide','/event','/sitemap.xml']){
 const r=await mod.default.fetch(new Request('https://suito-on.com'+path,{headers:{'if-none-match':'old'}}),env);assert.equal(r.status,200,path);const body=await r.text();assert(body.length>500);assert(!r.headers.has('etag'));
 const head=await mod.default.fetch(new Request('https://suito-on.com'+path,{method:'HEAD'}),env);assert.equal((await head.text()).length,0);
}
assert.equal((await mod.default.fetch(new Request('https://suito-on.com/article?id=missing'),env)).status,404);
console.log('PASS: '+count+' published articles, scheduled exclusions, listings, sitemap, HTTP/HEAD, missing IDs and cache validators');
