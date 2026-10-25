/**
 * Small decorative divider. Themes choose the style in CSS: the lotus bud appears in the
 * Boutiquo360 theme; other themes show a short rule.
 */
export function Ornament({ className = '' }: { className?: string }) {
  return (
    <span className={`ornament inline-flex h-5 items-center ${className}`} aria-hidden="true">
      <span className="ornament-rule h-0.5 w-10 rounded-full bg-current" />
      <svg viewBox="0 0 160 20" className="ornament-lotus h-5 w-40">
        <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          <path d="M2 10h56M102 10h56" opacity="0.6" />
          <path d="M80 2c5 4 5 12 0 16-5-4-5-12 0-16z" />
          <path d="M80 10c6-6 12-6 16 0-4 3-10 3-16 0zM80 10c-6-6-12-6-16 0 4 3 10 3 16 0z" opacity="0.75" />
        </g>
        <circle cx="62" cy="10" r="1.4" fill="currentColor" />
        <circle cx="98" cy="10" r="1.4" fill="currentColor" />
      </svg>
    </span>
  )
}

/** Large, faint mandala used as a decorative backdrop. Shown only in the Boutiquo360 theme. */
export function Mandala({ className = '' }: { className?: string }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5)
  const inner = Array.from({ length: 8 }, (_, i) => i * 45 + 22.5)
  return (
    <svg viewBox="0 0 200 200" className={`mandala ${className}`} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.6">
        <circle cx="100" cy="100" r="96" />
        <circle cx="100" cy="100" r="88" strokeDasharray="1.5 3" />
        <circle cx="100" cy="100" r="54" />
        <circle cx="100" cy="100" r="18" />
        {petals.map((deg) => (
          <path key={deg} d="M100 14c10 14 10 30 0 40-10-10-10-26 0-40z" transform={`rotate(${deg} 100 100)`} />
        ))}
        {inner.map((deg) => (
          <path key={deg} d="M100 48c7 9 7 22 0 30-7-8-7-21 0-30z" transform={`rotate(${deg} 100 100)`} />
        ))}
      </g>
    </svg>
  )
}
