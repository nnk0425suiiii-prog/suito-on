/* ==================================================
   ITEMS LIKE
================================================== */

const ITEMS_LIKE_API =
  "https://suito-on-api.nnk0425suiiii.workers.dev";


/* ==================================================
   STORAGE
================================================== */

function getItemLikeStorageKey(
  contentId
) {

  return `suito-on-liked-${contentId}`;

}


function hasLikedItem(
  contentId
) {

  return (
    localStorage.getItem(
      getItemLikeStorageKey(contentId)
    )
    ===
    "true"
  );

}


/* ==================================================
   FIND ITEM
================================================== */

function getItemById(
  itemId
) {

  return allItems.find(
    item =>
      String(item.id)
      ===
      String(itemId)
  );

}


/* ==================================================
   BUTTON UI
================================================== */

function setItemLikedUI(
  button,
  liked
) {

  const heart =
    button.querySelector(
      ".item-like-heart"
    );


  if (liked) {

    button.classList.add(
      "liked"
    );

    heart.textContent =
      "♥";

  } else {

    button.classList.remove(
      "liked"
    );

    heart.textContent =
      "♡";

  }

}


/* ==================================================
   LOAD LIKE
================================================== */

async function loadItemLike(
  button
) {

  const itemId =
    button.dataset.itemId;


  const contentId =
    `item-${itemId}`;


  const count =
    button.querySelector(
      ".item-like-count"
    );


  try {

    const response =
      await fetch(
        `${ITEMS_LIKE_API}/likes?content_id=${encodeURIComponent(contentId)}`
      );


    if (!response.ok) {

      throw new Error(
        "いいね数を取得できませんでした"
      );

    }


    const result =
      await response.json();


    count.textContent =
      Number(result.likes) || 0;


    setItemLikedUI(
      button,
      hasLikedItem(contentId)
    );


  } catch (error) {

    console.error(
      "Item like count error:",
      error
    );

  }

}


/* ==================================================
   ADD LIKE
================================================== */

async function addItemLike(
  button
) {

  const itemId =
    button.dataset.itemId;


  const item =
    getItemById(itemId);


  if (!item) {
    return;
  }


  const contentId =
    `item-${item.id}`;


  if (
    hasLikedItem(contentId)
  ) {

    setItemLikedUI(
      button,
      true
    );

    return;

  }


  button.disabled =
    true;


  try {

    const response =
      await fetch(
        `${ITEMS_LIKE_API}/like`,
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify({

              content_id:
                contentId,

              content_type:
                "ITEMS",

              title:
                item.name,

              url:
                `items.html#item-${item.id}`

            })

        }
      );


    if (!response.ok) {

      throw new Error(
        "いいねできませんでした"
      );

    }


    const result =
      await response.json();


    const count =
      button.querySelector(
        ".item-like-count"
      );


    count.textContent =
      Number(result.likes) || 0;


    localStorage.setItem(
      getItemLikeStorageKey(
        contentId
      ),
      "true"
    );


    setItemLikedUI(
      button,
      true
    );


  } catch (error) {

    console.error(
      "Item like error:",
      error
    );


  } finally {

    button.disabled =
      false;

  }

}


/* ==================================================
   INITIALIZE
================================================== */

function initializeItemLikes() {

  const buttons =
    document.querySelectorAll(
      ".item-like-button"
    );


  buttons.forEach(
    button => {

      loadItemLike(
        button
      );

    }
  );

}


/* ==================================================
   CLICK
================================================== */

document.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        ".item-like-button"
      );


    if (!button) {
      return;
    }


    addItemLike(
      button
    );

  }
);


/* ==================================================
   FIRST LOAD
================================================== */

initializeItemLikes();