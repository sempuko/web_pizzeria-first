// Page-wide motion:
// 0. inertial smooth scroll on desktop (Lenis);
// 1. reveals that play once when an element arrives on screen ([data-reveal]);
// 2. spring tilts that follow the pointer on physical objects ([data-tilt]);
// 3. parallax depth between paintings, snapshots and the page ([data-parallax]);
// 4. magnetic buttons that lean toward the pointer ([data-magnetic]);
// 5. numbers that count up when they arrive ([data-count]);
// 6. the press quote, whose words light up as it is read ([data-scroll-words]).
// Everything that moves uses transform/translate/opacity only, and nothing moves under reduced motion.
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { spring } from './spring';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const desktop = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');

// 0. Smooth scroll ------------------------------------------------------------
// Phones keep their native scroll: it already has momentum, and touch must feel direct.

if (!reduce.matches && desktop.matches) {
  new Lenis({ lerp: 0.1, autoRaf: true, anchors: { offset: -76 } });
}

// 1. Reveals ------------------------------------------------------------------

const io = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      io.unobserve(entry.target);
      entry.target.classList.add('is-in');
    }
  },
  { rootMargin: '0px 0px -12% 0px' },
);

document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
  if (el.dataset.reveal === 'rows') {
    [...el.children].forEach((child, i) => (child as HTMLElement).style.setProperty('--i', String(i)));
  }
  io.observe(el);
});

// 2. Tilts --------------------------------------------------------------------
// The value is a maximum in degrees. data-tilt-area lets a larger zone drive the tilt
// (the whole façade moves the sign, not just the sign itself).

document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
  const max = Number(el.dataset.tilt) || 4;
  const area = (el.dataset.tiltArea && el.closest<HTMLElement>(el.dataset.tiltArea)) || el;
  let rx = 0;
  let ry = 0;
  const paint = () => {
    el.style.transform = rx || ry ? `perspective(1100px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)` : '';
  };
  const sx = spring((v) => ((rx = v), paint()), { stiffness: 110, damping: 15 });
  const sy = spring((v) => ((ry = v), paint()), { stiffness: 110, damping: 15 });

  area.addEventListener('pointermove', (e) => {
    if (!finePointer.matches || reduce.matches) return;
    const r = area.getBoundingClientRect();
    sy.set(((e.clientX - r.left) / r.width - 0.5) * max * 2);
    sx.set(-((e.clientY - r.top) / r.height - 0.5) * max * 2);
  });
  area.addEventListener('pointerleave', () => {
    sx.set(0);
    sy.set(0);
  });
});

// 3. Parallax -----------------------------------------------------------------
// Uses the independent `translate` property, so it stacks with reveals and tilts (`transform`).
// Positive values lag behind the page, negative ones run ahead: frames and snapshots separate.

const layers = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
if (layers.length) {
  const offsets = new Map<HTMLElement, number>();
  let queued = false;
  const update = () => {
    queued = false;
    const active = desktop.matches && !reduce.matches;
    const mid = window.innerHeight / 2;
    for (const el of layers) {
      if (!active) {
        el.style.translate = '';
        continue;
      }
      const r = el.getBoundingClientRect();
      const top = r.top - (offsets.get(el) ?? 0);
      if (top > window.innerHeight + 300 || r.bottom < -300) continue;
      const offset = (top + r.height / 2 - mid) * Number(el.dataset.parallax);
      offsets.set(el, offset);
      el.style.translate = `0 ${offset.toFixed(1)}px`;
    }
  };
  const request = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request);
  update();
}

// 4. Magnetic buttons -----------------------------------------------------------
// The booking buttons lean a few pixels toward the pointer, then spring back.

document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
  let x = 0;
  let y = 0;
  const paint = () => (el.style.translate = x || y ? `${x.toFixed(2)}px ${y.toFixed(2)}px` : '');
  const sx = spring((v) => ((x = v), paint()), { stiffness: 220, damping: 16 });
  const sy = spring((v) => ((y = v), paint()), { stiffness: 220, damping: 16 });
  el.addEventListener('pointermove', (e) => {
    if (!finePointer.matches || reduce.matches) return;
    const r = el.getBoundingClientRect();
    sx.set((e.clientX - (r.left + r.width / 2)) * 0.28);
    sy.set((e.clientY - (r.top + r.height / 2)) * 0.4);
  });
  el.addEventListener('pointerleave', () => {
    sx.set(0);
    sy.set(0);
  });
});

// 5. Count up ---------------------------------------------------------------------

const countIo = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    countIo.unobserve(entry.target);
    const el = entry.target as HTMLElement;
    const target = Number(el.dataset.count);
    const decimals = Number(el.dataset.decimals ?? 0);
    const format = (n: number) => n.toFixed(decimals).replace('.', ',');
    if (reduce.matches) {
      el.textContent = format(target);
      continue;
    }
    const delay = Number(el.dataset.delay ?? 0);
    const duration = 1400;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      const t = Math.min(1, Math.max(0, (now - start) / duration));
      // ease-out-quart: fast at first, settling on the real number
      el.textContent = format(target * (1 - (1 - t) ** 4));
      if (t < 1) requestAnimationFrame(tick);
    };
    el.textContent = format(0);
    requestAnimationFrame(tick);
  }
});
document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => countIo.observe(el));

// 6. Quote read on scroll ---------------------------------------------------------

const quote = document.querySelector<HTMLElement>('[data-scroll-words]');
if (quote) {
  const words = [...quote.querySelectorAll<HTMLElement>('.sw')];
  let ticking = false;
  const update = () => {
    ticking = false;
    if (reduce.matches) {
      words.forEach((w) => (w.style.opacity = ''));
      return;
    }
    const r = quote.getBoundingClientRect();
    const vh = window.innerHeight;
    // 0 when the quote's top enters the lower part of the screen, 1 when it reaches the upper third
    const progress = Math.min(1, Math.max(0, (vh * 0.88 - r.top) / (vh * 0.55)));
    const lit = progress * (words.length + 2);
    words.forEach((w, i) => {
      w.style.opacity = (0.16 + 0.84 * Math.min(1, Math.max(0, lit - i))).toFixed(3);
    });
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}
