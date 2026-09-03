/* ==================================================
   ITEMS
================================================== */


/* ==================================================
   BLOG ITEMS
================================================== */

function createBlogItems() {

  const blogItems = [];


  if (
    typeof blogPosts === "undefined"
  ) {
    return blogItems;
  }


  blogPosts.forEach(post => {

    if (
      !post.products ||
      !Array.isArray(post.products)
    ) {
      return;
    }


    post.products.forEach(product => {

      if (!product.id) {

        console.warn(
          "BLOGの商品にIDがありません:",
          product
        );

        return;
      }


      blogItems.push({

        id: product.id,

        name: product.name,

        addedDate:
          product.addedDate ||
          post.datetime,

        category:
          product.category || "",

        categoryId:
          product.categoryId || "other",

        dog:
          product.dog || "BOTH",

        image:
          product.image || "",

        price:
          product.price || "",

        shopUrl:
          product.url || "",

        blogUrl:
          `article.html?id=${post.id}`,

        recommendation:
          product.recommendation ||
          product.description ||
          "すいとおん。で実際に使っている愛用品です。",

        source:
          "blog"

      });

    });

  });


  return blogItems;
}



/* ==================================================
   MANUAL ITEMS
================================================== */

function createManualItems() {

  if (
    typeof manualItems === "undefined"
  ) {
    return [];
  }


  return manualItems.map(item => ({

    ...item,

    addedDate:
      item.addedDate || "",

    category:
      item.category || "",

    categoryId:
      item.categoryId || "other",

    dog:
      item.dog || "BOTH",

    image:
      item.image || "",

    price:
      item.price || "",

    shopUrl:
      item.shopUrl || "",

    blogUrl:
      item.blogUrl || "",

    recommendation:
      item.recommendation ||
      item.description ||
      "すいとおん。で実際に使っている愛用品です。",

    source:
      "manual"

  }));

}



/* ==================================================
   MERGE
================================================== */

const blogItems =
  createBlogItems();


const manuallyAddedItems =
  createManualItems();


const mergedItems = [
  ...blogItems,
  ...manuallyAddedItems
];



/* ==================================================
   DUPLICATE REMOVE
================================================== */

const uniqueItemsMap =
  new Map();


mergedItems.forEach(item => {

  if (!item.id) {

    console.warn(
      "ITEM IDがありません:",
      item
    );

    return;
  }


  if (
    !uniqueItemsMap.has(item.id)
  ) {

    uniqueItemsMap.set(
      item.id,
      item
    );

  }

});



/* ==================================================
   ALL ITEMS
================================================== */

const allItems =
  Array.from(
    uniqueItemsMap.values()
  )

  .sort((a, b) => {


    const dateA =
      a.addedDate

        ? new Date(
            `${a.addedDate}T00:00:00`
          )

        : new Date(0);


    const dateB =
      b.addedDate

        ? new Date(
            `${b.addedDate}T00:00:00`
          )

        : new Date(0);


    return dateB - dateA;

  });



/* ==================================================
   NEW CHECK
================================================== */

function isNewItem(addedDate) {

  if (!addedDate) {
    return false;
  }


  const added =
    new Date(
      `${addedDate}T00:00:00`
    );


  if (
    Number.isNaN(
      added.getTime()
    )
  ) {
    return false;
  }


  const today =
    new Date();


  today.setHours(
    0,
    0,
    0,
    0
  );


  const difference =
    today.getTime()
    -
    added.getTime();


  const days =
    Math.floor(
      difference /
      (
        1000 *
        60 *
        60 *
        24
      )
    );


  return (
    days >= 0 &&
    days < 14
  );

}



/* ==================================================
   FILTER STATE
================================================== */

let selectedDog =
  "all";


let selectedCategory =
  "all";



/* ==================================================
   DOG CLASS
================================================== */

function getDogClass(dog) {

  if (dog === "SUI") {
    return "item-dog-sui";
  }

  if (dog === "ON") {
    return "item-dog-on";
  }

  return "item-dog-both";

}



/* ==================================================
   DISPLAY
================================================== */

function displayItems(
  itemsToDisplay
) {

  const itemsList =
    document.getElementById(
      "itemsList"
    );

  if (!itemsList) {
    return;
  }

  itemsList.innerHTML = "";


  /* EMPTY */

  if (
    itemsToDisplay.length === 0
  ) {

    itemsList.innerHTML = `

      <p class="items-ref-empty">
        この条件の商品は
        まだありません。
      </p>

    `;

    return;
  }


  /* ITEMS */

  itemsToDisplay.forEach(
    (item, index) => {

      const article =
        document.createElement(
          "article"
        );

      article.className =
        "items-ref-card";

      article.id =
        `item-${item.id}`;

      const dogClass =
        getDogClass(
          item.dog
        );

      const itemNumber =
        String(index + 1)
          .padStart(2, "0");

      const newHTML =
        isNewItem(item.addedDate)
          ? `
            <span class="items-ref-new">
              NEW
            </span>
          `
          : "";

      const imageHTML =
        item.image
          ? `
            <img
              src="${item.image}"
              alt="${item.name}"
            >
          `
          : `
            <div class="items-ref-no-image">
              NO IMAGE
            </div>
          `;

      const shopHTML =
        item.shopUrl
          ? `
            <a
              href="${item.shopUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="items-ref-shop-link"
            >
              ITEMを見る
              <span>↗</span>
            </a>
          `
          : "";

      const blogHTML =
        item.blogUrl
          ? `
            <a
              href="${item.blogUrl}"
              class="items-ref-blog-link"
            >
              BLOGで詳しく読む →
            </a>
          `
          : "";

      const recommendation =
        item.recommendation ||
        "すいとおん。で実際に使っている愛用品です。";

      const backColorClass =
        index % 2 === 0
          ? "items-ref-back-sui"
          : "items-ref-back-on";

      article.innerHTML = `

        <div class="items-ref-card-top">
          <span class="items-ref-index">${itemNumber}</span>
          <span class="items-ref-card-label">FAVORITE ITEM</span>
        </div>

        <div
          class="items-ref-flip-card"
          tabindex="0"
          role="button"
          aria-label="${item.name}のおすすめポイントを見る"
          aria-pressed="false"
        >

          <div class="items-ref-flip-inner">

            <div class="items-ref-flip-front">

              <div class="items-ref-image">
                ${imageHTML}
                ${newHTML}
                <span class="items-ref-flip-hint">WHY? ↻</span>
              </div>

              <div class="items-ref-info">

                <div class="items-ref-meta">
                  <span class="items-ref-category">
                    ${item.category || "ITEM"}
                  </span>
                  <span class="item-dog ${dogClass}">
                    ${item.dog || "BOTH"}
                  </span>
                </div>

                <h2>${item.name}</h2>

                ${
                  item.price
                    ? `<p class="items-ref-price">${item.price}</p>`
                    : ""
                }

                <div class="item-like">
                  <button
                    class="item-like-button"
                    type="button"
                    data-item-id="${item.id}"
                    aria-label="${item.name}にいいね"
                  >
                    <span class="item-like-heart">♡</span>
                    <span class="item-like-count">0</span>
                  </button>
                </div>

              </div>

            </div>

            <div class="items-ref-flip-back ${backColorClass}">

              <div class="items-ref-back-content">

                <p class="items-ref-back-kicker">WHY WE LIKE IT</p>

                <h3>すいとおん。からひと言</h3>

                <p class="items-ref-recommendation">
                  ${recommendation}
                </p>

                <div class="items-ref-back-links">
                  ${blogHTML}
                  ${shopHTML}
                </div>

                <button
                  type="button"
                  class="items-ref-flip-back-button"
                  aria-label="表面に戻る"
                >
                  ↻ BACK
                </button>

              </div>

            </div>

          </div>

        </div>

      `;

      itemsList.appendChild(
        article
      );

    }
  );


  /* FLIP CARD */

  initializeItemFlipCards(
    itemsList
  );


  /* LIKE RELOAD */

  if (
    typeof initializeItemLikes
    === "function"
  ) {

    initializeItemLikes();

  }

}


/* ==================================================
   ITEM FLIP CARD
================================================== */

function initializeItemFlipCards(
  container
) {

  const cards =
    container.querySelectorAll(
      ".items-ref-flip-card"
    );

  cards.forEach(card => {

    const setFlipped =
      flipped => {

        card.classList.toggle(
          "is-flipped",
          flipped
        );

        card.setAttribute(
          "aria-pressed",
          flipped ? "true" : "false"
        );

      };

    card.addEventListener(
      "click",
      event => {

        if (
          event.target.closest(
            "a, button"
          )
        ) {
          return;
        }

        setFlipped(
          !card.classList.contains(
            "is-flipped"
          )
        );

      }
    );

    card.addEventListener(
      "keydown",
      event => {

        if (
          event.target !== card ||
          !["Enter", " "].includes(
            event.key
          )
        ) {
          return;
        }

        event.preventDefault();

        setFlipped(
          !card.classList.contains(
            "is-flipped"
          )
        );

      }
    );

    const backButton =
      card.querySelector(
        ".items-ref-flip-back-button"
      );

    if (backButton) {

      backButton.addEventListener(
        "click",
        event => {

          event.stopPropagation();
          setFlipped(false);

        }
      );

    }

  });

}


/* ==================================================
   APPLY FILTER
================================================== */

function applyItemsFilter() {


  const filteredItems =
    allItems.filter(item => {


      const dogMatch =
        selectedDog === "all"
        ||
        item.dog === selectedDog;


      const categoryMatch =
        selectedCategory === "all"
        ||
        item.categoryId ===
          selectedCategory;


      return (
        dogMatch &&
        categoryMatch
      );

    });


  displayItems(
    filteredItems
  );

}



/* ==================================================
   DOG FILTER
================================================== */

const dogFilterButtons =
  document.querySelectorAll(
    ".items-filter-button[data-dog]"
  );


dogFilterButtons.forEach(
  button => {


    button.addEventListener(
      "click",
      () => {


        selectedDog =
          button.dataset.dog;


        dogFilterButtons.forEach(
          btn => {

            btn.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );


        applyItemsFilter();

      }
    );

  }
);



/* ==================================================
   CATEGORY FILTER
================================================== */

const categoryFilterButtons =
  document.querySelectorAll(
    ".items-filter-button[data-category]"
  );


categoryFilterButtons.forEach(
  button => {


    button.addEventListener(
      "click",
      () => {


        selectedCategory =
          button.dataset.category;


        categoryFilterButtons.forEach(
          btn => {

            btn.classList.remove(
              "active"
            );

          }
        );


        button.classList.add(
          "active"
        );


        applyItemsFilter();

      }
    );

  }
);



/* ==================================================
   FIRST DISPLAY
================================================== */

displayItems(
  allItems
);