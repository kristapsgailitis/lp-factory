<!--
Thanks for the PR. Pick the section that matches what you're shipping and
delete the rest. If multiple apply, keep all relevant sections.
-->

## What

<!-- One sentence: what does this PR do? -->

## Why

<!-- One sentence: why now? Link any campaign / outreach / brief if relevant. -->

---

### If this PR ships a new page

- [ ] New folder at `apps/lp-factory/app/<category>/<slug>/`
- [ ] `layout.tsx` exports `metadata` with title, description, canonical (`/<category>/<slug>`), OG, Twitter
- [ ] `page.tsx` is `"use client"` and imports `ScandiwebHeader`, `ScandiwebFooter`, `HubSpotForm` from `@/components/...`
- [ ] HubSpot `formId` filled in (Kristaps shares before publish)
- [ ] `next build` passes locally
- [ ] No em-dashes in copy (`—` → ` – ` per writing guide)

### If this PR ships a new category

- [ ] New folder at `apps/lp-factory/app/<category>/` with its own `layout.tsx` + optional `page.tsx`
- [ ] Mohammed pinged to map `scandiweb.com/<category>/*` in Webflow Cloud (one-time per category)
- [ ] Root `app/page.tsx` updated to list the new category

### If this PR is architecture / chrome / config

- [ ] Touched files documented in PR description
- [ ] Build verified locally
- [ ] No breaking changes to per-page authoring spec (or README updated to reflect)

---

## Live URL after merge

`scandiweb.com/<category>/<slug>` — auto-deployed by Webflow Cloud on push to `main`.
