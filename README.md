# CLiP Lab website

A dependency-free, single-page academic website for **CLiP Lab — Computational Linguistics & Perception Lab**. It is intended for GitHub Pages at `https://ahmikat.github.io/clip-lab/`.

## Edit the site

- `index.html`: structure, introduction, collaboration form, metadata.
- `content.js`: research areas, publications, hidden submissions, projects, and people.
- `styles.css`: visual design and responsive layout.
- `script.js`: content rendering and the email composition action.
- `assets/papers/`: verified author-copy PDFs used by the publication list.

Set `showOnWebsite: false` for any entry whose public details are not verified. The submission placeholder is hidden by default. The collaboration form opens the visitor's email app; it does not store or transmit information through a server.

## Local preview

```powershell
python -m http.server 8000
```

Open `http://localhost:8000/` from this directory. No build step is required.

## GitHub Pages

Publish from the `main` branch root in the `ahmikat/clip-lab` repository. In repository Settings → Pages, select **Deploy from a branch**, then **main** and **/(root)**. GitHub Pages will serve the site at `https://ahmikat.github.io/clip-lab/`. The `.nojekyll` file keeps the static files untouched by Jekyll.

## Source checks

Publication titles, author order, and PDFs come from the author copies in the existing `ahmikat.github.io` portfolio. Tamjid's RUET affiliation, research interests, GitHub profile, and CV link were checked against his public website and CV. Aftab's contact and CV links come from his public portfolio. Project descriptions state research directions and do not claim completed results. No unverified submission is shown.
