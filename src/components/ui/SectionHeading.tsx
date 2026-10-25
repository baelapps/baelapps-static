import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
  id?: string
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  tone = 'light',
  id,
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'
  const dark = tone === 'dark'
  return (
    <Reveal className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <p className={`eyebrow ${dark ? 'text-hl-light' : ''} ${centered ? 'justify-center' : ''}`}>{eyebrow}</p>
      )}
      <h2
        id={id}
        className={`heading-display mt-4 text-[calc(2.35rem*var(--display-scale))] leading-[1.05] sm:text-[calc(3rem*var(--display-scale))] lg:text-[calc(3.4rem*var(--display-scale))] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/70' : 'text-ink-muted'} ${
            centered ? 'mx-auto max-w-2xl' : ''
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  )
}
