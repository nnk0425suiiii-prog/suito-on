/* ==================================================
   HOME / INSTAGRAM LATEST POST
   Cloudflare Worker endpoint expected:
   GET https://suito-on-api.nnk0425suiiii.workers.dev/instagram/latest
   JSON: { media_url, permalink, caption }
================================================== */
(() => {
  const root = document.getElementById("homeInstagramLatest");
  const image = document.getElementById("homeInstagramImage");
  const caption = document.getElementById("homeInstagramCaption");
  const link = document.getElementById("homeInstagramLink");
  const view = document.getElementById("homeInstagramView");
  if (!root || !image || !caption || !link || !view) return;

  const endpoint = "https://suito-on-api.nnk0425suiiii.workers.dev/instagram/latest";

  fetch(endpoint, { headers: { Accept: "application/json" } })
    .then((res) => {
      if (!res.ok) throw new Error(`Instagram API: ${res.status}`);
      return res.json();
    })
    .then((post) => {
      if (!post || !post.media_url || !post.permalink) return;
      image.src = post.media_url;
      link.href = post.permalink;
      view.href = post.permalink;
      if (post.caption) {
        const clean = String(post.caption).replace(/\s+/g, " ").trim();
        caption.textContent = clean.length > 90 ? `${clean.slice(0, 90)}…` : clean;
      }
      root.classList.add("is-live");
    })
    .catch(() => {
      // Until the Worker endpoint is connected to Instagram,
      // keep the local fallback card and profile link visible.
    });
})();
