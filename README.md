# Fix Bolingo International Limited — website

Marketing site for Fix Bolingo International Limited, a maritime and industrial
services company at Kirikiri Waterside, Apapa, Lagos.

React 19 + Vite + TypeScript, Tailwind CSS v4, shadcn/ui-style components,
Framer Motion, lucide-react and React Router.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # serve dist/ on http://localhost:4173
```

## Editing content

All copy lives in **`src/data/site.ts`**: company details, stats, the 8
services, process steps, "Why work with us", commitments and the gallery.

## Photos

Source photos (extracted from the company profile PDF) are in `photos/`:

| File | Used for |
| --- | --- |
| `ship-dismantling-crane.jpg` | Leadership section, gallery |
| `wreck-removal-aerial.jpg` | Wreckage Removal service, gallery, social-sharing image |
| `zoomlion-crane-1.jpg`, `zoomlion-crane-2.jpg` | About preview, About hero, Heavy Equipment service |
| `barge-waterfront.jpg` | Jetty Space service, Contact hero |
| `yacht-slipway-crane.jpg` | Vessel Repair service, How We Work |
| `vessel-hulk-jetty.jpg` | Why Work With Us background, gallery |
| `excavator-yard.jpg` | Gallery |
| `site-yard-containers.jpg` | Gallery |
| `dismantling-site-1..4.jpg` | Services/Projects heroes, Ship Scrapping & Marine Cutting services, gallery |
| `crane-lifting-deck.jpg` | Ship Scrapping service, gallery |
| `deck-cutting-crew.jpg` | Marine Cutting service, gallery |
| `breakwater-causeway.jpg` | Water Supply & General Contracting service, gallery |
| `scrap-truck-loading.jpg` | Marine Scrap service, gallery |
| `crawler-crane-breakwater.jpg` | Services page hero, gallery |
| `vessel-stern-coastline.jpg` | Projects page hero, gallery |
| `scrap-haulage-seafront.jpg` | "Let's discuss your next project" banner, gallery |
| Other drone and site shots (`wreck-aerial-side`, `hull-breakwater-close`, `vessel-superstructure-aerial`, `scrap-loading-beach`, `scrap-yard-excavator`, `beach-site-wide`) | Gallery |
| `ceo-portrait.jpg` | MD/CEO card |

To replace or add a photo, drop a `.jpg` into `photos/` and run
`npm run images` (Python 3 + Pillow). This writes responsive WebP sizes to
`public/images/` and updates `src/data/image-meta.json`. If you change a
page's hero image, update the matching entry in the preload script in
`index.html`.

## Hero video

The home page opens on `public/videos/hero-wreck-removal.mp4` (aerial drone
footage, muted and looping, about 2 MB) with `hero-poster.webp` as its first
frame. Visitors who prefer reduced motion see only the poster, and the hero
has a pause button. To swap the video:

```bash
ffmpeg -i new-clip.mp4 -an -c:v libx264 -preset veryslow -crf 31 \
  -pix_fmt yuv420p -movflags +faststart public/videos/hero-wreck-removal.mp4
ffmpeg -ss 0.2 -i public/videos/hero-wreck-removal.mp4 -frames:v 1 \
  -c:v libwebp -quality 72 public/videos/hero-poster.webp
```

Update `heroVideo` in `src/data/site.ts` if you change the file names.

## Quote form

The form posts to [Web3Forms](https://web3forms.com). Copy `.env.example`
to `.env` and set `VITE_WEB3FORMS_KEY`. Until a key is set, submitting the
form opens the visitor's email app with the enquiry pre-filled.

## Hosted preview (claude.ai Artifact)

`npm run build:artifact` builds a copy into `dist-artifact/` with relative
asset paths, in-memory routing and a map link instead of the embedded map,
then writes `dist-artifact/artifact.html` for publishing as an Artifact.
Adding `#about`, `#services`, `#projects` or `#contact` to the link opens
that page.

## Deploying

`npm run build` outputs a static site in `dist/`. SPA fallbacks are included
for Netlify (`public/_redirects`) and Vercel (`vercel.json`). Once the
domain is known, make the `og:image` URL in `index.html` absolute and add a
sitemap.
