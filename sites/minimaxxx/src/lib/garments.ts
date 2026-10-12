// Clothes for the bin, drawn as pictograms in the same flat, ISO-sign language as the brand's icons.
// Each shape sits in its own viewBox; w/h are its size in bin units (1 unit ≈ a ninth of the bin's width).
// `cut` paths are punched out with even-odd (pockets, hood opening, fly).

export type Garment = { name: string; vb: [number, number]; w: number; h: number; d: string };

export const garments: Garment[] = [
  {
    name: 'T-shirt',
    vb: [100, 92],
    w: 1.55,
    h: 1.42,
    d: 'M31 4 L41 1 Q50 11 59 1 L69 4 L97 20 L88 38 L76 32 L76 91 L24 91 L24 32 L12 38 L3 20 Z',
  },
  {
    name: 'Hoodie',
    vb: [100, 100],
    w: 1.7,
    h: 1.7,
    d:
      'M33 16 Q35 2 50 2 Q65 2 67 16 L85 23 L98 74 L86 77 L74 40 L74 98 L26 98 L26 40 L14 77 L2 74 L15 23 Z ' +
      'M43 12 Q50 24 57 12 Q50 7 43 12 Z ' +
      'M37 70 L63 70 L67 85 L33 85 Z',
  },
  {
    name: 'Jean',
    vb: [64, 100],
    w: 1.05,
    h: 1.65,
    d: 'M6 1 L58 1 L63 99 L39 99 L32 32 L25 99 L1 99 Z M6 7 L58 7 L58 9 L6 9 Z',
  },
  {
    name: 'Veste',
    vb: [100, 100],
    w: 1.75,
    h: 1.75,
    d:
      'M33 4 L43 2 L50 16 L57 2 L67 4 L86 13 L98 76 L85 79 L74 34 L74 98 L26 98 L26 34 L15 79 L2 76 L14 13 Z ' +
      'M49 18 L51 18 L51 98 L49 98 Z ' +
      'M30 62 L42 62 L42 66 L30 66 Z M58 62 L70 62 L70 66 L58 66 Z',
  },
  {
    name: 'Robe',
    vb: [70, 100],
    w: 1.05,
    h: 1.55,
    d: 'M20 1 L26 1 L28 12 Q35 17 42 12 L44 1 L50 1 L52 22 L47 34 L69 99 L1 99 L23 34 L18 22 Z',
  },
  {
    name: 'Jupe',
    vb: [80, 70],
    w: 1.15,
    h: 1.0,
    d: 'M22 1 L58 1 L58 7 L79 69 L1 69 L22 7 Z',
  },
  {
    name: 'Short',
    vb: [80, 64],
    w: 1.15,
    h: 0.92,
    d: 'M8 1 L72 1 L79 56 L48 62 L40 26 L32 62 L1 56 Z',
  },
  {
    name: 'Casquette',
    vb: [100, 56],
    w: 1.2,
    h: 0.68,
    d: 'M6 44 Q6 4 42 4 Q78 4 78 44 Z M42 44 L99 44 Q99 55 80 55 L42 55 Z',
  },
  {
    name: 'Basket',
    vb: [100, 54],
    w: 1.3,
    h: 0.72,
    d: 'M2 34 L2 10 Q2 3 10 3 L28 3 Q34 20 50 22 L80 28 Q98 32 98 44 L98 53 L2 53 Z M2 44 L98 44 L98 46 L2 46 Z',
  },
  {
    name: 'Tote bag',
    vb: [80, 100],
    w: 1.0,
    h: 1.3,
    d: 'M6 36 L74 36 L79 99 L1 99 Z M24 36 Q24 4 40 4 Q56 4 56 36 L50 36 Q50 11 40 11 Q30 11 30 36 Z',
  },
  {
    name: 'Chemise',
    vb: [100, 100],
    w: 1.6,
    h: 1.6,
    d:
      'M33 6 L42 2 L50 12 L58 2 L67 6 L84 14 L97 72 L85 75 L74 36 L74 98 L26 98 L26 36 L15 75 L3 72 L16 14 Z ' +
      'M49 14 L51 14 L51 98 L49 98 Z',
  },
];

// Price tags: the bins at every edition, and the 10 € ceiling.
export const tags = ['1 €', '2 €', '3 €', 'Prix libre', '1 €', '2 €', '3 €', '5 €', '7 €', '10 €'];
