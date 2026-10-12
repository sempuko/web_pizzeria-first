// Shared page state: smooth scroll on desktop, motion preferences, and a « page is ready » signal
// that the hero waits for (after the loader, or straight away when there is none).
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
export const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const desktop = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');

// Phones keep their native scroll: it already has momentum, and touch must feel direct.
export const lenis = !reduce.matches && desktop.matches ? new Lenis({ lerp: 0.1, autoRaf: true, anchors: true }) : null;

export function scrollToTarget(target: HTMLElement) {
  if (lenis) lenis.scrollTo(target, { duration: 1.1 });
  else target.scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth' });
}

export function lockScroll(locked: boolean) {
  if (lenis) locked ? lenis.stop() : lenis.start();
  document.documentElement.style.overflow = locked ? 'hidden' : '';
}

export function whenReady(run: () => void) {
  if (document.documentElement.dataset.ready) run();
  else document.addEventListener('mmx:ready', run, { once: true });
}

export function markReady() {
  if (document.documentElement.dataset.ready) return;
  document.documentElement.dataset.ready = '1';
  document.dispatchEvent(new Event('mmx:ready'));
}

/** Runs `onFrame` on every animation frame while `el` is on screen and the tab is visible. */
export function whileVisible(el: Element, onFrame: (now: number) => void, margin = '0px') {
  let visible = false;
  let frame = 0;
  const loop = (now: number) => {
    onFrame(now);
    frame = requestAnimationFrame(loop);
  };
  const sync = () => {
    const run = visible && !document.hidden;
    if (run && !frame) frame = requestAnimationFrame(loop);
    if (!run && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };
  new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      sync();
    },
    { rootMargin: margin },
  ).observe(el);
  document.addEventListener('visibilitychange', sync);
}
