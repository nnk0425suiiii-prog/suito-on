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

