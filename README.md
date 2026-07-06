# Noah Whiteson - Portfolio

Minimal portfolio site inspired by [chanhdai.com](https://chanhdai.com). Built with Next.js (App Router), Tailwind CSS v3, and Geist fonts. Light/dark mode with system preference detection.

## Run locally

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` holds all content data (socials, stack, projects, experience, awards) at the top of the file. Edit the arrays there to swap out placeholders.
- `app/globals.css` has the color tokens and the stripe/full-bleed line utilities.
- `components/` has the theme toggle and SVG icons.
