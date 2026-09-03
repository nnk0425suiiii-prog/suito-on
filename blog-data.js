/* ==================================================
   BLOG DATA

   ★ 新しいブログを書くときは
     このファイルに記事を追加するだけ

   ★ products に登録した商品は
     ITEMSページにも自動で表示されます
================================================== */

const blogPosts = [

  /* ==================================================
     01 はじめてのブログ
  ================================================== */

  {
    id: "first-blog",

    title: "はじめてのブログ。",

    date: "2026.08.24",

    datetime: "2026-08-24",

    category: "日常",

    categoryId: "daily",

    image:
      "blog/images/suion-01.png",

    lead:
      "すいとおん。との毎日や、実際に使ってよかったもの、犬との暮らしで思ったことを少しずつ残していきます。",


    /* =========================
       記事本文
    ========================= */

    content: `

      <p>
        こんにちは。
        「すいとおん。」です。
      </p>

      <p>
        すいとおんとの生活を始めてから、
        犬用品を使っていて
        「これすごく便利！」と思うこともあれば、
        「ここがもうちょっとこうだったらいいのに」
        と思うことも増えました。
      </p>

      <p>
        また、すいとおん。との生活や日常を
        形で残したいと思い始めました。
      </p>


      <h2>
        このブログで書いていきたいこと
      </h2>

      <p>
        毎日のお散歩やおでかけ、
        実際に使っている犬用品、
        イベント情報のことなどを
        書いていこうと思います。
      </p>


      <figure>

        <img
          src="blog/images/firstblog.png"
          alt="まだおうちに迎えて間もないおんと貫禄のあるすい"
        >

        <figcaption>
          まだおうちに迎えて間もないおんと貫禄のあるすい
        </figcaption>

      </figure>


      <h2>
        本当に使ったものを。
      </h2>

      <p>
        商品について書くときは、
        実際に使ってみてどうだったかを
        できるだけそのまま残していきます。
      </p>

      <p>
        体格の違う2匹だからこそ、
        同じ商品でも使いやすさが
        全然違うこともあります。
      </p>

    `,


    /* =========================
       記事内の商品

       ITEMSにも自動表示
    ========================= */

    products: [

      {
        id:
          "swamp-cooler-harness",

        category:
          "お散歩用品",

        categoryId:
          "walk",

        name:
          "スワンプクーラードッグハーネス",

        image:
          "blog/images/product-01.png",

        price:
          "¥11,550",

        dog:
          "SUI",

        description:
          "気化熱を利用して冷やす機能を備えたハーネスです。ハーネスを水で濡らしてから着用させるもので、実際にハーネスと体の間を触ってみたらしっかりとひんやりしていました！普段は暑さに耐えられずすぐに歩かなくなってしまうすいでも30分ほど散歩することができ、運動不足解消もできる優れた商品でした☺️ 体重7kgのすいでも一番小さいサイズを着用しております。",

        url:
          "https://ruffwear.jp/collections/swamp-cooler-collection-jp"
      }

    ]

  },


  /* ==================================================
     02 紹介：すい
  ================================================== */

  {
    id: "introduce-sui",

    title: "紹介：すい",

    date: "2026.08.25",

    datetime: "2026-08-25",

    category: "日常",

    categoryId: "daily",

    image:
      "blog/images/introduce-02.png",

    lead:
      "マルシュナMIX・♂・7.5キロ",


    /* =========================
       記事本文
    ========================= */

    content: `

      <p>
        紹介第一弾☺️
      </p>

      <p>
        すいとの出会いは2025/6/24。
        すいと出会うまで約半年ほどいろんなHPやブリーダーさんを探している中、『明日デビューのワンコ』の文字に連れられHPをみたらなんと今の姿とは全く違うすいが...
        ビビッときてすぐにHP記載の連絡先に連絡し、明日伺いますとお伝えしたのがきっかけでした。
        本当に連れて変えるのかなど自分自身でもまだ決まってなかったのですが、すいを抱っこして即決断。
        そのままおうちに連れて帰りました。
        生2ヶ月間もなく、当時の体重は850グラム。
        小さすぎてどう抱っこしていいのかもわからないくらいの大きさで、大人になっても2~3キロだと言われましたが
        今ではなんと7キロ越え。立派にスクスク育ってくれていてとても嬉しいです
      </p>

      <p>
        家にはすでに3匹の猫様たちがいて、馴染めるのか、そもそも私自身が育てるという覚悟がちゃんとできているのかなど不安はありましたが
        すいの無邪気で賢い性格のおかげでパピー期も難なく乗り越え1年が経ちました。
      </p>


      <h2>
        この1年でたくさんの思い出をくれてるすい
      </h2>

      <p>
        元々すいの主はインドアでやる気のない人間だったので、すいがきてくれたことで生活に彩りが。。。
        すいは主と違いとても社交的でどんなわんちゃんも猫ちゃんも大好きで、お散歩で誰にも会えない日には会えるまで耐久戦最高３時間越え。
        いろんな景色や経験をこれからたくさん無理なく一緒にできたらいいね♡
        手のかかる主だけど、またやってるよって感じでやり過ごしてね
      </p>


      <div class="article-photo-grid">

        <figure>
          <img
            src="blog/images/sui-01.png"
            alt="お仕事中構ってアピールが上手なすい"
          >
        </figure>

        <figure>
          <img
            src="blog/images/sui-02.png"
            alt="ハロウィン仮装させられて困ってるすい"
          >
        </figure>

        <figure>
          <img
            src="blog/images/sui-03.png"
            alt="大好きな芝生で楽しいすい"
          >
        </figure>

      </div>


      <h2>
        名前の由来
      </h2>

      <p>
        すいは『翠』。
        由来というか、経緯、、
        私が水色が好きで、水曜日の雨の日にすいと出会えたのが決め手でした。
        帰りの車でいろんな候補を考えましたが、やっぱりすいだ。ということでここは水ではなくちょっと洒落て『翠』にしました。
        後から気がつきましたが、すいは雨男で、水難の相があるかもしれないとここ最近感じてます💧
      </p>

      <p>
        🎂2025/04/25
        🏠2025/06/25
      </p>

    `,


    /* =========================
       記事内の商品

       ITEMSにも自動表示
    ========================= */

    products: [

      {
        id:
          "front-range-harness",

        category:
          "お散歩用品",

        categoryId:
          "walk",

        name:
          "フロントレンジハーネス",

        image:
          "blog/images/product-02.png",

        price:
          "¥9,500",

        dog:
          "SUI",

        description:
          "リードが背面と胸元の3箇所に取り付けることができ、IDタグなどが収納できるポケットがついてるのがとても魅力ですいはこのシリーズ2色使用しています！",

        url:
          "https://ruffwear.jp/products/front-range-everyday-dog-harness"
      }

    ]

  },


  /* ==================================================
     03 紹介：おん
  ================================================== */

  {
    id: "introduce-on",

    title: "紹介：おん",

    date: "2026.08.26",

    datetime: "2026-08-26",

    category: "日常",

    categoryId: "daily",

    image:
      "blog/images/on-01.png",

    lead:
      "チワプーMIX・♂・2.5キロ",


    /* =========================
       記事本文
    ========================= */

    content: `

      <p>
        紹介第二弾☺️
      </p>

      <p>
        おんとの出会いは2026/2/2。
        1つ前の記事で少し書きましたが、すいがお散歩中他のわんちゃんに出会えるまで帰らない,,,家では猫3匹に時々馴染めずちょっと悲しそうな顔しているような気がして
        まだすいを迎えて1年も経ってないのにこの子には弟か妹いたほうが楽しいのかなと思い始めたのがオンとの出会いのきっかけでした。
        たくさん色々考えて、考えて、すいに対しても次迎える子に対しても同等にいられるのか、相性が悪くないのかなどたくさん考えるきっかけをくれて
        これからどうするべきか考えた時に、おんを見つけました。
      </p>

      <p>
        実際にすいを連れておんに会いに行って考えようと翌日すいと一緒におんに会いにいき両者の反応を見てこの子がいいとその日お迎えすることを決めました。
        いろんな心配があった中2人はすぐに仲良く遊んだり、一緒に寝たりと心配をよそにとても楽しそうにしていたので安心したのを覚えてます。
      </p>


      <h2>
        人が大好きなおん
      </h2>

      <p>
        おんはすいと少し違うのはわんちゃんや猫様より、人。とにかく。人。その容姿と性格相まってお散歩してるとご近所の方から可愛い、抱っこさせてや写真撮ってもいいかなど言われます笑
        おんも満更ではなく持ってる愛嬌を全力で披露しているので微笑ましくなります☺️
      </p>


      <div class="article-photo-grid">

        <figure>
          <img
            src="blog/images/on-02.png"
            alt="おん"
          >
        </figure>

        <figure>
          <img
            src="blog/images/on-03.png"
            alt="おん"
          >
        </figure>

        <figure>
          <img
            src="blog/images/on-04.png"
            alt="おん"
          >
        </figure>

      </div>


      <h2>
        名前の由来
      </h2>

      <p>
        おんの名前の由来は、キャッチーで覚えてもらいやすい名前にしたいと思い、またすいと繋げたいという気持ちから
        『温』にしました。つなげると『すい』『おん』。よくお散歩してる時に名前を聞かれる機会がすいの時にあるのを知ったので
        それならセットで覚えてもらえたらいいと思いました。なので紹介の仕方は水の温度ですいおんです。おんすいでも覚えられます。
        と言ったら大体1回で覚えてもらえるので良かったなと思います。
        名前の通り温かい性格で誰とでも仲良くしてくれるおんのこれからが楽しみです❤️
      </p>


      <p>
        🎂2025/11/22
        🏠2026/02/02
      </p>

    `,


    /* =========================
       記事内の商品

       ITEMSにも自動表示
    ========================= */

    products: [

      {
        id:
          "julius-k9-idc-baby-1",

        category:
          "お散歩用品",

        categoryId:
          "walk",

        name:
          "JULIUS-K9 IDC Baby 1",

        image:
          "blog/images/product-03.png",

        price:
          "¥3,850",

        dog:
          "ON",

        description:
          "とにかく体が小さい・付けられるものがないと困っていた時にようやく見つけたハーネスです",

        url:
          "https://www.julius-k9.jp/view/item/000000000005?category_page_id=harness"
      }

    ]

  },


  /* ==================================================
     04 初・プール開き
  ================================================== */

  {
    id: "pool",

    title: "初・プール開き",

    date: "2026.08.27",

    datetime: "2026-08-27",

    category: "おでかけ",

    categoryId: "outing",

    image:
      "blog/images/pool.png",

    lead:
      "すいとおん。初めてのプールに挑戦😤",


    /* =========================
       記事本文
    ========================= */

    content: `

      <p>
        わんだふるネイチャーヴィレッジにお邪魔してきました！
      </p>

      <p>
        今年は暑くなるのが早めだったので、7月になってすぐプールに行こうと
        すいとおん。が泳げるのかも分からないまま主の意向で直行。
      </p>

      <p>
        最初は困り果てていたすいとおんですが、最終的にすいは楽しそうに自分からプールに飛び込むまでに成長🌟
        おんは水が怖くて入りたくなくプールの周りですいがでてくるのをじっと待っていました笑
      </p>


      <div class="article-photo-grid">

        <figure>
          <img
            src="blog/images/pool-01.png"
            alt="プールで遊ぶすいとおん"
          >
        </figure>

        <figure>
          <img
            src="blog/images/pool-02.png"
            alt="プールで遊ぶすいとおん"
          >
        </figure>

        <figure>
          <img
            src="blog/images/pool-03.png"
            alt="プールで遊ぶすいとおん"
          >
        </figure>

      </div>


      <p>
        3時間ほど滞在し、プールについてるドライヤーで全身を乾かしてから帰宅。
        車の中で2人とも丸まって寝ていました。
        すいに限ってはしっかりいびきまで💤
      </p>


      <figure>

        <img
          src="blog/images/pool-05.png"
          alt="プールで遊んだすいとおん"
        >

        <figcaption>
          初めてのプール、おつかれさま。
        </figcaption>

      </figure>

    `,


    /* =========================
       記事内の商品

       ★ 1記事目と同じ商品なので
         同じidにしています。

       ITEMSでは重複せず
       1商品として表示されます。
    ========================= */

    products: [

      {
        id:
          "drive-box",

        category:
          "おでかけ",

        categoryId:
          "outing",

        name:
          "Petsfit 犬 ドライブボックス",

        image:
          "blog/images/product-04.png",

        price:
          "",

        dog:
          "BOTH",

        description:
          "【特許取得の安全バックル-安定·安心のドライブシート】/Lサイズを助手席で使用中しています",

        url:
          "https://www.amazon.co.jp/Petsfit-ドライブボックス-暖かい内布を充填-寒い冬に対応-【座り台の高さが調節できるタイプ】ドライブシート/dp/B0D25H4LRN/ref=pd_vtp_d_sccl_2_1/358-1508013-4924848?pd_rd_w=cGRL3&content-id=amzn1.sym.289d93c5-bb87-47e6-b56c-76ff89f5333d&pf_rd_p=289d93c5-bb87-47e6-b56c-76ff89f5333d&pf_rd_r=RHV17YGBA9ABHTC2DBB5&pd_rd_wg=1FpwY&pd_rd_r=7b137edd-d90c-4af4-bd96-31cfb8ff332f&pd_rd_i=B0CLR64QWC&th=1"
      }

    ]

  },

{
  id: "sui-food-journey",

  title:
    "涙やけを治したかっただけなのに、主食迷子になりました。",

  date:
    "2026.08.29",

  datetime:
    "2026-08-29",

  category:
    "犬用品",

  categoryId:
    "goods",

  image:
    "blog/images/sui-food.png",

  lead:
    "食べない、食べても続かない、ついには胃液を吐いても食べない。約1年間、13種類以上試してようやく見つけた“すいが毎日食べるご飯”のお話。",

  content: `

    <p>
      すいの「主食問題」。
    </p>

    <p>
      すいがお迎え当初に食べていたのはロイヤルカナン。
      そこからだんだん食わず嫌いが始まり、
      うんちの匂いや涙やけも気になるようになりました。
    </p>

    <p>
      特に涙やけは、白い顔の毛が赤く見えるくらい。
    </p>

    <p>
      「もしかしたら、ご飯を変えたら少し変わるかも？」
    </p>

    <p>
      そんなところから始まったフード探し。
    </p>

    <p>
      まさかこの時は、
      涙やけよりも先に
      「そもそもご飯を食べてくれない」
      という問題と約1年間戦うことになるとは思っていませんでした。
    </p>


    <h2>
      涙やけ改善のはずが、食わず嫌い発症
    </h2>

    <p>
      涙やけについて調べて、
      原材料を見たり、口コミを読んだりしながら、
      良さそうなご飯をいろいろ試しました。
    </p>

    <p>
      食べない。
    </p>

    <p>
      最初は食べても数日後には食べない。
    </p>

    <p>
      お腹が空いているはずなのに食べない。
    </p>

    <p>
      そしてトッピングだけ綺麗に食べる。
    </p>

    <p>
      ……完全に主食迷子の始まりです。
      この1年で多くのご飯を試した中で少しでも食べたことがあるのを厳選して紹介します😭
    </p>


    <h2>
      すいの主食遍歴
    </h2>


    <!-- =========================================
         FOOD 01
         AMAZON_URL_01 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/ロイヤルカナン-SHNミニ-インドア-パピー-室内で生活する小型犬専用フード-子犬/dp/B011R1LX1A/ref=sr_1_4_pp?crid=18R7NPOGBS7KE&dib=eyJ2IjoiMSJ9.rSQfglCUvHMZ7py4YRZcy7mHZhMqHhhAUSk2pw0wdC-LNzKuWhltQCh5vcY5Aj-DEhbUgVIiqPBANZH4xqTBaPbX14yDYplI0t8qyyMZp9k7QGOJULT9uWl9z5UiImzu3orM_dsoqaIMUl1QH92JXZSsJReUyPdzXKHeEisZiXtg22GBENCxm3fGXMa-8Jwolqht2H_cC1pPLMIixldOPODn8aALOBrB5f9wqYgSpngTHp86IA8LeES9w-Pb_PMmdDi6PQEz0bNngUhPWuuZ9lNaWzt485_dCAtTX9ngab8.i-w-E6cyz25fbCfZmqejolizJAHtM7YkThFtNYPITkk&dib_tag=se&keywords=ロイヤルカナン&qid=1788050144&s=pet-supplies&sprefix=ロイ%2Cpets%2C228&sr=1-4&ufe=app_do%3Aamzn1.fos.35785624-70c4-44ae-a5c3-3f044f475d63"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-01.png"
        alt="ロイヤルカナン SHN ミニ インドア パピー"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 01
        </span>

        <span class="article-product-name">
          ロイヤルカナン
        </span>

        <span class="article-product-sub">
          SHN ミニ インドア パピー
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      すいがお迎え当初から食べていたご飯。
    </p>

    <p>
      だんだん食わず嫌いが始まったことに加えて、
      うんちの匂いと涙やけが気になるようになりました。
    </p>

    <p>
      特に涙やけは、
      白い毛が真っ赤に見えるくらい。
    </p>

    <p>
      ここから「ご飯を変えてみよう」と思い始めます。
    </p>


    <!-- =========================================
         FOOD 02
         AMAZON_URL_02 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/Nutro-100g×24個-ドッグフード-厳選自然素材-香料・着色料/dp/B08Y677TBG/ref=sr_1_5_pp?crid=10UR2LDHONY5H&dib=eyJ2IjoiMSJ9.hbO31-3M-39cPgJxSppBoQiBAQU-hioRVSfTACeWhYYTcbhLpVZgx2K7i2zvFkpF79AOut0gXGoqbEl0FTsz0ExMU9Qy-r2AI96BTQoTHyKVL194Z8yob9xx72FVd37hEGzxZGAljYCzKuODj-b47az6lyW5nu-yLR4MIy7AlDwUYxMVRsLz805JA3W1KZLZvO2m8O0o7V_Gp_NVVHVEaCWS02FQ6Q_TCiisAKo6ZRsFcvbSk4-1hVijLYmOpnYUspEx0xXUwxQYya2D7MI0n_AUJuXc4QW3SF2aXpEmSjQ.gaS_ijMRMxoDvPrvIn5YPepZztnfCokmKx5mJe7avsk&dib_tag=se&keywords=シュプレモ%2B子犬&qid=1788050234&sprefix=shupuremo%2Caps%2C256&sr=8-5&th=1"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-02.png"
        alt="Nutro シュプレモ ウェット パテタイプ 子犬用"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 02
        </span>

        <span class="article-product-name">
          Nutro シュプレモ
        </span>

        <span class="article-product-sub">
          ウェット パテタイプ 子犬用
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      とにかく食べない。
    </p>

    <p>
      どうやら味自体があまり得意ではなかったらしく、
      ほとんど食べてくれませんでした。
    </p>

    <p>
      今思えばこのあたりから、
      「もしかしてこの子、ウェットフード自体が好きじゃない？」
      という片鱗は見えていた気がします。
    </p>


    <!-- =========================================
         FOOD 03
         AMAZON_URL_03 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/dp/B0D2HR8X33?ref=nb_sb_ss_w_as-reorder_k0_1_3&amp=&crid=1RUSP7TPVX0TA&sprefix=now&th=1"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-03.png"
        alt="NOW FRESH 小型犬 子犬用"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 03
        </span>

        <span class="article-product-name">
          NOW FRESH
        </span>

        <span class="article-product-sub">
          小型犬 子犬用 ターキー＆サーモン＆ダック
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      ターキー＆サーモン＆ダックの超小粒タイプ。
    </p>

    <p>
      最初の1週間ほどは食べてくれて、
      1日1回完食したらいい方という感じでした。
    </p>

    <p>
      うんちの匂いはかなり軽減されたように感じましたが、
      すいの場合、涙やけにはあまり変化を感じず。
    </p>

    <p>
      そしてやっぱり、
      だんだん食べなくなりました。
    </p>


    <!-- =========================================
         FOOD 04
         AMAZON_URL_04 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/ネイチャーズプロテクション-スーペリアケア-ホワイトドッグ-グレインフリー-1-5kg/dp/B08FTF1427/ref=sr_1_4_pp?__mk_ja_JP=カタカナ&crid=1GM8SCRVJ92TL&dib=eyJ2IjoiMSJ9.4b-_bvaIAi0G1HLxLp3CP0s6eewFwN3RU3rGsR7S-8yLFqHb4C3SHkHoOk7tW1zqN_8IcDVRoFI6Te172oxyOeuL7X4clSFajnnhIJy--Nt7fPCb6fezPnn5M3n2v5Byj58LpxyQ_E2eOXWd6dDKGm_aH6gK9l0Njf2rPUIElb1LuDEqt98t7tqLkAnDSPUOrr49oOTMkjGgPv4Fvc8BTjl9F1qfYGKvkyaWfQELJZqMn7fCwjiBA4yFsonuVMnquocp6lvaX4OVPO96ei66mT2hxsSwbHCfg_mPBkDsf30.uMtZBnk_GpJyVg2iWiZNuQcKTd9INraKrLna42Wtyh8&dib_tag=se&keywords=ネイチャーズプロテクション&qid=1788050960&s=pet-supplies&sprefix=ネイチャーズプロテクション%2Cpets%2C206&sr=1-4&ufe=app_do%3Aamzn1.fos.35785624-70c4-44ae-a5c3-3f044f475d63"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-04.png"
        alt="ネイチャーズプロテクション スーペリアケア ホワイトドッグ ジュニア"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 04
        </span>

        <span class="article-product-name">
          ネイチャーズプロテクション
        </span>

        <span class="article-product-sub">
          スーペリアケア ホワイトドッグ ジュニア
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      ここで一度、かなりの希望が。
    </p>

    <p>
      すいの場合、
      今まで試した中で涙やけに一番大きな変化を感じたのがこれでした。
    </p>

    <p>
      真っ赤に見えていた涙やけが落ち着いて、
      しかもちゃんと食べる。
    </p>

    <p>
      「これで決まりなのでは？」
    </p>

    <p>
      ……が。
    </p>

    <p>
      涙やけが落ち着いたタイミングで一度別のご飯に変えてみたところ、
      なぜかその後こちらを食べなくなりました。
    </p>

    <p>
      あんなに食べてたじゃん。
    </p>

    <p>
      すいの主食探し、続行です。
    </p>


    <!-- =========================================
         FOOD 05
         AMAZON_URL_05 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/ZIWI-ジウィ-ZPDDB1000P-ZIWI-エアドライドッグフード-グラスフェッドビーフ-1kg/dp/B00JFAXFEO/ref=sr_1_4_pp?__mk_ja_JP=カタカナ&crid=30MXPDHWMA6H6&dib=eyJ2IjoiMSJ9.-Zecs41wCJ8szHdd3ZXM0lpj8BLLCYb9V1EyrZtpm_ngihldz8iF80LqBwdMRtFdrkVF0yLAaXT0BpawaxslLmqeWcnwOBOL8cvTvXCh0d5529hlHZxaOMaHNWQixP2DP_mkV3VL3dUwEgnqyqXiN0GKnUizBR_rlVn0Y8nnwhqsRbsV98rtnCmK0YvnQiykV8PjG-T11Qnr5visH_p8sUlI8tb6PArs5R318N3T6ZdnYiT7U74jcQbxHaqcigHRyzaLKaGDQmXuZlkB0STrOkE_p6tRhSSrmU5OfUyR8AI.Pg05dPJgcrIhjwuqvohUJo3yGS0Ck4tXkx3iuAFdDJs&dib_tag=se&keywords=ZIWI&qid=1788051036&s=pet-supplies&sprefix=ziwi%2Cpets%2C261&sr=1-4&ufe=app_do%3Aamzn1.fos.35785624-70c4-44ae-a5c3-3f044f475d63&th=1"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-05.png"
        alt="ZIWI エアドライドッグフード グラスフェッドビーフ"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 05
        </span>

        <span class="article-product-name">
          ZIWI
        </span>

        <span class="article-product-sub">
          エアドライドッグフード グラスフェッドビーフ
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      すごくお腹が空いていれば食べる。
    </p>

    <p>
      逆に言えば、
      「これ食べたい！」という感じの食いつきではありませんでした。
    </p>

    <p>
      食べられないわけではない。
      でも主食として毎日喜んで食べる感じでもない。
    </p>

    <p>
      惜しい。
    </p>


    <!-- =========================================
         FOOD 06
         AMAZON_URL_06 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/ケーナインナチュラル-ドッグフード-フリーズドライ-ビーフ・フィースト-500g/dp/B004HIO9OE/ref=sr_1_6?__mk_ja_JP=カタカナ&crid=GW2J8PYA20SJ&dib=eyJ2IjoiMSJ9.ZNXNGxgsRdpfFd93NX1YeLD5hgsRnHETXH69JM-zkbV4qoV1_vm06hMY4dejwmyL_qkfxepMJT86IVDYj4JekNwaJHp1tu5VsmUhABoWVOPo04kYs5tOYsmC75OdtPjM3HzoePtfx9VjjIIMAzZfiEF9F_7Eq_CwXgMaCes9RilptU1gru_oYwd2fCMggM9ovKd_mGR2mkQcMBTVxFhm4KCqhfdNGYgqSK46512OcJuDDrTCepYRfgc6f8nE-zX5d_91Ih8I5btY0cLwW4u8xRaQ6Js19fRwGUS0KLT8g2E.M81aYmsOEG6mvNxtiVLb-YC69ecgaxgvD3BUYsiD8JU&dib_tag=se&keywords=K9+Natural+フリーズドライ+ビーフ・フィースト&qid=1788051169&s=pet-supplies&sprefix=k9+natural+フリーズドライ+ビーフ+フィースト%2Cpets%2C229&sr=1-6"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-06.png"
        alt="K9 Natural フリーズドライ ビーフ・フィースト"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 06
        </span>

        <span class="article-product-name">
          K9 Natural
        </span>

        <span class="article-product-sub">
          フリーズドライ ビーフ・フィースト
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      全く食べず。
    </p>

    <p>
      本当に食べず。
    </p>

    <p>
      結果、友人に譲って食べてもらいました。
    </p>

    <p>
      すいのために買ったはずなのに、
      他のお家のわんちゃんのお腹へ……。
    </p>


    <!-- =========================================
         FOOD 07
         AMAZON_URL_07 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/【腸内ケア】-GO-SOLUTIONS-プロバイオティクス-ゴーソリューションズ/dp/B0BZ7TQ888/ref=sr_1_1_sspa?__mk_ja_JP=カタカナ&crid=26NMY5FB8SW1H&dib=eyJ2IjoiMSJ9.wiUWrJC-uLQaDt449tUzt-POIUNxFtFFY9tZHV72O-mAE8v7zzBDubhZ5vGtZKBG4RzW0p4j3DTGyHtJY3T6b6XNziilcJBPRaKLBrZxRtV-4Hsv0k6semH5ByIYIDnkXMGunnZuV4xP6ZlY-G-H_KLs0ObRL2TGOtopao_EYsw.J0fmxMhAMjaSG3OTx5-0dfXkU6zCfziyEjm53gBO0NY&dib_tag=se&keywords=GO!%2BSOLUTIONS%2B消化と腸の健康ケア%2Bサーモン&qid=1788051256&rdc=1&s=pet-supplies&sprefix=go%2Bsolutions%2B消化と腸の健康ケア%2Bサーモン%2Cpets%2C222&sr=1-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-07.png"
        alt="GO! SOLUTIONS 消化と腸の健康ケア サーモン"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 07
        </span>

        <span class="article-product-name">
          GO! SOLUTIONS
        </span>

        <span class="article-product-sub">
          消化＋腸の健康ケア サーモン
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      お試しでもらったものを食べたので、
      「これはいける！」と主、調子に乗りました。
    </p>

    <p>
      そして大容量を購入。
    </p>

    <p>
      2日後。
    </p>

    <p>
      全く見向きもしなくなりました。
    </p>

    <p>
      お腹が空いて胃液を吐いても食べない。
    </p>

    <p>
      「お腹が空いたら食べるでしょ」
      というこちらの予想も普通に裏切ってきます。
    </p>


    <h2>
      第一の救世主、現る
    </h2>


    <!-- =========================================
         FOOD 08
         AMAZON_URL_08 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/イティ-iti-エアドライフード-チキン・ディナー-200g×5袋/dp/B01N34RSUK/ref=sr_1_6?__mk_ja_JP=カタカナ&crid=2WFBIR2K8XFG8&dib=eyJ2IjoiMSJ9.v21EVkKUFw989w-6nZuAiOf4k7g-CUsPIkAOl4cyvaLCsx9rt_BsZSg2jJEsFr2TWrRVa1m6GylmOuHu78UZyC0oKmGl5vn4QLpHR_n14xMx9m6upI7p5F-w7o2hgAetGy5_rejr7eV6grWlOHYKR2TMR98zHPUXSmndvQsERfipH_vd2ksEvzQtXlOb896heKybnFYXs0Ah1nIA8KRUHZ_8E047B2diclD3UT_wqODv8xB2zS1_JAvNB5NQYrkqkynld8qeA02V8eb-OxpKxBPX0UlkDMR2LJC9ysfPu9M.eo98FjsIdWgIjEx_E0fA28nXkOhq_6krfUJ3y8wK-5M&dib_tag=se&keywords=iti%2Bドッグ%2Bディナー%2Bチキン&qid=1788051350&sprefix=iti%2Bドッグ%2Bディナー%2Bチキン%2Caps%2C442&sr=8-6&ufe=app_do%3Aamzn1.fos.35785624-70c4-44ae-a5c3-3f044f475d63&th=1"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-08.png"
        alt="iti ドッグ ディナー チキン"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 08
        </span>

        <span class="article-product-name">
          iti ドッグ ディナー
        </span>

        <span class="article-product-sub">
          チキン
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      そしてついに、
      第一回「食べられるフード」に出会いました。
    </p>

    <p>
      itiにはいくつか味がありますが、
      すいが食べるのはチキン。
    </p>

    <p>
      ベニソンは食べず、またもや友人へ。
    </p>

    <p>
      ビーフはおやつとして手で渡せば食べるのに、
      なぜかお皿に入れると食べない。
    </p>

    <p>
      同じ食べ物なんですけどね。
    </p>

    <p>
      それでも、
      「食べられる主食があった」
      というだけでかなり救われました。
    </p>


    <!-- =========================================
         FOOD 09
         AMAZON_URL_09 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/SILKFULL-犬用プレミアムウェットフード-ドッグフード-ヒューマングレード-全犬種全年齢対応/dp/B0F9TT4FKY/ref=sr_1_5?__mk_ja_JP=カタカナ&crid=2CFMA91WOV8T7&dib=eyJ2IjoiMSJ9.NxPOrbfesuac5fEovzdjjqttxJDzCoYJRKaHXmRNTC-R4NAXh5IahCOFGuFhED8_kYn1B8AJD4ism967S016G99O7ddSJU8psX11c4SJEtwh2kCI0-tfSxd-QieuoaNvFkddFHYCrpZa4f-pNJkUSZbD6ibENCB04fbUgBAQNdUg_qtawL8luMm-nHsEeXch-gl1tTaOq8TUyNGwd5fdUvF8R-CR9cBarhyANDvFWnSQWpdX_hw5i_19Tp4OUMA65Uu_TF3_sGN5c7yrTybKWsUONB4pSVXynsTxWgyPVJQ.DQS4yam3v9NCg-LW7go74t4n0VIWITtofkT7G6XW0Xw&dib_tag=se&keywords=SILKFULL&qid=1788051418&sprefix=silkfull%2Caps%2C254&sr=8-5&th=1"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-09.png"
        alt="SILKFULL 犬用プレミアムウェットフード チキン"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 09
        </span>

        <span class="article-product-name">
          SILKFULL
        </span>

        <span class="article-product-sub">
          犬用プレミアムウェットフード チキン
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      消化に良いものをあげたい時に購入。
    </p>

    <p>
      ただ、ここまで来ると薄々気づいていました。
    </p>

    <p>
      すい、そもそもウェットフードが苦手です。
    </p>

    <p>
      チキンだけでなく、
      たらなども試しましたが、
      匂いを嗅いで終了。
    </p>

    <p>
      食べるところまでいきません。
    </p>


    <!-- =========================================
         FOOD 10
         AMAZON_URL_10 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/帝塚山ハウンドカム-犬用-愛犬の安心レトルト-アソートセット-腎臓に優しい安心レトルトセット（1袋×3種）/dp/B09YGZPJT9/ref=sr_1_1_sspa?__mk_ja_JP=カタカナ&crid=2JMEGBQ8KHHDV&dib=eyJ2IjoiMSJ9.3YgP9DEKG7CK4OhWtNGJDsD6fyuq8hYbTI9kP6JMx60Zi4WAkf6ABm3sqCr-2xihetbqXdZ4gLIEQqei-AITk_JY--QNzpphkGqMxvHKr4sE8X1qvtY-vGVUF8fif5Q-Gq7ZMb8HFrgzpFhs1i6mhcuzzg4MTilw8Ecwkbvfoo_8vV8-u0FRZrA4GXedbNFkXUMZ8bFFRRwjOckK-wWjKJZrblkcGZKrw2je0sWD8hLkn4K7EdKp3RLTVP-FrWYvK9Tt3LtscMuajLP0-Z0IJNxwBsh3hh35_LJpEJNMU44.MJZ2P6vnFfKtFxJj7d1YTERTGQzauwNZ_T1copUBYTE&dib_tag=se&keywords=帝塚山ハウンドカム+愛犬の安心レトルト&qid=1788051487&sprefix=帝塚山ハウンドカム+愛犬の安心レトルト%2Caps%2C251&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-10.png"
        alt="帝塚山ハウンドカム 愛犬の安心レトルト"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 10
        </span>

        <span class="article-product-name">
          帝塚山ハウンドカム
        </span>

        <span class="article-product-sub">
          愛犬の安心レトルト
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      「豚バラのゴロゴロ野菜の煮込み」と
      「鶏肉と砂肝たっぷりのクリームシチュー」を
      頂いたことがありました。
    </p>

    <p>
      美味しそう。
    </p>

    <p>
      主からすると普通に美味しそう。
    </p>

    <p>
      しかし、すい。
    </p>

    <p>
      もちろん食べません。
    </p>

    <p>
      それどころか、ほぼ見向きもしませんでした。
    </p>


    <!-- =========================================
         FOOD 11
         AMAZON_URL_11 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/サンライズ-じゅわリッチ-黒毛和牛・チーズ入り-1-7kg/dp/B0C5BRBWPH/ref=sr_1_2?__mk_ja_JP=カタカナ&crid=3G3DTMLG09U8F&dib=eyJ2IjoiMSJ9.ZJIHflMnXn1WZwM0Nqqg_7rrd1WxiqP1DCyxAw4rquf51y4hMFXHoGSM9PWUDusVDpTwPsgYUzxoyG32bdjldoBcDgZkkdRa_JnMbPo1b_X9-Mv-75f6mA4jNber9YGo-23OCb84RyQYOJGCtTr4DoZZaS9NEhyrJ0_PeIX0IKi9rKbGqP3T2s7D0d9eyhysoywv3lnu-7eGP8BQhWkqcsXny4wliY13U4TRzwynEdlvgCYHhUf3yu5W08K3vsAuyMSSwnWEnor-YGYVm-y2anECqlIW-ThQb_c7j4kJPO0.wQJNh8NOQZYqJkV8OGGYEOQWIavP_hcxozciIcy7J9s&dib_tag=se&keywords=サンライズ%2Bじゅわリッチ%2B黒毛和牛・チーズ入り&qid=1788051560&sprefix=サンライズ%2Bじゅわリッチ%2B黒毛和牛%2Bチーズ入り%2Caps%2C244&sr=8-2&th=1"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-11.png"
        alt="サンライズ じゅわリッチ 黒毛和牛・チーズ入り"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 11
        </span>

        <span class="article-product-name">
          サンライズ じゅわリッチ
        </span>

        <span class="article-product-sub">
          黒毛和牛・チーズ入り
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      この頃には主も少々疲れてきました。
    </p>

    <p>
      今までは価格だったり原材料だったり、
      グレインフリーだったり、
      いろいろ考えて選んでいました。
    </p>

    <p>
      「逆にこういうのなら食べるんじゃない？」
    </p>

    <p>
      と思って購入。
    </p>

    <p>
      食べませんでした。
    </p>

    <p>
      そういう問題ではなかったらしい。
    </p>


    <h2>
      第二の救世主
    </h2>


    <!-- =========================================
         FOOD 12
         AMAZON_URL_12 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/【華ちゃん犬猫すこやか本舗】-ドッグフード-ヒューマングレード-小麦グルテンフリー-1-5kg/dp/B098JB8SDZ/ref=sr_1_1_sspa?__mk_ja_JP=カタカナ&crid=3PERK0G2BB946&dib=eyJ2IjoiMSJ9.Gwo8ivpzXlgZ8bgEwpmLKejv7v4-wTC4UUkL_vjiDpsf1PARsHZhLYUrw-vdxP0yK40IUuQkfRD28x8PaRsAR9ku5UDKbJUTpZ1sZFsC3PE.tuctT1VMm8DPc4UmcSGpkyVh1QopgpGnH4Gx4mSyqmk&dib_tag=se&keywords=華ちゃん犬猫すこやか本舗%2Bうまか%2Bドッグフード&qid=1788051629&sprefix=華ちゃん犬猫すこやか本舗%2Bうまか%2Bドッグフード%2Caps%2C242&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-12.png"
        alt="華ちゃん犬猫すこやか本舗 うまか ドッグフード"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 12
        </span>

        <span class="article-product-name">
          うまか
        </span>

        <span class="article-product-sub">
          華ちゃん犬猫すこやか本舗
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      ここで第二の救世主。
    </p>

    <p>
      すいは元々、
      鰹節のような香りには比較的惹かれやすいタイプ。
    </p>

    <p>
      毎回喜んで完食！
    </p>

    <p>
      ……とまではいかないものの、
      ちょこちょこ仕方なく食べてくれました。
    </p>

    <p>
      この「仕方なくでも食べてくれる」が
      当時どれだけありがたかったことか。
    </p>

    <p>
      主食迷子期間を繋いでくれたご飯です。
    </p>


    <h2>
      そしてついに。
    </h2>


    <!-- =========================================
         FOOD 13
         AMAZON_URL_13 をAmazon URLに置き換える
    ========================================== -->

    <a
      class="article-product-link"
      href="https://www.amazon.co.jp/Herz-ドッグフード-プレミアムカニンキュイジーヌ-ダックレバー-グレインフリー/dp/B0DP2BSGSC/ref=sr_1_3?__mk_ja_JP=カタカナ&crid=6D77FCW7GQWR&dib=eyJ2IjoiMSJ9.nj8mBK788k44JnUq5_dWJvKH1q0vVwqDtAozVPy06t5pP2-2l1oeoN4QzAysYacp.BmifH5PJ1VR7_bqb6gIkEWdt9gCKkCh08qk5jFM7juw&dib_tag=se&keywords=Herz%2Bエアドライ&qid=1788051679&sprefix=herz%2Bエアドライ%2Caps%2C318&sr=8-3&th=1"
      target="_blank"
      rel="noopener noreferrer"
    >

      <img
        src="blog/images/product-food-13.png"
        alt="Herz エアドライ カニンキュイジーヌ ターキー＆ダックレバー"
      >

      <div class="article-product-info">

        <span class="article-product-number">
          FOOD 13
        </span>

        <span class="article-product-name">
          Herz エアドライ
        </span>

        <span class="article-product-sub">
          カニンキュイジーヌ ターキー＆ダックレバー
        </span>

      </div>

      <span class="article-product-arrow">
        →
      </span>

    </a>

    <p>
      ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
    </p>

    <p>
      やっと。
    </p>

    <p>
      やっとです。
    </p>

    <p>
      朝も夜も、
      毎回しっかりお座りしてご飯を待つすい。
    </p>

    <p>
      そして、ちゃんと食べる。
    </p>

    <p>
      完食する。
    </p>

    <p>
      今までのすいからすると、
      ちょっと信じられない光景です。
    </p>

    <p>
      すいがご飯を完食すると
      家で拍手が起こるほどでした。笑
    </p>

    <p>
      約1年間いろんなご飯を試して、
      ようやく
      「朝も夜もちゃんと食べてくれるご飯」
      に出会えました。
    </p>

      お腹が空いて胃液を吐いても食べない。
</p>

<p>
  「お腹が空いたら食べるでしょ」
  というこちらの予想も普通に裏切ってきます。
</p>


    <figure>

      <img
        src="blog/images/sui-food-01.png"
        alt="幼少期のすいが残した3種類のご飯"
      >

      <figcaption>
        選択肢は3つ用意しましたが、なお全部残されました。
      </figcaption>

    </figure>


    <h2>
      ちなみに、ウェットフードはほぼ全滅です
    </h2>

    <p>
      今回書いたもの以外にも、
      実はいろんなウェットフードを試しています。
    </p>

    <p>
      わざわざ冷凍の馬肉を買ってみたり、
      ペットショップで買えるちょっと高めのものから
      気軽に買えるものまで色々。
    </p>

    <p>
      結果。
    </p>

    <p>
      本当に食べません。
    </p>

    <p>
      どうやらすいには
      ウェットフードそのものがあまり合わないらしい。
    </p>

    <p>
      いつか書けるくらい食べてくれる日が来たら、
      ウェットフード編も出したいと思います。笑
    </p>


    <h2>
      じゃあ、すいは何なら喜んで食べるのか
    </h2>

    <p>
      キャベツ。
    </p>

    <p>
      白菜。
    </p>

    <p>
      大根。
    </p>

    <p>
      大根の葉っぱ。
    </p>

    <p>
      ……なぜ。
    </p>


    <h2>
      約1年間、主食迷子をして思ったこと
    </h2>

    <p>
      ここまでご飯を変えているので、
      正直、甘やかしすぎだという自覚はあります。笑
    </p>

    <p>
      最終的には
      「本当にお腹が空けば食べる」
      という考え方もあると思います。
    </p>

    <p>
      ただ、これは完全に主個人の考えですが、
      人間みたいに
      「今日は何を食べよう」
      「明日はこれを作ろう」
      と毎日好きなものを選べないからこそ、
      毎日食べるご飯くらい
      本当に好きなものを見つけてあげたいと思っています。
    </p>

    <p>
      評判が良いものでも食べない。
      高いものでも食べない。
      原材料にこだわっても食べない。
    </p>

    <p>
      逆に、その子にとっては
      何でもないものが大好物だったりします。
    </p>

    <p>
      結局その子に合っていて、
      本人が喜んで食べてくれるものを
      探していくしかないんだなと思いました。
    </p>

    <p>
      そして、そのためにも。
    </p>

    <p>
      お金を稼ぎましょう。。。
    </p>


    <h2>
      食わず嫌い仲間のみなさまへ
    </h2>

    <p>
      現在はHerzに落ち着いていますが、
      もしこれが買えなくなったら
      すい家は再び食糧難に陥ります。
    </p>

    <p>
      「うちの食わず嫌い犬はこれだけ食べた！」
      「これはずっと飽きずに食べてる！」
      というご飯があったら、
      ぜひ教えてほしいです。
    </p>

    <p>
      主食迷子の旅、
      できればもう再開したくありません。笑
    </p>

    <p>
      ※この記事は、すいが実際に食べたものと
      その時に感じた変化を記録したものです。
      食いつきや体調、涙やけなどは
      わんちゃんによって個体差があると思うので、
      あくまでも「すいの場合」として参考にしてください☺️
    </p>

  `,

  products: [

      {
        id:
          "Herz-food",

        category:
          "おうち",

        categoryId:
          "home",

        name:
          "Herz エアドライ カニンキュイジーヌ ターキー＆ダックレバー",

        image:
          "blog/images/product-food-13.png",

        price:
          "¥5,999",

        dog:
          "BOTH",

        description:
          "食わず嫌いのすいがやっと完食できるご飯に出会えました。",

        url:
          "https://www.amazon.co.jp/Herz-ドッグフード-プレミアムカニンキュイジーヌ-ダックレバー-グレインフリー/dp/B0DP2BSGSC/ref=sr_1_3?__mk_ja_JP=カタカナ&crid=6D77FCW7GQWR&dib=eyJ2IjoiMSJ9.nj8mBK788k44JnUq5_dWJvKH1q0vVwqDtAozVPy06t5pP2-2l1oeoN4QzAysYacp.BmifH5PJ1VR7_bqb6gIkEWdt9gCKkCh08qk5jFM7juw&dib_tag=se&keywords=Herz%2Bエアドライ&qid=1788051679&sprefix=herz%2Bエアドライ%2Caps%2C318&sr=8-3&th=1"
      }

    ]
}

];
/* ==================================================
   WEEKLY QUEUE — BLOG / TUESDAY 10:00 JST
   新規記事をまとめて書くときは、その記事に
   queue: true
   を付けてください。上から順に毎週1件公開されます。
================================================== */
if (typeof applyWeeklyPublishQueue === "function") {
  applyWeeklyPublishQueue(blogPosts, "blog");
}
