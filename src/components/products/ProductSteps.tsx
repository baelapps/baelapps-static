import type { ProductSection } from '../../products/types'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Props = Extract<ProductSection, { kind: 'steps' }>

export function ProductSteps({ eyebrow, heading, steps }: Props) {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="border-t border-line bg-canvas/60 py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <SectionHeading id="how-heading" eyebrow={eyebrow} title={heading} />

        <ol className="mt-16 grid gap-5 md:grid-cols-3 lg:gap-8">
          {steps.map(({ icon: Icon, title, description }, i) => {
            const number = String(i + 1).padStart(2, '0')
            return (
              <Reveal as="li" key={title} delay={i * 110}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-(--shadow-lift) sm:p-9">
                  <span
                    aria-hidden="true"
                    className="heading-display pointer-events-none absolute -top-5 right-5 text-[calc(8.5rem*var(--display-scale))] leading-none text-line-strong/70 transition-colors duration-500 group-hover:text-hl-soft"
                  >
                    {number}
                  </span>
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-hl-light">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <p className="relative mt-8 text-xs font-semibold tracking-[0.2em] text-hl-deep uppercase">
                    Step {number}
                  </p>
                  <h3 className="heading-display relative mt-2 text-[calc(1.75rem*var(--display-scale))] leading-tight text-ink">
                    {title}
                  </h3>
                  <p className="relative mt-3 leading-relaxed text-ink-muted">{description}</p>
                </article>
              </Reveal>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}
