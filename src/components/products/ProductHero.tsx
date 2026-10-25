import { ArrowRight, Check } from 'lucide-react'
import type { Product } from '../../products/types'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

export function ProductHero({ product }: { product: Product }) {
  const { hero, logo: Logo, name } = product
  const Visual = hero.visual
  const Decoration = hero.decoration
  return (
    <section
      aria-labelledby="product-hero-heading"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_78%_45%,var(--hl-soft)_0%,transparent_62%),radial-gradient(ellipse_55%_45%_at_5%_100%,var(--accent-soft)_0%,transparent_65%)]" />
        <div className="bg-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_60%_70%_at_80%_45%,black,transparent_75%)] opacity-60" />
      </div>

      <Container className="relative grid items-center gap-12 sm:gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-14 xl:gap-20">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow">BaelApps product</p>
            <div className="mt-5">
              <Logo />
              <span className="sr-only">{name}</span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="product-hero-heading"
              className="heading-display mt-7 text-[calc(2.8rem*var(--display-scale))] leading-[1.02] text-ink sm:text-[calc(4.25rem*var(--display-scale))] lg:text-[calc(3.9rem*var(--display-scale))] xl:text-[calc(4.5rem*var(--display-scale))]"
            >
              <span className="xl:whitespace-nowrap">{hero.headingLead}</span>{' '}
              <span className="block">
                <span className="text-hl-gradient">{hero.headingAccent}</span>
              </span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-muted sm:mt-7 sm:text-xl">{hero.subheading}</p>
          </Reveal>
          <Reveal delay={240} className="mt-8 grid grid-cols-2 gap-3 sm:mt-9 sm:flex">
            <ButtonLink href={hero.primaryCta.href} size="lg" className="px-3 text-[0.9rem] sm:px-7 sm:text-[0.95rem]">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink
              href={hero.secondaryCta.href}
              variant="outline"
              size="lg"
              className="px-3 text-[0.9rem] sm:px-7 sm:text-[0.95rem]"
            >
              {hero.secondaryCta.label}
            </ButtonLink>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.82rem] text-ink-muted sm:mt-9 sm:text-sm">
              {hero.assurances.map((a) => (
                <li key={a} className="flex items-center gap-2">
                  <span className="flex h-4.5 w-4.5 items-center justify-center rounded-full bg-hl-soft text-hl-deep">
                    <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          {Decoration && <Decoration />}
          <Visual />
        </Reveal>
      </Container>
    </section>
  )
}
