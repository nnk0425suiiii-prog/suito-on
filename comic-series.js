// ==================================================
// COMIC SERIES
// すいとおん。
// ==================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    const container =
      document.getElementById(
        "comicSeries"
      );


    if (!container) {
      return;
    }



    // ==================================================
    // SERIES ID
    // ==================================================

    const params =
      new URLSearchParams(
        window.location.search
      );


    const seriesId =
      params.get(
        "series"
      );



    // ==================================================
    // SERIES DATA
    // ==================================================

    const series =
      getComicSeriesById(
        seriesId
      );


    if (!series) {

      container.innerHTML = `

        <div class="comic-series-not-found">

          <p class="comic-ref-small">
            SUI & ON COMIC
          </p>

          <h1>
            COMIC
          </h1>

          <p>
            このお話は見つかりませんでした。
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
    // SERIES COMICS
    // ==================================================

    const seriesComics =
      getComicsBySeriesId(
        seriesId
      );



    // ==================================================
    // EPISODE HTML
    // ==================================================

    const comicsHTML =
      seriesComics
        .filter((comic, index, all) => !comic.comingSoon || index === all.findIndex(item => item.comingSoon))
        .map(
          comic => {


            // =========================
            // COMING SOON
            // =========================

            if (comic.comingSoon) {

              return `

                <article
                  class="
                    comic-series-item
                    comic-series-item-coming
                  "
                >

                  <div class="comic-series-item-head">

                    <span class="comic-series-number">
                      #${comic.number}
                    </span>

                    <span class="comic-series-coming-label">
                      COMING SOON
                    </span>

                  </div>


                  <div class="comic-series-preview">

                  <div class="comic-series-preview-image comic-series-coming-image">

                    <span class="comic-series-coming-doodle">
                      ✎
                    </span>

                    <strong>
                      COMING
                      <br>
                      SOON
                    </strong>

                    <small>
                      NEXT EPISODE
                    </small>

                  </div>


<div class="comic-series-preview-info">

  <h2>
    次のお話
  </h2>

  <p>
    すいとおん。との続きを、
    ただいま準備しています。
  </p>

  <span class="comic-series-preparing">
    ただいま準備中…
  </span>

</div>

                  </div>

                </article>

              `;

            }



            // =========================
            // PUBLISHED
            // =========================

            return `

              <article class="comic-series-item">

                <div class="comic-series-item-head">

                  <span class="comic-series-number">
                    #${comic.number}
                  </span>

                  <span class="comic-series-published">
                    NOW OPEN
                  </span>

                </div>


                <div class="comic-series-preview">

                  <a
                    href="${comic.detailPage}"
                    class="comic-series-preview-image"
                  >

                    <img
                      src="${comic.image}"
                      alt="${comic.alt}"
                    >

                  </a>


                  <div class="comic-series-preview-info">

                    <h2>
                      ${comic.title}
                    </h2>


                    <p>
                      ${comic.description}
                    </p>


                    <button type="button" class="comic-like-button" data-episode-id="${comic.id}" aria-label="${comic.title}にいいね"><span class="article-like-heart">♡</span><span class="article-like-count">…</span></button>
                    <a
                      href="${comic.detailPage}"
                      class="comic-series-read"
                    >
                      1話ずつ読む →
                    </a>

                  </div>

                </div>

              </article>

            `;

          }
        )
        .join("");



    // ==================================================
    // DISPLAY
    // ==================================================

    container.innerHTML = `


      <header class="comic-series-header">


        <div class="comic-series-heading-label">

          <span class="comic-series-heading-number">
            06
          </span>


          <div>

            <span class="comic-series-heading-comic">
              COMIC
            </span>

            <a
              href="comic.html"
              class="comic-series-back-link"
            >
              ← BACK TO COMIC
            </a>

          </div>

        </div>


        <p class="comic-ref-small">
          SUI & ON COMIC
        </p>


        <h1>
          ${series.name}
        </h1>


        <p class="comic-series-lead">
          ${series.description}
        </p>


        <span
          class="comic-series-paw"
          aria-hidden="true"
        >
          🐾
        </span>


      </header>



      <div class="comic-series-list">

        ${comicsHTML}

      </div>



      <!-- ==================================================
           SERIES LIKE
      ================================================== -->

      <section class="comic-series-like-section">

        <div class="comic-series-like">

          <p class="comic-ref-small">
            LIKE THIS STORY?
          </p>

          <p>
            シリーズ全体を応援する
          </p>


          <button
            type="button"
            class="comic-like-button"
            data-series-id="${series.id}"
            aria-label="${series.name}にいいね"
          >

            <span class="article-like-heart">
              ♡
            </span>

            <span class="article-like-count">
              0
            </span>

          </button>

        </div>

      </section>



      <!-- ==================================================
           CONTINUE
      ================================================== -->

      <div class="comic-series-coming">

        <span>
          ${isComicSeriesComplete(seriesId) ? `${series.name} おわり` : "つづく…"}
        </span>

        <small>
          ${isComicSeriesComplete(seriesId) ? "THE END" : "TO BE CONTINUED"}
        </small>

        <p>
          ${isComicSeriesComplete(seriesId) ? (series.nextSeriesName ? `次は、${series.nextSeriesName}へ。お外の世界へ。` : "最後までお読みいただき、ありがとうございました。") : "次のお話も準備中です。"}
        </p>

      </div>



      <div class="comic-series-back">

        <a
          href="comic.html"
          class="main-button"
        >
          COMIC一覧へ戻る
        </a>

      </div>


    `;



    // ==================================================
    // PAGE TITLE
    // ==================================================

    document.title =
      `${series.name}｜COMIC｜すいとおん。`;



    // ==================================================
    // LIKE INITIALIZE
    // ==================================================

    if (
      typeof initializeComicLike ===
      "function"
    ) {

      initializeComicLike();

    }

  }
);
