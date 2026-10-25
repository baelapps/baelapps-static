import { Quote } from 'lucide-react'
import type { ProductSection } from '../../products/types'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Props = Extract<ProductSection, { kind: 'testimonials' }>

/** Customer quotes. Only add this section to a product once real, approved quotes exist. */
export function ProductTestimonials({ eyebrow, heading, items }: Props) {
  return (
    <section aria-labelledby="testimonials-heading" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading id="testimonials-heading" eyebrow={eyebrow} title={heading} />
        <ul className="mt-16 grid gap-5 md:grid-cols-3 lg:gap-6">
          {items.map((t, i) => (
            <Reveal as="li" key={t.quote} delay={i * 100}>
              <figure
                className={`flex h-full flex-col rounded-3xl p-7 sm:p-8 ${
                  i === 1 ? 'bg-ink text-white md:-translate-y-4' : 'border border-line bg-white text-ink'
                }`}
              >
                <Quote
                  className={`h-8 w-8 ${i === 1 ? 'text-hl-light' : 'text-hl'}`}
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
                <blockquote className="heading-display mt-5 flex-1 text-[calc(1.45rem*var(--display-scale))] leading-snug">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className={`mt-8 border-t pt-5 ${i === 1 ? 'border-white/10' : 'border-line'}`}>
                  <span className="block text-sm font-semibold">{t.name}</span>
                  <span className={`block text-xs ${i === 1 ? 'text-white/60' : 'text-ink-muted'}`}>{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
