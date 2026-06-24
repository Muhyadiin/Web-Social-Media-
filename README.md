# Eng. Muhiadin Ali — Personal Brand & Social Media System

> **Helping developers, contractors, architects, and property owners make better
> construction decisions through accurate quantity surveying, structural
> engineering, and cost consulting.**

A complete personal-brand system for a Structural Engineer, Quantity Surveyor and
Construction Cost Consultant: a fast, SEO-optimized website plus a full social
media strategy and 30-day content plan — all deployable from this repo.

[![Deploy Website](https://github.com/Muhyadiin/Web-Social-Media-/actions/workflows/deploy-website.yml/badge.svg)](https://github.com/Muhyadiin/Web-Social-Media-/actions/workflows/deploy-website.yml)

## What's inside

| Area | Path | Description |
| --- | --- | --- |
| **Website** | [`website/`](./website) | 6-page responsive site (Home, About, Services, Portfolio, Insights, Contact), SEO-optimized, WhatsApp + email + lead forms. Deploys to GitHub Pages. |
| **Strategy & design docs** | [`docs/`](./docs) | Sitemap, wireframes, UI design, landing copy, CTA strategy, SEO keywords, implementation plan. |
| **Social media system** | [`social-media-system/`](./social-media-system) | Platform strategy, content pillars, 30-day calendar, post templates. |
| **Post scheduler (optional)** | [`social-media-management/`](./social-media-management) | A small Node tool to plan/track posts. |
| **CI/CD** | [`.github/workflows/`](./.github/workflows) | Auto-deploy the website + validation checks. |

## Quick start

```bash
# Preview the website locally
cd website
python3 -m http.server 8000     # open http://localhost:8000
# or just open website/index.html in your browser
```

## ⚙️ Configure before launch

Edit **`website/js/main.js`** → `SITE_CONFIG` (one place):

- `whatsapp` — your real WhatsApp number (digits only, incl. country code)
- `email` — your contact email
- `formEndpoint` — a free [Formspree](https://formspree.io) URL to receive form emails

Then set your real domain in `website/sitemap.xml`, `website/robots.txt`, and the
`canonical`/`og:url` tags in each page. Full steps in
[`docs/IMPLEMENTATION-PLAN.md`](./docs/IMPLEMENTATION-PLAN.md).

## Deliverables (all included)

- ✅ Complete website structure & **sitemap** — [`docs/SITEMAP.md`](./docs/SITEMAP.md)
- ✅ **Wireframes** — [`docs/WIREFRAMES.md`](./docs/WIREFRAMES.md)
- ✅ **UI design recommendations** — [`docs/UI-DESIGN.md`](./docs/UI-DESIGN.md)
- ✅ **Landing page copy** — [`docs/LANDING-COPY.md`](./docs/LANDING-COPY.md)
- ✅ **CTA strategy** — [`docs/CTA-STRATEGY.md`](./docs/CTA-STRATEGY.md)
- ✅ **SEO keywords** — [`docs/SEO-KEYWORDS.md`](./docs/SEO-KEYWORDS.md)
- ✅ **Social media strategy** — [`social-media-system/STRATEGY.md`](./social-media-system/STRATEGY.md)
- ✅ **30-day content calendar** — [`social-media-system/CONTENT-CALENDAR.md`](./social-media-system/CONTENT-CALENDAR.md)
- ✅ **Content templates** — [`social-media-system/CONTENT-TEMPLATES.md`](./social-media-system/CONTENT-TEMPLATES.md)
- ✅ **Folder structure & full implementation plan** — [`docs/IMPLEMENTATION-PLAN.md`](./docs/IMPLEMENTATION-PLAN.md)

## Services represented on the site

Bill of Quantities · Quantity Takeoff · Structural Design · Structural Analysis ·
Cost Estimation · Project Planning · Construction Consulting

## Tech

Semantic HTML + a CSS design system + vanilla JavaScript — **no build step**,
instant GitHub Pages deploy, excellent Lighthouse scores. (Astro is a documented
upgrade path if a blog CMS is needed later.)

## Deployment

Pushes to `main` that change `website/` auto-deploy to **GitHub Pages** via
[`.github/workflows/deploy-website.yml`](./.github/workflows/deploy-website.yml).
One-time setup: **Settings → Pages → Source → GitHub Actions**. See
[`docs/DEPLOYMENT.md`](./docs/DEPLOYMENT.md).

## License

[MIT](./LICENSE)
