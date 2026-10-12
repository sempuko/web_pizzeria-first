// The brand's pictograms, redrawn as SVG from their PNGs (reference/brand-assets): packaging and safety
// signs used as fashion graphics. Inner markup only; the <svg> wrapper sets currentColor.

type Picto = { viewBox: string; body: string };

const line = (d: string, w: number) =>
  `<path d="${d}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="butt" stroke-linejoin="miter"/>`;

export const pictos = {
  // CE marking: two arcs of the same circle, the E gets its bar.
  ce: {
    viewBox: '0 0 112 72',
    body: line('M50 8 A28 28 0 1 0 50 64', 9) + line('M104 8 A28 28 0 1 0 104 64', 9) + line('M78 36 H100', 9),
  },
  // Hot surface warning.
  hot: {
    viewBox: '0 0 100 90',
    body:
      line('M50 7 L94 84 H6 Z', 6) +
      line('M37 36 q-6 7 0 14 t0 14', 5) +
      line('M50 36 q-6 7 0 14 t0 14', 5) +
      line('M63 36 q-6 7 0 14 t0 14', 5) +
      line('M30 74 H70', 5),
  },
  // Green Dot: two arrows chasing each other inside a ring.
  recycle: {
    viewBox: '0 0 100 100',
    body:
      line('M50 4 A46 46 0 1 1 49.9 4', 6) +
      '<path fill="currentColor" d="M50 16 A34 34 0 0 0 50 84 A17 17 0 0 1 50 50 A17 17 0 0 0 50 16 Z"/>' +
      '<path fill="currentColor" d="M44 8 L66 16 L44 26 Z"/>',
  },
  // Country oval sticker.
  org: {
    viewBox: '0 0 124 70',
    body:
      '<ellipse cx="62" cy="35" rx="58" ry="31" fill="none" stroke="currentColor" stroke-width="5"/>' +
      '<text x="62" y="47" text-anchor="middle" font-family="Archivo, Helvetica, Arial, sans-serif" font-weight="700" font-size="34" letter-spacing="-1" fill="currentColor">ORG</text>',
  },
  globe: {
    viewBox: '0 0 100 100',
    body:
      line('M50 4 A46 46 0 1 1 49.9 4', 5) +
      line('M50 4 C22 30 22 70 50 96 C78 70 78 30 50 4', 5) +
      line('M50 4 V96', 5) +
      line('M4 50 H96', 5) +
      line('M12 27 H88', 5) +
      line('M12 73 H88', 5),
  },
  // Spiky four-point star from the deck's Talk Sessions page. Concave sides, a little off-balance.
  star: {
    viewBox: '0 0 100 100',
    body: '<path fill="currentColor" d="M52 0 C53 31 61 43 100 47 C63 52 55 61 51 100 C46 66 39 56 0 51 C37 45 47 35 52 0 Z"/>',
  },
  // ISO-style person, the figure of their « class » and « bin » pictograms.
  person: {
    viewBox: '0 0 60 140',
    body:
      '<circle cx="30" cy="14" r="12" fill="currentColor"/>' +
      '<path fill="currentColor" d="M14 32 H46 Q52 32 52 38 V80 H44 V136 H33 V88 H27 V136 H16 V80 H8 V38 Q8 32 14 32 Z"/>',
  },
} satisfies Record<string, Picto>;

export type PictoName = keyof typeof pictos;
