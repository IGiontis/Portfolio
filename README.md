# Ilias Giontis — Portfolio

Personal portfolio website of **Ilias Giontis**, Front-End Engineer / React.js Specialist.

**Live site:** _coming soon on Netlify_

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Bootstrap 5** / **Reactstrap** — Bootstrap-first styling, CSS Modules only where utilities can't reach
- **react-icons**

## Features

- Single-page layout with smooth-scrolling section navigation
- Scrollspy: the URL hash and active nav link follow the section in view
- Dark / light theme toggle (persisted, respects `prefers-color-scheme`)
- Certifications section with verify links, collapsed behind a "Show all" toggle
- Interactive About stats (scroll-to-projects, business-domains modal)
- Fully responsive, keyboard-accessible interactions

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start the dev server     |
| `npm run build`   | Type-check + build       |
| `npm run lint`    | Lint with oxlint         |
| `npm run preview` | Preview production build |

## Structure

```
src/
├── components/     # One folder per section (NavBar, Hero, About, ...)
├── context/        # Theme context (dark/light)
├── data/           # All content & data (content.ts, skills, projects, certifications, links)
├── hooks/          # useScrollSpy
└── utils/          # scrollToSection helper
```
