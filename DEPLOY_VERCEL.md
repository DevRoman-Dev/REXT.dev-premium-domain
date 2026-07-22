# Deploy Ahero.dev to Vercel

This project is a TanStack Start app (SSR via Nitro). It ships with a
`vercel.json` that switches the Nitro build preset to `vercel`, so Vercel
will produce a proper serverless output at `.vercel/output`.

## 1. Push the code to GitHub

In Lovable click **GitHub → Connect to GitHub** and create the repo, or push
manually:

```bash
git init
git add .
git commit -m "init: ahero.dev landing"
git branch -M main
git remote add origin https://github.com/<you>/ahero-dev.git
git push -u origin main
```

## 2. Import into Vercel

1. Go to https://vercel.com/new
2. Import the GitHub repo.
3. **Framework Preset:** `Other` (leave as-is — `vercel.json` handles it).
4. **Build Command:** already set by `vercel.json` → `NITRO_PRESET=vercel bun run build`
5. **Output Directory:** already set → `.vercel/output`
6. **Install Command:** already set → `bun install`
7. Click **Deploy**.

That's it — you'll get a `*.vercel.app` URL in ~1 minute.

## 3. Connect the ahero.dev domain

1. In the Vercel project → **Settings → Domains** → add `ahero.dev` and
   `www.ahero.dev`.
2. At your domain registrar (where you bought ahero.dev), point DNS:
   - `A` record `@` → `76.76.21.21`
   - `CNAME` record `www` → `cname.vercel-dns.com`
3. Wait for DNS to propagate (usually a few minutes). Vercel auto-issues an
   SSL certificate.

## Notes

- If Vercel doesn't have Bun available on your plan, change
  `installCommand` to `npm install` and `buildCommand` to
  `NITRO_PRESET=vercel npm run build`.
- Environment variables (if you add any later) go in
  **Vercel → Settings → Environment Variables** — no code changes needed.
- To deploy to Cloudflare Pages instead, remove `vercel.json`; the default
  Nitro preset in this template is `cloudflare`.