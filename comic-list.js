// ==================================================
// COMIC SERIES LIST
// すいとおん。
// ==================================================

document.addEventListener(
  "DOMContentLoaded",
  function () {


    const container =
      document.getElementById(
        "comicList"
      );


    if (!container) {
      return;
    }


    container.innerHTML =
      "";



    // ==================================================
    // PUBLISHED SERIES
    // ==================================================

    comicSeriesData.forEach(
      series => {


        if (series.comingSoon) {
          return;
        }


        const comics =
          comicData.filter(
            comic =>
              comic.series ===
              series.name
          );


        const published =
          comics.filter(
            comic =>
              !comic.comingSoon
          );


        if (!published.length) {
          return;
        }



        // ==================================================
        // THUMBNAIL
        // ==================================================

        const thumbnail =
          series.thumbnail ||
          published[0].image;



        // ==================================================
        // CARD
        // ==================================================

        const card =
          document.createElement(
            "a"
          );


        card.className =
          "comic-list-card";


        card.href =
          `comic-series.html?series=${series.id}`;



        card.innerHTML = `

          <div class="comic-list-image">

            <span class="comic-list-tape">
            </span>

            <img
              src="${thumbnail}"
              alt="${series.name}"
            >

          </div>


          <div class="comic-list-info">

            <span class="comic-list-small">
              SUI & ON COMIC
            </span>


            <span class="comic-list-count">
              ${published.length}話 公開中
            </span>


            <h2>
              ${series.name}
            </h2>


            <p>
              ${series.description}
            </p>


            <strong>
              この編を読む →
            </strong>

          </div>

        `;


        container.appendChild(
          card
        );

      }
    );



    // ==================================================
    // NEXT STORY
    // ==================================================

    const coming =
      document.createElement(
        "article"
      );


    coming.className =
      "comic-list-card comic-coming-soon";


    coming.innerHTML = `

      <div class="comic-coming-image">

        <span class="comic-coming-doodle">
          ✎
        </span>

        <strong>
          COMING
          <br>
          SOON
        </strong>

        <small>
          NEXT STORY
        </small>

      </div>


      <div class="comic-list-info">

        <span class="comic-list-small">
          SUI & ON COMIC
        </span>


        <h2>
          次のお話
        </h2>


        <p>
          すいとの毎日を、
          また少しずつ4コマにしていきます。
        </p>


        <strong>
          準備中…
        </strong>

      </div>

    `;


    container.appendChild(
      coming
    );

  }
);