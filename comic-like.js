/* Existing series IDs stay comic-{series}. Episode IDs use comic-episode-{id}. */
const COMIC_LIKE_API = 'https://suito-on-api.nnk0425suiiii.workers.dev';
const comicLikeRequests = new Map();
const comicLikedThisPage = new Set();
function hasLikedComicSeries(id) {
  if (comicLikedThisPage.has(id)) return true;
  try { return localStorage.getItem(`suito-on-liked-comic-${id}`) === 'true'; }
  catch { return false; }
}
async function getComicSeriesCount(id) {
  if (!comicLikeRequests.has(id)) {
    const request = fetch(`${COMIC_LIKE_API}/likes?content_id=${encodeURIComponent(`comic-${id}`)}`)
      .then(response => {
        if (!response.ok) throw new Error('いいね数を取得できませんでした');
        return response.json();
      }).then(data => {
        const count = Number(data.likes);
        if (!Number.isFinite(count) || count < 0) throw new Error('いいね数の形式が不正です');
        return count;
      }).catch(error => { comicLikeRequests.delete(id); throw error; });
    comicLikeRequests.set(id, request);
  }
  return comicLikeRequests.get(id);
}
async function loadComicSeriesCount(element, id) {
  if (!element) return;
  try { element.textContent = `♡ ${await getComicSeriesCount(id)}`; }
  catch { element.textContent = '♡ —'; element.title = 'いいね数を取得できませんでした'; }
}
async function initializeComicLike() {
  await Promise.all([...document.querySelectorAll('.comic-like-button')].map(async button => {
    if (button.dataset.initialized === 'true') return;
    const episode = button.dataset.episodeId ? getComicById(button.dataset.episodeId) : null;
    const id = episode ? `episode-${episode.id}` : button.dataset.seriesId;
    const series = episode ? null : getComicSeriesById(id);
    if (episode ? episode.comingSoon : !series) return;
    const likeTitle = episode ? `${episode.series} #${episode.number} ${episode.title}` : series.name;
    const likeUrl = episode ? episode.detailPage : `comic-series.html?series=${id}`;
    button.dataset.initialized = 'true';
    const heart = button.querySelector('.article-like-heart');
    const count = button.querySelector('.article-like-count');
    const status = document.createElement('p');
    status.className = 'comic-like-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    button.after(status);
    const setLiked = () => {
      const liked = hasLikedComicSeries(id);
      button.classList.toggle('liked', liked);
      button.setAttribute('aria-pressed', String(liked));
      if (heart) heart.textContent = liked ? '♥' : '♡';
    };
    setLiked();
    if (count) count.textContent = '…';
    window.addEventListener('storage', event => {
      if (event.key === `suito-on-liked-comic-${id}`) setLiked();
    });
    button.addEventListener('click', async () => {
      if (button.disabled || hasLikedComicSeries(id)) { setLiked(); return; }
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      status.textContent = '';
      try {
        const response = await fetch(`${COMIC_LIKE_API}/like`, {
          method: 'POST', headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({content_id: `comic-${id}`,content_type:'COMIC',title:likeTitle,url:likeUrl})
        });
        if (!response.ok) throw new Error('送信できませんでした');
        const result = await response.json();
        comicLikedThisPage.add(id);
        try { localStorage.setItem(`suito-on-liked-comic-${id}`, 'true'); } catch {}
        setLiked();
        const value = Number(result.likes);
        comicLikeRequests.delete(id);
        if (count) count.textContent = Number.isFinite(value) && value >= 0 ? String(value) : '—';
        status.textContent = '応援ありがとう！';
      } catch {
        status.textContent = '通信を確認できませんでした。ページを再読み込みしてご確認ください。';
      } finally { button.disabled = false; button.removeAttribute('aria-busy'); }
    });
    try { if (count) count.textContent = String(await getComicSeriesCount(id)); }
    catch { if (count) count.textContent = '—'; status.textContent = 'いいね数を取得できませんでした。'; }
  }));
}
