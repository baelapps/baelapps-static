import { Check } from 'lucide-react'
import type { ProductSection } from '../../products/types'
import { Container } from '../ui/Container'
import { Ornament } from '../ui/Ornament'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Props = Extract<ProductSection, { kind: 'values' }>

export function ProductValues({ eyebrow, heading, intro, points }: Props) {
  return (
    <section id="why" aria-labelledby="why-heading" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id="why-heading" align="left" eyebrow={eyebrow} title={heading} intro={intro} />
            <Reveal delay={120}>
              <Ornament className="mt-10 text-hl" />
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div className="relative overflow-hidden rounded-3xl bg-accent-deep shadow-(--shadow-lift)">
              <ul className="relative grid gap-px bg-white/8 sm:grid-cols-2">
                {points.map((p, i) => (
                  <li
                    key={p}
                    className={`flex items-start gap-4 bg-accent-deep p-5 sm:p-6 ${
                      i === points.length - 1 && points.length % 2 === 1 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hl-light text-ink">
                      <Check className="h-4 w-4" strokeWidth={2.75} />
                    </span>
                    <span className="pt-0.5 text-[0.98rem] leading-snug font-medium text-white">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
