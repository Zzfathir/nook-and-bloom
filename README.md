# Nook & Bloom

Nook & Bloom is a one-page website for a fictional neighbourhood cafe and bakery in Petaling Jaya. I treated the brief as a small real-world client project: the main goal is to help a visitor decide quickly whether to visit, see what is on the menu, find the cafe, and make an enquiry.

## What I built

- Responsive one-page layout for desktop, tablet, and mobile
- Desktop navigation and an accessible mobile menu
- Hero section with opening hours, location, and clear calls to action
- About section with the three requested feature points
- Coffee, Bakes, and Brunch tabs that update the menu without a page reload
- Value proposition section using editorial hierarchy instead of three generic cards
- Six-image responsive gallery with hover treatment and descriptive alt text
- Location section with address, opening hours, phone, email, and Google Maps directions
- Enquiry form with required-field validation, invalid-email feedback, and success state
- Smooth scrolling, subtle reveal motion, hover states, visible focus states, and reduced-motion support
- SEO title, meta description, Open Graph metadata, favicon, semantic headings, and accessible labels
- LocalBusiness JSON-LD structured data for cafe name, address, hours, contact, and cuisine
- Netlify Forms-ready enquiry submission with a honeypot field and AJAX response states

## My design decisions

The brief described the cafe as warm, calm, local, and slightly premium. I used a dark forest hero to make the first impression feel grounded, then used warm cream space for readability and sage and terracotta as supporting colours. Fraunces gives the headings a more human editorial feel, while DM Sans and DM Mono keep navigation, prices, and labels clear.

I kept the menu as a simple data object instead of repeating three separate blocks of markup. That makes the required category switching easier to maintain and gives the client a straightforward place to change menu items and prices later.

The biggest responsive decision was not simply shrinking the desktop layout. On mobile, the navigation becomes a full-width menu, the hero image moves below the copy, the menu becomes one column, the gallery changes its composition, and the contact form fields stack vertically.

## What was challenging

The hardest part was balancing a strong visual style with fast access to practical information. A cafe site can easily become too decorative, so I kept the hours, menu, address, and contact details close to the main user journey and made sure the important actions are available from the hero.

## What I would improve with another two days

- Replace the placeholder photography with approved client images and generate responsive image sizes locally
- Add a real Instagram link and verified social profiles
- Run Lighthouse and browser checks at all requested breakpoints

The enquiry form is configured for Netlify Forms. After deploying to Netlify, enable form notifications in the Netlify dashboard so enquiries are delivered by email. If deploying elsewhere, replace the form handler with that host's form service or backend endpoint.

## Technical decision I am most proud of

I am most pleased with using a small menu data model and one rendering function for all three menu categories. It satisfies the interaction requirement without introducing unnecessary application complexity, while still leaving the content easy to edit.

## If this were a real client project

I would confirm the exact address, phone number, social handles, photography rights, menu pricing, and preferred enquiry workflow before launch. I would also agree on who owns the content updates and whether the cafe needs a CMS later. Those details affect the final deployment more than adding another framework would.

## Local development

```bash
npm install
npm run dev
```

Build for production with:

```bash
npm run build
```

## Form delivery

The enquiry form uses Netlify Forms, which is available on Netlify's free tier and does not require an API key in the frontend. To deliver enquiries to `hello@nookandbloom.my`:

1. Deploy this project to Netlify.
2. Open the site in the Netlify dashboard and go to **Forms**.
3. Confirm that the `enquiry` form has been detected.
4. Add an email notification under **Form notifications** and set the recipient to `hello@nookandbloom.my`.

The browser submits to `/` using the form name and Netlify handles delivery. This is safer than putting an email-service API key in client-side JavaScript. A genuinely open-source email backend would need to be self-hosted and would still require SMTP credentials, so it would add infrastructure that this starter project does not need.

## Notes

The current gallery uses remote Unsplash URLs as temporary royalty-free placeholders. For a real launch, I would replace them with compressed local assets or approved client photography.
