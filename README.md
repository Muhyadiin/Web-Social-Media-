# Web & Social Media

> A monorepo of web development and social media management projects — landing pages, automation tooling, and the documentation that ties them together.

[![Deploy Landing Pages](https://github.com/Muhyadiin/Web-Social-Media-/actions/workflows/deploy-landing-pages.yml/badge.svg)](https://github.com/Muhyadiin/Web-Social-Media-/actions/workflows/deploy-landing-pages.yml)

## What's inside

| Project | Description |
| --- | --- |
| [`landing-pages/`](./landing-pages) | Responsive marketing landing pages, deployed automatically to GitHub Pages. |
| [`social-media-management/`](./social-media-management) | A lightweight post scheduler & content planner for social media accounts. |
| [`docs/`](./docs) | Contribution guidelines, deployment guide, and project documentation. |

## Quick start

```bash
# Clone the repository
git clone https://github.com/Muhyadiin/Web-Social-Media-.git
cd Web-Social-Media-

# Open the landing page locally
open landing-pages/index.html        # macOS
xdg-open landing-pages/index.html    # Linux

# Try the social media scheduler
cd social-media-management
node scheduler.js
```

## Repository structure

```
Web-Social-Media-/
├── .github/
│   └── workflows/
│       └── deploy-landing-pages.yml   # CI/CD: deploy landing pages to GitHub Pages
├── docs/
│   ├── CONTRIBUTING.md                # How to contribute
│   └── DEPLOYMENT.md                  # Deployment guide
├── landing-pages/                     # Static marketing sites
│   ├── index.html
│   ├── css/styles.css
│   └── js/main.js
├── social-media-management/           # Post scheduling tooling
│   ├── scheduler.js
│   └── posts.sample.json
└── README.md
```

## Branching model

Each project lives on its own branch so work can progress independently before
merging into `main`:

- `main` — stable, released code
- `landing-pages` — landing page development
- `social-media-management` — social media tooling development

See [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md) for the full workflow.

## CI/CD

Pushes to `main` that touch `landing-pages/` trigger the
[deploy workflow](./.github/workflows/deploy-landing-pages.yml), which publishes
the landing pages to **GitHub Pages**. See [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md).

## Working with Claude through GitHub

This repository is wired up for [Claude Code](https://claude.com/claude-code)
via the GitHub integration. You can:

- Mention `@claude` in an issue or pull request comment to ask for changes or reviews.
- Open a PR and let Claude review the diff and suggest fixes.
- Start a session at [claude.ai/code](https://claude.ai/code) to work on the repo directly.

See [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md#working-with-claude) for details.

## License

Released under the [MIT License](./LICENSE).
