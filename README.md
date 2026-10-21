# CLiP Lab website

A dependency-free, single-page academic website for **CLiP Lab — Computational Linguistics & Perception Lab**. The organization site is published at `https://clip-lab.github.io/`.

## Edit the site

- `index.html`: compact page structure, introduction, contact links, and metadata.
- `content.js`: research areas, publications, projects, and people.
- `styles.css`: visual design and responsive layout.
- `script.js`: content rendering and dynamic copyright year.
- `workshop-tracker/index.html`: standalone 2027 shared-task and workshop deadline snapshot, linked from the homepage hero. Recheck the official sources before relying on a deadline or updating this page.
- `assets/papers/`: verified author-copy PDFs used by the publication list.

Set `showOnWebsite: false` for any entry whose public details are not verified. The contact links open the visitor's email app; this site has no form backend.

## Local preview

```powershell
python -m http.server 8000
```

Open `http://localhost:8000/` from this directory. No build step is required.

## GitHub Pages

Publish from the `main` branch root in the `clip-lab/clip-lab.github.io` repository. In repository Settings → Pages, select **Deploy from a branch**, then **main** and **/(root)**. GitHub Pages serves the site at `https://clip-lab.github.io/`. The `.nojekyll` file keeps the static files untouched by Jekyll.

## Source checks

Publication titles, author order, and PDFs come from the author copies in the existing personal portfolio. Tamjid's RUET affiliation, research interests, and GitHub profile were checked against his public website and CV. Aftab's details come from his public portfolio. Project descriptions state research directions and do not claim completed results.
