/* ==========================================================
   Servis Xhelo A&N – script.js
   ========================================================== */

/* ---------- Translations (Shqip / English / Македонски) ---------- */
const I18N = {
  sq: {
    'meta.title': 'Servis Xhelo A&N | Elektrikë auto, drita dhe klima në Gostivar',
    'meta.desc': 'Servis në Gostivar për elektrikë auto, starterë, alternatorë, akumulatorë, ECU, dritat dhe klimën e veturave. Telefononi 075 296 337.',
    'skip': 'Kalo te përmbajtja',
    'nav.services': 'Shërbimet',
    'nav.gallery': 'Galeria',
    'nav.about': 'Rreth nesh',
    'nav.contact': 'Kontakti',
    'lang.aria': 'Gjuha',
    'menu.aria': 'Hap menunë',
    'cta.call': 'Telefono',
    'cta.aria': 'Zgjidh numrin për të telefonuar',
    'hero.title': 'Auto Elektrike & Servis AC',
    'hero.text': 'Servis Xhelo A&N në Gostivar: elektrikë auto, starterë, alternatorë, ECU, rregullim i dritave dhe mbushje e klimës.',
    'hero.wa': 'Shkruaj në WhatsApp',
    'services.title': 'Çfarë riparojmë',
    'services.intro': 'Sillni veturën me defektin; ne e gjejmë shkakun dhe e rregullojmë.',
    's1.t': 'Diagnostikim dhe ECU',
    's1.p': 'Gjejmë defektet me pajisje diagnostike dhe riparojmë ECU, sensorët dhe instalimet elektrike.',
    's2.t': 'Dritat dhe ndriçimi i veturave',
    's2.p': 'Reparim dhe rregullim i dritave: riparim i fenerëve, ndërrim llambash, LED dhe xenon, rregullim i drejtimit të ndriçimit.',
    's3.t': 'Klima: riparim dhe mbushje gazi',
    's3.p': 'Kontrollojmë për rrjedhje, ndërrojmë kompresorin ose kondensatorin, pastrojmë sistemin dhe e mbushim me gaz.',
    's4.t': 'Starter, alternator dhe akumulator',
    's4.p': 'Riparim dhe ndërrim i startereve dhe alternatorëve, testim dhe ndërrim i akumulatorit, si dhe defekte të tjera të elektrikës.',
    'gallery.title': 'Nga puna jonë',
    'gallery.intro': 'Disa nga punët e fundit në servis. Kliko një foto për ta zmadhuar.',
    'about.title': 'Rreth Servis Xhelo A&N',
    'about.text': 'Jemi servis në Gostivar i specializuar për elektrikë auto: starterë, alternatorë, akumulatorë, ECU, dritat dhe klimën e veturave. Punojmë me pajisje profesionale dhe i shpjegojmë klientit çfarë ka defekt dhe sa kushton para se të nisë puna.',
    'about.p1t': 'Pajisje profesionale',
    'about.p1p': 'Diagnostikim kompjuterik dhe vegla të përshtatura për çdo markë.',
    'about.p2t': 'Teknikë me përvojë',
    'about.p2p': 'Defekti gjendet shpejt dhe riparohet siç duhet.',
    'about.p3t': 'Shërbim i besueshëm',
    'about.p3p': 'Çmim i qartë para punës dhe afate që respektohen.',
    'contact.title': 'Na kontaktoni',
    'contact.intro': 'Telefononi ose na shkruani; përgjigjemi sa më shpejt.',
    'contact.phone': 'Telefon',
    'contact.address': 'Adresa',
    'contact.directions': 'Merr udhëzimet',
    'contact.hours': 'Orari i punës',
    'contact.h1': 'E hënë – E premte: 08:00 – 17:00',
    'contact.h2': 'E shtunë: 08:00 – 14:00',
    'contact.h3': 'E diel: mbyllur',
    'footer.rights': 'Të gjitha të drejtat e rezervuara.'
  },

  en: {
    'meta.title': 'Servis Xhelo A&N | Auto electrics, headlights and AC in Gostivar',
    'meta.desc': 'Garage in Gostivar for auto electrics, starters, alternators, batteries, ECU, car lights and AC. Call 075 296 337.',
    'skip': 'Skip to content',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.about': 'About us',
    'nav.contact': 'Contact',
    'lang.aria': 'Language',
    'menu.aria': 'Open menu',
    'cta.call': 'Call',
    'cta.aria': 'Choose a number to call',
    'hero.title': 'Auto Electrics & AC Service',
    'hero.text': 'Servis Xhelo A&N in Gostivar: auto electrics, starters, alternators, ECU, headlight repair and AC recharge.',
    'hero.wa': 'Message on WhatsApp',
    'services.title': 'What we repair',
    'services.intro': 'Bring the car in with the fault; we find the cause and fix it.',
    's1.t': 'Diagnostics and ECU',
    's1.p': 'We find faults with diagnostic equipment and repair ECUs, sensors and electrical wiring.',
    's2.t': 'Car lighting and headlights',
    's2.p': 'Repair and adjustment of lights: headlight units, bulb replacement, LED and xenon, and beam alignment.',
    's3.t': 'AC repair and gas recharge',
    's3.p': 'We check for leaks, replace the compressor or condenser, clean the system and recharge it with gas.',
    's4.t': 'Starters, alternators and batteries',
    's4.p': 'Repair and replacement of starters and alternators, battery testing and replacement, and other electrical faults.',
    'gallery.title': 'Our work',
    'gallery.intro': 'A few recent jobs from the workshop. Click a photo to enlarge it.',
    'about.title': 'About Servis Xhelo A&N',
    'about.text': 'We are a garage in Gostivar specialising in auto electrics: starters, alternators, batteries, ECU, car lighting and air conditioning. We work with professional equipment and explain to the customer what is wrong and what it will cost before the work starts.',
    'about.p1t': 'Professional equipment',
    'about.p1p': 'Computer diagnostics and tools suited to every make.',
    'about.p2t': 'Experienced technicians',
    'about.p2p': 'The fault is found quickly and repaired properly.',
    'about.p3t': 'Reliable service',
    'about.p3p': 'A clear price before the work and deadlines that are kept.',
    'contact.title': 'Get in touch',
    'contact.intro': 'Call or message us and we will get back to you as soon as we can.',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.directions': 'Get directions',
    'contact.hours': 'Working hours',
    'contact.h1': 'Monday – Friday: 08:00 – 17:00',
    'contact.h2': 'Saturday: 08:00 – 14:00',
    'contact.h3': 'Sunday: closed',
    'footer.rights': 'All rights reserved.'
  },

  mk: {
    'meta.title': 'Servis Xhelo A&N | Автоелектрика, светла и клима во Гостивар',
    'meta.desc': 'Сервис во Гостивар за автоелектрика, анласери, алтернатори, акумулатори, ECU, светла и клима. Јавете се на 075 296 337.',
    'skip': 'Прескокни до содржината',
    'nav.services': 'Услуги',
    'nav.gallery': 'Галерија',
    'nav.about': 'За нас',
    'nav.contact': 'Контакт',
    'lang.aria': 'Јазик',
    'menu.aria': 'Отвори мени',
    'cta.call': 'Јавете се',
    'cta.aria': 'Изберете број за јавување',
    'hero.title': 'Автоелектрика и сервис за клима',
    'hero.text': 'Servis Xhelo A&N во Гостивар: автоелектрика, анласери, алтернатори, ECU, поправка на светла и полнење на клима.',
    'hero.wa': 'Пишете на WhatsApp',
    'services.title': 'Што поправаме',
    'services.intro': 'Донесете го возилото со дефектот; ние ја наоѓаме причината и го поправаме.',
    's1.t': 'Дијагностика и ECU',
    's1.p': 'Ги наоѓаме дефектите со дијагностичка опрема и поправаме ECU, сензори и електрични инсталации.',
    's2.t': 'Светла и осветлување на возила',
    's2.p': 'Поправка и подесување на светла: фарови, замена на сијалици, LED и ксенон, подесување на правецот на осветлување.',
    's3.t': 'Клима: поправка и полнење гас',
    's3.p': 'Проверуваме за протекување, менуваме компресор или кондензатор, го чистиме системот и го полниме со гас.',
    's4.t': 'Анласер, алтернатор и акумулатор',
    's4.p': 'Поправка и замена на анласери и алтернатори, тестирање и замена на акумулатор и други електрични дефекти.',
    'gallery.title': 'Од нашата работа',
    'gallery.intro': 'Неколку неодамнешни работи од сервисот. Кликнете на фотографија за да ја зголемите.',
    'about.title': 'За Servis Xhelo A&N',
    'about.text': 'Сме сервис во Гостивар специјализиран за автоелектрика: анласери, алтернатори, акумулатори, ECU, светла и клима. Работиме со професионална опрема и пред да почне работата му објаснуваме на клиентот што е дефектот и колку чини.',
    'about.p1t': 'Професионална опрема',
    'about.p1p': 'Компјутерска дијагностика и алат за секоја марка.',
    'about.p2t': 'Искусни техничари',
    'about.p2p': 'Дефектот се наоѓа брзо и се поправа како што треба.',
    'about.p3t': 'Доверлива услуга',
    'about.p3p': 'Јасна цена пред работата и рокови што се почитуваат.',
    'contact.title': 'Контактирајте не',
    'contact.intro': 'Јавете се или пишете ни и ќе одговориме што побрзо.',
    'contact.phone': 'Телефон',
    'contact.address': 'Адреса',
    'contact.directions': 'Насоки',
    'contact.hours': 'Работно време',
    'contact.h1': 'Понеделник – петок: 08:00 – 17:00',
    'contact.h2': 'Сабота: 08:00 – 14:00',
    'contact.h3': 'Недела: затворено',
    'footer.rights': 'Сите права се задржани.'
  }
};

/* ---------- Language switcher ---------- */
const langButtons = document.querySelectorAll('.lang-switch button');

function setLang(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const value = dict[el.dataset.i18nAria];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });

  document.title = dict['meta.title'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', dict['meta.desc']);

  langButtons.forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang)));

  try { localStorage.setItem('xhelo-lang', lang); } catch (e) { /* storage unavailable */ }
}

langButtons.forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

let startLang = 'sq';
try {
  const saved = localStorage.getItem('xhelo-lang');
  if (saved && I18N[saved]) startLang = saved;
} catch (e) { /* ignore */ }
setLang(startLang);

/* ---------- Header: scrolled state + mobile menu ---------- */
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

function closeMenu() {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

/* ---------- Call dropdown (two phone numbers) ---------- */
const callToggle = document.getElementById('call-toggle');
const callMenu = document.getElementById('call-menu');

function setCallMenu(open) {
  callMenu.hidden = !open;
  callToggle.setAttribute('aria-expanded', String(open));
}
callToggle.addEventListener('click', e => {
  e.stopPropagation();
  setCallMenu(callMenu.hidden);
});
document.addEventListener('click', e => {
  if (!callMenu.hidden && !callMenu.contains(e.target)) setCallMenu(false);
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!callMenu.hidden) { setCallMenu(false); callToggle.focus(); }
    if (mainNav.classList.contains('open')) { closeMenu(); menuToggle.focus(); }
  }
});

/* ---------- Gallery: missing-photo placeholder + lightbox ---------- */
const items = Array.from(document.querySelectorAll('.g-item'));

items.forEach(item => {
  const img = item.querySelector('img');
  const markMissing = () => item.classList.add('is-missing');
  img.addEventListener('error', markMissing);
  if (img.complete && img.naturalWidth === 0 && img.getAttribute('loading') !== 'lazy') markMissing();
});

const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbCount = document.getElementById('lb-count');
let current = 0;

function showPhoto(index) {
  current = (index + items.length) % items.length;
  const img = items[current].querySelector('img');
  lbImg.src = img.currentSrc || img.src;
  lbImg.alt = img.alt;
  lbCount.textContent = (current + 1) + ' / ' + items.length;
}

items.forEach((item, i) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('is-missing')) return;
    showPhoto(i);
    lightbox.showModal();
  });
});

document.getElementById('lb-close').addEventListener('click', () => lightbox.close());
document.getElementById('lb-prev').addEventListener('click', () => showPhoto(current - 1));
document.getElementById('lb-next').addEventListener('click', () => showPhoto(current + 1));

lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });
lightbox.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') showPhoto(current - 1);
  if (e.key === 'ArrowRight') showPhoto(current + 1);
});

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();