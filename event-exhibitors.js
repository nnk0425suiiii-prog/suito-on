/* All event IDs have a verification state; shop names never imply size suitability. */
(() => {
  const id = new URLSearchParams(location.search).get('id');
  const data = typeof eventExhibitorsData === 'undefined' ? null : eventExhibitorsData;
  const listing = data?.events?.[id];
  const anchor = document.getElementById('eventDetailContent');
  if (!listing || !anchor) return;
  const brands = (listing.brandIds || []).map(key => data.brands[key]).filter(Boolean).sort((a, b) => {
    const priority = brand => /^(飼い主向け|住まい|車・)/.test(brand.category) ? 2 : brand.category === '出展ブース' ? 1 : 0;
    return priority(a) - priority(b);
  });
  function element(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    return el;
  }
  function link(label, url) {
    try {
      const parsed = new URL(url);
      if (!['https:', 'http:'].includes(parsed.protocol)) return null;
      const el = element('a', '', label + ' ↗');
      el.href = parsed.href;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
      return el;
    } catch { return null; }
  }
  const section = element('section', 'event-exhibitors');
  section.setAttribute('aria-labelledby', 'eventExhibitorsTitle');
  const title = element('h2', '', '出展ブランドをチェック');
  title.id = 'eventExhibitorsTitle';
  section.append(title, element('p', 'event-exhibitors-intro', listing.note));
  if (brands.length) {
    const controls = element('div', 'event-exhibitors-controls');
    const searchLabel = element('label', '', 'お店・商品を探す');
    const search = element('input');
    search.type = 'search';
    search.placeholder = '店名、おやつ、リードなど';
    searchLabel.append(search);
    const sizeLabel = element('label', '', 'サイズの案内');
    const size = element('select');
    for (const [value, text] of [['all', 'すべて'], ['small', '小型犬向けの案内あり'], ['large', '大型犬向けの案内あり'], ['unknown', 'サイズ・対象を要確認']]) {
      const option = element('option', '', text);
      option.value = value;
      size.append(option);
    }
    sizeLabel.append(size);
    controls.append(searchLabel, sizeLabel);
    const count = element('p', 'event-exhibitors-count');
    count.setAttribute('role', 'status');
    count.setAttribute('aria-live', 'polite');
    const grid = element('div', 'event-exhibitors-grid');
    const more = element('button', 'event-exhibitors-more', 'もっと見る');
    more.type = 'button';
    let limit = 12;
    const normalize = text => String(text || '').normalize('NFKC').toLocaleLowerCase('ja');
    function render() {
      const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
      const matches = brands.filter(brand => {
        const content = normalize([brand.name, brand.category, brand.description, brand.sizeNote, ...(brand.tags || [])].join(' '));
        const sizes = brand.sizes || [];
        return words.every(word => content.includes(word)) &&
          (size.value === 'all' || (size.value === 'unknown' ? !sizes.length : sizes.includes(size.value)));
      });
      grid.replaceChildren();
      for (const brand of matches.slice(0, limit)) {
        const card = element('article', 'event-exhibitor-card');
        card.append(element('p', 'event-exhibitor-category', brand.category), element('h3', '', brand.name));
        const tags = element('ul', 'event-exhibitor-tags');
        for (const tag of brand.tags || []) tags.append(element('li', '', tag));
        card.append(tags, element('p', 'event-exhibitor-description', brand.description));
        const details = element('details', 'event-exhibitor-details');
        details.append(element('summary', '', 'サイズ・出店日・出典'), element('p', 'event-exhibitor-size', brand.sizeNote));
        if (brand.attendanceNote) details.append(element('p', '', `出店日：${brand.attendanceNote}`));
        const links = element('div', 'event-exhibitor-links');
        const official = link(brand.linkLabel || '公式サイト', brand.url);
        const source = link('店舗紹介の出典', brand.profileSourceUrl || brand.sourceUrl);
        if (official) links.append(official);
        const photoSource = link('写真・店舗紹介を見る', brand.profileSourceUrl || brand.sourceUrl);
        if (photoSource) links.append(photoSource);
        if (source) details.append(source);
        card.append(details);
        card.append(links);
        grid.append(card);
      }
      count.textContent = matches.length ? `${matches.length}件中 ${Math.min(limit, matches.length)}件を表示（掲載 ${brands.length}件）` : '条件に合うお店はありません。検索語やサイズ条件を変えてお試しください。';
      more.hidden = matches.length <= limit;
      more.textContent = `次の${Math.min(12, matches.length - limit)}件を見る`;
    }
    search.addEventListener('input', () => { limit = 12; render(); });
    size.addEventListener('change', () => { limit = 12; render(); });
    more.addEventListener('click', () => { limit += 12; render(); });
    section.append(controls, element('p', 'event-exhibitors-help', 'サイズ表示は公式に確認できた商品・サービスの案内です。お店の全商品への対応を示すものではありません。'), count, grid, more);
    render();
  } else {
    section.append(element('p', 'event-exhibitors-pending', '出展店の詳細：確認でき次第掲載'));
  }
  const source = link(brands.length ? '主催者・出店元の案内を見る' : '公式の最新案内を見る', listing.sourceUrl);
  if (source) section.append(source);
  section.append(element('p', 'event-exhibitors-note',
    `確認日：${listing.checkedAt}。${brands.length ? '通常の取扱情報を含みます。当日の販売商品・サイズ・在庫・出店日は各店舗へご確認ください。' : ''}出展の変更は主催者の最新案内へ。`));
  // Give the shop board full page width, while keeping the article readable.
  const layout = anchor.closest('.event-detail-layout');
  if (layout) layout.before(section); else anchor.before(section);
})();
