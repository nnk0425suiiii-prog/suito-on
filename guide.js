/* ==================================================
   GUIDE LIST
================================================== */

const guideList =
  document.getElementById("guideList");


if (guideList) {


  /* ==================================================
     DATE SORT
  ================================================== */

  const sortedGuidePosts =
    [...guidePosts]
      .filter(post =>
        typeof isContentPublished !== "function"
        || isContentPublished(post)
      )
      .sort(
      (a, b) =>
        new Date(b.datetime) -
        new Date(a.datetime)
    );



  /* ==================================================
     NEW
     14日以内
  ================================================== */

  function isNewGuidePost(post) {

    const today =
      new Date();

    const postDate =
      new Date(post.datetime);

    const diffTime =
      today - postDate;

    const diffDays =
      diffTime /
      (1000 * 60 * 60 * 24);


    return (
      diffDays >= 0 &&
      diffDays <= 14
    );

  }



  /* ==================================================
     DISPLAY
  ================================================== */

  function displayGuidePosts(
    category = "all"
  ) {

    guideList.innerHTML = "";


    const filteredPosts =
      sortedGuidePosts.filter(
        post => {

          return (
            category === "all"
            ||
            post.categoryId === category
          );

        }
      );


    /* NOTHING */

    if (
      filteredPosts.length === 0
    ) {

      guideList.innerHTML = `

        <p class="guide-ref-empty">
          このカテゴリーのガイドは
          まだありません。
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


    const featuredArticle =
      document.createElement(
        "article"
      );


    featuredArticle.className =
      "guide-ref-featured";


    featuredArticle.innerHTML = `

      <a
        href="guide-article.html?id=${featuredPost.id}"
        class="guide-ref-featured-link"
      >


        <div class="guide-ref-featured-photo">

          <div class="guide-ref-photo-paper">

            <span
              class="guide-ref-tape"
              aria-hidden="true"
            ></span>

            <img
              src="${featuredPost.image}"
              alt="${featuredPost.title}"
            >

          </div>

        </div>



        <div class="guide-ref-featured-content">


          ${
            isNewGuidePost(featuredPost)
              ? `
                <span class="guide-ref-new">
                  new!
                </span>
              `
              : `
                <span class="guide-ref-pickup">
                  PICK UP
                </span>
              `
          }


          <div class="guide-ref-featured-meta">

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


          <span class="guide-ref-read">
            このガイドを読む
            <b>→</b>
          </span>


        </div>

      </a>

    `;


    guideList.appendChild(
      featuredArticle
    );



    /* ==================================================
       ARCHIVE
    ================================================== */

    const archivePosts =
      filteredPosts.slice(1);


    if (
      archivePosts.length > 0
    ) {


      const archiveWrap =
        document.createElement(
          "div"
        );


      archiveWrap.className =
        "guide-ref-archive-wrap";


      archivePosts.forEach(
        (post, index) => {


          const article =
            document.createElement(
              "article"
            );


          article.className =
            "guide-ref-card";


          const guideNumber =
            String(index + 1)
              .padStart(2, "0");


          article.innerHTML = `

            <a
              href="guide-article.html?id=${post.id}"
            >


              <div class="guide-ref-card-number">

                <span>
                  GUIDE
                </span>

                ${guideNumber}

              </div>



              <div class="guide-ref-card-image">

                <img
                  src="${post.image}"
                  alt="${post.title}"
                >

              </div>



              <div class="guide-ref-card-content">


                <div class="guide-ref-card-meta">

                  <time
                    datetime="${post.datetime}"
                  >
                    ${post.date}
                  </time>

                  <span>
                    ${post.category}
                  </span>

                </div>


                <h2>
                  ${post.title}
                </h2>


                <p>
                  ${post.lead}
                </p>


              </div>



              <span class="guide-ref-card-arrow">
                →
              </span>


            </a>

          `;


          archiveWrap.appendChild(
            article
          );

        }
      );


      guideList.appendChild(
        archiveWrap
      );

    }

  }



  /* ==================================================
     URL CATEGORY
  ================================================== */

  const params =
    new URLSearchParams(
      window.location.search
    );


  const urlCategory =
    params.get("category")
    ||
    "all";



  /* ==================================================
     FILTER BUTTON
  ================================================== */

  const filters =
    document.querySelectorAll(
      ".guide-filter"
    );


  filters.forEach(filter => {


    if (
      filter.dataset.category ===
      urlCategory
    ) {

      filters.forEach(button =>
        button.classList.remove(
          "active"
        )
      );


      filter.classList.add(
        "active"
      );

    }



    filter.addEventListener(
      "click",
      () => {


        filters.forEach(button =>
          button.classList.remove(
            "active"
          )
        );


        filter.classList.add(
          "active"
        );


        const category =
          filter.dataset.category;


        displayGuidePosts(
          category
        );


        if (
          category === "all"
        ) {

          history.replaceState(
            null,
            "",
            "guide.html"
          );

        } else {

          history.replaceState(
            null,
            "",
            `guide.html?category=${category}`
          );

        }

      }
    );

  });



  /* ==================================================
     FIRST DISPLAY
  ================================================== */

  displayGuidePosts(
    urlCategory
  );

}