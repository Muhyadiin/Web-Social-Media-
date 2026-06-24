# Call-to-Action (CTA) Strategy

The site is engineered so a visitor is **never more than one click from converting**.

## Conversion hierarchy

1. **Primary action — Get a Free Quote** (lead form / WhatsApp). Gold buttons.
2. **Secondary action — Chat on WhatsApp** (instant, low-friction). Green buttons.
3. **Tertiary action — Explore Services / Read** (nurture, build trust).

## Where each CTA appears

| Location | CTA | Type |
| --- | --- | --- |
| Header (every page) | Free Quote 💬 (WhatsApp) | Persistent primary |
| Hero (home) | Get a Free Quote + Explore Services | Primary + tertiary |
| Hero card (home) | Request a Consultation | Primary |
| Each service block | Get a [service] quote | Contextual primary |
| Stats / value sections | More about me | Nurture |
| Portfolio | Request case studies / Free Quote | Primary |
| Blog | Subscribe + Free Quote | Capture + primary |
| Every page (CTA band) | Get a Free Quote + Chat on WhatsApp | Primary + secondary |
| Footer (every page) | Email + WhatsApp | Secondary |
| Floating button (every page) | WhatsApp 💬 | Persistent secondary |

## Why WhatsApp is central

For this audience and region, WhatsApp is the highest-intent, lowest-friction
channel. Every WhatsApp link is **pre-filled** with a message so the visitor just
taps send. All links are generated from one config value (`SITE_CONFIG.whatsapp`).

## Lead form strategy

- **Short by default** — name, email, phone, service, message. Low friction.
- **Service dropdown** qualifies the lead and routes your reply.
- **Smart fallback** — if no Formspree endpoint is set, the form opens the
  visitor's email client pre-filled; with an endpoint, it emails you directly.
- **Reassurance microcopy** — "reply within 1 business day", "no obligation".

## Copy patterns that convert

- Lead with the outcome: *"Build smarter"*, *"price your project accurately"*.
- Remove risk: *"Free"*, *"No obligation"*, *"within 1 business day"*.
- Be specific: *"±2% accuracy"*, *"tender-ready"*, *"13+ years"*.
- Use action verbs: *Get*, *Request*, *Chat*, *Send*.

## Recommended next-level CTAs (roadmap)

- **Lead magnet:** a free downloadable "BOQ checklist" or "Cost estimating
  template" in exchange for email — powerful for the blog/newsletter.
- **Calendar booking:** add a Calendly link for "Book a 15-min consultation".
- **Quote calculator:** a simple interactive estimator to capture warm leads.

## Measuring CTAs

Add Google Analytics 4 (or Plausible) and track:
- WhatsApp click events
- Form submissions (conversions)
- Quote-button clicks per page
- Source of converting traffic (which social channel / search term)

> Set the quote form submission and WhatsApp click as **conversion events** so you
> can see which pages and which social posts actually generate leads.
