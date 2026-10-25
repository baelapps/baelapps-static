import type { LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'

/**
 * The product data model. Every product page is assembled from one `Product` object:
 * shared components handle the layout, the product supplies its content, theme and visuals.
 * To add a product, create src/products/<slug>/ with a `Product` and register it in
 * src/data/products.ts.
 */

export type IconItem = { icon: LucideIcon; title: string; description?: string }

export type Cta = { label: string; href: string }

export type LogoProps = { tone?: 'dark' | 'light'; className?: string }

export type Testimonial = { quote: string; name: string; role: string }

/** Building blocks for a product page, rendered in the order given. */
export type ProductSection =
  | { kind: 'trust'; heading: string; items: IconItem[] }
  | {
      kind: 'problem'
      eyebrow: string
      heading: string
      intro: string
      points: IconItem[]
      resolution: string
    }
  | {
      kind: 'features'
      eyebrow: string
      heading: string
      intro: string
      items: IconItem[]
      /** Optional large tile for the product's key differentiator. */
      spotlight?: { index: number; badge: string; link?: Cta; visual?: ComponentType }
      /** Optional item shown as a wide closing tile. */
      wideIndex?: number
    }
  | {
      kind: 'stages'
      id: string
      eyebrow: string
      heading: string
      intro: string
      benefits: string[]
      highlight: string
      stepsLabel: string
      steps: { title: string; description: string }[]
      /** Product visual shown beside the copy. */
      panel: ComponentType
    }
  | {
      kind: 'journey'
      eyebrow: string
      heading: string
      intro: string
      phases: { label: string; steps: number }[]
      steps: IconItem[]
    }
  | {
      kind: 'showcase'
      eyebrow: string
      heading: string
      intro: string
      visual: ComponentType
      caption?: string
      callouts: { title: string; description: string }[]
      inlineCta?: { text: string; cta: Cta }
    }
  | { kind: 'values'; eyebrow: string; heading: string; intro: string; points: string[] }
  | {
      kind: 'steps'
      eyebrow: string
      heading: string
      steps: { icon: LucideIcon; title: string; description: string }[]
    }
  | { kind: 'testimonials'; eyebrow: string; heading: string; items: Testimonial[] }
  | {
      kind: 'audiences'
      eyebrow: string
      heading: string
      intro: string
      /** One card per type of user, e.g. admins, customers, staff. */
      items: { icon: LucideIcon; audience: string; title: string; description: string; points: string[] }[]
    }

export type Product = {
  slug: string
  name: string
  /** Matches a [data-theme] block in index.css. */
  theme: string
  category: string
  /** Short positioning line used on cards and menus, e.g. "Boutique Management Platform". */
  tagline: string
  shortDescription: string
  description: string

  logo: ComponentType<LogoProps>
  /** Small square brand mark for menus and cards. */
  mark: ComponentType<{ className?: string }>
  /** Compact product visual for cards on the home and products pages. */
  preview: ComponentType

  seo: { title: string; description: string }

  hero: {
    headingLead: string
    headingAccent: string
    subheading: string
    primaryCta: Cta
    secondaryCta: Cta
    assurances: string[]
    visual: ComponentType
    /** Optional decoration drawn behind the hero visual. */
    decoration?: ComponentType
  }

  /** Capability list used by the home-page spotlight. */
  highlights: IconItem[]

  /** How the product is featured on the BaelApps home page. */
  spotlight: {
    subheading: string
    visual: ComponentType
    /** "wide": large visual under the heading. "split": visual beside the copy. */
    layout: 'wide' | 'split'
  }

  sections: ProductSection[]

  cta: { heading: string; subheading: string; primary: Cta; secondary: Cta }
}

export const productPath = (p: Pick<Product, 'slug'>) => `/products/${p.slug}`
