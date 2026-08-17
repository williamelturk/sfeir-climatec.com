# Sfeir Climatec — v2

Migrated from Next.js 12 (Pages Router, Bootstrap + MUI) to:

- **Next.js 16.2** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (brand tokens in `src/app/globals.css`: `brand` #ffb703, `navy` #041230, `accent` #136aeb)
- **Embla Carousel** (hero slider, replaces Swiper)
- **react-photo-album + yet-another-react-lightbox** (galleries, upgraded to React-19-ready versions)
- **lucide-react** icons (replaces MUI icons / Flaticon)
- **Nodemailer** contact form via App Router route handler (`src/app/api/contact/route.ts`)

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in SMTP credentials for the contact form
npm run dev
```

## What changed vs the old site

- No more custom `server.js` — plain `next dev` / `next start`.
- All content (products, services, slides, contact info) centralized in `src/lib/data.ts`.
- The vertical topbar/sidebar "Products" widget is now a slide-over drawer in the header (`src/components/products-drawer.tsx`).
- `/card` redirects to `/card/nicolas-sfeir`; `/card/[name]` still accepts any name.
- Contact API now sends from the authenticated SMTP account with `replyTo` set to the visitor (the old code used the visitor's address as `from`, which most SMTP servers reject).
- Fonts (Rubik + Open Sans) load via `next/font` — no external `<link>` tags.

## Routes

`/` · `/about` · `/service` · `/library` · `/contact` · `/card/[name]` · `POST /api/contact`
