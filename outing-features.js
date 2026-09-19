/* 特集はこの配列に追加。施設情報は {{place:施設ID}} で outing-data.js から読み込みます。 */
const outingFeatures = [
  {
    id: "outing-stay-together",
    title: "遊んだ夜も、一緒に。",
    description: "ドッグランとベッド利用の条件で選ぶ、関東のお泊まり3選。",
    label: "STAY / KANTO / WITH DOGS",
    date: "2026-09-19",
    image: "images/outing/feature-stay-together-illustration.png",
    content: `
<p>たっぷり遊んだ夜も、できればいつものように一緒に眠りたい。ドッグランがあり、公式に人のベッドの利用が認められている関東の3施設を集めました。どれも未訪問の候補です。</p>
<section class="outing-article-block">
<h2>「一緒に眠る」の条件も比べよう。</h2>
<p>inumo芝公園とグランデ常陸はマナーウェア着用が条件。DANQOOはベッド利用可の案内があり、寝具の細則は予約時に確認したい宿です。ベッドの上に乗れることと、掛け布団の中まで入れることは同じとは限らないので、普段の寝方を伝えて確認すると安心です。</p>
<p>ラン重視なら、屋内のinumo、専用ランと共用の屋根付きランがある常陸、屋外2か所のDANQOO。それぞれ違う過ごし方ができます。今回の3施設は、1名宿泊が確約されたリストではありません。</p></section>
{{place:inumo-shibakoen}}
{{place:hitachi-stay}}
{{place:danqoo}}
<p>料金は空室や人数で変動します。愛犬の体重・頭数・必要書類と寝具の条件を確認してから予約を。宿泊者向けのランを、予約不要の日帰り施設としては紹介していません。</p>
<a class="outing-article-cta" href="outing.html?kind=stay&amp;bed=1#places">ベッド利用可の宿を一覧で比べる →</a>
`,
  },
  {
    id: "outing-dogruns-kanto",
    title: "関東のドッグラン10選。",
    description: "室内・屋根付き・天然芝・水遊び・無料。今日はどこで遊ぶ？",
    label: "PLAY / KANTO / 10 PLACES",
    date: "2026-09-19",
    image: "images/outing/feature-dogruns-kanto-illustration.png",
    content: `
<p>広い芝生で走りたい日も、雨を避けて遊びたい日も。関東の10施設を、遊べる環境と初回の準備で選べるようにまとめました。順位ではなく、目的別の候補です。訪問した寄七つ星・豊洲ぐるり以外は、公式情報から選んだ未訪問の施設です。</p>
<section class="outing-article-block">
<h2>今日の気分で選ぶなら。</h2>
<p>室内ならWANCOTT・DOG ISLAND瀬谷・DOG RUN TOKYO・ペットステーションWAN。屋根付きも選択肢に入れるなら、わんダフルネイチャーヴィレッジ・グランデ常陸。天然芝や水遊びならドギーズアイランド、訪問して広さがうれしかった寄七つ星も。無料で探すなら豊洲ぐるり・代々木公園です。</p>
<p>屋根付きは雨風を完全に避けられる室内とは別。無料のランでも事前登録や駐車料金を確認しておきましょう。</p></section>
{{place:yadoriki}}
{{place:toyosu-gururi}}
{{place:wancott}}
{{place:wonderful-village}}
{{place:yoyogi}}
{{place:dog-island-seya}}
{{place:dog-run-tokyo}}
{{place:petstation-wan}}
{{place:doggys-island}}
{{place:hitachi-dayrun}}
`,
  },
  {
    id: "outing-rainy-home",
    title: "雨の日、おうちで何する？",
    description: "すいとおん家のノーズワークと、いっしょに遊ぶアイデア。",
    label: "AT HOME",
    date: "2026-09-19",
    image: "images/outing/feature-rainy-home-illustration.png",
    content: `
<p>雨の日、犬とおうちで何する？すいとおん家は、ノーズワークを取り入れつつ、家でも全力で遊びます。笑</p>
<p>おでかけできない日も、ふたりといっしょに楽しめることを。うちで使っている遊びと、次に試したいアイデアをまとめました。</p>

<section class="outing-article-block">
<p class="outing-eyebrow">01 / OUR LITTLE DAYS</p>
<h2>うちは、ノーズワークから。</h2>
<p>にんじんのおもちゃや布のマットを使って、鼻を使う遊びを取り入れています。写真はおうちで遊んでいるすいとおん。いつもの部屋も、おもちゃをひとつ出すと遊び場になります。</p><figure><img src="images/outing/sui-on-carrot-nosework-soft.png" alt="にんじん型のノーズワークおもちゃを囲むすいとおん" loading="lazy"><figcaption>すいとおん家のおうち遊び。にんじんのおもちゃで。</figcaption></figure>
<p>初めてなら、ごはんを見つけやすい位置に少量置くところから。難しく隠すより、「見つけられた！」で終われるくらいが始めやすそうです。</p><div class="outing-photo-pair"><figure><img src="images/outing/sui-on-food-toy-soft.png" alt="黄色いフードトイを調べるすい" loading="lazy"><figcaption>仕掛けのあるおもちゃも。</figcaption></figure><figure><img src="images/outing/sui-on-snuffle-mat-soft.png" alt="布のマットに鼻を近づけるすい" loading="lazy"><figcaption>布の間をくんくん。</figcaption></figure></div></section>

<section class="outing-article-block">
<p class="outing-eyebrow">02 / PLAY TOGETHER</p>
<h2>いっしょに遊ぶ時間も、たっぷり。</h2>
<p>すいとおん家は、おうちでも全力で遊ぶ派。遊び方の候補には、お気に入りのおもちゃを使った短い引っ張りっこもあります。ときどき休憩を挟んで、犬の方からまた遊びたくなるペースで。</p>
<p>滑りやすい床はマットを敷き、家具にぶつからないスペースで。おもちゃを高く振って飛びつかせたり、階段で走らせたりせず、足元で遊べる形にします。</p></section>

<section class="outing-article-block">
<p class="outing-eyebrow">03 / A FEW MORE IDEAS</p>
<h2>次は、こんな遊びも。</h2><h3>お気に入りのおもちゃを探す</h3>
<p>まずは見える場所に置いて、一緒に「どこかな？」。見つけたら褒めて、一緒に遊ぶところまでをセットに。慣れたら、探す範囲を少しだけ広げます。</p><h3>おいで、できた！の小さな練習</h3>
<p>同じ部屋の近い距離で名前を呼んで、来られたら褒める。すでに知っている合図を数回楽しむだけでも、飼い主と関わる時間になります。飽きる前に切り上げて休憩へ。</p><h3>遊んだあとは、何もしない時間</h3>
<p>ずっと楽しませ続けなくても大丈夫。いつもの落ち着ける場所で、ゆっくり休む時間も用意します。やりたくなさそうなら、その日はおしまいに。</p></section>
<aside class="outing-bottom">
<h2>ふたりで遊ぶときの小さな約束。</h2>
<p>フードやおもちゃを取り合いそうなときは、距離を取るか1頭ずつ。布や部品をかじって飲み込まないよう、見ていられるときに使います。使うフードは普段のごはんの一部を取り分け、遊びの分だけ増やしすぎないように。</p></aside>

<section class="outing-article-block">
<h2>外で遊びたくなったら。</h2>
<p>雨の日でも出かけたい日は、室内ドッグランという選択肢も。登録や予約を先に確認して、無理なく行ける場所を探してみてください。</p>
<a class="outing-article-cta" href="outing-indoor-kanto.html">関東の室内ドッグラン特集へ →</a></section>

<p class="outing-editorial">写真・日常の体験：すいとおん家。追加の遊び方は 
<a href="https://www.dogstrust.org.uk/dog-advice/life-with-your-dog/enrichment/enrichment-activities-for-dogs" target="_blank" rel="noopener noreferrer">Dogs Trustのエンリッチメント案内</a>、
<a href="https://www.akc.org/expert-advice/training/indoor-scent-games-for-dogs/" target="_blank" rel="noopener noreferrer">AKCの室内の嗅覚遊び</a>を参考に整理しています。追加アイデアは、すいとおん家の実践済み体験を示すものではありません。</p>
`,
  },
  {
    id: "outing-indoor-kanto",
    title: "関東の室内ドッグランへ。",
    description: "東京・神奈川・埼玉の4施設。登録・予約を比べて選ぼう。",
    label: "RAINY DAY / KANTO",
    date: "2026-09-19",
    image: "images/outing/feature-indoor-kanto-illustration.png",
    content: `
<p>雨予報を見て「今週、どこなら遊べる？」と迷ったら。完全屋内のランを、登録・予約の違いから選べるようにまとめました。今回は東京・神奈川・埼玉の4施設を紹介します。</p>
<p>これは2026年9月19日に公式案内を確認した候補リストです。当日営業や予約枠の空きを保証するものではありません。未訪問の施設なので、利用体験とは分けて紹介しています。</p>
<aside class="outing-bottom">
<h2>出発前は、この順番で。</h2><ol><li>愛犬のサイズに合う枠・エリアを確認。</li><li>初回登録、証明書の準備、必要な予約を済ませる。</li><li>当日の貸切・休業情報を確認して出発。</li></ol></aside>
{{place:wancott}}
{{place:dog-island-seya}}
{{place:dog-run-tokyo}}
{{place:petstation-wan}}
{{place:wonderful-village}}

<section class="outing-article-block">
<h2>今日は、おうちで遊ぶのもあり。</h2>
<p>外に出る気分じゃない日や、登録が間に合わない日には、おうち遊びへ。すいとおん家のノーズワークも紹介しています。</p>
<a class="outing-article-cta" href="outing-rainy-home.html">雨の日のおうち遊びを読む →</a></section>

<p class="outing-editorial">候補探しの参考：
<a href="https://konokototomoni.com/category-walk/kanagawa-indoor-dogrun/" target="_blank" rel="noopener noreferrer">コノコトトモニ・神奈川県の室内ドッグラン紹介</a>。施設の条件は上記の公式情報を確認して独自に整理しました。</p>
`,
  },
  {
    id: "outing-free-dogruns",
    title: "東京の無料ドッグラン10選。",
    description: "豊洲ぐるり・桜ヶ丘・代々木ほか。登録方法とエリア分けを比べて、次のお出かけへ。",
    label: "FREE / TOKYO / 10 PLACES",
    date: "2026-09-19",
    image: "images/outing/feature-free-dogruns-illustration.png",
    content: `
<p>無料で遊べるランも、選択肢があると「次はここに行こう」が楽しみになる。今回は東京の10か所を、地域・登録方法・ランの区画から比べられるようにまとめました。掲載する10施設はいずれも屋外です。</p>
<p>「無料」はランの利用料について。駐車場や移動費まで無料とは限りません。豊洲ぐるりは都立公園とは別の登録で、ほかの9施設は都立12公園の共通登録の対象です。</p>
<aside class="outing-bottom"><h2>最初に登録、そのあと行き先選び。</h2><p>都立共通登録は当日にすぐ使えるとは限りません。木場の公式案内は通常7〜10日、混雑時は約2週間。すいとおん家は約1週間、豊洲ぐるりは約2日で連絡が来ましたが、これは個人の体験です。</p><p>登録が済んでいたら、体格別エリア・おもちゃのルール・同伴できる子どもの年齢もチェック。同じ共通登録でも、各公園のルールは異なります。</p><a href="https://www.tokyo-park.or.jp/park/kiba/facility/">登録にかかる日数の公式案内 ↗</a></aside>
<section class="outing-article-block"><h2>気になる場所へ、すぐに。</h2><ol><li><a href="#toyosu-gururi">豊洲ぐるりドッグラン</a> — 東京・江東区豊洲</li><li><a href="#sakuragaoka">桜ヶ丘公園ドッグラン</a> — 東京・多摩市</li><li><a href="#oyamadairi">小山内裏公園ドッグラン</a> — 東京・町田市／八王子市</li><li><a href="#koganei">小金井公園ドッグラン</a> — 東京・小金井市</li><li><a href="#yoyogi">代々木公園ドッグラン</a> — 東京・渋谷</li><li><a href="#kiba">木場公園ドッグラン</a> — 東京・江東区</li><li><a href="#johoku-chuo">城北中央公園ドッグラン</a> — 東京・練馬区／板橋区</li><li><a href="#toneri">舎人公園ドッグラン</a> — 東京・足立区</li><li><a href="#shinozaki">篠崎公園ドッグラン</a> — 東京・江戸川区</li><li><a href="#komazawa-olympic">駒沢オリンピック公園ドッグラン</a> — 東京・世田谷区／目黒区</li></ol><p>豊洲ぐるりの訪問メモ以外は、公式情報をもとにした候補紹介です。共通登録の体験を、すべての公園への訪問体験としては扱っていません。</p></section>
{{place:toyosu-gururi}}
{{place:sakuragaoka}}
{{place:oyamadairi}}
{{place:koganei}}
{{place:yoyogi}}
{{place:kiba}}
{{place:johoku-chuo}}
{{place:toneri}}
{{place:shinozaki}}
{{place:komazawa-olympic}}
<section class="outing-article-block"><h2>バッグに入れておきたいもの。</h2><p>登録証、リード、水、排泄物を持ち帰る袋、足拭きタオル。玩具は公園によって禁止・曜日制・区画限定なので、持っていく前に確認を。食べ物を使ったノーズワークは、自宅などルールに合った場所で楽しもう。</p><p>ランの利用条件や閉鎖情報は出発前に各公園の公式案内を確認してください。雨上がりの地面や暑さも考えて、無理なく遊べる日に。</p><a class="outing-article-cta" href="outing.html?kind=play&amp;free=1#places">無料ラン10施設を一覧で比べる →</a></section>
<section class="outing-article-block">
<h2>都立12公園ドッグラン共通利用登録って？</h2>
<p>対象のいずれか1公園でWEB申請すると、12公園のドッグランを共通で利用できます。豊洲ぐるりは対象外で、別途登録が必要です。</p>
<p>対象：桜ヶ丘公園・神代植物公園・篠崎公園・小山内裏公園・蘆花恒春園・駒沢オリンピック公園・城北中央公園・水元公園・舎人公園・代々木公園・木場公園・小金井公園。</p>
<p>申請には当該年度の狂犬病予防注射済票（プレート）の画像を用意します。登録証を携帯し、各公園の利用ルールを確認してください。</p>
<p>すいとおん家は登録の連絡まで約1週間でした。これは個人の体験です。木場公園の2026年度公式案内では通常7〜10日、混雑時は2週間程度かかる場合があるとされています。</p>
<p>
<a href="https://www.tokyo-park.or.jp/faq/">対象公園・共通登録の公式案内 ↗</a> / 
<a href="https://www.tokyo-park.or.jp/park/kiba/facility/">2026年度の登録案内・申請入口 ↗</a></p></section>
`,
  },
];
