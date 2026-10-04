// Every homepage photo exists at 1000px (`-m`) and at its original width.
const originals = {
  four: 2400,
  brindisi: 2400,
  'calzone-mains': 2000,
  'mains-pizza': 1600,
  'carbonara-nuit': 2000,
  tiramisu: 1400,
  'margherita-gros': 2000,
  burrata: 1600,
  lasagne: 1600,
  pomodori: 1600,
  vini: 1600,
  'salle-nuit': 2400,
  habituee: 2000,
  cuisinier: 2000,
  filante: 2000,
  herbes: 1600,
} as const;

export type PhotoName = keyof typeof originals;

export const photo = (name: PhotoName) => ({
  src: `/img/${name}.jpg`,
  srcset: `/img/${name}-m.jpg 1000w, /img/${name}.jpg ${originals[name]}w`,
});
