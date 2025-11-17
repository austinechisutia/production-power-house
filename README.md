# Production Power House

Modern production support studio built with React 19, Vite 7, Tailwind CSS v4 (via `@tailwindcss/vite`), and the Lucide icon set.  
Live site: https://austinechisutia.github.io/production-power-house/

## Highlights
- Immersive hero with animated rotating focus words (event, brand, story, live show, etc.) plus a CTA to “Make your event happen”.
- “Why Choose Us” cards that spotlight experience, technology refresh rate, and yearly project volume.
- Solutions and Standard Offers sections with grayscale-to-color imagery, stats, badges, and book-a-slot interactions.
- Service marquee (`Fast Service • Affordable • Reliable • Trusted`) that reinforces the brand promise.
- Photogrid + media-heavy layout showcasing lighting, staging, and camera capabilities.
- Global typography powered by Google Fonts (Inter + Poppins) and consistent rounded-pill CTAs.

## Tech Stack
- React 19 + Vite 7 (`rolldown-vite` build)
- Tailwind CSS v4 via the official Vite plugin
- Lucide React icons
- GitHub Pages deployment powered by `gh-pages`

## Getting Started
```bash
npm install
npm run dev
```
Visit `http://localhost:5173`.

### Scripts
- `npm run dev` — local development with Vite + HMR
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview the build locally
- `npm run lint` — run ESLint
- `npm run deploy` — build + publish `dist/` to the `gh-pages` branch

## Deployment (GitHub Pages)
1. Ensure `vite.config.js` has `base: '/production-power-house/'`.
2. Build the project: `npm run build`.
3. Deploy: `npm run deploy`.
4. GitHub Pages auto-hosts from the `gh-pages` branch. Wait a minute if the changes don’t appear immediately.

## File Map
```
src/
  main.jsx           # Entry point
  hero.jsx           # Animated hero headline + CTA
  App.jsx            # Page assembly
  components/
    Navbar.jsx
    about.jsx        # Service marquee
    choose.jsx       # Why Choose Us cards
    solutions.jsx    # Solutions carousel-style cards
    offers.jsx       # Standard Offers booking CTA
    photogrid.jsx    # Media gallery
    contact.jsx, forms.jsx, footer.jsx, etc.
  assets/images/     # Photography used throughout the layout
```

## Customizing
- Replace images inside `src/assets/images/` to reflect your events or gear.
- Update stats/labels inside `choose.jsx`, `solutions.jsx`, and `offers.jsx` to match real-world metrics.
- Tailwind classes make it easy to layer gradients, adjust spacing, or change breakpoints.
- Vite + React Compiler keep the UI responsive and performant even with the media-heavy design.
