# lp-factory

scandiweb's productized page factory. Single Next.js app hosting every custom
page on scandiweb.com that lives outside the main Webflow CMS – grouped by
category, one route per page. Adding a new page = a new folder, a `git push`,
and Webflow Cloud auto-deploys it. No per-page Vercel/Webflow Cloud project
setup, no dev hands.

## URL structure

```
scandiweb.com/<category>/<slug>
```

Categories are top-level folders under `app/`. The first path segment is the
category, the second is the page slug. The structure exists so different page
types can share the same factory while keeping clear breadcrumbs.

| Live URL | Source |
|---|---|
| `/` | `app/page.tsx` (internal index of categories) |
| `/accelerators` | `app/accelerators/page.tsx` (category index) |
| `/accelerators/school-photography-commerce` | `app/accelerators/school-photography-commerce/{layout,page}.tsx` |
| `/accelerators/school-uniform-commerce` | `app/accelerators/school-uniform-commerce/{layout,page}.tsx` |

## Adding a new page

### Within an existing category (e.g., a third accelerator)

```
app/accelerators/<new-vertical>-commerce/
  layout.tsx     ← per-page metadata (title, description, canonical, OG)
  page.tsx       ← page body (client component, "use client")
```

Commit + push to `main` → live at
`scandiweb.com/accelerators/<new-vertical>-commerce` in ~90 seconds.

### Adding a new category (e.g., case studies, playbooks)

```
app/<category>/
  layout.tsx     ← category-level metadata defaults
  page.tsx       ← optional category index listing all pages
  <slug>/
    layout.tsx   ← per-page metadata
    page.tsx     ← page body
```

Then update `app/page.tsx` so the new category appears in the internal index.
Commit + push.

## Per-page authoring spec

Three things only:

1. **`<category>/<slug>/layout.tsx`** – `export const metadata` with `title`,
   `description`, canonical via `alternates.canonical: "/<category>/<slug>"`,
   plus OG and Twitter card. Server component.
2. **`<category>/<slug>/page.tsx`** – the page body. Client component
   (`"use client"`) when it needs interactive behavior. Imports the shared
   chrome (`ScandiwebHeader`, `ScandiwebFooter`) and the `HubSpotForm`
   component if the page has a form.
3. **HubSpot form id** (if the page has a form) – passed via
   `<HubSpotForm formId="..." portalId="25724996" region="eu1" />`. Kristaps
   shares the form id before each new page ships.

Everything else (analytics, favicons, fonts, brand tokens, base SEO) is
already wired at the app level and applies to every route.

## Conventions

- **Shared components** in `components/`:
  - `scandiweb-header.tsx` – top bar + slide-out drawer (temporary mirror until
    DevLink lands; see `@temporary` notice in the file)
  - `scandiweb-footer.tsx` – full-width scandiweb.com footer mirror (same)
  - `hubspot-form.tsx` – HubSpot v2 embed with brand-matching CSS
- **Brand tokens** in `app/globals.css`: `--sw-black`, `--sw-mint`,
  `--sw-blue`, `--sw-beige`, etc.
- **GTM** loads once in `app/layout.tsx` (container `GTM-TCLKQ96`, same as
  scandiweb.com). All tracking flows through it; no per-page analytics setup.
- **Favicons** (`app/icon.svg`, `app/icon.png`, `app/apple-icon.png`) pulled
  from scandiweb.com's CDN. Apply to every route.

## Build

```bash
npm run build      # builds all routes
npm run dev        # local dev server on :3000
```

## Deploy

`git push origin main` triggers auto-deploy on Webflow Cloud. Manual deploy:

```bash
cd apps/lp-factory
vercel --prod --yes
```

## What's NOT in this app

- Webflow CMS pages (handled by the main scandiweb.com Webflow site)
- DevLink-imported components (`ScandiwebHeader` and `ScandiwebFooter` are
  hand-maintained mirrors of the live scandiweb.com nav and footer; swap them
  once DevLink works on the account)
- `sitemap.xml` / `robots.txt` (handled by the main scandiweb.com Webflow site)
