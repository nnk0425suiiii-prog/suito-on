/* ==================================================
   GUIDE ARTICLE
================================================== */


/* URL */

const params =
  new URLSearchParams(
    window.location.search
  );


const articleId =
  params.get("id");



/* ==================================================
   ARTICLE SEARCH
================================================== */

const guidePost =
  guidePosts.find(
    post =>
      post.id === articleId
  );



/* ==================================================
   ELEMENTS
================================================== */

const articleTitle =
  document.getElementById(
    "guideArticleTitle"
  );


const articleDate =
  document.getElementById(
    "guideArticleDate"
  );


const articleCategory =
  document.getElementById(
    "guideArticleCategory"
  );


const articleLead =
  document.getElementById(
    "guideArticleLead"
  );


const articleImage =
  document.getElementById(
    "guideArticleImage"
  );


const articleBody =
  document.getElementById(
    "guideArticleBody"
  );



/* ==================================================
   DISPLAY
================================================== */

if (
  guidePost
  && (
    typeof isContentPublished !== "function"
    || isContentPublished(guidePost)
  )
) {


  /* TITLE */

  document.title =
    `${guidePost.title} | すいとおん。`;


  articleTitle.textContent =
    guidePost.title;



  /* DATE */

  articleDate.textContent =
    guidePost.date;

  articleDate.setAttribute(
    "datetime",
    guidePost.datetime
  );



  /* CATEGORY */

  articleCategory.textContent =
    guidePost.category;



  /* LEAD */

  articleLead.textContent =
    guidePost.lead;



  /* IMAGE */

  articleImage.src =
    guidePost.image;

  articleImage.alt =
    guidePost.title;



  /* CONTENT */

  articleBody.innerHTML =
    guidePost.content;


}


/* ==================================================
   NOT FOUND
================================================== */

else {

  markArticleNotFound();

  document.title =
    "記事が見つかりません | すいとおん。";


  articleTitle.textContent =
    "記事が見つかりませんでした。";


  articleLead.textContent =
    "GUIDE一覧から記事を選び直してください。";


  articleImage.style.display =
    "none";


  articleBody.innerHTML = `

    <p>
      <a href="guide.html">
        GUIDE一覧へ戻る →
      </a>
    </p>

  `;

}
/* ==================================================
   PREVIOUS / NEXT GUIDE
================================================== */

function setupGuideNavigation() {

  const previousGuide =
    document.getElementById(
      "previousGuide"
    );

  const nextGuide =
    document.getElementById(
      "nextGuide"
    );


  if (
    !previousGuide
    ||
    !nextGuide
  ) {
    return;
  }


  const params =
    new URLSearchParams(
      window.location.search
    );

  const currentId =
    params.get("id");


  /* 新しいガイド → 古いガイド の順 */

  const sortedGuides =
    [...guidePosts]
      .filter(item =>
        typeof isContentPublished !== "function"
        || isContentPublished(item)
      )
      .sort(
      (a, b) =>
        new Date(b.datetime)
        -
        new Date(a.datetime)
    );


  const currentIndex =
    sortedGuides.findIndex(
      guide =>
        String(guide.id)
        ===
        String(currentId)
    );


  if (currentIndex === -1) {
    return;
  }


  /*
    新しい順なので

    index - 1 = より新しいガイド
    index + 1 = より古いガイド
  */

  const newerGuide =
    sortedGuides[
      currentIndex - 1
    ];

  const olderGuide =
    sortedGuides[
      currentIndex + 1
    ];


  /* --------------------------------
     PREV = 古いガイド
  -------------------------------- */

  if (olderGuide) {

    previousGuide.innerHTML = `

      <a
        href="guide-article.html?id=${olderGuide.id}"
        class="article-navigation-link"
      >

        <span class="article-navigation-label">
          ← PREV
        </span>

        <span class="article-navigation-title">
          ${olderGuide.title}
        </span>

      </a>

    `;

  }


  /* --------------------------------
     NEXT = 新しいガイド
  -------------------------------- */

  if (newerGuide) {

    nextGuide.innerHTML = `

      <a
        href="guide-article.html?id=${newerGuide.id}"
        class="article-navigation-link"
      >

        <span class="article-navigation-label">
          NEXT →
        </span>

        <span class="article-navigation-title">
          ${newerGuide.title}
        </span>

      </a>

    `;

  }

}


setupGuideNavigation();
if (guidePost && (typeof isContentPublished !== "function" || isContentPublished(guidePost))) {
  enhanceArticle(guidePost, guidePosts, "guide-article", "guideArticleBody");
}