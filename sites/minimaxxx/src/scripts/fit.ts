// Sets an element's font-size so its single line fills the width of its parent exactly,
// like type pasted edge to edge on a flyer. Re-fits on resize and once the web fonts are in.

export function fitToWidth(el: HTMLElement, { max = Infinity }: { max?: number } = {}) {
  const parent = el.parentElement;
  if (!parent) return;
  const fit = () => {
    const style = getComputedStyle(parent);
    const available = parent.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
    el.style.fontSize = '100px';
    const width = el.scrollWidth;
    if (!width) return;
    el.style.fontSize = `${Math.min(max, (100 * available) / width).toFixed(2)}px`;
  };
  fit();
  document.fonts.ready.then(fit);
  // Only a change of width matters; the height changes because of the fit itself.
  let lastWidth = parent.clientWidth;
  new ResizeObserver(() => {
    if (parent.clientWidth === lastWidth) return;
    lastWidth = parent.clientWidth;
    fit();
  }).observe(parent);
}
