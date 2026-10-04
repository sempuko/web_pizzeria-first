# PASS 03 — Polish

Not a redesign. Same nine sections, same identity. This pass makes the page precise, responsive and presentation-ready.

## 1. Audit (before changes)

Checked at 1440×900, 1024×768 and 390×844.

**Strongest moments:** the hero (shutter, title crossing the frame); *Les classiques* (names crossing into the photo); the closing frame mirroring the opening one; the evening timeline.

**Weakest / problems found**

| Area | Problem |
|---|---|
| Mobile (390) | Not designed at all: 96 px horizontal overflow, the desktop composition squeezed, 30 px hero title, text overlapping photos. |
| Hero entrance | About 3 s before the title settles (shutter 250+1700 ms, words up to 2.9 s, subtitle at 2.3 s). Too slow for a page someone will scroll immediately. |
| Navigation | No hover or active state beyond opacity, and no mobile menu. The header appears instantly, before the shutter. |
| Small text | Captions at 12 px and `bougie/45` on nuit ≈ 3.7:1; `nuit/55–60` on papier ≈ 4:1. Both are under 4.5:1. |
| *Avis* | The fragments float at arbitrary positions ("scattered quotes" reads generated). |
| *Sophie* | The italic name's last letters land on the darkest part of the photo and turn muddy. |
| *Les classiques* | The loupe label « Détail × 4 » is a designer's label, not something a restaurant would say. |
| Laptop (1024) | The phone number wraps onto two lines. |
| Spacing | Paddings are raw `vh`, so they grow huge on tall screens and shrink on short ones. |
| Images | Every device downloads the 2000–2400 px originals. |

**Repeated compositions:** "monumental type crossing an image" appears three times (hero, dishes, finale). This is intended as the house signature and kept.

## 2. Plan

1. **Responsive:** three compositions, not one stacked. *lg* (≥1024) keeps the desktop layout. Mobile and tablet get recomposed layouts:
   - hero title on two justified lines (*LA STELLA / D'ORO*), still crossing the frame edge;
   - dish photo with the loupe overlapping its corner;
   - timeline frames with their own chapter titles instead of the sticky column;
   - « Sophie » laid over the top of the photo;
   - the address on three lines;
   - the closing line on two justified lines.
2. **Hero entrance:** ≈1.6 s total. Shutter rises → lights warm → title words rise → subtitle, credits and navigation arrive last.
3. **Navigation:**
   - underline drawn from the left on hover;
   - persistent braise rule on the section you are in;
   - the « Réserver » button responds to press;
   - mobile: wordmark, « Réserver » and « Menu », opening a full-screen letterbox panel that drops like the shutter.
4. **Contrast floor:** small text ≥13 px, `bougie/65+` on dark, `nuit/65+` on paper.
5. **Realism:** loupe captions name what you see (« La croûte », « Le pecorino »…). Fragments become an aligned column of marginal notes.
6. **Spacing:** `clamp()` on every section padding. Rhythm stays release (maison) → tension (classiques) → quiet, long (soirée) → dense (carte) → intimate (Sophie) → loud (avis) → compressed (infos) → final frame.
7. **Motion additions (only these):**
   - one shared link underline that redraws on hover;
   - a very small parallax on the two photos that hang across section edges, to make the layering legible;
   - faster, tighter reveal timings.
8. **Performance:** 1000 px variants of every photo, with `srcset`; the hero image is eager with high priority, everything else lazy.

## 3. What changed

| Area | Change |
|---|---|
| Responsive | Three compositions (mobile, tablet, desktop). No horizontal overflow at 390 / 768 / 1024 / 1440 (was 96 px at 390). Mobile keeps the identity: the hero title on two justified lines crossing the frame, the loupe on the dish photo, the address as a staircase, the closing line justified on two lines. |
| Hero | Entrance ≈1.7 s instead of ≈3 s. Mouse-only drift. Hero image loaded first, at high priority. Title capped at 172 px on very wide screens. |
| Navigation | Underline drawn from the left on hover, braise rule on the current section, press feedback on « Réserver ». Mobile panel drops like the shutter; Esc closes it and the page doesn't scroll behind it. |
| Typography | Contrast floor applied (small text ≥13 px; ≥65 % opacity on both surfaces). Phone number never wraps. Wine prices and labels unified. |
| Spacing | All section paddings use `clamp()`; rhythm tuned per section rather than one value everywhere. |
| Images | `srcset` (1000 px + original) everywhere. The Sophie photo is mirrored so the name lands on light; it no longer leaves a sliver over the reviews. The tomatoes stay the one deliberate edge-crossing, with a few pixels of parallax. |
| Realism | « Détail × 4 » → what the loupe shows (« La croûte », « Le pecorino »…). The scattered quotes became one aligned column of marginal notes. |
| Micro-interactions | One shared link underline (retracts right, redraws left); « Voir la carte complète » slides slightly; press feedback on every button. Nothing else was added. |

## 4. Final grill

- **Still template-like?** The four-column practical grid is the most conventional block. It is kept because the information must be scannable; the monumental address above it carries the identity.
- **"AI-designed" tells?** No cards, stars, gradient washes, icon grids, ALL-CAPS eyebrows or `→` links. Numbering only where there is a sequence.
- **Effects fighting the photos?** No. The only motion over photos is reveal and crossfade; the hero drift is mouse-only and a few pixels.
- **Same restaurant throughout?** Yes. One palette, two typefaces, one photo grade, a letterbox from top to bottom.
- **Warm?** Hands in four photos, Sophie, the regulars, the customers' phrase, and copy in « on ».
- **Expensive through precision, not effects?** Three reveal patterns and a few hover states; the polish is mostly in alignment, type scale and crop.

## 5. Still placeholder before going live

- Opening hours.
- Phone `04 78 00 00 00`.
- Prices.
- Review notes (paraphrases, not verbatim).
- Stock photography: priority shots are Sophie's portrait, the real room in the evening, the real oven and the real dishes.
