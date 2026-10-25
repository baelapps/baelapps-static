/** BaelApps mark: a geometric lowercase "b" with a champagne dot. Temporary until an official logo exists. */
export function BaelAppsMark({
  className = 'h-8 w-8',
  tone = 'dark',
}: {
  className?: string
  tone?: 'dark' | 'light'
}) {
  const light = tone === 'light'
  return (
    <svg viewBox="0 0 32 32" className={`shrink-0 ${className}`} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill={light ? '#f7f6f2' : '#131216'} />
      <path
        d="M10.5 7.5v17M10.5 18.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0"
        fill="none"
        stroke={light ? '#131216' : '#f7f6f2'}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <circle cx="22.5" cy="9" r="2.3" fill="#c8aa70" />
    </svg>
  )
}

export function BaelAppsLogo({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const light = tone === 'light'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BaelAppsMark tone={tone} />
      <span className={`text-[1.3rem] leading-none tracking-[-0.03em] ${light ? 'text-white' : 'text-ink'}`}>
        <span className="font-semibold">Bael</span>
        <span className={`font-normal ${light ? 'text-white/70' : 'text-ink-muted'}`}>Apps</span>
      </span>
    </span>
  )
}
