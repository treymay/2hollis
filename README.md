# 2HOLLIS World — Shopify Theme

Official video-first Shopify Online Store 2.0 theme for **2hollis**.

## Theme structure

```
assets/          CSS, JavaScript, logo
config/          Theme settings
layout/          theme.liquid, password.liquid
locales/         Translations
sections/        All editable sections
snippets/        Reusable Liquid snippets
templates/       JSON templates (OS 2.0)
```

## Upload to Shopify

Run from **this folder** (the theme root):

```bash
cd "/Users/trey/Desktop/2hollis website"
shopify theme push --store YOUR-STORE.myshopify.com
```

Live preview while editing:

```bash
shopify theme dev --store YOUR-STORE.myshopify.com
```

## After upload

1. **Online Store → Themes** → Publish **2HOLLIS World**
2. Create pages and assign templates:
   - `music` → **page.music**
   - `tour` → **page.tour**
   - `video` → **page.video**
3. **Customize → Hero Video** → upload your hero MP4 (optional; YouTube fallback included)

## Homepage sections

| Section | Purpose |
|---------|---------|
| Hero Video | Fullscreen video + white cross logo overlay |
| Latest Release | STAR album |
| Tour Dates | Upcoming Star Tour 2026 dates |
| Newsletter | Sign-up CTA |

Merch grid/carousel can be added in the theme editor when your products are connected.

## Templates included

- `index.json` — Homepage
- `collection.json` — Shop collection
- `product.json` — Product page
- `cart.json` — Cart
- `page.music.json` — Discography
- `page.tour.json` — Laylo embed + full tour dates + VIP
- `page.video.json` — Official music videos
- `404.json`, `search.json`, `list-collections.json`
