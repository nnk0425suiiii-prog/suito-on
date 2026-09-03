/* ==================================================
   SUI TO ON LIKE
================================================== */

const LIKE_API =
  "https://suito-on-api.nnk0425suiiii.workers.dev";


const articleLikeButton =
  document.getElementById(
    "articleLikeButton"
  );

const articleLikeCount =
  document.getElementById(
    "articleLikeCount"
  );

const articleLikeHeart =
  document.getElementById(
    "articleLikeHeart"
  );


/* ==================================================
   ARTICLE DATA
================================================== */

function getArticleLikeData() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const articleId =
    params.get("id");


  if (!articleId) {
    return null;
  }


  const article =
    blogPosts.find(
      post =>
        String(post.id)
        ===
        String(articleId)
    );


  if (!article) {
    return null;
  }


  return {
    content_id:
      `blog-${article.id}`,

    content_type:
      "BLOG",

    title:
      article.title,

    url:
      `article.html?id=${article.id}`
  };

}



/* ==================================================
   LOCAL STORAGE KEY
================================================== */

function getLikeStorageKey(
  contentId
) {

  return (
    `suito-on-liked-${contentId}`
  );

}



/* ==================================================
   CHECK LIKED
================================================== */

function hasLiked(
  contentId
) {

  return (
    localStorage.getItem(
      getLikeStorageKey(
        contentId
      )
    )
    ===
    "true"
  );

}



/* ==================================================
   SET LIKED UI
================================================== */

function setLikedUI(
  liked
) {

  if (!articleLikeButton) {
    return;
  }


  if (liked) {

    articleLikeButton
      .classList
      .add("liked");

    articleLikeHeart.textContent =
      "♥";

  }

  else {

    articleLikeButton
      .classList
      .remove("liked");

    articleLikeHeart.textContent =
      "♡";

  }

}



/* ==================================================
   LOAD LIKE COUNT
================================================== */

async function loadLikeCount() {

  const data =
    getArticleLikeData();


  if (
    !data
    ||
    !articleLikeCount
  ) {
    return;
  }


  try {

    const response =
      await fetch(
        `${LIKE_API}/likes?content_id=${encodeURIComponent(
          data.content_id
        )}`
      );


    if (!response.ok) {

      throw new Error(
        "いいね数を取得できませんでした"
      );

    }


    const result =
      await response.json();


    articleLikeCount.textContent =
      Number(
        result.likes
      )
      || 0;


    setLikedUI(
      hasLiked(
        data.content_id
      )
    );

  }

  catch (error) {

    console.error(
      "Like count error:",
      error
    );

  }

}



/* ==================================================
   ADD LIKE
================================================== */

async function addLike() {

  const data =
    getArticleLikeData();


  if (
    !data
    ||
    !articleLikeButton
  ) {
    return;
  }


  if (
    hasLiked(
      data.content_id
    )
  ) {

    setLikedUI(true);

    return;
  }


  articleLikeButton.disabled =
    true;


  try {

    const response =
      await fetch(
        `${LIKE_API}/like`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body:
            JSON.stringify(
              data
            )
        }
      );


    if (!response.ok) {

      throw new Error(
        "いいねできませんでした"
      );

    }


    const result =
      await response.json();


    articleLikeCount.textContent =
      Number(
        result.likes
      )
      || 0;


    localStorage.setItem(
      getLikeStorageKey(
        data.content_id
      ),
      "true"
    );


    setLikedUI(true);

  }

  catch (error) {

    console.error(
      "Like error:",
      error
    );

  }

  finally {

    articleLikeButton.disabled =
      false;

  }

}



/* ==================================================
   EVENT
================================================== */

if (
  articleLikeButton
) {

  articleLikeButton
    .addEventListener(
      "click",
      addLike
    );

}



/* ==================================================
   START
================================================== */

loadLikeCount();