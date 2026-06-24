# Eng. Muhiadin Ali — Personal Brand Website

A fast, modern, SEO-optimized personal brand website for a Structural Engineer,
Quantity Surveyor and Construction Cost Consultant. Built with semantic HTML, a
CSS design system, and vanilla JavaScript — **no build step**, deploys straight
to GitHub Pages.

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `index.html` | Value proposition, services, proof, lead capture |
| About | `about.html` | Story, credentials, values |
| Services | `services.html` | 7 services with anchors (`#boq`, `#takeoff`, …) |
| Portfolio | `portfolio.html` | Selected projects by category |
| Insights (Blog) | `blog.html` | Articles + newsletter signup |
| Contact | `contact.html` | Lead/quote form, WhatsApp & email |

## ⚙️ Configure before launch (one place)

Open **`js/main.js`** and edit the `SITE_CONFIG` block at the top:

```js
window.SITE_CONFIG = {
  whatsapp: "252630000000",        // ← your real WhatsApp number, digits only
  whatsappMessage: "…",            // default pre-filled chat message
  email: "muxiyadiinali@gmail.com",
  formEndpoint: ""                 // ← paste a Formspree endpoint to get form emails
};
```

- **WhatsApp:** every "Chat", "Free Quote" and the floating button build their
  link from `whatsapp`. Change it once here.
- **Forms:** with no `formEndpoint`, forms open the visitor's email app
  pre-filled. Add a free [Formspree](https://formspree.io) endpoint to receive
  submissions directly in your inbox (recommended).

Then update the domain in `sitemap.xml`, `robots.txt`, and the `canonical` /
`og:url` tags in each HTML file (currently `https://muhyadiin.github.io/Web-Social-Media-`).

## Preview locally

```bash
cd website
python3 -m http.server 8000      # then open http://localhost:8000
# or simply open index.html in a browser
```

## Assets to add

Drop these into `assets/` (filenames already referenced):

- `og-image.png` — 1200×630 social share image
- `icon-192.png`, `icon-512.png` — PWA/app icons
- `favicon.ico` — browser tab icon
- A professional headshot for the About page (optional but recommended)

## SEO built in

- Unique `<title>` + meta description per page
- Open Graph + Twitter Card tags
- Canonical URLs
- JSON-LD structured data (`ProfessionalService`, `Person`, `Service`, `ContactPage`)
- `sitemap.xml` + `robots.txt`
- Semantic headings, fast load, mobile-first

See [`../docs/SEO-KEYWORDS.md`](../docs/SEO-KEYWORDS.md) for the keyword strategy.

## Deployment

Pushes to `main` that change `website/` auto-deploy to GitHub Pages via
[`../.github/workflows/deploy-landing-pages.yml`](../.github/workflows/deploy-landing-pages.yml).
See [`../docs/IMPLEMENTATION-PLAN.md`](../docs/IMPLEMENTATION-PLAN.md).
