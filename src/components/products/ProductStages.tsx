import { Check } from 'lucide-react'
import type { ProductSection } from '../../products/types'
import { Container } from '../ui/Container'
import { Mandala } from '../ui/Ornament'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Props = Extract<ProductSection, { kind: 'stages' }>

/** Dark, high-emphasis section: copy and a product visual, then a numbered stage-by-stage stepper. */
export function ProductStages({
  id,
  eyebrow,
  heading,
  intro,
  benefits,
  highlight,
  stepsLabel,
  steps,
  panel: Panel,
}: Props) {
  const last = steps.length - 1
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-28 lg:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_85%_25%,color-mix(in_oklab,var(--accent)_60%,transparent),transparent_70%),radial-gradient(ellipse_60%_40%_at_50%_100%,color-mix(in_oklab,var(--accent-deep)_90%,transparent),transparent_75%)]" />
        <div className="bg-pattern-light absolute inset-0" />
        <Mandala className="absolute -top-40 -right-40 h-[40rem] w-[40rem] text-accent-light/20" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hl-light/50 to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              id={`${id}-heading`}
              align="left"
              tone="dark"
              eyebrow={eyebrow}
              title={heading}
              intro={intro}
            />
            <Reveal delay={100}>
              <ul className="mt-8 space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-hl-light/15 text-hl-light">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <p className="heading-display mt-10 border-l-2 border-hl-light pl-5 text-[calc(1.5rem*var(--display-scale))] leading-snug text-hl-soft italic sm:text-[calc(1.875rem*var(--display-scale))]">
                {highlight}
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:pl-4">
            <Panel />
          </Reveal>
        </div>

        <div className="mt-20 sm:mt-24">
          <Reveal>
            <h3 className="text-center text-xs font-semibold tracking-[0.22em] text-hl-light uppercase">
              {stepsLabel}
            </h3>
          </Reveal>
          <ol className="relative mt-10 grid gap-0 sm:grid-cols-4 sm:gap-y-12 xl:grid-cols-8">
            {steps.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 70}
                className="relative flex gap-5 pb-8 last:pb-0 sm:flex-col sm:items-center sm:gap-0 sm:pb-0 sm:text-center"
              >
                {/* Connector: vertical on phones, horizontal on larger screens */}
                {i < last && (
                  <span
                    aria-hidden="true"
                    className={`absolute top-12 bottom-0 left-6 w-px bg-gradient-to-b from-hl-light/60 to-hl-light/15 sm:top-6 sm:right-[-50%] sm:bottom-auto sm:left-1/2 sm:h-px sm:w-auto sm:bg-gradient-to-r ${
                      i % 4 === 3 ? 'sm:hidden xl:block' : ''
                    }`}
                  />
                )}
                <span
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                    i === last ? 'border-hl-light bg-hl-light text-ink' : 'border-hl-light/40 bg-ink-soft text-hl-light'
                  }`}
                >
                  {i === last ? <Check className="h-5 w-5" strokeWidth={2.5} /> : i + 1}
                </span>
                <div className="pt-2.5 sm:pt-0">
                  <p className="heading-display text-[calc(1.25rem*var(--display-scale))] text-white sm:mt-4">
                    {step.title}
                  </p>
                  <p className="mt-0.5 text-sm text-white/55">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
