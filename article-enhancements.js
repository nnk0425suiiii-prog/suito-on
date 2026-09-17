/* Shared article navigation and metadata; does not change editorial content. */
function setArticleMeta(key, content, property = false) {
  const attribute = property ? 'property' : 'name';
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function markArticleNotFound() {
  document.title = '記事が見つかりません | すいとおん。';
  setArticleMeta('robots', 'noindex, follow');
}

function enhanceArticle(post, posts, page, bodyId) {
  const body = document.getElementById(bodyId);
  if (!body) return;
  const description = String(post.lead || post.title).replace(/\s+/g, ' ').trim();
  // Production uses Cloudflare's extensionless page URLs. Strip tracking parameters.
  const canonicalUrl = `https://suito-on.com/${page}?id=${encodeURIComponent(post.id)}`;
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = canonicalUrl;
  setArticleMeta('description', description);
  for (const [key, value] of Object.entries({
    'og:type': 'article', 'og:site_name': 'すいとおん。', 'og:locale': 'ja_JP',
    'og:title': document.title, 'og:description': description, 'og:url': canonicalUrl,
    'og:image': new URL(post.image, 'https://suito-on.com/').href,
    'og:image:alt': post.title
  })) setArticleMeta(key, value, true);
  setArticleMeta('twitter:card', 'summary_large_image');

  const headings = [...body.querySelectorAll('h2')];
  if (headings.length >= 3) {
    const toc = document.createElement('details');
    toc.className = 'story-toc';
    const summary = document.createElement('summary');
    summary.textContent = 'この記事の目次';
    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'この記事の目次');
    const list = document.createElement('ol');
    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = `${bodyId}-section-${index + 1}`;
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent.trim();
      item.appendChild(link);
      list.appendChild(item);
    });
    nav.appendChild(list);
    toc.append(summary, nav);
    body.prepend(toc);
  }

  // Prefer the same category and never surface queued content before publication.
  const related = posts.filter(item => item.id !== post.id &&
    (typeof isContentPublished !== 'function' || isContentPublished(item)))
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category)
      || new Date(b.datetime) - new Date(a.datetime))
    .slice(0, 3);
  if (!related.length) return;
  const section = document.createElement('section');
  section.className = 'story-related';
  const title = document.createElement('h2');
  title.id = `${bodyId}-related-title`;
  title.textContent = 'もう少し、すいとおん。';
  section.setAttribute('aria-labelledby', title.id);
  const list = document.createElement('ul');
  for (const item of related) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = `${page}.html?id=${encodeURIComponent(item.id)}`;
    link.textContent = `${item.title} →`;
    li.appendChild(link);
    list.appendChild(li);
  }
  section.append(title, list);
  body.appendChild(section);
}
