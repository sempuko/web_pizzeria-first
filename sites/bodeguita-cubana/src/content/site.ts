// Every fact on the page lives here. Sources: the restaurant's own site (menus 2024, recipe, soirées),
// press clippings it publishes, and listings checked in October 2026. Items marked VERIFY are to be
// confirmed with the owners before the page goes live.

export const contact = {
  phone: '04 72 07 95 47',
  phoneHref: 'tel:+33472079547',
  email: 'bodeguitacubana@yahoo.fr',
  street: '44 rue de Cuire',
  city: '69004 Lyon',
  corner: 'à l’angle de la rue Calas',
  metro: 'Métro C : Croix-Rousse ou Hénon',
  booking: 'https://widget.thefork.com/cbd7b242-5d69-462b-9cc2-a5e6542604a3',
  directions: 'https://www.google.com/maps/search/?api=1&query=Bodeguita+Cubana+44+rue+de+Cuire+69004+Lyon',
  map: 'https://www.google.com/maps?q=Bodeguita+Cubana,+44+rue+de+Cuire,+69004+Lyon&output=embed',
};

// Day index follows Date#getDay(): 0 = dimanche. Hours in decimal (19.5 = 19h30).
// VERIFY: listings say Saturday is evening only; the old site says Tuesday to Saturday, lunch and dinner.
export const hours: Record<number, [number, number][]> = {
  0: [],
  1: [],
  2: [[12, 14], [19, 23]],
  3: [[12, 14], [19, 23]],
  4: [[12, 14], [19, 23]],
  5: [[12, 14], [19, 23]],
  6: [[19, 23]],
};

export const hoursTable = [
  { days: [2, 3, 4, 5], label: 'Mardi au vendredi', value: '12 h – 14 h et 19 h – 23 h' },
  { days: [6], label: 'Samedi', value: '19 h – 23 h' },
  { days: [0, 1], label: 'Dimanche et lundi', value: 'Fermé' },
];

export type Dish = { name: string; text: string };

// Menus as printed by the restaurant in 2024. VERIFY prices: the old site lists « tropical 27,50 € »
// and « cubano 30 € »; the 2024 cards are titled Habanero and Cubano.
export const entradas: Dish[] = [
  { name: 'Ceviche de pescado', text: 'Poisson mariné à l’huile d’olive et au citron vert, salade d’algues' },
  { name: 'Empanada', text: 'Chausson farci au ragoût de viande hachée, oignons caramélisés et raisins secs' },
  { name: 'Pastel de cangrejo', text: 'Gâteau de crabe, sauce tomate' },
  { name: 'Ensalada tropical', text: 'Jeunes pousses, cœur de palmier, gambas, ananas frais' },
];

export const menus = [
  {
    name: 'Menu Habanero',
    price: '27,50 €',
    platos: [
      { name: 'Feijoada a la cubana', text: 'Ragoût de haricots noirs et sa cochonnaille, riz parfumé' },
      { name: 'Pollo habanero', text: 'Filet de poulet cuit à la vapeur, crème de noix de coco' },
      { name: 'Gratinado de maíz', text: 'Crème de maïs gratinée au bœuf et au poulet, raisins secs et olives' },
      { name: 'Filete de pescado de Caney', text: 'Pavé de poisson aux juliennes de mangue, selon l’arrivage' },
    ],
  },
  {
    name: 'Menu Cubano',
    price: '30 €',
    platos: [
      {
        name: 'Cochinillo al horno',
        text: 'Cuissot de porcelet mariné à l’orange amère et au miel, cuit cinq heures au four comme chez les paysans cubains. Gratin de deux patates, riz parfumé',
      },
    ],
  },
];

export const midi = {
  intro:
    'Du mardi au vendredi, la cuisine du marché : chaque jour deux entrées et deux plats, renouvelés selon les trouvailles du matin.',
  formules: ['Plat du jour', 'Entrée et plat', 'Entrée et dessert'],
  note: 'Des formules à prix doux, desserts compris au choix.',
};

export const postres: Dish[] = [
  { name: 'Sopa de mango', text: 'Soupe de mangue' },
  { name: 'Piña y jengibre', text: 'Ananas au gingembre' },
  { name: 'Manzanas caramelizadas', text: 'Pommes caramélisées' },
  { name: 'Fondant de chocolate', text: 'Fondant au chocolat' },
];

export const alaCarte = 'Tapas, pluma grillée, picadillo habanero… avec une sélection de vins chiliens.';

// The house recipe, as published on the restaurant's mojito page.
export const mojito = [
  { qty: 'Hierbabuena', what: 'des feuilles de menthe verte, à peine écrasées' },
  { qty: '½', what: 'citron vert, en morceaux' },
  { qty: '2', what: 'cuillères à café de sucre de canne roux' },
  { qty: '5 cl', what: 'de rhum cubain' },
  { qty: 'Quelques gouttes', what: 'd’angostura' },
  { qty: 'Pour finir', what: 'eau gazeuse et glaçons' },
];

export const soirees = ['Dîner et cours de salsa', 'Soirées à thème', 'Animations et spectacles'];

export const press = [
  { who: 'Tribune de Lyon, mai 2026', what: '4 sur 4 : « Viva la cuisine cubaine libre »' },
  { who: 'Petit Futé 2026', what: 'En tête des restaurants cubains du Rhône' },
  { who: 'Le Petit Paumé', what: 'Recommandé en 2015, 2019 et 2020' },
  { who: 'Google', what: '4,6 sur 5, plus de 640 avis' },
  { who: 'TheFork', what: '9,1 sur 10, plus de 400 avis' },
];

export const quote = {
  text: 'De la musique à la cuisine en passant par la décoration, nous voilà transportés en Amérique latine.',
  source: 'Le Bonbon Lyon',
};

// Guest reviews: paste real Google reviews here (short, first name and initial). Nothing renders while empty.
export const reviews: { text: string; name: string }[] = [];

// Decorative wall writing. Generic phrases only: no names, no dates, nothing that reads as a real review.
export const scribbles = [
  '¡Salud!',
  'Otro mojito, por favor',
  '¡Qué rico!',
  'Viva la Bodeguita',
  'Lyon ♥ La Habana',
  'On revient vendredi',
  'Gracias por la salsa',
  'Croix-Rousse sabrosa',
  '¡Azúcar!',
  'Hasta pronto',
];
