// ==================================================
// COMIC SERIES DATA
// 編ごとの情報
// ==================================================

const comicSeriesData = [

  {
  id: "deai",

  name:
    "出会い編",

  description:
    "すいを見つけた日から、お迎えして家族になるまでのお話。",

  thumbnail:
    "images/comic/comic-deai-thumb1.png",

  finalEpisodeId: 6,

  nextSeriesName: "社会化期編",

  comingSoon:
    false
},

  {
    "id": "socialization",
    "name": "社会化期編",
    "description": "抱っこでのお出かけから、猫の先輩との暮らし、お散歩、ドッグランへ。すいの世界が少しずつ広がるお話。",
    "thumbnail": "images/comic/sui-on-socialization-001-v2.png",
    "finalEpisodeId": 18,
    "comingSoon": false
  }


];



// ==================================================
// COMIC EPISODE DATA
// 1話ずつのデータ
// ==================================================

const comicData = [

  {
    id: 1,

    number:
      "001",

    title:
      "みつけた。",

    series:
      "出会い編",

    image:
      "images/comic/sui-on-deai-001-v2.png",

    alt:
      "すいとおん。4コマ 出会い編① みつけた。",

    description:
      "半年くらいわんちゃんを探していたある日、HPで翌日入舎予定の小さなすいを見つけました。",

    detailPage:
      "comic-detail.html?id=1",

    comingSoon:
      false
  },


  {
    id: 2,

    queue:
      true,

    number:
      "002",

    title:
      "翌日、店舗へ。",

    series:
      "出会い編",

    image:
      "images/comic/sui-on-deai-002-v2.png",

    alt:
      "すいとおん。4コマ 出会い編② 翌日、店舗へ。",

    description:
      "翌日すぐに店舗へ。前日に連絡していたため、ディスプレイには入らず裏で待っていてくれました。",

    detailPage:
      "comic-detail.html?id=2",

    comingSoon:
      true
  },


  {
    id: 3,

    queue:
      true,

    number:
      "003",

    title:
      "はじめまして、すい。",

    series:
      "出会い編",

    image:
      "images/comic/sui-on-deai-003-v2.png",

    alt:
      "すいとおん。4コマ 出会い編③ はじめまして、すい。",

    description:
      "850gの小さなすいと対面。抱っこはヒヤヒヤ。それでもこの子にすると決めました。",

    detailPage:
      "comic-detail.html?id=3",

    comingSoon:
      true
  },


  {
    id: 4,

    queue:
      true,

    number:
      "004",

    title:
      "帰宅。試練のはじまり",

    series:
      "出会い編",

    image:
      "images/comic/sui-on-deai-004-v2.png",

    alt:
      "すいとおん。4コマ 出会い編④ 帰宅。試練のはじまり",

    description:
      "帰宅早々、850gの小さなすいを待っていたのは、先住猫3匹からの熱い視線でした。",

    detailPage:
      "comic-detail.html?id=4",

    comingSoon:
      true
  },

  {
    "id": 5,
    "queue": true,
    "number": "005",
    "title": "いるかな。",
    "series": "出会い編",
    "image": "images/comic/sui-on-deai-005-v1.png",
    "alt": "すいとおん。4コマ 出会い編⑤ いるかな。",
    "description": "初めての夜。鳴かずに約2時間おきに手を伸ばし、私がいるか確認するすい。私もすいが気になって、あまり眠れませんでした。",
    "detailPage": "comic-detail.html?id=5",
    "comingSoon": true
  },

  {
    "id": 6,
    "queue": true,
    "number": "006",
    "title": "もう、うちの子。",
    "series": "出会い編",
    "image": "images/comic/sui-on-deai-006-v1.png",
    "alt": "すいとおん。4コマ 出会い編⑥ もう、うちの子。 出会い編最終話",
    "description": "お迎えから数日、すっかりくつろぐすいと、気になって仕方ない猫の先輩。わが家に新しい毎日が始まりました。出会い編、最終話。",
    "detailPage": "comic-detail.html?id=6",
    "comingSoon": true
  },

  {
    "id": 7,
    "queue": true,
    "number": "001",
    "title": "抱っこで、お外へ。",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-001-v2.png",
    "alt": "すいとおん。4コマ 社会化期編① 抱っこで、お外へ。",
    "description": "抱っこ紐の中から、景色や音に出会うすい。いっしょに少しずつ、お外の世界を知っていきます。",
    "detailPage": "comic-detail.html?id=7",
    "comingSoon": true
  },

  {
    "id": 8,
    "queue": true,
    "number": "002",
    "title": "今日は、にぎやかな場所。",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-002-v2.png",
    "alt": "すいとおん。4コマ 社会化期編② 今日は、にぎやかな場所。",
    "description": "アウトレットへお出かけ。人やお店、いつもと違う景色に囲まれた、すいの社会科見学。",
    "detailPage": "comic-detail.html?id=8",
    "comingSoon": true
  },

  {
    "id": 9,
    "queue": true,
    "number": "003",
    "title": "車にも、乗ってみた。",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-003-v2.png",
    "alt": "すいとおん。4コマ 社会化期編③ 車にも、乗ってみた。",
    "description": "車にも乗ってみたすい。いろいろな経験をしたあとは、私の腕の中ですやすや。",
    "detailPage": "comic-detail.html?id=9",
    "comingSoon": true
  },

  {
    "id": 10,
    "queue": true,
    "number": "004",
    "title": "脱いでやる。",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-004-v2.png",
    "alt": "すいとおん。4コマ 社会化期編④ 脱いでやる。",
    "description": "初めてのお洋服に全力で抵抗！どうしても脱げなくて、最後はおもちゃに八つ当たり。",
    "detailPage": "comic-detail.html?id=10",
    "comingSoon": true
  },

  {
    "id": 11,
    "queue": true,
    "number": "005",
    "title": "俺も、こんなに？",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-005-v2.png",
    "alt": "すいとおん。4コマ 社会化期編⑤ 俺も、こんなに？",
    "description": "わが家に来てから初めて会った犬は、まさかの大型犬。俺もこんなに大きくなるのかな？",
    "detailPage": "comic-detail.html?id=11",
    "comingSoon": true
  },

  {
    "id": 12,
    "queue": true,
    "number": "006",
    "title": "おうちにも、先輩。",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-006-v2.png",
    "alt": "すいとおん。4コマ 社会化期編⑥ おうちにも、先輩。",
    "description": "外だけでなく、おうちにも学ぶことがいっぱい。猫の先輩たちとの暮らしが始まります。",
    "detailPage": "comic-detail.html?id=12",
    "comingSoon": true
  },

  {
    "id": 13,
    "queue": true,
    "number": "007",
    "title": "猫社会、勉強中。",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-007-v1.png",
    "alt": "すいとおん。4コマ 社会化期編⑦ 猫社会、勉強中。",
    "description": "猫の先輩との距離感を、少しずつ勉強中。すいの社会科見学は、おうちでも続きます。",
    "detailPage": "comic-detail.html?id=13",
    "comingSoon": true
  },

  {
    "id": 14,
    "queue": true,
    "number": "008",
    "title": "今度は、自分の足で。",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-008-v2.png",
    "alt": "すいとおん。4コマ 社会化期編⑧ 今度は、自分の足で。",
    "description": "抱っこで眺めていた世界へ、今度は自分の足で。小さなすいのお散歩が始まります。",
    "detailPage": "comic-detail.html?id=14",
    "comingSoon": true
  },

  {
    "id": 15,
    "queue": true,
    "number": "009",
    "title": "本日は、歩きません。",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-009-v1.png",
    "alt": "すいとおん。4コマ 社会化期編⑨ 本日は、歩きません。",
    "description": "お散歩の途中でぺたん。今日は歩きません！今では考えられない、パピー時代のボイコット。",
    "detailPage": "comic-detail.html?id=15",
    "comingSoon": true
  },

  {
    "id": 16,
    "queue": true,
    "number": "010",
    "title": "こんにちは、できるかな。",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-010-v2.png",
    "alt": "すいとおん。4コマ 社会化期編⑩ こんにちは、できるかな。",
    "description": "お散歩で出会った、初めましてのわんちゃん。少しずつ、ご挨拶にも挑戦します。",
    "detailPage": "comic-detail.html?id=16",
    "comingSoon": true
  },

  {
    "id": 17,
    "queue": true,
    "number": "011",
    "title": "ドッグランって、なに？",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-011-v2.png",
    "alt": "すいとおん。4コマ 社会化期編⑪ ドッグランって、なに？",
    "description": "ドッグランデビュー。新しい場所とわんちゃんたちに出会い、すいの世界がまた広がります。",
    "detailPage": "comic-detail.html?id=17",
    "comingSoon": true
  },

  {
    "id": 18,
    "queue": true,
    "number": "012",
    "title": "世界が、広がった。",
    "series": "社会化期編",
    "image": "images/comic/sui-on-socialization-012-v2.png",
    "alt": "すいとおん。4コマ 社会化期編⑫ 世界が、広がった。",
    "description": "抱っこでのお出かけから、自分の足で歩く毎日へ。たくさんの初めてを重ねた、すいの社会化期。",
    "detailPage": "comic-detail.html?id=18",
    "comingSoon": true
  }


];



/* ==================================================
   WEEKLY QUEUE — COMIC / SUNDAY 10:00 JST
   queue: true の話を上から毎週1話ずつ公開。
================================================== */
if (typeof applyWeeklyPublishQueue === "function") {
  applyWeeklyPublishQueue(comicData, "comic");
}

if (typeof syncComicComingSoon === "function") {
  syncComicComingSoon(comicData);
}


// ==================================================
// PUBLISHED COMICS
// ==================================================

function getPublishedComics() {

  return comicData.filter(
    comic =>
      !comic.comingSoon
  );

}



// ==================================================
// LATEST COMIC
// ==================================================

function getLatestComic() {

  const published =
    getPublishedComics();


  if (!published.length) {
    return null;
  }


  return [...published]
    .sort(
      (a, b) =>
        b.id - a.id
    )[0];

}



// ==================================================
// GET COMIC
// ==================================================

function getComicById(id) {

  return comicData.find(
    comic =>
      comic.id === Number(id)
  );

}



// ==================================================
// SERIES NAME → SERIES ID
// ==================================================

function getComicSeriesId(seriesName) {

  const found =
    comicSeriesData.find(
      series =>
        series.name === seriesName
    );


  return found
    ? found.id
    : null;

}



// ==================================================
// SERIES ID → SERIES DATA
// ==================================================

function getComicSeriesById(id) {

  return comicSeriesData.find(
    series =>
      series.id === id
  );

}



// ==================================================
// SERIES COMICS
// ==================================================

function getComicsBySeriesId(seriesId) {

  const series =
    getComicSeriesById(
      seriesId
    );


  if (!series) {
    return [];
  }


  return comicData

    .filter(
      comic =>
        comic.series ===
        series.name
    )

    .sort(
      (a, b) =>
        a.id - b.id
    );

}


// 最終話が公開されてから、シリーズを完結表示にする。
function isComicSeriesComplete(seriesId) {
  const series = getComicSeriesById(seriesId);
  if (!series || !series.finalEpisodeId) return false;
  const finalEpisode = getComicById(series.finalEpisodeId);
  return Boolean(finalEpisode && finalEpisode.series === series.name && !finalEpisode.comingSoon);
}


