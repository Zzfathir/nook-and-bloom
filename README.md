# Nook & Bloom

## Project overview

Nook & Bloom is a responsive one-page website for a fictional neighbourhood cafe and bakery in Petaling Jaya, Selangor. The site is designed to help visitors quickly discover the cafe, browse the menu, check opening hours, find the location, and send an enquiry.

The visual direction follows the client brief: warm, calm, approachable, local, and slightly premium. The design uses forest green, warm cream, sage, and terracotta with editorial typography and generous spacing.

## Tech stack

- **Vite** for a fast development server and optimised production build
- **Semantic HTML** for the main page structure, accessibility, and search-engine crawlability
- **Vanilla JavaScript** for the menu tabs, mobile navigation, form validation, form submission, and reveal animation
- **CSS** for the complete visual system, responsive layouts, hover states, focus states, and reduced-motion support
- **Google Fonts** using Fraunces, DM Sans, and DM Mono
- **Netlify Forms** for contact form delivery after deployment
- **Optional Google Analytics 4** loaded only when `VITE_GA_ID` is configured

I chose this stack because the project is a single-page marketing website with a small number of interactions. A framework such as React would work, but it would add application structure that this site does not currently need. Vite and vanilla JavaScript keep the bundle lightweight, easy to understand, and simple to deploy while still supporting the required behaviour.

## Features

- Responsive layouts for desktop, tablet, and mobile
- Desktop navigation and accessible mobile navigation
- Hero section with opening hours, location, and calls to action
- About section with the requested cafe story and feature points
- Coffee, Bakes, and Brunch menu tabs without a page reload
- Data-driven menu rendering from one JavaScript object
- Editorial value proposition section for Made Fresh, Good Coffee, and Stay Awhile
- Six-image responsive gallery with lazy loading, alt text, and hover effects
- Responsive Google Map embed and Google Maps directions link
- Location, opening hours, phone number, and email contact details
- Contact form with required-field and invalid-email validation
- Inline form success and error states
- Netlify Forms submission with honeypot spam protection
- Smooth scrolling and subtle reveal motion
- Reduced-motion support for users who prefer less animation
- Visible keyboard focus states and accessible form labels
- SEO title, meta description, Open Graph metadata, favicon, and theme color
- `CafeOrCoffeeShop` JSON-LD structured data for local search context
- Branded custom 404 page for static hosting

## Installation

Requirements:

- Node.js 18 or newer
- npm

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

I'm using Netlify to host this project, you can check up on this link to see the project🤓
[Nook & Bloom](https://nooknbloom.netlify.app/)


## Notes

- The gallery currently uses remote Unsplash URLs as temporary royalty-free placeholders. For a real client launch, I would replace them with approved photography and compressed local WebP or AVIF assets.
- The contact form is configured for Netlify Forms and does not expose an email-service API key in the browser.
- The cafe address, phone number, email, opening hours, and menu are based on the supplied fictional client brief and should be confirmed before launch.
- The social links are placeholders until the client supplies the official accounts.
- Google Analytics is intentionally disabled until a real measurement ID and appropriate privacy approval are available.
- The project was tested with `npm run build`.

## Repository

GitHub: [Zzfathir/nook-and-bloom](https://github.com/Zzfathir/nook-and-bloom)
