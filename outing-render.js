/* Shared OUTING presentation; content is maintained in outing-features.js. */
var OutingRender = (() => {
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const href = id => 'outing-article.html?id=' + encodeURIComponent(id);
  const canonical = id => 'https://suito-on.com/outing-article?id=' + encodeURIComponent(id);
  function links(html, features) {
    const ids = new Set(features.map(f => f.id));
    return html.replace(/href=(["'])(?:\.\/|\/)?(outing-[a-z0-9-]+)(?:\.html)?(#[^"']*)?\1/g,
      (match, quote, id, hash = '') => ids.has(id) ? `href=${quote}${href(id)}${hash}${quote}` : match);
  }
  function place(id, places) {
    const p = places.find(p => p.id === id);
    if (!p) throw new Error('Unknown OUTING place: ' + id);
    const fields = [['ラン',p.runNote || (p.tags || []).join('・')],...(p.kind === 'stay' ? [['ベッド・添い寝',p.bedNote],['ひとり泊',p.soloNote || '予約条件を施設へ確認してください。']] : []),['料金の目安',p.price],['登録・予約',p.registration]];
    return `<section class="outing-article-block" id="${esc(p.id)}"><p class="outing-eyebrow">${esc(p.area)}</p><h2>${esc(p.name)}</h2><p>${esc(p.intro)}</p><dl>${fields.map(([k,v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl><a class="outing-article-cta" href="outing.html?place=${encodeURIComponent(p.id)}#place-${esc(p.id)}">持ち物・時間も見る →</a><p class="outing-article-sources">情報確認：${esc(p.checked)} / ${(p.sources || []).map(([label,url]) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`).join(' / ')}</p></section>`;
  }
  function cards(features) {
    return features.map(f => `<a class="outing-feature-card" href="${href(f.id)}"><img src="${esc(f.image)}" alt="" loading="lazy"><div><small>${esc(f.label)}</small><h3>${esc(f.title)}</h3><p>${esc(f.description)}</p><span>特集を読む →</span></div></a>`).join('');
  }
  function article(f, places, features) {
    if (!f) return '<h1>記事が見つかりません</h1><p>URLを確認するか、特集一覧から記事を選んでください。</p><a class="outing-article-cta" href="outing.html#features">特集一覧へ戻る →</a>';
    const body = links(f.content.replace(/\{\{place:([\w-]+)\}\}/g, (_,id) => place(id,places)),features);
    return `<nav class="outing-section-nav" aria-label="おでかけの探し方"><a href="outing.html#features">特集を読む</a><a href="outing.html#places">場所を探す</a><a href="event.html">イベント</a></nav><header class="outing-article-heading"><p class="outing-eyebrow">${esc(f.label)}</p><h1>${esc(f.title)}</h1><p>${esc(f.description)}</p><small>情報確認 ${esc(f.date)} / すいとおん。</small></header><figure class="outing-article-hero"><img src="${esc(f.image)}" alt="${esc(f.title)}のイメージイラスト" fetchpriority="high"><figcaption>特集のイメージイラストです。実在施設の外観・設備とは異なります。</figcaption></figure><article class="outing-article-body">${body}</article><a class="outing-article-cta" href="outing.html#features">特集一覧へ戻る →</a>`;
  }
  return {esc,href,canonical,cards,article,links};
})();
if (typeof module !== 'undefined' && module.exports) module.exports = OutingRender;
