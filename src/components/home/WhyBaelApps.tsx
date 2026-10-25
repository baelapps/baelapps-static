import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const reasons = [
  {
    title: 'Solve Real Problems',
    description: 'We focus on practical problems rather than building software for the sake of software.',
  },
  { title: 'Simple by Design', description: 'Complex problems deserve simple experiences.' },
  {
    title: 'Built to Evolve',
    description: 'Our products are designed to grow with the people and businesses using them.',
  },
  {
    title: 'Product First',
    description: 'We care about usability, reliability and the details that make software genuinely useful.',
  },
]

export function WhyBaelApps() {
  return (
    <section
      aria-labelledby="why-baelapps-heading"
      className="border-y border-line bg-canvas/60 py-20 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="why-baelapps-heading" align="left" eyebrow="Why BaelApps" title="Why We Build Products" />
          <Reveal delay={80}>
            <p className="max-w-md text-lg leading-relaxed text-ink-muted">
              Every product starts with a real problem and a simple question: what would make this genuinely easier?
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-0">
          {reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              delay={i * 90}
              className="group relative rounded-2xl border border-line bg-paper p-6 sm:p-7 lg:rounded-none lg:border-0 lg:border-l lg:bg-transparent lg:px-8 lg:py-2 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="font-serif text-5xl leading-none text-hl italic transition-colors duration-500 group-hover:text-accent lg:text-6xl">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink lg:mt-10">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{r.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  )
}
