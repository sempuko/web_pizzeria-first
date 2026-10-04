# PASS 01 — Trois directions pour La Stella d'Oro

Three hero studies on one page (`/`). Not a site. No winner chosen.

Skills used and how conflicts were resolved:

- **frontend-design**: primary framework (thesis → tokens → critique → build). Its list of AI tells (cream + serif + terracotta; black + acid accent; broadsheet hairlines; ALL-CAPS eyebrows; `A · B · C` meta strings; mono labels; `→` on links) was used as the checklist in the critique below.
- **design-grill**: it is built as an interview. The brief plus `PROJECT_CONTEXT.md` already answer its questions, so its *challenge* stance was used instead: every vague adjective had to become a concrete material, object or behaviour.
- **uicolor**: one dominant field per concept, one controlled accent, warm hue whisper on every neutral, no pure black/grey. The brief overrides its 60-30-10 SaaS role table: these are posters, not dashboards.
- **uiux**: hierarchy checks (one most important thing per hero, squint test). Its "up-pop = uppercase" rule is ignored; the brief asks to avoid excess uppercase.
- **emil-design-eng**: one memorable moment per concept; custom ease-out curves; transitions over keyframes for anything the user can trigger repeatedly; `prefers-reduced-motion` respected. Spring/Framer advice not applicable (no React), reproduced with a small lerp.

The anchor shared by all three: the name. *Stella d'Oro* = golden star. Each concept uses "gold" differently (a printed mark; lamplight; the whole paper colour) so the identity comes from the restaurant's own name and not from the Italian flag.

---

## 01 — Editorial Heritage · *La carte ouverte*

**Thesis.** The hero *is* the restaurant's printed menu, opened on the table: yellowed card stock, a big serif title set like a magazine cover line, and a menu index whose entries preview the dish.

| | |
|---|---|
| Type | **Newsreader** only (variable optical size, true italics). Display at opsz 72, light weight, tight tracking; text at opsz 12–16. One family, as in an independent magazine. |
| Palette | Paper `#E7DCC4` (dominant, yellowed card, deliberately *not* AI cream `#F4F1EA`) · Ink `#2B1E16` (espresso) · Vin cuit `#7A2A1C` (single accent: links, star, active line) · Olive `#5E5B34` (one detail only) · Fold shadow `#D9CCB0` |
| Image | One tall, warm daylight photo (hands finishing a pizza), cropped off-centre: the head is cut, the crop shows hands and dough. It bleeds off the top edge as if pasted into the page. A second image swaps in from the menu index. |
| Layout | 12-col asymmetric. Title spans col 1–8 and *runs over* the photo (col 7–12). Index under the title with dotted leaders, like a carte. Large unused paper area top-left. |
| Interaction | (1) Load: the photo is revealed bottom-to-top with `clip-path`, then the two title lines settle (one sequence). (2) Hovering/focusing *Pizze / Paste / Dolci* wipes the photo to that dish. This is functional: it previews the menu. |

**Critique.** The risk is tell #1 (paper + serif + terracotta), plus "fashion-minimal" sterility.
**Revisions.** Paper is shifted yellow-ochre with grain, not neutral cream. The accent is an oxblood *vin cuit*, not clay orange. No ALL-CAPS eyebrows; metadata is set in italic sentence case. Warmth comes from the hands, the menu leaders and the line *Comme à la maison*, which is what customers actually write.

---

## 02 — Cinematic Trattoria · *La saracinesca*

**Thesis.** It is 19h on Rue Jacques Stella: the metal shutter (*saracinesca*) rolls up and the room lights up. The page opens like a film frame and the photography is the architecture.

| | |
|---|---|
| Type | **Archivo** at expanded width (wdth 125) for the title, set like opening credits across the frame. Archivo normal width for the small credits. *Newsreader italic* only for the subtitle quote, as in film subtitles. |
| Palette | Nuit `#150E0A` (letterbox, dominant) · Braise `#E38A3E` (the oven's own colour, used only for the active scene and the star) · Bougie `#F1E2C4` (type) · Laiton `#B99558` (rules, hairlines) |
| Image | Full frame, letterboxed. Three scenes from the same evening: *Le four* (oven fire), *La salle* (evening table, hands), *Le pâton* (calzone over the dough). Graded warm and a little dark. |
| Layout | Black letterbox bars top and bottom hold all UI (nav top, credits and scene picker bottom). The frame holds only the title and one subtitle. No text column. |
| Interaction | (1) Load: a ribbed metal shutter rises and reveals the frame (the one memorable moment). (2) The image follows the cursor with a damped drift, like a handheld camera. (3) Scene picker in the bottom bar: crossfade with a slight blur. |

**Critique.** The risk is the generic "full-bleed photo + white logo in the centre", and the brief explicitly bans the centred logo. A shutter animation could also be a gimmick.
**Revisions.** The title is not centred. It runs the full frame width on the lower third and sits on the board line. The shutter is specific to the place (every Italian shop front has one) and it happens once. The scenes are named after objects, not marketing claims. No fabricated opening hours, phone number or wood-fired claims.

---

## 03 — Italian Graphic · *Giallo Stella*

**Thesis.** A two-colour printed pizzeria list, with the energy of Italian post-war print culture (Bodoni from Parma, Pirelli and Olivetti posters, numbered menus), but in ochre and espresso, not flag colours. The pizza is a disc: the "star" of the page.

| | |
|---|---|
| Type | **Bodoni Moda** at Black weight and display optical size for the name and the large numbers. Bodoni is Italian (Parma, 1798), so here it signals provenance, not luxury. **Schibsted Grotesk** for menu lines and UI, in the spirit of Vignelli's Bodoni + grotesk pairing. |
| Palette | Giallo `#DCA437` (dominant field, "d'Oro") · Espresso `#241810` (all type and rules) · Carta `#F2E6CC` (one ticket element) · tomato red comes only from the photo |
| Image | Overhead pizzas cut as a perfect disc that breaks the grid: it overlaps the title and runs off the right edge. |
| Layout | Dense poster grid with thick and thin rules. Numbered pizza list (N° 1, 4, 9…); the numbering is real menu information, not decoration. The name is stacked *Stella / d'Oro* at poster scale. A vertical side strip carries the nav like a menu tab. |
| Interaction | Selecting a numbered pizza turns the disc a quarter turn and swaps the pizza, like a pizzaiolo turning the pie with the peel. The big number changes with it. The disc also turns very slowly with scroll. |

**Critique.** Yellow + red + pizza can read as fast food. Retro poster pastiche and kitsch are the other risks.
**Revisions.** There is no flat red at all: two-colour print only, ochre and espresso, so the red comes from real tomato in the photo. No illustrations, no Vespa, no checkerboard. The rules carry information (menu sections, prices), never decoration.

---

## Placeholder content to verify with the owner

Dish list, numbers and prices are realistic placeholders based on dishes cited in reviews (pizza, calzone, carbonara, lasagne, gorgonzola, tiramisu). Photos are Unsplash stand-ins until a real shoot. Address is real: 3 rue Jacques Stella, 69002 Lyon.

---

## Post-build review (after one revision round)

| Question | 01 Editorial Heritage | 02 Cinematic Trattoria | 03 Italian Graphic |
|---|---|---|---|
| Could it belong to another Italian restaurant? | Partly. The paper + serif language is shareable; the menu index and *Comme à la maison* positioning make it ours. | Least specific of the three: the shutter and the name-as-credits help, but the photos carry most of it. A real shoot is mandatory. | No. The name *d'Oro* drives the colour, the star drives the disc, the menu drives the structure. |
| Template feel? | Low. Index-as-preview is not a template pattern. | Low. The letterbox replaces the usual header + hero. | Very low. |
| Art direction visible in 3 s? | Yes: printed menu. | Yes: evening, cinema. | Yes: poster. |
| Typography carries identity? | Yes. Large Newsreader, italic *d'Oro* printed over the photo (multiply). | Medium-strong. The expanded sans crosses the frame edge; it's the type that builds the letterbox. | Strongest. Bodoni Black at opsz 11 reads letterpress, not fashion. |
| Imagery structural? | Yes. Photo bleeds off the top, title runs over it, the index changes it. | Yes. The image *is* the space; all UI lives in the letterbox. | Yes. The disc breaks the grid and is the selection state. |
| Interaction meaningful? | Index previews the dish (functional). | Shutter = opening for service (once); scene picker; handheld drift. | Selecting a pizza turns the disc + updates the order ticket. |

Revisions made during review:

- 01: paper shifted from beige `#E7DCC4` to yellowed card `#E6D6B0` (beige read as luxury branding); the label above the title moved into the second line's indent; *d'Oro* pushed onto the photo; title weight raised from Light to 340 for warmth.
- 02: title moved across the frame/letterbox boundary (it was sitting on the image like any hero); the "La salle" fine-dining plate was replaced (it read Michelin), then the American-brunch crowd shot too, ending on a wine toast; fixed the subtitle staying hidden after a scene change.
- 03: Bodoni optical size 96 → 11. At display opsz the hairline serifs ran into neighbouring letters and read as fashion Didone; opsz 11 is sturdy and printed. The positioning sentence moved into the running head (it was colliding with the disc).

Known limits (by design for PASS 01): desktop only (tested 1440×900), no mobile layout; stock photography; nav links are placeholders.
