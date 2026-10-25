import { ArrowLeft, ArrowRight } from 'lucide-react'
import { products } from '../../data/products'
import { productPath, type Product } from '../../products/types'
import { Link } from '../../router/Router'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

/** Slim bar at the top of a product page: back to all products, and quick links to the others. */
export function ProductBreadcrumb({ product }: { product: Product }) {
  const others = products.filter((p) => p.slug !== product.slug)
  return (
    <div className="pt-20 sm:pt-24">
      <Container>
        <nav
          aria-label="Product navigation"
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line py-3 text-sm"
        >
          <ol className="flex items-center gap-2 text-ink-muted">
            <li>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-ink"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                All Products
              </Link>
            </li>
            <li aria-hidden="true" className="text-line-strong">
              /
            </li>
            <li aria-current="page" className="font-semibold text-ink">
              {product.name}
            </li>
          </ol>
          {others.length > 0 && (
            <p className="flex items-center gap-3 text-ink-muted">
              <span className="hidden sm:inline">Also from BaelApps:</span>
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={productPath(p)}
                  className="inline-flex items-center gap-1 font-semibold text-ink transition-colors hover:text-accent"
                >
                  {p.name}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ))}
            </p>
          )}
        </nav>
      </Container>
    </div>
  )
}

/** "Other products" cards shown near the end of each product page, each in its own theme. */
export function OtherProducts({ current }: { current: Product }) {
  const others = products.filter((p) => p.slug !== current.slug)
  if (others.length === 0) return null
  return (
    <section
      aria-labelledby="other-products-heading"
      className="border-t border-line py-16 sm:py-20"
      data-theme="baelapps"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">More from BaelApps</p>
            <h2 id="other-products-heading" className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Other products
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
          >
            All products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-2">
          {others.map((p) => {
            const Mark = p.mark
            return (
              <Reveal as="li" key={p.slug}>
                <Link
                  href={productPath(p)}
                  data-theme={p.theme}
                  className="group flex items-center gap-5 rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-(--shadow-card) sm:p-6"
                >
                  <Mark className="h-12 w-12" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold text-ink">{p.name}</span>
                    <span className="block text-sm text-ink-muted">{p.tagline}</span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
