import { ArrowRight } from 'lucide-react'
import { productPath, type Product } from '../../products/types'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

function Highlights({ product, columns }: { product: Product; columns: string }) {
  return (
    <ul className={`grid gap-x-6 gap-y-4 ${columns}`}>
      {product.highlights.map(({ icon: Icon, title }, i) => (
        <Reveal as="li" key={title} delay={i * 50} className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.7} />
          </span>
          <span className="font-medium text-ink">{title}</span>
        </Reveal>
      ))}
    </ul>
  )
}

/** Home-page feature for one product, rendered in that product's theme. */
export function ProductSpotlight({ product }: { product: Product }) {
  const { logo: Logo, spotlight } = product
  const Visual = spotlight.visual
  const headingId = `spotlight-${product.slug}`
  const cta = (
    <ButtonLink href={productPath(product)} variant="accent" size="lg">
      Explore {product.name}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </ButtonLink>
  )
  const heading = (
    <>
      <Logo />
      <h2
        id={headingId}
        className="heading-display mt-6 text-[calc(2.6rem*var(--display-scale))] leading-[1.02] text-ink sm:text-[calc(3.6rem*var(--display-scale))]"
      >
        Meet {product.name}.
      </h2>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">{spotlight.subheading}</p>
    </>
  )

  if (spotlight.layout === 'split') {
    return (
      <section
        data-theme={product.theme}
        aria-labelledby={headingId}
        className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
      >
        <div aria-hidden="true" className="bg-pattern pointer-events-none absolute inset-0 opacity-80" />
        <Container className="relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal className="order-2 pb-10 lg:order-1 lg:pb-0">
            <Visual />
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>{heading}</Reveal>
            <div className="mt-10">
              <Highlights product={product} columns="sm:grid-cols-2" />
            </div>
            <Reveal delay={150} className="mt-10">
              {cta}
            </Reveal>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section
      data-theme={product.theme}
      aria-labelledby={headingId}
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%] bg-[radial-gradient(ellipse_60%_60%_at_80%_0%,var(--hl-soft),transparent_70%)]"
      />
      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>{heading}</Reveal>
          <Reveal delay={100} className="shrink-0">
            {cta}
          </Reveal>
        </div>
        <Reveal delay={120} className="mt-12 sm:mt-14">
          <Visual />
        </Reveal>
        <div className="mt-12 border-t border-line pt-10">
          <Highlights
            product={product}
            columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:[&>li]:flex-col lg:[&>li]:items-start"
          />
        </div>
      </Container>
    </section>
  )
}
