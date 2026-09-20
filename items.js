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

    /* =========================
       公開済みBLOGの記事だけ
    ========================= */

    if (
      typeof isContentPublished === "function"
      &&
      !isContentPublished(post)
    ) {
      return;
    }


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

        updatedDate: post.datetime || product.addedDate || "",

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

    updatedDate: item.updatedDate || item.addedDate || "",

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


function getItemDateTime(value) {
  if (!value) return 0;
  const time = Date.parse(/^\d{4}-\d{2}-\d{2}$/.test(value) ? `${value}T00:00:00+09:00` : value);
  return Number.isFinite(time) ? time : 0;
}

mergedItems.forEach(item => {
  if (!item.id) return;
  const previous = uniqueItemsMap.get(item.id);
  if (!previous || (item.source === "blog" && previous.source !== "blog") ||
      (item.source === previous.source && getItemDateTime(item.updatedDate) > getItemDateTime(previous.updatedDate))) {
    uniqueItemsMap.set(item.id, item);
  }
});

// NEW表示と同じ追加日を基準に、ブログ掲載・手動追加をまとめて新着順に表示。
const allItems = Array.from(uniqueItemsMap.values()).sort((a, b) =>
  getItemDateTime(b.addedDate || b.updatedDate) - getItemDateTime(a.addedDate || a.updatedDate)
  || String(a.id).localeCompare(String(b.id))
);


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


  /* ==================================================
     EMPTY
  ================================================== */

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



  /* ==================================================
     ITEMS
  ================================================== */

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



      /* =========================
         DOG
      ========================= */

      const dogClass =
        getDogClass(
          item.dog
        );



      /* =========================
         NUMBER
      ========================= */

      const itemNumber =
        String(index + 1)
          .padStart(2, "0");



      /* =========================
         NEW
      ========================= */

      const newHTML =
        isNewItem(item.addedDate)

          ? `
            <span class="items-ref-new">
              NEW
            </span>
          `

          : "";



      /* =========================
         IMAGE
      ========================= */

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



      /* =========================
         ITEM LINK
      ========================= */

      const shopHTML =
        item.shopUrl

          ? `
            <a
              href="${item.shopUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="items-ref-shop-link"
            >
              商品を見る
              <span>↗</span>
            </a>
          `

          : "";



      /* =========================
         BLOG LINK
      ========================= */

      const blogHTML =
        item.blogUrl

          ? `
            <a
              href="${item.blogUrl}"
              class="items-ref-blog-link"
            >
              紹介ブログを読む →
            </a>
          `

          : "";



      /* =========================
         RECOMMENDATION
      ========================= */

      const recommendation =
        item.recommendation ||
        "すいとおん。で実際に使っている愛用品です。";



      /* =========================
         BACK COLOR
      ========================= */

      const backColorClass =
        index % 2 === 0
          ? "items-ref-back-sui"
          : "items-ref-back-on";



      /* =========================
         LIKE
         裏面に表示
      ========================= */

      const likeHTML = `

        <div class="item-like item-like-back">

          <button
            class="item-like-button"
            type="button"
            data-item-id="${item.id}"
            aria-label="${item.name}にいいね"
          >

            <span class="item-like-heart">
              ♡
            </span>

            <span class="item-like-count">
              0
            </span>

          </button>

        </div>

      `;



      /* ==================================================
         CARD HTML
      ================================================== */

      article.innerHTML = `
        <div class="item-open-card">
          <div class="item-open-photo">${imageHTML}${newHTML}</div>
          <div class="item-open-body">
            <div class="items-ref-meta"><span class="items-ref-category">${item.category || "ITEM"}</span><span class="item-dog ${dogClass}">${item.dog || "BOTH"}</span></div>
            <h2>${item.name}</h2>
            ${item.price ? `<p class="item-open-price">${item.price}</p>` : ""}
            <p class="item-open-note">${recommendation}</p>
            <div class="item-open-links">${blogHTML}${shopHTML}</div>
            ${likeHTML}
          </div>
        </div>
      `;

      itemsList.appendChild(
        article
      );

    }
  );



  /* ==================================================
     FLIP CARD
  ================================================== */





  /* ==================================================
     LIKE RELOAD
  ================================================== */

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
          flipped
            ? "true"
            : "false"
        );

      };



    /* ==================================================
       CARD CLICK
    ================================================== */

    card.addEventListener(
      "click",
      event => {


        /*
          LINK / BUTTONを押した場合は
          カードを裏返さない
        */

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



    /* ==================================================
       KEYBOARD
    ================================================== */

    card.addEventListener(
      "keydown",
      event => {


        if (
          event.target !== card
          ||
          ![
            "Enter",
            " "
          ].includes(
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



    /* ==================================================
       BACK BUTTON
    ================================================== */

    const backButton =
      card.querySelector(
        ".items-ref-flip-back-button"
      );


    if (backButton) {

      backButton.addEventListener(
        "click",
        event => {


          event.stopPropagation();


          setFlipped(
            false
          );

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
