import { ArrowDown } from 'lucide-react'
import type { IconItem } from '../../products/types'
import { Container } from '../ui/Container'
import { Ornament } from '../ui/Ornament'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type Props = { eyebrow: string; heading: string; intro: string; points: IconItem[]; resolution: string }

export function ProductProblem({ eyebrow, heading, intro, points, resolution }: Props) {
  return (
    <section aria-labelledby="problem-heading" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id="problem-heading" align="left" eyebrow={eyebrow} title={heading} intro={intro} />
          </div>

          <ul className="grid border-t border-line sm:grid-cols-2 sm:gap-x-10">
            {points.map(({ icon: Icon, title, description }, i) => (
              <Reveal as="li" key={title} delay={(i % 2) * 80} className="border-b border-line">
                <div className="group flex gap-4 py-5 sm:py-7">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="text-[0.98rem] font-semibold text-ink">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="mt-16 flex flex-col items-center text-center sm:mt-20">
          <Ornament className="text-hl" />
          <p className="heading-display mt-5 text-[calc(1.9rem*var(--display-scale))] leading-tight text-ink italic sm:text-[calc(2.25rem*var(--display-scale))]">
            {resolution.replace(/\.$/, '')}
            <span className="text-hl">.</span>
          </p>
          <a
            href="#features"
            className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-hl hover:text-hl-deep"
            aria-label="Jump to features"
          >
            <ArrowDown className="h-4 w-4" />
          </a>
        </Reveal>
      </Container>
    </section>
  )
}
