# Landing Pages

Responsive, fast-loading marketing landing pages built with plain HTML, CSS, and
vanilla JavaScript — no build step required.

## Preview locally

Just open the file in a browser:

```bash
open index.html        # macOS
xdg-open index.html    # Linux
```

Or serve it with any static server for nicer routing:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Structure

```
landing-pages/
├── index.html      # Page markup
├── css/
│   └── styles.css  # All styling (CSS custom properties, responsive)
└── js/
    └── main.js     # Nav toggle, footer year, form validation
```

## Customising

- **Colors & spacing:** edit the CSS custom properties in the `:root` block of `css/styles.css`.
- **Copy & sections:** edit `index.html` directly — sections are clearly commented.
- **Form handling:** `js/main.js` currently fakes submission. Point it at your API
  endpoint (e.g. a serverless function or form service) for production.

## Deployment

Every push to `main` that changes anything under `landing-pages/` is automatically
published to GitHub Pages by
[`.github/workflows/deploy-landing-pages.yml`](../.github/workflows/deploy-landing-pages.yml).
See [docs/DEPLOYMENT.md](../docs/DEPLOYMENT.md).
