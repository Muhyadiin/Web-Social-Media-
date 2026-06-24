# Full Implementation Plan

A phased plan to take the personal brand from "built" to "generating leads".

## Folder structure

```
Web-Social-Media-/
├── website/                      # ← the personal brand website (deployed)
│   ├── index.html                # Home
│   ├── about.html
│   ├── services.html
│   ├── portfolio.html
│   ├── blog.html
│   ├── contact.html
│   ├── css/styles.css            # design system + all styles
│   ├── js/main.js                # config (WhatsApp/email/form) + interactions
│   ├── assets/                   # images, og-image, icons, favicon
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   └── README.md                 # setup & config guide
├── docs/                         # strategy & design deliverables
│   ├── SITEMAP.md
│   ├── WIREFRAMES.md
│   ├── UI-DESIGN.md
│   ├── LANDING-COPY.md
│   ├── CTA-STRATEGY.md
│   ├── SEO-KEYWORDS.md
│   ├── IMPLEMENTATION-PLAN.md    # this file
│   ├── CONTRIBUTING.md
│   └── DEPLOYMENT.md
├── social-media-system/          # social strategy + 30-day calendar
│   ├── STRATEGY.md
│   ├── CONTENT-CALENDAR.md
│   └── CONTENT-TEMPLATES.md
├── social-media-management/      # optional Node post-scheduler (from earlier)
│   ├── scheduler.js
│   └── posts.sample.json
└── .github/workflows/            # CI/CD (auto-deploy to GitHub Pages)
```

## Tech stack & rationale

- **HTML + CSS + vanilla JS, no build step.** Fastest possible load, perfect for
  GitHub Pages, trivial to maintain, excellent SEO. Zero dependencies = zero
  security/maintenance overhead.
- **Upgrade path (optional):** migrate to **Astro** later if you want a real CMS
  for the blog and reusable components — same HTML output, add Markdown blogging.
- **Forms:** [Formspree](https://formspree.io) (free tier) for inbox delivery,
  with a mailto fallback baked in.
- **Hosting:** GitHub Pages (free, fast, HTTPS). Custom domain supported.

## Phase 1 — Configure (Day 1)

1. Edit `website/js/main.js` → `SITE_CONFIG`:
   - real **WhatsApp number** (digits only, with country code)
   - confirm **email**
   - paste a **Formspree endpoint** (sign up, create a form, copy the URL)
2. Replace the domain `https://somsite.com` in: each page's `canonical` + `og:url`,
   `sitemap.xml`, `robots.txt`.
3. Add assets to `website/assets/`: `og-image.png` (1200×630), `favicon.ico`,
   `icon-192.png`, `icon-512.png`, a professional headshot.

## Phase 2 — Personalize content (Days 2–3)

1. Swap placeholder testimonials for **real client quotes**.
2. Replace portfolio placeholders with **real (anonymised) projects** + outcomes.
3. Tighten any copy to your voice (see `LANDING-COPY.md`).
4. Add your real social profile URLs in the footer of each page.

## Phase 3 — Deploy (Day 3)

1. Merge `website/` changes to `main`.
2. **Settings → Pages → Source → GitHub Actions** (one-time).
3. The workflow deploys automatically; site goes live at the Pages URL (or your
   custom domain — add a `CNAME` file in `website/` and configure DNS).

## Phase 4 — SEO & analytics (Days 4–5)

1. Add **Google Analytics 4** (or Plausible) snippet to each page `<head>`.
2. Verify in **Google Search Console**; submit `sitemap.xml`.
3. Set the quote form + WhatsApp clicks as **conversion events**.
4. Create / claim **Google Business Profile** for local SEO.

## Phase 5 — Content engine (ongoing)

1. Launch the **30-day social plan** (`social-media-system/CONTENT-CALENDAR.md`).
2. Publish the first 3 **blog articles** (mapped in `SEO-KEYWORDS.md`).
3. Repurpose each blog post into 3–5 social posts.
4. Review analytics monthly; double down on what drives quote requests.

## Definition of done (launch checklist)

- [ ] WhatsApp number + email + Formspree configured
- [ ] Domain set everywhere; sitemap/robots updated
- [ ] Real images, headshot, OG image, favicon added
- [ ] Real testimonials & portfolio in place
- [ ] Analytics + Search Console live, conversions tracked
- [ ] Pages deployment verified on the live URL
- [ ] First blog posts published
- [ ] Social profiles linked + first week of content scheduled

## Maintenance

- Publish 1+ blog post / month for SEO momentum.
- Refresh portfolio & testimonials as projects complete.
- Review keywords & analytics quarterly.
- Keep WhatsApp/email responses fast — speed of reply is your edge.
