/**
 * Company-level content and settings for the BaelApps website.
 * Product content lives in src/products/<product>/content.ts.
 */

export const site = {
  name: 'BaelApps',
  /** Production origin, used for canonical URLs and Open Graph tags. Update if the domain differs. */
  url: 'https://baelapps.com',
  tagline: 'Thoughtfully built software for real-world businesses and everyday life.',
  footerTagline: 'Thoughtfully built software for real-world problems.',
  /** Default social share image (1200×630), relative to /public. */
  ogImage: '/og-image.png',
}

/* ------------------------------------------------------------------ */
/* Contact details — replace with the official ones before launch      */
/* ------------------------------------------------------------------ */
export const contact = {
  email: 'hello@baelapps.com',
  /** Optional. Leave as null to hide phone/WhatsApp everywhere on the site. */
  phone: null as null | { display: string; href: string },
  whatsapp: null as null | string,
  location: 'India',
}

/**
 * Contact form delivery. The site is static, so messages need a form service
 * (e.g. Formspree, Basin, or an Azure Function) that accepts a JSON POST.
 * While this is null the form never pretends to send: it offers to open the
 * visitor's email app with the message pre-filled instead.
 */
export const contactForm = {
  endpoint: null as string | null,
}

/** Social profiles. Any left as null are hidden from the footer. */
export const social: Record<'linkedin' | 'instagram' | 'x' | 'github', string | null> = {
  linkedin: null,
  instagram: null,
  x: null,
  github: null,
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */
export const nav = {
  links: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Explore Products', href: '/products' },
}

export const footerNav = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
  copyright: '© 2026 BaelApps. All rights reserved.',
}
