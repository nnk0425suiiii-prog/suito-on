/* ==================================================
   BLOG LIST
================================================== */

const blogList =
  document.getElementById("blogList");

const filters =
  document.querySelectorAll(".blog-filter");


/* ==================================================
   NEW判定
   公開から14日間
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
    difference /
    (
      1000 *
      60 *
      60 *
      24
    );


  return (
    days >= 0
    &&
    days <= 14
  );

}



/* ==================================================
   DISPLAY BLOG
================================================== */

function displayBlogPosts(
  category = "all"
) {

  if (!blogList) {
    return;
  }


  blogList.innerHTML = "";


  /* 新しい順 */

  const sortedPosts =
    [...blogPosts]
      .filter(post =>
        typeof isContentPublished !== "function"
        || isContentPublished(post)
      )
      .sort(
      (a, b) =>
        new Date(b.datetime)
        -
        new Date(a.datetime)
    );


  /* CATEGORY */

  const filteredPosts =
    sortedPosts.filter(
      post =>
        category === "all"
        ||
        post.categoryId === category
    );


  if (
    filteredPosts.length === 0
  ) {

    blogList.innerHTML = `

      <p class="no-blog-post">
        まだ記事がありません。
      </p>

    `;

    return;

  }



  /* ==================================================
     FEATURED
     一番新しい記事
  ================================================== */

  const featuredPost =
    filteredPosts[0];


  const featured =
    document.createElement(
      "article"
    );


  featured.className =
    "blog-ref-featured";


  const featuredNew =
    isNewBlogPost(
      featuredPost.datetime
    )
      ? `
        <span class="blog-ref-new">
          new!
        </span>
      `
      : "";


  featured.innerHTML = `

    <a
      href="article.html?id=${featuredPost.id}"
      class="blog-ref-featured-link"
    >

      <div class="blog-ref-featured-image">

        <span
          class="blog-ref-tape"
          aria-hidden="true"
        ></span>

        <img
          src="${featuredPost.image}"
          alt="${featuredPost.title}"
        >

      </div>


      <div class="blog-ref-featured-content">

        ${featuredNew}


        <div class="blog-ref-featured-meta">

          <time
            datetime="${featuredPost.datetime}"
          >
            ${featuredPost.date}
          </time>

          <span>
            ${featuredPost.category}
          </span>

        </div>


        <h2>
          ${featuredPost.title}
        </h2>


        <p>
          ${featuredPost.lead}
        </p>


        <span class="blog-ref-read-more">
          続きを読む
          <span>→</span>
        </span>

      </div>

    </a>

  `;


  blogList.appendChild(
    featured
  );



  /* ==================================================
     ARCHIVE
  ================================================== */

  const remainingPosts =
    filteredPosts.slice(1);


  if (
    remainingPosts.length === 0
  ) {
    return;
  }


  const archive =
    document.createElement(
      "div"
    );


  archive.className =
    "blog-ref-archive";


  remainingPosts.forEach(
    post => {


      const article =
        document.createElement(
          "article"
        );


      article.className =
        "blog-ref-row";


      const newLabel =
        isNewBlogPost(
          post.datetime
        )
          ? `
            <span class="blog-ref-row-new">
              NEW
            </span>
          `
          : "";


      article.innerHTML = `

        <a
          href="article.html?id=${post.id}"
          class="blog-ref-row-link"
        >

          <div class="blog-ref-row-image">

            <img
              src="${post.image}"
              alt="${post.title}"
            >

          </div>


          <div class="blog-ref-row-content">

            <div class="blog-ref-row-meta">

              <time
                datetime="${post.datetime}"
              >
                ${post.date}
              </time>

              <span>
                ${post.category}
              </span>

              ${newLabel}

            </div>


            <h2>
              ${post.title}
            </h2>

          </div>


          <span
            class="blog-ref-row-arrow"
            aria-hidden="true"
          >
            →
          </span>

        </a>

      `;


      archive.appendChild(
        article
      );

    }
  );


  blogList.appendChild(
    archive
  );

}



/* ==================================================
   CATEGORY FILTER
================================================== */

filters.forEach(
  filter => {


    filter.addEventListener(
      "click",
      () => {


        filters.forEach(
          button => {

            button.classList.remove(
              "active"
            );

          }
        );


        filter.classList.add(
          "active"
        );


        displayBlogPosts(
          filter.dataset.category
        );

      }
    );

  }
);



/* ==================================================
   INITIAL DISPLAY
================================================== */

displayBlogPosts();