/* EVENT DATA — イベント本文・開催情報
 * 追加時は既存の1件をコピーし、ID・日時・会場・本文・情報元を更新。
 * IDはURLといいねに使用するため、公開後は変更しないでください。
 * contentの構成：紹介 / 楽しみ方 / 参加情報 / アクセス / おでかけメモ / 情報元。
 * 未確認事項は「未確認」と明記。過去回・他会場の情報を流用しないこと。
 * sourcesは確認先、editorialCheckedAtは編集日（全項目の確認完了日ではありません）。
 */
const calendarEvents = [
  {
    id: "tokyowanwansumeerfestival2026",
    title: "東京わんわん夏まつり2026",
    type: "event",
    status: "scheduled",
    startDate: "2026-09-12",
    endDate: "2026-09-13",
    region: "kanto",
    prefecture: "千葉県",
    place: "幕張メッセ 国際展示場 展示ホール9",
    address: "千葉県千葉市美浜区中瀬2-1",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=幕張メッセ 国際展示場 展示ホール9",
    image: "images/event/sui-on-tokyowanwansumeerfestival2026.jpg",
    description: "冷房のある屋内で、おやつや犬用品を見て回れる夏のマーケット。幕張メッセの展示ホール9が会場で、天候に左右されにくいおでかけ先です。",
    content: `
<p>冷房のある屋内で、おやつや犬用品を見て回れる夏のマーケット。幕張メッセの展示ホール9が会場で、天候に左右されにくいおでかけ先です。</p>
<h2>このイベントの楽しみ方</h2>
<p>買い物に加え、大抽選会と無料撮影スポットが案内されています。写真を残したい方は、買い物の途中に撮影の時間も取りたいイベントです。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>11:00〜17:00</dd></div>
<div><dt>料金</dt><dd>500円。小学生以下・犬は無料。</dd></div>
<div><dt>雨の日</dt><dd>冷房完備の屋内会場。交通への影響や開催変更は直前の公式案内を確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>犬の入場は無料。ワクチン証明書やマナーウェアの要否、再入場の条件は主催者に確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>幕張メッセの国際展示場・展示ホール9へ。展示ホール1〜8とは入口が異なるため、会場名を確認して向かいましょう。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>撮影用のおやつと、買い物中に休めるカートやキャリーがあると過ごし方を選べます。会場内のルールに合わせて使いましょう。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://www.m-messe.co.jp/event/detail/8830" target="_blank" rel="noopener noreferrer">幕張メッセ・当該イベント案内 ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    url: "https://www.m-messe.co.jp/event/detail/8830",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "",
    sources: [{"label": "幕張メッセ・当該イベント案内", "url": "https://www.m-messe.co.jp/event/detail/8830"}]
  },

  {
    id: "shonan-dog-bousai-festa-2026",
    title: "湘南DOG BOUSAI FESTA",
    type: "event",
    status: "scheduled",
    startDate: "2026-09-13",
    endDate: "2026-09-13",
    region: "kanto",
    prefecture: "神奈川県",
    place: "神台公園（テラスモール湘南隣）",
    address: "",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=神台公園（テラスモール湘南隣）",
    image: "images/event/sui-on-shonan-dog-bousai-festa-2026.jpg",
    description: "愛犬との外出を楽しみながら、災害時の備えを考えるイベント。会場は藤沢市の神台公園で、テラスモール湘南の隣です。",
    content: `
<p>愛犬との外出を楽しみながら、災害時の備えを考えるイベント。会場は藤沢市の神台公園で、テラスモール湘南の隣です。</p>
<h2>このイベントの楽しみ方</h2>
<p>主催者は、起震車体験、ペット避難やハザードマップを紹介する防災ブース、非常用電源としてのEV車展示を案内しています。普段の買い物とは違う視点で、犬との暮らしを見直すきっかけになりそうです。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>9:00〜17:30</dd></div>
<div><dt>料金</dt><dd>入場無料（イベント紹介ページ掲載。体験ごとの料金は別途確認）。</dd></div>
<div><dt>雨の日</dt><dd>屋外会場。雨天時の開催判断は主催者の発信で確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>犬同伴での参加方法、体験中に犬を待たせる場所、各企画の受付条件は現地案内に従ってください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>神台公園（テラスモール湘南隣）。商業施設の駐車場がイベント用に無料になるとは限らないため、車の場合は利用条件を確認してください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>普段使っている防災用品や避難時の悩みをメモしていくと、ブースで具体的に相談しやすくなります。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://doghuglife.com/posts/dog-disaster-prevention-goods-checklist" target="_blank" rel="noopener noreferrer">主催 Dog Hug Life・防災イベント案内 ↗</a></li>
<li><a href="https://www.eventfestival.info/shonan/shonan-dog-bousai-festa-2026/" target="_blank" rel="noopener noreferrer">料金の参考：湘南イベント情報（第三者） ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    url: "https://doghuglife.com/posts/dog-disaster-prevention-goods-checklist",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "",
    sources: [{"label": "主催 Dog Hug Life・防災イベント案内", "url": "https://doghuglife.com/posts/dog-disaster-prevention-goods-checklist"}, {"label": "料金の参考：湘南イベント情報（第三者）", "url": "https://www.eventfestival.info/shonan/shonan-dog-bousai-festa-2026/"}]
  },

  {
    id: "tama-dog-fes-tsuruma-2026",
    startDate: "2026-09-27",
    endDate: "2026-09-27",
    type: "event",
    status: "scheduled",
    title: "TAMA DOG FES in 南町田鶴間公園",
    region: "kanto",
    prefecture: "東京都",
    place: "南町田鶴間公園 水道みち",
    address: "東京都町田市鶴間3丁目1-1",
    image: "images/event/sui-on-tama-dog-fes-tsuruma-2026.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=南町田鶴間公園",
    url: "https://tamadog.jp/tama-events/tamadog-fes-tsuruma-park-2026/",
    content: `
<p>南町田鶴間公園で、おやつやグッズの買い物と、犬との暮らしに役立つ体験を楽しめるイベント。入場無料なので、まずは会場を見て回りたい方にも選びやすい一日です。</p>
<h2>このイベントの楽しみ方</h2>
<p>公式出店案内には、撮影ブース、しつけ相談、ペット防災に関するブースが掲載されています。買い物だけでなく、日頃の小さな困りごとを相談したい方にも。個別体験の料金や受付時間は各ブースで確認しましょう。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>11:00〜16:00</dd></div>
<div><dt>料金</dt><dd>入場無料。買い物・有料体験は別途。</dd></div>
<div><dt>雨の日</dt><dd>変更・中止は公式サイトと公式Instagramで案内。</dd></div>
<div><dt>犬連れの条件</dt><dd>公園内ではリードを着用し、体験ブースの参加条件を確認。証明書やマナーウェアの要否は公式案内を確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>東京都町田市鶴間3丁目1-1、南町田鶴間公園。公園全体とイベント会場の位置は公式会場案内で確認してください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>撮影や相談をしたい場合は、先に受付を見てから買い物へ。屋外なので、飲み水と休憩を取りやすい準備を。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://tamadog.jp/tama-events/tamadog-fes-tsuruma-park-2026/" target="_blank" rel="noopener noreferrer">TAMA DOG・2026年開催案内 ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    description: "南町田鶴間公園で、おやつやグッズの買い物と、犬との暮らしに役立つ体験を楽しめるイベント。入場無料なので、まずは会場を見て回りたい方にも選びやすい一日です。",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "",
    sources: [{"label": "TAMA DOG・2026年開催案内", "url": "https://tamadog.jp/tama-events/tamadog-fes-tsuruma-park-2026/"}]
  },

  {
    id: "inu-no-yomatsuri-laketown-2026",
    startDate: "2026-09-19",
    endDate: "2026-09-20",
    type: "event",
    status: "scheduled",
    title: "いぬの夜まつり",
    region: "kanto",
    prefecture: "埼玉県",
    place: "レイクタウン見田方遺跡公園",
    address: "埼玉県越谷市レイクタウン8丁目",
    image: "images/event/sui-on-inu-no-yomatsuri-laketown-2026.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=見田方遺跡公園",
    url: "https://www.inutowatashi.com/event",
    content: `
<p>夕方から夜に開かれる、越谷レイクタウンのドッグイベント。見田方遺跡公園を会場に、愛犬との夜のおでかけを楽しめます。</p>
<h2>このイベントの楽しみ方</h2>
<p>参加を告知しているワラビー動物病院グループは、9月19日に歯のお手入れに関するブースを出す予定です。気になる出店者がいる方は、土日どちらに出店するかもチェックすると予定を立てやすくなります。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>両日15:30〜20:00（出店者の開催案内で確認）</dd></div>
<div><dt>料金</dt><dd>入場料は主催者の最新案内で確認。</dd></div>
<div><dt>雨の日</dt><dd>屋外・夜間の開催。降雨や強風時の実施判断は主催者発信を確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>夜間はリードと犬の位置が分かるライトを用意するのがおすすめです。証明書・カート・マナーウェアの条件は主催者に確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>埼玉県越谷市レイクタウン8丁目・見田方遺跡公園。夜の帰り道と駐車場の営業時間も出発前に確認しましょう。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>夕方でも気温や路面の熱は残ります。明るいうちに会場の出入口を確認し、犬の様子を見ながら短めの滞在から。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://www.inutowatashi.com/event" target="_blank" rel="noopener noreferrer">主催者・イベント案内 ↗</a></li>
<li><a href="https://warabee.jp/warabee-listnotices/%E3%80%90%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E5%8F%82%E5%8A%A0%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B%E3%80%919-19%E5%9C%9F%E3%80%8C%E3%81%84%E3%81%AC%E3%81%AE%E5%A4%9C%E3%81%BE%E3%81%A4/" target="_blank" rel="noopener noreferrer">出店者ワラビー動物病院グループ・9月19日の案内 ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    description: "夕方から夜に開かれる、越谷レイクタウンのドッグイベント。見田方遺跡公園を会場に、愛犬との夜のおでかけを楽しめます。",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "",
    sources: [{"label": "主催者・イベント案内", "url": "https://www.inutowatashi.com/event"}, {"label": "出店者ワラビー動物病院グループ・9月19日の案内", "url": "https://warabee.jp/warabee-listnotices/%E3%80%90%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E5%8F%82%E5%8A%A0%E3%81%AE%E3%81%8A%E7%9F%A5%E3%82%89%E3%81%9B%E3%80%919-19%E5%9C%9F%E3%80%8C%E3%81%84%E3%81%AC%E3%81%AE%E5%A4%9C%E3%81%BE%E3%81%A4/"}]
  },

  {
    id: "uchinoco-ichiba-koriyama-dx-2026",
    startDate: "2026-09-22",
    endDate: "2026-09-23",
    type: "event",
    status: "scheduled",
    title: "うちの仔市場 in 郡山DX vol.14",
    region: "tohoku",
    prefecture: "福島県",
    place: "ビッグパレットふくしま",
    address: "福島県郡山市南2丁目52",
    image: "images/event/sui-on-uchinoco-ichiba-koriyama-dx-2026.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=ビッグパレットふくしま",
    url: "https://www.uchinoco.club/202609-inkooriyama",
    content: `
<p>ビッグパレットふくしまで開かれる、犬用品の買い物と交流を楽しむ「うちの仔市場」。県内外の出店者を見比べながら、愛犬のお気に入りを探せるイベントです。</p>
<h2>このイベントの楽しみ方</h2>
<p>犬種別オフ会は初参加も歓迎と案内されています。交流を目的にするなら、自分の犬種の集合日時を先に確認してから来場時間を決めるのがおすすめ。出店者一覧も公式ページで確認できます。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>公式ページ内の開催案内画像で確認。</dd></div>
<div><dt>料金</dt><dd>公式Q&amp;Aで確認。体験・買い物の料金は各出店者へ。</dd></div>
<div><dt>雨の日</dt><dd>屋内会場を含む開催。屋外エリアや交通への影響は直前に確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>主催者はごみの持ち帰りを案内しています。犬同伴の細かな条件は公式「お願い」とQ&amp;Aを確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>福島県郡山市南2丁目52・ビッグパレットふくしま。公式ページの「駐車場＆会場」案内で、入場口と駐車位置を確認してください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>参加したいオフ会の時間と、立ち寄りたいお店を先にメモ。二日間で出店内容が同じとは限らないので、来場日の一覧を見ておくと安心です。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://www.uchinoco.club/202609-inkooriyama" target="_blank" rel="noopener noreferrer">うちの仔市場・郡山DX vol.14公式ページ ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    description: "ビッグパレットふくしまで開かれる、犬用品の買い物と交流を楽しむ「うちの仔市場」。県内外の出店者を見比べながら、愛犬のお気に入りを探せるイベントです。",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "",
    sources: [{"label": "うちの仔市場・郡山DX vol.14公式ページ", "url": "https://www.uchinoco.club/202609-inkooriyama"}]
  },

  {
    id: "japan-wanko-festa-autumn-2026",
    startDate: "2026-11-27",
    endDate: "2026-11-29",
    type: "event",
    status: "scheduled",
    title: "ジャパンわんこフェスタ2026 秋",
    region: "kanto",
    prefecture: "東京都",
    place: "会場は公式情報を確認（再確認中）",
    address: "",
    image: "images/event/sui-on-japan-wanko-festa-autumn-2026.jpg",
    mapUrl: "",
    url: "https://japan-wanko-festa.com/",
    content: `
<p class="event-editorial-note">会場情報を再確認中です。主催者の発表ではお台場ですが、公式サイトの次回開催表示に別会場の記載が見られます。予約や移動の手配前に主催者へ確認してください。</p>
<p>犬用品の買い物やフードを楽しむ、秋のジャパンわんこフェスタ。主催者の発表では11月27日〜29日の三日間、お台場での開催が案内されています。</p>
<h2>このイベントの楽しみ方</h2>
<p>主催者発表には、犬向けの買い物や飲食を楽しめる企画が紹介されています。出店者や体験の詳細は秋開催の案内で確認しましょう。春・初夏の出店情報や会場マップとは分けて見るのがポイントです。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>10:00〜17:00（主催者発表）</dd></div>
<div><dt>料金</dt><dd>入場無料（主催者発表）。買い物・飲食等は別途。</dd></div>
<div><dt>雨の日</dt><dd>屋外開催。雨天・荒天時の扱いは秋開催の最新案内を確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>入場条件、リード・カートのルール、証明書の要否は秋開催の公式案内で確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>発表時の会場はお台場セントラル広場及びプロムナード。公式サイトの次回開催表記と発表内容に差があるため、会場確定後に交通手段を決めてください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>広い会場を回る計画では、気になるお店を絞り、途中で犬が休める時間を取ると無理なく楽しめます。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://prtimes.jp/main/html/rd/p/000000102.000093750.html" target="_blank" rel="noopener noreferrer">主催者発表・秋開催の概要 ↗</a></li>
<li><a href="https://japan-wanko-festa.com/" target="_blank" rel="noopener noreferrer">ジャパンわんこフェスタ公式サイト ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    description: "犬用品の買い物やフードを楽しむ、秋のジャパンわんこフェスタ。主催者の発表では11月27日〜29日の三日間、お台場での開催が案内されています。",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "会場情報を再確認中です。主催者の発表ではお台場ですが、公式サイトの次回開催表示に別会場の記載が見られます。予約や移動の手配前に主催者へ確認してください。",
    sources: [{"label": "主催者発表・秋開催の概要", "url": "https://prtimes.jp/main/html/rd/p/000000102.000093750.html"}, {"label": "ジャパンわんこフェスタ公式サイト", "url": "https://japan-wanko-festa.com/"}]
  },

  {
    id: "wanterrace-yokohama-bayside-2026-autumn",
    startDate: "2026-09-27",
    endDate: "2026-09-27",
    type: "event",
    status: "scheduled",
    title: "わんてらす in 三井アウトレットパーク 横浜ベイサイド 2026秋",
    region: "kanto",
    prefecture: "神奈川県",
    place: "三井アウトレットパーク 横浜ベイサイド",
    address: "神奈川県横浜市金沢区白帆5-2",
    image: "images/event/sui-on-wanterrace-yokohama-bayside-2026-autumn.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=三井アウトレットパーク横浜ベイサイド",
    url: "https://www.wanterrace.com/wanterrace_yokohama02/",
    content: `
<p>横浜ベイサイドの大屋根広場と海沿いウッドデッキで開かれるドッグマルシェ。犬服やおやつ、暮らしの小物を見て回りながら、海辺のおでかけを楽しめます。</p>
<h2>このイベントの楽しみ方</h2>
<p>公式ページでは、マルシェでの購入者に向けたドッグヨガ体験も案内されています。希望する場合はチケットの配布条件を確認し、動きやすい服装で。買い物と体験を組み合わせたい方に向いています。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>10:00〜16:00（掲載済み案内。直前の公式告知も確認）</dd></div>
<div><dt>料金</dt><dd>入場無料（掲載済み案内）。購入・体験の条件は個別に確認。</dd></div>
<div><dt>雨の日</dt><dd>少雨実施・荒天中止。公式サイトとInstagramで告知。</dd></div>
<div><dt>犬連れの条件</dt><dd>リード必須、ロングリード不可。芝生エリアはカート・キャリー・抱っこで入場できます。犬を歩かせる場合はマナーウェアが必要。排泄物は飼い主が処理し、スタッフにも知らせてください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>シーサイドライン鳥浜駅から徒歩5分。会場はCブロック1階くじらの大屋根広場と海沿いウッドデッキです。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>芝生を歩く予定ならマナーウェアを忘れずに。決済方法はお店ごとに異なるため、現金もあると買い物がしやすくなります。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://www.wanterrace.com/wanterrace_yokohama02/" target="_blank" rel="noopener noreferrer">わんてらす・横浜ベイサイド秋開催と会場ルール ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    description: "横浜ベイサイドの大屋根広場と海沿いウッドデッキで開かれるドッグマルシェ。犬服やおやつ、暮らしの小物を見て回りながら、海辺のおでかけを楽しめます。",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "",
    sources: [{"label": "わんてらす・横浜ベイサイド秋開催と会場ルール", "url": "https://www.wanterrace.com/wanterrace_yokohama02/"}]
  },

  {
    id: "ishikari-animal-welfare-autumn-festival-2026",
    startDate: "2026-09-26",
    endDate: "2026-09-27",
    type: "event",
    status: "scheduled",
    title: "石狩動物愛護秋まつり2026",
    region: "hokkaido",
    prefecture: "北海道",
    place: "石狩市役所前広場",
    address: "北海道石狩市花川北6条1丁目30番地2",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=石狩市役所前広場",
    image: "images/event/sui-on-ishikari-animal-welfare-autumn-festival-2026.jpg",
    description: "石狩市役所前広場で予定されている動物愛護イベント。出店募集情報では、ペット関連の出店とキッチンカーを募集しています。",
    content: `
<p class="event-editorial-note">現在は出店募集情報をもとにした案内です。来場者向けの料金・参加条件・企画は主催者の発表を確認中です。</p>
<p>石狩市役所前広場で予定されている動物愛護イベント。出店募集情報では、ペット関連の出店とキッチンカーを募集しています。</p>
<h2>このイベントの楽しみ方</h2>
<p>犬猫との暮らしをテーマに、買い物や食事を通して立ち寄れる催しです。講座や体験の最終プログラムは確認できていないため、目当ての企画がある場合は主催者の当日案内を確認してください。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>10:00〜16:00（出店募集情報による）</dd></div>
<div><dt>料金</dt><dd>未確認。入場料と体験料を主催者に確認。</dd></div>
<div><dt>雨の日</dt><dd>屋外広場。雨天対応は未確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>同伴できる動物、リード、予防接種証明書の条件は主催者に確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>石狩市役所前広場。通常の市役所利用と駐車場運用が異なる可能性があるため、イベント用駐車案内を確認してください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>講座や体験が目的なら、開催時刻と予約の要否を先に確認。買い物だけなら犬が落ち着いて過ごせる短い滞在からでも。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://ennoshita.online/offers/ishikari-doubutsu-aigo-aki-2026/" target="_blank" rel="noopener noreferrer">出店募集情報（第三者） ↗</a></li>
<li><a href="https://www.instagram.com/dogandcat.lifefesta/" target="_blank" rel="noopener noreferrer">主催者Instagram・最新情報の確認先 ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    url: "https://www.instagram.com/dogandcat.lifefesta/",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "現在は出店募集情報をもとにした案内です。来場者向けの料金・参加条件・企画は主催者の発表を確認中です。",
    sources: [{"label": "出店募集情報（第三者）", "url": "https://ennoshita.online/offers/ishikari-doubutsu-aigo-aki-2026/"}, {"label": "主催者Instagram・最新情報の確認先", "url": "https://www.instagram.com/dogandcat.lifefesta/"}]
  },

  {
    id: "arche-pet-fes-matsushima-autumn-2026",
    startDate: "2026-10-03",
    endDate: "2026-10-04",
    type: "event",
    status: "scheduled",
    title: "ARCHE! presents ペットフェス2026秋 in 宮城県松島離宮",
    region: "tohoku",
    prefecture: "宮城県",
    place: "宮城県 松島離宮",
    address: "宮城県宮城郡松島町松島浪打浜18",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=宮城県松島離宮",
    image: "images/event/sui-on-arche-pet-fes-matsushima-autumn-2026.jpg",
    description: "松島離宮を会場に開かれる、ペットマガジンARCHE!の秋のペットフェス。出店者のさかがみ家も、10月3日・4日の参加を告知しています。",
    content: `
<p>松島離宮を会場に開かれる、ペットマガジンARCHE!の秋のペットフェス。出店者のさかがみ家も、10月3日・4日の参加を告知しています。</p>
<h2>このイベントの楽しみ方</h2>
<p>さかがみ家はキッチンカーで訪れ、オリジナルグッズを販売する予定です。そのほかの出店や撮影企画は主催者のプログラムで確認しましょう。日ごとに参加者が異なる企画は、日時も合わせて確認を。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>掲載済み案内は10:00〜16:00。主催者で再確認が必要。</dd></div>
<div><dt>料金</dt><dd>掲載済み案内は大人800円・こども400円。年齢区分・対象エリアを含め主催者で再確認が必要。</dd></div>
<div><dt>雨の日</dt><dd>庭園・エントランスを使用。雨天時の扱いは主催者に確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>出店者はペット同伴可と案内。リードや証明書の条件、入れるエリアは施設と主催者のルールを確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>宮城県松島離宮の庭園・エントランス。会場入口と犬同伴の入場経路は当日の案内に従ってください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>施設入場とイベント参加の料金がどこまで含まれるか、購入前に確認しておくと現地で迷わずに済みます。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://sakagamike.com/news/3067/" target="_blank" rel="noopener noreferrer">出店者さかがみ家・2026年秋参加のお知らせ ↗</a></li>
<li><a href="https://arche.miyagi.jp/events/" target="_blank" rel="noopener noreferrer">主催ARCHE!・イベント案内 ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    url: "https://arche.miyagi.jp/events/",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "",
    sources: [{"label": "出店者さかがみ家・2026年秋参加のお知らせ", "url": "https://sakagamike.com/news/3067/"}, {"label": "主催ARCHE!・イベント案内", "url": "https://arche.miyagi.jp/events/"}]
  },

  {
    id: "wan-wonderful-festa-yamagata-2026",
    startDate: "2026-10-17",
    endDate: "2026-10-18",
    type: "event",
    status: "scheduled",
    title: "Wan! Wonderful Festa 山形会場",
    region: "tohoku",
    prefecture: "山形県",
    place: "やまぎん県民ホール 屋外イベント広場",
    address: "山形県山形市双葉町1丁目2-38",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=やまぎん県民ホール",
    image: "images/event/sui-on-wan-wonderful-festa-yamagata-2026.jpg",
    description: "やまぎん県民ホールの屋外イベント広場で予定されているドッグイベント。紹介媒体には、買い物に加えて参加型企画も掲載されています。",
    content: `
<p class="event-editorial-note">開催情報は第三者媒体との照合まで完了しています。主催者の来場者向け案内は再確認待ちです。</p>
<p>やまぎん県民ホールの屋外イベント広場で予定されているドッグイベント。紹介媒体には、買い物に加えて参加型企画も掲載されています。</p>
<h2>このイベントの楽しみ方</h2>
<p>紹介されているのはドッグマルシェや「わんわんガチャ」など。最終的な出店者、参加方法、料金は確認中です。参加したい企画がある方は、主催者の告知が出てから滞在時間を決めるとよさそうです。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>10:30〜16:30（第三者の紹介情報。公式再確認待ち）</dd></div>
<div><dt>料金</dt><dd>第三者媒体では入場無料。体験料も含め公式再確認待ち。</dd></div>
<div><dt>雨の日</dt><dd>屋外会場。雨天・荒天時の判断は未確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>入場受付、犬の証明書、リード・カートのルールは主催者へ確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>山形市双葉町のやまぎん県民ホール・屋外イベント広場。車の場合は会場用駐車場の有無と料金を先に確認してください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>駅からの移動でも、会場内で歩く時間は別に考えておくと安心。飲み水と、犬が休める準備をして出かけましょう。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://pettena.jp/blogs/pet-outings/dog-events-tohoku-region" target="_blank" rel="noopener noreferrer">開催日時の参考：PETTENA（第三者） ↗</a></li>
<li><a href="https://www.instagram.com/wanwonderful_festa/" target="_blank" rel="noopener noreferrer">主催者Instagram・最新情報の確認先 ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    url: "https://www.instagram.com/wanwonderful_festa/",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "開催情報は第三者媒体との照合まで完了しています。主催者の来場者向け案内は再確認待ちです。",
    sources: [{"label": "開催日時の参考：PETTENA（第三者）", "url": "https://pettena.jp/blogs/pet-outings/dog-events-tohoku-region"}, {"label": "主催者Instagram・最新情報の確認先", "url": "https://www.instagram.com/wanwonderful_festa/"}]
  },

  {
    id: "koiwai-dog-fes-2026",
    startDate: "2026-10-17",
    endDate: "2026-10-18",
    type: "event",
    status: "scheduled",
    title: "小岩井ドッグフェス2026",
    region: "tohoku",
    prefecture: "岩手県",
    place: "小岩井農場まきば園",
    address: "岩手県岩手郡雫石町丸谷地36-1",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=小岩井農場まきば園",
    image: "images/event/sui-on-koiwai-dog-fes-2026.jpg",
    description: "小岩井農場まきば園で予定されているドッグフェス。広い農場を訪れるおでかけなので、イベント参加と園内での過ごし方を合わせて考えたい一日です。",
    content: `
<p class="event-editorial-note">日時・会場は第三者の紹介情報によります。料金と犬の参加条件は公式再確認待ちです。</p>
<p>小岩井農場まきば園で予定されているドッグフェス。広い農場を訪れるおでかけなので、イベント参加と園内での過ごし方を合わせて考えたい一日です。</p>
<h2>このイベントの楽しみ方</h2>
<p>今回の具体的な出店・体験プログラムは公式情報を確認中です。ドッグランや競技があると決めつけず、参加したい内容が発表されてから予定を組みましょう。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>9:00〜17:00（第三者の紹介情報。公式再確認待ち）</dd></div>
<div><dt>料金</dt><dd>イベント参加料と農場入場料の区分は未確認。「イベント無料」の紹介だけで総額無料とは判断できません。</dd></div>
<div><dt>雨の日</dt><dd>雨天時の開催・企画変更は主催者に確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>農場内の犬同伴可能エリアとイベント独自の入場条件を確認。犬連れでは入れない施設がないかも確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>岩手県雫石町丸谷地36-1・小岩井農場まきば園。イベント用の入口と駐車場は当該開催の案内を確認してください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>園内散策もするなら休憩を挟んだ予定に。犬の参加料、駐車料も含めて確認しておくと、一日分の予算を立てやすくなります。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://pettena.jp/blogs/pet-outings/dog-events-tohoku-region" target="_blank" rel="noopener noreferrer">開催情報の参考：PETTENA（第三者） ↗</a></li>
<li><a href="https://www.instagram.com/koiwai_dog_fes/" target="_blank" rel="noopener noreferrer">イベントInstagram・最新情報の確認先 ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    url: "https://www.instagram.com/koiwai_dog_fes/",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "日時・会場は第三者の紹介情報によります。料金と犬の参加条件は公式再確認待ちです。",
    sources: [{"label": "開催情報の参考：PETTENA（第三者）", "url": "https://pettena.jp/blogs/pet-outings/dog-events-tohoku-region"}, {"label": "イベントInstagram・最新情報の確認先", "url": "https://www.instagram.com/koiwai_dog_fes/"}]
  },

  {
    id: "hachinohe-wanko-festival-2026",
    startDate: "2026-11-08",
    endDate: "2026-11-08",
    type: "event",
    status: "scheduled",
    title: "第3回 八戸わんこ大祭2026",
    region: "tohoku",
    prefecture: "青森県",
    place: "FLAT HACHINOHE",
    address: "青森県八戸市尻内町三条目7-7",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=FLAT HACHINOHE",
    image: "images/event/sui-on-hachinohe-wanko-festival-2026.jpg",
    description: "FLAT HACHINOHEで予定されている八戸の犬イベント。紹介媒体では、犬種別の交流や撮影など、愛犬と参加する企画が案内されています。",
    content: `
<p class="event-editorial-note">日時・会場・企画は第三者の紹介情報をもとに掲載。主催者の最新告知との再照合が必要です。</p>
<p>FLAT HACHINOHEで予定されている八戸の犬イベント。紹介媒体では、犬種別の交流や撮影など、愛犬と参加する企画が案内されています。</p>
<h2>このイベントの楽しみ方</h2>
<p>オフ会や撮影が目的なら、対象犬種、開催時刻、事前申込の有無が気になるところ。現時点では今回の詳しい参加条件を確認できていないため、主催者のタイムテーブルを待って計画を立てましょう。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>9:30〜15:00（第三者の紹介情報。公式再確認待ち）</dd></div>
<div><dt>料金</dt><dd>未確認。人・犬それぞれの入場料を確認。</dd></div>
<div><dt>雨の日</dt><dd>使用エリアと雨天対応は公式再確認待ち。会場名だけで全企画が屋内とは判断できません。</dd></div>
<div><dt>犬連れの条件</dt><dd>犬種別企画の対象・予約、入場時の証明書、マナーウェアの要否を主催者に確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>青森県八戸市尻内町三条目7-7・FLAT HACHINOHE。駐車場と犬連れ入場口はイベントの案内に従ってください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>お目当ての撮影やオフ会の時間に合わせて来場すると、犬の待ち時間を短くできます。受付開始の時刻も確認を。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://pettena.jp/blogs/pet-outings/dog-events-tohoku-region" target="_blank" rel="noopener noreferrer">開催情報の参考：PETTENA（第三者） ↗</a></li>
<li><a href="https://www.instagram.com/kabu.waves/" target="_blank" rel="noopener noreferrer">主催者Instagram・最新情報の確認先 ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    url: "https://www.instagram.com/kabu.waves/",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "日時・会場・企画は第三者の紹介情報をもとに掲載。主催者の最新告知との再照合が必要です。",
    sources: [{"label": "開催情報の参考：PETTENA（第三者）", "url": "https://pettena.jp/blogs/pet-outings/dog-events-tohoku-region"}, {"label": "主催者Instagram・最新情報の確認先", "url": "https://www.instagram.com/kabu.waves/"}]
  },

  {
    id: "wan-wonderful-festa-shiojiri-2026",
    startDate: "2026-10-03",
    endDate: "2026-10-04",
    type: "event",
    status: "scheduled",
    title: "Wan!WonderfulFesta長野 in 塩尻",
    region: "chubu",
    prefecture: "長野県",
    place: "チロルの森",
    address: "長野県塩尻市北小野相吉5050",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=チロルの森",
    image: "images/event/sui-on-wan-wonderful-festa-shiojiri-2026.jpg",
    description: "塩尻市のチロルの森で予定されているWan!WonderfulFesta。施設のおでかけとイベントを組み合わせる際は、犬連れで利用できる範囲と料金を先に確認したい会場です。",
    content: `
<p class="event-editorial-note">掲載済みの日時を残していますが、今回の詳細案内との再照合は未完了です。来場前に必ず主催者へ確認してください。</p>
<p>塩尻市のチロルの森で予定されているWan!WonderfulFesta。施設のおでかけとイベントを組み合わせる際は、犬連れで利用できる範囲と料金を先に確認したい会場です。</p>
<h2>このイベントの楽しみ方</h2>
<p>今回の出店者や体験内容の詳細は確認中です。過去の別会場の企画をそのまま当てはめず、塩尻開催の告知でお目当てのお店や受付方法を確認しましょう。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>掲載済み案内は両日10:30〜16:30。公式再確認待ち。</dd></div>
<div><dt>料金</dt><dd>イベント料・施設入園料・犬の料金を含めて確認中。</dd></div>
<div><dt>雨の日</dt><dd>雨天・荒天時の対応は主催者に確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>施設内の犬同伴ルールと、イベントの参加条件の両方を確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>長野県塩尻市北小野相吉5050・チロルの森。イベントの受付場所・駐車場は当日の公式案内で確認してください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>施設内の散策も予定するなら、再入場の可否とイベントの会場範囲を調べておくと移動しやすくなります。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://www.instagram.com/wanwonderful_festa/" target="_blank" rel="noopener noreferrer">主催者Instagram ↗</a></li>
<li><a href="https://www.shiojiri-tirol.jp/event/" target="_blank" rel="noopener noreferrer">チロルの森・イベント案内 ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    url: "https://www.instagram.com/wanwonderful_festa/",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "掲載済みの日時を残していますが、今回の詳細案内との再照合は未完了です。来場前に必ず主催者へ確認してください。",
    sources: [{"label": "主催者Instagram", "url": "https://www.instagram.com/wanwonderful_festa/"}, {"label": "チロルの森・イベント案内", "url": "https://www.shiojiri-tirol.jp/event/"}]
  },

  {
    id: "kisosansen-wanko-marche-vol28-2026",
    startDate: "2026-10-03",
    endDate: "2026-10-04",
    type: "event",
    status: "scheduled",
    title: "木曽三川わんこマルシェ vol.28",
    region: "chubu",
    prefecture: "岐阜県",
    place: "国営木曽三川公園 木曽三川公園センター",
    address: "岐阜県海津市海津町油島255-3",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=木曽三川公園センター",
    image: "images/event/sui-on-kisosansen-wanko-marche-vol28-2026.jpg",
    description: "木曽三川公園センターの北ゾーン芝生広場で開かれる、犬用品のマルシェ。買い物やキッチンカーの食事を楽しみながら、ほかの飼い主さんと交流できるイベントです。",
    content: `
<p>木曽三川公園センターの北ゾーン芝生広場で開かれる、犬用品のマルシェ。買い物やキッチンカーの食事を楽しみながら、ほかの飼い主さんと交流できるイベントです。</p>
<h2>このイベントの楽しみ方</h2>
<p>会場は公園内の芝生広場。買い物を中心に短時間立ち寄るか、公園で過ごす時間も取るか、愛犬のペースに合わせて計画を立てられます。周辺の別日開催イベントとは日程が異なるので注意しましょう。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>両日10:00〜16:00</dd></div>
<div><dt>料金</dt><dd>イベントの追加料金・体験料は主催者に確認。公園内の有料施設は別途。</dd></div>
<div><dt>雨の日</dt><dd>荒天中止。実施判断は公式の最新案内で確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>会場は北ゾーン芝生広場。公園の犬同伴ルールと、当日のイベントルールに従ってください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>木曽三川公園センター北ゾーン芝生広場。公園公式サイトの駐車場案内を確認し、近い駐車区画だけに頼らず計画を。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>芝生で過ごす予定なら、足を拭くタオルと飲み水を用意。食事や買い物の間にも休憩を挟んで、無理なく回りましょう。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://www.kisosansenkoen.jp/~center/mkisosansenevent_aki.html" target="_blank" rel="noopener noreferrer">国営木曽三川公園・2026年秋イベント案内 ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    url: "https://www.kisosansenkoen.jp/~center/mkisosansenevent_aki.html",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "",
    sources: [{"label": "国営木曽三川公園・2026年秋イベント案内", "url": "https://www.kisosansenkoen.jp/~center/mkisosansenevent_aki.html"}]
  },

  {
    id: "boo-bull-boo-festa-autumn-2026",
    startDate: "2026-10-04",
    endDate: "2026-10-04",
    type: "event",
    status: "scheduled",
    title: "BOO!! BULL BOO!! FESTA 2026 AUTUMN",
    region: "chubu",
    prefecture: "静岡県",
    place: "富士山樹空の森",
    address: "静岡県御殿場市印野1380-15",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=富士山樹空の森",
    image: "images/event/sui-on-boo-bull-boo-festa-autumn-2026.jpg",
    description: "富士山樹空の森で予定されている秋のドッグイベント。紹介媒体では、フレンチブルドッグなどブル系の犬との交流や参加型企画が紹介されています。",
    content: `
<p class="event-editorial-note">開催概要は第三者媒体での確認です。料金・企画・犬の参加条件は、主催者による最新案内との照合が必要です。</p>
<p>富士山樹空の森で予定されている秋のドッグイベント。紹介媒体では、フレンチブルドッグなどブル系の犬との交流や参加型企画が紹介されています。</p>
<h2>このイベントの楽しみ方</h2>
<p>第三者の紹介には撮影や運動会などが載っていますが、今回の公式プログラムは再確認待ちです。犬種制限や体格ごとの参加条件も、名称だけで判断せず確認しましょう。</p>
<h2>時間・料金・参加の前に</h2>
<dl class="event-practical-info">
<div><dt>開催時間</dt><dd>9:30〜15:00（第三者の紹介情報。公式再確認待ち）</dd></div>
<div><dt>料金</dt><dd>紹介媒体では人1,000円・犬1頭500円、小学生以下無料。最新料金と対象区分は公式再確認待ち。</dd></div>
<div><dt>雨の日</dt><dd>雨天・荒天時の開催判断は未確認。</dd></div>
<div><dt>犬連れの条件</dt><dd>参加できる犬種、各企画の申込、ドッグラン利用時の証明書などは主催者に確認してください。</dd></div>
</dl>
<h2>会場への行き方</h2>
<p>静岡県御殿場市印野1380-15・富士山樹空の森。イベント会場の位置と駐車案内は当該開催の告知を確認してください。</p>
<aside class="event-editorial-tip"><h3>すいとおん。のおでかけメモ</h3><p>運動や撮影が目的なら受付と集合時刻を確認。人と犬で料金が分かれる案内なので、頭数を含めた予算も見ておきましょう。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>
<h2>情報元・最新のお知らせ</h2>
<ul class="event-source-links">
<li><a href="https://doghuglife.com/posts/dog-event-2026-10-zenkoku" target="_blank" rel="noopener noreferrer">開催情報の参考：Dog Hug Life（第三者） ↗</a></li>
</ul>
<p class="event-source-date">情報整理：2026年9月17日。未確認の項目は本文に明記しています。開催済みの情報は当該回の案内で、次回開催を保証するものではありません。</p>
`,
    url: "",
    editorialCheckedAt: "2026-09-17",
    verificationNote: "開催概要は第三者媒体での確認です。料金・企画・犬の参加条件は、主催者による最新案内との照合が必要です。",
    sources: [{"label": "開催情報の参考：Dog Hug Life（第三者）", "url": "https://doghuglife.com/posts/dog-event-2026-10-zenkoku"}]
  }
];

{
  "id": "wan-park-blue-shimotsuma-2026-sw",
  "title": "WanパークBlue in ビアスパークしもつま",
  "startDate": "2026-09-19",
  "endDate": "2026-09-22",
  "prefecture": "茨城県",
  "place": "ビアスパークしもつま",
  "address": "茨城県下妻市長塚乙70-3",
  "description": "犬用品のマルシェとキッチンカーを楽しむ４日間。マルシェ入場は無料、併設ドッグランは別料金・受付が必要です。",
  "type": "event",
  "status": "scheduled",
  "region": "kanto",
  "image": "images/event/sui-on-wan-park-blue-shimotsuma-2026-sw.png",
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=茨城県下妻市長塚乙70-3",
  "content": "<p>ビアスパークしもつまを会場に開かれる犬連れのマーケット。施設提供情報を掲載した地域メディア「とりぷれ」は、犬用品やキッチンカーなど約30店舗の参加を案内しています。</p>\n<h2>このイベントの楽しみ方</h2><p>犬用のおやつや洋服、リードなどを見て回れるので、愛犬に合うものを探したい日に。買い物と併設ドッグランの利用は別に考えて、先に受付や料金を確認すると予定を組みやすくなります。</p>\n<h2>時間・料金・参加の前に</h2><dl class=\"event-practical-info\"><div><dt>開催日時</dt><dd>2026年9月19日（土）〜22日（火・祝）／10:00〜16:00。</dd></div><div><dt>料金</dt><dd>マルシェ入場無料。商品購入・飲食・併設ドッグランは別料金です。</dd></div><div><dt>ドッグランの受付</dt><dd>併設ランを初めて利用する場合はフロント受付とワクチン接種証明書が必要と案内されています。ランの登録・利用料金は現地で確認してください。</dd></div><div><dt>事前登録・所要時間</dt><dd>マルシェの事前登録要否と、初回ラン受付にかかる時間は未確認です。ドッグランを利用する方は受付の時間も見込んでください。</dd></div><div><dt>雨天・犬連れの条件</dt><dd>雨天時の開催判断、マルシェ内の犬同伴ルールは主催者の最新案内で確認してください。</dd></div></dl>\n<h2>会場への行き方</h2><p>会場住所は茨城県下妻市長塚乙70-3。車で向かう場合は、当日の駐車場所と混雑時の案内を確認してください。マルシェへの犬同伴と、温泉・館内・宿泊施設への犬同伴は別の条件です。</p>\n<aside class=\"event-editorial-tip\"><h3>すいとおん。のおでかけメモ</h3><p>買い物だけなら身軽に、ランでも遊ぶなら証明書も一緒に。犬用の水と器を用意し、昼間の気温に合わせて休憩を取りましょう。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>\n<h2>情報元・最新のお知らせ</h2><ul class=\"event-source-links\"><li><a href=\"https://tripre.jp/archives/42524\" target=\"_blank\" rel=\"noopener noreferrer\">地域メディア とりぷれ・施設提供情報を含む開催案内 ↗</a></li></ul>\n<p class=\"event-source-date\">情報整理：2026年9月19日。開催変更・空き状況は出発前に情報元でご確認ください。サムネイルはすいとおん。制作のイメージイラストで、実際の会場・作品を再現したものではありません。</p>",
  "url": "",
  "editorialCheckedAt": "2026-09-19",
  "verificationNote": "開催概要は施設提供情報を掲載した地域メディアで確認。マルシェの登録・雨天対応・駐車条件は未確認です。",
  "sources": [
    {
      "label": "地域メディア とりぷれ・施設提供情報を含む開催案内",
      "url": "https://tripre.jp/archives/42524"
    }
  ]
},
{
  "id": "lucy-kirakira-wanko-night-2026-sw",
  "title": "キラキラわんこナイト｜Lucy Resort",
  "startDate": "2026-09-19",
  "endDate": "2026-09-23",
  "prefecture": "茨城県",
  "place": "Lucy Resort（ルーシーリゾート）",
  "address": "茨城県つくば市上河原崎39-1",
  "description": "光る首輪やライトを身につけて楽しむ夜のドッグラン。期間中はナイト追加料金が無料ですが、通常入場料と初回登録料は別途必要です。",
  "type": "event",
  "status": "scheduled",
  "region": "kanto",
  "image": "images/event/sui-on-lucy-kirakira-wanko-night-2026-sw.png",
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=茨城県つくば市上河原崎39-1",
  "content": "<p>シルバーウィークの夜に、光るアイテムをつけて愛犬とドッグランへ。Lucy Resortでは９月19〜23日の18〜21時に「キラキラわんこナイト」を案内しています。</p>\n<h2>このイベントの楽しみ方</h2><p>光る首輪やペンダントなどは持ち込み可能で、店内販売も案内されています。暗い場所での遊びに慣れていない犬は、周囲の様子を見ながら短い滞在から楽しむのもよさそうです。</p>\n<h2>時間・料金・参加の前に</h2><dl class=\"event-practical-info\"><div><dt>開催日時</dt><dd>2026年9月19日（土）〜23日（水・祝）／18:00〜21:00。</dd></div><div><dt>料金</dt><dd>期間中はナイト追加料金が無料。通常のドッグラン入場料は必要です。初回登録事務手数料は１頭1,100円（税込）。通常入場料は公式料金表をご確認ください。</dd></div><div><dt>予約・登録</dt><dd>通常のドッグランは予約不要の案内がありますが、すべての犬にデジタル会員登録が必要です。都度利用の１日フリーパスがあります。初回受付の所要時間は未確認です。</dd></div><div><dt>持参するもの</dt><dd>イベント案内では、１年未満のワクチン接種証明書と狂犬病接種証明書の提示が必要とされています。</dd></div><div><dt>開催変更</dt><dd>同じ案内ページの９月21日「MUSIC NIGHT」は天候を理由に中止告知が出ています。キラキラわんこナイトとは分けて確認し、来場当日の営業状況も公式で確認してください。</dd></div></dl>\n<h2>会場への行き方</h2><p>茨城県つくば市上河原崎39-1。車での行き方や駐車案内は公式アクセス情報へ。夜の帰宅時刻も含めて計画し、当日の営業カレンダーを確認してください。</p>\n<aside class=\"event-editorial-tip\"><h3>すいとおん。のおでかけメモ</h3><p>明るいうちに証明書をそろえ、光るアイテムの電池も確認。初回は登録があるため、遊ぶ時間とは別に受付の余裕を取りましょう。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>\n<h2>情報元・最新のお知らせ</h2><ul class=\"event-source-links\"><li><a href=\"https://www.lucyresort.com/event_info/eventinfo2/2026/08/474/\" target=\"_blank\" rel=\"noopener noreferrer\">Lucy Resort・シルバーウィークイベント公式案内 ↗</a></li><li><a href=\"https://www.lucyresort.com/welcome/\" target=\"_blank\" rel=\"noopener noreferrer\">Lucy Resort・初めて利用する方へ ↗</a></li><li><a href=\"https://www.lucyresort.com/price/\" target=\"_blank\" rel=\"noopener noreferrer\">Lucy Resort・営業時間と料金 ↗</a></li></ul>\n<p class=\"event-source-date\">情報整理：2026年9月19日。開催変更・空き状況は出発前に情報元でご確認ください。サムネイルはすいとおん。制作のイメージイラストで、実際の会場・作品を再現したものではありません。</p>",
  "url": "https://www.lucyresort.com/event_info/eventinfo2/2026/08/474/",
  "editorialCheckedAt": "2026-09-19",
  "verificationNote": "９月21日のMUSIC NIGHTは中止告知あり。夜の追加料金無料と通常入場料を混同しないようご注意ください。",
  "sources": [
    {
      "label": "Lucy Resort・シルバーウィークイベント公式案内",
      "url": "https://www.lucyresort.com/event_info/eventinfo2/2026/08/474/"
    },
    {
      "label": "Lucy Resort・初めて利用する方へ",
      "url": "https://www.lucyresort.com/welcome/"
    },
    {
      "label": "Lucy Resort・営業時間と料金",
      "url": "https://www.lucyresort.com/price/"
    }
  ]
},
{
  "id": "resol-no-mori-aizome-2026-sw",
  "title": "リソルの森｜愛犬と楽しむ藍染体験",
  "startDate": "2026-09-20",
  "endDate": "2026-09-21",
  "prefecture": "千葉県",
  "place": "リソルの森（体験の集合場所は予約時に確認）",
  "address": "千葉県長生郡長柄町上野521-4",
  "description": "９月20日はガーランド、21日は布パネルを作る藍染体験。日帰り参加可・犬同伴は条件あり。予約枠と同伴条件を確認して参加する企画です。",
  "type": "event",
  "status": "scheduled",
  "region": "kanto",
  "image": "images/event/sui-on-resol-no-mori-aizome-2026-sw.png",
  "mapUrl": "https://www.google.com/maps/search/?api=1&query=千葉県長生郡長柄町上野521-4",
  "content": "<p>リソルの森のシルバーウィーク企画から、日帰り参加と愛犬同伴が案内されている２つの藍染体験を紹介します。マルシェやドッグランとは違い、ものづくりを楽しみたい方向けの企画です。</p>\n<h2>このイベントの楽しみ方</h2><p>20日は布の旗をつないだガーランド、21日は染めた布を使うファブリックパネルを制作します。同じ時間帯の別プログラムなので、作りたいものに合わせて日を選べます。</p>\n<h2>時間・料金・参加の前に</h2><dl class=\"event-practical-info\"><div><dt>開催日時</dt><dd>2026年9月20日（日）・21日（月・祝）／各日13:30〜15:30。</dd></div><div><dt>日別の内容</dt><dd>20日：藍染ガーランドづくり。21日：藍染ファブリックパネルづくり。</dd></div><div><dt>料金・定員</dt><dd>各日2,500円（税込）〜、定員12名。対象は「どなたでも」、日帰り参加可と案内されています。</dd></div><div><dt>予約・犬の条件</dt><dd>公式イベントページの各プログラム予約リンクから、空き枠と料金を確認してください。愛犬同伴は条件付きで、犬のサイズ・頭数・待機方法などの詳細は参加前に施設へ確認が必要です。</dd></div><div><dt>受付・雨の日</dt><dd>体験は２時間。受付に必要な時間、集合場所、雨天時の実施場所と対応は予約時に確認してください。</dd></div></dl>\n<h2>会場への行き方</h2><p>施設住所は千葉県長生郡長柄町上野521-4。広い施設のため、この住所だけで体験の集合場所に着くとは限りません。利用駐車場と集合場所を予約時に確認してください。</p>\n<aside class=\"event-editorial-tip\"><h3>すいとおん。のおでかけメモ</h3><p>手を使う体験中、愛犬が落ち着いて待てる方法を相談しておくと安心です。ひとり＋犬での参加や多頭連れは、予約前に受け入れ条件を聞いておきましょう。</p><small>編集部からの準備のヒントです。参加体験談ではありません。</small></aside>\n<h2>情報元・最新のお知らせ</h2><ul class=\"event-source-links\"><li><a href=\"https://www.resol-no-mori.com/event/kiji123.html\" target=\"_blank\" rel=\"noopener noreferrer\">リソルの森・シルバーウィーク2026公式プログラム ↗</a></li></ul>\n<p class=\"event-source-date\">情報整理：2026年9月19日。開催変更・空き状況は出発前に情報元でご確認ください。サムネイルはすいとおん。制作のイメージイラストで、実際の会場・作品を再現したものではありません。</p>",
  "url": "https://www.resol-no-mori.com/event/kiji123.html",
  "editorialCheckedAt": "2026-09-19",
  "verificationNote": "犬同伴の詳細条件と予約の空き状況は未確認です。「予約確認」から公式のプログラム案内をご確認ください。",
  "sources": [
    {
      "label": "リソルの森・シルバーウィーク2026公式プログラム",
      "url": "https://www.resol-no-mori.com/event/kiji123.html"
    }
  ]
}
);
