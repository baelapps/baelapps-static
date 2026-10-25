import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

/** Editorial statement section with oversized type. */
export function Philosophy() {
  return (
    <section
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-ink py-24 text-white sm:py-32 lg:py-44"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-pattern-light absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_30%_50%,black,transparent)]" />
        <div className="absolute -top-1/3 -right-1/4 h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_45%,transparent),transparent)]" />
        {/* A single, slow line — the only motion here */}
        <svg viewBox="0 0 1200 400" preserveAspectRatio="none" className="absolute inset-x-0 bottom-16 h-40 w-full">
          <path
            d="M0 320 C 300 320, 420 120, 700 140 S 1050 60, 1200 40"
            fill="none"
            stroke="#c8aa70"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            className="animate-draw [animation-duration:4s]"
          />
        </svg>
      </div>

      <Container className="relative">
        <Reveal>
          <p className="eyebrow !text-hl-light">Our philosophy</p>
        </Reveal>
        <Reveal delay={100}>
          <h2
            id="philosophy-heading"
            className="mt-8 max-w-5xl text-[3.2rem] leading-[0.98] font-semibold tracking-[-0.05em] sm:text-[5.5rem] lg:text-[7.5rem]"
          >
            Good software should feel{' '}
            <span className="font-serif font-normal tracking-[-0.02em] text-hl-light italic">simple.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1fr_1fr]">
          <div className="hidden lg:block" />
          <Reveal delay={200}>
            <p className="max-w-lg border-l border-white/20 pl-6 text-xl leading-relaxed text-white/75 sm:text-2xl">
              Behind every BaelApps product is a simple idea: technology should remove complexity, not add to it.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
