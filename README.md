# c2 Landing Page

Minimal product landing for `c2`, an AI career coach by LMTech with the tagline
`Job hunting made simple`.

The site is built with React, React Router, MUI, and the remaining Material Kit theme/component
primitives. It currently promotes c2, exposes placeholder routes for future Plans and Blog pages,
and uses a shared layout for consistent navigation, footer, social links, and early-access CTA.

## Getting Started

- Install dependencies: `npm install`
- Run locally: `npm start`
- Build for production: `npm run build`
- Lint source files: `npm run lint`

## Current Routes

- `/` - c2 product landing page
- `/plans` - placeholder page for future pricing/access plans
- `/blog` - placeholder page for future c2 blog content
- Any unknown React route redirects to `/`

Static route shims are included under `public/plans/`, `public/blog/`, and `public/404.html` so
clean URLs work more reliably on static hosts.

## Project Structure

- `src/App.js` - route wiring for `/`, `/plans`, and `/blog`
- `src/components/C2Layout` - shared header, active nav state, footer, product social links, and Start free modal
- `src/pages/LandingPages/Home` - main c2 landing page sections and product mockups
- `src/pages/Plans` - placeholder Plans route
- `src/pages/Blog` - placeholder Blog route
- `src/assets/images/c2-logo.svg` - React-imported c2 logo
- `public/c2-logo.svg` - public favicon/manifest logo copy
- `src/googleFormConfig.js` - Google Form target and field IDs for the early-access modal

## Content & CTAs

- Primary CTA: `Start free`
- CTA behavior: opens the shared early-access modal
- Form submission: posts to the configured Google Form in `src/googleFormConfig.js`
- Company ownership: footer copyright remains `LMTech`
- Social links: LinkedIn and X placeholders represent c2 product accounts, not LMTech corporate accounts

## Logo

The c2 logo is stored in two places:

- `src/assets/images/c2-logo.svg` for app imports
- `public/c2-logo.svg` for favicon and manifest references

When replacing the logo, keep both files in sync unless the app and browser icon should intentionally differ.

## Styling Notes

- Uses MUI `sx` props and existing Material Kit components under `src/components`
- Shared header/footer styling lives in `src/components/C2Layout/index.js`
- The landing page is intentionally minimal and white, with dark product-preview panels inspired by the NotebookLM reference
- Active nav items are styled in the shared layout using the current React Router location

## Deployment

Run `npm run build` and deploy the generated `build` directory to the static host.

The app currently assumes it is hosted at `/`, based on the `homepage` field in `package.json`.
