import type { ComponentType } from 'react'
import { products } from '../data/products'
import { site } from '../data/site'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Privacy from '../pages/Privacy'
import Products from '../pages/Products'
import Terms from '../pages/Terms'
import Boutiquo360Page from '../pages/products/Boutiquo360'
import TrackBuddiPage from '../pages/products/TrackBuddi'
import { productPath } from '../products/types'
import { normalizePath } from './location'

export type PageMeta = {
  title: string
  description: string
  /** Optional page-specific share image, relative to /public. */
  ogImage?: string
  noindex?: boolean
}

export type RouteDef = { path: string; component: ComponentType; meta: PageMeta }

/** Product pages get their component from this map; SEO comes from each product's configuration. */
const productPages: Record<string, ComponentType> = {
  boutiquo360: Boutiquo360Page,
  trackbuddi: TrackBuddiPage,
}

export const routes: RouteDef[] = [
  {
    path: '/',
    component: Home,
    meta: {
      title: 'BaelApps | Software Built Around Real Life',
      description:
        'BaelApps builds focused, beautifully designed software products for real-world businesses and everyday life.',
    },
  },
  {
    path: '/products',
    component: Products,
    meta: {
      title: 'Products | BaelApps',
      description: `Software products by BaelApps: ${products.map((p) => `${p.name} (${p.tagline})`).join(' and ')}.`,
    },
  },
  ...products
    .filter((p) => productPages[p.slug])
    .map((p) => ({ path: productPath(p), component: productPages[p.slug], meta: p.seo })),
  {
    path: '/about',
    component: About,
    meta: {
      title: 'About | BaelApps',
      description:
        'BaelApps is a software product studio building practical, focused products with thoughtful design and modern technology.',
    },
  },
  {
    path: '/contact',
    component: Contact,
    meta: {
      title: 'Contact | BaelApps',
      description: 'Get in touch with BaelApps about Boutiquo360, TrackBuddi or anything else.',
    },
  },
  {
    path: '/privacy',
    component: Privacy,
    meta: { title: 'Privacy Policy | BaelApps', description: 'How BaelApps handles information on this website.' },
  },
  {
    path: '/terms',
    component: Terms,
    meta: { title: 'Terms of Use | BaelApps', description: 'The terms that apply when you use the BaelApps website.' },
  },
]

export const notFoundRoute: RouteDef = {
  path: '/404',
  component: NotFound,
  meta: {
    title: 'Page not found | BaelApps',
    description: 'The page you’re looking for doesn’t exist.',
    noindex: true,
  },
}

export function matchRoute(path: string): RouteDef {
  const clean = normalizePath(path)
  return routes.find((r) => r.path === clean) ?? notFoundRoute
}

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** The <head> tags for a route, as an HTML string (used when pre-rendering). */
export function renderHead(route: RouteDef) {
  const { meta } = route
  const url = `${site.url}${route.path === '/' ? '/' : route.path}`
  const image = `${site.url}${meta.ogImage ?? site.ogImage}`
  const tags = [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    meta.noindex ? `<meta name="robots" content="noindex" />` : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${site.name}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(meta.title)}" />`,
    `<meta name="twitter:description" content="${escape(meta.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ]
  return tags.join('\n    ')
}

/** Keep the document head in sync after client-side navigation. */
export function applyHead(route: RouteDef) {
  const { meta } = route
  document.title = meta.title
  const set = (selector: string, attr: string, value: string) => {
    document.querySelector(selector)?.setAttribute(attr, value)
  }
  const url = `${site.url}${route.path === '/' ? '/' : route.path}`
  set('meta[name="description"]', 'content', meta.description)
  set('link[rel="canonical"]', 'href', url)
  set('meta[property="og:title"]', 'content', meta.title)
  set('meta[property="og:description"]', 'content', meta.description)
  set('meta[property="og:url"]', 'content', url)
  set('meta[name="twitter:title"]', 'content', meta.title)
  set('meta[name="twitter:description"]', 'content', meta.description)
}
