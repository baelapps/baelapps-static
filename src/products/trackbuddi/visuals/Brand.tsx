import type { LogoProps } from '../../types'

/** TrackBuddi mark: a location pin in brand blue with a school-bus amber centre. Temporary, text-free mark. */
export function TrackBuddiMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`shrink-0 ${className}`} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="#1e40af" />
      <path
        d="M20 8.5c-5.2 0-9.2 4-9.2 9.1 0 6.6 7.6 13.2 8.4 13.9a1.2 1.2 0 0 0 1.6 0c.8-.7 8.4-7.3 8.4-13.9 0-5.1-4-9.1-9.2-9.1Z"
        fill="#fff"
      />
      <circle cx="20" cy="17.8" r="3.6" fill="#f2b01e" />
    </svg>
  )
}

export function TrackBuddiLogo({ tone = 'dark', className = '' }: LogoProps) {
  const light = tone === 'light'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <TrackBuddiMark />
      <span
        className={`font-sans text-[1.45rem] leading-none font-bold tracking-[-0.03em] ${light ? 'text-white' : 'text-[#0f172a]'}`}
      >
        Track<span className={light ? 'text-[#8fb0f8]' : 'text-[#1e40af]'}>Buddi</span>
      </span>
    </span>
  )
}
