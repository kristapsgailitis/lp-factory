# lp-factory

scandiweb's productized landing-page factory. Single Next.js app, one route per LP. Adding a new LP is a new folder under `app/` — no new Vercel project, no new Webflow Cloud project, no dev hands required.

## Live routes

| Slug | Live at |
|---|---|
| `/` | LP index (internal) |
| `/school-photography-commerce` | scandiweb.com/school-photography-commerce |
| `/school-uniform-commerce` | scandiweb.com/school-uniform-commerce |

## Adding a new LP

```
app/
  <new-vertical>-commerce/
    layout.tsx     ← per-route metadata (title, description, og)
    page.tsx       ← LP body (use ScandiwebHeader, ScandiwebFooter, HubSpotForm)
```

That's it. Commit + push to `main` → Webflow Cloud and Vercel pick it up → live at `scandiweb.com/<new-vertical>-commerce` in ~90 seconds.

## Conventions

- **`page.tsx`** is a client component (`"use client"`) — it imports `motion` and uses interactive behavior. Per-route metadata lives in `layout.tsx` (server component) next to it.
- **Shared components** live in `components/`:
  - `scandiweb-header.tsx` — top bar + slide-out drawer
  - `scandiweb-footer.tsx` — full-width scandiweb.com footer mirror
  - `hubspot-form.tsx` — HubSpot v2 embed with brand-matching CSS
- **Brand tokens** are in `app/globals.css` (`--sw-black`, `--sw-mint`, `--sw-blue`, `--sw-beige`, etc.).
- **HubSpot form ID** is supplied per-LP via the `<HubSpotForm formId="..." />` prop.

## Build

```bash
npm run build      # builds all routes
npm run dev        # local dev server
```

## Deploy

`git push origin main` triggers auto-deploy on Vercel (and Webflow Cloud once wired). Manual deploy:

```bash
cd apps/lp-factory
vercel --prod --yes
```

## What's NOT in this app

- Webflow CMS pages (handled by main scandiweb.com Webflow site)
- DevLink-imported components (`ScandiwebHeader` and `ScandiwebFooter` are hand-maintained mirrors of the live scandiweb.com nav and footer; swap them once DevLink works on the account)
