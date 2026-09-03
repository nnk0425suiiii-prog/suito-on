// ==================================================
// COMIC SERIES LIKE
// すいとおん。
// ==================================================

const COMIC_LIKE_API =
  "https://suito-on-api.nnk0425suiiii.workers.dev";



async function initializeComicLike() {


  // ==================================================
  // BUTTON
  // ==================================================

  const likeButton =
    document.querySelector(
      ".comic-like-button"
    );


  if (!likeButton) {
    return;
  }


  // 二重初期化防止

  if (
    likeButton.dataset.initialized ===
    "true"
  ) {

    return;

  }


  likeButton.dataset.initialized =
    "true";



  const heart =
    likeButton.querySelector(
      ".article-like-heart"
    );


  const count =
    likeButton.querySelector(
      ".article-like-count"
    );



  // ==================================================
  // SERIES
  // ==================================================

  const seriesId =
    likeButton.dataset.seriesId;


  if (!seriesId) {
    return;
  }


  const series =
    getComicSeriesById(
      seriesId
    );


  if (!series) {
    return;
  }



  // ==================================================
  // CONTENT DATA
  // ==================================================

  const contentId =
    `comic-${series.id}`;


  const contentUrl =
    `comic-series.html?series=${series.id}`;


  const storageKey =
    `suito-on-liked-${contentId}`;



  // ==================================================
  // UI
  // ==================================================

  function setLikedUI(
    liked
  ) {


    if (liked) {

      likeButton.classList.add(
        "liked"
      );

      if (heart) {
        heart.textContent =
          "♥";
      }


    } else {

      likeButton.classList.remove(
        "liked"
      );

      if (heart) {
        heart.textContent =
          "♡";
      }

    }

  }



  // ==================================================
  // RESTORE
  // ==================================================

  const alreadyLiked =
    localStorage.getItem(
      storageKey
    ) ===
    "true";


  setLikedUI(
    alreadyLiked
  );



  // ==================================================
  // LOAD COUNT
  // ==================================================

  async function loadLikeCount() {


    if (!count) {
      return;
    }


    try {

      const response =
        await fetch(
          `${COMIC_LIKE_API}/likes?content_id=${encodeURIComponent(contentId)}`
        );


      if (!response.ok) {

        throw new Error(
          "LIKE COUNT取得失敗"
        );

      }


      const data =
        await response.json();


      count.textContent =
        Number(
          data.likes
        ) || 0;


    } catch (error) {

      console.error(
        "COMIC LIKE COUNT ERROR:",
        error
      );

    }

  }



  // ==================================================
  // SEND LIKE
  // ==================================================

  async function sendLike() {


    if (
      localStorage.getItem(
        storageKey
      ) ===
      "true"
    ) {

      setLikedUI(true);

      return;

    }


    likeButton.disabled =
      true;


    try {

      const response =
        await fetch(
          `${COMIC_LIKE_API}/like`,
          {

            method:
              "POST",

            headers: {

              "Content-Type":
                "application/json"

            },

            body:
              JSON.stringify({

                content_id:
                  contentId,

                content_type:
                  "COMIC",

                title:
                  series.name,

                url:
                  contentUrl

              })

          }
        );


      if (!response.ok) {

        throw new Error(
          "LIKE送信失敗"
        );

      }


      const data =
        await response.json();



      localStorage.setItem(
        storageKey,
        "true"
      );


      setLikedUI(true);


      if (count) {

        count.textContent =
          Number(
            data.likes
          ) || 0;

      }


    } catch (error) {

      console.error(
        "COMIC LIKE ERROR:",
        error
      );


    } finally {

      likeButton.disabled =
        false;

    }

  }



  // ==================================================
  // CLICK
  // ==================================================

  likeButton.addEventListener(
    "click",
    sendLike
  );



  // ==================================================
  // INITIAL COUNT
  // ==================================================

  await loadLikeCount();

}