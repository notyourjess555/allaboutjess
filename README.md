# Jess Chan — Portfolio

A small, responsive portfolio for sharing Jess's engineering work and the ideas around it.

## Run locally

```sh
pnpm install
pnpm dev
```

Vite prints the local preview address after the server starts. Create a production build with `pnpm build` and preview it with `pnpm preview`.

## Where to make changes

- `src/App.tsx` contains the page sections and homepage copy.
- `src/data/projects.ts` contains project descriptions, process notes, and links.
- `src/components/` contains the navigation and the hand-drawn SVG visuals.
- `src/styles.css` contains the color, typography, responsive layout, and motion rules.

The project card is data-driven so additional projects can be added without rebuilding its layout. Motion respects the visitor's reduced-motion preference.
