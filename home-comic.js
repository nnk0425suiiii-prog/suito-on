// ==================================================
// HOME COMIC
// 最新の公開4コマを、1コマサムネイルで表示
// ==================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const container =
      document.getElementById(
        "homeComic"
      );


    if (!container) {
      return;
    }


    if (
      typeof comicData ===
      "undefined"
    ) {

      console.error(
        "comicData が読み込まれていません"
      );

      return;
    }


    const comic =
      getLatestComic();


    if (!comic) {

      container.innerHTML = `
        <p class="comic-empty">
          4コマ準備中です。
        </p>
      `;

      return;
    }


    /* ==================================================
       THUMBNAIL
       優先順位
       1. comicSeriesData のシリーズサムネイル
       2. comic.thumbnail
       3. comic.image
    ================================================== */

    let comicThumbnail =
      comic.thumbnail
      ||
      comic.image;


    if (
      typeof comicSeriesData !==
      "undefined"
    ) {

      const seriesData =
        comicSeriesData.find(
          series =>
            series.name === comic.series
            ||
            series.id === comic.seriesId
            ||
            series.id === comic.series
        );


      if (
        seriesData
        &&
        seriesData.thumbnail
      ) {

        comicThumbnail =
          seriesData.thumbnail;

      }

    }


    /* ==================================================
       NEXT CHECK
    ================================================== */

    const hasNext =
      comicData.some(
        item =>
          item.id > comic.id
      );


    /* ==================================================
       RENDER
    ================================================== */

    container.innerHTML = `

      <div class="home-comic-header">

        <div>

          <p class="home-comic-subtitle">
            SUI & ON COMIC
          </p>

          <h2>
            すいとおん。4コマ
          </h2>

        </div>


        <span class="home-comic-new">
          NEW
        </span>

      </div>



      <a
        href="${comic.detailPage}"
        class="home-comic-card"
      >

        <div class="home-comic-image-wrap">

          <img
            src="${comicThumbnail}"
            alt="${comic.alt || comic.title}"
            class="home-comic-image"
          >

        </div>


        <div class="home-comic-info">

          <span class="home-comic-number">
            ${comic.series}
            #${comic.number}
          </span>


          <h3>
            ${comic.title}
          </h3>


          <p>
            ${comic.description}
          </p>


          <span class="home-comic-read">
            4コマを読む →
          </span>

        </div>

      </a>


      ${
        hasNext
          ? `
            <div class="home-comic-continue">

              <span>
                つづく…
              </span>

              <small>
                COMING SOON
              </small>

            </div>
          `
          : ""
      }


      <div class="home-comic-footer">

        <a
          href="comic.html"
          class="home-comic-archive"
        >
          これまでの4コマを見る
        </a>

      </div>

    `;

  }
);