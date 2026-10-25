import type { ReactNode } from 'react'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

/** Title block for inner BaelApps pages (About, Products, Contact, legal). */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-14 sm:pt-44 sm:pb-20">
      <div
        aria-hidden="true"
        className="bg-pattern pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_20%_0%,black,transparent_75%)]"
      />
      <Container className="relative">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-[2.7rem] leading-[1.02] font-semibold tracking-[-0.045em] text-ink sm:text-6xl lg:text-[4.6rem]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">{intro}</p>
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  )
}

/** Serif italic accent for a word or two in a sans headline. */
export function Accent({ children }: { children: ReactNode }) {
  return <span className="font-serif font-normal tracking-[-0.02em] text-accent italic">{children}</span>
}
