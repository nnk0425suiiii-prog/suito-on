/* ==================================================
   HOME / INSTAGRAM LATEST POST
================================================== */

(() => {

  const root =
    document.getElementById("homeInstagramLatest");

  const image =
    document.getElementById("homeInstagramImage");

  const caption =
    document.getElementById("homeInstagramCaption");

  const link =
    document.getElementById("homeInstagramLink");

  const view =
    document.getElementById("homeInstagramView");


  if (
    !root ||
    !image ||
    !caption ||
    !link ||
    !view
  ) {
    return;
  }


  const endpoint =
    "https://suito-on-api.nnk0425suiiii.workers.dev/instagram/latest";


  fetch(endpoint, {
    headers: {
      Accept: "application/json"
    },
    cache: "no-store"
  })

    .then((res) => {

      if (!res.ok) {
        throw new Error(
          `Instagram API: ${res.status}`
        );
      }

      return res.json();

    })

    .then((post) => {

      if (
        !post ||
        !post.imageUrl ||
        !post.permalink
      ) {
        return;
      }


      /* 最新投稿画像 */

      image.src =
        post.imageUrl;


      /* Instagram投稿リンク */

      link.href =
        post.permalink;

      view.href =
        post.permalink;


      /* キャプション */

      if (post.caption) {

        const clean =
          String(post.caption)
            .replace(/\s+/g, " ")
            .trim();


        caption.textContent =
          clean.length > 90
            ? `${clean.slice(0, 90)}…`
            : clean;

      }


      root.classList.add(
        "is-live"
      );

    })

    .catch((error) => {

      console.error(
        "Instagram latest post error:",
        error
      );

    });

})();
