# Jess Chan — Personal Portfolio

A personal portfolio showcasing my projects, interests, and experiments as a 2nd year Computer Engineering student.
More on https://notyourjess555.github.io/allaboutjess/


## About the Project

I enjoy exploring ideas, figuring out how things work, and turning concepts into something tangible. This website is a space to share what I build, what I learn, and what I'm curious about.
This portfolio was built to bring my work and personality together in one place. The design combines a dark, ocean-inspired visual style with interactive elements, including a pixel-snow hero and a draggable portrait lanyard.
Rather than being just a website, I wanted the website itself to feel like something I made: a little unconventional, creative, and still focused on the work.

## ✦ Features ✦

- **Hero section** — An immersive pixel-snow introduction with an animated headline and interactive portrait lanyard.
- **Project showcase** — Highlights my project.
- **About section** — A little more about me and how I approach building things.
- **Contact section** — A place to connect with me.
- **Interactive details** — Includes a custom magic-wand cursor and subtle animations.
- **Responsive layout** — Designed to work across different screen sizes.

## Built With

- React
- TypeScript
- Vite
- CSS
- Three.js — 3D lanyard rendering
- Google Fonts — Anton, Fredoka, JetBrains Mono, Libre Bodoni, and Sedgwick Ave Display

## Getting Started

### Prerequisites

You'll need [Node.js](https://nodejs.org/) and pnpm installed.

### Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the local URL printed in your terminal to view the website.

### Build for Production

```bash
pnpm build
```

To preview the production build locally:

```bash
pnpm preview
```

## ✦ Project Structure ✦

The project follows a typical React + Vite structure. Key files include:

- `index.html` — HTML entry point and page metadata.
- `src/App.tsx` — Main application, section content, and hero component settings.
- `src/styles.css` — Styling, layout, typography, and responsive rules.
- `src/components/PixelSnow.tsx` and `PixelSnow.css` — Canvas/WebGL snow effect and its controls.
- `src/components/Lanyard.tsx` and `Lanyard.css` — Three.js lanyard, card appearance, and drag/flip interaction.
- `src/components/DecryptedText.tsx` — Animated text reveal used by the hero heading and tagline.
- `src/components/SiteNav.tsx` — Hero navigation labels and links.
- `src/data/projects.ts` — Project titles, descriptions, technologies, and repository links.
- `public/images/` — Images used throughout the website.

### Making changes

1. Run `pnpm dev` and open the local address Vite prints. Keep that terminal running while you edit; saved changes should appear automatically. If they do not, refresh the page and check that VS Code has opened this repository folder.
2. Edit copy and section composition in `src/App.tsx`; update project information in `src/data/projects.ts`.
3. Adjust spacing, colors, typography, and responsive behavior in `src/styles.css`.
4. Tune snow density, brightness, movement, and color through the `PixelSnow` props in `src/App.tsx`; the effect implementation is in `src/components/PixelSnow.tsx`.
5. Tune the lanyard image, card color, size, strap, and interaction through the `Lanyard` props in `src/App.tsx`. The component supports dragging to move and clicking/tapping to flip. Put replacement images in `public/images/` and update their paths in `src/App.tsx`.
6. Add new portfolio sections in `src/App.tsx`, give each an `id`, then link to it from `src/components/SiteNav.tsx` if it belongs in the navigation. Use `src/styles.css` for desktop and mobile styling.
7. Before sharing a change, run `pnpm build` to check the production build. `pnpm preview` serves that built version locally.

These steps only change your local files. To send a commit to GitHub, run `git push` yourself or ask for it explicitly; publishing a GitHub Pages update is a separate deployment step.

## ✦ Featured Project ✦

### Seam Carving — Content-Aware Image Resizing

An image-processing project exploring how images can be resized while preserving important visual content.

Instead of simply stretching or cropping an image, seam carving removes paths of pixels to change an image's dimensions while attempting to preserve its most meaningful features.

[View the project on GitHub](<your-seam-carving-repository-url>)

## ✦ What's Next?

This portfolio will continue to evolve as I build new projects, experiment with different ideas, and learn new tools. I plan to keep refining both the work I showcase and the website itself.

---

· **Made by Jess Chan 2026** ·
