import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

export function HomeCTA({
  heading = 'Let’s Build Something Useful.',
  text = 'Questions about our products, or a problem you think software should solve? We’d like to hear from you.',
}: {
  heading?: string
  text?: string
}) {
  return (
    <section aria-labelledby="home-cta-heading" className="py-20 sm:py-28">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-white px-6 py-14 text-center sm:rounded-[2.5rem] sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="bg-pattern pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,black,transparent)]"
          />
          <div className="relative">
            <h2
              id="home-cta-heading"
              className="mx-auto max-w-3xl text-[2.4rem] leading-[1.02] font-semibold tracking-[-0.04em] text-ink sm:text-6xl"
            >
              {heading}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">{text}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Contact Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink href="/products" variant="outline" size="lg">
                Explore Products
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
