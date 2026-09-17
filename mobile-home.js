/* Mobile editorial home. The existing desktop home remains the source of truth. */
(() => {
  const main = document.querySelector('.home-page main');
  if (!main || typeof blogPosts === 'undefined') return;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const published = p => !p.comingSoon && (typeof isContentPublished !== 'function' || isContentPublished(p));
  const latest = posts => posts.filter(published).slice().sort((a,b) => String(b.datetime || '').localeCompare(String(a.datetime || '')));
  const paths = {
    BLOG:'M7 3h7l4 4v14H7z M14 3v5h4 M10 12h5 M10 16h5',
    GUIDE:'M12 5Q6 2 2 5v15q5-3 10 0q5-3 10 0V5q-5-3-10 0v15',
    ITEMS:'M5 8h14l1 13H4z M9 9V6a3 3 0 0 1 6 0v3',
    EVENT:'M4 6h16v15H4z M8 3v6 M16 3v6 M4 11h16 M8 15h2 M14 15h2',
    COMIC:'M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18 M8 9h1 M15 9h1 M8 14q4 5 8 0',
    ABOUT:'M12 11c-3 0-7 6-5 9s4 0 5 0s4 3 5 0s-2-9-5-9 M5 5v3 M10 3v3 M15 3v3 M20 5v3'
  };
  const icon = label => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${paths[label]}"/></svg>`;
  const img = (src, alt='', priority=false) => `<img src="${esc(src)}" alt="${esc(alt)}" ${priority?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;
  const heading = (number,label,caption,url) => `<header class="mh-heading"><h2><b>${number}</b><span>${label}</span></h2><a href="${url}">${caption} <span aria-hidden="true">↗</span></a></header>`;
  const card = (p,route) => `<a class="mh-card" href="${route}.html?id=${encodeURIComponent(p.id)}">${img(p.image)}<span>${esc(p.title)}</span></a>`;
  const blogs = latest(blogPosts).slice(0,3);
  const guides = latest(guidePosts).slice(0,3);
  const today = new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo'}).format(new Date());
  const upcoming = calendarEvents.filter(e => !['cancelled','postponed'].includes(e.status) && (e.endDate || e.startDate) >= today).slice().sort((a,b)=>a.startDate.localeCompare(b.startDate))[0];
  const series = comicSeriesData.find(s => !s.comingSoon && comicData.some(c=>c.series===s.name && published(c)));
  const heroPhotos = [
    ['portrait','並んでこちらを見上げるすいとおん','50% 35%'],
    ['striped-shirts','お揃いのボーダー服を着たすいとおん','50% 30%'],
    ['forest-walk','お散歩中のすいとおん','50% 45%'],
    ['snuggle','くっついて眠るすいとおん','50% 50%'],
    ['grass-play','芝生で過ごすすいとおん','50% 32%']
  ];
  const shell = document.createElement('div');
  shell.className = 'mobile-home';
  shell.innerHTML = `
    <section class="mh-hero" aria-label="すいとおんの日常">
      <div class="mh-editorial-title" aria-hidden="true">Little days,<br><span>big love.</span></div><span class="mh-flower" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" focusable="false" style="display:block;width:1em;height:1em;overflow:visible"><path d="M50 5V95M5 50H95M18 18L82 82M18 82L82 18" fill="none" stroke="currentColor" stroke-width="5"/></svg></span><span class="mh-side-note" aria-hidden="true">THE SUI &amp; ON JOURNAL</span>
      <p class="mh-motto">犬との毎日を、<br>もっと楽しく。</p>
      <div class="mh-photo" aria-roledescription="スライドショー" aria-label="すいとおんの写真">${heroPhotos.map(([id,alt,position],i)=>`<img class="mh-slide ${i===0?'is-active':''}" src="images/home/sui-on-home-${id}.jpeg" alt="${esc(alt)}" style="object-position:${position}" aria-hidden="${i!==0}" ${i===0?'fetchpriority="high"':'loading="lazy"'} decoding="async">`).join('')}</div>
      <div class="mh-photo-controls"><button type="button" class="mh-photo-prev" aria-label="前の写真">‹</button><span class="mh-photo-count">1 / 5</span><button type="button" class="mh-photo-next" aria-label="次の写真">›</button><button type="button" class="mh-photo-pause" aria-label="写真の自動切替を停止">Ⅱ</button></div>
      <p class="mh-note">SUI & ON.<br><span>A brighter day<br>with dogs.</span></p>
      <h1>ふたりと見つける、<br>しあわせな日々。</h1>
    </section>
    <nav class="mh-nav" aria-label="カテゴリー">${Object.keys(paths).map(label=>`<a href="${label==='ABOUT'?'#mh-about':label.toLowerCase()+'.html'}">${icon(label)}<span>${label}</span></a>`).join('')}</nav>
    <section class="mh-section" aria-label="人気の記事"><header class="mh-heading"><h2><b>01</b><span>POPULAR</span></h2><span class="mh-caption">いいねの多い記事</span></header><div class="mh-popular" aria-live="polite"><p class="mh-empty">ランキングを読み込み中…</p></div></section>
    <section class="mh-section">${heading('02','BLOG','すべての記事','blog.html')}<div class="mh-blog">${blogs.map(p=>card(p,'article')).join('')}</div></section>
    <section class="mh-section">${heading('03','GUIDE','暮らしのヒント','guide.html')}<div class="mh-guides">${guides.map(p=>card(p,'guide-article')).join('')}</div></section>
    <section class="mh-row"><h2>${icon('EVENT')}<span>EVENT</span></h2>${upcoming?`<a class="mh-event" href="event-detail.html?id=${encodeURIComponent(upcoming.id)}">${upcoming.image?img(upcoming.image):''}<span><strong>${esc(upcoming.title)}</strong><small>${esc(upcoming.startDate.replaceAll('-','.'))} · ${esc(upcoming.prefecture || '')}</small></span><b aria-hidden="true">›</b></a>`:'<a href="event.html">イベントカレンダーを見る →</a>'}</section>
    <section class="mh-row"><h2>${icon('ITEMS')}<span>ITEMS</span></h2><div class="mh-items">${allItems.slice(0,3).map(item=>`<a href="${esc(item.blogUrl || 'items.html')}" aria-label="${esc(item.name)}">${img(item.image)}<span>${esc(item.name)}</span></a>`).join('')}<a class="mh-more" href="items.html" aria-label="すべてのアイテム">→</a></div></section>
    <section class="mh-row"><h2>${icon('COMIC')}<span>COMIC</span></h2><a class="mh-comic" href="${series?'comic-series.html?series='+encodeURIComponent(series.id):'comic.html'}">${series?img(series.thumbnail):''}<span>すいとおん。の4コマ<small>${esc(series?.name || 'シリーズ一覧')} →</small></span></a></section>
    <section class="mh-row mh-about" id="mh-about"><h2>${icon('ABOUT')}<span>ABOUT</span></h2><div>${img('blog/images/suion-01.png')}<h3>すいとおん。について</h3><p>ふたりとの何気ない毎日や、犬との暮らしで見つけた小さな幸せを綴っています。</p><a href="article.html?id=introduce-sui">すいの紹介 →</a><a href="article.html?id=introduce-on">おんの紹介 →</a></div></section>
    <a class="mh-instagram" href="https://www.instagram.com/whiteee_blkdogcats/" target="_blank" rel="noopener noreferrer"><strong>Instagram ↗</strong><span>ふたりの日常をのぞきにきてね</span></a>`;
  main.appendChild(shell);
  document.body.classList.add('mobile-home-ready');
  const slides = [...shell.querySelectorAll('.mh-slide')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const mobileView = matchMedia('(min-width: 0px)');
  let slideIndex=0, paused=reducedMotion.matches, timer;
  const pauseButton=shell.querySelector('.mh-photo-pause');
  const showSlide = index => {
    slideIndex=(index+slides.length)%slides.length;
    slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===slideIndex);slide.setAttribute('aria-hidden',String(i!==slideIndex));});
    shell.querySelector('.mh-photo-count').textContent=`${slideIndex+1} / ${slides.length}`;
  };
  const schedule = () => {
    clearInterval(timer);
    pauseButton.textContent=paused?'▷':'Ⅱ';
    pauseButton.setAttribute('aria-label',paused?'写真の自動切替を再開':'写真の自動切替を停止');
    if(!paused && !document.hidden && mobileView.matches) timer=setInterval(()=>showSlide(slideIndex+1),6500);
  };
  shell.querySelector('.mh-photo-prev').addEventListener('click',()=>{showSlide(slideIndex-1);paused=true;schedule();});
  shell.querySelector('.mh-photo-next').addEventListener('click',()=>{showSlide(slideIndex+1);paused=true;schedule();});
  pauseButton.addEventListener('click',()=>{paused=!paused;schedule();});
  document.addEventListener('visibilitychange',schedule);
  mobileView.addEventListener('change',schedule);
  reducedMotion.addEventListener('change',()=>{paused=reducedMotion.matches;schedule();});
  schedule();
  const ranking = document.getElementById('homeRankingList');
  const renderRanking = () => {
    const target = shell.querySelector('.mh-popular');
    const cards = [...ranking.querySelectorAll('.home-ranking-item')].slice(0,3);
    if (cards.length) target.innerHTML = cards.map((a,i)=>`<a class="mh-card" href="${esc(a.getAttribute('href'))}"><div class="mh-ranked-image">${a.querySelector('img')?img(a.querySelector('img').getAttribute('src')):'<span class="mh-no-image">SUI & ON.</span>'}<b>${i+1}</b></div><span>${esc(a.querySelector('.home-ranking-title')?.textContent.trim())}</span></a>`).join('');
    else if (ranking.querySelector('.home-ranking-empty')) target.innerHTML='<p class="mh-empty">ランキングは準備中です。<a href="blog.html">ブログを読む →</a></p>';
  };
  if (ranking) { renderRanking(); new MutationObserver(renderRanking).observe(ranking,{childList:true,subtree:true}); }
  // Existing bookmarks and the shared header keep working on either layout.
  const followHash = () => {
    const hash = location.hash;
    if (hash === '#home') window.scrollTo({top:0,behavior:'smooth'});
    else {
      const targets = { '#about': '.mh-about', '#ranking': '.mh-section', '#blog': '.mh-blog', '#guide': '.mh-guides', '#items': '.mh-items', '#event': '.mh-event', '#comic': '.mh-comic' };
      if (targets[hash]) shell.querySelector(targets[hash])?.scrollIntoView({block:'start'});
    }
  };
  window.addEventListener('hashchange',followHash);
  followHash();
})();
