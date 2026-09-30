// Generates only the OUTING index and one common article template.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),render=require(path.join(root,'outing-render.js'));
const data=(file,key)=>JSON.parse(vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8')+';JSON.stringify('+key+')',{}, {timeout:2000}));
const features=data('outing-features.js','outingFeatures'),places=data('outing-data.js','outingPlaces');
const ids=new Set();
for(const f of features){
 if(!/^outing-[a-z0-9-]+$/.test(f.id)||f.id==='outing-article'||ids.has(f.id))throw Error('Invalid/duplicate feature id: '+f.id);ids.add(f.id);
 for(const key of ['title','description','image','content'])if(typeof f[key]!=='string'||!f[key])throw Error(f.id+': missing '+key);
 if(!/^images\/[\w./-]+$/.test(f.image)||f.image.includes('..')||!fs.existsSync(path.join(root,f.image)))throw Error('Missing/invalid image: '+f.image);
 if(/\{\{place:/.test(render.article(f,places,features)))throw Error('Invalid facility reference: '+f.id);
}
const scripts='<script src="outing-features.js?v=20260930-common"></script><script src="outing-render.js?v=20260930-common"></script><script src="outing-article.js?v=20260930-common"></script>';
const template=fs.readFileSync(path.join(__dirname,'outing-template.html'),'utf8');
const article=template.replace('{{TITLE}}','OUTING').replace('{{META}}','<meta name="robots" content="noindex, follow">')
 .replace('{{MAIN}}','<main id="outingArticle" class="outing-main outing-article"><!-- OUTING_CONTENT_START --><p>記事を読み込んでいます。</p><noscript>記事を表示するにはJavaScriptを有効にしてください。</noscript><!-- OUTING_CONTENT_END --></main>')
 .replace('</body>','<script src="outing-data.js?v=20260930-common"></script>'+scripts+'\n</body>');
const hub=fs.readFileSync(path.join(__dirname,'outing-hub-template.html'),'utf8')
 .replace('{{FEATURE_CARDS}}',()=>render.cards(features)).replace('{{PLAY_COUNT}}',places.filter(p=>p.kind==='play').length).replace('{{STAY_COUNT}}',places.filter(p=>p.kind==='stay').length)
 .replace('</body>',scripts+'\n</body>');
for(const [file,body] of [['outing.html',hub],['outing-article.html',article]])fs.writeFileSync(path.join(root,file),'<!-- OUTING common-page build; edit outing-features.js to add articles. -->\n'+body);
console.log('Built OUTING index + one common article page for '+features.length+' features.');
