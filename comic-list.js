// One card per series. Episodes live on the series page.
document.addEventListener('DOMContentLoaded', () => {
 const container=document.getElementById('comicList'); if(!container)return;
 container.innerHTML=comicSeriesData.filter(s=>!s.comingSoon).map(s=>{
  const episodes=getComicsBySeriesId(s.id).filter(c=>!c.comingSoon); if(!episodes.length)return '';
  return `<a class="comic-list-card" href="comic-series.html?series=${s.id}"><div class="comic-list-image"><img src="${s.thumbnail||episodes[0].image}" alt="${s.name}" loading="lazy"></div><div class="comic-list-info"><span class="comic-list-small">SUI & ON STORIES</span><span class="comic-list-count">${episodes.length}話 公開中</span><h2>${s.name}</h2><p>${s.description}</p><strong>この編のお話を選ぶ →</strong></div></a>`;
 }).join('');
});
