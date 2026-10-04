// 1. Load ahead: lazy photos start downloading about two screens before they arrive,
// so a reveal never opens on an empty frame.
const lazy = [...document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]')];

const loader = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      (entry.target as HTMLImageElement).loading = 'eager';
      loader.unobserve(entry.target);
    }
  },
  { rootMargin: '0px 0px 220% 0px' },
);

lazy.forEach((img) => loader.observe(img));

// Then, once the hero's entrance is over, warm the rest of the page in reading order,
// a couple at a time, so nothing competes with the first screen.
window.addEventListener('load', () => {
  window.setTimeout(() => {
    const queue = lazy.filter((img) => img.loading === 'lazy');
    const next = () => {
      const img = queue.shift();
      if (!img) return;
      img.loading = 'eager';
      if (img.complete) {
        next();
      } else {
        img.addEventListener('load', next, { once: true });
        img.addEventListener('error', next, { once: true });
      }
    };
    next();
    next();
  }, 1600);
});

// 2. Reveal: elements marked [data-reveal] get .is-in once, as they enter the screen.
// A curtain waits until its photo is decoded, so it opens on the picture, not on a gap.
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

const ready = async (el: HTMLElement) => {
  const img = el.dataset.reveal === 'curtain' ? el.querySelector('img') : null;
  if (!img) return;
  img.loading = 'eager';
  await img.decode().catch(() => undefined);
};

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLElement;
      observer.unobserve(el);
      ready(el).then(() => el.classList.add('is-in'));
    }
  },
  { threshold: 0, rootMargin: '0px 0px -4% 0px' },
);

targets.forEach((el) => observer.observe(el));

// Parallax, only for the photos that hang across a section edge: it makes the layering
// legible. Desktop with a mouse, never under reduced motion. A few pixels, no more.
const layers = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
const allowed = window.matchMedia('(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)');

if (layers.length) {
  let ticking = false;
  const current = new Map<HTMLElement, number>();

  const update = () => {
    ticking = false;
    const mid = window.innerHeight / 2;
    for (const el of layers) {
      if (!allowed.matches) {
        el.style.transform = '';
        current.set(el, 0);
        continue;
      }
      // Measure the untransformed position: subtract the offset already applied.
      const r = el.getBoundingClientRect();
      const top = r.top - (current.get(el) ?? 0);
      if (r.bottom < -200 || top > window.innerHeight + 200) continue;
      const offset = (top + r.height / 2 - mid) * Number(el.dataset.parallax ?? 0);
      current.set(el, offset);
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    }
  };

  const request = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  allowed.addEventListener('change', request);
  update();
}
