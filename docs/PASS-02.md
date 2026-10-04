# PASS 02 — De la séquence d'ouverture à la page entière

Selected direction: **02 Cinematic Trattoria, « La saracinesca »**. The PASS 01 studies stay archived at `/pass-01`. The homepage is `/`.

## 1. What the hero already decides

| Rule in the hero | Becomes a site rule |
|---|---|
| The page is a **film frame**: letterbox bars hold the UI, the image holds the mood | The fixed top bar is the letterbox, present everywhere. The page ends on a closing frame that mirrors the opening one. |
| **Archivo, wdth 125, light, uppercase**, justified across the full width | Reserved for *monumental* moments only: the hero title, chapter titles, the address, the final line. Never for body text. |
| **Newsreader italic** used as subtitles | The human voice of the site: statements, captions, quotes. Always a person speaking, never a label. |
| **Archivo 13px** credits, sentence case | All utility text: times, prices, meta. No ALL-CAPS eyebrows. |
| Nuit `#150E0A`, bougie `#F1E2C4`, laiton `#B99558` rules, **braise `#E38A3E` only for "active"** | Same tokens. One addition: **papier `#ECDFC3`** for light sections (the printed side of the restaurant: menu, address). Ink on paper is nuit. A darker tomato `#8E3318` replaces braise on paper, where braise fails contrast. |
| Photos graded warm and slightly dark, cropped hard | Every photo is graded the same way, so ten stock photos read as one shoot. |
| Scene picker = numbered moments with a rule that fills | The evening timeline (17h45 → 21h30) in "La soirée" reuses the same grammar. |

## 2. Motion system (three patterns, reused; nothing else)

1. **Rideau**: images open bottom-up with `clip-path`, as the shutter does in the hero. Once, on entering view. Inside, the image settles from scale 1.12 to 1.
2. **Sous-titre**: statements rise line by line from a mask, staggered 90 ms. Once.
3. **Règle**: rules draw from the left (`scaleX`). Used for the active state (hero scenes, dishes, menu rows) and for the grid of the practical section.

Plus two user-driven interactions that already exist in the hero: **crossfade with a slight blur** when switching images (hero scenes, signature dishes), and the **damped drift** (hero only). No fade-up on every block and no parallax everywhere. `prefers-reduced-motion` disables all of it.

## 3. Sequence

| # | Section | Surface | Density / scale | Why it is not a template block |
|---|---|---|---|---|
| 01 | **Ouverture**: existing hero | nuit | cinematic, 100vh | Unchanged. The header becomes the persistent letterbox. |
| 02 | **La maison**: statement | papier | spacious: one large serif statement + a narrow column | No image-left/text-right. The single photo (tomatoes) hangs *off the bottom edge* into the next dark section, stitching the two together. |
| 03 | **Les classiques** | nuit | dense, 100vh | The hero's scene-picker idea at full scale: dish names in monumental type cross into the photo. A **loupe** shows a macro crop of the same photo (crust, cheese) for tactility. Not a product grid. |
| 04 | **Une soirée, rue Jacques Stella** | nuit → photos | documentary, tall | An evening told as five timed frames (17h45 → 21h30). The chapter title sticks while frames of irregular size scroll past. Numbering is legitimate: it is a timeline. |
| 05 | **La carte** | papier | typographic, dense | A printed menu spread: categories in serif italic, prices in tabular figures, rules. One image (wine shelf) occupies a grid cell like a pasted photo. |
| 06 | **Sophie** | papier | intimate, quiet | Her name set very large in italic, overlapping a photo of hands at work. Three small sequential stills (pâton → garniture → four) carry the repetition of gestures. Short copy. |
| 07 | **Ce qu'on dit de la maison** | nuit over photo | one huge quote + marginal fragments | No cards, no stars. «Comme à la maison.» (the phrase customers actually use) as a film subtitle at monumental size. |
| 08 | **Nous trouver** | papier | structured, clear | The address as a monumental line (the hero title's twin), then a ruled four-column timetable: hours, phone, walking times, actions. |
| 09 | **Une table vous attend** | nuit | closing frame | Mirror of the opening: same letterbox, same oven, title crossing the frame edge. Bottom bar = closing credits, ending on *Fine*. |

## 4. Rhythm critique (before building)

- **Risk: mechanical dark/paper alternation.** The plan has two consecutive dark sections (03 → 04) and two paper (05 → 06), and photos cross section boundaries (02→03, 06→07), so the page reads as one reel, not stacked slices. Heights vary: 100vh / ~120vh / 100vh / ~330vh / ~110vh / ~95vh / 100vh / ~90vh / ~85vh.
- **Risk: "hover a list to swap an image" is an agency trope.** It is kept only because it *is* the hero's scene picker (same rule fill, same crossfade). It is not repeated in the menu, where hover only draws a rule.
- **Risk: sticky scrollytelling is a trope.** It is kept small. Only the chapter title and time stick; the frames are irregular and captioned like a photo essay, with no scroll-jacking.
- **Risk: too much monumental type.** Archivo expanded appears four times at full scale (hero, dishes, address, finale) and once at chapter size. Section 02, the menu and the Sophie section use the serif instead, which is the scale break.

## 5. Placeholder content (must be replaced before going live)

- **Opening hours and phone** (`04 78 00 00 00`) are placeholders. Not known.
- **Menu items and prices** are realistic placeholders built from dishes customers mention.
- **Review fragments** are short paraphrases of themes in `PROJECT_CONTEXT.md`, *not* verbatim reviews, with no names attached. Replace them with real reviews, with permission.
- **Walking times** (République, Cordeliers, Bellecour) are approximate.
- **Photography** is Unsplash stand-ins. Sophie is deliberately *not* shown: no stock face is presented as her. Her portrait is the priority shot for a real photo session.
- The "Une soirée" times are illustrative of an evening, not opening hours.

---

## 6. Post-build review

| Question | Verdict |
|---|---|
| Same world as the selected hero? | Yes. The hero is untouched except that its top bar became the fixed letterbox. Archivo expanded, Newsreader italic subtitles, nuit/bougie/braise and the grade carry through all nine sections. The finale is a deliberate mirror of the opening. |
| Every section art-directed? | Yes, after revisions (below). Each section has one composition idea: a statement plus a hanging photo; names crossing into a photo plus a loupe; an evening timeline; a printed menu; a name over hands; a subtitle quote; an address as a title; the closing frame. |
| Repeated layouts? | Two deliberate echoes only: the hero/finale mirror, and the "type crossing the image" device (hero, dishes, Sophie). No two consecutive sections share a structure. |
| AI-generated UI patterns? | No cards, stars, icon grids, gradient washes, or ALL-CAPS eyebrows. The middle-dot meta strings were removed from the menu. Numbering only where content is a sequence: scenes, evening timeline, gestures. |
| Is food the protagonist? | Yes: hero, *Les classiques* (full-height dish photos + ×4 loupe), food in three of the five evening frames, the menu. |
| Warm and human? | Sophie, *Comme à la maison*, the regulars, hands in four photographs. The copy is written in the restaurant's voice (« on »), not a brand voice. |
| Specific to this restaurant? | Rue Jacques Stella, République, Sophie, the review phrase, the shutter, *Fine*. Stock photography is the main thing that is still generic. |
| Builds desire to visit? | The page moves from appetite (dishes) to life (the evening) to people (Sophie, regulars) to logistics, and ends with a single action. |
| Typography + photography doing the branding? | Yes. There are no logos, ornaments or decorative graphics apart from the small brass star. |
| Interactions restrained? | Three reveal patterns (rideau, sous-titre, règle), each fired once, plus two user-driven ones (dish switch, scene switch). |

Revisions made after the first render:

- **Bug:** curtain reveals never fired. Chrome's IntersectionObserver treats an element clipped to nothing by its own `clip-path` as not intersecting. The clip now sits on the child.
- **Address and final line:** at full size the four words touched each other (`3RUEJACQUESSTELLA`). Size reduced so the justified spacing reads as word spaces.
- **Evening chapters:** the accent of « HABITUÉS » peeked out of the mask under the active chapter. Hidden states now travel further.
- **Sophie:** the gesture strip was hidden under the next section. The section was enlarged and the photo's hang into the reviews reduced.
- **Menu:** a dead block appeared under Dolci and Vini. The photo is now a short pasted image and « Voir la carte complète » became the menu's final printed line, full width.

Known limits (by design for PASS 02): desktop-first (reviewed at 1440×900, no mobile layout); stock photography; placeholder hours, phone and prices (see §5); the « Réserver » buttons go to a phone link / anchor, with no booking flow.
