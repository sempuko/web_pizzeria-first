// Two underground effects, both black and white only:
// 1. glitch(): a short burst of horizontal slices torn off an element and shifted sideways, like a
//    corrupted video frame. The slices are snapshots (cloneNode), shown for a few frames, then removed.
// 2. scramble(): headings decode from noise into their text when they arrive, like a terminal.
import { reduce } from './scroll';

const rand = (a: number, b: number) => a + Math.random() * (b - a);

/** One burst: three frames of 2–4 torn slices, ~200 ms in all. */
export function glitch(el: HTMLElement) {
  if (reduce.matches || el.dataset.glitching) return;
  el.dataset.glitching = '1';
  const host = el.parentElement!;
  const box = el.getBoundingClientRect();
  const hostBox = host.getBoundingClientRect();
  const layer = document.createElement('div');
  layer.className = 'glitch-layer';
  layer.setAttribute('aria-hidden', 'true');
  Object.assign(layer.style, {
    position: 'absolute',
    left: `${box.left - hostBox.left + host.scrollLeft}px`,
    top: `${box.top - hostBox.top + host.scrollTop}px`,
    width: `${box.width}px`,
    height: `${box.height}px`,
    pointerEvents: 'none',
    zIndex: '3',
  });
  host.append(layer);

  const frame = () => {
    layer.replaceChildren();
    const n = Math.round(rand(2, 4));
    for (let i = 0; i < n; i++) {
      const slice = el.cloneNode(true) as HTMLElement;
      slice.removeAttribute('id');
      slice.querySelectorAll('[id]').forEach((c) => c.removeAttribute('id'));
      const top = rand(0, 88);
      const h = rand(3, 16);
      Object.assign(slice.style, {
        position: 'absolute',
        inset: '0',
        margin: '0',
        clipPath: `inset(${top}% 0 ${Math.max(0, 100 - top - h)}% 0)`,
        transform: `translateX(${rand(-4, 4).toFixed(2)}%)`,
      });
      // One slice in three is the negative, like a dropped frame.
      if (Math.random() < 0.34) {
        slice.style.background = 'currentColor';
        slice.style.mixBlendMode = 'difference';
      }
      layer.append(slice);
    }
  };

  frame();
  setTimeout(frame, 70);
  setTimeout(frame, 140);
  setTimeout(() => {
    layer.remove();
    delete el.dataset.glitching;
  }, 210);
}

/** Bursts at random intervals while the element is on screen and the tab is visible. */
export function glitchEvery(el: HTMLElement, minMs = 3200, maxMs = 7000) {
  if (reduce.matches) return;
  let visible = false;
  let timer = 0;
  const schedule = () => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (visible && !document.hidden) glitch(el);
      schedule();
    }, rand(minMs, maxMs));
  };
  new IntersectionObserver(([entry]) => (visible = entry.isIntersecting)).observe(el);
  schedule();
}

const NOISE = 'X#/\\<>_:—01MINAX';

/** Decodes every text node inside `el`, left to right, in ~600 ms. Layout width may breathe a little. */
export function scramble(el: HTMLElement) {
  if (reduce.matches) return;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: { node: Text; text: string }[] = [];
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (node.data.trim()) nodes.push({ node, text: node.data });
  }
  const total = nodes.reduce((n, t) => n + t.text.length, 0);
  if (!total) return;
  const start = performance.now();
  const duration = 520 + total * 12;
  let last = 0;
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    // ~30 fps is enough for noise, and keeps the characters readable as characters.
    if (now - last > 32 || p === 1) {
      last = now;
      let offset = 0;
      for (const { node, text } of nodes) {
        let out = '';
        for (let i = 0; i < text.length; i++) {
          const revealAt = (offset + i) / total;
          const c = text[i];
          out += p >= revealAt * 0.85 + 0.15 || c === ' ' ? c : NOISE[Math.floor(Math.random() * NOISE.length)];
        }
        node.data = out;
        offset += text.length;
      }
    }
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/** Every `.head` on the page decodes once, when it first comes into view. */
export function scrambleHeads(root: ParentNode = document) {
  if (reduce.matches) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        io.unobserve(entry.target);
        scramble(entry.target as HTMLElement);
      }
    },
    { rootMargin: '0px 0px -15% 0px' },
  );
  root.querySelectorAll<HTMLElement>('.head').forEach((h) => io.observe(h));
}
