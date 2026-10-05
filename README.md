# Videofolio

A motion-heavy portfolio template for video editors and content creators, built
with **Next.js 16**, **React 19**, **Tailwind v4** and **GSAP**.

It's a complete, deployable portfolio — plus a `/admin` dashboard that commits
edits straight to your GitHub repo, so you never touch a CMS.

Built and maintained by [tharunramagiri](https://github.com/tharunramagiri) ·
MIT licensed · free to fork and use commercially.

> **This is a template.** All content, branding and project data are placeholder
> values. See [Make it yours](#make-it-yours).

---

## Features

- **Cinematic scroll** — GSAP + ScrollTrigger with pinned sections, per-project
  hover accents and a blueprint for each scroll-driven animation in
  [`SCROLL_BLUEPRINTS.md`](SCROLL_BLUEPRINTS.md)
- **3D hero** — React Three Fiber with postprocessing
- **Self-hosting admin** — create, edit, reorder, upload and delete projects at
  `/admin`; changes are written back to `data/projects.ts` via the GitHub
  Contents API
- **Client-side video upload** — browser uploads direct to Vercel Blob using
  short-lived client tokens, so large files never pass through your server
- **AI suggestions** — Vercel AI Gateway drafts categories and tags from an
  uploaded clip, with a keyword fallback when no key is set
- **Client-side search** — Fuse.js over an index built at build time
- **Contact form** — Resend, with a graceful 503 when unconfigured
- **SEO baseline** — generated sitemap, `robots.txt`, RSS feed, Open Graph and
  Twitter images, and JSON-LD
- **PWA** — manifest, service worker and an install prompt
- **Theming** — dark/light with no flash, plus a sound toggle and a command
  palette (⌘K)

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Styling | Tailwind CSS v4 |
| Animation | GSAP + ScrollTrigger, Lenis, Framer Motion |
| 3D | Three.js via React Three Fiber + drei |
| Search | Fuse.js |
| Media | Vercel Blob |
| Email | Resend |
| AI | Vercel AI Gateway |

## Getting started

```bash
git clone https://github.com/tharunramagiri/videofolio.git
cd videofolio
npm install
npm run dev
```

Open http://localhost:3000.

**You do not need any environment variables to run the site.** The public
portfolio works out of the box. Env vars unlock the optional features below.

```bash
cp .env.example .env.local   # then fill in what you want
```

### Environment variables

All optional — see [`.env.example`](.env.example) for the annotated template.

| Variable | Unlocks |
| --- | --- |
| `ADMIN_SECRET_KEY` | The `/admin` dashboard |
| `GITHUB_TOKEN` | Persisting admin edits back to `data/projects.ts` |
| `GITHUB_REPO` / `GITHUB_BRANCH` | Target repo for those commits |
| `BLOB_READ_WRITE_TOKEN` | Video uploads and the storage stats panel |
| `VERCEL_OIDC_TOKEN` / `AI_GATEWAY_API_KEY` | AI category/tag suggestions |
| `RESEND_API_KEY` | The contact form (otherwise it returns 503) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for sitemap/RSS/OG/JSON-LD |

`vercel env pull .env.local` will fetch the Vercel-managed ones for you.

### Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Make it yours

Content lives in TypeScript — no CMS, no database.

1. **`data/site.ts`** — your name, email, location, role, and social links.
2. **`data/projects.ts`** — the `projects` and `reels` arrays. Projects with an
   empty `videoUrl` or `thumbnail` render a placeholder, so you can add entries
   before uploading media. Everything is typed; TypeScript will tell you what's
   missing.
3. **`data/categories.ts`** — project categories.
4. **`app/layout.tsx`** — the SEO `description` and default title.
5. **`public/`** — your OG image and favicon (`app/icon.tsx`,
   `app/opengraph-image.tsx`).

Then set `NEXT_PUBLIC_SITE_URL` to your real domain so SEO metadata is correct.

### The admin panel

Point `GITHUB_TOKEN` + `GITHUB_REPO` at your own fork, set `ADMIN_SECRET_KEY`,
and visit `/admin?key=…`. Projects are edited in the UI and committed back to
`data/projects.ts`; snapshots of each save land in `backups/` (git-ignored).

Use a **fine-grained** token scoped to that one repository with Contents
read/write — not a classic account-wide token.

## Deploying

Deploy to [Vercel](https://vercel.com) — the only platform this is tested
against:

1. Import the repo.
2. Add whatever environment variables you want under **Settings → Environment
   Variables**.
3. Deploy. `NEXT_PUBLIC_SITE_URL` should be set to your production origin.

## Project structure

```
app/                 routes, layouts, API handlers
  admin/             the /admin dashboard
  api/               route handlers (contact, admin, feed.xml)
  work/[category]/   filtered work listings + project detail
components/
  admin/             dashboard UI
  sections/          page-level sections
  ui/                reusable primitives
data/                site config, categories, projects — no media
lib/                 seo, theme, sound, admin client + server
public/              static assets
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please read
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) first.

Security issues: see [SECURITY.md](SECURITY.md) — don't open a public issue.

## License

[MIT](LICENSE) © 2026 tharunramagiri — use it, remix it, ship it commercially.
Attribution is appreciated; the only requirement is keeping the copyright line.

The template is yours to rebrand. Replace the name, copy and links in
[`data/site.ts`](data/site.ts) and the copyright line above if you'd rather
credit yourself.