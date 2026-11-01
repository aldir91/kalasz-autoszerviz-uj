# Kalász Autószerviz – Astro landing page

## Indítás
```bash
npm install
cp .env.example .env     # írd bele a Web3Forms kulcsot
npm run dev              # http://localhost:4321
npm run build            # kimenet: dist/
```

## Mit kell kicserélned / feltöltened
| Mit | Hova |
|---|---|
| Galéria fotók (jpg/png/webp) | `src/assets/gallery/` (automatikusan megjelennek, nevük szerint rendezve) |
| Hero videó (fekete-fehérre CSS állítja) | `public/video/hero.mp4` és `hero.webm`, 8–15 mp, hang nélkül, kb. 2–4 MB, 1280×720 |
| Videó előkép (poster) | `public/video/poster.jpg` |
| Q-Service logó | `public/logo.svg` (most csak helyőrző „K”), ha PNG: írd át a Header.astro-ban |
| Megosztási kép | `public/og.jpg` (1200×630) |
| Adatok, szövegek, vélemények | `src/data/site.ts` |
| Domain | `astro.config.mjs` (`site`) és `public/robots.txt` |
| Adatkezelő adatai | `src/data/site.ts` (`legal`) + `src/pages/adatkezeles.astro` |

## Űrlap
Web3Forms (ingyenes): web3forms.com → add meg az ügyfél e-mail címét → a kapott kulcsot `PUBLIC_WEB3FORMS_KEY` néven add meg a `.env`-ben, élesben a tárhely környezeti változói között.

## Ajánlott tárhely: Cloudflare Pages vagy Netlify
Build parancs: `npm run build`, kimeneti mappa: `dist`. Saját domain ingyen csatolható, HTTPS automatikus.

## Videó előkészítése (ffmpeg)
```bash
ffmpeg -i eredeti.mov -t 12 -an -vf "scale=1280:-2,fps=25" -c:v libx264 -crf 28 -preset slow -movflags +faststart public/video/hero.mp4
ffmpeg -i eredeti.mov -t 12 -an -vf "scale=1280:-2,fps=25" -c:v libvpx-vp9 -crf 38 -b:v 0 public/video/hero.webm
ffmpeg -i public/video/hero.mp4 -frames:v 1 public/video/poster.jpg
```
