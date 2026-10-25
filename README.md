# BaelApps Website

The corporate website for **BaelApps**, with a page for each product:

| Route | Page |
| --- | --- |
| `/` | Home |
| `/products` | All products |
| `/products/boutiquo360` | Boutiquo360 (boutique management) |
| `/products/trackbuddi` | TrackBuddi (school bus tracking) |
| `/about`, `/contact` | Company pages |
| `/privacy`, `/terms` | Legal |

**Stack:** React 19 · Vite · TypeScript · Tailwind CSS v4 · Lucide icons. No backend.

## Commands

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # type-check, build, and pre-render every route into dist/
npm run preview   # serve dist/ exactly as production will (clean URLs, real 404)
npm run lint      # oxlint
npm run format    # prettier
```

## How it works

- **Pre-rendered pages.** `npm run build` renders each route to its own HTML file
  (`dist/about/index.html`, …) with its own `<title>`, description, canonical URL and Open
  Graph tags, then the page hydrates in the browser. Search engines and link previews see
  full content without running JavaScript. See `src/entry-server.tsx` and `scripts/prerender.mjs`.
- **Tiny router.** `src/router/` contains a small client-side router (no dependency).
  Routes and per-page SEO are defined in `src/router/routes.tsx`.
- **Themes.** Components use semantic colour names (`paper`, `ink`, `accent`, `hl`…).
  `src/index.css` defines the BaelApps theme on `:root` and a theme per product via
  `[data-theme='…']`, so the same component takes on each product's identity.

## Project structure

```
src/
  data/
    site.ts                 company info, contact details, navigation
    products.ts             product registry (order = order on the site)
  products/
    types.ts                the Product data model
    boutiquo360/            content.ts + visuals/ (mockups, logo, sample data)
    trackbuddi/             content.ts + visuals/
  components/
    layout/                 Header, Footer, PageHero, LegalPage
    home/                   Hero, ProductEcosystem, WhyBaelApps, Philosophy, ProductSpotlight…
    products/               ProductPage + reusable sections (ProductHero, ProductFeatures,
                            ProductShowcase, ProductJourney, ProductStages, ProductCTA…)
    ui/                     Button, Reveal, SectionHeading, logos, ornaments
  pages/                    Home, Products, About, Contact, Privacy, Terms, NotFound
    products/               Boutiquo360, TrackBuddi
  router/                   router, routes and SEO
```

## Adding a product

1. Create `src/products/<slug>/content.ts` exporting a `Product` (see `products/types.ts`).
   Its `sections` array picks from the shared section types (`features`, `showcase`,
   `journey`, `steps`, `values`, `audiences`, …) in any order.
2. Add any product-specific visuals in `src/products/<slug>/visuals/`.
3. Add a `[data-theme='<slug>']` colour block in `src/index.css`.
4. Register it in `src/data/products.ts`, and add a page in `src/pages/products/` plus an
   entry in the `productPages` map in `src/router/routes.tsx`.

It then appears in the navigation, footer, home page, products page and build output automatically.

## Deployment

### Azure Static Web Apps

- **App location:** `/`
- **Output location:** `dist`
- **Build command:** `npm run build`

The build writes `dist/staticwebapp.config.json` with a rewrite for every route, a 404 page,
security headers and long-term caching for hashed assets.

### GoDaddy web hosting (cPanel)

Upload the **contents** of `dist/` (including the hidden `.htaccess`) into `public_html/`.
`.htaccess` serves clean URLs (`/about`), the 404 page, forces HTTPS and redirects `www` to
`baelapps.com`.

### Azure App Service / any static host

Upload the contents of `dist/`. Each route is a folder with an `index.html`, and `404.html`
is the not-found page.

## Before launch

| What | Where |
| --- | --- |
| Contact email, optional phone / WhatsApp, location | `contact` in `src/data/site.ts` |
| Contact form delivery (e.g. Formspree, or an Azure Function) | `contactForm.endpoint` in `src/data/site.ts` — until set, the form offers to open the visitor's email app instead of sending |
| Social profile links (hidden while empty) | `social` in `src/data/site.ts` |
| Production domain (canonical / Open Graph URLs) | `site.url` in `src/data/site.ts` |
| Share image `og-image.png` (1200×630) | `public/` |
| Logos (text-based placeholders today) | `components/ui/BaelAppsLogo.tsx`, `products/*/visuals/Brand.tsx`, `public/favicon.svg` |
| Privacy Policy and Terms wording — have these reviewed | `src/pages/Privacy.tsx`, `src/pages/Terms.tsx` |
