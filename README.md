# PIC GALLERY — by Pranavkajagar

**CodeAlpha · Task 01**

A responsive image gallery built with plain HTML, CSS and JavaScript. All images and fonts are stored locally, so the gallery works offline.

## Features

- **Search** — filter by title, category, place or tag (e.g. `porsche`, `forest`, `bike`). Press `/` to focus the search box.
- **Categories** — Cars, Bikes, Nature and Anime, with live counts.
- **Lightbox** — previous/next controls, thumbnail strip, image counter and progress bar.
- **Keyboard** — `←` / `→` to browse, `Esc` to close, `Tab` cycles inside the dialog.
- **Swipe / drag** — navigate images on touch screens or with a mouse.
- **Hover effects** — slow zoom, gradient reveal, caption and view badge.
- **Monochrome mode** — one-click grayscale treatment.
- **Responsive layout** — 4 columns on desktop, 3 on laptop, 2 on tablet, 1 on phones.
- **Accessibility** — semantic markup, focus styles, ARIA labels, focus trapping, background `inert` and reduced-motion support.

## Running

Open `index.html` in any modern browser. No build step is needed.

For a local server:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## Project structure

```
codealpha/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   ├── favicon.svg
│   ├── fonts/
│   │   ├── fraunces-normal.woff2
│   │   ├── fraunces-italic.woff2
│   │   └── inter-normal.woff2
│   └── images/            # 16 images
└── README.md
```

## Customising

Edit the `photos` array at the top of `js/app.js`:

```js
{
  id: "cars-05",
  src: "assets/images/cars-05.jpg",
  title: "New Frame",
  category: "cars",          // cars | bikes | nature | anime
  place: "Somewhere",
  year: 2026,
  width: 1400,
  height: 933,
  alt: "Description of the image",
  tags: ["car", "sports car", "road"]
}
```

Category counts and filter buttons update automatically from the data.

## Credits

- Car, bike and nature photography: [Unsplash](https://unsplash.com)
- Anime portraits: [Artbreeder](https://www.artbreeder.com) images via [Wikimedia Commons](https://commons.wikimedia.org), public domain
- Typefaces: [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Inter](https://fonts.google.com/specimen/Inter), SIL Open Font License
