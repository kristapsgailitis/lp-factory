# lp-factory

scandiweb's productized page factory. Single Next.js app that hosts every
custom page on scandiweb.com living outside the main Webflow CMS – grouped
by category, one route per page. Ships to Webflow Cloud at
`scandiweb.com/<category>/<slug>` on every push to `main`.

## Live structure

```
scandiweb.com/<category>/<slug>
              │           │
              │           └── slug folder under app/<category>/
              └── top-level folder under app/
```

| Live URL | Source |
|---|---|
| `/accelerators/school-photography-commerce` | `apps/lp-factory/app/accelerators/school-photography-commerce/` |
| `/accelerators/school-uniform-commerce` | `apps/lp-factory/app/accelerators/school-uniform-commerce/` |

Future categories (case studies, playbooks, research reports, etc.) live as
sibling folders under `apps/lp-factory/app/`. Adding a category is a one-time
Webflow Cloud route mapping; adding pages within a category is just code.

## Repo layout

```
.
├── apps/
│   └── lp-factory/                    Next.js app (single source of all custom scandiweb.com pages)
│       ├── app/
│       │   ├── layout.tsx             Root layout · GTM · favicons · fonts
│       │   ├── page.tsx               Internal index of categories
│       │   └── <category>/
│       │       ├── layout.tsx         Category-level metadata defaults
│       │       ├── page.tsx           Category index
│       │       └── <slug>/
│       │           ├── layout.tsx     Per-page metadata
│       │           └── page.tsx       Page body
│       ├── components/
│       │   ├── scandiweb-header.tsx   @temporary mirror of scandiweb.com nav (until DevLink)
│       │   ├── scandiweb-footer.tsx   @temporary mirror of scandiweb.com footer (until DevLink)
│       │   ├── hubspot-form.tsx       HubSpot v2 embed wrapper
│       │   └── ui/                    shadcn primitives
│       ├── public/                    static assets (logos, screenshots)
│       └── README.md                  per-page authoring spec
└── packages/
    └── ui/                            shared workspace package (placeholder)
```

## Authoring a new page

See [`apps/lp-factory/README.md`](apps/lp-factory/README.md) for the full per-page spec.

In short:

```bash
mkdir -p apps/lp-factory/app/<category>/<slug>
# create layout.tsx (metadata) + page.tsx (body)
git commit -am "ship: /<category>/<slug>"
git push origin main
# Webflow Cloud auto-deploys → live in ~90 seconds
```

## Build locally

```bash
npm install
npm run build              # builds the lp-factory app
npm run dev                # local dev server on :3000
```

## Conventions

- **Branch:** `main` is canonical. PRs against `main`. Direct pushes to `main` allowed for routine page edits, but architecture changes should go through PR review.
- **CI:** every PR runs `next build` on the lp-factory app. Failed builds block merge.
- **Em dash:** scandiweb writing guide says no em dashes (`—`). Use en dash with spaces (` – `) instead. Enforced by review, not lint.
- **Per-page form ID:** Kristaps shares the HubSpot form ID before each new page ships. Pass via `<HubSpotForm formId="..." portalId="25724996" region="eu1" />`.

## Status

| Stage | State |
|---|---|
| Single-app multi-route consolidation | ✅ Live (PR #1 merged) |
| GTM-TCLKQ96 wired in root layout | ✅ |
| scandiweb.com favicons | ✅ |
| Webflow Cloud route mapping (`/accelerators/*`) | ⚠️ Awaiting Mohammed's one-time setup |
| DevLink-imported nav/footer | ⚠️ Awaiting Webflow Support resolution |
| CI on every PR | ✅ |
