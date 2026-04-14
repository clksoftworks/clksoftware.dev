# CLK Software — clksoftware.dev

Marketing/portfolio site for CLK Software, a custom web development consultancy.
Built with Next.js 14, TypeScript, and Tailwind CSS. Deployed to Cloudflare Pages with edge runtime.

## Commands

Always use **npm** (not bun, yarn, or pnpm).

```
npm run dev            # Next.js dev server
npm run build          # Next.js production build
npm run lint           # ESLint
npm run pages:build    # Cloudflare Pages build (via @cloudflare/next-on-pages)
npm run pages:preview  # Build + local Cloudflare Pages preview with Wrangler
npm run pages:deploy   # Build + deploy to Cloudflare Pages
```

## Edge Runtime (IMPORTANT)

All pages and API routes run on Cloudflare Workers edge runtime (`export const runtime = "edge"`).

- DO NOT use Node.js APIs (`fs`, `path`, `crypto`, `Buffer`, `process`, etc.)
- DO NOT add npm packages that depend on Node.js built-in modules
- Access Cloudflare bindings (D1, env vars) via `getRequestContext()` from `@cloudflare/next-on-pages`
- Database is **Cloudflare D1** (serverless SQLite) — accessed through environment bindings, not connection strings
- Auth via `@auth0/nextjs-auth0` — session and user lookup go through services in `src/app/services/`
- Email delivery via **Resend** (`resend` package)

## Project Structure

```
src/app/
├── layout.tsx                    # Root layout (fonts, background image)
├── page.tsx                      # Homepage (edge runtime)
├── globals.css                   # Tailwind + custom CSS utilities
├── api/                          # API routes (all edge runtime)
│   ├── contact/                  # Contact form → Resend email
│   ├── auth/[auth0]/             # Auth0 integration
│   └── user/                     # User CRUD (D1)
├── services/                     # Business logic
│   ├── session-service.ts        # Auth0 session management
│   └── user-service.ts           # D1 database operations
└── components/
    ├── blocks/                   # Page section components
    │   ├── hero.tsx
    │   ├── service-list.tsx
    │   ├── contact-form.tsx      # Client component ("use client")
    │   └── journey/              # SVG journey illustrations between sections
    ├── header.tsx
    ├── footer.tsx
    └── ...
```

- Path alias: `@/*` → `./src/*`
- Server components by default; only use `"use client"` when interactivity requires it
- Page section components go in `components/blocks/`
- SVG journey illustrations that visually connect sections go in `components/blocks/journey/`

## Design System

Dark theme with warm, natural tones:

- **Background**: `hsl(111, 8%, 18%)` — dark green-gray, with a grid-paper SVG pattern
- **Foreground**: `rgb(239, 232, 219)` — warm off-white
- **Accent**: copper/warm gold (#C38558 range)
- **Font families** (via CSS variables in Tailwind config):
  - `font-sans` — primary body text (local woff2)
  - `font-business` — Cabin (Google Font), UI and navigation
  - `font-display` — decorative headings (local woff2)
  - `font-signature` — signature/handwritten style (local woff2)
- Animations via `tailwindcss-animated` plugin
- Full-bleed background image in root layout (`public/background.webp`)

## Commit Messages

Use conventional-ish prefixes, lowercase:

```
fix: correct contact form validation
enhance: improve lighthouse score
feat: add portfolio section
chore: update dependencies
docs: add deployment notes
```

## Deployment

- **CI**: GitHub Actions on push to `main` → Cloudflare Pages (`.github/workflows/publish.yml`)
- Build pipeline: `npm install` → `npm run pages:build` → deploy `.vercel/output/static`
- The `.vercel/output/static` directory is an intermediate artifact from `@cloudflare/next-on-pages`, not a Vercel deployment
- Secrets live in `.dev.vars` (gitignored) — see `.dev.vars.example` for required keys:
  - `AUTH0_SECRET`, `AUTH0_BASE_URL`, `AUTH0_ISSUER_BASE_URL`, `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET`
  - `RESEND_API_KEY`
- Discord webhook notification on deploy completion
