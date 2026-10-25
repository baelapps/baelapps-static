import type { LogoProps } from '../../types'

/** Square "B" mark. Temporary text-based mark until a final logo asset is available. */
export function Boutiquo360Mark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`shrink-0 ${className}`} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#1b161d" />
      <circle cx="20" cy="20" r="12.5" fill="none" stroke="#c9a24d" strokeWidth="1.4" strokeDasharray="2 2.2" />
      <text
        x="20"
        y="26.5"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="19"
        fontWeight="700"
        fill="#f3e6c4"
      >
        B
      </text>
    </svg>
  )
}

/** Boutiquo360 wordmark. Uses the boutique serif regardless of the surrounding theme. */
export function Boutiquo360Logo({ tone = 'dark', className = '' }: LogoProps) {
  const light = tone === 'light'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Boutiquo360Mark />
      <span
        className={`font-boutique text-[1.6rem] leading-none font-semibold tracking-tight ${light ? 'text-white' : 'text-[#1b161d]'}`}
      >
        Boutiquo<span className={light ? 'text-[#e2c98d]' : 'text-[#b38a35]'}>360</span>
      </span>
    </span>
  )
}
