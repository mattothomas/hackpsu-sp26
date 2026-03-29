@AGENTS.md

# asknanaanything.tech — The Family Lore Archive

HackPSU Spring 2026 project. iPad-optimized PWA for recording grandparent stories, parsing them with Gemini, and playing back in a cloned voice via ElevenLabs.

## Stack
- Next.js 16 (App Router) + Tailwind v4 + TypeScript
- Tailwind v4: config is **CSS-only** via `@theme` in `app/globals.css` — no `tailwind.config.ts`
- Manifest lives at `app/manifest.ts` (Next.js route convention), NOT `public/manifest.json`
- Apple PWA meta tags set via `metadata.appleWebApp` in `app/layout.tsx`
- Fonts: Playfair Display (serif headings) + Inter (body), loaded via `next/font/google`
- CSS custom properties for the theme (e.g. `var(--color-crimson)`) — use inline styles for these since Tailwind v4 doesn't know about them without JIT scanning

## Build phases
- **Phase 1 (current):** Static frontend + mock data. No API routes, no Gemini, no ElevenLabs, no DB.
- Phase 2: Audio recording + Gemini multimodal parsing
- Phase 3: ElevenLabs voice cloning + playback
- Phase 4: Presage SDK gifting/payments

## Key files
- `app/page.tsx` — two-pane layout (record left, memory card right)
- `app/components/RecordButton.tsx` — `'use client'` mic button with pulse animation
- `app/globals.css` — Tailwind v4 `@theme` block with full nostalgic cookbook palette
- `app/manifest.ts` — PWA manifest (Next.js route, not static file)

## Design rules
- iPad landscape first (1024×768), min font 18px, WCAG AAA contrast
- Nostalgic cookbook aesthetic: sepia/parchment backgrounds, serif headings, crimson/burnt-orange CTAs
- Max 2 taps to start recording — no menus or onboarding
