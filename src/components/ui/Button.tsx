import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { Link } from '../../router/Router'

type Variant = 'primary' | 'accent' | 'highlight' | 'outline' | 'outline-light' | 'light'
type Size = 'md' | 'lg'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: Variant
  size?: Size
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-ink text-paper shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--ink)_60%,transparent)] hover:bg-accent-deep',
  accent:
    'bg-accent text-white shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--accent)_70%,transparent)] hover:bg-accent-deep',
  highlight:
    'bg-hl-light text-ink shadow-[0_8px_24px_-10px_color-mix(in_oklab,var(--hl)_70%,transparent)] hover:bg-hl-soft',
  outline: 'border border-ink/15 bg-white/60 text-ink backdrop-blur hover:border-ink/30 hover:bg-white',
  'outline-light': 'border border-white/25 text-white hover:border-white/50 hover:bg-white/5',
  light: 'bg-white text-ink hover:bg-paper',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-[0.95rem]',
}

/** A link styled as a button. Internal paths ("/about") navigate client-side. */
export function ButtonLink({ variant = 'primary', size = 'md', className = '', children, ...rest }: ButtonLinkProps) {
  return (
    <Link
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  )
}
