# Website Structure & Sitemap

## Brand positioning

> **"Helping developers, contractors, architects, and property owners make better
> construction decisions through accurate quantity surveying, structural
> engineering, and cost consulting."**

## Site map (information architecture)

```
Home (/)
├── About (/about.html)
├── Services (/services.html)
│   ├── #boq          — Bill of Quantities
│   ├── #takeoff      — Quantity Takeoff
│   ├── #design       — Structural Design
│   ├── #analysis     — Structural Analysis
│   ├── #cost         — Cost Estimation
│   └── #consulting   — Project Planning & Construction Consulting
├── Portfolio (/portfolio.html)
├── Insights / Blog (/blog.html)
└── Contact (/contact.html)

Global (every page):
├── Sticky header nav + "Free Quote" CTA
├── Floating WhatsApp button
└── Footer (services, company, contact, social)

Conversion paths (always ≤ 1 click to convert):
├── WhatsApp (header, hero, CTA bands, footer, floating button)
├── Email (footer, contact)
└── Lead form (contact, blog newsletter)
```

## Page-by-page purpose & primary CTA

| Page | Goal | Primary CTA | Secondary CTA |
| --- | --- | --- | --- |
| **Home** | Communicate value, build trust, route to service/contact | Get a Free Quote | Explore Services / WhatsApp |
| **About** | Establish credibility & trust (13+ yrs, lecturer) | Work with me | WhatsApp |
| **Services** | Explain 7 services, qualify the lead | Request a Quote | WhatsApp / per-service quote |
| **Portfolio** | Prove track record | Request case studies | Get a Free Quote |
| **Insights** | SEO + authority + email capture | Subscribe | Get a Free Quote |
| **Contact** | Capture the lead | Send request (form) | WhatsApp / Email |

## Machine-readable sitemap

A crawlable `sitemap.xml` lives at `website/sitemap.xml` and is referenced from
`website/robots.txt`. Update the domain before launch.

## Recommended URL structure (future, if migrating to a framework)

```
/                       Home
/about
/services
/services/bill-of-quantities
/services/quantity-takeoff
/services/structural-design
/services/structural-analysis
/services/cost-estimation
/services/consulting
/portfolio
/portfolio/<project-slug>
/blog
/blog/<article-slug>
/contact
```
