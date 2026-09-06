/* ==================================================
   HOME BLOG
   最新3記事だけ表示
================================================== */


/* ==================================================
   NEW CHECK
================================================== */

function isNewBlogPost(datetime) {

  const postDate =
    new Date(`${datetime}T00:00:00`);

  const today =
    new Date();

  today.setHours(
    0,
    0,
    0,
    0
  );


  const difference =
    today - postDate;


  const days =
    difference
    /
    (
      1000
      * 60
      * 60
      * 24
    );


  return (
    days >= 0
    &&
    days <= 14
  );

}


/* ==================================================
   HOME BLOG LIST
================================================== */

const homeBlogList =
  document.getElementById("homeBlogList");


if (homeBlogList) {

  const latestPosts =
    [...blogPosts]

      /* =========================
         公開済み記事だけ表示
      ========================= */

      .filter(post =>
        typeof isContentPublished !== "function"
        || isContentPublished(post)
      )

      /* =========================
         新しい順
      ========================= */

      .sort(
        (a, b) =>
          new Date(b.datetime) -
          new Date(a.datetime)
      )

      /* =========================
         最新3記事
      ========================= */

      .slice(0, 3);


  latestPosts.forEach(post => {

    const article =
      document.createElement("article");


    article.className =
      "blog-card";


    /* NEW表示 */

    const newLabel =
      isNewBlogPost(post.datetime)

        ? `
          <span class="new-badge">
            NEW
          </span>
        `

        : "";


    article.innerHTML = `

      <a href="article.html?id=${post.id}">

        <div class="blog-image">

          <img
            src="${post.image}"
            alt="${post.title}"
          >

          ${newLabel}

        </div>


        <div class="blog-content">

          <div class="blog-meta">

            <span>
              ${post.date}
            </span>

            <span>
              ${post.category}
            </span>

          </div>


          <h3>
            ${post.title}
          </h3>


          <p>
            ${post.lead}
          </p>


          <span class="blog-link">
            READ MORE →
          </span>

        </div>

      </a>

    `;


    homeBlogList.appendChild(
      article
    );

  });

}
