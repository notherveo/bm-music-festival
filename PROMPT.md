Build a complete, production-quality multi-page Next.js (App Router) website — a large-scale **electronic music festival**. Underground, futuristic, immersive, high-energy.

## Routes (all implemented + linked from nav)
`/`, `/lineup`, `/schedule`, `/tickets`, `/experience`, `/venue`, `/faq`

## Design language
- Palette: deep black, acid green, electric orange, silver. Oversized experimental type; full-screen artist photography; abstract motion graphics.

## Motion language (signature)
- Kinetic typography, glitch transitions, animated backgrounds, parallax, immersive page transitions, scrolling marquees, live countdown.

## Components to write yourself
`components/reveal.tsx`, `components/countdown.tsx`, `components/marquee.tsx`, `components/glitch-text.tsx`, `components/lineup-grid.tsx`, `components/schedule-table.tsx`, `components/tier-cards.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`
Create ``lib/lineup.ts`, `lib/schedule.ts``.

## Content
- `/` — kinetic hero + countdown; lineup teaser; schedule teaser; ticket tiers; experience; FAQ; CTA.
- `/lineup` — filterable artist grid (fictional).
- `/schedule` — interactive day/stage timetable.
- `/tickets` — ticket tier cards (no real checkout) with CTAs.
- `/experience` — immersive sections (stages, art, food).
- `/venue` — illustrated festival map + travel info.
- `/faq` — accordion.

## Notes
Label artists/schedule as fictional demo; no fake checkout.

## Engineering contract (follow exactly)
**Stack is already configured — NEVER emit config files** (no package.json / tsconfig / next.config / postcss).
- Next.js App Router + TypeScript, Tailwind CSS v4, shadcn/ui primitives.
- Icons: `lucide-react`.
- Animation: motion v12 — `import { motion, AnimatePresence, useScroll, useTransform, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";`
- Class helper: `import { cn } from "@/lib/utils";`
- NO 3D/WebGL/map/chart libraries. Do NOT import `three`, `@react-three/*`, `mapbox-gl`, `d3`, `recharts`, etc. (not installed). Build any "3D"/chart/map visuals with CSS 3D transforms, inline SVG, gradients, and motion.

**Components you may import (ONLY these exist in the project):**
- `@/components/ui/button` -> `{ Button }`
- `@/components/ui/card` -> `{ Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }`
- `@/components/ui/badge` -> `{ Badge }`
- `@/components/ui/input` -> `{ Input }`
- `@/components/ui/label` -> `{ Label }`
Everything else you MUST write yourself under `components/` and import your own file. NEVER import from `@/components/magicui/*`, `@/components/reactbits/*`, `@/components/blocks/*`, or any path you did not create.

**Hard rules — the build runs `tsc --noEmit` + `next build` and MUST pass:**
1. Any file using hooks, `motion`, or browser APIs starts with `"use client"` on line 1. (A dynamic route page with `generateStaticParams`/`generateMetadata` stays a SERVER component; put interactive UI in `"use client"` children.)
2. Icons are components: `<ArrowUpRight className="size-4" />`. Never `{icon.size}`. JSX component names MUST be Capitalized (never `<icon />`).
3. Shared chrome (header/nav, footer) lives in `app/layout.tsx`, rendered EXACTLY once; pages must NOT render it.
4. Import every symbol you use; no unused imports; no `any`; type props explicitly.
5. Photos: plain `<img loading="lazy" alt="..." className="... object-cover">`; use `https://picsum.photos/seed/<unique-slug>/<w>/<h>`; graphics via CSS gradients / inline SVG. No empty src.
6. Respect reduced motion (`useReducedMotion()`); skip/shorten animations when true.
7. Realistic, specific, non-repetitive copy (fictional business). No lorem ipsum / TODO / sample text.
8. Responsive mobile-first; never overflow horizontally.
9. Clearly label testimonials, results, figures, and imagery as illustrative demo content. Use a FICTIONAL business name + sample contact details; never present invented credentials, results, certifications, or reviews as verified facts.

## Output
Start with a short `thinking` plan (a few lines). Then emit ONLY `<file path="...">...</file>` blocks — no markdown fences, no prose. Emit `app/layout.tsx`, every route, every component, and any `lib/*` data module you reference.
