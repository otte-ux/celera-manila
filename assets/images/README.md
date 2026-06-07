# Image Assets — Replacement Guide

Place your production photography in this directory.

Until real images are provided, the site automatically falls back to
high-quality Unsplash placeholders via the `data-fallback` attribute
on each `<img>` in `index.html`. No action needed — it just works.

---

## Required Files

| Filename | Min. Dimensions | Section | Notes |
|---|---|---|---|
| `hero.jpg` | 1920 × 1080 px | Hero background | Must be dark or overlay-friendly |
| `chef.jpg` | 800 × 1000 px | About / Brand Story | Portrait orientation preferred |
| `dish-1.jpg` | 600 × 750 px | Menu — Smoked Duck Breast | 4:5 aspect ratio |
| `dish-2.jpg` | 600 × 750 px | Menu — Lapu-Lapu Crudo | 4:5 aspect ratio |
| `dish-3.jpg` | 600 × 750 px | Menu — Wagyu Sinigang | 4:5 aspect ratio |
| `interior-1.jpg` | 1200 × 675 px | Gallery (wide cell, row 1) | 16:9 landscape |
| `wine.jpg` | 600 × 750 px | Gallery (small cell) | Portrait |
| `plating.jpg` | 600 × 750 px | Gallery (small cell) | Portrait |
| `interior-2.jpg` | 1200 × 675 px | Gallery (wide cell, row 2) | 16:9 landscape |

---

## Technical Specs

- **Format**: JPEG (progressive scan), WebP accepted
- **Color profile**: sRGB
- **Compression**: 80–85 quality for JPEG
- **Hero image**: shoot or grade dark — the CSS overlay is `rgba(0,0,0,0.6)`
- **Dish images**: plain dark or textured surface backgrounds read best

---

## How to Replace a Placeholder

1. Drop your file here: `assets/images/hero.jpg`
2. In `index.html`, the `<img>` already references `src="assets/images/hero.jpg"` — nothing to change.
3. The `data-fallback` stays on the element as a safety net in case the file is missing.

---

## Optional: WebP with JPEG fallback

For best performance, use `<picture>` in `index.html`:

```html
<picture>
  <source srcset="assets/images/hero.webp" type="image/webp">
  <img src="assets/images/hero.jpg" alt="..." class="hero__img">
</picture>
```
