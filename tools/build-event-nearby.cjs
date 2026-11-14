// Materialize guidance into article HTML so it is available without JavaScript.
// Edit data/event-nearby.json; this build is idempotent and preserves event copy.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data/event-nearby.json'), 'utf8'));
const file = path.join(root, 'event-data.js');
const source = fs.readFileSync(file, 'utf8');
const ctx = vm.createContext({});
vm.runInContext(source, ctx);
const events = vm.runInContext('calendarEvents', ctx);
// Reuse the owner's generated URLs verbatim, without rebuilding tracking URLs.
const affiliateSource = fs.readFileSync(path.join(root, 'outing-affiliate.js'), 'utf8');
const links = JSON.parse(affiliateSource.match(/const links = (\{[\s\S]*?\n\});/)[1]);
const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const anchor = (url, label, ad = false) => `<a${ad ? ' class="event-nearby-booking"' : ''} href="${esc(url)}" target="_blank" rel="${ad ? 'sponsored nofollow noopener noreferrer' : 'noopener noreferrer'}">${esc(label)} ↗</a>`;
const search = query => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
const start = '<!-- event-nearby:start -->';
const end = '<!-- event-nearby:end -->';
const labels = {cafe:'カフェ・食事', park:'公園・散歩・休憩', stay:'犬と泊まる'};
const fallback = {
  cafe: ['カフェの候補を探す', 'この会場の近くで、犬同伴の条件まで確認した飲食店はまだ掲載していません。地図で候補を探し、店内かテラスか・犬の体格や頭数・ラストオーダーを店舗へ確認してください。', '犬同伴 カフェ'],
  park: ['散歩・休憩場所の候補を探す', 'この会場の近くで、犬と使える範囲まで確認した公園はまだ掲載していません。地図の表示だけで同伴可とは判断せず、管理者の案内で立入範囲・リード・閉園時刻を確認してください。', '公園 犬 散歩'],
  stay: ['このエリアの犬同伴宿を探す', 'この会場の近くで、犬同伴条件まで確認した宿はまだ掲載していません。「ペットホテル」は犬だけを預ける施設の場合もあるため、飼い主と同室で泊まれる宿泊施設を選んでください。', '犬と泊まれる宿']
};
let affiliateArticles = 0;
let curatedArticles = 0;
for (const event of events) {
  const matches = data.venues.filter(p => event.place.includes(p.match));
  if (matches.length > 1) throw new Error(`Ambiguous venue: ${event.id}`);
  const profile = matches[0] || {area: event.address || `${event.prefecture} ${event.place}`, tip: '会場を起点に寄り道を計画しましょう。再入場の可否と駐車場の利用時間を確認してから、食事や散歩へ。'};
  const affiliate = Object.keys(labels).some(k => data.spots[profile[k]]?.affiliateId);
  if (affiliate) affiliateArticles++;
  if (Object.keys(labels).some(k => profile[k])) curatedArticles++;
  const cards = Object.entries(labels).map(([kind, label], index) => {
    const spot = data.spots[profile[kind]];
    if (profile[kind] && !spot) throw new Error(`Unknown spot: ${profile[kind]}`);
    let body;
    if (spot) {
      if (spot.affiliateId && !links[spot.affiliateId]) throw new Error(`Missing affiliate: ${spot.affiliateId}`);
      const directions = 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(`${event.prefecture} ${event.place}`) + '&destination=' + encodeURIComponent(`${spot.area} ${spot.name}`);
      body = `<h4>${esc(spot.name)}</h4><p class="event-nearby-area">${esc(spot.area)}</p><p>${esc(spot.note)}</p><div class="event-nearby-links">${anchor(spot.url, '公式の利用条件を見る')}${anchor(directions, '会場からの経路を見る')}</div>`;
      if (spot.affiliateId) body += `<div class="event-nearby-reservation">${anchor(links[spot.affiliateId], '楽天トラベルで空室・プランを見る（広告）', true)}<p>犬同伴の客室・プランを選び、体格・頭数・接種証明書・犬の追加料金を確認してください。表示されるすべてのプランが犬同伴に対応するとは限りません。</p></div>`;
      if (spot.extraSource) body += `<p>${anchor(spot.extraSource, '施設共用部の犬同伴ルール')}</p>`;
      body += `<p class="event-nearby-checked">公式情報の確認：${esc(spot.checked)}／未訪問の候補です。</p>`;
    } else {
      const [heading, note, query] = fallback[kind];
      body = `<h4>${heading}</h4><p>${note}</p>${anchor(search(`${profile.area} ${query}`), `${profile.area}で地図検索`)}`;
      if (kind === 'stay') body += `<p>${anchor('https://travel.rakuten.co.jp/pet/', '楽天トラベルのペットと泊まれる宿特集を見る')}<br><small>宿探し用の通常リンクです。空室・犬同伴を保証するものではありません。</small></p>`;
    }
    return `<div class="event-nearby-card" id="nearby-${kind}" data-nearby-kind="${kind}" data-nearby-status="${spot ? 'curated' : 'search'}"><h3><span>${String(index + 1).padStart(2, '0')}</span>${label}</h3>${body}</div>`;
  }).join('');
  const section = `<section class="event-nearby" id="nearby" aria-labelledby="nearby-title"><p class="event-nearby-label">イベントの前後に、もうひと休み。</p><h2 id="nearby-title">${esc(profile.area)}で、犬と寄り道</h2><p>${esc(profile.tip)}</p>${affiliate ? '<p class="affiliate-disclosure">この案内には楽天アフィリエイトの広告リンクが含まれます。</p>' : ''}<nav class="event-nearby-nav" aria-label="寄り道案内"><a href="#nearby-cafe">カフェ</a><a href="#nearby-park">公園・休憩</a><a href="#nearby-stay">宿泊</a></nav>${cards}<p class="event-nearby-footnote">候補は公式案内をもとに編集しています。未確認の項目は検索の入口として区別しています。地図の経路・所要時間、当日の営業や犬の受入れは出発前に確認を。過去のイベント記事でも、この寄り道案内は上記の確認日時点の情報です。</p><p><a href="outing.html">OUTINGで犬とのお出かけ先をもっと見る →</a></p></section>`;
  event.content = (event.content || '').replace(/<!-- event-nearby:start -->[\s\S]*?<!-- event-nearby:end -->/g, '').replace(/<section class="event-nearby"[^>]*>[\s\S]*?<\/section>/g, '').trimEnd() + '\n' + start + section + end;
}
const prefix = source.slice(0, source.indexOf('const calendarEvents'));
fs.writeFileSync(file, prefix + 'const calendarEvents = ' + JSON.stringify(events, null, 2) + ';\n');
console.log(`Nearby guidance: ${events.length} events; ${curatedArticles} with researched places; ${affiliateArticles} with existing Rakuten links.`);
