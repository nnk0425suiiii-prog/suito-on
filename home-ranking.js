/* ==================================================
   HOME POPULAR RANKING
================================================== */

const SUI_TO_ON_API =
  "https://suito-on-api.nnk0425suiiii.workers.dev";


const homeRankingList =
  document.getElementById(
    "homeRankingList"
  );


/* ==================================================
   LOAD RANKING
================================================== */

async function loadHomeRanking() {

  if (!homeRankingList) {
    return;
  }


  try {

    const response =
      await fetch(
        `${SUI_TO_ON_API}/ranking`
      );


    if (!response.ok) {

      throw new Error(
        "ランキングを取得できませんでした"
      );

    }


    const ranking =
      await response.json();


    renderHomeRanking(
      ranking
    );

  }

  catch (error) {

    console.error(
      "Ranking Error:",
      error
    );


    homeRankingList.innerHTML = `

      <p class="home-ranking-empty">
        ランキングを準備中です。
      </p>

    `;

  }

}



/* ==================================================
   GET IMAGE
================================================== */

function getRankingImage(item) {

  const contentId =
    String(
      item.content_id || ""
    );


  /* -------------------------
     BLOG
  ------------------------- */

  if (
    item.content_type === "BLOG"
    &&
    typeof blogPosts !== "undefined"
  ) {

    const id =
      contentId.replace(
        "blog-",
        ""
      );


    const post =
      blogPosts.find(
        post =>
          String(post.id) ===
          String(id)
      );


    if (post?.image) {
      return post.image;
    }

  }


  /* -------------------------
     GUIDE
  ------------------------- */

  if (
    item.content_type === "GUIDE"
    &&
    typeof guidePosts !== "undefined"
  ) {

    const id =
      contentId.replace(
        "guide-",
        ""
      );


    const guide =
      guidePosts.find(
        guide =>
          String(guide.id) ===
          String(id)
      );


    if (guide?.image) {
      return guide.image;
    }

  }


 /* -------------------------
   ITEMS
------------------------- */

if (
  item.content_type === "ITEMS"
  &&
  typeof allItems !== "undefined"
) {

  const id =
    contentId.replace(
      "item-",
      ""
    );


  const product =
    allItems.find(
      product =>
        String(product.id) ===
        String(id)
    );


  if (product?.image) {
    return product.image;
  }

}

  /* -------------------------
     EVENT
  ------------------------- */

  if (
    item.content_type === "EVENT"
    &&
    typeof calendarEvents !== "undefined"
  ) {

    const id =
      contentId.replace(
        "event-",
        ""
      );


    const event =
      calendarEvents.find(
        event =>
          String(event.id) ===
          String(id)
      );


    if (event?.image) {
      return event.image;
    }

  }


  /* -------------------------
     COMIC
  ------------------------- */

  if (
    item.content_type === "COMIC"
    &&
    typeof comicSeriesData !== "undefined"
  ) {

    const id =
      contentId.replace(
        "comic-",
        ""
      );


    const series =
  comicSeriesData.find(
    series =>
      String(series.id) ===
      String(id)
  );


if (series?.thumbnail) {
  return series.thumbnail;
}


/* ==================================================
   COMIC THUMBNAIL FALLBACK
   専用サムネがない場合は
   その編の公開済み1話目を使う
================================================== */

if (series) {

  const firstPublishedComic =
    comicData.find(
      comic =>
        comic.series === series.name
        &&
        !comic.comingSoon
    );


  if (firstPublishedComic?.image) {
    return firstPublishedComic.image;
  }

}

}


  return "";

}



/* ==================================================
   RENDER
================================================== */

function renderHomeRanking(
  ranking
) {

  if (
    !Array.isArray(ranking)
    ||
    ranking.length === 0
  ) {

    homeRankingList.innerHTML = `

      <p class="home-ranking-empty">
        まだランキングはありません。
      </p>

    `;

    return;

  }


  homeRankingList.innerHTML =
    ranking
      .slice(0, 5)
      .map(
        (
          item,
          index
        ) => {

          const image =
            getRankingImage(item);


          return `

            <a
              href="${escapeHtml(item.url)}"
              class="home-ranking-item"
            >

              <span
                class="home-ranking-number"
              >
                ${index + 1}
              </span>


              ${
                image
                  ? `
                    <span
                      class="home-ranking-image"
                    >
                      <img
                        src="${escapeHtml(image)}"
                        alt="${escapeHtml(item.title)}"
                      >
                    </span>
                  `
                  : `
                    <span
                      class="home-ranking-image home-ranking-image-empty"
                    >
                      NO IMAGE
                    </span>
                  `
              }


              <span
                class="home-ranking-content"
              >

                <span
                  class="home-ranking-type"
                >
                  ${escapeHtml(
                    item.content_type
                  )}
                </span>


                <span
                  class="home-ranking-title"
                >
                  ${escapeHtml(
                    item.title
                  )}
                </span>


                <span
                  class="home-ranking-likes"
                >
                  ♡ ${Number(
                    item.likes
                  ) || 0}
                </span>

              </span>

            </a>

          `;

        }
      )
      .join("");

}



/* ==================================================
   ESCAPE HTML
================================================== */

function escapeHtml(value) {

  return String(
    value ?? ""
  )

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "'",
      "&#039;"
    );

}



/* ==================================================
   START
================================================== */

loadHomeRanking();