import type { Product, ProductSection } from '../../products/types'
import { ProductAudiences } from './ProductAudiences'
import { ProductCTA } from './ProductCTA'
import { ProductFeatures } from './ProductFeatures'
import { ProductHero } from './ProductHero'
import { ProductJourney } from './ProductJourney'
import { ProductBreadcrumb, OtherProducts } from './ProductNav'
import { ProductProblem } from './ProductProblem'
import { ProductShowcase } from './ProductShowcase'
import { ProductStages } from './ProductStages'
import { ProductSteps } from './ProductSteps'
import { ProductTestimonials } from './ProductTestimonials'
import { ProductTrustStrip } from './ProductTrustStrip'
import { ProductValues } from './ProductValues'

function Section({ section }: { section: ProductSection }) {
  switch (section.kind) {
    case 'trust':
      return <ProductTrustStrip {...section} />
    case 'problem':
      return <ProductProblem {...section} />
    case 'features':
      return <ProductFeatures {...section} />
    case 'stages':
      return <ProductStages {...section} />
    case 'journey':
      return <ProductJourney {...section} />
    case 'showcase':
      return <ProductShowcase {...section} />
    case 'values':
      return <ProductValues {...section} />
    case 'steps':
      return <ProductSteps {...section} />
    case 'testimonials':
      return <ProductTestimonials {...section} />
    case 'audiences':
      return <ProductAudiences {...section} />
  }
}

/**
 * Renders a complete product page from a product configuration, inside that product's theme.
 * The page sits under the BaelApps header and footer, with a breadcrumb back to all products.
 */
export function ProductPage({ product }: { product: Product }) {
  return (
    <div data-theme={product.theme}>
      <ProductBreadcrumb product={product} />
      <ProductHero product={product} />
      {product.sections.map((section, i) => (
        <Section key={`${section.kind}-${i}`} section={section} />
      ))}
      <OtherProducts current={product} />
      <ProductCTA product={product} />
    </div>
  )
}
