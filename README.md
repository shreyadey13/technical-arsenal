# Shreya Dey Portfolio

A premium single-page portfolio built with React and Vite to showcase Shreya Dey's work across AI/ML, data science, research, and software engineering.

## Tech Stack

- React 19
- Vite 7
- CSS3
- React Icons

## Local Development

```bash
npm install
npm run dev
```

The app runs locally at the Vite development URL shown in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## GitHub Pages Deployment

This repository includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

1. Push the project to the `main` branch of the `technical-arsenal` repository.
2. In GitHub, open `Settings -> Pages`.
3. Set the source to `GitHub Actions`.
4. Push changes to `main` and the workflow will build and deploy automatically.

The Vite base path is configured automatically for GitHub Pages builds, so the site will work correctly at:

`https://shreyadey13.github.io/technical-arsenal/`

## Resume Download

The repository now includes both:

- `public/Shreya-Dey-Resume.html` for a browser-friendly resume page
- `public/Shreya-Dey-Resume.pdf` for direct download

On the live site, users can open the web resume or download the PDF version.

## Custom Domain

The repo is ready for a custom domain, but GitHub Pages still needs the real domain name and DNS setup.

To connect a custom domain:

1. Buy or choose the domain you want to use.
2. Add a `CNAME` file in `public/` containing only that domain name.
3. In GitHub, open `Settings -> Pages` and add the same custom domain.
4. Point your domain DNS records to GitHub Pages according to GitHub's instructions.

Example:

```txt
portfolio.yourdomain.com
```

## Updating Content

Portfolio content is currently managed in:

- `App.jsx` for page sections and content
- `App.css` for styling and layout
- `your-photo.jpg` for the hero image

## Linting

```bash
npm run lint
```

Last deployment workflow cleanup: March 27, 2026.
