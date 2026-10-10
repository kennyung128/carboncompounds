# Carbon Compounds – Cloudflare Pages project

Static single-page site (hash-routed pages: Oils, About, Quality, COA, Policies, Terms, Privacy).

```
public/                 <- site source
  index.html
  _headers              <- Cloudflare security/cache headers
  assets/css/styles.css
  assets/js/app.js      <- product data, cart, routing
  assets/images/        <- logo.png, vial.jpg
scripts/build.mjs       <- validates assets, copies public/ -> dist/
package.json  wrangler.toml  .nvmrc
```

## Cloudflare Pages settings
- Framework preset: **None**
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/` (leave blank)
- Environment variable (optional): `NODE_VERSION` = `20`

## Local preview
`npm run dev` (serves `public/`) or `npm run preview` (builds, then runs Wrangler Pages locally).

## Editing
- Products / prices: top of `public/assets/js/app.js` (`RAW`, `D`, `C`, `MP`)
- Styling: `public/assets/css/styles.css`
- Images: replace files in `public/assets/images/` (same names)
Every push to `main` auto-deploys; other branches get preview URLs.
