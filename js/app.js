(() => {
  'use strict';

  const state = { data: null, cats: new Map(), category: 'all', query: '' };
  const $ = (sel) => document.querySelector(sel);

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Hebrew-friendly normalization: lowercase, drop niqqud and quote marks.
  const norm = (s) => String(s ?? '')
    .toLowerCase()
    .replace(/[֑-ׇ]/g, '')
    .replace(/["'`׳״\-–]/g, '')
    // Final letters -> regular forms, so "חידון" matches "חידונים" and "דף" matches "דפי".
    .replace(/[ךםןףץ]/g, (c) => ({ 'ך': 'כ', 'ם': 'מ', 'ן': 'נ', 'ף': 'פ', 'ץ': 'צ' }[c]))
    .replace(/\s+/g, ' ')
    .trim();

  const catVars = (cat) => cat
    ? `--cat:${cat.color};--cat-tint:${cat.tint};--cat-ink:${cat.ink}`
    : '';

  const hostOf = (url) => { try { return new URL(url).hostname; } catch { return ''; } };

  const logoHtml = (tool) => {
    const host = hostOf(tool.url);
    const initial = esc(tool.name.trim().charAt(0));
    if (!host) return `<span class="tool-logo"><span class="initial">${initial}</span></span>`;
    return `<span class="tool-logo"><img src="https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64" alt="" loading="lazy" data-initial="${initial}"></span>`;
  };

  const fixBrokenLogos = (root) => {
    root.querySelectorAll('.tool-logo img').forEach((img) => {
      img.addEventListener('error', () => {
        img.replaceWith(Object.assign(document.createElement('span'), { className: 'initial', textContent: img.dataset.initial }));
      }, { once: true });
    });
  };

  // ---------- Search ----------
  function buildIndex(tool) {
    const parts = [tool.name, tool.description, ...(tool.capabilities || []), ...(tool.keywords || [])];
    for (const c of tool.categories) {
      const cat = state.cats.get(c.id);
      // Category name only, not its tagline: merged categories have broad
      // taglines ("פודקאסטים") that would match every tool in the category.
      parts.push(c.highlight, c.example, cat?.name);
    }
    tool._index = norm(parts.join(' '));
  }

  function matches(tool, q) {
    if (!q) return true;
    return q.split(' ').every((word) => tool._index.includes(word));
  }

  function visibleTools() {
    const q = norm(state.query);
    return state.data.tools.filter((t) =>
      (state.category === 'all' || t.categories.some((c) => c.id === state.category)) && matches(t, q));
  }

  // ---------- Render: categories ----------
  function countFor(catId) {
    return state.data.tools.filter((t) => t.categories.some((c) => c.id === catId)).length;
  }

  function renderCategories() {
    const html = [...state.cats.values()].map((cat, i) => `
      <button type="button" class="cat-card reveal" style="${catVars(cat)};transition-delay:${i * 35}ms"
        data-cat="${esc(cat.id)}" aria-pressed="${state.category === cat.id}">
        <span class="cat-icon"><i class="ti ${esc(cat.icon)}" aria-hidden="true"></i></span>
        <span class="cat-body"><strong>${esc(cat.name)}</strong><span>${esc(cat.tagline || '')}</span></span>
        <span class="cat-count">${countFor(cat.id)} כלים</span>
      </button>`).join('');
    $('#cat-grid').innerHTML = html;
  }

  function renderChips() {
    const all = `<button type="button" class="chip" data-cat="all" aria-pressed="${state.category === 'all'}">
      <i class="ti ti-layout-grid" aria-hidden="true"></i> כל הכלים</button>`;
    const chips = [...state.cats.values()].map((cat) => `
      <button type="button" class="chip" style="${catVars(cat)}" data-cat="${esc(cat.id)}" aria-pressed="${state.category === cat.id}">
        <i class="ti ${esc(cat.icon)}" aria-hidden="true"></i> ${esc(cat.name)}</button>`).join('');
    $('#chips').innerHTML = all + chips;
  }

  // ---------- Render: tool cards ----------
  function contextFor(tool) {
    // Active category wins; otherwise the category whose use best matches the search; otherwise the first.
    const active = tool.categories.find((c) => c.id === state.category);
    if (active) return active;
    const words = norm(state.query).split(' ').filter(Boolean);
    if (words.length) {
      let best = null, bestScore = 0;
      for (const c of tool.categories) {
        const cat = state.cats.get(c.id);
        const text = norm([c.highlight, c.example, cat?.name, cat?.tagline].join(' '));
        const score = words.filter((w) => text.includes(w)).length;
        if (score > bestScore) { best = c; bestScore = score; }
      }
      if (best) return best;
    }
    return tool.categories[0];
  }

  function toolCard(tool, i, animClass) {
    const ctx = contextFor(tool);
    const cat = state.cats.get(ctx.id);
    const others = tool.categories.length - 1;
    const focused = state.category !== 'all' || (state.query && ctx !== tool.categories[0]);
    const headline = focused ? ctx.highlight : tool.description;
    const moreText = others === 1 ? 'ועוד שימוש אחד' : `ועוד ${others} שימושים`;
    const nameParts = tool.name.match(/^(.*?)\s*(\(.*\))?$/);

    return `
      <article class="tool-card ${animClass}" style="${catVars(cat)};--i:${Math.min(i, 12)}">
        <div class="tool-top">
          ${logoHtml(tool)}
          <h3>${esc(nameParts[1])}${nameParts[2] ? `<small>${esc(nameParts[2].slice(1, -1))}</small>` : ''}</h3>
        </div>
        <p class="tool-highlight">${esc(headline)}</p>
        <p class="tool-example"><b>לדוגמה:</b> ${esc(ctx.example)}</p>
        <div class="tool-tags">
          <span class="tag" style="--t-tint:${cat.tint};--t-ink:${cat.ink}"><i class="ti ${esc(cat.icon)}" aria-hidden="true"></i>${esc(cat.name)}</span>
          ${others > 0 ? `<span class="tag-more">${moreText}</span>` : ''}
        </div>
        <div class="tool-actions">
          <button type="button" class="btn btn-soft" data-open="${esc(tool.id)}">כל היכולות והשימושים</button>
          <a class="btn btn-ghost" href="${esc(tool.url)}" target="_blank" rel="noopener" aria-label="לאתר ${esc(tool.name)} (נפתח בחלון חדש)"><i class="ti ti-external-link" aria-hidden="true"></i></a>
        </div>
      </article>`;
  }

  function renderTools({ quick = false } = {}) {
    const tools = visibleTools();
    const grid = $('#tool-grid');
    const cat = state.cats.get(state.category);

    $('#tools-title').textContent = cat ? cat.name : 'כל הכלים';
    $('#tools-sub').textContent = cat
      ? (cat.tagline || '') + ' · כל כלי מוצג עם השימוש המתאים לקטגוריה'
      : 'כל הכלים במאגר. בחרו קטגוריה כדי לראות שימושים ממוקדים.';
    $('#result-count').textContent = state.query
      ? `נמצאו ${tools.length} כלים עבור "${state.query}"`
      : `${tools.length} כלים`;

    const hint = $('#search-hint');
    hint.hidden = !state.query;
    hint.innerHTML = tools.length
      ? `נמצאו ${tools.length} כלים מתאימים <i class="ti ti-arrow-down" aria-hidden="true"></i>`
      : 'לא נמצאו כלים. נסו מילה אחרת';

    grid.innerHTML = tools.map((t, i) => toolCard(t, i, quick ? 'enter-quick' : 'enter')).join('');
    fixBrokenLogos(grid);

    const empty = $('#empty');
    empty.hidden = tools.length > 0;
    if (!tools.length) {
      const inCat = state.category !== 'all';
      $('#empty-text').textContent = inCat
        ? `לא נמצאו כלים מתאימים ב"${cat.name}".`
        : 'לא נמצאו כלים מתאימים. נסו מילה אחרת, למשל "סרטון" או "מחוון".';
      $('#empty-action').hidden = !inCat;
    }
  }

  function syncPressed() {
    document.querySelectorAll('[data-cat]').forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.cat === state.category)));
    const active = document.querySelector(`.chip[data-cat="${CSS.escape(state.category)}"]`);
    active?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }

  // ---------- Dialog ----------
  function openTool(id) {
    const tool = state.data.tools.find((t) => t.id === id);
    if (!tool) return;
    const ctx = contextFor(tool);
    const cat = state.cats.get(ctx.id);
    const a = tool.access || {};

    const ordered = [ctx, ...tool.categories.filter((c) => c !== ctx)];
    const uses = ordered.map((c) => {
      const uc = state.cats.get(c.id);
      return `<div class="use ${c.id === ctx.id && (state.category !== 'all' || state.query) ? 'is-current' : ''}" style="--u-color:${uc.color};--u-tint:${uc.tint};--u-ink:${uc.ink}">
        <i class="ti ${esc(uc.icon)}" aria-hidden="true"></i>
        <span class="use-cat">${esc(uc.name)}</span>
        <span class="use-hl">${esc(c.highlight)}</span>
        <span class="use-ex">לדוגמה: ${esc(c.example)}</span>
      </div>`;
    }).join('');

    const accountBoxes = (a.personalAccount || a.educationAccount) ? `
      <div class="access-grid">
        ${a.personalAccount ? `<div class="access-box"><strong><i class="ti ti-user" aria-hidden="true"></i> חשבון אישי</strong>${esc(a.personalAccount)}</div>` : ''}
        ${a.educationAccount ? `<div class="access-box"><strong><i class="ti ti-school" aria-hidden="true"></i> חשבון חינוכי</strong>${esc(a.educationAccount)}</div>` : ''}
      </div>` : '';

    const verified = a.verifiedOn
      ? `<p class="verified ok"><i class="ti ti-circle-check" aria-hidden="true"></i> המידע נבדק מול מקורות רשמיים ב-${new Date(a.verifiedOn).toLocaleDateString('he-IL')}</p>`
      : `<p class="verified"><i class="ti ti-info-circle" aria-hidden="true"></i> מומלץ לבדוק את תנאי השימוש העדכניים באתר הכלי</p>`;

    const note = (tool.note || '').trim()
      ? `<section class="dlg-section"><div class="note-box"><i class="ti ti-message-circle-2" aria-hidden="true"></i><p>${esc(tool.note.trim())}</p></div></section>`
      : '';

    $('#dlg-inner').innerHTML = `
      <div class="dlg-head" style="${catVars(cat)}">
        <button type="button" class="dlg-close" data-close aria-label="סגירה"><i class="ti ti-x" aria-hidden="true"></i></button>
        <div class="dlg-title-row">${logoHtml(tool)}<h2 id="dlg-title">${esc(tool.name)}</h2></div>
        <p>${esc(tool.description)}</p>
        <a class="btn btn-primary" href="${esc(tool.url)}" target="_blank" rel="noopener">מעבר לאתר הרשמי <i class="ti ti-external-link" aria-hidden="true"></i></a>
      </div>
      <div class="dlg-body">
        ${note}
        <section class="dlg-section"><h3><i class="ti ti-bulb" aria-hidden="true"></i> שימושים בהוראה</h3><div class="uses">${uses}</div></section>
        <section class="dlg-section"><h3><i class="ti ti-list-check" aria-hidden="true"></i> יכולות מרכזיות</h3><ul class="caps">${(tool.capabilities || []).map((c) => `<li>${esc(c)}</li>`).join('')}</ul></section>
        <section class="dlg-section"><h3><i class="ti ti-key" aria-hidden="true"></i> תנאי שימוש</h3><p class="access-summary">${esc(a.summary || '')}</p>${accountBoxes}${verified}</section>      </div>`;
    fixBrokenLogos($('#dlg-inner'));

    const dlg = $('#tool-dialog');
    dlg.showModal();
    $('#dlg-inner').scrollTop = 0;
  }

  // ---------- State changes ----------
  // Category and search are separate ways in: picking a category clears the
  // search, and typing a search shows results from all categories. Otherwise a
  // leftover search silently hides tools (card says 6, grid shows 1).
  function setCategory(id, { scroll = true } = {}) {
    state.category = state.cats.has(id) ? id : 'all';
    if (state.query) {
      clearTimeout(searchTimer);
      state.query = '';
      $('#search-input').value = '';
      $('#search-clear').hidden = true;
    }
    syncPressed();
    renderTools();
    const hash = state.category === 'all' ? '' : `#cat=${state.category}`;
    if (location.hash !== hash) history.replaceState(null, '', hash || location.pathname + location.search);
    if (scroll) $('#tools').scrollIntoView({ behavior: 'smooth' });
  }

  let searchTimer;
  function setQuery(q, { scroll = false } = {}) {
    state.query = q;
    if (q.trim() && state.category !== 'all') {
      state.category = 'all';
      syncPressed();
      history.replaceState(null, '', location.pathname + location.search);
    }
    if ($('#search-input').value !== q) $('#search-input').value = q;
    $('#search-clear').hidden = !q;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      renderTools({ quick: true });
      if (scroll) $('#tools').scrollIntoView({ behavior: 'smooth' });
    }, 120);
  }

  // ---------- Events ----------
  function bindEvents() {
    document.addEventListener('click', (e) => {
      const catBtn = e.target.closest('[data-cat]');
      if (catBtn) return setCategory(catBtn.dataset.cat, { scroll: catBtn.classList.contains('cat-card') });
      const openBtn = e.target.closest('[data-open]');
      if (openBtn) return openTool(openBtn.dataset.open);
      if (e.target.closest('[data-close]')) return $('#tool-dialog').close();
      const quick = e.target.closest('[data-q]');
      if (quick) return setQuery(quick.dataset.q, { scroll: true });
    });

    $('#tool-dialog').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) e.currentTarget.close(); // backdrop click
    });

    const input = $('#search-input');
    input.addEventListener('input', () => setQuery(input.value));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); $('#tools').scrollIntoView({ behavior: 'smooth' }); }
      if (e.key === 'Escape') setQuery('');
    });
    $('#search-clear').addEventListener('click', () => { setQuery(''); input.focus(); });
    $('#empty-action').addEventListener('click', () => setCategory('all', { scroll: false }));
  }

  function observeReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) return items.forEach((el) => el.classList.add('in'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.15 });
    items.forEach((el) => io.observe(el));
  }

  function renderMeta() {
    const m = state.data.meta || {};
    $('#notes-list').innerHTML = (m.generalNotes || []).map((n) => `<li>${esc(n)}</li>`).join('');
    $('#tool-count').textContent = state.data.tools.length;

    const platform = {
      whatsapp: { icon: 'ti-brand-whatsapp', label: 'קהילת וואטסאפ' },
      facebook: { icon: 'ti-brand-facebook', label: 'קבוצת פייסבוק' },
    };
    const groups = (m.myGroups || []).map((g) => {
      const p = platform[g.type] || { icon: 'ti-users-group', label: 'קבוצה' };
      return `<a class="group-link is-${esc(g.type)}" href="${esc(g.url)}" target="_blank" rel="noopener">
        <i class="ti ${p.icon}" aria-hidden="true"></i>
        <span><strong>${esc(g.name)}</strong><small>${p.label}</small></span>
      </a>`;
    }).join('');
    const all = m.allMyLinks
      ? `<a class="btn btn-soft all-links" href="${esc(m.allMyLinks)}" target="_blank" rel="noopener"><i class="ti ti-link" aria-hidden="true"></i> כל הקישורים שלי</a>`
      : '';
    $('#about-links').innerHTML = groups ? `<div class="group-grid">${groups}</div>${all}` : all;
    if (m.lastUpdated) $('#last-updated').textContent = 'המאגר עודכן לאחרונה ב-' + new Date(m.lastUpdated).toLocaleDateString('he-IL');
  }

  async function init() {
    // Data comes from data/tools.js (loaded by a <script> tag), so the site
    // also works when index.html is opened directly from the computer.
    state.data = window.TOOLS_DATA;
    if (!state.data || !Array.isArray(state.data.tools)) {
      $('#tool-grid').innerHTML = '<p class="muted">לא ניתן לטעון את מאגר הכלים. כנראה שיש טעות בקובץ data/tools.js – למשל פסיק או מירכאה חסרים. אפשר לבדוק את הקובץ באתר jsonlint.com.</p>';
      console.error('TOOLS_DATA missing or invalid');
      return;
    }

    [...state.data.categories].sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).forEach((c) => state.cats.set(c.id, c));
    state.data.tools.forEach(buildIndex);

    const fromHash = new URLSearchParams(location.hash.slice(1)).get('cat');
    if (fromHash && state.cats.has(fromHash)) state.category = fromHash;

    renderMeta();
    renderCategories();
    renderChips();
    renderTools();
    bindEvents();
    observeReveal();
    if (fromHash) $('#tools').scrollIntoView();
  }

  init();
})();
