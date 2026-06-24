# Deployment Guide

This repository deploys the landing pages to **GitHub Pages** automatically via
GitHub Actions.

## How it works

The workflow [`.github/workflows/deploy-landing-pages.yml`](../.github/workflows/deploy-landing-pages.yml):

1. Triggers on every push to `main` that changes files under `landing-pages/`
   (or can be run manually from the **Actions** tab via *Run workflow*).
2. Uploads the `landing-pages/` directory as a Pages artifact.
3. Deploys that artifact to GitHub Pages.

## One-time setup

GitHub Pages must be set to deploy from GitHub Actions:

1. Go to **Settings → Pages** in the repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push a change to `landing-pages/` (or run the workflow manually).
4. Once the run finishes, your site is live at:

   ```
   https://Muhyadiin.github.io/Web-Social-Media-/
   ```

## Deploying manually

From the **Actions** tab:

1. Select **Deploy Landing Pages**.
2. Click **Run workflow** → choose the `main` branch → **Run workflow**.

## Custom domain (optional)

1. Add a `CNAME` file inside `landing-pages/` containing your domain, e.g. `example.com`.
2. Configure the domain's DNS to point at GitHub Pages.
3. Set the custom domain under **Settings → Pages**.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| Workflow fails at *Deploy* step | Ensure Pages **Source** is set to **GitHub Actions**. |
| 404 after deploy | Confirm `landing-pages/index.html` exists and the run succeeded. |
| Changes not deploying | The trigger only fires for changes under `landing-pages/`. Use *Run workflow* to force a deploy. |
