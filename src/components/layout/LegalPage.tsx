import type { ReactNode } from 'react'
import { Container } from '../ui/Container'
import { PageHero } from './PageHero'

export type LegalSection = { heading: string; body: ReactNode }

/** Shared layout for the Privacy and Terms pages. */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated: string
  intro: ReactNode
  sections: LegalSection[]
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} intro={intro}>
        <p className="mt-6 text-sm text-ink-muted">Last updated: {updated}</p>
      </PageHero>
      <section aria-label={title} className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
            <nav aria-label="On this page" className="hidden lg:block">
              <ol className="sticky top-28 space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.heading}>
                    <a href={`#section-${i + 1}`} className="text-ink-muted transition-colors hover:text-ink">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="max-w-3xl space-y-12">
              {sections.map((s, i) => (
                <section key={s.heading} id={`section-${i + 1}`} aria-labelledby={`section-${i + 1}-heading`}>
                  <h2
                    id={`section-${i + 1}-heading`}
                    className="text-xl font-semibold tracking-tight text-ink sm:text-2xl"
                  >
                    {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-ink-muted [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
