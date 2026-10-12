/* Optional cards: only render brands confirmed for this particular event. */
(() => {
  const id = new URLSearchParams(location.search).get('id');
  const data = typeof eventExhibitorsData === 'undefined' ? null : eventExhibitorsData;
  const listing = data?.events?.[id];
  const anchor = document.getElementById('eventDetailContent');
  if (!listing || !anchor) return;
  const brands = listing.brandIds.map(key => data.brands[key]).filter(Boolean);
  if (!brands.length) return;
  function element(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  }
  function link(label, url) {
    const el = element('a', '', label + ' ↗');
    try {
      const parsed = new URL(url);
      if (!['https:', 'http:'].includes(parsed.protocol)) return null;
      el.href = parsed.href;
    } catch { return null; }
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
    return el;
  }
  const section = element('section', 'event-exhibitors');
  section.setAttribute('aria-labelledby', 'eventExhibitorsTitle');
  const title = element('h2', '', '出展ブランドをチェック');
  title.id = 'eventExhibitorsTitle';
  section.append(title, element('p', 'event-exhibitors-intro',
    `公式の出展一覧から${listing.partial ? '、まず' : ''}${brands.length}店をご紹介。何を扱うお店か、サイズの確認ポイントをまとめました。`));
  const grid = element('div', 'event-exhibitors-grid');
  for (const brand of brands) {
    const card = element('article', 'event-exhibitor-card');
    card.append(element('p', 'event-exhibitor-category', brand.category), element('h3', '', brand.name));
    const tags = element('ul', 'event-exhibitor-tags');
    for (const tag of brand.tags || []) tags.append(element('li', '', tag));
    card.append(tags, element('p', '', brand.description), element('p', 'event-exhibitor-size', brand.sizeNote));
    const links = element('div', 'event-exhibitor-links');
    const official = link(brand.linkLabel, brand.url);
    const source = link('主催者の店舗紹介', brand.sourceUrl);
    if (official) links.append(official);
    if (source) links.append(source);
    card.append(links);
    grid.append(card);
  }
  section.append(grid);
  const source = link('この開催回の出展一覧をすべて見る', listing.sourceUrl);
  if (source) section.append(source);
  section.append(element('p', 'event-exhibitors-note',
    `確認日：${listing.checkedAt}。ブランドの通常の取扱情報を含みます。当日の販売商品・サイズ・在庫は店舗へご確認ください。出展の変更は主催者の最新案内へ。`));
  anchor.before(section);
})();
