# Portfolio: Nadupuru Venkata Sai Kiran

Static site (HTML, CSS, vanilla JS). No build step or dependencies. Fonts load from Google Fonts with system fallbacks.

## Files
- `index.html`, `styles.css`, `script.js`: the site
- `resume.pdf`: **you must add this** (export from Overleaf, rename to lowercase `resume.pdf`)

All files go in the same folder (the repository root). The resume links use the relative path `resume.pdf`.

## Run locally
Open `index.html` in a browser, or from this folder run `python3 -m http.server 8000` and visit http://localhost:8000.

## Deploy on GitHub Pages
1. Create a repository named `venkatasaikirannadupuru.github.io` (or any name for a project site).
2. Upload `index.html`, `styles.css`, `script.js`, `resume.pdf` and `README.md` to the root and commit.
3. Go to Settings > Pages, choose "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. Wait a minute or two, open the site URL, then check: all sections load, the mobile menu works, and the Download Resume button opens the PDF.
5. To update later, edit or replace the files in the repository and commit. Pages redeploys automatically. Hard-refresh (Ctrl+Shift+R) if you see old content.

For a project site (not `username.github.io`), the URL is `https://username.github.io/repo-name/`. The relative links still work.

## After deployment
- Add `<link rel="canonical" href="YOUR_SITE_URL">` and `og:url` in the `<head>` of `index.html`.
- Optionally add an `og:image` (a 1200x630 image stored in the repo) for link previews.

## Checklist
- Add `resume.pdf`.
- Open each project's GitHub link and the two certificate links to confirm they work and the Drive files are shared as "Anyone with the link".
- Compare each architecture diagram with your repository code (especially Suricata placement and the SNS and CloudWatch roles in the serverless project) and edit the SVG text if anything differs.
