# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FL Electricidad — a single-page landing site for an electrical services business in Argentina. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- No test framework is configured.

## Architecture

- **Single-page app**: `src/app/page.tsx` composes all sections in order: Navbar → Hero → Services → WhyChooseUs → Testimonials → Contact → Footer → WhatsAppFab.
- **Layout components** (`src/components/layout/`): Navbar, Footer, WhatsAppFab.
- **Section components** (`src/components/sections/<name>/`): each page section in its own folder.
- Path alias: `@/*` maps to `./src/*`.

## Styling

- Tailwind CSS v4 via `@tailwindcss/postcss` plugin (no `tailwind.config` file — theme is defined in `src/app/globals.css` using `@theme`).
- Material Design 3 color token system defined as CSS custom properties in `globals.css` (e.g. `--color-primary-container`, `--color-on-surface`).
- Fonts: Space Grotesk (`--font-headline`) for headings, Manrope (`--font-body`) for body text — loaded via `next/font/google` in `layout.tsx`.
- Material Symbols Outlined icon font loaded via Google Fonts CDN.

## Key Details

- Language is Spanish (html `lang="es"`).
- Remote images allowed from `lh3.googleusercontent.com` (configured in `next.config.ts`).
