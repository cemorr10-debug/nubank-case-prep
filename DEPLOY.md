# Publishing the deck

The deck is one self-contained HTML file: `deck/strategy.html`.
`public/index.html` is a copy of it, and `public/` is what gets deployed.

## Option 1 — Claude artifact (works now, no setup)

https://claude.ai/code/artifact/7fa16e34-8e41-4e09-ba45-2168e4932827

Open it and use the **share menu on the page** to share it. Artifacts are private
until you share them.

## Option 2 — Netlify (a plain public URL, no Claude account needed)

A Netlify site is already created and waiting for its first deploy:

| | |
|---|---|
| Project | `nu-te-ve` |
| Site ID | `8546374e-5355-4448-874f-ab1a73a7e25f` |
| URL once deployed | https://nu-te-ve.netlify.app |
| Admin | https://app.netlify.com/projects/nu-te-ve |

The deploy could not be run from the Claude sandbox — its egress proxy blocks every
`netlify.com` host. Run this **from your own machine**, in a clone of this repo:

```bash
npx netlify-cli login          # once
npx netlify-cli deploy --prod --dir=public --site=8546374e-5355-4448-874f-ab1a73a7e25f
```

That is the whole deploy — there is no build step.

### If you change the deck
`deck/strategy.html` is the source of truth. After editing:

```bash
cp deck/strategy.html public/index.html
npx netlify-cli deploy --prod --dir=public --site=8546374e-5355-4448-874f-ab1a73a7e25f
```

### Keeping it off search engines
Already handled, and worth keeping: the page carries a `noindex, nofollow, noarchive`
meta tag, `public/robots.txt` disallows all crawlers, and `netlify.toml` sets an
`X-Robots-Tag` header. The link works for anyone you send it to; it just will not turn
up in a search. **This matters** — the deck cites prior-employer experiment results and a
customer quote.

To lock it down further, Netlify can password-protect the site
(Project → Access control → Password protection). That is a paid-plan feature.
