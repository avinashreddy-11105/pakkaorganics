/* Pakka Organics — shared behaviour. Loads after config.js. */

(function () {
  'use strict';

  const page = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
  const section = page.startsWith('blog') ? 'blog' : page;

  const ICON = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.75-.87-2-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.16-.17.2-.34.22-.63.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.5h-.57c-.2 0-.52.08-.8.37-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.3 1.28.5 1.72.63.72.23 1.38.2 1.9.12.58-.08 1.75-.72 2-1.4.25-.7.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.5A9.9 9.9 0 0012 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.2 1 1-3.2-.2-.3A8 8 0 1120 12c0 4.4-3.6 8-8 8z"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 10v4h3l5 4V6L7 10H4Z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg>'
  };

  // Placeholder drawings shown until a product photo is added in config.js
  const GLYPH = {
    incense: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M26 70 46 26M38 70 52 30M50 70 58 36"/><path d="M46 20c-4-4 4-7 0-12M53 24c-3-4 4-6 1-11"/><path d="M18 72h44"/></svg>',
    dhoop: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M30 66 40 30l10 36Z"/><path d="M40 24c-4-4 4-7 0-13"/><path d="M20 68h40"/></svg>',
    bath: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="24" y="30" width="32" height="38" rx="6"/><path d="M28 30v-8h24v8M24 44h32"/><path d="M34 55h12"/></svg>',
    puja: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 46c4 14 14 20 24 20s20-6 24-20Z"/><path d="M40 40c-6-6-2-12 0-18 2 6 6 12 0 18Z"/></svg>',
    colours: '<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 44h24c0 8-5 13-12 13s-12-5-12-13ZM44 44h24c0 8-5 13-12 13s-12-5-12-13Z"/><path d="M16 44c2-7 14-7 16 0M48 44c2-7 14-7 16 0"/><path d="M28 62h24"/></svg>'
  };

  const waGeneral = whatsappUrl('Hello Pakka Organics, I have a question.');

  /* ---------- header and footer ---------- */
  const NAV = [
    ['index', 'Home', 'index.html'],
    ['story', 'Story & Impact', 'story.html'],
    ['products', 'Products', 'products.html'],
    ['media', 'Media', 'media.html'],
    ['blog', 'Blog', 'blog.html'],
    ['contact', 'Contact', 'contact.html']
  ];

  const headerEl = document.getElementById('header');
  if (headerEl) {
    headerEl.innerHTML = `
      <header class="header">
        <div class="wrap header-inner">
          <a class="logo" href="index.html" aria-label="Pakka Organics home">
            <img src="images/logo.png" alt="Pakka Organics" width="58" height="58">
          </a>
          <nav class="nav" id="site-nav" aria-label="Main">
            ${NAV.map(([id, label, href]) => `<a href="${href}"${id === section ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
          </nav>
          <div class="header-actions">
            <a class="cart-link" href="cart.html" aria-label="Cart">${ICON.cart}<span class="cart-badge" aria-hidden="true"></span></a>
            <button class="menu-btn" type="button" aria-label="Menu" aria-expanded="false" aria-controls="site-nav"><span class="bars" aria-hidden="true"><span></span><span></span><span></span></span></button>
          </div>
        </div>
      </header>`;
    const btn = headerEl.querySelector('.menu-btn');
    const nav = headerEl.querySelector('.nav');
    const setMenu = open => {
      nav.classList.toggle('open', open);
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    };
    btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    document.addEventListener('click', e => { if (!headerEl.contains(e.target)) setMenu(false); });
  }

  const footerEl = document.getElementById('footer');
  if (footerEl) {
    const b = CONFIG.brand;
    footerEl.innerHTML = `
      <footer class="footer">
        <div class="wrap">
          <div class="footer-grid">
            <div class="footer-brand">
              <img src="images/logo-white.png" alt="Pakka Organics" width="84" height="84" loading="lazy">
              <p class="footer-tag">${esc(b.tagline)}</p>
              <p>Flowers collected from religious ceremonies and Ganesh visarjan, made into incense, dhoop and puja products in Hyderabad.</p>
            </div>
            <div>
              <h2>Shop</h2>
              <ul>
                <li><a href="products.html">All products</a></li>
                ${CONFIG.categories.map(c => `<li><a href="products.html#${c.id}">${esc(c.name)}</a></li>`).join('')}
              </ul>
            </div>
            <div>
              <h2>About</h2>
              <ul>
                <li><a href="story.html">Our story</a></li>
                <li><a href="story.html#impact">Our impact</a></li>
                <li><a href="media.html">Media</a></li>
                <li><a href="blog.html">Blog</a></li>
              </ul>
            </div>
            <div>
              <h2>Contact</h2>
              <ul>
                <li><a href="${waGeneral}" target="_blank" rel="noopener">WhatsApp ${esc(b.phoneDisplay)}</a></li>
                ${b.email ? `<li><a href="mailto:${esc(b.email)}">${esc(b.email)}</a></li>` : ''}
                ${b.instagram ? `<li><a href="${esc(b.instagram)}" target="_blank" rel="noopener">Instagram</a></li>` : ''}
                ${b.youtube ? `<li><a href="${esc(b.youtube)}" target="_blank" rel="noopener">YouTube</a></li>` : ''}
                <li><a href="contact.html">Contact page</a></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© ${new Date().getFullYear()} ${esc(b.name)}</span>
            ${b.legal ? `<span>${esc(b.legal)}</span>` : ''}
            <span>${esc(b.city)}</span>
          </div>
        </div>
      </footer>
      <a class="wa-float" href="${waGeneral}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">${ICON.wa}</a>`;
  }

  /* ---------- anything marked data-wa becomes a WhatsApp link ---------- */
  document.querySelectorAll('[data-wa]').forEach(a => {
    a.href = whatsappUrl(a.dataset.wa || 'Hello Pakka Organics, I have a question.');
    a.target = '_blank'; a.rel = 'noopener';
  });
  document.querySelectorAll('[data-impact]').forEach(el => { el.textContent = CONFIG.impact.tonnes; el.dataset.count = CONFIG.impact.tonnes; });

  /* ---------- cart badge and toast ---------- */
  function refreshBadge() {
    const badge = document.querySelector('.cart-badge');
    if (!badge) return;
    const n = Cart.count();
    if (badge.textContent !== String(n) && badge.textContent !== '') { badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump'); }
    badge.textContent = n;
    badge.classList.toggle('on', n > 0);
    const link = badge.closest('a');
    if (link) link.setAttribute('aria-label', n ? `Cart, ${n} item${n === 1 ? '' : 's'}` : 'Cart');
  }
  Cart.onChange(refreshBadge);
  refreshBadge();

  let toastEl, toastTimer;
  function toast(html) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      document.body.appendChild(toastEl);
    }
    toastEl.innerHTML = html;
    requestAnimationFrame(() => toastEl.classList.add('on'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('on'), 3200);
  }

  /* ---------- products ---------- */
  function media(p) {
    return p.image
      ? `<img src="${esc(p.image)}" alt="${esc(productLabel(p))}" loading="lazy" width="600" height="600">`
      : `<div class="ph ph--${p.category}">${GLYPH[p.category] || ''}<span>Photo coming soon</span></div>`;
  }
  window.productMedia = media;

  function card(p) {
    const cat = CONFIG.categories.find(c => c.id === p.category);
    const foot = p.price === null
      ? `<span class="product-price product-price--moq">Price on enquiry</span>
         <a class="add-btn" href="${whatsappEnquiry(p)}" target="_blank" rel="noopener">Enquire</a>`
      : `<span class="product-price">${money(p.price)}</span>
         <button class="add-btn" type="button" data-add="${p.id}" aria-label="Add ${esc(productLabel(p))} to cart">Add to cart</button>`;
    return `
      <article class="product-card" data-category="${p.category}">
        <div class="product-media">${media(p)}</div>
        <p class="product-cat">${esc(cat ? cat.name : '')}</p>
        <h3 class="product-name">${esc(p.name)}</h3>
        <p class="product-pack">${esc(p.pack)}</p>
        <div class="product-foot">${foot}</div>
      </article>`;
  }

  document.querySelectorAll('[data-products]').forEach(grid => {
    const list = grid.dataset.products === 'featured' ? CONFIG.products.filter(p => p.featured) : CONFIG.products;
    grid.innerHTML = list.map(card).join('');
  });

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-add]');
    if (!btn) return;
    const p = productById(btn.dataset.add);
    if (!p) return;
    Cart.add(p.id, 1);
    btn.classList.add('added');
    btn.textContent = 'Added';
    setTimeout(() => { btn.classList.remove('added'); btn.textContent = 'Add to cart'; }, 1400);
    toast(`${esc(productLabel(p))} added to cart <a href="cart.html">View cart</a>`);
  });

  // Category filter on the Products page
  const filters = document.querySelector('[data-filters]');
  const fullGrid = document.querySelector('[data-products="all"]');
  if (filters && fullGrid) {
    const cats = [{ id: 'all', name: 'All products' }].concat(CONFIG.categories);
    filters.innerHTML = cats.map(c => `<button class="chip" type="button" data-filter="${c.id}" aria-pressed="false">${esc(c.name)}</button>`).join('');
    const apply = id => {
      const valid = cats.some(c => c.id === id) ? id : 'all';
      filters.querySelectorAll('.chip').forEach(ch => ch.setAttribute('aria-pressed', String(ch.dataset.filter === valid)));
      let shown = 0;
      fullGrid.querySelectorAll('.product-card').forEach(c => {
        c.hidden = valid !== 'all' && c.dataset.category !== valid;
        c.classList.remove('pop');
        if (!c.hidden) { c.style.setProperty('--d', Math.min(shown++, 8) * 45 + 'ms'); void c.offsetWidth; c.classList.add('pop', 'in'); }
      });
    };
    filters.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      apply(chip.dataset.filter);
      history.replaceState(null, '', chip.dataset.filter === 'all' ? location.pathname : '#' + chip.dataset.filter);
    });
    window.addEventListener('hashchange', () => apply(location.hash.slice(1)));
    apply(location.hash.slice(1));

    // Product data for search engines
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'ItemList',
      itemListElement: CONFIG.products.filter(p => p.price !== null).map((p, i) => ({
        '@type': 'ListItem', position: i + 1,
        item: { '@type': 'Product', name: productLabel(p), brand: { '@type': 'Brand', name: CONFIG.brand.name },
          offers: { '@type': 'Offer', priceCurrency: 'INR', price: p.price } }
      }))
    });
    document.head.appendChild(ld);
  }

  /* ---------- cart page ---------- */
  const cartRoot = document.querySelector('[data-cart]');
  if (cartRoot) {
    const render = () => {
      const items = Cart.get();
      if (!items.length) {
        cartRoot.innerHTML = `
          <div class="empty">
            <h2>Your cart is empty</h2>
            <p class="muted">Add incense, dhoop or puja products and send the order to us on WhatsApp.</p>
            <a class="btn btn--primary" href="products.html">Shop products</a>
          </div>`;
        return;
      }
      cartRoot.innerHTML = `
        <div class="cart-grid">
          <div>
            ${items.map(i => {
              const p = productById(i.id);
              return `
              <div class="cart-item" data-id="${p.id}">
                <div class="cart-thumb">${media(p)}</div>
                <div>
                  <h3>${esc(p.name)}</h3>
                  <p class="unit">${esc(p.pack)}, ${money(p.price)} each</p>
                  <div class="cart-controls">
                    <div class="qty">
                      <button type="button" data-act="dec" aria-label="One fewer ${esc(productLabel(p))}">−</button>
                      <output aria-label="Quantity">${i.qty}</output>
                      <button type="button" data-act="inc" aria-label="One more ${esc(productLabel(p))}">+</button>
                    </div>
                    <button class="link-btn" type="button" data-act="remove">Remove</button>
                  </div>
                </div>
                <div class="line-total">${money(p.price * i.qty)}</div>
              </div>`;
            }).join('')}
          </div>
          <aside class="summary" aria-label="Order summary">
            <h2>Order summary</h2>
            <div class="summary-row"><span>Items (${Cart.count()})</span><span>${money(Cart.total())}</span></div>
            <div class="summary-row"><span>Shipping</span><span>Confirmed on WhatsApp</span></div>
            <div class="summary-row total"><span>Total before shipping</span><span>${money(Cart.total())}</span></div>
            <a class="btn btn--wa btn--block" href="${whatsappCartOrder()}" target="_blank" rel="noopener">${ICON.wa} Send order on WhatsApp</a>
            <a class="btn btn--outline btn--block" href="products.html">Add more products</a>
            <p class="form-note">Your order opens in WhatsApp as a ready-to-send message. We reply there with shipping, delivery time and payment details.</p>
          </aside>
        </div>`;
    };
    cartRoot.addEventListener('click', e => {
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      const id = btn.closest('.cart-item').dataset.id;
      const item = Cart.get().find(i => i.id === id);
      if (!item) return;
      if (btn.dataset.act === 'inc') Cart.setQty(id, item.qty + 1);
      if (btn.dataset.act === 'dec') Cart.setQty(id, item.qty - 1);
      if (btn.dataset.act === 'remove') Cart.remove(id);
    });
    Cart.onChange(render);
    render();
  }

  /* ---------- homepage film: plays muted, sound only when asked ---------- */
  const film = document.querySelector('video[data-film]');
  if (film) {
    const soundBtn = document.querySelector('[data-film-sound]');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
                 (navigator.connection && navigator.connection.saveData);
    film.muted = true;
    if (!calm && 'IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) { if (film.muted) film.play().catch(() => {}); }
          else if (film.muted) film.pause();
        });
      }, { threshold: 0.35 }).observe(film);
    }
    if (soundBtn) {
      const label = () => { soundBtn.innerHTML = film.muted ? `${ICON.sound} Play with sound` : `${ICON.sound} Mute`; };
      soundBtn.addEventListener('click', () => {
        if (film.muted) { film.muted = false; film.loop = false; film.currentTime = 0; film.play().catch(() => {}); }
        else { film.muted = true; }
        label();
      });
      film.addEventListener('volumechange', label);
      label();
    }
  }

  /* ---------- press clippings open full size ---------- */
  const pressButtons = document.querySelectorAll('[data-full]');
  if (pressButtons.length && 'HTMLDialogElement' in window) {
    const dlg = document.createElement('dialog');
    dlg.className = 'lightbox';
    dlg.innerHTML = '<img alt=""><form method="dialog"><button class="btn btn--light btn--sm">Close</button></form>';
    document.body.appendChild(dlg);
    const img = dlg.querySelector('img');
    pressButtons.forEach(b => b.addEventListener('click', () => {
      img.src = b.dataset.full;
      img.alt = b.dataset.alt || '';
      dlg.showModal();
    }));
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
  } else {
    pressButtons.forEach(b => b.addEventListener('click', () => window.open(b.dataset.full, '_blank')));
  }

  /* ---------- contact form opens WhatsApp with the message filled in ---------- */
  const form = document.querySelector('form[data-contact]');
  if (form) {
    document.querySelectorAll('[data-email]').forEach(el => {
      if (!CONFIG.brand.email) { el.closest('li').remove(); return; }
      el.textContent = CONFIG.brand.email; el.href = 'mailto:' + CONFIG.brand.email;
    });
    document.querySelectorAll('[data-phone]').forEach(el => { el.textContent = CONFIG.brand.phoneDisplay; });
    document.querySelectorAll('[data-instagram]').forEach(el => {
      if (!CONFIG.brand.instagram) { el.closest('li').remove(); return; }
      el.href = CONFIG.brand.instagram;
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      const msg = `Hello Pakka Organics,\n\nName: ${d.get('name')}\nAbout: ${d.get('topic')}\n\n${d.get('message')}`;
      window.open(whatsappUrl(msg), '_blank', 'noopener');
    });
  }

  /* =====================================================
     Motion and small interactions
     Everything below is skipped when the visitor has asked
     their device for reduced motion.
     ===================================================== */
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;

  /* ---------- YouTube: thumbnail first, player on click (keeps pages fast) ---------- */
  document.querySelectorAll('a.yt[data-src]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const src = a.dataset.src + (a.dataset.src.includes('?') ? '&' : '?') + 'autoplay=1&rel=0';
      const frame = document.createElement('iframe');
      frame.src = src;
      frame.title = a.dataset.title || 'YouTube video';
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allowFullscreen = true;
      a.replaceWith(frame);
    });
  });

  /* ---------- header shadow, reading progress, back to top ---------- */
  const progress = document.createElement('div');
  progress.className = 'progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  const toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.type = 'button';
  toTop.setAttribute('aria-label', 'Back to top');
  toTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }));
  document.body.appendChild(toTop);

  const timeline = document.querySelector('.timeline');
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (headerEl) headerEl.classList.toggle('scrolled', y > 12);
    progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
    toTop.classList.toggle('on', y > 700);
    if (timeline) {
      const r = timeline.getBoundingClientRect();
      const p = (window.innerHeight * 0.62 - r.top) / r.height;
      timeline.style.setProperty('--p', Math.max(0, Math.min(1, p)).toFixed(3));
    }
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ---------- number count-up ---------- */
  const countUp = el => {
    const target = parseFloat(el.dataset.count);
    if (isNaN(target)) return;
    const decimals = (el.dataset.count.split('.')[1] || '').length;
    if (reduce) { el.textContent = target.toFixed(decimals); return; }
    const t0 = performance.now(), dur = 1600;
    const tick = now => {
      const k = Math.min(1, (now - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  /* ---------- hero headline: words rise in on load ---------- */
  document.querySelectorAll('[data-split]').forEach(h => {
    if (reduce) return;
    const text = h.textContent.trim();
    h.setAttribute('aria-label', text);
    h.innerHTML = text.split(/\s+/).map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${esc(w)}</span></span>`).join(' ');
  });
  requestAnimationFrame(() => root.classList.add('loaded'));

  /* ---------- reveal on scroll ---------- */
  const REVEAL = '.section-head, .head-row > .btn, .split > *, .step, .product-card, .notes > *, .photo-grid > *, .press-card, .post-card, .video-grid > *, .impact-grid > *, .timeline-item, .fact, .stat, .cta-inner > *, .contact-grid > *, .page-head .wrap > *, .loop, .article > .wrap';
  const targets = [...document.querySelectorAll(REVEAL)].filter(el => !el.closest('.hero'));
  targets.forEach(el => {
    const sibs = [...el.parentElement.children].filter(c => c.matches(REVEAL));
    el.style.setProperty('--d', Math.min(sibs.indexOf(el), 6) * 80 + 'ms');
    el.setAttribute('data-reveal', '');
  });
  const counters = document.querySelectorAll('[data-count]');
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(el => { el.classList.add('in'); el.removeAttribute('data-reveal'); });
    counters.forEach(countUp);
  } else {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target;
        el.classList.add('in');
        io.unobserve(el);
        // once the entrance has played, hand the element back to its normal hover transitions
        setTimeout(() => { el.removeAttribute('data-reveal'); el.style.removeProperty('--d'); }, 1500);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    targets.forEach(el => io.observe(el));
    const cio = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.5 });
    counters.forEach(el => { el.textContent = (0).toFixed((el.dataset.count.split('.')[1] || '').length); cio.observe(el); });
  }

  window.__pakkaReady = true;
})();
