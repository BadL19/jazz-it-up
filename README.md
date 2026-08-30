# Jazz It Up Contracting

A Vite + React + Tailwind site for Jazz It Up Contracting (Home, Services, Contact — client-side page switching, no router).

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static `dist/` folder you can deploy anywhere (Netlify, Vercel, GitHub Pages, or a plain static host).

## File structure

```
src/
  App.jsx              Top-level routing between the four pages
  main.jsx             React entry point
  index.css            Tailwind + Fraunces/Inter font import
  data/
    services.js        All service content and gallery image imports
  components/
    Nav.jsx            Header nav with photo-backed services dropdown
    Footer.jsx
    Button.jsx          PrimaryButton / SecondaryLink
    Slideshow.jsx       Homepage photo slideshow
    IncludedList.jsx    "What's included" bullet list
    Lightbox.jsx        Click-to-enlarge photo viewer
  pages/
    Home.jsx
    Services.jsx
    ServiceDetail.jsx
    Contact.jsx
  assets/gallery/       All real job photos
```

Design tokens (colors, fonts) live in `tailwind.config.js` under `theme.extend` — the `forest` color scale and `display`/`sans` font families. Change them there rather than hunting through components.

## Wiring up the contact form

The quote form on the Contact page opens a pre-filled text message to 705 206 5682 (`sms:` link) since there's no business email yet. If that changes, `handleSubmit` in `src/pages/Contact.jsx` is the only place that needs updating — swap the `sms:` redirect for a real POST to an email service (Resend, Formspree) or a small backend endpoint.
