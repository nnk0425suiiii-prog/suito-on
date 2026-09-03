/* ==================================================
   HOME ITEMS
   最新2商品だけ表示
================================================== */

const homeItemsList =
  document.getElementById(
    "homeItemsList"
  );


if (
  homeItemsList
  &&
  typeof allItems !== "undefined"
) {


  /* ==================================================
     HOMEに表示する商品数
  ================================================== */

  const HOME_ITEM_LIMIT =
    2;


  const homeItems =
    allItems.slice(
      0,
      HOME_ITEM_LIMIT
    );


  /* ==================================================
     DISPLAY
  ================================================== */

  homeItems.forEach(
    item => {


      const article =
        document.createElement(
          "article"
        );


      article.className =
        "home-item-card";


      /* ==================================================
         DOG COLOR
      ================================================== */

      let dogClass =
        "item-dog-both";


      if (
        item.dog === "SUI"
      ) {

        dogClass =
          "item-dog-sui";

      }


      if (
        item.dog === "ON"
      ) {

        dogClass =
          "item-dog-on";

      }


      /* ==================================================
         NEW
      ================================================== */

      let newHTML =
        "";


      if (
        typeof isNewItem === "function"
        &&
        isNewItem(
          item.addedDate
        )
      ) {

        newHTML = `

          <span class="item-new">
            NEW
          </span>

        `;

      }


      /* ==================================================
         IMAGE
      ================================================== */

      const imageHTML =
        item.image

          ? `

            <img
              src="${item.image}"
              alt="${item.name}"
            >

          `

          : `

            <div class="item-no-image">
              NO IMAGE
            </div>

          `;


      /* ==================================================
         IMAGE AREA
      ================================================== */

      const imageArea =
        item.shopUrl

          ? `

            <a
              href="${item.shopUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="home-item-image"
            >

              ${imageHTML}
              ${newHTML}

            </a>

          `

          : `

            <div
              class="home-item-image"
            >

              ${imageHTML}
              ${newHTML}

            </div>

          `;


      /* ==================================================
         CARD
      ================================================== */

      article.innerHTML = `

        ${imageArea}


        <div class="home-item-info">

          <div class="home-item-meta">

            <span
              class="item-dog ${dogClass}"
            >
              ${item.dog || "BOTH"}
            </span>

          </div>


          <h3>
            ${item.name}
          </h3>


          ${
            item.price
              ? `
                <p class="home-item-price">
                  ${item.price}
                </p>
              `
              : ""
          }


          ${
            item.shopUrl
              ? `
                <a
                  href="${item.shopUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="home-item-link"
                >
                  商品を見る →
                </a>
              `
              : ""
          }

        </div>

      `;


      homeItemsList.appendChild(
        article
      );

    }
  );

}