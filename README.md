# SWACTech Landing

Minimal waitlist-focused landing built on React and Material Kit 2. Includes a hero with join-waitlist CTA, blog link, and simplified navigation.

## Getting Started

- Install dependencies: `npm install`
- Run locally: `npm start` (http://localhost:3000)
- Build for production: `npm run build`

## Project Structure

- `src/App.js` — routes wiring
- `src/routes.js` — navbar routes (Home, Blog, GitHub)
- `src/pages/LandingPages/Home` — landing layout, hero + waitlist sections
- `src/pages/LandingPages/Blog` — blog list + post pages; metadata is read from markdown frontmatter
- `public/posts/**` — markdown posts with YAML frontmatter (title, category, slug, tagline, author, date, image key)
- `src/examples` / `src/components` — shared UI primitives from Material Kit

## Content & CTAs

- Hero primary CTA: `Join waitlist` (`/#waitlist`)
- Secondary CTA: `Read the blog` (`/blog`)
- Waitlist forms post to a Google Form; configure `src/googleFormConfig.js` with your `entry.*` IDs before launch.

## Blog content

- Add/edit posts in `public/posts/{category}/{slug}.md` with frontmatter:
  ```yaml
  ---
  title: "Post title"
  category: "Research"
  categorySlug: "research"
  slug: "my-slug"
  tagline: "One-line summary"
  author: "Name"
  date: "Jan 1, 2025"
  image: "blog2" # key from image map in postData.js
  ---
  ```
- The UI fetches markdown at runtime; images are mapped via keys in `src/pages/LandingPages/Blog/postData.js`.

## Styling Notes

- Uses Material Kit theme tokens (`assets/theme`) and MUI `sx` for overrides.
- Hero background image: `src/assets/images/hero-image.jpg` with gradient overlay.

## Deployment

The repo includes `npm run build` for static output. Deploy the `build` directory to your hosting of choice (e.g., GitHub Pages via `npm run deploy` if configured).

## Maintenance

- Unused legacy section components remain under `src/pages/LandingPages/Home/sections/` for future reuse.
- Update nav items in `src/routes.js` and footer links in `src/footer.routes.js` as content grows.
- Keep the image map in `src/pages/LandingPages/Blog/postData.js` in sync with frontmatter `image` keys.
