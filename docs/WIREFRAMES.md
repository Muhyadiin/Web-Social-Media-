# Wireframes (low-fidelity)

ASCII wireframes for each page. These map 1:1 to the implemented HTML so you can
see the layout logic at a glance. Desktop layout shown; everything collapses to a
single column on mobile (see UI-DESIGN.md → responsive).

## Global header & footer

```
┌───────────────────────────────────────────────────────────────┐
│ [MA] Eng. Muhiadin Ali        Home About Services Portfolio    │
│      QS · Structural · Cost    Insights Contact   [ Free Quote ]│
└───────────────────────────────────────────────────────────────┘
                          ... page content ...
┌───────────────────────────────────────────────────────────────┐
│ Brand + blurb   │ Services  │ Company  │ Get in touch           │
│ [social icons]  │  links    │  links   │ email / WhatsApp / loc │
│───────────────────────────────────────────────────────────────│
│ © Year Eng. Muhiadin Ali        Structural · QS · Cost         │
└───────────────────────────────────────────────────────────────┘
                                              ( 💬 floating WhatsApp )
```

## Home (index.html)

```
┌─ HERO ─────────────────────────────────────────────┐
│  eyebrow: QS · Structural · Cost Consulting         │
│  H1: Build smarter with ACCURATE QUANTITIES ...     │   ┌──────────────┐
│  lead paragraph (value proposition)                 │   │ "What I      │
│  [ Get a Free Quote ] [ Explore Services ]          │   │  deliver"    │
│  13+ yrs | 200+ BOQs | ±2% accuracy                 │   │ • BOQ        │
│                                                     │   │ • Takeoff…   │
│                                                     │   │ [Consult]    │
└─────────────────────────────────────────────────────   └──────────────┘
┌─ CREDIBILITY STRIP ─ Developers · Contractors · Architects · Owners ─┐
┌─ SERVICES (3×2 cards) ──────────────────────────────┐
│ [BOQ] [Takeoff] [Structural Design]                 │
│ [Structural Analysis] [Cost Est.] [Planning]        │
└─────────────────────────────────────────────────────┘
┌─ VALUE PROP (2 col) ── text + 4-step process ───────┐
┌─ STATS BAND (dark) ─ 13+ | 200+ | 50+ | 100% ───────┐
┌─ PORTFOLIO PREVIEW (3 cards) ─ [View full portfolio]┐
┌─ TESTIMONIALS (3 quotes) ───────────────────────────┐
┌─ BLOG PREVIEW (3 cards) ─ [Read the blog] ──────────┐
┌─ CTA BAND ─ "Ready to price your project?" [Quote][WA]┐
```

## About (about.html)

```
┌─ PAGE HERO ─ breadcrumb · H1 · intro ───────────────┐
┌─ STORY (2 col) ─ narrative text │ "At a glance" +    │
│                                  "Core expertise"    │
┌─ STATS BAND (dark) ─ 13+ | 200+ | 50+ | 1000s ──────┐
┌─ VALUES (3 cards) ─ Accuracy · Integrity · Speed ───┐
┌─ CTA BAND ──────────────────────────────────────────┘
```

## Services (services.html)

```
┌─ PAGE HERO ─ H1 + [Request a Quote][Ask] ───────────┐
┌─ #boq        text ⇄ card (alternating, 2 col) ──────┐
┌─ #takeoff    card ⇄ text   (soft band) ─────────────┐
┌─ #design     text ⇄ card ───────────────────────────┐
┌─ #analysis   card ⇄ text   (soft band) ─────────────┐
┌─ #cost       text ⇄ card ───────────────────────────┐
┌─ #consulting card ⇄ text   (soft band) ─────────────┐
┌─ CTA BAND ──────────────────────────────────────────┘
   (each service block: eyebrow, H2, paragraph, ✓ list, quote CTA)
```

## Portfolio (portfolio.html)

```
┌─ PAGE HERO ─────────────────────────────────────────┐
┌─ GRID 3×2 work cards ──────────────────────────────┐
│  [thumb] tag + title + 1-line outcome  (×6)         │
└─ [Request detailed case studies] ───────────────────┘
┌─ CATEGORY BAND (dark) ─ Residential|Commercial|…────┐
┌─ CTA BAND ──────────────────────────────────────────┘
```

## Insights / Blog (blog.html)

```
┌─ PAGE HERO ─────────────────────────────────────────┐
┌─ GRID 3×2 post cards ──────────────────────────────┐
│  [thumb] category·read-time + title + excerpt (×6)  │
└─────────────────────────────────────────────────────┘
┌─ NEWSLETTER CARD ─ name + email + [Subscribe] ──────┐
┌─ CTA BAND ──────────────────────────────────────────┘
```

## Contact (contact.html)

```
┌─ PAGE HERO ─────────────────────────────────────────┐
┌─ 2 COLUMN ─────────────────────────────────────────┐
│ LEAD FORM card           │ "Other ways to reach me" │
│  name | email            │  💬 WhatsApp             │
│  phone | service ▼       │  ✉️ Email                │
│  project details ▱       │  📍 Location             │
│  [ Send request ]        │  ⏱️ Response time        │
│  status / fallbacks      │  "What to include" card  │
│                          │  [ Chat on WhatsApp ]    │
└─────────────────────────────────────────────────────┘
```
