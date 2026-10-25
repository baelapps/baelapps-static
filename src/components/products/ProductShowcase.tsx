import { ArrowRight } from 'lucide-react'
import type { ProductSection } from '../../products/types'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Props = Extract<ProductSection, { kind: 'showcase' }>

export function ProductShowcase({ eyebrow, heading, intro, visual: Visual, caption, callouts, inlineCta }: Props) {
  return (
    <section
      aria-labelledby="showcase-heading"
      className="relative overflow-hidden bg-canvas/70 py-20 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_60%_70%_at_50%_100%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_70%)]"
      />
      <Container className="relative">
        <SectionHeading id="showcase-heading" eyebrow={eyebrow} title={heading} intro={intro} />
        <Reveal delay={120} className="mx-auto mt-12 max-w-6xl sm:mt-14">
          <Visual />
          {caption && <p className="mt-4 text-center text-xs text-ink-muted">{caption}</p>}
        </Reveal>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3 sm:gap-8">
          {callouts.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 90} className="flex gap-4 sm:block">
              <span className="heading-display text-[calc(1.875rem*var(--display-scale))] leading-none text-hl">
                0{i + 1}
              </span>
              <div className="sm:mt-3 sm:border-t sm:border-line sm:pt-4">
                <h3 className="text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {inlineCta && (
          <Reveal className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-3xl border border-line bg-paper px-6 py-6 text-center shadow-(--shadow-card) sm:flex-row sm:px-8 sm:text-left">
            <p className="heading-display text-[calc(1.6rem*var(--display-scale))] leading-tight text-ink">
              {inlineCta.text}
            </p>
            <ButtonLink href={inlineCta.cta.href} className="shrink-0">
              {inlineCta.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
