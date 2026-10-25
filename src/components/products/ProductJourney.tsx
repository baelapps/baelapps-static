import type { IconItem, ProductSection } from '../../products/types'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Props = Extract<ProductSection, { kind: 'journey' }>
type Phase = { label: string; steps: { n: number; step: IconItem }[] }

/** A phased timeline: horizontal on wide screens, grouped vertical lists elsewhere. */
export function ProductJourney({ eyebrow, heading, intro, phases: phaseDefs, steps }: Props) {
  const total = steps.length
  const phases = phaseDefs.reduce<Phase[]>((acc, phase) => {
    const start = acc.reduce((sum, p) => sum + p.steps.length, 0)
    acc.push({
      label: phase.label,
      steps: steps.slice(start, start + phase.steps).map((step, i) => ({ n: start + i + 1, step })),
    })
    return acc
  }, [])

  return (
    <section aria-labelledby="journey-heading" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading id="journey-heading" eyebrow={eyebrow} title={heading} intro={intro} />

        {/* Wide screens: one continuous timeline, bracketed by phase */}
        <div className="mt-16 hidden xl:block">
          <div className="flex gap-4">
            {phases.map((phase) => (
              <div key={phase.label} style={{ flex: phase.steps.length }} className="min-w-0">
                <Reveal className="flex items-center gap-3 px-2">
                  <span className="h-px flex-1 bg-hl-light/70" />
                  <span className="text-[0.72rem] font-semibold tracking-[0.2em] whitespace-nowrap text-hl-deep uppercase">
                    {phase.label}
                  </span>
                  <span className="h-px flex-1 bg-hl-light/70" />
                </Reveal>
                <ol className="mt-8 flex">
                  {phase.steps.map(({ n, step: { icon: Icon, title } }, i) => (
                    <Reveal
                      as="li"
                      key={title}
                      delay={(n - 1) * 60}
                      className="relative flex flex-1 flex-col items-center px-1.5 text-center"
                    >
                      {n < total && (
                        <span
                          aria-hidden="true"
                          className={`absolute top-7 left-1/2 h-px bg-[linear-gradient(90deg,var(--hl-light)_0_5px,transparent_5px_10px)] bg-[length:10px_1px] ${
                            i === phase.steps.length - 1 ? 'w-[calc(100%+1rem)]' : 'w-full'
                          }`}
                        />
                      )}
                      <span
                        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl ring-6 ring-paper transition-transform duration-300 hover:-translate-y-0.5 ${
                          n === total ? 'bg-accent text-hl-soft' : 'bg-ink text-hl-light'
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <span className="mt-4 text-[0.7rem] font-bold tracking-[0.14em] text-hl-deep">
                        {String(n).padStart(2, '0')}
                      </span>
                      <span className="mt-1 text-sm leading-snug font-semibold text-balance text-ink">{title}</span>
                    </Reveal>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* Phones, tablets and laptops: vertical timeline grouped by phase */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-10 sm:mt-14 md:grid-cols-3 md:gap-6 xl:hidden">
          {phases.map((phase) => (
            <div key={phase.label}>
              <Reveal>
                <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.2em] text-hl-deep uppercase">
                  {phase.label}
                  <span className="h-px flex-1 bg-hl-light/70" />
                </p>
              </Reveal>
              <ol className="relative mt-5">
                <span
                  aria-hidden="true"
                  className="absolute top-3 bottom-3 left-[1.35rem] w-px bg-gradient-to-b from-hl-light to-hl-light/30"
                />
                {phase.steps.map(({ n, step: { icon: Icon, title } }) => (
                  <Reveal as="li" key={title} delay={(n % 5) * 40} className="relative flex items-center gap-4 py-2">
                    <span
                      className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-4 ring-paper ${
                        n === total ? 'bg-accent text-hl-soft' : 'bg-ink text-hl-light'
                      }`}
                    >
                      <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.6} />
                    </span>
                    <span>
                      <span className="block text-[0.68rem] font-bold tracking-[0.14em] text-hl-deep">
                        {String(n).padStart(2, '0')}
                      </span>
                      <span className="block text-[0.95rem] leading-snug font-semibold text-ink">{title}</span>
                    </span>
                  </Reveal>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
