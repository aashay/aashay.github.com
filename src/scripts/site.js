// All client-side behavior lives here. Vanilla JS, no dependencies.
// Goal: near-zero JS, mobile-first.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ----- Scroll reveals -----
function initReveals() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  if (reduceMotion || typeof IntersectionObserver === 'undefined') {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => io.observe(el));
}

// ----- Email assembly -----
// Address is base64-split so no scraper finds a usable string in the static HTML.
function initEmail() {
  const el = document.getElementById('contact-email');
  if (!el) return;
  const u = atob('YWFzaGF5ZA==');
  const d = atob('Z21haWwuY29t');
  const address = u + '@' + d;
  el.textContent = address;
  el.setAttribute('href', 'mailto:' + address);
}

// ----- Konami code easter egg -----
function initKonami() {
  const SEQ = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a',
  ];
  let i = 0;

  window.addEventListener('keydown', (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    const expected = SEQ[i];
    if (key === expected) {
      i += 1;
      if (i === SEQ.length) {
        i = 0;
        triggerEgg();
      }
    } else {
      i = key === SEQ[0] ? 1 : 0;
    }
  });
}

let eggTimer = null;

function triggerEgg() {
  const egg = document.getElementById('easter-egg');
  if (egg) {
    egg.classList.add('is-on');
    if (eggTimer) window.clearTimeout(eggTimer);
    eggTimer = window.setTimeout(() => egg.classList.remove('is-on'), 5000);
  }

  if (!reduceMotion) {
    document.body.classList.add('bloom');
    window.setTimeout(() => {
      document.body.classList.remove('bloom');
    }, 1400);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initReveals();
    initEmail();
    initKonami();
  });
} else {
  initReveals();
  initEmail();
  initKonami();
}
