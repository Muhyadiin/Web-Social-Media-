# Contributing

Thanks for contributing! This guide covers the workflow for this repository.

## Branching model

| Branch | Purpose |
| --- | --- |
| `main` | Stable, deployable code. Protected — changes land via pull request. |
| `landing-pages` | Development of the landing pages. |
| `social-media-management` | Development of the social media tooling. |

Create a branch per project (or per feature) and open a pull request into `main`.

```bash
# Start work on a project branch
git checkout -b landing-pages

# ...make changes...
git add .
git commit -m "feat(landing): add pricing section"
git push -u origin landing-pages
```

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(landing): add testimonials section
fix(scheduler): handle empty posts file
docs: update deployment guide
```

## Pull requests

1. Push your branch and open a PR into `main`.
2. CI ([`.github/workflows/ci.yml`](../.github/workflows/ci.yml)) runs validation
   checks automatically.
3. Request a review (see *Working with Claude* below).
4. Once approved and green, squash-merge into `main`.
5. Merges to `main` that touch `landing-pages/` auto-deploy to GitHub Pages.

## Code style

- **HTML/CSS/JS:** keep it dependency-free and readable; 2-space indentation.
- **JavaScript:** plain ES (no transpiler). Comment non-obvious logic.

## Working with Claude

This repository is connected to [Claude Code](https://claude.com/claude-code)
through the GitHub integration.

- **Ask for changes:** comment `@claude` on an issue or PR describing what you want.
- **Request a review:** mention `@claude` on a pull request and it will review the diff.
- **Work in a session:** open the repo at [claude.ai/code](https://claude.ai/code)
  to make changes directly from a Claude Code session.

When asking Claude for help, be specific about the file or behavior you want
changed — clear requests get better results.
