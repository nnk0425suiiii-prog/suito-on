import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=fs.readFileSync(path.join(root,'_worker.js'),'utf8');
const mod=await import('data:text/javascript;base64,'+Buffer.from(source).toString('base64'));
const now=Date.parse('2026-09-17T12:00:00+09:00');
const map=JSON.parse(fs.readFileSync(path.join(root,'edge/social-images.json')));
let tested=0;for(const [key,row]of Object.entries(map)){
 const [route,id]=key.split(':');const query=route==='comic-series'?'series':'id';
 const url=new URL(`https://suito-on.com/${route}.html?${query}=${encodeURIComponent(id)}`);
 const share=mod.resolveShare(url,now);assert.ok(share);if(share.missing)continue;
 assert.equal(share.image,'https://suito-on.com/'+row.image);assert.ok(fs.existsSync(path.join(root,row.image)));
 const original=fs.readFileSync(path.join(root,route+'.html'),'utf8');const html=mod.rewriteSharingHTML(original,share);
 assert.equal((html.match(/property="og:image"/g)||[]).length,1);assert.equal((html.match(/<title>/g)||[]).length,1);
 assert.ok(html.includes(share.image));assert.ok(share.width>0);tested++;
}
assert.ok(mod.resolveShare(new URL('https://suito-on.com/comic-detail?id=4'),now).missing);
assert.ok(mod.resolveShare(new URL('https://suito-on.com/article?id=DOES-NOT-EXIST'),now).missing);
assert.equal(mod.resolveShare(new URL('https://suito-on.com/article?id=about-sui'),now).id,'introduce-sui');
const env={ASSETS:{fetch:async req=>{const route=new URL(req.url).pathname.slice(1);const p=path.join(root,route+'.html');return fs.existsSync(p)?new Response(fs.readFileSync(p,'utf8'),{headers:{'content-type':'text/html','etag':'test'}}):new Response('missing',{status:404});}}};
const response=await mod.default.fetch(new Request('https://suito-on.com/article.html?id=first-blog'),env);assert.equal(response.status,200);assert.ok((await response.text()).includes('property="og:image"'));assert.equal(response.headers.get('etag'),null);
const missing=await mod.default.fetch(new Request('https://suito-on.com/article?id=nope'),env);assert.equal(missing.status,404);
const head=await mod.default.fetch(new Request('https://suito-on.com/article?id=first-blog',{method:'HEAD'}),env);assert.equal(await head.text(),'');
console.log(`PASS: ${tested} published share pages, future/missing IDs, alias, GET/HEAD metadata response; no live API writes.`);
