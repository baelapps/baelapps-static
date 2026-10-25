import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { products } from '../../data/products'
import { productPath, type Product } from '../../products/types'
import { Link } from '../../router/Router'
import { BaelAppsMark } from '../ui/BaelAppsLogo'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

const home = {
  eyebrow: 'A software product studio',
  headingLead: 'Software Built Around',
  headingAccent: 'Real Life.',
  subheading:
    'BaelApps builds focused, beautifully designed products that simplify the way businesses and people work, manage and grow.',
}

/** A product floating on the ecosystem stage, in its own theme. */
function StageCard({ product, className = '' }: { product: Product; className?: string }) {
  const { mark: Mark, preview: Preview } = product
  return (
    <Link
      href={productPath(product)}
      data-theme={product.theme}
      className={`group block min-w-0 rounded-[1.6rem] border border-white/60 !bg-paper/95 p-4 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.55)] ring-1 ring-black/5 backdrop-blur transition-transform duration-500 hover:-translate-y-1 sm:p-5 ${className}`}
    >
      <div className="flex items-center gap-3">
        <Mark className="h-10 w-10" />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-ink">{product.name}</p>
          <p className="truncate text-sm text-ink-muted">{product.tagline}</p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors group-hover:bg-ink group-hover:text-paper">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="mt-4">
        <Preview />
      </div>
    </Link>
  )
}

export function Hero() {
  const [first, second] = products
  return (
    <section aria-labelledby="home-hero-heading" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-pattern absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_20%,black,transparent_80%)]" />
        <div className="absolute top-0 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--hl-soft),transparent)] opacity-80" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-[0.8rem] font-medium text-ink-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-hl" />
              {home.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="home-hero-heading"
              className="mt-7 text-[2.9rem] leading-[1] font-semibold tracking-[-0.045em] text-ink sm:text-[4.4rem] lg:text-[5.4rem]"
            >
              {home.headingLead}{' '}
              <span className="font-serif font-normal tracking-[-0.02em] text-accent italic">{home.headingAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              {home.subheading}
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/products" size="lg">
              Explore Our Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
            <ButtonLink href="/about" variant="outline" size="lg">
              About BaelApps
            </ButtonLink>
          </Reveal>
        </div>

        {/* Ecosystem stage: one studio, distinct products */}
        <Reveal delay={300} className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-4 pt-10 pb-4 sm:rounded-[2.5rem] sm:px-8 sm:pt-14 sm:pb-8 lg:px-12 lg:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="bg-pattern-light absolute inset-0" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_45%,color-mix(in_oklab,var(--accent)_45%,transparent),transparent_70%)]" />
              {/* Orbits */}
              <svg
                viewBox="0 0 800 800"
                className="animate-orbit absolute top-1/2 left-1/2 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 opacity-60"
              >
                <g fill="none" stroke="white" strokeOpacity="0.08">
                  <circle cx="400" cy="400" r="160" />
                  <circle cx="400" cy="400" r="260" strokeDasharray="2 6" />
                  <circle cx="400" cy="400" r="370" />
                </g>
                <circle cx="400" cy="140" r="4" fill="#dcc697" fillOpacity="0.7" />
                <circle cx="770" cy="400" r="3" fill="#9a97e0" fillOpacity="0.8" />
              </svg>
              {/* Oversized wordmark */}
              <p className="absolute inset-x-0 bottom-[-0.18em] text-center text-[19vw] leading-none font-semibold tracking-[-0.06em] text-white/[0.045] select-none lg:text-[15rem]">
                BaelApps
              </p>
            </div>

            <div className="relative grid grid-cols-[minmax(0,1fr)] items-center gap-5 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8">
              <StageCard product={first} className="animate-float-soft lg:-rotate-2" />

              <div className="order-first flex flex-col items-center gap-3 pb-4 text-center lg:order-none lg:pb-0">
                <span className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 ring-1 ring-white/15 backdrop-blur">
                  <span className="absolute inset-0 animate-ping rounded-3xl ring-1 ring-white/10 [animation-duration:3s]" />
                  <BaelAppsMark tone="light" className="h-11 w-11" />
                </span>
                <p className="text-xs font-semibold tracking-[0.22em] text-white/50 uppercase">One studio</p>
                <p className="text-sm text-white/70">
                  {products.length} products · {products.length} identities
                </p>
              </div>

              {second && (
                <StageCard
                  product={second}
                  className="animate-float-soft [animation-delay:-3.5s] lg:translate-y-8 lg:rotate-2"
                />
              )}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
