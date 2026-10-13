# Adapta website

Showcase and download page for the Adapta app. Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com). Colors, fonts and rules follow `../Adapta Visual Direction.md`.

## Run it

Requires Node.js 20 or newer.

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the build locally
```

## Where things are

| Path | What |
| --- | --- |
| `src/styles/global.css` | Design tokens (`@theme`) and shared utilities |
| `src/config.ts` | Store links and waitlist endpoint |
| `src/pages/index.astro` | Landing page, composed from sections |
| `src/components/` | One file per section |
| `src/components/MarcosWeek.astro` | Animated week planner (the reference example from the use cases) |

Fonts are self-hosted through Fontsource, so no requests go to Google Fonts (GDPR-friendly).

## Before launch

- [ ] Set the real domain in `astro.config.mjs`
- [ ] Connect the waitlist (`links.waitlistAction` in `src/config.ts`)
- [ ] Add store links and the official App Store / Google Play badges
- [ ] Replace the placeholder logo mark with the vectorised logo
- [ ] Replace the CSS phone mockup with real app screenshots
- [ ] Write the privacy policy and imprint
- [ ] Confirm the FAQ answers (calendar privacy, platforms)
- [ ] Add analytics (Plausible or Umami)
