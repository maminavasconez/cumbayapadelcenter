# Handoff: Cumbayá Pádel Center — sitio web

## Overview
Marketing site for **Cumbayá Pádel Center** (Quito, Ecuador): a padel club with an academy, group classes, a physical-conditioning brand (StreetFit) and an online court-booking funnel. Six pages, dark editorial look, all copy in Spanish (Ecuador) with an EN toggle.

## About the design files
The files are **design references authored as HTML prototypes** — they show the intended look, motion and behavior. They are **not production code to copy verbatim**. The job is to **recreate these screens in the target codebase's own environment** (React/Next, Vue, Astro, etc.) using its established component patterns, routing and asset pipeline. If no codebase exists yet, pick the framework that fits the project (a static-first framework such as Next.js or Astro suits this content site) and implement there.

They live at the repo root — not in a single `design/` subfolder, but each page does sit in its own folder (`club/`, `academia/`, `clases/`, `streetfit/`, `reservas/`) as `index.html`, so the repo is servable as-is with real clean URLs by GitHub Pages, Netlify, Vercel or any static host, with zero rewrite configuration. `.nojekyll` disables GitHub's default Jekyll processing, which otherwise renders this README as the homepage and silently drops `_redirects` (Jekyll excludes underscore-prefixed files).

One mechanic in the prototypes is an authoring-tool artifact and should **not** be ported:
- `support.js` and the `<x-dc>` / `{{ }}` template syntax — the prototype runtime. It is only here so the files open in a browser. Replace with the target framework's components and props.

## Fidelity
**High fidelity.** Colors, typography, spacing, motion and copy are final. Recreate pixel-accurately, then substitute the codebase's own primitives where they exist.

## Design tokens

### Color
| Token | Hex | Use |
|---|---|---|
| Ink / background | `#070707` | Page background, black pill buttons |
| Surface | `#101010` | Photo wells, cards on dark |
| Cream | `#F2F0EB` | Primary text on dark |
| Cream 65% | `rgba(242,240,235,0.65)` | Body copy |
| Cream 55% | `rgba(242,240,235,0.55)` | Captions, meta — subido desde 45%: por debajo de alfa 0.49 el texto pequeño no llega a 4.5:1 sobre los fondos oscuros |
| Cream 18% / 10% | `rgba(242,240,235,0.18)` / `0.1` | Hairline borders |
| Magenta | `#D9007E` | Primary brand, CTA fields, link hover |
| Blue | `#0899DB` | Secondary brand, eyebrows, accents |
| Lime | `#BEEB1F` | Tertiary brand, StreetFit accent, selection |
| White | `#FFFFFF` | Text on magenta/blue fields |

Max **1–2 background colors per page** beyond the ink base. Never gradients — brand color is always a flat field.

### Typography
- **Display:** `Instrument Serif`, weight 400. Italic `<em>` is used for the emphasized word, usually recolored to a brand hue. `line-height: 0.98`, `letter-spacing: -0.01em`.
- **Body / UI:** `Archivo` 400–700. `Archivo Expanded` 500–700 for the wordmark.
- H1: `clamp(54px, 7vw, 108px)` · H2: `clamp(48px, 6vw, 96px)` · H3: `clamp(22px, 6.6vw, 30px)`
- Body: 17px / 1.65 · Secondary body: 16px
- **Eyebrow:** 12px, weight 700, `letter-spacing: 0.34em`, ALL CAPS, brand-colored.
- **Buttons/labels:** 12–13px, weight 700, `letter-spacing: 0.1–0.14em`, ALL CAPS.
- Mobile (≤640px) caps: H1 `clamp(34px, 11vw, 52px)`, H2 `clamp(30px, 9.4vw, 46px)`, H3 `clamp(22px, 6.6vw, 30px)`.

### Spacing & shape
- Section padding: `clamp(55px, 10.8vw, 130px)` block, `clamp(20px, 4vw, 48px)` inline. Hero CTA sections: `clamp(59px, 11.7vw, 140px)`.
- Content max-widths: 1400px (full-bleed sections), 1240px (text sections).
- Grid gaps: 56px / 70px desktop → 48px stacked, 28–40px at ≤640px.
- Radius: cards & photo wells **28px** (24px on some flip wells); buttons **999px** (full pill).
- Borders: 1px `rgba(242,240,235,0.1)`. No shadows on content; only the phone frame mock uses one.

### Motion
- `@keyframes rise`: `opacity 0 → 1`, `translateY(34px) → 0`, `0.9–1s ease`, staggered `0.15s`. Used on hero columns.
- Scroll reveal: elements marked `data-reveal` fade/rise in on intersection (runtime lives in `NavBar.dc.html`).
- Photo stacks marked `data-flip`: 3–5 stacked faces, 3D flip cycling on a timer (`perspective: 1200px`, faces `rotateY`).
- Button hover: `transform: scale(1.05)`, `transition: all .2s`.
- Custom cursor: a tennis-ball element replaces the pointer on fine-pointer devices; disabled under `(hover: none), (pointer: coarse)`.

## Recurring patterns (name them as components)

### 1. "Juanfi" CTA band
A full-width flat brand-color section, centered content, with an **oversized icon cropped by the section edge**.
- `section { position: relative; overflow: hidden; text-align: center; background: <brand>; padding: clamp(59px,11.7vw,140px) clamp(20px,4vw,48px); }`
- One or two decorative SVGs (default: lime tennis balls with white seam lines) absolutely positioned at corners with negative offsets and a rotation, partly outside the frame; `z-index` below the content, content wrapped in `z-index: 1`.
- Content: eyebrow → display headline with one italic word → 16px subtitle → black pill button `#070707` / white text.
- Mobile ≤640px: icons scale to 140×140 and corner offsets tighten to −56px so they never sit behind the text; section padding grows to 92px block.

### 2. "Carla" photo block
A photo with a flat brand-color card peeking out behind it.
- Accent: `position: absolute; inset: 24px -18px -18px 24px; border-radius: 28px; background: <brand>; transform: rotate(-2deg);`
- Photo well: sibling **after** the accent in DOM order, `border-radius: 28px; overflow: hidden;` filling the container.
- Container heights: 460–480px desktop; `80vw` capped at 460px on mobile, where the accent inset tightens to `14px -2px -8px 14px` so it never touches the viewport edge or the next section.
- Every instance on the site uses these same values — keep them identical.

### 3. Sticky/fixed nav
`NavBar` is `position: fixed; top: 0; left/right: 0; z-index: 50` with a spacer element of equal height preserving flow (its mount container is exactly nav-height, so `sticky` has no travel). Height ≈76–79px. Contains wordmark, section links, an EN/ES toggle and a magenta CONTACTO pill. Below 900px it collapses to a hamburger with a full-screen overlay menu.

## Screens

| Screen | File | URL | Purpose |
|---|---|---|---|
| Home | `index.html` | `/` | Brand intro, club highlights, photo stacks, sponsors, booking CTA |
| Club | `club/index.html` | `/club` | Facilities, courts, amenities |
| Academia | `academia/index.html` | `/academia` | Academy programs, certification section (canonical "Carla" block), coach cards, CTA band |
| Clases | `clases/index.html` | `/clases` | Group class formats and schedule |
| StreetFit | `streetfit/index.html` | `/streetfit` | Conditioning brand: hero, methodology band (blue), athlete grid, marquee |
| Reservas | `reservas/index.html` | `/reservas` | 7-step booking walkthrough with numbered screenshots, lime final step |

Shared: `NavBar.dc.html`, `Footer.dc.html`, `mobile.css`, `i18n.js`, `streetfit-marquee.js`.

Each page is a single dark document composed of full-width `<section>`s; two-column splits use CSS grid (`1.05fr 0.95fr`, `0.9fr 1.1fr`, `0.95fr 1.05fr`, `1.15fr 1fr`, `1.7fr 0.8fr`) with 56–70px gaps.

## Responsive behavior
`mobile.css` is the only stylesheet — everything else is inline. Port its intent, not its selectors (it matches on inline-style substrings, which is a prototype-only technique).

**≤900px**
- All two-column grids collapse to `1fr` with a 48px gap.
- 3/4/5-up card grids become 2-up; quarter-width cards become half-width.
- Tall decorative media boxes: `min-height: 620px → 78vw`, `height: 460px → 80vw` (max 460px).
- "Carla" accents tighten as listed above.
- `overflow-x: hidden` belongs on `<html>` only — putting it on `<body>` makes body a scroll container and breaks sticky/fixed positioning.

**≤640px**
- All card grids go 1-up (max-width 340px, centered).
- Type scale caps applied (see Typography).
- Section rhythm normalizes to 64px block padding; CTA bands to 92px.
- Pill buttons: 14px/26px padding, 12px text, `min-height: 44px`, `display: inline-flex` centered.
- Corner decoration icons: 140×140 at −56px offsets.

**Touch devices** (`(hover: none), (pointer: coarse)`): restore the native cursor and hide the tennis-ball pointer.

**Reduced motion** (`prefers-reduced-motion: reduce`): no entrance animations, no marquee, no auto-flipping photo stacks, no ball cursor. Content renders in its final state — never hidden. Animation *delays* are zeroed too, otherwise the Home intro curtain would still block the page for 2.7s.

**Two rules that are easy to get wrong when re-implementing:**
- Corner decorations must be matched as *descendants* of their section, not direct children. On Reservas the step-07 ornaments sit one level deeper, and a `section > svg` rule leaves them at desktop size covering the whole card.
- The alternating step layout on Reservas sets `order` on its two columns. When the grid collapses to one column, reset the order so the step number and copy always come **before** the screenshot — otherwise the even-numbered steps read backwards on a phone.

**Tap targets:** every link and button reaches 44px on touch. Text links (footer, "VER TODO →", social rows) get there via a transparent `::after` overlay so the visual layout and underline positions do not move.

## State & behavior
- **Language toggle** (`i18n.js`): ES default, EN alternative; swaps text nodes, `placeholder` and `alt` by key and persists the choice. The dictionary covers exactly the six shipped screens — proper nouns (coach and athlete names, `@handles`, brand names) are intentionally not keyed. Photo `alt` values follow the pattern `Foto N de M: <sujeto>`, translated by rule rather than one key per photo. **Both** language buttons (desktop and the one inside the mobile overlay) must be wired to the same handler and both labels kept in sync. Reimplement with the target stack's i18n solution rather than porting the script.
- **Mobile menu**: open/closed boolean; body scroll lock while open (`overflow: hidden` on `<body>`, since `<html>` is the scroll container); `aria-expanded` on the trigger and `aria-controls` pointing at the overlay; closes on route change, on Escape, and on resize above 900px.
- **Photo flip stacks**: index cycling on an interval per stack, paused when off-screen.
- **Scroll reveals**: IntersectionObserver, one-shot, respect `prefers-reduced-motion`.
- **StreetFit marquee**: continuous horizontal loop (`streetfit-marquee.js`).
- No forms with server state in these screens; the booking flow is instructional (it explains the third-party app), so no validation logic is required. CONTACTO and booking buttons are links.

## URLs y despliegue

El sitio canónico es **`https://cumbayapadelcenter.com`** (sin `www`), servido en GitHub Pages con dominio propio (ver `CNAME`). `www.cumbayapadelcenter.com` también resuelve — GitHub Pages lo redirige automáticamente al dominio raíz.

Las URLs son limpias **de verdad**, no vía reglas de reescritura de un hosting específico: cada página vive físicamente en su propia carpeta como `index.html` (`club/index.html`, `academia/index.html`…), que es como cualquier servidor estático —GitHub Pages, Netlify, Vercel, S3, lo que sea— resuelve `/club` de forma nativa, sin configuración. `/club` y `/club/` sirven el mismo archivo.

| URL | Archivo físico |
|---|---|
| `/` | `index.html` |
| `/club` | `club/index.html` |
| `/academia` | `academia/index.html` |
| `/clases` | `clases/index.html` |
| `/streetfit` | `streetfit/index.html` |
| `/reservas` | `reservas/index.html` |

**`<base href="/">`** en el `<head>` de cada página (y de `NavBar.dc.html`/`Footer.dc.html`) es lo que permite que las páginas vivan a distinta profundidad de carpeta sin romper nada: todas las rutas relativas del documento —imágenes, `mobile.css`, `i18n.js`, y el `fetch()` que `support.js` usa para traer los componentes `NavBar`/`Footer`— se resuelven contra la raíz del sitio en vez de contra la carpeta del documento actual. Sin este tag, una página en `/club/` intentaría cargar `fotos/...` como `/club/fotos/...` (404) y el `fetch('./NavBar.dc.html')` de `support.js` como `/club/NavBar.dc.html` (404) — es la pieza que hace que mover páginas a carpetas no rompa todo lo demás.

El `<link rel="canonical">` de cada página apunta a su URL limpia. `_redirects` (Netlify) y `vercel.json` (Vercel) cubren lo que un archivo estático no resuelve por sí solo:

- un solo host canónico (301 de `www` a sin `www`, en Netlify vía `_redirects`; en GitHub Pages, automático una vez configurado el `CNAME`),
- 301 de los nombres de archivo viejos del prototipo (`Club.dc.html`, etc. — ya no existen, se movieron a `club/index.html`) por si algo quedó enlazado con ellos,
- `404.html` con **status 404 real** (no un soft 404).

`NavBar.dc.html` y `Footer.dc.html` son componentes, no páginas: llevan `noindex` y están bloqueados en `robots.txt`. Se quedan en la raíz (no tienen su propia carpeta) porque nadie navega a ellos directamente — `support.js` los trae vía `fetch()` para inyectarlos en cada página.

**Enlaces internos.** Los `<a href>` del nav, footer y CTAs cruzados usan directamente la ruta limpia absoluta (`/club`, `/academia`…) — no hay redirección de por medio en la navegación normal dentro del sitio.

## SEO

Cada página indexable lleva, en el `<head>` real (no dentro del runtime, para que sea visible sin ejecutar JavaScript):

- `<title>` único de 51–60 caracteres y `<meta name="description">` única de 147–153
- `<link rel="canonical">` autorreferencial con el dominio de producción
- `robots` con `max-image-preview:large`
- Open Graph y Twitter completos, con imagen propia por página en `og/` (1200×630) y `og:image:alt` descriptivo
- JSON-LD `@graph`: `SportsActivityLocation` (dirección, coordenadas, teléfono, horarios, Instagram) + `WebSite` en el home + `BreadcrumbList` en las internas + `WebPage`

`robots.txt` y `sitemap.xml` están en la raíz. El sitemap lista solo las seis URLs limpias y canónicas.

**Datos del negocio usados en el JSON-LD** — todos salen de texto visible en el sitio; no se inventó ninguno: nombre, dirección, coordenadas del mapa, teléfono de WhatsApp, horarios y perfil de Instagram. No hay `aggregateRating`, `review`, `price` ni `FAQPage` porque el sitio no muestra esos datos.

### Landmarks y accesibilidad

- Cada página tiene un `<main id="contenido">`; el `<footer>` quedó **fuera** de `main` (antes estaba dentro).
- Enlace «Saltar al contenido» como primer tabulable, visible solo al recibir foco.
- `:focus-visible` con contorno lima: el cursor personalizado oculta el puntero, pero el foco de teclado tiene que verse.
- Reservas saltaba de `h1` a `h3`; se añadió un `h2` solo para lectores de pantalla (`.cpc-sr-only`) que nombra la sección de pasos.
- `prefers-reduced-motion` desactiva animaciones, marquee, volteo automático y cursor de pelota, y pone los delays a cero.

### Imágenes

`width`/`height` reales en todas las imágenes de `src` literal (para no provocar CLS), `loading="lazy"` + `decoding="async"` por defecto, y `loading="eager" fetchpriority="high"` solo en el logo y en la primera foto de cada hero (la candidata a LCP).

## Assets

**Bundled.** All referenced image files ship in this repo, at the paths the markup expects — nothing to export or drop in separately.

Formats: `.webp` photos (typically 654×982 portrait, ~75KB), `.jpg` app screenshots, `.png`/`.svg` logos and icons.

**`fotos/` — 64 photos**

| Group | Files |
|---|---|
| Home hero stack | `home-cpc-hero.webp`, `home-cpc-hero-2…5.webp` |
| Home family stack | `home-cpc-familia.webp`, `home-cpc-familia-2…5.webp` |
| Club | `sn-club.webp`, `inst-canchas / -gym / -duchas / -tienda / -cafe / -familia / -seguridad / -parqueadero.webp` |
| Academia | `ac-hero-1…4.webp`, `academia-cert-foto-v2.webp` |
| Coaches (Home + Academia) | `coach-juan / -arian / -luca / -nando / -diego / -alex / -enzo.webp` |
| Coaches (Clases) | `clases-juan / -arian / -luca / -nando / -diego / -alex.webp` |
| StreetFit | `sf-hero-1…4.webp`, `sf-quienes-1…5.webp`, `sf-mauricio.webp`, `sf-enzo.webp` |
| StreetFit athletes (2 faces each) | `sf-atleta-1…8.webp` + `sf-atleta-1b…8b.webp` |

**Project root — 26 files**

| Group | Files |
|---|---|
| Brand | `cpc-logo.png`, `favicon.png` |
| Feature icons (Home) | `cancha-icon.svg`, `mancuerna-icon.svg`, `ducha-icon.svg`, `maleta-icon.svg`, `termo-icon.svg`, `trofeo-icon.svg` |
| Section ornaments | `court-lime.svg`, `pesa-lime.svg`, `gimnasio-lime.svg`, `kettlebell-fucsia.svg`, `dolar-fucsia.png` |
| Sponsors | `sponsor-nox.png`, `sponsor-banco-guayaquil.png`, `sponsor-cafe-buendia.png`, `sponsor-automotores-continental-w2.png`, `sponsor-seguros-suarez-w2.png`, `sponsor-solhidrex.svg`, `sponsor-dolocordralan.svg` |
| Reservas walkthrough | `paso-1-descarga.jpg` … `paso-6-paga.jpg` |

## Contact

Every WhatsApp CTA points at **`+593 99 573 8363`** — nav CONTACTO (desktop + mobile), Home hero, Home sponsors CTA, Club, Clases, Academia, Reservas and the footer. Keep it in one place (config / env / CMS) rather than repeating the literal in ten templates.

Fonts are Google Fonts: `Instrument Serif` (400, 400 italic) and `Archivo` (400/500/600/700) + `Archivo Expanded` (500/600/700). Self-host in production.

## Files in this bundle
```
index.html             Home            /
club/index.html        Club            /club
academia/index.html    Academia        /academia
clases/index.html      Clases          /clases
streetfit/index.html   StreetFit       /streetfit
reservas/index.html    Reservas        /reservas
NavBar.dc.html          Nav + shared runtime (reveals, cursor, flip stacks) — fetched by every page
Footer.dc.html          Footer — fetched by every page
mobile.css              Responsive layer
i18n.js                 ES/EN toggle
streetfit-marquee.js    Marquee loop
support.js              Prototype runtime — do not port
CNAME                   Custom domain for GitHub Pages
.nojekyll               Disables GitHub Pages' default Jekyll build
```

Opening a page file directly from disk (double-click) won't work anymore now that `<base href="/">` pins every relative URL to the site root — that only resolves correctly when served from an actual web server. Run any static file server from the repo root (`python3 -m http.server`, `npx serve`, etc.) or visit the live site.
