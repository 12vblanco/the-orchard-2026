# The Orchard Bar

Marketing website for **The Orchard Bar**; a casual restaurant and bar in Canonmills, Edinburgh, a few minutes' walk from the Botanic Gardens.

It's a single-page React site driven entirely by typed content data: the menus, venue details, opening hours, promotions and section copy all live in `src/data/*.ts`, so updating the site means editing data, not hunting through JSX. Every component is styled with hand-written CSS Modules on top of a shared design-token system, no CSS framework, no UI library.

🌐 Live: [https://theorchardbar.co.uk/](https://theorchardbar.co.uk/)

## Tech stack

| Layer      | Technology                                                |
| ---------- | --------------------------------------------------------- |
| Framework  | React 19                                                  |
| Language   | TypeScript 6                                              |
| Routing    | React Router 7                                            |
| Build tool | Vite 8                                                    |
| Styling    | CSS Modules + CSS custom-property design tokens           |
| Testing    | Vitest 4 + Testing Library (jsdom)                        |
| Linting    | ESLint 10 (typescript-eslint, react-hooks, react-refresh) |
| Booking    | TableSense embed (iframe)                                 |
| Icons      | hand-built SVGs                                           |
| Hosting    | Static `/dist` build (Netlify-style `_headers` included)  |

No CSS framework and no component library, every layout, icon and animation is bespoke.

## Features

- **Content-as-data**: all copy, menus, prices, opening hours, social links and promotions live in typed files under `src/data/`. Components are presentational; editing the site is editing data.
- **Typed menu engine**: `menu.ts` models food and drinks sub-menus (Main, Gluten-Free, Sunday Roasts, Kids, Beers, Gins, Whisky, Wine, Rums, Tea/Coffee/Sherry) as categories of items with prices, descriptions, dietary flags (vegetarian / vegan / gluten-free), notes and a `featured` flag. The Menu UI renders food/drink tabs, sub-menu switching, a dietary-icon legend, and auto-builds the "featured" cards from any item flagged `featured`.
- **Documented menu-update workflow**: `src/data/MENU_UPDATE_INSTRUCTIONS.md` is a strict checklist for transcribing an incoming menu document into `menu.ts` verbatim (preserving the original spellings, casing and punctuation real customers will see).
- **Time-aware event promo**: banners in `promos.ts` carry start/end dates; `EventPromo` shows only the currently-active banner and opens the promo image as a full-screen overlay (high z-index, on top of everything) with a tap/click close control.
- **Booking integration**: an embedded TableSense booking widget with a branded loading spinner, alongside address, map link and contact details.
- **Scraper-resistant contact info**: email addresses are stored as obfuscated tokens (and rendered as an image where shown), decoded only on user interaction, so the raw `name@domain` never sits in the markup or bundle for harvesters.
- **Responsive by design**: mobile / tablet / tablet-landscape breakpoints, an animated hamburger menu (three lines that morph into an X) opening a near-full-screen overlay, fluid typography driven by the token scale, and `prefers-reduced-motion` support.
- **Design-token system**: `index.css` centralises colour, type-scale, spacing, radius, transition and z-index tokens that every CSS Module consumes.
- **Dynamic copyright year** and a centred, wrapping footer with social links and opening hours.

## Sections

The homepage is a single scrollable page with anchored sections reached from the nav:

| Anchor     | Section                                                            |
| ---------- | ------------------------------------------------------------------ |
| (top)      | Hero, welcome, intro, CTAs, rotating policy line, event promo      |
| `#menu`    | Menu, food/drinks tabs, sub-menus, dietary legend, featured dishes |
| `#booking` | Booking, TableSense reservation widget + contact/address           |
| `#art`     | Exhibitions, rolling local-artist exhibitions in the side room     |
| `#contact` | Contact details (within the footer/booking area)                   |

React Router is wired in (`BrowserRouter`) for future standalone pages such as `/terms`, which is already referenced in the nav/footer data.

## How it's built

A conventional Vite + React + TypeScript SPA, with two ideas doing most of the work:

1. **A typed content layer.** Everything a non-developer would want to change lives in `src/data/`. The menu in particular is a small schema (`MenuType` → `SubMenu` → `MenuCategory` → `MenuItem`), so the same data simultaneously powers the tab switcher, the per-sub-menu content, the dietary icons and the featured-card grid; they can't drift because they read from one source.
2. **CSS Modules over design tokens.** Each component owns a scoped `*.module.css`; shared values (palette, type scale, spacing, z-index layers) come from custom properties in `index.css`. Responsiveness is achieved by scaling the type tokens at each breakpoint, so headings across every section resize from one place.

```
src/
├── main.tsx                  # client entry
├── App.tsx                   # BrowserRouter + page composition
├── index.css                 # design tokens, reset, base typography, breakpoints
├── components/
│   ├── navigation/           # responsive nav + animated burger menu
│   ├── hero/                 # Hero + EventPromo (time-gated banner & image modal)
│   ├── menus/                # Menu, MenuSwitch, MenuContent, FeaturedCards, DietIcons
│   ├── booking/              # TableSense embed + contact details
│   ├── art/                  # Exhibitions section
│   ├── footer/               # centred footer, social icons, dynamic year
│   └── button/               # shared CTA button
└── data/                     # typed content (menu, venue, hero, promos, footer, art, booking, navigation)
    └── MENU_UPDATE_INSTRUCTIONS.md
public/
└── _headers                  # static-host header rules
```

## Getting started

Prerequisites: **Node 20+** and npm.

```bash
git clone https://github.com/12vblanco/the-orchard-2026.git
cd the-orchard-2026
npm install
npm run dev          # http://localhost:5173
```

| Script            | What it does                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Vite dev server                                           |
| `npm run build`   | Type-check (`tsc -b`) then build static assets to `/dist` |
| `npm run preview` | Serve the production build locally                        |
| `npm run lint`    | ESLint                                                    |
| `npm run test`    | Vitest (watch mode)                                       |

To update a menu, follow `src/data/MENU_UPDATE_INSTRUCTIONS.md` and edit the relevant sub-menu in `src/data/menu.ts`.

## What I learned

- **Modelling content as types pays off.** Designing the menu as a small typed schema meant tabs, sub-menus, dietary icons and featured cards all fall out of one data file, publishing a change is editing data, and nothing can fall out of sync.
- **Stacking contexts are the whole game for overlays.** Getting the promo image to sit on top of _everything_ (including a `z-index`-ed nav) came down to where each fixed element's stacking context is created, not just a bigger number.
- **Protecting a real business's inbox.** Storing the contact email as obfuscated tokens / an image keeps it out of the static markup, which meaningfully cuts the scraping that plain `mailto:` addresses attract.
- **One token scale beats per-component media queries.** Driving responsive type from custom properties scaled at each breakpoint kept the CSS small and consistent across sections.

## What could be improved

- **SEO/meta.** `index.html` still ships the placeholder `<title>` and default favicon; the site needs real titles, description, Open Graph tags and `Restaurant`/`LocalBusiness` structured data.
- **Routing.** The `/terms` link exists in the data but isn't yet rendered by a `<Routes>` definition; it currently resolves to the single page.
- **Deployment.** The build must publish the compiled `/dist` output (not source); the `public/_headers` workaround for serving `.tsx` is a stop-gap that the proper static deploy removes the need for. A Vite `base` is also required if hosted under a project sub-path.
- **Test coverage.** Only a couple of component tests exist (and `Button.test.tsx` is an empty placeholder), worth a smoke test per section.

## Future releases

- Dedicated `/terms` (and privacy) pages via React Router.
- Full SEO pass: page metadata, Open Graph cards, and `Restaurant` JSON-LD.
- A lightweight editing flow (or CMS) for menu and promo updates.
- Online-ordering / events integrations as the venue needs them.

## Credits

Built by **Victor Blanco**, Edinburgh-based frontend developer & designer.
🌐 [victorblancoweb.com](https://victorblancoweb.com)

**The Orchard Bar** — 1–2 Howard Place, Canonmills, Edinburgh EH3 5JZ · 0131 550 0850

https://github.com/user-attachments/assets/83ac295b-51ef-4270-a57b-1b74af024d64
