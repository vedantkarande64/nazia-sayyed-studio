# Nazia Sayyed Studio — Website Revision

This revision keeps the existing project data and image assets while rebuilding the presentation around the supplied quiet-luxury references.

## Main changes

- Reworked the global visual system with Playfair Display, Cormorant Garamond, Lora and Montserrat.
- Rebuilt the navigation, typography hierarchy, spacing, borders and editorial layout while retaining the requested navigation/enquiry placement.
- Home page keeps the existing dynamically loaded featured projects and their existing images/order, but presents them with a cleaner luxury treatment.
- Studio/About page renamed visually to **THE STUDIO** and **THE FOUNDER**, with the latest client-approved copy supplied for the page.
- Services page redesigned around the supplied editorial reference with a large split-image layout and restrained service categories.
- Work/Projects page rebuilt as an editorial project index with category sections and dynamic project counts.
- Project viewer redesigned as a full-screen, minimal project presentation with grouped galleries, larger visual rhythm, room labels, and video support.
- Contact area redesigned with a three-part editorial composition: studio details, enquiry form, and monochrome Google Maps panel.
- Contact form retains the PHP backend but now uses the current form fields and sends enquiries to `info@naziasayyed.com`.
- Responsive layouts added for desktop, tablet and mobile, including mobile navigation and single-column project/gallery behavior.
- Preserved the existing JSON-driven portfolio architecture; no database is required.

## Important deployment checks

1. Upload the complete folder structure, including `portfolio_data.json`, `Images/`, HTML/CSS/JS files and `contact.php`.
2. Confirm the hosting provider supports PHP `mail()` or replace `contact.php` with the hosting provider's SMTP/form-mail method if `mail()` is disabled.
3. Confirm the final WhatsApp phone number and any social links before publishing.
4. Test the contact form on the live domain after deployment.
5. Test the site at desktop, tablet and mobile breakpoints.

## Revision 2 — viewport and gallery refinement

- Home hero now uses the full available viewport height instead of a fixed minimum height, keeping the landing composition within one screen on desktop and mobile.
- Studio section height and typography/spacing were tightened so the Studio copy and image read as one complete viewport composition on desktop.
- Founder section retains the existing 50/50 split but uses tighter editorial spacing and responsive sizing so the image and founder copy are presented as a complete composition on desktop.
- Services page opening spacing was reduced so the service categories begin sooner and the page no longer feels top-heavy.
- Individual service panels were reduced in height so the image and corresponding content can be understood together without an oversized image dominating the viewport.
- Work page opening hero spacing was reduced while preserving the existing project card layout, names, counts and dynamic JSON loading.
- Project gallery framing was changed to use the natural aspect ratio of each source image rather than forcing every image into a common frame. This removes grey/empty image borders and prevents cropping caused by mismatched aspect ratios.
- Gallery columns now use the full available content width, eliminating the previous unused right-side space.
- Mobile layouts were explicitly kept flexible so the viewport refinements do not crop Studio, Founder, Services or gallery content on smaller screens.


## V3 — Studio spacing refinement
- Kept the approved Studio split-screen design and founder layout unchanged.
- Studio section now starts below the fixed navigation and uses the remaining viewport height.
- Reduced Studio heading scale, paragraph line-height and internal spacing to prevent the content from feeling cramped or being hidden behind the navigation.
- Kept the Studio image full-height within its half of the layout.
- No changes to projects, gallery, services, contact, buttons, typography system or founder section.
