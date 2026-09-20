// Generates static feature pages and their index. No packages required.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
function data(file,key){return JSON.parse(vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8')+';JSON.stringify('+key+')',{}, {timeout:2000}));}
const features=data('outing-features.js','outingFeatures'),places=data('outing-data.js','outingPlaces');
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const template=fs.readFileSync(path.join(__dirname,'outing-template.html'),'utf8');
const hub=fs.readFileSync(path.join(__dirname,'outing-hub-template.html'),'utf8');
const ids=new Set(),outputs=[];
function placeBlock(id){
 const p=places.find(p=>p.id===id);if(!p)throw Error('Unknown facility: '+id);
 const fields=[['ラン',p.runNote||p.tags.join('・')],...(p.kind==='stay'?[['ベッド・添い寝',p.bedNote],['ひとり泊',p.soloNote||'予約条件を施設へ確認してください。']]:[]),['料金の目安',p.price],['登録・予約',p.registration]];
 return `<section class="outing-article-block" id="${esc(id)}"><p class="outing-eyebrow">${esc(p.area)}</p><h2>${esc(p.name)}</h2><p>${esc(p.intro)}</p><dl>${fields.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl><a class="outing-article-cta" href="outing.html?place=${encodeURIComponent(id)}#place-${esc(id)}">持ち物・時間も見る →</a><p class="outing-article-sources">情報確認：${esc(p.checked)} / ${p.sources.map(([label,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join(' / ')}</p></section>`;
}
for(const f of features){
 if(!/^outing-[a-z0-9-]+$/.test(f.id)||ids.has(f.id))throw Error('Invalid/duplicate feature id: '+f.id);ids.add(f.id);
 for(const key of ['title','description','image','content'])if(typeof f[key]!=='string'||!f[key])throw Error(f.id+': missing '+key);
 if(!/^images\/[\w./-]+$/.test(f.image)||f.image.includes('..')||!fs.existsSync(path.join(root,f.image)))throw Error('Missing/invalid image: '+f.image);
 const body=f.content.replace(/\{\{place:([\w-]+)\}\}/g,(_,id)=>placeBlock(id));
 if(/\{\{place:/.test(body))throw Error('Invalid facility reference: '+f.id);
 const url='https://suito-on.com/'+f.id;
 const meta=`<meta name="description" content="${esc(f.description)}"><link rel="canonical" href="${url}"><meta property="og:title" content="${esc(f.title)} | すいとおん。"><meta property="og:description" content="${esc(f.description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="https://suito-on.com/${esc(f.image)}">`;
 const main=`<main class="outing-main outing-article"><nav class="outing-section-nav" aria-label="おでかけの探し方"><a href="outing.html#features">特集を読む</a><a href="outing.html#places">場所を探す</a><a href="event.html">イベント</a></nav><header class="outing-article-heading"><p class="outing-eyebrow">${esc(f.label)}</p><h1>${esc(f.title)}</h1><p>${esc(f.description)}</p><small>情報確認 ${esc(f.date)} / すいとおん。</small></header><figure class="outing-article-hero"><img src="${esc(f.image)}" alt="${esc(f.title)}のイメージイラスト" fetchpriority="high"><figcaption>特集のイメージイラストです。実在施設の外観・設備とは異なります。</figcaption></figure><article class="outing-article-body">${body}</article><a class="outing-article-cta" href="outing.html#features">特集一覧へ戻る →</a></main>`;
 outputs.push([f.id+'.html',template.replace('{{TITLE}}',esc(f.title)).replace('{{META}}',meta).replace('{{MAIN}}',()=>main)]);
}
const cards=features.map(f=>`<a class="outing-feature-card" href="${f.id}.html"><img src="${esc(f.image)}" alt="" loading="lazy"><div><small>${esc(f.label)}</small><h3>${esc(f.title)}</h3><p>${esc(f.description)}</p><span>特集を読む →</span></div></a>`).join('');
outputs.push(['outing.html',hub.replace('{{FEATURE_CARDS}}',()=>cards).replace('{{PLAY_COUNT}}',places.filter(p=>p.kind==='play').length).replace('{{STAY_COUNT}}',places.filter(p=>p.kind==='stay').length)]);
for(const [file,html] of outputs)fs.writeFileSync(path.join(root,file),'<!-- Generated from outing-features.js; edit data, not this page. -->\n'+html);
console.log('Built '+features.length+' outing features and hub.');
