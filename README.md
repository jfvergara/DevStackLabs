# DevStack Labs Website

Marketing website for DevStack Labs built with Next.js, TypeScript, Tailwind CSS, and the App Router.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS 4
- App Router

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run lint
```

Static export (e.g. for GitHub Pages) uses the `out` folder. For a project site under `https://<user>.github.io/<repo>/`, set the base path at build time:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo-name> npm run build
```

## Deploy to GitHub Pages

1. Push the repo to GitHub.
2. In the repo: **Settings → Pages → Build and deployment**: set **Source** to **GitHub Actions**.
3. On every push to `main`, the workflow builds the static site and deploys it to GitHub Pages.

**URLs:**

- **Project site:** `https://<your-username>.github.io/<repo-name>/`
- **User/org site:** If the repo is named `<username>.github.io`, edit `.github/workflows/deploy-pages.yml` and set `NEXT_PUBLIC_BASE_PATH: ""` in the Build step so the site is served at `https://<username>.github.io/`.

## Custom domain

GitHub does **not** provide a custom domain (e.g. `yourname.com`). You can use your own domain with GitHub Pages:

1. Buy or use an existing domain (from any registrar).
2. In the repo: **Settings → Pages → Custom domain**: enter your domain (e.g. `www.devstacklabs.com`).
3. In your DNS provider, add a CNAME record pointing the host (e.g. `www`) to `<your-username>.github.io`, or A/AAAA records as shown in the GitHub Pages custom domain help.
4. After DNS propagates, GitHub will serve your site at that domain over HTTPS (optional: enable **Enforce HTTPS**).

## Project Structure

```text
app/
  [locale]/
    about/
    contact/
    products/
      [slug]/
    resources/
    services/
components/
  site/
  ui/
data/
  dictionary.ts
  products.ts
lib/
  i18n.ts
  utils.ts
middleware.ts
public/
  favicon.svg
  og-image.svg
```

## Editable Content

- Update all bilingual site copy in `data/dictionary.ts`.
- Add or edit bilingual product entries in `data/products.ts`.
- Product detail pages are generated automatically from `data/products.ts`.
- Supported locales are currently `en` and `es`.

## Notes

- The contact form currently includes front-end validation and is ready to connect to an API route, email service, or CRM workflow.
- `app/sitemap.ts` and `app/robots.ts` are included for SEO.
- Metadata and Open Graph defaults are configured in `app/layout.tsx`.
