import { ArrowRight } from 'lucide-react'
import { HomeCTA } from '../components/home/HomeCTA'
import { Accent, PageHero } from '../components/layout/PageHero'
import { BaelAppsMark } from '../components/ui/BaelAppsLogo'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { products } from '../data/products'
import { productPath } from '../products/types'
import { Link } from '../router/Router'

const principles = [
  {
    title: 'Start with the real problem',
    description:
      'We start by understanding how the people who’ll use a product actually work — before deciding what to build.',
  },
  {
    title: 'Keep it simple',
    description: 'If a feature makes the everyday task harder to understand, it doesn’t ship. Simplicity is a feature.',
  },
  {
    title: 'Design the details',
    description: 'Good typography, clear language and sensible defaults make software feel calm and trustworthy.',
  },
  {
    title: 'Build to last',
    description: 'Modern, cloud-based technology that can grow with the businesses and families relying on it.',
  },
]

const process = [
  { step: 'Understand', text: 'Learn how the work is really done today, and where it breaks.' },
  { step: 'Design', text: 'Shape a focused product around that work, not around a generic template.' },
  { step: 'Build', text: 'Engineer it carefully on modern, reliable technology.' },
  { step: 'Improve', text: 'Listen to the people using it, and keep making it better.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About BaelApps"
        title={
          <>
            We Build Software That People <Accent>Actually Use.</Accent>
          </>
        }
        intro="BaelApps is a software product studio. We create practical, focused products with thoughtful design and modern technology — for real businesses and everyday life."
      >
        {/* One studio, several products */}
        <div aria-hidden="true" className="absolute top-1/2 right-10 hidden -translate-y-1/2 lg:block xl:right-16">
          <div className="relative h-72 w-72">
            <div className="absolute inset-0 rounded-full border border-line" />
            <div className="absolute inset-10 rounded-full border border-dashed border-line-strong" />
            <div className="absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.75rem] bg-white shadow-(--shadow-lift) ring-1 ring-line">
              <BaelAppsMark className="h-12 w-12" />
            </div>
            {products.map((p, i) => {
              const Mark = p.mark
              const pos = ['top-2 left-6', 'right-0 bottom-8', 'bottom-0 left-12'][i % 3]
              return (
                <div
                  key={p.slug}
                  className={`animate-float-soft absolute ${pos} flex items-center gap-2.5 rounded-2xl bg-white py-2 pr-4 pl-2 shadow-(--shadow-card) ring-1 ring-line`}
                  style={{ animationDelay: `${i * -3}s` }}
                >
                  <Mark className="h-9 w-9" />
                  <span className="text-sm font-semibold text-ink">{p.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </PageHero>

      {/* Story */}
      <section aria-labelledby="story-heading" className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 border-t border-line pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pt-16">
            <Reveal>
              <h2 id="story-heading" className="text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl">
                Why we exist
              </h2>
            </Reveal>
            <Reveal delay={80} className="space-y-5 text-lg leading-relaxed text-ink-muted">
              <p>
                A lot of software is built to tick boxes. It does a little of everything, fits no one particularly well,
                and leaves people working around it with notebooks and spreadsheets.
              </p>
              <p>
                We take the opposite approach. Each BaelApps product focuses on a specific group of people — a boutique
                owner keeping track of tailoring orders, a school running its buses, a parent waiting at the gate — and
                tries to make their day genuinely easier.
              </p>
              <p className="text-ink">
                Our products share one studio and one standard of care, but each has its own identity, shaped around the
                people it serves.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section aria-labelledby="principles-heading" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            id="principles-heading"
            align="left"
            eyebrow="What we believe"
            title="Principles we build by"
          />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={(i % 2) * 90} className="bg-paper p-7 sm:p-10">
                <span className="font-serif text-4xl leading-none text-hl italic">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-muted">{p.description}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Process */}
      <section aria-labelledby="process-heading" className="bg-ink py-20 text-white sm:py-28">
        <Container>
          <SectionHeading
            id="process-heading"
            align="left"
            tone="dark"
            eyebrow="How we work"
            title="From problem to product"
          />
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 90} className="relative border-t border-white/15 pt-6 lg:pr-8">
                <span aria-hidden="true" className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full bg-hl-light" />
                <p className="text-sm font-semibold tracking-[0.18em] text-hl-light uppercase">Step {i + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{p.step}</h3>
                <p className="mt-2 leading-relaxed text-white/65">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Products */}
      <section aria-labelledby="about-products-heading" className="py-20 sm:py-28">
        <Container>
          <SectionHeading id="about-products-heading" align="left" eyebrow="What we build" title="Our products" />
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {products.map((p) => {
              const Mark = p.mark
              return (
                <Reveal as="li" key={p.slug}>
                  <Link
                    href={productPath(p)}
                    className="group flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:gap-8"
                  >
                    <span className="flex items-center gap-4 sm:w-72">
                      <Mark className="h-12 w-12" />
                      <span>
                        <span className="block text-xl font-semibold text-ink">{p.name}</span>
                        <span className="block text-sm text-ink-muted">{p.category}</span>
                      </span>
                    </span>
                    <span className="flex-1 leading-relaxed text-ink-muted">{p.description}</span>
                    <ArrowRight className="hidden h-5 w-5 text-ink-muted transition-all group-hover:translate-x-1 group-hover:text-ink sm:block" />
                  </Link>
                </Reveal>
              )
            })}
          </ul>
        </Container>
      </section>

      <HomeCTA />
    </>
  )
}
