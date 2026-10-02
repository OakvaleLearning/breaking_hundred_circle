# Breaking Hundred Circle — Next.js

Next.js (App Router) rebuild of the Breaking Hundred Circle site, with Framer Motion
driving the page and scroll animations.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Structure

```
src/app/
  layout.tsx            fonts, header, footer, scroll-progress bar
  template.tsx          per-route enter transition
  globals.css           design tokens + all component styles
  page.tsx              Our story (home)
  membership/           Membership Circle
  fellowship/           The Fellowship
  annual-event/         Annual event
src/components/         motion primitives and sections
src/lib/site.ts         nav, offerings, method — single source of copy
```

## Motion

`src/components/motion.ts` holds the shared easing (`cubic-bezier(.16,1,.3,1)`) and
variants. Build new sections from these rather than hand-rolling transitions:

- `Reveal` / `RevealGroup` + `RevealItem` — scroll-triggered fade-up, once per element
- `AnimatedHeading` — per-word mask reveal, keeps normal text wrapping
- `Counter` — counts up on first view (used in `.statline`)
- `Hero` — scroll-linked parallax on the backdrop plus content fade-out
- `Marquee` — infinite pillar ticker
- `Faq` — height-animated accordion, one panel at a time

Everything is suppressed under `prefers-reduced-motion: reduce` (see the bottom of
`globals.css`).

## Images

All photography is stubbed with `<Placeholder label="..." />`, which renders a labelled
plum panel with a shimmer sweep.

See **[IMAGE-PROMPTS.md](./IMAGE-PROMPTS.md)** for generation prompts for all seven
images, the aspect ratio each slot renders at, and the `next/image` swap-in code.

| Where | Placeholder | Ratio |
| --- | --- | --- |
| Home hero | women in conversation at a leadership gathering | 3:2 |
| Membership | members at a Circle conversation | 5:4 |
| Fellowship | Fellows at a learning lab | 5:4 |
| Annual event | keynote, workshop, celebration dinner | 4:5 ×3 |
| Social card | not yet wired up, see IMAGE-PROMPTS.md | 1200×630 |

## Copy

Home-page copy is carried over verbatim from the original site. The Membership,
Fellowship and Annual event pages were **newly written** here — only the home page was
present in the exported HTML — using the facts the export did carry (£299/year
membership, the mailto join flow, Cohort 3 in 2028, the five-part method). Replace that
copy with the real page text when you have it; it all lives in the page files and
`src/lib/site.ts`.

The join form has no backend: as in the original `site.js`, it opens a pre-filled email
to `admin@breakinghundred.org`.
