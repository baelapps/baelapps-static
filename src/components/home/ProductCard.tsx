import { ArrowRight } from 'lucide-react'
import { productPath, type Product } from '../../products/types'
import { Link } from '../../router/Router'

/** Large product card, rendered in the product's own theme. Used on the home and products pages. */
export function ProductCard({ product, headingLevel = 'h3' }: { product: Product; headingLevel?: 'h2' | 'h3' }) {
  const { logo: Logo, preview: Preview } = product
  const Heading = headingLevel
  return (
    <article
      data-theme={product.theme}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-line !bg-paper transition-all duration-500 hover:-translate-y-1 hover:shadow-(--shadow-lift)"
    >
      {/* Visual panel */}
      <div className="relative overflow-hidden border-b border-line bg-canvas px-6 py-10 sm:px-10">
        <div aria-hidden="true" className="bg-pattern absolute inset-0 opacity-70" />
        <div
          aria-hidden="true"
          className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,var(--accent-soft),transparent)]"
        />
        <div className="relative transition-transform duration-700 group-hover:-translate-y-1.5">
          <Preview />
        </div>
      </div>

      {/* Copy */}
      <div className="relative flex flex-1 flex-col p-6 sm:p-9">
        <p className="text-xs font-semibold tracking-[0.18em] text-hl-deep uppercase">{product.category}</p>
        <Heading className="mt-4">
          <Logo />
          <span className="sr-only">{product.name}</span>
        </Heading>
        <p className="mt-4 leading-relaxed text-ink-muted">{product.description}</p>
        <Link
          href={productPath(product)}
          className="mt-auto inline-flex items-center gap-2 self-start pt-8 font-semibold text-accent after:absolute after:inset-0 after:content-['']"
        >
          Explore {product.name}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  )
}
