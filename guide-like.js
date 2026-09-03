/* ==================================================
   GUIDE LIKE
================================================== */

const GUIDE_LIKE_API =
  "https://suito-on-api.nnk0425suiiii.workers.dev";


const guideLikeButton =
  document.getElementById(
    "guideLikeButton"
  );

const guideLikeCount =
  document.getElementById(
    "guideLikeCount"
  );

const guideLikeHeart =
  document.getElementById(
    "guideLikeHeart"
  );


/* ==================================================
   GUIDE DATA
================================================== */

function getGuideLikeData() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const guideId =
    params.get("id");


  if (!guideId) {
    return null;
  }


  const guide =
    guidePosts.find(
      post =>
        String(post.id)
        ===
        String(guideId)
    );


  if (!guide) {
    return null;
  }


  return {

    content_id:
      `guide-${guide.id}`,

    content_type:
      "GUIDE",

    title:
      guide.title,

    url:
      `guide-article.html?id=${guide.id}`

  };

}


/* ==================================================
   LOCAL STORAGE
================================================== */

function getGuideLikeStorageKey(
  contentId
) {

  return `suito-on-liked-${contentId}`;

}


function hasLikedGuide(
  contentId
) {

  return (
    localStorage.getItem(
      getGuideLikeStorageKey(
        contentId
      )
    )
    ===
    "true"
  );

}


/* ==================================================
   LIKE UI
================================================== */

function setGuideLikedUI(
  liked
) {

  if (!guideLikeButton) {
    return;
  }


  if (liked) {

    guideLikeButton.classList.add(
      "liked"
    );

    guideLikeHeart.textContent =
      "♥";

  } else {

    guideLikeButton.classList.remove(
      "liked"
    );

    guideLikeHeart.textContent =
      "♡";

  }

}


/* ==================================================
   LOAD LIKE COUNT
================================================== */

async function loadGuideLikeCount() {

  const data =
    getGuideLikeData();


  if (
    !data
    ||
    !guideLikeCount
  ) {
    return;
  }


  try {

    const response =
      await fetch(
        `${GUIDE_LIKE_API}/likes?content_id=${encodeURIComponent(data.content_id)}`
      );


    if (!response.ok) {

      throw new Error(
        "いいね数を取得できませんでした"
      );

    }


    const result =
      await response.json();


    guideLikeCount.textContent =
      Number(result.likes) || 0;


    setGuideLikedUI(
      hasLikedGuide(
        data.content_id
      )
    );


  } catch (error) {

    console.error(
      "Guide like count error:",
      error
    );

  }

}


/* ==================================================
   ADD LIKE
================================================== */

async function addGuideLike() {

  const data =
    getGuideLikeData();


  if (
    !data
    ||
    !guideLikeButton
  ) {
    return;
  }


  if (
    hasLikedGuide(
      data.content_id
    )
  ) {

    setGuideLikedUI(true);

    return;

  }


  guideLikeButton.disabled =
    true;


  try {

    const response =
      await fetch(
        `${GUIDE_LIKE_API}/like`,
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify(data)

        }
      );


    if (!response.ok) {

      throw new Error(
        "いいねできませんでした"
      );

    }


    const result =
      await response.json();


    guideLikeCount.textContent =
      Number(result.likes) || 0;


    localStorage.setItem(
      getGuideLikeStorageKey(
        data.content_id
      ),
      "true"
    );


    setGuideLikedUI(true);


  } catch (error) {

    console.error(
      "Guide like error:",
      error
    );


  } finally {

    guideLikeButton.disabled =
      false;

  }

}


/* ==================================================
   EVENT
================================================== */

if (guideLikeButton) {

  guideLikeButton.addEventListener(
    "click",
    addGuideLike
  );

}


loadGuideLikeCount();