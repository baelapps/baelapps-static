/**
 * Product registry. The order here is the order products appear across the site
 * (navigation, home page, products page). Add new products to this list.
 */
import { boutiquo360 } from '../products/boutiquo360/content'
import { trackbuddi } from '../products/trackbuddi/content'
import type { Product } from '../products/types'

export const products: Product[] = [boutiquo360, trackbuddi]

export const getProduct = (slug: string) => products.find((p) => p.slug === slug)
