# Security Policy

## Supported versions

This is a personal portfolio template. Fixes land on the default branch; there
are no long-lived release branches to backport to.

| Version | Supported |
| --- | --- |
| `main` / `template` | ✅ |

## Reporting a vulnerability

**Please do not open a public issue for a security problem.**

Instead, use GitHub's private reporting on this repository
(**Security → Report a vulnerability**). If that isn't available to you, open a
normal issue that says only "private security report — please open an advisory"
with no technical detail, and wait for a response.

Include: what the issue is, which file/route is involved, how to reproduce it,
and the impact. Please give reasonable time for a fix before disclosing
publicly.

## What counts as a vulnerability here

Relevant, given this project ships an admin panel:

- Bypassing `ADMIN_SECRET_KEY` on `/admin` or `/api/admin/*`
- Reading another visitor's data, or writing content without the secret
- Any unauthenticated path to `GITHUB_TOKEN`, `BLOB_READ_WRITE_TOKEN`,
  `RESEND_API_KEY` or `ADMIN_SECRET_KEY`
- Stored XSS in project titles/descriptions/tags rendered on public pages
- SSR of user-controlled input without escaping

Not vulnerabilities:

- The admin panel having no user accounts (it is deliberately single-secret)
- Rate limits on the contact form (that's an abuse-reporting issue)
- Missing security headers on a static portfolio

## Deploying your fork securely

This template is designed to be self-hosted, so a few things are your job:

1. **Set `ADMIN_SECRET_KEY`** to a long random value. Leave it unset and the
   admin panel is read-only rather than open, but don't rely on that.
2. **Use a fine-grained `GITHUB_TOKEN`** scoped to *this one repo* with Contents
   read/write — not a classic personal access token with repo-wide scope.
3. **Set `NEXT_PUBLIC_SITE_URL`** to your real origin so sitemap, RSS, Open Graph
   and JSON-LD aren't generated against `localhost`.
4. **Keep `.env*` out of git.** `.gitignore` already does this, and
   `.env.example` is a blank template — never put real values in it.
5. Note that `BLOB_READ_WRITE_TOKEN` gives access to your whole blob store. If
   uploads aren't public, anyone who forks this and fills in their own token is
   only affecting their own deployment, but be deliberate about store visibility.

## Security notes for reviewers

The admin secret comparison in `lib/admin/auth.ts` uses a timing-safe compare
and never leaks the secret's length. Still worth knowing: the check gates a
panel that commits to your GitHub repo, so treat `ADMIN_SECRET_KEY` as the most
valuable credential in the deployment.