/* ADS BROADBAND — vanilla HTML + CSS + JavaScript + Bootstrap */
(() => {
  'use strict';

  const app = document.getElementById('app');
  const IS_FILE =
  window.location.protocol === 'file:' ||
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';
  const API_BASE = 'https://broadband-ads.netlify.app/api';
  const BASE_PATH = '/ads-broadband-html-css-js';
  const NEW_CONNECTION_NUMBER = '8530739900';
  const SUPPORT_NUMBER = '8446522410';
  const NEW_CONNECTION_DISPLAY = '85307 39900';
  const SUPPORT_DISPLAY = '84465 22410';

  const PINCODES = {"411001": {"location": "Pune GPO / Camp", "available": true}, "411002": {"location": "Pune City / Shukrawar Peth", "available": true}, "411003": {"location": "Khadki", "available": true}, "411004": {"location": "Deccan Gymkhana", "available": true}, "411005": {"location": "Shivajinagar", "available": true}, "411006": {"location": "Yerwada", "available": true}, "411007": {"location": "Aundh / Ganeshkhind", "available": true}, "411008": {"location": "NCL / Pashan side", "available": true}, "411009": {"location": "Parvati", "available": true}, "411011": {"location": "Kasba Peth", "available": true}, "411012": {"location": "Dapodi", "available": true}, "411013": {"location": "Hadapsar", "available": true}, "411014": {"location": "Viman Nagar / Kharadi", "available": true}, "411015": {"location": "Dhanori / Dighi", "available": true}, "411016": {"location": "Model Colony", "available": true}, "411017": {"location": "Pimpri Colony", "available": true}, "411018": {"location": "Pimpri / Masulkar Colony", "available": true}, "411019": {"location": "Chinchwad East", "available": true}, "411020": {"location": "Range Hills", "available": true}, "411021": {"location": "Sus / Pashan", "available": true}, "411022": {"location": "SRPF", "available": true}, "411023": {"location": "NDA / Khadakwasla", "available": true}, "411024": {"location": "Khadakwasla", "available": true}, "411025": {"location": "Donje", "available": true}, "411026": {"location": "Bhosari", "available": true}, "411027": {"location": "Aundh Camp", "available": true}, "411028": {"location": "Gondhale Nagar / Hadapsar", "available": true}, "411030": {"location": "Lokmanyanagar", "available": true}, "411031": {"location": "CME", "available": true}, "411032": {"location": "Airport / Viman Nagar side", "available": true}, "411033": {"location": "Chinchwadgaon / Thergaon / Punawale", "available": true}, "411034": {"location": "Kasarwadi", "available": true}, "411035": {"location": "Akurdi", "available": true}, "411036": {"location": "Mundhwa", "available": true}, "411037": {"location": "Bibvewadi / Market Yard", "available": true}, "411038": {"location": "Kothrud / Bhusari Colony", "available": true}, "411039": {"location": "Bhosari Gaon", "available": true}, "411040": {"location": "Wanowrie / AFMC", "available": true}, "411041": {"location": "Dhayari / Nanded City / Sinhagad Road", "available": true}, "411042": {"location": "Bhavani Peth / Ghorpade Peth", "available": true}, "411043": {"location": "Dhankawadi", "available": true}, "411044": {"location": "PCNT / Pimpri-Chinchwad", "available": true}, "411045": {"location": "Baner", "available": true}, "411046": {"location": "Ambegaon Budruk / Katraj", "available": true}, "411047": {"location": "Lohegaon / Vadgaon Shinde", "available": true}, "411048": {"location": "Kondhwa / NIBM Road", "available": true}, "411051": {"location": "Anandnagar", "available": true}, "411052": {"location": "Karve Nagar", "available": true}, "411058": {"location": "Warje", "available": true}, "411057": {"location": "Hinjewadi / Wakad", "available": true}, "411060": {"location": "Mohammedwadi", "available": true}, "411061": {"location": "Pimple Gurav", "available": true}, "411062": {"location": "Talawade", "available": true}, "411067": {"location": "Aundh", "available": true}, "411068": {"location": "Nanded", "available": true}, "411069": {"location": "Baner", "available": true}, "411070": {"location": "Moshi", "available": true}, "411071": {"location": "Bavdhan", "available": true}, "411081": {"location": "Charholi", "available": true}, "412207": {"location": "Wagholi", "available": true}, "412307": {"location": "Manjri", "available": true}, "412308": {"location": "Fursungi", "available": true}, "654321": {"location": "lona", "available": true}};

  const WHY_CHOOSE = [
    { icon: 'Gauge', title: 'Unlimited Data', text: 'No caps, no throttling, no surprises.' },
    { icon: 'Zap', title: 'Ultra-Fast Browsing', text: 'Smooth browsing and everyday connectivity.' },
    { icon: 'PlayCircle', title: 'Seamless Streaming', text: 'Enjoy uninterrupted entertainment.' },
    { icon: 'Tv', title: 'OTT Entertainment', text: 'Selected plans include popular OTT platforms.' },
    { icon: 'Router', title: 'Free Dual-Band Router', text: 'Router included with connection.' },
    { icon: 'Wrench', title: 'Free Installation', text: 'Professional installation at your location.' },
    { icon: 'Tv', title: '350+ TV Channels', text: '350+ HD/SD channels with applicable plans.' },
    { icon: 'Clock', title: '100-Minute Support', text: 'Technical issues targeted for resolution within 100 minutes.' },
    { icon: 'MapPin', title: 'Pune-Based Team', text: 'Local installation and service support.' },
  ];

  const INTERNET_PLANS = [
    { speed: '50 Mbps', price: 499, gst: 589, validity: '76 Days' },
    { speed: '100 Mbps', price: 799, gst: 943, validity: '48 Days' },
    { speed: '200 Mbps', price: 999, gst: 1179, validity: '32 Days' },
  ];

  const TV_OTT_PLANS = [
    { speed: '50 Mbps', price: 699, ott: ['ZEE5', 'JioHotstar', 'Purple TV'], featured: false },
    { speed: '100 Mbps', price: 899, ott: ['ZEE5', 'JioHotstar', 'Purple TV'], featured: false },
    { speed: '100 Mbps Premium', price: 1199, ott: ['Netflix', 'Amazon Prime Video', 'ZEE5', 'JioHotstar', 'Purple TV'], featured: true },
  ];

  const LONG_TERM_PLANS = [
    { speed: '30 Mbps', price: 399 },
    { speed: '50 Mbps', price: 499 },
    { speed: '100 Mbps', price: 799 },
    { speed: '200 Mbps', price: 999 },
    { speed: '300 Mbps', price: 1499 },
  ];

  const HOW_IT_WORKS = [
    { n: '01', title: 'Choose Your Plan', text: 'Select Internet Only or WiFi + TV + OTT.' },
    { n: '02', title: 'Book Your Connection', text: 'Call ADS Broadband or submit your details.' },
    { n: '03', title: 'Free Installation', text: 'Our technician sets up your connection.' },
    { n: '04', title: 'Get Connected', text: 'Start browsing, streaming and watching.' },
  ];

  const FAQS = [
    { q: 'Is installation free?', a: 'Yes, installation is free on ADS Broadband connections.' },
    { q: 'Which OTT apps are included?', a: 'Depending on the plan you choose, ADS Broadband includes Netflix, Amazon Prime Video, ZEE5, JioHotstar and Purple TV.' },
    { q: 'Is ADS Broadband unlimited?', a: 'Yes, all ADS Broadband internet plans come with unlimited data.' },
    { q: 'What internet speeds are available?', a: 'Plans are available from 30 Mbps up to 300 Mbps, depending on the plan category you choose.' },
    { q: 'Can I choose a long-term plan?', a: 'Yes, long-term plans are available for 6 and 12 months with free months included as you commit longer.' },
    { q: 'How can I get a new connection?', a: `Call ${NEW_CONNECTION_DISPLAY} or submit your details through the Get a Free Callback form and our team will reach out.` },
    { q: 'Is ADS Broadband available in my area?', a: "Enter your area or pincode in the Check Availability section and we'll confirm serviceability, subject to network capacity and technical feasibility." },
  ];

  const esc = (value) => String(value ?? '').replace(/[&<>'"]/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' }[ch]));
  const escAttr = esc;

  function icon(name, size = 18, color = 'currentColor', className = '') {
    const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}" aria-hidden="true"`;
    const paths = {
      Wifi: '<path d="M2 8.5a16 16 0 0 1 20 0"/><path d="M5 12.5a11 11 0 0 1 14 0"/><path d="M8.5 16.5a6 6 0 0 1 7 0"/><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none"/>',
      Router: '<rect x="3" y="11" width="18" height="7" rx="2"/><path d="M8 11V8a1 1 0 0 1 1-1h1"/><path d="M16 6l1.5 1.5"/><path d="M13 4l1.5 1.5"/><circle cx="7" cy="14.5" r="0.8" fill="currentColor" stroke="none"/><circle cx="11" cy="14.5" r="0.8" fill="currentColor" stroke="none"/>',
      Wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z"/>',
      Tv: '<rect x="2.5" y="6" width="19" height="13" rx="2"/><path d="M8 22h8"/><path d="M7 3l5 3 5-3"/>',
      Clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
      MapPin: '<path d="M12 21s7-6.6 7-12a7 7 0 1 0-14 0c0 5.4 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/>',
      Phone: '<path d="M4.5 3.5h3.2l1.6 4.4-2 1.6a12 12 0 0 0 5.2 5.2l1.6-2 4.4 1.6v3.2c0 1-.9 1.8-1.9 1.6C10.6 18.4 5.6 13.4 3 6.9c-.4-1 .5-2 1.5-1.9z"/>',
      Menu: '<path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>',
      X: '<path d="M5 5l14 14"/><path d="M19 5L5 19"/>',
      ChevronDown: '<path d="M5 8l7 7 7-7"/>',
      Check: '<path d="M4 12.5l5 5L20 6.5"/>',
      Zap: '<path d="M12 2 4 14h6l-1 8 9-13h-6l1-7z"/>',
      PlayCircle: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5z" fill="currentColor" stroke="none"/>',
      Gauge: '<path d="M4 15a8 8 0 1 1 16 0"/><path d="M12 15l4-5"/><circle cx="12" cy="15" r="1.1" fill="currentColor" stroke="none"/>',
      ShieldCheck: '<path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>',
      ArrowRight: '<path d="M4 12h16"/><path d="M13 6l6 6-6 6"/>',
    };
    return `<svg ${common}>${paths[name] || ''}</svg>`;
  }

  function logo(compact = false, onDark = false) {
    const navy = onDark ? '#FFFFFF' : '#1F3247';
    return `<div class="logo-wrap">
      <svg class="logo-mark" width="${compact ? 34 : 42}" height="${compact ? 34 : 42}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M32 6C18 6 7 17 7 30c0 9.2 9.8 20.8 20.7 27.2a5 5 0 0 0 4.6 0C43.2 50.8 53 39.2 53 30 53 17 42 6 32 6z" fill="${navy}"/>
        <path d="M32 44a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" fill="${onDark ? '#1F3247' : '#FBF9F5'}"/>
        <path d="M20 27c3.2-3.6 7.4-5.6 12-5.6s8.8 2 12 5.6" stroke="#F0791E" stroke-width="3.4" stroke-linecap="round" fill="none"/>
        <path d="M24.4 32.2c2.2-2.4 4.8-3.6 7.6-3.6s5.4 1.2 7.6 3.6" stroke="#F0791E" stroke-width="3.4" stroke-linecap="round" fill="none"/>
        <circle cx="32" cy="37.5" r="2.6" fill="#F0791E"/>
      </svg>
      ${compact ? '' : `<div class="logo-text"><span class="logo-ads" style="color:${navy}">ADS</span><span class="logo-sub">INTERNET BROADBAND</span></div>`}
    </div>`;
  }

  function reveal(inner, delay = 0, tag = 'div', cls = '') {
    return `<${tag} class="reveal reveal-item ${cls}" style="transition-delay:0ms" data-delay="${delay}">${inner}</${tag}>`;
  }

  function routeLink(path, label, cls = '', extra = '') {
    return `<button type="button" class="${cls}" data-route="${escAttr(path)}" ${extra}>${label}</button>`;
  }

  function heroSignalArt() {
    return `<svg viewBox="0 0 480 480" class="signal-art" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="haloGrad" cx="50%" cy="42%" r="60%"><stop offset="0%" stop-color="#FFA24C" stop-opacity="0.35"/><stop offset="100%" stop-color="#FFA24C" stop-opacity="0"/></radialGradient>
        <linearGradient id="nodeGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#F0791E"/><stop offset="100%" stop-color="#FFA24C"/></linearGradient>
      </defs>
      <circle cx="240" cy="210" r="220" fill="url(#haloGrad)"/>
      <g transform="translate(240,230)"><circle class="pulse-ring ring-1" r="60" fill="none" stroke="#F0791E" stroke-width="2" opacity="0.55"/><circle class="pulse-ring ring-2" r="100" fill="none" stroke="#F0791E" stroke-width="2" opacity="0.35"/><circle class="pulse-ring ring-3" r="140" fill="none" stroke="#F0791E" stroke-width="2" opacity="0.2"/></g>
      <g transform="translate(190,175)"><rect x="0" y="0" width="100" height="66" rx="14" fill="#1F3247"/><rect x="14" y="18" width="72" height="6" rx="3" fill="#FFA24C"/><rect x="14" y="30" width="46" height="6" rx="3" fill="#4E6B85"/><circle cx="80" cy="49" r="5" class="blink-dot" fill="#4CD964"/></g>
      <g stroke="#2E4C68" stroke-width="1.6" opacity="0.55"><line x1="240" y1="175" x2="120" y2="90"/><line x1="240" y1="175" x2="365" y2="110"/><line x1="240" y1="240" x2="100" y2="330"/><line x1="240" y1="240" x2="380" y2="320"/></g>
      <g transform="translate(120,90)"><g class="float-node node-0"><circle r="20" fill="url(#nodeGrad)"/>${icon('Wifi',14,'#fff')}</g></g>
      <g transform="translate(365,110)"><g class="float-node node-1"><circle r="20" fill="url(#nodeGrad)"/>${icon('Tv',14,'#fff')}</g></g>
      <g transform="translate(100,330)"><g class="float-node node-2"><circle r="20" fill="url(#nodeGrad)"/>${icon('Wifi',14,'#fff')}</g></g>
      <g transform="translate(380,320)"><g class="float-node node-3"><circle r="20" fill="url(#nodeGrad)"/>${icon('Tv',14,'#fff')}</g></g>
    </svg>`;
  }

  function renderHeader(pathname, menuOpen = false, dropdown = null) {
    const active = (path) => pathname === path || pathname.startsWith(path + '/');
    return `<header class="site-header" id="site-header"><div class="header-inner" id="nav-wrap">
      <button class="logo-btn" data-route="/" aria-label="ADS Broadband home">${logo()}</button>
      <nav class="nav-desktop" aria-label="Primary navigation">
        ${routeLink('/', 'Home', `nav-link ${pathname === '/' ? 'nav-link-active' : ''}`)}
        <div class="nav-dropdown ${dropdown === 'plans' ? 'nav-dropdown-open' : ''}" data-dropdown="plans">
          <div class="nav-dropdown-row">${routeLink('/plans','Plans',`nav-link ${active('/plans') ? 'nav-link-active' : ''}`)}<button type="button" class="nav-caret" data-dropdown-toggle="plans" aria-label="Open Plans menu" aria-expanded="${dropdown === 'plans'}">${icon('ChevronDown',14)}</button></div>
          <div class="nav-dropdown-menu">
            ${routeLink('/plans?tab=internet','<span>Internet Plans</span><small>Fast, unlimited broadband</small>','','')}
            ${routeLink('/plans?tab=tv-ott','<span>WiFi + TV + OTT</span><small>Internet + entertainment</small>','','')}
            ${routeLink('/plans?tab=long-term','<span>Long-Term Plans</span><small>More value for longer validity</small>','','')}
          </div>
        </div>
        ${routeLink('/why-ads','Why ADS',`nav-link ${pathname === '/why-ads' ? 'nav-link-active' : ''}`)}
        ${routeLink('/how-it-works','How It Works',`nav-link ${pathname === '/how-it-works' ? 'nav-link-active' : ''}`)}
        ${routeLink('/offers','Offers',`nav-link ${pathname === '/offers' ? 'nav-link-active' : ''}`)}
        ${routeLink('/availability','Check Availability',`nav-link ${pathname === '/availability' ? 'nav-link-active' : ''}`)}
        <div class="nav-dropdown ${dropdown === 'support' ? 'nav-dropdown-open' : ''}" data-dropdown="support">
          <div class="nav-dropdown-row">${routeLink('/support','Support',`nav-link ${pathname === '/support' ? 'nav-link-active' : ''}`)}<button type="button" class="nav-caret" data-dropdown-toggle="support" aria-label="Open Support menu" aria-expanded="${dropdown === 'support'}">${icon('ChevronDown',14)}</button></div>
          <div class="nav-dropdown-menu nav-dropdown-menu-right">
            ${routeLink('/support','<span>Contact Us</span><small>Talk to ADS Broadband</small>','','')}
            ${routeLink('/support?section=faq','<span>FAQs</span><small>Quick answers</small>','','')}
            <a href="tel:${SUPPORT_NUMBER}"><span>Customer Support</span><small>${SUPPORT_DISPLAY}</small></a>
          </div>
        </div>
      </nav>
      <div class="header-actions">
        <a class="header-call" href="tel:${NEW_CONNECTION_NUMBER}">${icon('Phone',15)}<span>${NEW_CONNECTION_DISPLAY}</span></a>
        ${routeLink('/plans','Get New Connection','btn btn-primary btn-sm header-cta')}
        <button type="button" class="menu-toggle" id="menu-toggle" aria-label="Menu" aria-expanded="${menuOpen}">${menuOpen ? icon('X',22) : icon('Menu',22)}</button>
      </div>
    </div>
    <div class="nav-mobile ${menuOpen ? 'nav-mobile-open' : ''}" id="nav-mobile">
      ${routeLink('/','Home',`nav-mobile-link ${pathname === '/' ? 'nav-mobile-active' : ''}`)}
      ${routeLink('/plans','Plans',`nav-mobile-link ${active('/plans') ? 'nav-mobile-active' : ''}`)}
      <div class="nav-mobile-submenu">${routeLink('/plans?tab=internet','Internet Plans')}${routeLink('/plans?tab=tv-ott','WiFi + TV + OTT')}${routeLink('/plans?tab=long-term','Long-Term Plans')}</div>
      ${routeLink('/why-ads','Why ADS',`nav-mobile-link ${pathname === '/why-ads' ? 'nav-mobile-active' : ''}`)}
      ${routeLink('/how-it-works','How It Works',`nav-mobile-link ${pathname === '/how-it-works' ? 'nav-mobile-active' : ''}`)}
      ${routeLink('/offers','Offers',`nav-mobile-link ${pathname === '/offers' ? 'nav-mobile-active' : ''}`)}
      ${routeLink('/availability','Check Availability',`nav-mobile-link ${pathname === '/availability' ? 'nav-mobile-active' : ''}`)}
      ${routeLink('/support','Support',`nav-mobile-link ${pathname === '/support' ? 'nav-mobile-active' : ''}`)}
      <div class="nav-mobile-submenu">${routeLink('/support','Contact Us')}${routeLink('/support?section=faq','FAQs')}<a href="tel:${SUPPORT_NUMBER}">Customer Support · ${SUPPORT_DISPLAY}</a></div>
      <a class="btn btn-primary nav-mobile-cta" href="tel:${NEW_CONNECTION_NUMBER}">${icon('Phone',16)} Call ${NEW_CONNECTION_DISPLAY}</a>
    </div></header>`;
  }

  function renderOffer() {
    return reveal(`<div class="offer-card"><div class="offer-headline"><span class="offer-tag">Limited-time offer</span><h2>Pay ₹1,500 &amp; get <span class="offer-amount">₹2,500 cashback*</span></h2></div><ul class="offer-list">
      <li>${icon('Check',16)} ₹1,500 adjusted directly against your bill</li><li>${icon('Check',16)} ₹100 off on your next 10 bills</li><li>${icon('Check',16)} Free dual-band router</li><li>${icon('Check',16)} Free installation</li><li>${icon('Check',16)} Free 4K Android box with WiFi + TV + OTT plans</li>
    </ul><p class="offer-fine-print">*T&amp;C apply. Taxes applicable. Services subject to survey, network capacity and technical feasibility.</p></div>`,0,'section','offer-section');
  }

  function renderWhy(showHeading = true, cls = '') {
    return `<section class="section why-section ${cls}">${showHeading ? reveal('<p class="section-label why-ads-label">Why ADS</p><h2>Everything a good connection should be</h2>',0,'div','section-head') : ''}<div class="why-grid">${WHY_CHOOSE.map((x,i)=>reveal(`<div class="why-icon">${icon(x.icon,20)}</div><h3>${x.title}</h3><p>${x.text}</p>`,(i%3)*80,'div','why-card')).join('')}</div></section>`;
  }

  function renderPlanCard(p, i, type) {
    const planName = type === 'internet' ? `${p.speed} Internet Only` : type === 'tv' ? `${p.speed} WiFi + TV + OTT` : `${p.speed} Long-Term`;
    if (type === 'tv') {
      return reveal(`${p.featured ? '<span class="plan-badge">Most popular</span>' : ''}<p class="plan-speed">${esc(p.speed)}</p><p class="plan-price">₹${p.price}<span>/month</span></p><ul class="plan-benefits">${p.ott.map(o=>`<li>${icon('Check',14)} ${esc(o)}</li>`).join('')}</ul>${routeLink(`/connect?plan=${encodeURIComponent(planName)}`,'Choose Plan',`btn btn-block ${p.featured ? 'btn-primary' : 'btn-outline'}`)}`,i*90,'div',`plan-card ${p.featured ? 'plan-card-featured' : ''}`);
    }
    if (type === 'long') {
      return reveal(`<p class="plan-speed">${esc(p.speed)}</p><p class="plan-price">₹${p.price}<span>/mo</span></p>${routeLink(`/connect?plan=${encodeURIComponent(planName)}`,'Choose Plan','btn btn-outline btn-block')}`,i*70,'div','plan-card plan-card-compact');
    }
    return reveal(`<p class="plan-speed">${esc(p.speed)}</p><p class="plan-price">₹${p.price}<span>+GST /mo</span></p><p class="plan-gst">GST-inclusive: ₹${p.gst}</p><p class="plan-validity">Validity: ${esc(p.validity)}</p><ul class="plan-benefits"><li>${icon('Check',14)} Unlimited data</li></ul>${routeLink(`/connect?plan=${encodeURIComponent(planName)}`,'Choose Plan','btn btn-primary btn-block')}`,i*90,'div','plan-card');
  }

  function renderPlans(tab = 'internet', showHeading = true) {
    let body = '';
    if (tab === 'tv') {
      body = `<div class="plan-grid">${TV_OTT_PLANS.map((p,i)=>renderPlanCard(p,i,'tv')).join('')}</div><ul class="plan-includes reveal reveal-item"><li>${icon('Check',14)} Free dual-band router</li><li>${icon('Check',14)} Free installation</li><li>${icon('Check',14)} Free 4K Android box</li><li>${icon('Check',14)} 350+ HD/SD TV channels</li></ul>`;
    } else if (tab === 'long') {
      body = `<div class="long-term-banner reveal reveal-item"><h3>Pay longer. Save more.</h3><div class="long-term-perks"><span>6 months → 1 month free</span><span>12 months → 2 months free</span></div></div><div class="plan-grid plan-grid-5">${LONG_TERM_PLANS.map((p,i)=>renderPlanCard(p,i,'long')).join('')}</div><ul class="plan-includes reveal reveal-item"><li>${icon('Check',14)} Free WiFi router</li><li>${icon('Check',14)} Free installation</li></ul>`;
    } else {
      body = `<div class="plan-grid">${INTERNET_PLANS.map((p,i)=>renderPlanCard(p,i,'internet')).join('')}</div>`;
    }
    return `<section class="section plans-section">${showHeading ? reveal('<p class="section-label plans-label">Plans</p><h2>A plan for every home &amp; business</h2>',0,'div','section-head') : ''}<div class="plan-tabs reveal reveal-item">
      <button type="button" class="${tab === 'internet' ? 'tab-active' : ''}" data-plan-tab="internet">Internet Only</button><button type="button" class="${tab === 'tv' ? 'tab-active' : ''}" data-plan-tab="tv">WiFi + TV + OTT</button><button type="button" class="${tab === 'long' ? 'tab-active' : ''}" data-plan-tab="long">Long-Term Plans</button>
    </div>${body}</section>`;
  }

  function renderOTT() {
    return `<section class="section ott-section">${reveal('<p class="section-label entertainment-label">Entertainment</p><h2>One connection. Endless entertainment.</h2>',0,'div','section-head')}<div class="ott-row reveal reveal-item"><img src="./assets/net.jpg" alt="Netflix"><img src="./assets/prime.jpg" alt="Amazon Prime Video"><img src="./assets/zee.jpg" alt="ZEE5"><img src="./assets/jio.jpg" alt="JioHotstar"><img src="./assets/purpleLogo.png" alt="Purple TV"></div>${reveal(`${icon('Tv',16)} 350+ HD/SD TV channels`,0,'p','ott-channels')}${reveal('OTT availability depends on the selected plan.',0,'p','ott-note')}</section>`;
  }

  function renderAvailability() {
    return `<section class="section availability-section" id="availability"><div class="availability-inner">
      ${reveal('<h3>Check ADS Broadband availability</h3><form class="pincode-form" id="pincode-form"><input id="pincode-input" type="text" placeholder="Enter your area / pincode" autocomplete="postal-code"><button class="btn btn-primary" type="submit">Check Availability</button></form><div id="pincode-result" aria-live="polite"></div>',0,'div','availability-card')}
      ${reveal('<h3>Get a free callback</h3><div id="callback-container"><form class="callback-form" id="callback-form" novalidate><div class="field"><label for="callback-name">Full Name</label><input id="callback-name" type="text"><span class="field-error" id="callback-name-error"></span></div><div class="field"><label for="callback-mobile">Mobile Number</label><input id="callback-mobile" type="tel"><span class="field-error" id="callback-mobile-error"></span></div><div class="field"><label for="callback-area">Area / Pincode</label><input id="callback-area" type="text"><span class="field-error" id="callback-area-error"></span></div><div class="field"><label for="callback-plan">Interested Plan</label><select id="callback-plan"><option value="">Select a plan</option><option>Internet Only</option><option>WiFi + TV + OTT</option><option>Long-Term Plan</option></select><span class="field-error" id="callback-plan-error"></span></div><button class="btn btn-primary btn-block" type="submit" id="callback-submit">Get a Free Callback</button></form></div>',100,'div','availability-card callback-card')}
    </div></section>`;
  }

  function renderHow(showHeading = true) {
    return `<section class="section steps-section">${showHeading ? reveal('<p class="section-label process-label">Process</p><h2>How it works</h2>',0,'div','section-head') : ''}<div class="steps-row">${HOW_IT_WORKS.map((s,i)=>reveal(`<span class="step-num">${s.n}</span><h3>${s.title}</h3><p>${s.text}</p>`,i*100,'div','step-card')).join('')}</div></section>`;
  }

  function renderFAQ() {
    return `<section class="section faq-section">${reveal('<p class="section-label faq-label">FAQ</p><h2>Common questions</h2>',0,'div','section-head')}<div class="faq-list">${FAQS.map((x,i)=>`<div class="faq-item reveal reveal-item" data-delay="${i*40}"><button type="button" class="faq-q" aria-expanded="${i===0}"><span>${esc(x.q)}</span>${icon('ChevronDown',18,'currentColor',`faq-chevron ${i===0 ? 'faq-chevron-open' : ''}`)}</button><div class="faq-a-wrap ${i===0 ? 'faq-a-open' : ''}"><p class="faq-a">${esc(x.a)}</p></div></div>`).join('')}</div></section>`;
  }

  function simpleHero(eyebrow, title, text, cls = '') {
    return reveal(`<p class="eyebrow-pill">${esc(eyebrow)}</p><h1>${esc(title)}</h1><p>${esc(text)}</p>`,0,'div',`page-hero page-hero-premium ${cls}`);
  }

  function renderHome() {
    return `<section class="hero"><div class="hero-inner"><div class="hero-copy"><p class="eyebrow-pill">Pune's own fibre network</p><h1 class="hero-title">Blazing-fast internet for home &amp; business</h1><p class="hero-sub">Reliable. Affordable. Always on — ADS Broadband delivers high-speed internet with unlimited data, bundled OTT entertainment, and local support that resolves technical issues in 100 minutes.</p><div class="hero-ctas">${routeLink('/plans','Check Plans in Your Area '+icon('ArrowRight',17),'btn btn-primary btn-lg')}<a class="btn btn-ghost btn-lg" href="tel:${NEW_CONNECTION_NUMBER}">${icon('Phone',17)} Call Now: ${NEW_CONNECTION_DISPLAY}</a></div><div class="hero-stats"><div><strong>300 Mbps</strong><span>Top speed</span></div><div><strong>100 min</strong><span>Support SLA</span></div><div><strong>350+</strong><span>TV channels</span></div></div></div><div class="hero-visual"></div></div></section>${renderOffer()}${renderWhy(true,'home-why-section')}${renderPlans('internet',true)}${renderOTT()}${renderAvailability()}${renderHow(true)}${renderFAQ()}`;
  }

  function renderPlansPage(params) {
    const t = params.get('tab');
    const tab = t === 'tv-ott' ? 'tv' : t === 'long-term' ? 'long' : 'internet';
    return `<div class="inner-page">${reveal('<p class="eyebrow-pill">Plans</p><h1>Simple, transparent broadband plans</h1><p>Pick internet only, or bundle in TV and OTT — no hidden pricing, ever.</p>',0,'div','page-hero page-hero-plans plans-page-hero')}${renderPlans(tab,false)}${renderOTT()}${renderAvailability()}${renderFAQ()}</div>`;
  }

  function renderAboutPage() {
    const promise = ['Speed you can count on','Transparent pricing','Fast local support','Entertainment built in','Technical issues resolved in 100 minutes'];
    return `<div class="inner-page">${reveal('<p class="eyebrow-pill">About Us</p><h1>Connecting Pune, one connection at a time</h1><p>ADS Broadband is a Pune-based internet service provider connecting homes and businesses with fast, reliable and affordable internet.</p>',0,'div','page-hero page-hero-about')}<section class="section about-promise">${reveal('<p class="section-label">Our promise</p><h2>What you can count on</h2>',0,'div','section-head')}<div class="promise-grid">${promise.map((t,i)=>reveal(`${icon('ShieldCheck',18)}<span>${t}</span>`,i*70,'div','promise-item')).join('')}</div></section>${reveal('<p class="section-label section-label-light">Vision</p><h2>To be Pune\'s most reliable and affordable broadband partner — connecting every home, every business, and every moment that matters.</h2>',0,'section','vision-band')}</div>`;
  }

  function renderSupportPage(params) {
    if (params.get('section') === 'faq') return `<div class="inner-page">${renderFAQ()}</div>`;
    return `<div class="inner-page">${reveal('<p class="eyebrow-pill">Support &amp; Contact</p><h1>Need help?</h1><p>Technical issues resolved in 100 minutes.</p>',0,'div','page-hero page-hero-support')}<section class="section support-cards">
      ${reveal(`${icon('Phone',20)}<h3>New Connections &amp; Plans</h3><a href="tel:${NEW_CONNECTION_NUMBER}">${NEW_CONNECTION_DISPLAY}</a>`,0,'div','support-card')}
      ${reveal(`${icon('Wrench',20)}<h3>Technical Support &amp; IPTV</h3><a href="tel:${SUPPORT_NUMBER}">${SUPPORT_DISPLAY}</a>`,100,'div','support-card')}
      ${reveal(`${icon('MapPin',20)}<h3>Service Area</h3><span>Pune, Maharashtra</span>`,200,'div','support-card')}
      ${reveal(`${icon('Clock',20)}<h3>Support Promise</h3><span>Technical issues resolved in 100 minutes.</span>`,300,'div','support-card')}
    </section><div class="support-cta-row">${reveal(`<a class="btn btn-primary btn-lg" href="tel:${NEW_CONNECTION_NUMBER}">${icon('Phone',16)} Call Now</a>`,0,'div')}${reveal('<a class="btn btn-outline btn-lg" href="#availability">Get a Callback</a>',100,'div')}</div>${renderAvailability()}</div>`;
  }

  function renderOffersPage() {
    return `<div class="inner-page">${simpleHero('ADS Broadband Offer','Pay ₹1,500 & Get ₹2,500 Cashback*','More value from your broadband connection, with benefits designed for connected homes.','offers-page-hero')}${renderOffer()}<section class="section action-band"><h2>Ready to get connected?</h2><p>Choose a plan and move directly to connection details — no page reload.</p>${routeLink('/plans','View Plans '+icon('ArrowRight',17),'btn btn-primary btn-lg')}</section></div>`;
  }

  function renderWhyPage() { return `<div class="inner-page">${simpleHero('Why ADS','Everything a good connection should be','Unlimited data, fast browsing and streaming, bundled entertainment, free installation and local Pune support.','why-page-hero')}${renderWhy(false)}</div>`; }
  function renderHowPage() { return `<div class="inner-page">${simpleHero('How It Works','From plan to connected in four simple steps','Choose, book, install and get connected with ADS Broadband.','how-page-hero')}${renderHow(false)}</div>`; }
  function renderAvailabilityPage() { return `<div class="inner-page">${simpleHero('Check Availability','Is ADS Broadband available in your area?','Enter your area or pincode and our Pune team can confirm serviceability, subject to network capacity and technical feasibility.','availability-page-hero')}${renderAvailability()}</div>`; }

  function renderConnectPage(params) {
    const selectedPlan = params.get('plan') || 'ADS Broadband connection';
    return `<div class="inner-page">${simpleHero('Get New Connection','Your plan is selected.',`Selected: ${selectedPlan}. Complete your details and the ADS Broadband team can contact you.`)}<section class="section connect-section"><div class="connect-grid">
      ${reveal(`<span class="section-label">Selected plan</span><h2>${esc(selectedPlan)}</h2><p>Unlimited data • Pune service area • Free installation on applicable plans</p>${routeLink('/plans','Change Plan','btn btn-outline')}`,0,'div','selected-plan-card')}
      ${reveal('<div id="connect-form-container"><form class="callback-form" id="connect-form" novalidate><div class="field"><label for="connect-name">Full Name</label><input id="connect-name" type="text"></div><div class="field"><label for="connect-mobile">Mobile Number</label><input id="connect-mobile" type="tel" inputmode="numeric" maxlength="10"></div><div class="field"><label for="connect-area">Area / Pincode</label><input id="connect-area" type="text"></div><p class="form-error" id="connect-error"></p><button class="btn btn-primary btn-block" type="submit">Request New Connection</button></form></div>',100,'div','availability-card callback-card')}
    </div></section></div>`;
  }

  function renderNotFound() { return `<div class="inner-page">${simpleHero('ADS Broadband',"We couldn't find that page",'Use the navigation to continue exploring ADS Broadband.') }<div class="section action-band">${routeLink('/','Back to Home','btn btn-primary')}</div></div>`; }

  function renderFooter() {
    const links = [['/','Home'],['/plans','Plans'],['/about','About Us'],['/support','Support'],['/offers','Offers'],['/why-ads','Why ADS'],['/how-it-works','How It Works'],['/availability','Check Availability']];
    return `<footer class="site-footer"><div class="footer-inner"><div class="footer-brand"><button type="button" class="footer-logo-button" data-route="/" aria-label="Go to top">${logo(false,true)}</button><p>Blazing-fast internet for home &amp; business. Reliable. Affordable.</p><div class="footer-social"><a href="#" aria-label="Instagram"><img src="./assets/instagram.png" alt="Instagram"></a><a href="#" aria-label="Facebook"><img src="./assets/facebook.png" alt="Facebook"></a></div></div><div class="footer-col"><h4 class="quick-links-title">Quick Links</h4>${links.map(([p,l])=>routeLink(p,l)).join('')}</div><div class="footer-col"><h4 class="contact-title">Contact</h4><a href="tel:${NEW_CONNECTION_NUMBER}">${NEW_CONNECTION_DISPLAY}</a><a href="tel:${SUPPORT_NUMBER}">${SUPPORT_DISPLAY}</a><span>Pune, Maharashtra</span></div></div><div class="footer-bottom"><p class="footer-copyright">© ADS Broadband. All rights reserved.</p><p class="footer-disclaimer">Prices, offers and validity are subject to change. Taxes applicable. Services subject to survey, network capacity and technical feasibility.</p></div></footer>`;
  }

  function renderSticky() {
    return `<div class="sticky-mobile-cta"><a href="tel:${NEW_CONNECTION_NUMBER}" class="btn btn-primary btn-block">${icon('Phone',16)} Call ${NEW_CONNECTION_DISPLAY}</a>${routeLink('/plans','Get Connection','btn btn-outline btn-block')}</div>`;
  }

  function botReply(text) {
    const msg = text.toLowerCase().trim();
    if (['hi','hello','hey'].includes(msg) || msg.includes('good morning') || msg.includes('good evening')) return "Hello! 👋 I'm ADS Assistant. I can help you with plans, pricing, OTT, new connections, availability and support.";
    if (msg.includes('50 mbps')) return '📶 50 Mbps Internet Plan\n\n₹499 + GST\nGST-inclusive price: ₹589\nValidity: 76 Days\nUnlimited data.';
    if (msg.includes('100 mbps')) return '📶 100 Mbps Internet Plan\n\n₹799 + GST\nGST-inclusive price: ₹943\nValidity: 48 Days\nUnlimited data.';
    if (msg.includes('200 mbps')) return '📶 200 Mbps Internet Plan\n\n₹999 + GST\nGST-inclusive price: ₹1,179\nValidity: 32 Days\nUnlimited data.';
    if (msg.includes('300 mbps')) return '⚡ 300 Mbps is available in our Long-Term Plans. The plan starts at ₹1,499/month.';
    if (msg.includes('price') || msg.includes('cost') || msg.includes('rate') || msg.includes('how much')) return '💰 Our Internet Plans start from ₹499:\n\n50 Mbps — ₹499\n100 Mbps — ₹799\n200 Mbps — ₹999\n\nWe also have TV + OTT and Long-Term plans.';
    if (msg.includes('internet') || msg === 'plans' || msg.includes('internet plan') || msg.includes('broadband plan') || msg.includes('speed')) return '📶 ADS Internet Plans:\n\n50 Mbps — ₹499 + GST\n100 Mbps — ₹799 + GST\n200 Mbps — ₹999 + GST\n\nAll Internet plans include unlimited data.';
    if (msg.includes('tv') || msg.includes('ott') || msg.includes('entertainment') || msg.includes('channel')) return '📺 TV + OTT Plans start from ₹699.\n\nAvailable OTT platforms depend on the selected plan and include ZEE5, JioHotstar, Purple TV, Netflix and Amazon Prime Video.\n\nApplicable plans also include 350+ TV channels.';
    if (msg.includes('netflix') || msg.includes('prime') || msg.includes('zee5') || msg.includes('hotstar') || msg.includes('purple')) return '🎬 Our TV + OTT plans can include Netflix, Amazon Prime Video, ZEE5, JioHotstar and Purple TV depending on the plan you choose.';
    if (msg.includes('long term') || msg.includes('long-term') || msg.includes('6 month') || msg.includes('6 months') || msg.includes('12 month') || msg.includes('12 months')) return '📅 Our Long-Term Plans start from ₹399/month:\n\n30 Mbps — ₹399\n50 Mbps — ₹499\n100 Mbps — ₹799\n200 Mbps — ₹999\n300 Mbps — ₹1,499\n\n6 months → 1 month free\n12 months → 2 months free.';
    if (msg.includes('unlimited') || msg.includes('data limit') || msg.includes('data cap')) return '♾️ Yes! ADS Broadband Internet Plans come with unlimited data.';
    if (msg.includes('installation') || msg.includes('install') || msg.includes('setup')) return '🔧 Installation is free for ADS Broadband connections. Our technician will set up your connection at your location.';
    if (msg.includes('new connection') || msg.includes('new broadband') || msg.includes('apply') || msg.includes('join') || msg.includes('get connection')) return '🏠 Want a new ADS Broadband connection?\n\nCall us at 85307 39900 or submit your details through the New Connection form.';
    if (msg.includes('availability') || msg.includes('available') || msg.includes('pincode') || msg.includes('pin code') || msg.includes('service in my area') || msg.includes('my area')) return '📍 You can check ADS Broadband availability by entering your area or pincode. Availability depends on network coverage and technical feasibility.';
    if (msg.includes('support') || msg.includes('complaint') || msg.includes('problem') || msg.includes('issue') || msg.includes('not working') || msg.includes('internet down') || msg.includes('technician')) return '🔧 Need technical support?\n\nCall ADS Support: 84465 22410\n\nOur support team handles connection and technical issues.';
    if (msg.includes('contact') || msg.includes('phone') || msg.includes('number') || msg.includes('call')) return '📞 ADS Broadband:\n\nNew Connection: 85307 39900\nSupport: 84465 22410';
    if (msg.includes('router') || msg.includes('wifi router')) return '📡 ADS Broadband provides a free dual-band router with the connection.';
    if (msg.includes('faq') || msg.includes('question') || msg.includes('help')) return 'I can answer questions about:\n\n📶 Internet Plans\n📺 TV + OTT\n📅 Long-Term Plans\n🏠 New Connection\n📍 Availability\n🔧 Support\n💰 Pricing\n\nJust type your question.';
    if (msg.includes('thank you') || msg.includes('thanks')) return "You're welcome! 😊 I'm here whenever you need help with ADS Broadband.";
    if (msg === 'bye' || msg.includes('goodbye')) return 'Thank you for choosing ADS Broadband! 👋 Have a great day.';
    return "I'm sorry, I didn't quite understand that. 🤔\n\nYou can ask me about Internet Plans, prices, TV + OTT, Long-Term Plans, New Connection, Availability or Support.";
  }

  let state = { path: window.location.pathname + window.location.search, menuOpen: false, dropdown: null, chatbotOpen: false, chatMessages: [{ sender:'bot', text:"Hi! 👋 I'm ADS Assistant. How can I help you today?" }], pincode:'', pinResult:null, callback:{name:'',mobile:'',area:'',plan:''}, submitted:false, submitting:false, connectSubmitted:false, connectError:'' };

  function parseLocation() {
    const u = new URL(window.location.href);
    const isHashRoute = IS_FILE || window.location.hostname === 'suprade.github.io';

if (isHashRoute) {
  const raw = (u.hash || '#/').slice(1) || '/';
  const normalized = raw.startsWith('/') ? raw : `/${raw}`;
  const qIndex = normalized.indexOf('?');
  const pathname = qIndex >= 0 ? normalized.slice(0, qIndex) : normalized;
  const search = qIndex >= 0 ? normalized.slice(qIndex + 1) : '';

  return {
    pathname: pathname || '/',
    params: new URLSearchParams(search)
  };
}

  function renderPage() {
    const { pathname, params } = parseLocation();
    let content;
    if (pathname === '/') content = renderHome();
    else if (pathname === '/plans') content = renderPlansPage(params);
    else if (pathname === '/offers') content = renderOffersPage();
    else if (pathname === '/why-ads') content = renderWhyPage();
    else if (pathname === '/how-it-works') content = renderHowPage();
    else if (pathname === '/availability') content = renderAvailabilityPage();
    else if (pathname === '/about') content = renderAboutPage();
    else if (pathname === '/support') content = renderSupportPage(params);
    else if (pathname === '/connect') content = renderConnectPage(params);
    else content = renderNotFound();

    app.innerHTML = renderHeader(pathname, state.menuOpen, state.dropdown) + `<main class="route-shell" id="route-shell">${content}</main>` + renderFooter() + renderSticky() + renderChatbot();
    initReveals();
    requestAnimationFrame(() => window.scrollTo(0,0));
    syncHeaderScroll();
    bindDynamicState();
  }

  function navigate(path) {
    const next = path.startsWith('/') ? path : '/' + path;
    const current = IS_FILE ? ((window.location.hash || '#/').slice(1) || '/') : (window.location.pathname + window.location.search);
    if (next === current) { window.scrollTo({top:0,behavior:'smooth'}); return; }
    if (IS_FILE) {
      window.history.pushState({}, '', `#${next}`);
    } else {
      window.history.pushState({}, '', next);
    }
    state.path = next; state.menuOpen = false; state.dropdown = null;
    renderPage();
  }

  function initReveals() {
    const els = [...document.querySelectorAll('.reveal-item')];
    els.forEach(el => { const d = Number(el.dataset.delay || 0); el.style.transitionDelay = '0ms'; setTimeout(() => el.classList.add('reveal-in'), Math.min(d, 500)); });
    if ('IntersectionObserver' in window) {
      // Keep the original visible-on-scroll effect as an enhancement; elements are already shown after render so no content is hidden permanently.
      const io = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('reveal-in'); io.unobserve(entry.target); } }), {threshold:.18});
      els.forEach(el => io.observe(el));
    } else els.forEach(el => el.classList.add('reveal-in'));
  }

  function syncHeaderScroll() {
    const header = document.getElementById('site-header');
    if (header) header.classList.toggle('site-header-scrolled', window.scrollY > 12);
  }

  function renderChatbot() {
    const messages = state.chatMessages.map(m => `<div class="ads-chatbot-message ${m.sender === 'user' ? 'user-message' : 'bot-message'}">${esc(m.text).replace(/\n/g,'<br>')}</div>`).join('');
    return `<div class="ads-chatbot" style="display:${state.chatbotOpen ? 'flex' : 'none'}"><div class="ads-chatbot-header"><div><strong>ADS Assistant</strong><span>Online • Here to help</span></div><button type="button" id="chat-close" aria-label="Close chatbot">${icon('X',20)}</button></div><div class="ads-chatbot-body"><div class="ads-chatbot-messages" id="chat-messages">${messages}</div><div class="ads-chatbot-quick"><button type="button" data-chat="Internet Plans">📶 Internet Plans</button><button type="button" data-chat="TV + OTT Plans">📺 TV + OTT Plans</button><button type="button" data-chat="New Connection">🏠 New Connection</button><button type="button" data-chat="Check Availability">📍 Check Availability</button><button type="button" data-chat="Support">🔧 Support</button></div><div class="ads-chatbot-input"><input id="chat-input" type="text" placeholder="Ask ADS Assistant..." value=""><button type="button" id="chat-send">Send</button></div></div></div><button type="button" class="ads-chatbot-float" id="chat-toggle" aria-label="Open ADS Assistant">${state.chatbotOpen ? icon('X',25) : '💬'}</button>`;
  }

  function bindDynamicState() {
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function validateCallback() {
    const f = state.callback;
    const errs = {};
    if (!f.name.trim()) errs.name = 'Enter your full name';
    if (!/^[6-9]\d{9}$/.test(f.mobile.trim())) errs.mobile = 'Enter a valid 10-digit mobile number';
    if (!f.area.trim()) errs.area = 'Enter your area or pincode';
    if (!f.plan) errs.plan = 'Select an interested plan';
    return errs;
  }

  async function submitLead(payload) {
  await fetch(
    "https://script.google.com/macros/s/AKfycbwcXd8dcKqu6AB86k2TVB8TsQWsX6VbwShG_pXLV3Ew0DZqVVoicd8WjoULJfbJju72/exec",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    }
  );

  return { success: true };
}

  document.addEventListener('click', async (e) => {
    const routeBtn = e.target.closest('[data-route]');
    if (routeBtn) { e.preventDefault(); navigate(routeBtn.dataset.route); return; }

    const toggle = e.target.closest('[data-dropdown-toggle]');
    if (toggle) { e.stopPropagation(); state.dropdown = state.dropdown === toggle.dataset.dropdownToggle ? null : toggle.dataset.dropdownToggle; renderPage(); return; }

    if (e.target.closest('#menu-toggle')) { state.menuOpen = !state.menuOpen; renderPage(); return; }
    if (e.target.closest('#chat-toggle')) { state.chatbotOpen = !state.chatbotOpen; renderPage(); return; }
    if (e.target.closest('#chat-close')) { state.chatbotOpen = false; renderPage(); return; }

    const quick = e.target.closest('[data-chat]');
    if (quick) { sendChat(quick.dataset.chat); return; }

    const tab = e.target.closest('[data-plan-tab]');
    if (tab) { setPlanTab(tab.dataset.planTab); return; }

    const faq = e.target.closest('.faq-q');
    if (faq) {
      const item = faq.closest('.faq-item');
      document.querySelectorAll('.faq-item').forEach(x => { if (x !== item) { x.querySelector('.faq-a-wrap')?.classList.remove('faq-a-open'); x.querySelector('.faq-chevron')?.classList.remove('faq-chevron-open'); x.querySelector('.faq-q')?.setAttribute('aria-expanded','false'); } });
      const wrap = item.querySelector('.faq-a-wrap'); const chev = item.querySelector('.faq-chevron'); const open = !wrap.classList.contains('faq-a-open'); wrap.classList.toggle('faq-a-open',open); chev?.classList.toggle('faq-chevron-open',open); faq.setAttribute('aria-expanded', String(open)); return;
    }

    if (state.dropdown && !e.target.closest('.nav-dropdown')) { state.dropdown = null; renderPage(); }
  });

  document.addEventListener('input', (e) => {
    if (e.target.id === 'pincode-input') { state.pincode = e.target.value; state.pinResult = null; }
    if (e.target.id === 'callback-name') state.callback.name = e.target.value;
    if (e.target.id === 'callback-mobile') state.callback.mobile = e.target.value;
    if (e.target.id === 'callback-area') state.callback.area = e.target.value;
    if (e.target.id === 'connect-name' || e.target.id === 'connect-mobile' || e.target.id === 'connect-area') {
      // Connect form is submitted directly below; values remain in DOM until submit.
    }
  });
  document.addEventListener('change', (e) => { if (e.target.id === 'callback-plan') state.callback.plan = e.target.value; });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && state.dropdown) { state.dropdown = null; renderPage(); } if (e.key === 'Enter' && e.target.id === 'chat-input') { e.preventDefault(); sendChat(e.target.value); } });
  document.addEventListener('submit', async (e) => {
    if (e.target.id === 'pincode-form') {
      e.preventDefault();
      const p = state.pincode.trim();
      const result = document.getElementById('pincode-result');
      if (!p || !/^\d{6}$/.test(p)) { result.innerHTML = '<p class="form-error">Please enter a valid area or pincode.</p>'; return; }
      try {
        const match = PINCODES[p];
        result.innerHTML = match?.available ? `<p class="form-success">${icon('Check',14)} ADS Broadband is available in ${esc(match.location)}.</p>` : '<p class="form-error">Sorry, ADS Broadband is not currently available in this area.</p>';
      } catch (err) { console.error('Pincode check error:', err); result.innerHTML = '<p class="form-error">Unable to check availability. Please try again.</p>'; }
      return;
    }

    if (e.target.id === 'callback-form') {
      e.preventDefault();
      const errs = validateCallback();
      Object.entries({name:'callback-name-error',mobile:'callback-mobile-error',area:'callback-area-error',plan:'callback-plan-error'}).forEach(([key,id]) => { const el=document.getElementById(id); if (el) el.textContent=errs[key]||''; });
      if (Object.keys(errs).length) return;
      const submitBtn = document.getElementById('callback-submit'); submitBtn.disabled = true; submitBtn.textContent='Submitting...'; state.submitting=true;
      try {
        await submitLead({
          name: state.callback.name,
          mobile: state.callback.mobile,
          area: state.callback.area,
          plan: state.callback.plan,
          source: "Request a Call Back"
        });
        state.submitted = true;
        document.getElementById('callback-container').innerHTML = `<p class="form-success">${icon('Check',16)} Thanks ${esc(state.callback.name.split(' ')[0] || '')}, our team will call you shortly.</p>`;
      } catch (err) {
        console.error('Lead submission error:', err);
        submitBtn.disabled=false; submitBtn.textContent='Get a Free Callback';
        const p=document.createElement('p'); p.className='form-error'; p.textContent='Unable to submit your request. Please try again.'; submitBtn.insertAdjacentElement('beforebegin',p);
      } finally { state.submitting=false; }
      return;
    }

    if (e.target.id === 'connect-form') {
      e.preventDefault();
      const name=document.getElementById('connect-name').value;
      const mobile=document.getElementById('connect-mobile').value;
      const area=document.getElementById('connect-area').value;
      const params=parseLocation().params; const plan=params.get('plan') || 'ADS Broadband connection';
      const err=document.getElementById('connect-error');
      if (!name.trim() || !/^[6-9]\d{9}$/.test(mobile.trim()) || !area.trim()) { err.textContent='Please enter your name, valid 10-digit mobile number and area/pincode.'; return; }
      const btn=e.target.querySelector('button[type="submit"]'); btn.disabled=true; btn.textContent='Submitting...';
      try {
  await submitLead({
    name: name.trim(),
    mobile: mobile.trim(),
    area: area.trim(),
    plan,
    source: "New Connection"
  }); document.getElementById('connect-form-container').innerHTML=`<div class="form-success large-success">${icon('Check',22)} Thanks ${esc(name.split(' ')[0] || '')}. Your request is captured locally for this demo.</div>`; }
      catch (ex) { console.error('New connection submission error:',ex); btn.disabled=false; btn.textContent='Request New Connection'; err.textContent='Unable to submit your request. Please try again.'; }
    }
  });

  function setPlanTab(tab) {
    const { pathname } = parseLocation();
    // The home page also contains the plans section, so the same one-click tab
    // interaction must work there without navigating or reloading the page.
    const section = document.querySelector('.plans-section');
    if (!section) return;
    const showHeading = pathname === '/';
    const temp = document.createElement('div');
    temp.innerHTML = renderPlans(tab, showHeading);
    const next = temp.firstElementChild;
    if (!next) return;
    section.replaceWith(next);
    initReveals();
  }

  function sendChat(text) {
  const userText = (text || '').trim();
  if (!userText) return;

  state.chatMessages.push(
    { sender: 'user', text: userText },
    { sender: 'bot', text: botReply(userText) }
  );

  const chatMessages = document.getElementById('chat-messages');

  if (chatMessages) {
    chatMessages.innerHTML = state.chatMessages
      .map(
        (m) =>
          `<div class="ads-chatbot-message ${
            m.sender === 'user' ? 'user-message' : 'bot-message'
          }">${esc(m.text).replace(/\n/g, '<br>')}</div>`
      )
      .join('');

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  const input = document.getElementById('chat-input');
  if (input) input.value = '';
}


  window.addEventListener('popstate', () => { state.path=window.location.pathname+window.location.search; state.menuOpen=false; state.dropdown=null; renderPage(); });
  window.addEventListener('scroll', syncHeaderScroll, { passive:true });
  document.addEventListener('pointerdown', (e) => {
    if (state.dropdown && !e.target.closest('.nav-dropdown')) { state.dropdown=null; renderPage(); }
  });

  // Initial render — no full page reload for internal navigation.
  renderPage();
})();
