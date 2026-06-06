# CELERA Manila — Landing Page

Premium static landing page for **Celera Manila**, a fine-dining restaurant at 3F Comuna, Makati City.

---

## Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 — semantic, accessible |
| Styling | Vanilla CSS (modular, BEM) |
| Scripts | Vanilla JS (ES5-compatible, no build step) |
| Fonts | Google Fonts — Cormorant Garamond + Inter |
| Images | Local assets with Unsplash CDN fallbacks |
| Deployment | Cloudflare Pages / GitHub Pages (zero config) |

---

## Repository Structure

```
celera-manila/
├── index.html                  ← Single entry point
│
├── styles/
│   ├── tokens.css              ← Design tokens (CSS custom properties)
│   ├── global.css              ← Reset, typography, shared utilities
│   ├── navbar.css              ← Navbar + mobile menu
│   ├── hero.css                ← Hero section + entrance animations
│   ├── about.css               ← Brand story section
│   ├── menu.css                ← Signature dishes grid
│   ├── gallery.css             ← Masonry image gallery
│   ├── press.css               ← Press / accolades
│   ├── reservation.css         ← Reservation form + info columns
│   └── footer.css              ← Footer
│
├── scripts/
│   ├── animations.js           ← IntersectionObserver scroll reveals
│   ├── navbar.js               ← Scroll state + mobile menu toggle
│   ├── reservation.js          ← Form validation + submission
│   └── main.js                 ← Smooth scroll + image fallbacks (loads last)
│
├── assets/
│   └── images/
│       └── README.md           ← Image replacement guide + specs
│
├── _headers                    ← Cloudflare Pages HTTP security headers
├── .gitignore
└── README.md
```

---

## Local Development

No build step required. Serve any way you like:

```bash
# VS Code — install "Live Server" extension, right-click index.html → Open with Live Server

# Python 3
python3 -m http.server 8080

# Node.js
npx serve .

# Then open: http://localhost:8080
```

> **Note:** Opening `index.html` directly as a `file://` URL will work for most features.
> A local server is only needed if you hit CORS issues with local image loading.

---

## Deploy to Cloudflare Pages

1. Push this repo to **GitHub**.
2. Log in to [Cloudflare Pages](https://pages.cloudflare.com) → **Create a project** → **Connect to Git**.
3. Select your repository.
4. Configure the build:
   - **Framework preset**: None
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` or `.`
5. Click **Save and Deploy**.

Your site is live at `https://<project-name>.pages.dev` in under 60 seconds.

---

## Deploy to GitHub Pages

1. Push to GitHub.
2. Go to **Settings → Pages**.
3. Source: **Deploy from a branch** → `main` → `/ (root)`.
4. Save. Live at `https://<username>.github.io/<repo-name>/`.

---

## Adding Real Photography

All `<img>` tags have a `data-fallback` attribute pointing to Unsplash placeholders.
The site works immediately without any local images. To replace them:

1. Add your files to `assets/images/` (see `assets/images/README.md` for specs).
2. Update the `src` attribute on each `<img>` in `index.html`.
3. Leave `data-fallback` in place — it's your safety net.

---

## Wiring the Reservation Form

The form currently shows a client-side success state. To connect it to a real backend:

### Formspree (easiest)
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
```
Remove the `novalidate` attribute if you want Formspree's native validation.

### Custom API (fetch)
Edit `scripts/reservation.js` — replace the submit block with:
```js
fetch('/api/reservations', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(Object.fromEntries(new FormData(form)))
}).then(/* handle response */);
```

---

## Brand Identity Tokens

All design values live in `styles/tokens.css`. Do not modify without brand approval.

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#1E1E1E` | Default background |
| `--bg-secondary` | `#3E3E3E` | Cards, Press section |
| `--bg-black` | `#000000` | Hero overlay, Footer |
| `--text-primary` | `rgba(255,255,255,0.85)` | Headings, body |
| `--text-secondary` | `rgba(255,255,255,0.53)` | Captions, metadata |
| `--gold` | `#C9A96E` | CTAs, accents |
| `--gold-hover` | `#B8926A` | Hover states |
| `--font-display` | Cormorant Garamond | All display/headings |
| `--font-body` | Inter | All UI / body copy |

---

## Accessibility

- Skip-to-content link
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`, `<blockquote>`, `<cite>`, `<address>`)
- ARIA labels on hamburger button and mobile menu dialog
- `aria-expanded` state on hamburger toggled by JS
- `sr-only` labels on all form inputs
- All interactive elements have 44×44 px minimum touch targets
- `prefers-reduced-motion` disables all animations
- `alt` text on every image
- Focus-visible rings use `--gold` color

---

© 2025 CELERA Manila
