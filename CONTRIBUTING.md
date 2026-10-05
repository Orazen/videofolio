# Contributing

Thanks for taking the time to contribute. This is a personal portfolio project,
so the bar for changes is mostly "does it keep the thing working and look good".

## Getting set up

```bash
npm install
cp .env.example .env.local   # then fill in what you need
npm run dev
```

The site runs at http://localhost:3000. Most of it works with **no environment
variables at all** — env vars are only needed for the admin panel, uploads, the
AI suggestions and the contact form.

## Before you open a PR

```bash
npm run lint
npm run build
```

Both must pass. There is a Husky pre-commit hook that lints staged files.

## Ground rules

- **One concern per PR.** Bug fix and a restyle in the same PR is hard to review.
- **Don't reformat files you didn't touch.** The diff should be readable.
- **Match the existing style.** Tailwind v4, no CSS modules, `"use client"`
  only where you need browser APIs.
- **Don't add new runtime dependencies** without explaining why in the PR body.
  This project ships with a deliberately small dependency list.

## Where things live

| Path | What it is |
| --- | --- |
| `app/` | Routes, layouts, and API route handlers |
| `components/sections/` | Page-level sections |
| `components/ui/` | Reusable primitives (footer, palette, players) |
| `components/admin/` | The `/admin` dashboard |
| `data/` | Site config, categories and project content — **no media files** |
| `lib/` | Helpers: SEO, theme, sound, admin client/server |

## Content changes

Portfolio content lives in TypeScript, not a CMS:

- `data/site.ts` — name, email, socials, nav
- `data/projects.ts` — the project and reel arrays
- `data/categories.ts` — project categories

Projects with an empty `videoUrl` / `thumbnail` render a placeholder, so you can
add entries before you have media. Everything else is typed — if you add a
project, TypeScript will tell you what's missing.

## Reporting bugs

Open an issue with what you did, what you expected, what happened, and your
Node version. A screen recording is worth a thousand words for animation bugs.

## Security

Please **don't** open a public issue for a security problem. See
[SECURITY.md](SECURITY.md).

## License

By contributing you agree that your work is licensed under the
[MIT License](LICENSE).