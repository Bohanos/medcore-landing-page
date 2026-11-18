# MEDCORE HMS Landing Page

**Live site:** https://medcore-iota.vercel.app/

A single-page website that presents **MEDCORE HMS**, a hospital management system for outpatient hospitals and clinics that runs on the hospital's own network. It explains what the system does, how a patient visit moves through it, who can do what, and what is not included.

This repository contains the landing page only. The system itself is a separate project.

## What is on the page

- Hero, followed by a **Watch the demo** section that links to the demo video on YouTube
- The patient journey, step by step, where payment unlocks each stage
- Modules, and the seven roles with what each can and cannot do
- A tabbed screenshot gallery, with a full-size preview when an image is clicked
- How it runs on the hospital's local network
- Scope: what is not included in the current build, and customization
- FAQ

Also: light and dark themes (the choice is remembered), scroll-reveal and page-load animation (switched off for visitors who prefer reduced motion), and a mobile-first layout. The page is in English, has no backend and has no contact form.

## Built with

- [React](https://react.dev/) with [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/) v4 (`@tailwindcss/vite`)
- [Font Awesome Free](https://fontawesome.com/) icons
- Deployed on [Vercel](https://vercel.com/)

## Getting started

You need [Node.js](https://nodejs.org/) 20 or newer.

```bash
npm install
npm run dev
```

The site opens at `http://localhost:5173`.

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the site into the `dist/` folder |
| `npm run preview` | Serves the built site (usually at `http://localhost:4173`) |

## Project structure

```
medcore-landing/
├── index.html            Page title, description, link-preview tags, theme script
├── docx/                 Documentation (Word and PDF). Not part of the website
├── public/               Files served as they are: favicon, icons, link-preview image
└── src/
    ├── main.jsx          Starts the app
    ├── App.jsx           Puts the navbar, sections and footer on one page
    ├── index.css         Tailwind, theme colours, fonts and animations
    ├── content/site.js   Every word on the page, the video link and the credit
    ├── assets/           Demo video thumbnail and product screenshots
    ├── hooks/            Theme switch and scroll reveal
    ├── components/       Navbar, footer, theme toggle, reveal, screenshot frame
    └── sections/         Hero, Demo, Journey, Modules, Roles, Screens, LocalNetwork, Scope, Faq
```

## Updating the site

| To change | Edit |
|---|---|
| Any wording on the page | `src/content/site.js` |
| The demo video link | `demo.url` in `src/content/site.js` |
| The video thumbnail | Replace `src/assets/video-thumbnail.webp` (keep the name) |
| The "Built by" credit and its link | `builtBy` in `src/content/site.js` |
| A screenshot | Replace the file in `src/assets/screens/` (keep the name) |
| Colours and fonts | `src/index.css` and the font link in `index.html` |
| The link-preview image | `public/og-image.png` and the `og:` tags in `index.html` |

### Screenshots

Screenshots are found by file name in `src/assets/screens/`. A matching `-dark` file, if present, is shown in dark mode. If a file is missing, the page shows a "Screenshot coming soon" placeholder instead of breaking.

| File name | Screen |
|---|---|
| `hero-dashboard` | Dashboard (hero image) |
| `gate-awaiting-payment` | Doctor view of an unpaid appointment |
| `billing-invoices` | Accountant's invoice list |
| `prescription-preview` | New prescription with the calculated total |
| `lab-result` | Lab technician entering a result |
| `pharmacy-dispense` | Dispense screen with the batch line |
| `reports` | Reports page |

Use WebP, about 1440 pixels wide, in 16:9. Dark versions are named like `reports-dark.webp`.

### Demo video

The video is hosted on YouTube and is not stored in this repository. The page shows its thumbnail and opens YouTube in a new tab when clicked, so nothing is loaded from YouTube until then.

## Deployment

The site is deployed on Vercel.

- **Build command:** `npm run build`
- **Output folder:** `dist`

The link-preview tags in `index.html` use full web addresses. If the site address changes, update the `og:url` and `og:image` lines. Platforms such as WhatsApp and LinkedIn keep a copy of the preview, so use their sharing debugger, or add `?v=2` to the link, to refresh it.

## Documentation

The `docx/` folder holds the full documentation of this page as a Word file and a PDF: the folder structure, every piece of page content, the design system and the deployment notes.

It is for people reading the repository. It is not part of the website, because only `src/` (compiled) and `public/` are published. Keep it outside `public/`, or it would be served to the internet.

## Credits

Built by [Bohanos](https://bohanos.vercel.app/) ([GitHub](https://github.com/Bohanos)). All patient data shown on the page is fictional.