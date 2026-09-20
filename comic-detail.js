// ==================================================
// COMIC DETAIL
// すいとおん。
// ==================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    const container =
      document.getElementById(
        "comicDetail"
      );


    if (!container) {
      return;
    }



    // ==================================================
    // COMIC ID
    // ==================================================

    const params =
      new URLSearchParams(
        window.location.search
      );


    const comicId =
      Number(
        params.get(
          "id"
        )
      );


    const comic =
      getComicById(
        comicId
      );



    // ==================================================
    // NOT FOUND / COMING SOON
    // ==================================================

    if (
      !comic ||
      comic.comingSoon
    ) {

      container.innerHTML = `

        <div class="comic-detail-not-found">

          <p class="comic-ref-small">
            SUI & ON COMIC
          </p>

          <h1>
            COMIC
          </h1>

          <p>
            このお話はまだ公開されていません。
          </p>

          <a
            href="comic.html"
            class="main-button"
          >
            COMIC一覧へ戻る
          </a>

        </div>

      `;


      return;

    }



    // ==================================================
    // SERIES
    // ==================================================

    const seriesId =
      getComicSeriesId(
        comic.series
      );


    const series = getComicSeriesById(seriesId);
    const isFinalEpisode = isComicSeriesComplete(seriesId) && comic.id === series.finalEpisodeId;

    const seriesUrl =
      seriesId
        ? `comic-series.html?series=${seriesId}`
        : "comic.html";



    // ==================================================
    // PUBLISHED IN SAME SERIES
    // ==================================================

    const published =
      comicData

        .filter(
          item =>
            item.series ===
              comic.series
            &&
            !item.comingSoon
        )

        .sort(
          (a, b) =>
            a.id - b.id
        );



    const currentIndex =
      published.findIndex(
        item =>
          item.id === comic.id
      );


    const previousComic =
      currentIndex > 0
        ? published[
            currentIndex - 1
          ]
        : null;


    const nextComic =
      currentIndex <
        published.length - 1

        ? published[
            currentIndex + 1
          ]

        : null;



    // ==================================================
    // PREV
    // ==================================================

    const previousHTML =
      previousComic

        ? `

          <a
            href="${previousComic.detailPage}"
            class="comic-detail-nav-item comic-detail-prev"
          >

            <span>
              ← PREV
            </span>

            <strong>
              #${previousComic.number}
              ${previousComic.title}
            </strong>

          </a>

        `

        : `

          <div
            class="
              comic-detail-nav-item
              comic-detail-nav-empty
            "
          >
          </div>

        `;



    // ==================================================
    // NEXT
    // ==================================================

    const nextHTML =
      nextComic

        ? `

          <a
            href="${nextComic.detailPage}"
            class="comic-detail-nav-item comic-detail-next"
          >

            <span>
              NEXT →
            </span>

            <strong>
              #${nextComic.number}
              ${nextComic.title}
            </strong>

          </a>

        `

        : `

          <div class="comic-detail-next-coming">

            <span>
              ${isFinalEpisode ? "THE END" : "NEXT"}
            </span>

            <strong>
              ${isFinalEpisode ? `${comic.series} おわり` : "つづく…"}
            </strong>

            <small>
              ${isFinalEpisode ? (series.nextSeriesName ? `次は、${series.nextSeriesName}へ。` : "最後までお読みいただき、ありがとうございました。") : "次のお話を準備中"}
            </small>

          </div>

        `;



    // ==================================================
    // DISPLAY
    // ==================================================

    container.innerHTML = `


      <header class="comic-detail-header">


        <div class="comic-detail-heading-label">

          <span>
            06
          </span>


          <div>

            <strong>
              COMIC
            </strong>


            <a
              href="${seriesUrl}"
            >
              ← BACK TO ${comic.series}
            </a>

          </div>

        </div>


        <p class="comic-ref-small">
          ${comic.series}
        </p>


        <p class="comic-detail-number">
          #${comic.number}
        </p>


        <h1>
          ${comic.title}
        </h1>


        <p class="comic-detail-lead">
          ${comic.description}
        </p>


        <span
          class="comic-detail-paw"
          aria-hidden="true"
        >
          🐾
        </span>


      </header>



      <!-- COMIC -->

      <div class="comic-detail-image-wrap">

        <span class="comic-detail-tape">
        </span>


        <img
          src="${comic.image}"
          alt="${comic.alt}"
          class="comic-detail-image"
        >

      </div>



      <section class="comic-series-like-section">
        <div class="comic-series-like">
          <p class="comic-ref-small">LIKE THIS STORY?</p>
          <p>このお話、好き？</p>
          <button type="button" class="comic-like-button" data-episode-id="${comic.id}" aria-label="${comic.title}にいいね">
            <span class="article-like-heart">♡</span>
            <span class="article-like-count">…</span>
          </button>
          <p class="comic-like-note">このお話へのいいねです。</p>
        </div>
      </section>

      <!-- NAVIGATION -->

      <nav class="comic-detail-navigation">

        ${previousHTML}

        ${nextHTML}

      </nav>



      <!-- SERIES -->

      <div class="comic-detail-series-back">

        <a
          href="${seriesUrl}"
          class="main-button"
        >
          ${comic.series}のお話一覧へ
        </a>

      </div>


    `;



    // ==================================================
    // PAGE TITLE
    // ==================================================

    if (typeof initializeComicLike === "function") initializeComicLike();

    document.title =
      `${comic.title}｜${comic.series}｜すいとおん。`;

  }
);
