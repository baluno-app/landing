# landing

> **This repo is not the live site.** Production marketing lives at
> [baluno.me](https://baluno.me) and is a newer build that exists in **none** of the
> `baluno-app` repos. What is here is the earlier GitHub Pages site, last touched
> 2025-11-14. Before changing anything, confirm with Andrei whether this repo is being
> revived or retired — a careful fix shipped from here reaches nobody.

One of five sibling repos in the `baluno-app` org (`app`, `baluno-web`, `landing`,
`baluno-design-system` — repo name `design-system` — and `dev-and-ops`). It is the only
public one. Non-code docs live in `dev-and-ops/`; this repo's analysis is
`dev-and-ops/reference/landing.md`.

## What it is

Next.js 16 App Router, static export (`output: "export"`, unoptimized images,
`basePath: "/landing"`, trailing slashes), React 19, Tailwind 4, TypeScript strict.
Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to
GitHub Pages. Three pages: the download funnel, Privacy Policy, Terms.

## Known-wrong content — do not treat as intentional

The copy predates the product's repositioning and was never updated. If you are reviving
this repo, these are the first things to fix, and none of them are style preferences:

- The hero markets **"Mindful breathing exercises"**. The product is an ADHD / energy-based
  day planner (ADR 0003). This is the old positioning, not a tagline choice.
- `app/layout.tsx` still exports the **`create-next-app` default metadata** — the page
  title is literally "Create Next App".
- Terms and Privacy list **`support@baluno.app` and `privacy@baluno.app`**. `baluno.app`
  was never registered, so both addresses bounce. Canonical domain is `baluno.me`
  (ADR 0004), which matters for store review: the app links to
  `baluno.me/{terms,privacy,citations}` and those must resolve.
- ~~The deploy workflow hardcodes `NEXT_PUBLIC_SITE_URL`~~ — removed 2026-08-08 (ENG-9).
  It pointed at the dead `baluno.the-ihor.com` and no code in this repo ever read it, so
  the deletion has no effect on the built site. The two `NEXT_PUBLIC_*` store URLs that
  `app/page.tsx` *does* read still come from repository secrets.

Deliberately no line numbers above — they go stale faster than the copy does. Grep for the
strings.
