(() => {
 const list=document.getElementById('outingList'); if(!list)return;
 const $=id=>document.getElementById(id);
 const controls={kind:$('outingKind'),region:$('outingRegion'),q:$('outingSearch'),indoor:$('indoorOnly'),free:$('freeOnly'),visited:$('visitedOnly'),solo:$('soloOnly'),bed:$('bedOnly')};
 const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 [...new Set(outingPlaces.map(p=>p.prefecture))].sort((a,b)=>a.localeCompare(b,'ja')).forEach(r=>controls.region.add(new Option(r,r)));
 let selectedPlace='';
 function restore(){
  const params=new URLSearchParams(location.search);
  controls.kind.value=['play','stay'].includes(params.get('kind'))?params.get('kind'):'all';
  controls.region.value=[...controls.region.options].some(o=>o.value===params.get('region'))?params.get('region'):'all';
  controls.q.value=params.get('q')||'';
  ['indoor','free','visited','solo','bed'].forEach(k=>controls[k].checked=params.get(k)==='1');
  selectedPlace=outingPlaces.some(p=>p.id===params.get('place'))?params.get('place'):'';
  if(selectedPlace){controls.kind.value='all';controls.region.value='all';controls.q.value='';['indoor','free','visited','solo','bed'].forEach(k=>controls[k].checked=false);}
 }
 function render(){
  const query=controls.q.value.trim().toLocaleLowerCase();
  const places=outingPlaces.filter(p=>(!selectedPlace||p.id===selectedPlace)&&(controls.kind.value==='all'||p.kind===controls.kind.value)&&(controls.region.value==='all'||p.prefecture===controls.region.value)&&(!query||[p.name,p.area,...p.tags].join(' ').toLocaleLowerCase().includes(query))&&(!controls.indoor.checked||p.tags.includes('屋内'))&&(!controls.free.checked||p.free)&&(!controls.visited.checked||p.visited)&&(!controls.solo.checked||p.tags.includes('1名プランあり'))&&(!controls.bed.checked||(p.kind==='stay'&&p.bed===true)));
  $('outingCount').textContent=`${places.length}件の施設${selectedPlace?' · 指定した施設を表示中（リセットですべて表示）':''}`;
  list.innerHTML=places.length?places.map(p=>`<article class="outing-card" id="place-${esc(p.id)}"><div class="outing-card-top"><span>${esc(p.area)}</span><span>${p.kind==='stay'?'STAY':'PLAY'}</span></div><h3>${esc(p.name)}</h3><div class="outing-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><p class="outing-intro">${esc(p.intro)}</p><dl>${p.kind==='stay'?`<dt>ベッド・添い寝</dt><dd>${esc(p.bedNote)}</dd>`:''}<dt>料金の目安</dt><dd>${esc(p.price)}</dd><dt>登録・予約</dt><dd>${esc(p.registration)}</dd></dl><details ${selectedPlace?'open':''}><summary>持ち物・時間・注意点</summary><dl><dt>時間</dt><dd>${esc(p.time)}</dd><dt>持ち物・受入条件</dt><dd>${esc(p.documents)}</dd><dt>ここも確認</dt><dd>${esc(p.note)}</dd></dl></details><div class="outing-sources"><p>情報確認：${esc(p.checked)} · ${p.visited?'訪問体験＋施設情報':'公式情報をもとにした未訪問の候補'}</p>${p.sources.map(([label,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join('')}</div><a class="outing-place-link" href="outing.html?place=${encodeURIComponent(p.id)}#place-${esc(p.id)}">この施設へのリンク →</a></article>`).join(''):'<p class="outing-empty">この条件に合う掲載施設はまだありません。<br>条件をひとつ外すか、リセットして探してみてください。</p>';
 }
 function update(){
  selectedPlace='';const params=new URLSearchParams();
  ['kind','region'].forEach(k=>{if(controls[k].value!=='all')params.set(k,controls[k].value);});
  if(controls.q.value.trim())params.set('q',controls.q.value.trim());
  ['indoor','free','visited','solo','bed'].forEach(k=>{if(controls[k].checked)params.set(k,'1');});
  history.replaceState(null,'',location.pathname+(params.size?'?'+params:'')+'#places');render();
 }
 $('outingFilters').addEventListener('submit',e=>e.preventDefault());
 Object.entries(controls).forEach(([k,c])=>c.addEventListener(k==='q'?'input':'change',update));
 $('outingReset').addEventListener('click',()=>{controls.kind.value='all';controls.region.value='all';controls.q.value='';['indoor','free','visited','solo','bed'].forEach(k=>controls[k].checked=false);update();});
 function revealHash(){if(location.hash){try{document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({block:'start'});}catch{}}}
 window.addEventListener('popstate',()=>{restore();render();revealHash();});restore();render();if(location.hash)requestAnimationFrame(revealHash);
})();
