# Coding Ninjas — Website Clone

A React + Tailwind CSS clone of the Coding Ninjas homepage, built as the Slab 2 (Intermediate)
front-end assignment.

## Tech stack
- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- lucide-react for icons

## Sections implemented
- Sticky navbar with dropdown-style nav items, login and CTA
- Hero with headline, stat highlights, a recommended-course card, and a scrolling
  partner-logo marquee
- Course explorer with tabs ("For Professionals" / "For College Students") and a
  responsive card grid
- Placement stats band
- Testimonials grid
- CTA banner
- Footer with contact info, link columns, and social badges

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes
- All copy is written from scratch (not copied verbatim from the live site) to avoid
  reproducing Coding Ninjas' original marketing text — only the layout/structure and
  general brand feel (dark theme, orange/flame accent) are referenced.
- Component structure lives in `src/components/`: `Navbar`, `Hero`, `Courses`, `Stats`,
  `Testimonials`, `CtaBanner`, `Footer`, assembled in `src/App.jsx`.
