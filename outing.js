(() => {
 const list = document.getElementById('outingList');
 if (!list) return;
 const requestedKind = new URLSearchParams(location.search).get('kind');
 let kind = ['play','stay'].includes(requestedKind) ? requestedKind : 'all';
 function updateNavigation() { document.querySelectorAll('[data-section]').forEach(a => { if(a.dataset.section === kind) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); }); }
 updateNavigation();
 const indoor = document.getElementById('indoorOnly');
 const solo = document.getElementById('soloOnly');
 const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 function render() {
  const places = outingPlaces.filter(p => (kind === 'all' || p.kind === kind) && (!indoor.checked || p.tags.includes('屋内')) && (!solo.checked || p.tags.includes('1名プランあり')));
  document.getElementById('outingCount').textContent = `${places.length}件の候補`;
  list.innerHTML = places.length ? places.map(p => `<article class="outing-card"><div class="outing-card-top"><span>${esc(p.area)}</span><span>${p.kind === 'stay' ? 'STAY' : 'PLAY'}</span></div><h2>${esc(p.name)}</h2><div class="outing-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><p class="outing-intro">${esc(p.intro)}</p><dl><dt>料金の目安</dt><dd>${esc(p.price)}</dd><dt>登録・予約</dt><dd>${esc(p.registration)}</dd></dl><details><summary>持ち物・所要時間・注意点</summary><dl><dt>時間</dt><dd>${esc(p.time)}</dd><dt>持ち物・受入条件</dt><dd>${esc(p.documents)}</dd><dt>ここも確認</dt><dd>${esc(p.note)}</dd></dl></details><div class="outing-sources"><p>情報源・詳細を確認 ↗</p>${p.sources.map(([label,url])=>`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join('')}</div></article>`).join('') : '<p class="outing-empty">この条件の組み合わせは、まだ確認できていません。<br>条件をひとつ外して探してみてください。</p>';
 }
 document.querySelectorAll('[data-kind]').forEach(button=>button.addEventListener('click',()=>{kind=button.dataset.kind;document.querySelectorAll('[data-kind]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render();}));
 indoor.addEventListener('change',render);solo.addEventListener('change',render);
 document.getElementById('outingReset').addEventListener('click',()=>{kind='all';history.replaceState(null,'','outing.html');updateNavigation();indoor.checked=false;solo.checked=false;document.querySelectorAll('[data-kind]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.kind==='all')));render();});
 render();
})();
