import type { IconItem } from '../../products/types'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

export function ProductTrustStrip({ heading, items }: { heading: string; items: IconItem[] }) {
  return (
    <section aria-labelledby="trust-heading" className="relative border-y border-line bg-paper">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hl-light to-transparent"
      />
      <Container className="py-9 sm:py-11">
        <div className="flex flex-col items-center gap-7 lg:flex-row lg:gap-12">
          <Reveal className="shrink-0 text-center lg:max-w-[15rem] lg:text-left">
            <h2
              id="trust-heading"
              className="heading-display text-[calc(1.6rem*var(--display-scale))] leading-tight text-ink italic"
            >
              {heading}
            </h2>
          </Reveal>
          <span aria-hidden="true" className="hidden h-14 w-px bg-line lg:block" />
          <ul className="grid w-full grid-cols-3 gap-x-2 gap-y-6 sm:grid-cols-6 lg:flex-1">
            {items.map(({ icon: Icon, title }, i) => (
              <Reveal as="li" key={title} delay={i * 50} className="flex flex-col items-center gap-2.5 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-hl-light/60 bg-hl-soft/40 text-hl-deep">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="text-[0.8rem] leading-tight font-semibold text-ink sm:text-sm">{title}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
