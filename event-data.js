/* ==================================================
   EVENT DATA

   ★ 新しいイベントを追加するときは
     このファイルに追加するだけ

   event.html
   → イベント一覧

   event-detail.html?id=イベントID
   → 各イベント詳細ページ


   ================================================
   TYPE

   "event"     → 通常イベント
   "adoption"  → 譲渡会


   ================================================
   REGION

   "hokkaido"  → 北海道
   "tohoku"    → 東北
   "kanto"     → 関東
   "chubu"     → 中部
   "kansai"    → 関西
   "chugoku"   → 中国
   "shikoku"   → 四国
   "kyushu"    → 九州・沖縄


   ================================================
   STATUS

   "scheduled" → 開催予定
   "cancelled" → 中止
   "postponed" → 延期

================================================== */


const calendarEvents = [


  /* ==================================================
     東京わんわん夏まつり2026
  ================================================== */

  {

    /* =========================
       BASIC
    ========================= */

    id:
      "tokyowanwansumeerfestival2026",


    title:
      "東京わんわん夏まつり2026",


    type:
      "event",


    status:
      "scheduled",



    /* =========================
       DATE
    ========================= */

    startDate:
      "2026-09-12",


    endDate:
      "2026-09-13",



    /* =========================
       AREA
    ========================= */

    region:
      "kanto",


    prefecture:
      "千葉県",


    place:
      "幕張メッセ展示ホール9F",


    /* 住所が分かればここ */

    address:
      "",


    /* Google Mapsなど */

    mapUrl:
      "https://www.m-messe.co.jp/event/detail/8830",



    /* =========================
       IMAGE
    ========================= */

    image:
      "images/event/tokyowanwansummerfestival2026.png",



    /* =========================
       LIST DESCRIPTION

       EVENT一覧に表示する
       短い紹介文
    ========================= */

    description:
      "わんちゃんのための夏のマーケットを開催！2日間限定でわんちゃん向けの様々なお店が大集合。夏の大抽選会や無料撮影スポットも。冷房完備の室内で天候を気にせず楽しめます。",



    /* =========================
       DETAIL CONTENT

       イベント詳細ページに表示
    ========================= */

    content: `

      <p>
        わんちゃんのための夏のマーケット
        「東京わんわん夏まつり2026」。
      </p>

      <p>
        2日間限定で、
        わんちゃん向けの様々なお店が集まる
        ドッグイベントです。
      </p>


      <h2>
        イベントについて
      </h2>

      <p>
        夏の大抽選会や
        無料撮影スポットなども予定されています。
      </p>

      <p>
        会場は冷房完備の室内なので、
        天候を気にせずお買い物を楽しめます。
      </p>

    `,



    /* =========================
       OFFICIAL
    ========================= */

    url:
      "https://www.instagram.com/tokyo_wanwan_event/"

  },



  /* ==================================================
     湘南DOG BOUSAI FESTA
  ================================================== */

  {

    /* =========================
       BASIC
    ========================= */

    id:
      "shonan-dog-bousai-festa-2026",


    title:
      "湘南DOG BOUSAI FESTA",


    type:
      "event",


    status:
      "scheduled",



    /* =========================
       DATE
    ========================= */

    startDate:
      "2026-09-13",


    endDate:
      "2026-09-13",



    /* =========================
       AREA
    ========================= */

   region:
  "kanto",

prefecture:
  "神奈川県",

place:
  "藤沢市",


    address:
      "",


    mapUrl:
      "https://maps.google.com/?cid=16197411460382779156&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=ja&source=embed",



    /* =========================
       IMAGE
    ========================= */

    image:
      "images/event/shonan-dog-bousai-festa-2026.png",



    /* =========================
       LIST DESCRIPTION
    ========================= */

    description:
      "防災とドッグイベントを組み合わせたファミリーイベント。",



    /* =========================
       DETAIL CONTENT
    ========================= */

    content: `

      <p>
        防災とドッグイベントを組み合わせた
        ファミリーイベントです。
      </p>


      <h2>
        犬と一緒に防災を考える
      </h2>

      <p>
        愛犬とのおでかけを楽しみながら、
        災害時の備えについて考える
        きっかけにもなるイベントです。
      </p>

    `,



    /* =========================
       OFFICIAL
    ========================= */

    url:
      "https://www.enoshimaevent.com/shonan-dog-bousai-festa-2026/"

  },
   /* ==================================================
   ① TAMA DOG FES
================================================== */

{
  id:
    "tama-dog-fes-tsuruma-2026",

  startDate:
    "2026-09-27",

  endDate:
    "2026-09-27",

  type:
    "event",

  status:
    "scheduled",

  title:
    "TAMA DOG FES in 南町田鶴間公園",

       region:
      "kanto",

  prefecture:
    "東京都",

  place:
    "南町田鶴間公園 水道みち",

  address:
    "東京都町田市鶴間3丁目1-1",

  image:
    "images/event/tama-dog-fes-2026.png",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=南町田鶴間公園",

  url:
    "https://www.instagram.com/tamadog.jp/",

  content: `

    <p>
      2026年9月27日（日）、南町田グランベリーパークに隣接する
      鶴間公園で「TAMA DOG FES」が開催されます。
    </p>

    <p>
      多摩エリアを中心とした愛犬家とわんちゃんが一緒に楽しめる、
      入場無料のドッグイベントです。
    </p>

    <p>
      会場には、わんちゃん向けのおやつやグッズなどが並ぶ
      マルシェをはじめ、愛犬と楽しめるさまざまなコンテンツが登場予定。
      お散歩をしながら立ち寄れるのもうれしいイベントです。
    </p>

    <h2>
      開催概要
    </h2>

    <p>
      <strong>日時：</strong>
      2026年9月27日（日）11:00〜16:00
    </p>

    <p>
      <strong>会場：</strong>
      南町田鶴間公園 水道みち
    </p>

    <p>
      <strong>入場料：</strong>
      無料
    </p>

    <p>
      <strong>主催：</strong>
      TAMA DOG
    </p>

  `
},


/* ==================================================
   ② いぬの夜まつり
================================================== */

{
  id:
    "inu-no-yomatsuri-laketown-2026",

  startDate:
    "2026-09-19",

  endDate:
    "2026-09-20",

  type:
    "event",

  status:
    "scheduled",

  title:
    "いぬの夜まつり",
       region:
      "kanto",

  prefecture:
    "埼玉県",

  place:
    "レイクタウン見田方遺跡公園",

  address:
    "埼玉県越谷市レイクタウン8丁目",

  image:
    "images/event/inu-no-yomatsuri-2026.png",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=見田方遺跡公園",

  url:
    "https://www.inutowatashi.com/event",

  content: `

    <p>
      2026年9月19日（土）・20日（日）の2日間、
      越谷レイクタウンの見田方遺跡公園で
      「いぬの夜まつり」が開催されます。
    </p>

    <p>
      夕方から夜にかけて、愛犬との“よるんぽ”を楽しみながら、
      お買い物や食事も楽しめるナイトドッグイベントです。
    </p>

    <p>
      会場には、わんちゃん用のおやつやフード、
      犬服やグッズなどのお店をはじめ、
      愛犬との暮らしを楽しめるさまざまなブースが登場予定です。
    </p>

    <p>
      暑さが少し落ち着く夕方から開催されるので、
      夏の終わりのお出かけにもぴったりです。
    </p>

    <h2>
      開催概要
    </h2>

    <p>
      <strong>日時：</strong>
      2026年9月19日（土）・20日（日）
      15:30〜20:00
    </p>

    <p>
      <strong>会場：</strong>
      レイクタウン見田方遺跡公園
    </p>

    <p>
      <strong>アクセス：</strong>
      越谷レイクタウン駅から徒歩圏内
    </p>

    <p>
      <strong>入場料：</strong>
      無料
    </p>

    <p>
      <strong>企画・運営：</strong>
      いぬとわたし合同会社
    </p>

  `
},


/* ==================================================
   ③ うちの仔市場 in 郡山DX
================================================== */

{
  id:
    "uchinoco-ichiba-koriyama-dx-2026",

  startDate:
    "2026-09-22",

  endDate:
    "2026-09-23",

  type:
    "event",

  status:
    "scheduled",

  title:
    "うちの仔市場 in 郡山DX vol.14",
       region:
      "tohoku",

  prefecture:
    "福島県",

  place:
    "ビッグパレットふくしま",

  address:
    "福島県郡山市南2丁目52",

  image:
    "images/event/uchinoco-ichiba-koriyama-dx-2026.png",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=ビッグパレットふくしま",

  url:
    "https://www.uchinoco.club/",

  content: `

    <p>
      2026年9月22日（火・祝）・23日（水・祝）の2日間、
      福島県郡山市のビッグパレットふくしまで
      「うちの仔市場 in 郡山DX vol.14」が開催されます。
    </p>

    <p>
      屋内会場で開催される大規模なわんちゃんイベントで、
      福島県内だけでなく県外からもさまざまなお店が集まります。
    </p>

    <p>
      わんちゃん用のおやつやフード、洋服、
      グッズなどのお買い物を楽しめるほか、
      犬種別オフ会などの交流企画も予定されています。
    </p>

    <p>
      同じ犬種のお友達を見つけたい方や、
      わんちゃんと一緒にゆっくりお買い物を楽しみたい方にも
      注目のイベントです。
    </p>

    <h2>
      開催概要
    </h2>

    <p>
      <strong>日時：</strong>
      2026年9月22日（火・祝）・23日（水・祝）
    </p>

    <p>
      <strong>会場：</strong>
      ビッグパレットふくしま
      多目的ホール・屋外展示場
    </p>

    <p>
      <strong>内容：</strong>
      ドッグマルシェ・犬種別オフ会・スタンプラリーなど
    </p>

    <p>
      ※開催時間・入場料などは公式情報をご確認ください。
    </p>

  `
},


/* ==================================================
   ⑤ ジャパンわんこフェスタ2026 秋
================================================== */

{
  id:
    "japan-wanko-festa-autumn-2026",

  startDate:
    "2026-11-27",

  endDate:
    "2026-11-29",

  type:
    "event",

  status:
    "scheduled",

  title:
    "ジャパンわんこフェスタ2026 秋",

       region:
      "kanto",

  prefecture:
    "東京都",

  place:
    "お台場セントラル広場及びプロムナード",

  address:
    "東京都江東区青海1丁目1",

  image:
    "images/event/japan-wanko-festa-2026-autumn.png",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=お台場セントラル広場",

  url:
    "https://www.instagram.com/flaffy.fes/",

  content: `

    <p>
      2026年11月27日（金）〜29日（日）の3日間、
      お台場セントラル広場及びプロムナードで
      「ジャパンわんこフェスタ2026 秋」が開催されます。
    </p>

    <p>
      「ペットもヒトも一緒に楽しめる」をテーマにした
      大型ドッグイベント。
      愛犬と一緒にお買い物やさまざまなコンテンツを
      楽しむことができます。
    </p>

    <p>
      会場にはわんちゃん向けのおやつや洋服、
      グッズなどのショップをはじめ、
      愛犬家が楽しめるさまざまなブースや企画が登場予定です。
    </p>

    <p>
      2026年6月開催と同じお台場エリアで、
      秋にも開催される注目イベントです。
    </p>

    <h2>
      開催概要
    </h2>

    <p>
      <strong>日時：</strong>
      2026年11月27日（金）〜29日（日）
      10:00〜17:00
    </p>

    <p>
      <strong>会場：</strong>
      お台場セントラル広場及びプロムナード
    </p>

    <p>
      <strong>住所：</strong>
      東京都江東区青海1丁目1
    </p>

    <p>
      <strong>入場料：</strong>
      無料
    </p>

  `
},


/* ==================================================
   ⑥ わんてらす 横浜ベイサイド
================================================== */

{
  id:
    "wanterrace-yokohama-bayside-2026-autumn",

  startDate:
    "2026-09-27",

  endDate:
    "2026-09-27",

  type:
    "event",

  status:
    "scheduled",

  title:
    "わんてらす in 三井アウトレットパーク 横浜ベイサイド 2026秋",

       region:
      "kanto",

  prefecture:
    "神奈川県",

  place:
    "三井アウトレットパーク 横浜ベイサイド",

  address:
    "神奈川県横浜市金沢区白帆5-2",

  image:
    "images/event/wanterrace--2026.png",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=三井アウトレットパーク横浜ベイサイド",

  url:
    "https://www.wanterrace.com/",

  content: `

    <p>
      2026年9月27日（日）、
      三井アウトレットパーク 横浜ベイサイドで
      「わんてらす in 三井アウトレットパーク 横浜ベイサイド 2026秋」
      が開催されます。
    </p>

    <p>
      春に続いて開催される今回のわんてらすでは、
      「Cブロック1階 くじらの大屋根広場」に加えて、
      海沿いウッドデッキエリアまでマルシェ会場を拡大。
    </p>

    <p>
      海風を感じながら、
      愛犬と一緒にお買い物を楽しめます。
      会場には厳選された人気の25店舗が出店予定です。
    </p>

    <h2>
      開催概要
    </h2>

    <p>
      <strong>日時：</strong>
      2026年9月27日（日）10:00〜16:00
    </p>

    <p>
      <strong>会場：</strong>
      Cブロック1階 くじらの大屋根広場
      ＋ 海沿いウッドデッキエリア
    </p>

    <p>
      <strong>入場料：</strong>
      無料
    </p>

    <p>
      <strong>天候：</strong>
      雨天決行・荒天中止
    </p>

    <h2>
      わんちゃん連れの注意事項
    </h2>

    <p>
      くじらの大屋根広場の人工芝エリアでは、
      わんちゃんはカートやキャリーバッグ、
      または抱っこでの入場が可能です。
    </p>

    <p>
      リードを着用して人工芝エリアを歩く場合は、
      マナーウェアの着用が必要です。
    </p>

    <p>
      万が一、会場内で排泄してしまった場合は、
      飼い主さん自身で処理を行い、
      スタッフへの声かけもお願いします。
    </p>

  `
},

   /* ==================================================
   北海道
================================================== */

{
  id:
    "ishikari-animal-welfare-autumn-festival-2026",

  startDate:
    "2026-09-26",

  endDate:
    "2026-09-27",

  type:
    "event",

  status:
    "scheduled",

  title:
    "石狩動物愛護秋まつり2026",

  region:
    "hokkaido",

  prefecture:
    "北海道",

  place:
    "石狩市役所前広場",

  address:
    "北海道石狩市花川北6条1丁目30番地2",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=石狩市役所前広場",

  image:
    "images/event/ishikari-animal-welfare-autumn-festival-2026.png",

  description:
    "ペットと家族で楽しめる動物愛護イベント。マルシェやしつけ・お手入れ・防災に関する企画などが予定されています。",

  content: `

    <p>
      北海道石狩市で開催される動物愛護イベントです。
    </p>

    <p>
      犬猫グッズやおやつのマルシェのほか、
      犬の歯みがき教室、お手入れセミナー、
      しつけ講座、ペット防災に関する企画などが予定されています。
    </p>

    <p>
      開催時間は両日10:00〜16:00予定です。
    </p>

    <p>
      ペット同伴での来場が案内されていますが、
      リード着用など会場ルールを確認して参加しましょう。
    </p>

  `,

  url:
    "https://wannyan-smile.com/6630p/"
},

/* ==================================================
   東北
================================================== */

{
  id:
    "arche-pet-fes-matsushima-autumn-2026",

  startDate:
    "2026-10-03",

  endDate:
    "2026-10-04",

  type:
    "event",

  status:
    "scheduled",

  title:
    "ARCHE! presents ペットフェス2026秋 in 宮城県松島離宮",

  region:
    "tohoku",

  prefecture:
    "宮城県",

  place:
    "宮城県 松島離宮",

  address:
    "宮城県宮城郡松島町松島浪打浜18",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=宮城県松島離宮",

  image:
    "images/event/arche-pet-fes-matsushima-autumn-2026.png",

  description:
    "松島離宮で開催されるペットイベント。撮影会やマルシェ、ステージ企画などが予定されています。",

  content: `

    <p>
      宮城県松島離宮で開催される、
      ARCHE!主催のペットフェスです。
    </p>

    <p>
      撮影会やペット関連マルシェ、
      ステージイベントなどが予定されています。
    </p>

    <p>
      開催時間は両日10:00〜16:00。
    </p>

    <p>
      入場料は大人800円、こども400円です。
      最新情報は公式サイトをご確認ください。
    </p>

  `,

  url:
    "https://arche.miyagi.jp/event/2026-7-2/"
},


{
  id:
    "wan-wonderful-festa-yamagata-2026",

  startDate:
    "2026-10-17",

  endDate:
    "2026-10-18",

  type:
    "event",

  status:
    "scheduled",

  title:
    "Wan! Wonderful Festa 山形会場",

  region:
    "tohoku",

  prefecture:
    "山形県",

  place:
    "やまぎん県民ホール 屋外イベント広場",

  address:
    "山形県山形市双葉町1丁目2-38",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=やまぎん県民ホール",

  image:
    "images/event/wan-wonderful-festa-yamagata-2026.png",

  description:
    "参加型企画やドッグマルシェなどを楽しめる山形のドッグイベント。",

  content: `

    <p>
      やまぎん県民ホールの屋外イベント広場で開催される
      ドッグイベントです。
    </p>

    <p>
      参加型企画やわんわんガチャなど、
      愛犬と楽しめるコンテンツが予定されています。
    </p>

    <p>
      開催時間は両日10:30〜16:30予定です。
    </p>

  `,

  url:
    ""
},


{
  id:
    "koiwai-dog-fes-2026",

  startDate:
    "2026-10-17",

  endDate:
    "2026-10-18",

  type:
    "event",

  status:
    "scheduled",

  title:
    "小岩井ドッグフェス2026",

  region:
    "tohoku",

  prefecture:
    "岩手県",

  place:
    "小岩井農場まきば園",

  address:
    "岩手県岩手郡雫石町丸谷地36-1",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=小岩井農場まきば園",

  image:
    "images/event/koiwai-dog-fes-2026.png",

  description:
    "小岩井農場で開催される大規模ドッグイベント。広い牧場で愛犬と一日楽しめます。",

  content: `

    <p>
      小岩井農場まきば園で開催されるドッグフェスです。
    </p>

    <p>
      広大な牧場を舞台に、
      愛犬と楽しめるさまざまな企画が予定されています。
    </p>

    <p>
      開催時間は9:00〜17:00予定です。
    </p>

    <p>
      イベント自体の参加条件や農場入場料などは、
      最新の公式案内をご確認ください。
    </p>

  `,

  url:
    ""
},


{
  id:
    "hachinohe-wanko-festival-2026",

  startDate:
    "2026-11-08",

  endDate:
    "2026-11-08",

  type:
    "event",

  status:
    "scheduled",

  title:
    "第3回 八戸わんこ大祭2026",

  region:
    "tohoku",

  prefecture:
    "青森県",

  place:
    "FLAT HACHINOHE",

  address:
    "青森県八戸市尻内町三条目7-7",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=FLAT HACHINOHE",

  image:
    "images/event/hachinohe-wanko-festival-2026.png",

  description:
    "犬種別オフ会や撮影ブース、参加型企画などが楽しめる八戸の犬イベント。",

  content: `

    <p>
      FLAT HACHINOHEで開催される犬のイベントです。
    </p>

    <p>
      犬種別オフ会や撮影ブース、
      参加型企画などが予定されています。
    </p>

    <p>
      開催時間は9:30〜15:00予定です。
    </p>

  `,

  url:
    ""
},


/* ==================================================
   中部
================================================== */

{
  id:
    "wan-wonderful-festa-shiojiri-2026",

  startDate:
    "2026-10-03",

  endDate:
    "2026-10-04",

  type:
    "event",

  status:
    "scheduled",

  title:
    "Wan!WonderfulFesta長野 in 塩尻",

  region:
    "chubu",

  prefecture:
    "長野県",

  place:
    "チロルの森",

  address:
    "長野県塩尻市北小野相吉5050",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=チロルの森",

  image:
    "images/event/wan-wonderful-festa-shiojiri-2026.png",

  description:
    "長野県塩尻市で開催される愛犬と楽しめるドッグイベント。",

  content: `

    <p>
      長野県塩尻市のチロルの森で開催される
      Wan!WonderfulFestaです。
    </p>

    <p>
      開催時間は両日10:30〜16:30予定です。
    </p>

    <p>
      出店情報や当日の詳細は
      公式Instagramをご確認ください。
    </p>

  `,

  url:
    "https://www.instagram.com/wanwonderful_festa/"
},


{
  id:
    "kisosansen-wanko-marche-vol28-2026",

  startDate:
    "2026-10-03",

  endDate:
    "2026-10-04",

  type:
    "event",

  status:
    "scheduled",

  title:
    "木曽三川わんこマルシェ vol.28",

  region:
    "chubu",

  prefecture:
    "岐阜県",

  place:
    "国営木曽三川公園 木曽三川公園センター",

  address:
    "岐阜県海津市海津町油島255-3",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=木曽三川公園センター",

  image:
    "images/event/kisosansen-wanko-marche-vol28-2026.png",

  description:
    "愛犬グッズの買い物やキッチンカー、愛犬家同士の交流を楽しめるマルシェ。",

  content: `

    <p>
      国営木曽三川公園で開催される
      わんこマルシェです。
    </p>

    <p>
      愛犬グッズのお買い物やキッチンカーのグルメ、
      愛犬家同士の交流などを楽しめます。
    </p>

    <p>
      開催時間は両日10:00〜16:00。
      荒天中止です。
    </p>

  `,

  url:
    "https://www.kisosansenkoen.jp/~center/mkisosansenevent_aki.html"
},


{
  id:
    "boo-bull-boo-festa-autumn-2026",

  startDate:
    "2026-10-04",

  endDate:
    "2026-10-04",

  type:
    "event",

  status:
    "scheduled",

  title:
    "BOO!! BULL BOO!! FESTA 2026 AUTUMN",

  region:
    "chubu",

  prefecture:
    "静岡県",

  place:
    "富士山樹空の森",

  address:
    "静岡県御殿場市印野1380-15",

  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=富士山樹空の森",

  image:
    "images/event/boo-bull-boo-festa-autumn-2026.png",

  description:
    "富士山樹空の森で開催される秋のドッグイベント。",

  content: `

    <p>
      静岡県御殿場市の富士山樹空の森で開催される
      秋のドッグイベントです。
    </p>

    <p>
      出店内容や開催時間などの最新情報は
      公式案内をご確認ください。
    </p>

  `,

  url:
    ""
},


];
