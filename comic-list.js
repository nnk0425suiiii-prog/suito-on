// One card per series. Episodes live on the series page.
document.addEventListener('DOMContentLoaded', () => {
 const container=document.getElementById('comicList'); if(!container)return;
 container.innerHTML=comicSeriesData.filter(s=>!s.comingSoon).map(s=>{
  const episodes=getComicsBySeriesId(s.id).filter(c=>!c.comingSoon);
  if(!episodes.length){
   // Announce the next series once its preceding series has finished.
   const previous=comicSeriesData.find(p=>p.nextSeriesName===s.name);
   if(!previous || !isComicSeriesComplete(previous.id))return '';
   const first=getComicsBySeriesId(s.id)[0];
   const date=first?.publishDate ? new Intl.DateTimeFormat('ja-JP',{timeZone:'Asia/Tokyo',month:'long',day:'numeric',hour:'numeric',minute:'2-digit',hour12:false}).format(new Date(first.publishDate)) : '';
   return `<div class="comic-list-card"><div class="comic-list-image">${s.thumbnail ? `<img src="${s.thumbnail}" alt="${s.name}" loading="lazy">` : ''}</div><div class="comic-list-info"><span class="comic-list-small">SUI & ON STORIES</span><span class="comic-list-count">Coming Soon</span><h2>${s.name}</h2><p>${s.description}</p><strong>${date ? `${date} 公開予定` : '公開準備中です'}</strong></div></div>`;
  }
  return `<a class="comic-list-card" href="comic-series.html?series=${s.id}"><div class="comic-list-image"><img src="${s.thumbnail||episodes[0].image}" alt="${s.name}" loading="lazy"></div><div class="comic-list-info"><span class="comic-list-small">SUI & ON STORIES</span><span class="comic-list-count">${episodes.length}話 公開中</span><h2>${s.name}</h2><p>${s.description}</p><strong>この編のお話を選ぶ →</strong></div></a>`;
 }).join('');
});

