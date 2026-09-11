# Anshul Singh — portfolio

Live: https://ekanshul.github.io/portfolio-website/

A single-page site in two parts. The top is a scroll-driven cinematic intro (Three.js orb,
scroll-scrubbed portrait frames, five short chapters). Below it is the dossier: case
studies written the way a forward deployed engagement is run — problem, scoping, evals,
measured outcome, hand-off.

## Contents

- **Label Lens** — an eval-first LLM agent that reads food labels (repo: [ekanshul/label-lens](https://github.com/ekanshul/label-lens))
- **Open source, upstream** — merged fixes in typeshed, pylint, astroid, litestream (Go) and corsair (TypeScript), with the review threads behind them
- **Agent evaluation & data quality** — Scale AI squad lead, Invisible Technologies, a Terminal-Bench/Harbor task
- Experience timeline, how I work with customers, contact

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Everything is in `index.html`. Portrait frames live in `frames/desktop` and `frames/mobile`.
Three.js is loaded from a CDN via an import map.

## Deploy

GitHub Pages serves `main` at the root. Push to `main` and the site rebuilds.
