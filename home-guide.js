/* ==================================================
   HOME GUIDE
   最新1記事だけ表示
================================================== */

const homeGuideList =
  document.getElementById(
    "homeGuideList"
  );


if (
  homeGuideList
  &&
  typeof guidePosts !== "undefined"
) {


  /* ==================================================
     NEW判定
  ================================================== */

  function isNewPost(datetime) {

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
     最新1件
  ================================================== */
const latestGuidePost =
  [...guidePosts]

    /* 未公開の記事はHOMEに出さない */
    .filter(post => {

      if (!post.datetime) {
        return false;
      }


      const publishDate =
        post.queue === true

          ? new Date(
              `${post.datetime}T10:00:00+09:00`
            )

          : new Date(
              `${post.datetime}T00:00:00+09:00`
            );


      return (
        publishDate <= new Date()
      );

    })

    /* 公開済みの中から最新 */
    .sort(
      (a, b) =>
        new Date(b.datetime)
        -
        new Date(a.datetime)
    )

    [0];


  /* ==================================================
     DISPLAY
  ================================================== */

  if (
    latestGuidePost
  ) {

    const post =
      latestGuidePost;


    const article =
      document.createElement(
        "article"
      );


    article.className =
      "home-guide-card";


    const newLabel =
      isNewPost(
        post.datetime
      )

        ? `
          <span class="new-badge">
            NEW
          </span>
        `

        : "";


    article.innerHTML = `

      <a
        href="guide-article.html?id=${post.id}"
      >

        <div class="home-guide-image">

          <img
            src="${post.image}"
            alt="${post.title}"
          >

          ${newLabel}

        </div>


        <div class="home-guide-meta">

          <time
            datetime="${post.datetime}"
          >
            ${post.date}
          </time>

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


        <span class="home-guide-link">
          READ MORE →
        </span>

      </a>

    `;


    homeGuideList.appendChild(
      article
    );

  }

}
