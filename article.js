// Old profile links shared before September 2026 continue to work.
(() => {
  const url = new URL(window.location.href);
  const aliases = { "about-sui": "introduce-sui", "about-on": "introduce-on" };
  const id = url.searchParams.get("id");
  const replacement = Object.prototype.hasOwnProperty.call(aliases, id) ? aliases[id] : null;
  if (replacement) {
    url.searchParams.set("id", replacement);
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }
})();

/* ==================================================
   ARTICLE
================================================== */


/* URLから記事IDを取得 */

const params =
  new URLSearchParams(
    window.location.search
  );


const articleId =
  params.get("id");


/* 記事を探す */

const post =
  blogPosts.find(
    post =>
      post.id === articleId
  );


/* ==================================================
   記事が見つからない場合
================================================== */

if (!post || (
  typeof isContentPublished === "function"
  && !isContentPublished(post)
)) {

  markArticleNotFound();

  document.querySelector(
    ".article"
  ).innerHTML = `

    <div class="article-header">

      <h1>
        記事が見つかりませんでした。
      </h1>

      <p>
        記事が削除されたか、
        URLが間違っている可能性があります。
      </p>

      <a href="blog.html">
        ← BLOG一覧へ戻る
      </a>

    </div>

  `;

}


/* ==================================================
   記事表示
================================================== */

else {


  /* ページタイトル */

  document.title =
    `${post.title} | すいとおん。`;


  /* 日付 */

  const articleDate =
    document.getElementById(
      "articleDate"
    );

  articleDate.textContent =
    post.date;

  articleDate.setAttribute(
    "datetime",
    post.datetime
  );


  /* カテゴリ */

  document.getElementById(
    "articleCategory"
  ).textContent =
    post.category;


  /* タイトル */

  document.getElementById(
    "articleTitle"
  ).textContent =
    post.title;


  /* リード */

  document.getElementById(
    "articleLead"
  ).textContent =
    post.lead;


  /* メイン画像 */

  const mainImage =
    document.getElementById(
      "articleMainImage"
    );

  mainImage.src =
    post.image;

  mainImage.alt =
    post.title;


  /* 本文 */

  document.getElementById(
    "articleBody"
  ).innerHTML =
    post.content;


  /* ==================================================
     PRODUCTS
  ================================================== */

  const productsArea =
    document.getElementById(
      "articleProducts"
    );


  if (
    post.products &&
    post.products.length > 0
  ) {

    productsArea.innerHTML = `

      <p class="article-products-label">
        ITEMS IN THIS STORY
      </p>

      <h2>
        この日の愛用品
      </h2>

    `;


    post.products.forEach(
      product => {


        const productCard =
          document.createElement(
            "div"
          );


        productCard.className =
          "article-product-card";


        productCard.innerHTML = `

          <div class="article-product-image">

            <img
              src="${product.image}"
              alt="${product.name}"
            >

          </div>


          <div class="article-product-info">

            <span>
              ${product.category}
            </span>


            <h3>
              ${product.name}
            </h3>


            <p>
              ${product.description}
            </p>


            <a
              href="${product.url}"
              target="_blank"
              rel="noopener noreferrer"
            >
              商品詳細を見る →
            </a>

          </div>

        `;


        productsArea.appendChild(
          productCard
        );

      }
    );

  }

  else {

    productsArea.style.display =
      "none";

  }

}
/* ==================================================
   PREVIOUS / NEXT ARTICLE
================================================== */

function setupArticleNavigation() {

  const previousArticle =
    document.getElementById(
      "previousArticle"
    );

  const nextArticle =
    document.getElementById(
      "nextArticle"
    );


  if (
    !previousArticle
    ||
    !nextArticle
  ) {
    return;
  }


  const params =
    new URLSearchParams(
      window.location.search
    );

  const currentId =
    params.get("id");


  /* 新しい記事 → 古い記事 の順 */

  const sortedPosts =
    [...blogPosts]
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
    sortedPosts.findIndex(
      post =>
        String(post.id)
        ===
        String(currentId)
    );


  if (currentIndex === -1) {
    return;
  }


  /*
    新しい順なので

    index - 1 = より新しい記事
    index + 1 = より古い記事
  */

  const newerPost =
    sortedPosts[
      currentIndex - 1
    ];

  const olderPost =
    sortedPosts[
      currentIndex + 1
    ];


  /* --------------------------------
     前の記事 = 古い記事
  -------------------------------- */

  if (olderPost) {

    previousArticle.innerHTML = `

      <a
        href="article.html?id=${olderPost.id}"
        class="article-navigation-link"
      >

        <span class="article-navigation-label">
          ← PREV
        </span>

        <span class="article-navigation-title">
          ${olderPost.title}
        </span>

      </a>

    `;

  }


  /* --------------------------------
     次の記事 = 新しい記事
  -------------------------------- */

  if (newerPost) {

    nextArticle.innerHTML = `

      <a
        href="article.html?id=${newerPost.id}"
        class="article-navigation-link"
      >

        <span class="article-navigation-label">
          NEXT →
        </span>

        <span class="article-navigation-title">
          ${newerPost.title}
        </span>

      </a>

    `;

  }

}


setupArticleNavigation();
if (post && (typeof isContentPublished !== "function" || isContentPublished(post))) {
  enhanceArticle(post, blogPosts, "article", "articleBody");
}