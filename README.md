git commit -m "Update portfolio content"
git push origin main
git add .
# Portfolio Website

This repository contains an interactive portfolio website built with React (v19), Vite, Three.js and Tailwind CSS. The site includes 3D elements, animations and responsive layouts.

Live site: https://pcgod007.github.io/PortfolioReact/

---

## Getting started

Prerequisites

- Node.js (v16 or later)
- npm (or yarn)
- Git

Clone and install

```bash
git clone https://github.com/pcgod007/PortfolioReact.git
cd PortfolioReact
npm install
```

Run the development server

```bash
npm run dev
```

Open the site at http://localhost:5173

---

## Available scripts

- `npm run dev` — Start the development server with hot reload
- `npm run build` — Build the project for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint
- `npm run deploy` — Build and publish to GitHub Pages (uses `gh-pages`)

---

## Technology stack

- React 19
- Vite
- Three.js with `@react-three/fiber` and `@react-three/drei`
- Tailwind CSS
- GSAP and Motion for animations
- EmailJS for contact form handling

---

## Project structure

```
src/
├─ components/     # React components
├─ sections/       # Page sections (Hero, About, Projects, etc.)
├─ constants/      # Data and constants
├─ App.jsx         # Main application component
├─ main.jsx        # Entry point
└─ index.css       # Global styles

public/
├─ assets/         # Images and logos
└─ models/         # 3D model assets
```

---

## Deployment (GitHub Pages)

This project is configured to deploy to GitHub Pages. The `vite.config.js` file sets the base to the repository subpath and `gh-pages` is included as a dev dependency.

Typical workflow

1. Test changes locally:

```bash
npm run dev
```

2. Commit and push to the main branch:

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

3. Publish the site:

```bash
npm run deploy
```

`npm run deploy` builds the app and publishes the `dist/` contents to the `gh-pages` branch. The site should update automatically at:

https://pcgod007.github.io/PortfolioReact/

---

## Notes

- Ensure `gh-pages` is present in `devDependencies` (it is included in this project). 
- Confirm your GitHub credentials are set up locally so automated deployment can push to the repository.
- The `base` property in `vite.config.js` is configured for the GitHub Pages subpath; do not remove or change it unless you intend to host elsewhere.

---

## Configuration and customization

- To update displayed content, edit files under `src/components/` and `src/sections/`.
- Adjust styles in `tailwind.config.js` or the component styles.
- Add or update assets in `public/assets/`.

---

## Contact form

The contact form uses EmailJS. Provide valid EmailJS credentials in the code to enable form submissions.

---

## Contributing

This repository is a personal portfolio. For local changes, use branches for larger features and submit pull requests if collaborating.

---

## License

This project is a personal portfolio and does not include a specific open-source license.

---

For additional assistance or to request documentation changes, open an issue or contact the repository owner.

