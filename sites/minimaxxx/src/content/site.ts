// Every fact on the page lives here. Sources: minimaxxx.com (texts loaded from their CMS), their 2024 deck,
// LinkedIn, and event listings checked in October 2026 (see BRIEF.md). Items marked VERIFY are to be
// confirmed with the brand before the page goes live.

export const contact = {
  email: 'contact@minimaxxx.com',
  jobs: 'work@minimaxxx.com',
  instagram: 'https://www.instagram.com/minimax.xx/',
  tiktok: 'https://www.tiktok.com/@minimax.xx',
  handle: '@minimax.xx',
};

// Their own words, from the site's CMS (paragraph1 / paragraph2) and the deck.
export const manifesto = {
  quote: 'We fuse fashion, music, and second-hand clothing in dynamic cultural events. Minimaxxx is where avant-garde meets true affordability.',
  lines: [
    'Minimaxxx est une organisation hybride',
    'programmant des événements',
    'd’envergure, fédérateurs',
    'et visionnaires.',
    'Chaque intervention est pensée',
    'comme un happening,',
    'une performance immersive.',
  ],
  finePrint:
    'Minimaxxx rassemble et affirme les valeurs de la seconde main tout en s’affranchissant de l’aspect « vintage » souvent associé aux friperies. Depuis son lancement en septembre 2018, le projet interroge le lien entre seconde main et modernité avec un format d’événement innovant et fédérateur.',
};

export const pillars = [
  {
    title: 'Beaucoup de stock, des prix vraiment accessibles',
    text: 'Les valeurs de base de la friperie : tout notre stock entre 1 € et 10 € maxxximum.',
  },
  {
    title: 'Un espace pour les jeunes designers',
    text: 'Expression, présentation et vente pour les jeunes designers et entrepreneurs de la mode.',
  },
  {
    title: 'Des line-ups qui ne ressemblent à rien d’autre',
    text: 'Pour chaque édition, des DJ-sets et des lives innovants et éclectiques.',
  },
];

// Prices are the same at every edition (all 2026 listings).
export const bins = [
  { price: '1 €', label: 'Bac à prix fixe' },
  { price: '2 €', label: 'Bac à prix fixe' },
  { price: '3 €', label: 'Bac à prix fixe' },
  { price: 'Prix libre', label: 'Bacs adultes et enfants' },
  { price: '10 €', label: 'Maxxximum, sur tout le stock' },
];

export type Stop = {
  dates: string;
  city: string;
  venue: string;
  /** ISO date of the last day, to strike the stop once it has passed. */
  end: string;
};

// 2026 stops found in public listings and on their Instagram. The brand says it tours « every weekend in
// a different city », so this list is partial. VERIFY the full calendar, Dijon's venue and Bordeaux's venue.
export const tour: Stop[] = [
  { dates: '17+18.01', city: 'Paris', venue: 'TLM', end: '2026-01-18' },
  { dates: '17+18.04', city: 'Reims', venue: 'Espace d’Erlon', end: '2026-04-18' },
  { dates: '24—26.04', city: 'Dijon', venue: 'Cité de la Gastronomie', end: '2026-04-26' },
  { dates: '13+14.06', city: 'Saint-Étienne', venue: 'La Commune Mazerat', end: '2026-06-14' },
  // Instagram poster: « PFW — Emerging designers & second hand archive sales », Paris 11e, during Paris Fashion Week.
  { dates: '23—28.06', city: 'Paris', venue: 'Showroom PFW', end: '2026-06-28' },
  { dates: '27+28.06', city: 'Bordeaux', venue: '—', end: '2026-06-28' },
  { dates: '24+25.07', city: 'Nîmes', venue: 'La Coupole', end: '2026-07-25' },
  { dates: '01+02.08', city: 'Béziers', venue: 'Polygone', end: '2026-08-02' },
  { dates: '15+16.08', city: 'Nice', venue: 'CAP3000', end: '2026-08-16' },
  { dates: '21—23.08', city: 'Marseille', venue: 'La Mûrisserie', end: '2026-08-23' },
  { dates: '29+30.08', city: 'Paris', venue: 'TLM', end: '2026-08-30' },
];

// Their first festival, read off their Instagram posters (Oct. 2026). VERIFY the spelling of every name.
export const festival = {
  name: 'Winter festival',
  edition: 'Very first edition',
  dates: '13+14.12.25',
  venue: 'Magasins Généraux',
  address: '1 rue de l’Ancien Canal, 93500 Pantin',
  rooms: '2 rooms',
  night: 'Sat.13 · 20:00—06:00',
  lives: ['Mietze Conte', 'Sodomland', 'Ketacat'],
  djs: ['Woesum', 'HDMirror', 'Eurohead', 'Blood of Aza', 'Metaphys1ca'],
};

// Afterparty poster, 28.03.2026, Klub Camina, 23:00—06:30. VERIFY the city and the spelling.
export const afterparty = {
  date: '28.03.26',
  venue: 'Klub Camina',
  hours: '23:00—06:30',
  djs: ['Benzii', 'Ghetto Gertrude', 'Itako', 'Mobnkrz', 'Notinbed', 'Oryon', 'U.R.Trax'],
};

// Practical info repeated on every 2026 listing.
export const practical = [
  'Entrée libre',
  'Billet Shotgun gratuit, par créneau',
  'Carte, Apple Pay, Google Pay',
  'Créneaux calmes pour les personnes sensibles au bruit',
  'Entrée prioritaire : handicap, grossesse',
  'Restock en continu',
];

// Designers named in 2026 listings (Reims, Dijon). DJs are announced per city, no names published.
export const designers = ['Yrae', 'Luciole Noire', 'Phenomena', 'Retinattraktiv'];

// Venues that have hosted an edition. VERIFY the kind of La Mûrisserie, La Commune Mazerat and Heat.
export const venues = [
  { name: 'TLM', city: 'Paris 19e', kind: 'Tiers-lieu' },
  { name: 'Le Consulat Voltaire', city: 'Paris 11e', kind: 'Ancienne station électrique' },
  { name: 'La Mûrisserie', city: 'Marseille', kind: 'Tiers-lieu' },
  { name: 'CAP3000', city: 'Saint-Laurent-du-Var', kind: 'Centre commercial' },
  { name: 'Polygone', city: 'Béziers', kind: 'Centre commercial' },
  { name: 'La Coupole', city: 'Nîmes', kind: 'Centre commercial' },
  { name: 'Espace d’Erlon', city: 'Reims', kind: 'Centre commercial' },
  { name: 'La Commune Mazerat', city: 'Saint-Étienne', kind: 'Food court' },
  { name: 'Heat', city: 'Lyon', kind: 'Halle' },
  { name: 'Mob Hotel', city: 'Lyon', kind: 'Hôtel' },
];

export const formats = [
  { name: 'Week-end friperie', text: 'Deux ou trois jours, +10 000 pièces, DJ-sets et designers dans un tiers-lieu.' },
  { name: 'Étape de tournée', text: 'Un marché de jour en centre commercial, pensé pour tout le monde, enfants compris.' },
  { name: 'Activation de marque', text: 'Un happening Minimaxxx autour d’une marque, d’un lancement ou d’une collection.' },
  { name: 'Secret event', text: 'Afterparty et soirées privées, sur mot de passe.' },
];

// Figures for venues and brands. All from public sources (listings, LinkedIn, Instagram, Oct. 2026).
export const figures = [
  { value: '+10 000', label: 'pièces par événement' },
  { value: '1—10 €', label: 'sur tout le stock' },
  { value: '2018', label: 'premier événement, à Lyon' },
  { value: '9', label: 'villes en 2026' },
  { value: '2', label: 'salles au Winter festival' },
  { value: '42K', label: 'abonnés Instagram' },
];

// The deck's own table of contents. `href` only where the section exists on this page.
export const index = [
  { n: '0000', name: 'Tour', href: '#tour' },
  { n: '0001', name: 'Manifesto', href: '#manifesto' },
  { n: '0002', name: 'Team', tag: 'Bientôt' },
  { n: '0003', name: 'Formats', href: '#partners' },
  { n: '0004', name: 'Stock', href: '#stock' },
  { n: '0005', name: 'Guests', tag: 'Fashion//Design', href: '#guests' },
  { n: '0006', name: 'Artists', tag: 'Music//Performance', href: '#artists' },
  { n: '0007', name: 'Talk sessions', tag: 'Bientôt' },
  { n: '0008', name: 'Youth archive', href: '#archive' },
  { n: '0009', name: 'Workshop', tag: 'Bientôt' },
  { n: '0010', name: 'Radio', tag: 'Offline', href: '#radio' },
  { n: '0011', name: 'Visual identity', tag: 'Bientôt' },
  { n: '0012', name: 'Partnerships', href: '#partners' },
  { n: '0013', name: 'Reach us', href: '#contact' },
];
