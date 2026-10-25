import { ArrowRight } from 'lucide-react'
import type { ComponentType } from 'react'
import type { Cta, IconItem, ProductSection } from '../../products/types'
import { Link } from '../../router/Router'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Props = Extract<ProductSection, { kind: 'features' }>

function SpotlightCard({
  item: { icon: Icon, title, description },
  badge,
  link,
  visual: Visual,
}: {
  item: IconItem
  badge: string
  link?: Cta
  visual?: ComponentType
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-7 text-white sm:p-9">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_100%_0%,color-mix(in_oklab,var(--accent)_75%,transparent),transparent_70%)]"
      />
      <div aria-hidden="true" className="bg-pattern-light pointer-events-none absolute inset-0" />
      <div className="relative flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hl-light text-ink">
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </span>
        <span className="rounded-full border border-hl-light/40 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.14em] text-hl-light uppercase">
          {badge}
        </span>
      </div>
      <h3 className="heading-display relative mt-7 text-[calc(2rem*var(--display-scale))] leading-[1.1] sm:text-[calc(2.4rem*var(--display-scale))]">
        {title}
      </h3>
      <p className="relative mt-3 max-w-md leading-relaxed text-white/75">{description}</p>
      {Visual && (
        <div className="relative mt-8 hidden lg:block">
          <Visual />
        </div>
      )}
      {link && (
        <Link
          href={link.href}
          className="relative mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-hl-light transition-colors hover:text-hl-soft"
        >
          {link.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </article>
  )
}

function FeatureCard({ icon: Icon, title, description, wide }: IconItem & { wide?: boolean }) {
  return (
    <article
      className={`group relative flex h-full gap-4 overflow-hidden rounded-2xl border p-5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-(--shadow-lift) sm:p-7 ${
        wide
          ? 'border-accent/10 bg-accent-soft/70 hover:border-accent/25 sm:items-center lg:gap-6'
          : 'border-line bg-paper hover:border-hl-light/80 sm:flex-col sm:gap-0'
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-hl-light via-hl to-accent-light transition-transform duration-500 group-hover:scale-x-100"
      />
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 sm:h-12 sm:w-12 sm:rounded-2xl ${
          wide ? 'bg-accent text-hl-soft' : 'bg-ink text-hl-light group-hover:bg-accent'
        }`}
      >
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </span>
      <div className={wide ? '' : 'sm:mt-6'}>
        <h3 className="heading-display text-[calc(1.4rem*var(--display-scale))] leading-tight text-ink sm:text-[calc(1.55rem*var(--display-scale))]">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted sm:mt-2.5">{description}</p>
      </div>
    </article>
  )
}

export function ProductFeatures({ eyebrow, heading, intro, items, spotlight, wideIndex }: Props) {
  return (
    <section id="features" aria-labelledby="features-heading" className="relative bg-canvas/60 py-20 sm:py-28 lg:py-32">
      <div aria-hidden="true" className="bg-pattern pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative">
        <SectionHeading id="features-heading" eyebrow={eyebrow} title={heading} intro={intro} />

        <ul className="mt-12 grid grid-flow-row-dense gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {items.map((item, i) => {
            const isSpotlight = spotlight?.index === i
            const isWide = wideIndex === i
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 4) * 70}
                className={isSpotlight ? 'sm:col-span-2 lg:row-span-2' : isWide ? 'sm:col-span-2' : ''}
              >
                {isSpotlight ? (
                  <SpotlightCard item={item} badge={spotlight.badge} link={spotlight.link} visual={spotlight.visual} />
                ) : (
                  <FeatureCard {...item} wide={isWide} />
                )}
              </Reveal>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
