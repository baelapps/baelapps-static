import { Check } from 'lucide-react'
import type { ProductSection } from '../../products/types'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Props = Extract<ProductSection, { kind: 'audiences' }>

/** One card per type of user, for products that serve several roles. */
export function ProductAudiences({ eyebrow, heading, intro, items }: Props) {
  return (
    <section id="audiences" aria-labelledby="audiences-heading" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading id="audiences-heading" eyebrow={eyebrow} title={heading} intro={intro} />
        <ul className="mt-14 grid gap-4 md:grid-cols-3 lg:gap-6">
          {items.map(({ icon: Icon, audience, title, description, points }, i) => (
            <Reveal as="li" key={audience} delay={i * 100}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 sm:p-8 ${
                  i === 0
                    ? 'bg-ink text-white hover:shadow-(--shadow-lift)'
                    : 'border border-line bg-white text-ink hover:shadow-(--shadow-lift)'
                }`}
              >
                {i === 0 && (
                  <div
                    aria-hidden="true"
                    className="bg-pattern-light pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
                  />
                )}
                <div className="relative flex items-center justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      i === 0 ? 'bg-accent text-white' : 'bg-accent-soft text-accent'
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[0.7rem] font-semibold tracking-[0.12em] uppercase ${
                      i === 0 ? 'bg-white/10 text-hl-light' : 'bg-hl-soft text-hl-deep'
                    }`}
                  >
                    {audience}
                  </span>
                </div>
                <h3 className="heading-display relative mt-7 text-[calc(1.6rem*var(--display-scale))] leading-tight">
                  {title}
                </h3>
                <p className={`relative mt-3 leading-relaxed ${i === 0 ? 'text-white/70' : 'text-ink-muted'}`}>
                  {description}
                </p>
                <ul
                  className={`relative mt-6 space-y-2.5 border-t pt-6 text-sm ${i === 0 ? 'border-white/10' : 'border-line'}`}
                >
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${i === 0 ? 'text-hl-light' : 'text-accent'}`}
                        strokeWidth={2.5}
                      />
                      <span className={i === 0 ? 'text-white/85' : 'text-ink'}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
