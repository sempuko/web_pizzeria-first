# MINIMAXXX — brief

Website concept to pitch to MINIMAXXX. Not the production site: `noindex`, no backend.
Status (12 Oct 2026): homepage « vitrine » v2 built, hard black and white, white-out and fog after their Instagram.
Run it with `npm run dev` (port 4323).

Audience, aesthetic, concept and pitch arguments: [DESIGN-BRIEF.md](DESIGN-BRIEF.md). Visual references: [reference/](reference/).
Every fact shown on the page lives in `src/content/site.ts`, with VERIFY notes.

## The homepage, section by section

| # | Section | What it does |
|---|---|---|
| — | Loader | Their own loader, redone: the runner, a 1 px bar, the stock counting up to 10 000. Once per visit. |
| 0001 | Hero | Their runner as a black silhouette, backlit, in WebGL club fog the pointer parts; under it MINIMAXXX glows and fills the frame; the pointer moves the weight between MINI and MAXXX; now and then the word tears (glitch) and the light stutters. On a phone the halves stack. |
| — | Tapes | Two barrier tapes crossed over the cut, running faster when you scroll. |
| 0001 | Manifesto | Their text « printed » by a photocopier light that stays put while the page slides under it; unprinted lines show as outlines. |
| 0004 | Stock | The price rule + a dark club box with real physics: two moving-head beams (one follows the pointer), fog at the bottom, white and striped clothes with price tags to grab and throw. Every piece picked is rung up on a till receipt with the total. « Restock » and « Fouiller ». |
| 0000 | Tour | A white showroom: a tour T-shirt between empty hangers, front out (runner print). Once its top passes a third of the screen, the hanger swings round in 3D to the back (spring, scrolling up turns it back): the 2026 stops, crossed out as they come round; last line: vote for your city. Click to spin it. Wind: uneven gusts turn and lift the shirt in perspective, sleeves flap at the seams, a wave runs down a hinged hem, light slides over the fabric, its shadow sits on a plane behind (CSS transforms only; paused off screen and while typing the vote). |
| 0008 | Youth archive | Their casting card (Name, Age, Ig, Second-hand/100) filled in by hand and stamped « Archivé ». |
| 0005 | Guests | Rave flyer: designer names, each at its own width, stars turning with the scroll, call for designers. Approved as is. |
| 0006 | Artists | Their Winter Festival poster: white-out, fog, grid, `> NIGHT <`, the line-up glowing in the middle, boxed labels, call for DJs. |
| 0012/3 | Partnerships / Formats | Spec sheet of figures, four formats, venues that hosted an edition, contact. |
| 0013 | Reach us | Email edge to edge, links, a chronophotograph of black runners crossing a band of lit fog. |
| — | Radio window, runner, index | Floating stream window (offline, TV static) to drag, throw, minimise; a runner that runs along the bottom while you scroll and leaves afterimages when you scroll fast; the deck's index as the menu. |
| — | Everywhere | Section titles decode from noise when they arrive. Grain is still and light on the first screens (hero, manifesto) and live on the loud ones (guests, footer). |

## The brand

- « Event based second hand clothing store ». A touring friperie: +10 000 pieces per event, everything from 1 € to 10 € « MAXXXIMUM »,
  bins at 1 €, 2 €, 3 € and pay-what-you-want bins (adults and kids), continuous restock. Plus emerging designers, DJ-sets, talks, after-parties.
- Founded early 2018 in Lyon by Théo Josserand and Camille Cabanis (Tribune de Lyon). 30+ events in Lyon by 2022 (Heat, Mobhotel, Boomrang,
  La Plateforme), a shop at 9 rue Henri IV, Lyon 2 (2022, still open?).
- Now based in Paris (6 rue Mercoeur, 75011 on LinkedIn), Paris showroom, team of about 6, hiring a Production & Booking Manager (Sept. 2026).
  LinkedIn: « events every weekend in a different city ».
- B2B offer on LinkedIn: brand partnerships, brand activations, sponsorship, experiential marketing, creative direction, venues and agencies.
- Their own words (site CMS): « WE FUSE FASHION, MUSIC, AND SECOND-HAND CLOTHING IN DYNAMIC CULTURAL EVENTS. MINIMAXXX IS WHERE AVANT-GARDE
  MEETS TRUE AFFORDABILITY » · « une organisation hybride » · « chaque intervention est pensée comme un happening, une performance immersive ».
  Three values: real friperie prices, a stage for young designers, eclectic DJ line-ups.

### 2026 tour (from listings)

| Dates | City | Venue |
|---|---|---|
| 17–18 Jan | Paris 19e | TLM, 105 rue Curial (Petite Ceinture) |
| 17–18 Apr | Reims | Espace d'Erlon (designers Yrae, Luciole Noire) |
| 24–26 Apr | Dijon (1st) | Cité de la Gastronomie / Chapelle des Ducs (designers Phenomena, Retinattraktiv) |
| 13–14 Jun | Saint-Étienne (1st) | La Commune Mazerat |
| 27–28 Jun | Bordeaux | ? (TikTok bio) |
| 24–25 Jul | Nîmes | La Coupole, shopping centre — « Summer Tour » |
| 1–2 Aug | Béziers (1st) | Polygone, shopping centre |
| 15–16 Aug | Nice (1st) | CAP3000, shopping centre |
| 21–23 Aug | Marseille (5th edition) | La Mûrisserie, 300 m² |
| 29–30 Aug | Paris 19e | TLM, « grand déstockage de la rentrée » |

Earlier: Paris, Le Consulat Voltaire (former electrical station), 12–13 Apr 2025, 2nd Paris edition. Lille: listed, date unknown.

From their Instagram (screenshots, Oct. 2026; spelling of names to verify):
- **Winter Festival**, 13+14 Dec. 2025, « very first edition », Magasins Généraux, 1 rue de l'Ancien Canal, 93500 Pantin, 2 rooms.
  Night (Sat. 13, 20:00—06:00), lives: Mietze Conte, Sodomland, Ketacat; DJ-sets: Woesum, HDMirror, Eurohead, Blood of Aza,
  Metaphys1ca. Days: Clara Kimera b2b 888rks, Dua Lity, Amne, DJ Garbage, Stargirl Morocco and more.
- **Afterparty**, 28.03.26, Klub Camina, 23:00—06:30: Benzii, Ghetto Gertrude, Itako, Mobnkrz, Notinbed, Oryon, U.R.Trax.
- **PFW showroom**, 23—28.06.26, Paris 11e: « Emerging designers & second hand archive sales ».
- @k1000reloaded is the Instagram of one of the organisers.

Practical info that repeats on every listing: free entry, free Shotgun ticket with arrival slot, card / Apple Pay / Google Pay only,
quiet slots for people sensitive to loud sound, priority entry for disabled and pregnant visitors.

## Sources

- minimaxxx.com (bundle + DatoCMS content loaded by the page), LinkedIn company page, Instagram and TikTok public counters.
- The brand's 2024 deck, provided with the project (`reference/moodboard-deck-2024.png`).
- Tribune de Lyon (founders), Lyon Femmes (9 Nov 2022), Paris-Friendly, Le Bonbon Paris and Reims, Sortir à Paris, Objectif Sud,
  JDS (Nice, Béziers), Marseille Tourisme, agenda-saint-etienne.fr, jondi.fr.

## To verify with the brand before going live

- [ ] 2026–27 dates and the next city (nothing announced on the site).
- [ ] Is the Lyon shop rue Henri IV still open? Paris showroom address and hours.
- [ ] Founders' current roles (Théo Josserand is not on the LinkedIn employee list).
- [ ] Real photos and videos of the events, DJ and designer names per edition, attendance figures for the partner page.
- [ ] Rights to use the wordmark, runner and pictograms.
- [ ] Venue types on the partner page (La Mûrisserie, La Commune Mazerat, Heat) and Dijon's venue.

## For production

- Real event photos and videos (crowds, flash, portraits for the Youth Archive). The mockup has none on purpose: no stock photos.
- A CMS for the tour (they already use DatoCMS): dates, cities, line-ups, « next event », the stream status.
- Backends: city votes and Youth Archive cards are kept on the visitor's device only in the mockup.
- Stream: keep the password server side (today the site sends it to every visitor's browser).
- City pages for SEO (« friperie Nîmes »…), `schema.org/Event`, English version, sitemap.
- Their Nimbus Sans (Typekit licence) in place of Archivo.
