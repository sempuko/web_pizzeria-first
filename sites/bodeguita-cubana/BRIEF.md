# La Bodeguita Cubana — brief

Homepage mockup to pitch a new website to the owners. Not the production site: `noindex`, no backend.

## The restaurant

- 44 rue de Cuire, 69004 Lyon, corner of rue Calas. Métro C, Croix-Rousse or Hénon. 04 72 07 95 47, bodeguitacubana@yahoo.fr.
- Opened in 2003 by Hugo Aguilera (Chilean) and Aliucha Aguilera (Cuban). Recipes from Aliucha's mother; Hugo trained with chef Daniel Ancel.
- Two large rooms, pine bar and furniture, red walls covered with Cuban paintings. Façade: roughcast blue wall, sign in hand-painted azulejo tiles.
- Evenings: two Cuban menus (Habanero, Cubano) and a carte. Weekday lunch: market cooking, formulas. Mojito is the signature.
- Private events: birthdays, company dinners, salsa lessons, shows, meeting room, group and student rates.
- Reputation (Oct. 2026): Google 4.6 (640+), TheFork 9.1/10 (400+), Petit Futé 2026 top Cuban in Rhône, Tribune de Lyon 4/4 (May 2026), Petit Paumé 2015/2019/2020, Le Bonbon.

## Concept: « La façade »

The page opens on their own front wall. The name is laid tile by tile as azulejos, like the real sign.
After 18h30 in Lyon the wall goes dark and the lantern lights up (switch to preview). The page ends on
the same wall, where visitors can leave a word, as on the walls of the Bodeguita del Medio in Havana.

Palette, all taken from the restaurant: façade blue `#1f74a8`, logo red `#d2232f`, tile navy `#1b2a55`,
pine `#ebcb98`, tile glaze `#f6f5f0`, leaf green `#1f7a47`, flower yellow `#f2b92e`, night `#121c3b`.
Type: Gloock (tile letters, headings), Bricolage Grotesque (text), Caveat / Gochi Hand / Reenie Beanie (handwriting only).

## Sources

- Restaurant site: menus 2024 (images), mojito recipe, soirées page, photo galleries, press clipping « Depuis 2003 ».
- Tribune de Lyon (22 May 2026), Petit Futé, Le Bonbon, TheFork, Restaurant Guru.
- Photos in `public/img` come from the restaurant's own site (slides cropped to remove the old caption band).

## To verify with the owners before going live

- [ ] Who runs the kitchen now: Tribune de Lyon (May 2026) names a new chef, Raúl Candia. The story section speaks of Hugo in the past.
- [ ] Saturday lunch: listings say evening only; the old site says Tuesday to Saturday, lunch and dinner.
- [ ] Menu prices: old site text says « tropical 27,50 € / cubano 30 € »; the 2024 cards are titled Habanero and Cubano.
- [ ] Lunch formula prices, current desserts.
- [ ] « Depuis 2003 » (from a press clipping).
- [ ] Instagram / Facebook accounts, if any.
- [ ] Real guest reviews to add in `src/content/site.ts` (`reviews`).

## For production

- New photo shoot: the current photos are 700 px wide at most.
- Private-party form and « Signez le mur » need a backend (e-mail or WhatsApp for the form; a shared, moderated wall).
- English version, `schema.org/Restaurant`, sitemap, 301 redirects from the old URLs (`/restaurant.html`, `/mojito-lyon`…).
