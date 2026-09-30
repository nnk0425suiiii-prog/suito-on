/* One common article page for every OUTING feature. */
(() => {
  const features = typeof outingFeatures !== 'undefined' ? outingFeatures : [];
  const places = typeof outingPlaces !== 'undefined' ? outingPlaces : [];
  const root = document.getElementById('outingArticle');
  const grid = document.querySelector('.outing-features');
  if (grid) grid.innerHTML = OutingRender.cards(features);
  if (!root) return;
  const id = new URLSearchParams(location.search).get('id');
  const f = features.find(f => f.id === id);
  if (root.dataset.renderedId !== id || !f) root.innerHTML = OutingRender.article(f,places,features);
  document.title = f ? `${f.title} | すいとおん。` : '記事が見つかりません | すいとおん。';
  function meta(attribute,key,value) {
    let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);
    if (!tag) { tag=document.createElement('meta');tag.setAttribute(attribute,key);document.head.appendChild(tag); }
    tag.content=value;
  }
  if (!f) { meta('name','robots','noindex, follow');return; }
  document.head.querySelector('meta[name="robots"]')?.remove();
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) { link=document.createElement('link');link.rel='canonical';document.head.appendChild(link); }
  link.href=OutingRender.canonical(id);
  meta('name','description',f.description);meta('name','twitter:card','summary_large_image');
  for (const [key,value] of Object.entries({'og:title':document.title,'og:description':f.description,'og:url':link.href,'og:type':'article','og:image':new URL(f.image,'https://suito-on.com/').href})) meta('property',key,value);
  if (location.hash) {
    let hash;try { hash=decodeURIComponent(location.hash.slice(1)); } catch {return;}
    requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView());
  }
})();
