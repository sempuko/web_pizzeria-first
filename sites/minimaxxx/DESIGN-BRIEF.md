# MINIMAXXX — design brief

The reference for every design decision on this site. Facts, tour dates and sources are in [BRIEF.md](BRIEF.md).
Visual references are in [reference/](reference/): the brand's own deck (`moodboard-deck-2024.png`) and their assets (`brand-assets/`).

## In one sentence

**MINIMAXXX = Underground fashion × Rave culture × Experimental graphic design × Youth counterculture × Creative community.**

Avant-garde, but truly affordable. MINI price (1 € to 10 € « MAXXXIMUM »), MAXXX everything else: +10 000 pieces, DJs, designers, crowd.
Not a shop, not a vintage store: a touring happening where second-hand clothing, music and young designers meet.

Their own fine print (deck, approximate reading): the project « asserts the values of the second-hand world while breaking free from the
"vintage" aspect often associated with second-hand stores », and has questioned « the relationship between second-hand and modernity »
since its launch in September 2018. **Second-hand as modern, not nostalgic.** This is the single most important rule for the design.

## Their Instagram (screenshots, 12 Oct 2026)

The site must look like their feed. Two accounts:

- **@minimax.xx** (verified). Winter Festival posters (13+14.12.25, Magasins Généraux, Pantin, « very first edition », 2 rooms):
  an icy, **overexposed white-out**: photos burnt to white with bloom, **club fog**, a **thin technical grid** over everything,
  line-ups stacked and centred in condensed caps that **glow** (halation), labels in brackets `> NIGHT <`, `> DAY 1 <`,
  `SAT.13 · 20:00-06:00`, superscript `B2B`, a strip of **boxed labels** at the bottom (`2 ROOMS`, `CAUTION`).
  Also: B&W portraits against brick and corrugated metal, photocopied textures, a PFW showroom card (« Emerging designers &
  second hand archive sales », 23—28.06.26, Paris 11e), an afterparty poster (28.03.26, Klub Camina, grey fog gradient),
  press reels (« Une énorme friperie revient à Paris avec un stock entre 1 € et 10 € »).
- **@k1000reloaded** (one of the organisers): grey concrete, white galleries, warehouses, people dressed in black, racks,
  DJ booths, figures in fog. Desaturated, almost monochrome, quiet and sharp.

Feedback on the first version: **lots of white, haze, contrast**, more dynamic, glitch / underground effects,
but clean, stylish and minimal. The Guests flyer (names at different widths with spiky stars) was approved as is.

## Aesthetic keywords

**Fashion & culture**
- Underground fashion
- Alternative youth culture
- Avant-garde / experimental
- Emerging designers
- Second-hand & archival fashion
- Anti-mainstream / counterculture
- DIY / independent creative scene

**Visual identity**
- Neo-brutalism / graphic brutalism
- Experimental typography
- Raw, gritty, distorted visuals
- High contrast / oversized lettering
- Red, black & white
- Xerox / photocopy / grain textures
- Rave flyers / editorial design
- Y2K / post-internet aesthetics

**Atmosphere & lifestyle**
- Berlin underground meets Paris fashion
- Rave & electronic music culture
- Creative freedom
- Youth rebellion
- Urban, edgy, unconventional
- Artistic community / collective energy
- Fashion as self-expression

**Codes taken from their own site and deck**
- « Joyeux chaos », manifesto, happening, immersive performance.
- Packaging and safety-sign pictograms used as fashion graphics: CE mark, Green Dot, « do not litter », hot-surface warning,
  « ORG » country oval, classroom pictogram, « WORLDWIDE :: 2024® ».
- Fake-administrative: forms with fields, ® after slogans (« SECOND-HAND ONLY® »), 4-digit section numbers, fine print.
- Desktop OS: draggable, resizable windows, a live stream window, a password-locked « secret event ».
- Rave-flyer notation: `>`, quotation marks, `::`, `//`, `→`, `[PARIS AREA]`, `[FASHION//DESIGN]`, `18+19.10.25`, `12:00—20:00`, `+10 000`.
- Mascot: a photocopied, 1-bit figure, thin as a wire, running and leaping in gigantic baggy trousers (XXL fit, the « MAXXX »).
  Their loader is an 8-pose run cycle (`brand-assets/runner-loader.gif`, now `public/img/runner-sprite.png`).

## Visual system

### Colour

| Token | Value | Use |
|---|---|---|
| `--black` | `#0d0d0d` | Main background (deck hero and runner pages) |
| `--white` | `#ffffff` | Index pages, text on black |
| `--paper` | `#fffffa` | Forms and archive cards |
| `--red` | `#fe0000` | Full-bleed section pages (deck: Talk Sessions), LIVE |
| `--yellow` | `#fcc303` | Secondary signal only (current site): next city, alerts |
| `--grey` | `#8c8c8c` / `#d8d8d8` / `#1a1a1a` | Fine print, rules, windows |

- **Decision for the homepage (12 Oct 2026): hard black and white.** No grey text, no grey states: hierarchy comes from weight
  and width. Greys only exist inside light and fog (gradients, smoke). Red and yellow stay in the brand's toolbox
  (deck, current site) but are not used on this page.
- Red, black and white carry the brand; yellow is a highlighter, never a background colour for whole sections.
- Text on red is **black** (contrast 5.2:1). White on red only for very large type (4.0:1).
- Flat colours only. No gradients.

### Type

- Brand font: Nimbus Sans and Nimbus Sans Condensed (Typekit, their licence). For the mockup use **Archivo** (Google Fonts, variable
  `wdth` 62–125, `wght` 100–900): condensed black for headings, normal width for small text.
- Headings: all caps, very tight tracking (≈ -0.05em) and leading (≈ 0.8–0.85), left-aligned, allowed to run off the edge of the screen.
- Fine print: all caps, 7–9 px, centred or justified at the bottom of a page, like a legal notice.
- Extreme scale contrast is the point: giant headings next to tiny meta lines, nothing in between.
- Superscript tags in brackets after a heading: `GUESTS[FASHION//DESIGN]`, `RADIO[UNDER CONSTRUCTION]`.
- Section titles as `0007—TALK SESSIONS` (4 digits, em dash).
- Handwriting (ballpoint) only inside archive cards and forms, e.g. Reenie Beanie or Nanum Pen Script.
- Wordmark: use their PNG (`brand-assets/wordmark.png`, 5763 px wide); never re-set it in a font.

### Graphic devices

- Pictograms (`brand-assets/icon_*.png`), redrawn as SVG for the build, used as stamps, bullets and price-chart symbols.
- Spiky four-pointed stars (Y2K/tribal sparkle), black on red, scattered over and across type.
- Logo stamp: wordmark inside a ring of small spiky crosses (reads like an EU-flag ring, pairs with the CE mark).
- Runner: as a sticker cropped by the edge of a page, and as a chronophotography sequence (several runners in a row, Muybridge style).
- Forms: thin-ruled boxes with field labels (Name, Age, Ig, Second-hand/100), filled in by hand.
- Windows: thin black border, title bar in caps, draggable on desktop, stacked on mobile.
- Xerox grain, 1-bit dithering, slight distortion on images and the mascot.

### Images

- Real people, real events: dense crowds, flash, direct gaze into the lens, diverse young faces, street styling, sunglasses, suits, mesh.
- Black and white full-body portraits on paper cards (Youth Archive).
- Never stock photos. Until real photos arrive, use typography, pictograms and the runner instead of fake pictures.

### Motion

- Hard cuts, snaps, blinks. LIVE blinks red/black every 1.5 s (as on their site).
- Runner loops as a frame sequence; stars jitter or rotate slowly; windows drag.
- No soft fades and floaty easing. Everything respects `prefers-reduced-motion`.

## The deck (reference/moodboard-deck-2024.png), panel by panel

1. **Hero, black.** Small wordmark with the « ORG » oval, a meta row underneath (« ONE RULE : SECOND HAND ONLY », « +5000 PIECES : 10€ MAXXX »,
   pictograms, « // WORLDWIDE : 2024® », « XXXXX »). The rest of the page is empty black, with the manifesto as fine print at the very bottom.
2. **Index, white.** `0001 MANIFESTO` to `0013 REACH US` in huge condensed black caps, lines almost touching, bracketed superscript tags,
   the runner sticker cropped at the bottom right.
3. **0007—TALK SESSIONS, full-bleed red.** « THE SECONDHAND SCENE: VOICES AND VIEWS » in giant black type, black spiky stars over it.
4. **0008—YOUTH ARCHIVE.** Colour crowd photo of young people staring into the lens, caption « INTRODUCING  MINIMAXXX 2024 ».
5. **Youth Archive cards.** Seven B&W full-body portraits, each on a form (Name, Age, Ig, Second-hand/100, filled in by hand), logo stamp
   at the bottom. Text: « Par ce projet nous voulons montrer la diversité infinie qu'offre la mode de seconde main, tout en valorisant
   le talent individuel de nos modèles amateurs. »
6. **Black page** with a row of small white runners (chronophotography).

## Audience and what each needs from the site

| Who | What they need |
|---|---|
| Core: 18–30, students, young workers, thrifters, Vinted natives, club culture (Shotgun, DJ-sets). Budget first, eco second. | Next date in their city, the vibe (line-up, photos), the Shotgun ticket, alerts |
| Tour in shopping centres: families, bargain hunters, mid-size cities | Where, when, prices, kids bins, card only, quiet slots, accessibility |
| Emerging designers and curators | How to get a stand, past designers, the call for designers |
| DJs and performers | Past line-ups, how to apply |
| Venues, shopping centres, brands, agencies, cities | Proof (figures, cities, crowds), formats, a contact that answers |
| Press, job applicants | Press kit, visual identity, jobs |

Numbers: Instagram 42K, TikTok 4.7K followers and 147K likes, LinkedIn 123. The site must convert Instagram attention into tickets,
city alerts and partner leads.

## Concept: « TOUR :: LIVE »

The site works like the back of a band's tour T-shirt: the cities and dates in huge condensed caps, past ones crossed out,
the next one highlighted. It is clothing and music at once, which is exactly their DNA.

- **City pages:** venue, hours, bins, designers, DJs, practical info (free Shotgun ticket, card only, quiet slots, priority entry),
  Shotgun button, add to calendar. These pages also bring them back into Google for « friperie [ville] ».
- **On event days the site switches to « HAPPENING NOW »:** the stream window (their own idea, now « RADIO »), restock counter,
  DJ on air, queue at the door.
- **Between events:** countdown to the next city and « BRING MINIMAXXX TO ___ » city votes. The vote count is proof of demand
  for venues and brands.
- **Navigation is their own deck index**, so they recognise themselves instantly:

| # | Section | On the site |
|---|---|---|
| 0000 | TOUR | City list, past ones crossed out, next one highlighted, city pages |
| 0001 | MANIFESTO | Hero + manifesto in fine print, « ONE RULE: SECOND-HAND ONLY® » |
| 0002 | TEAM | Founders and crew, Lyon 2018 → Paris |
| 0003 | FORMATS | Weekend in a tiers-lieu, shopping-centre tour stop, brand activation, secret event / afterparty |
| 0004 | STOCK | Price chart as pictograms: 1 € / 2 € / 3 € / PRIX LIBRE / 10 € MAXXX, +10 000 pieces, continuous restock |
| 0005 | GUESTS[FASHION//DESIGN] | Past designers + call for designers |
| 0006 | ARTISTS[MUSIC//PERFORMANCE] | Line-up archive + DJ submissions |
| 0007 | TALK SESSIONS | Full-bleed red, upcoming talks and themes |
| 0008 | YOUTH ARCHIVE | Wall of casting cards; visitors can fill in their own (« Second-hand/100 ») |
| 0009 | WORKSHOP | Upcycling / customisation workshops |
| 0010 | RADIO[LIVE] | The stream window: live on event days, offline card otherwise |
| 0011 | VISUAL IDENTITY | Press kit, logos, pictograms |
| 0012 | PARTNERSHIPS | « HOST US / PARTNER »: figures, venues so far, formats, lead form |
| 0013 | REACH US | Contact, jobs (work@), Instagram, TikTok |

Their visual language stays (OS windows, pictograms, xerox, red / black / yellow). What changes is the job of the site: from an art
placeholder to the main tool of the tour and of the B2B sales.

## Pitch arguments: what the current site misses

- Next event still shows 18+19.10.25 a year later; the TikTok bio still says Bordeaux in June. Dates live in Instagram, not on the site.
- Search engines get an empty page (React SPA): Google shows JDS, Sortir à Paris, Le Bonbon instead of them.
- No tour calendar, no city pages, no line-ups, no archive of 30+ editions, no designer or DJ application, no partner page
  (the B2B offer only exists on LinkedIn), no city alerts.
- The stream password is sent to every visitor's browser with the page data.
- Mobile: zoom disabled (`user-scalable=no`), page locked with `overflow: hidden`.

## Do / don't

**Do**
- Giant type that runs off the edge; tiny fine print; nothing medium.
- Full-bleed colour pages (black, white, red) that cut hard from one to the next.
- Real event information everywhere: dates, addresses, prices, hours. The brand is the event.
- Forms, stamps, ®, `::`, `//`, `[ ]`, `0001—` as the graphic language.
- Sharp corners, thin black rules, hard shadows at most.
- Mobile first: the audience lives on Instagram and TikTok. Zoom allowed, readable fine print on phones (≥ 10 px there).

**Don't**
- « Vintage » clichés: kraft paper, sepia, retro serifs, polaroids, pastel thrift-shop look. They explicitly break from that.
- Generic eco-green, leaves, « sustainable » icons.
- Rounded cards, soft shadows, gradients, glassmorphism, emoji.
- A SaaS / e-commerce layout (centred hero with two buttons, feature grid, product cards). This is not Vinted.
- Stock photos or fake crowd pictures.
