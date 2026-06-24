# UI / UX Design Recommendations

A premium, professional, trustworthy design language for a senior construction
consultant. The goal: look credible and expensive, load instantly, and make
contacting you effortless.

## Design principles

1. **Trust over flash** — clean layout, generous whitespace, real numbers.
2. **One clear action per screen** — every section funnels to a quote/WhatsApp.
3. **Mobile-first** — most leads will arrive on a phone; tap targets are large.
4. **Speed is a feature** — system fonts fallback, no heavy frameworks, lazy reveal.
5. **Accessible** — semantic HTML, labels, contrast, focus states, aria attributes.

## Color palette

| Token | Hex | Use |
| --- | --- | --- |
| Ink (navy-black) | `#0d1b2a` | Body text, dark bands |
| Brand navy | `#15324f` | Headers, primary surfaces, buttons |
| Engineering blue | `#2b6cb0` | Links, accents, gradients |
| Premium gold | `#e0a82e` | Primary CTAs, highlights (use sparingly) |
| Soft background | `#f5f7fa` | Alternating sections |
| Line | `#e6eaf0` | Borders, dividers |
| Muted | `#5b6b7d` | Secondary text |

**Rationale:** navy + gold reads as established, premium and engineering-grade
(blueprint blue + a confident accent). Gold is reserved for conversion actions so
the eye is always drawn to "Get a Quote".

## Typography

- **Headings:** Poppins (600–800) — modern, geometric, authoritative.
- **Body:** Inter (400–600) — highly legible at all sizes.
- **Fallback:** system UI stack, so text renders instantly if fonts are slow.
- **Scale:** fluid `clamp()` sizing — large confident headlines, comfortable body
  (1.65 line-height).

## Components

- **Buttons:** pill-shaped; gold = primary conversion, navy = secondary, outline =
  tertiary, green = WhatsApp. Subtle lift on hover.
- **Cards:** white, soft border, soft shadow, lift on hover. Used for services,
  portfolio, posts, testimonials.
- **Icon tiles:** navy→blue gradient with gold glyph — ties brand colors together.
- **Stats bands:** dark navy with large gold/white numbers for instant credibility.
- **Floating WhatsApp:** always-present green FAB, bottom-right.

## Imagery guidance

- Use **real photos**: you on site, drawings, BOQ printouts, finished structures.
- A **professional headshot** on Home hero card + About page builds personal brand.
- Avoid generic stock; if needed, use clean construction/blueprint imagery.
- Provide an **OG share image** (1200×630) with your name, titles and a tagline.

## Motion

- Gentle scroll-reveal (fade + 16px rise) via `IntersectionObserver`.
- Hover lifts on buttons/cards. Nothing distracting — motion supports, never dominates.

## Accessibility checklist

- [x] Semantic landmarks (`header`, `main`, `footer`, `nav`)
- [x] Labels on all form fields; `aria-live` status messages
- [x] Visible focus rings on inputs
- [x] Color contrast AA for text on backgrounds
- [x] `aria-label` on icon-only links (WhatsApp, social)
- [ ] Add descriptive `alt` text once real images are added

## Performance recommendations

- Keep images compressed (WebP, < 200 KB each); add `loading="lazy"`.
- Self-host fonts or keep the single Google Fonts request (already `preconnect`-ed).
- No JS framework — total JS is a few KB.
- Target Lighthouse 95+ on Performance, SEO, Best Practices, Accessibility.
