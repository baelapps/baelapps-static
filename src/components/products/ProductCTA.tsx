import { ArrowRight } from 'lucide-react'
import type { Product } from '../../products/types'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Ornament } from '../ui/Ornament'
import { Reveal } from '../ui/Reveal'

export function ProductCTA({ product }: { product: Product }) {
  const { cta, logo: Logo } = product
  return (
    <section aria-labelledby="product-cta-heading" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-accent-deep text-white sm:rounded-[2.5rem]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,color-mix(in_oklab,var(--accent-light)_45%,transparent),transparent_70%)]" />
          <div className="bg-pattern-light absolute inset-0" />
        </div>

        <Container className="relative py-20 text-center sm:py-28">
          <Reveal>
            <div className="flex justify-center">
              <Logo tone="light" />
            </div>
            <Ornament className="mx-auto mt-8 text-hl-light" />
            <h2
              id="product-cta-heading"
              className="heading-display mx-auto mt-7 max-w-3xl text-[calc(2.5rem*var(--display-scale))] leading-[1.05] sm:text-[calc(3.75rem*var(--display-scale))]"
            >
              {cta.heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/75">{cta.subheading}</p>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={cta.primary.href} variant="highlight" size="lg">
              {cta.primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href={cta.secondary.href} variant="outline-light" size="lg">
              {cta.secondary.label}
            </ButtonLink>
          </Reveal>
        </Container>
      </div>
    </section>
  )
}
