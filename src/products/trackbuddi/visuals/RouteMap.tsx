import { useId } from 'react'

type RouteMapProps = {
  className?: string
  /** Draw a second bus on another route (admin "fleet" view). */
  fleet?: boolean
}

// Route A polyline and its stops (in viewBox units)
const routePath = 'M30 196 C 70 196, 78 150, 112 146 S 150 108, 178 104 S 226 70, 246 66 S 286 40, 296 34'
const stops = [
  [30, 196],
  [112, 146],
  [178, 104],
  [246, 66],
  [296, 34],
]
const bus = [150, 122]

/** Stylised city map with a school-bus route. Pure SVG, scales to its container. */
export function RouteMap({ className = '', fleet = false }: RouteMapProps) {
  const id = 'tb' + useId().replace(/[^a-zA-Z0-9]/g, '')
  return (
    <svg viewBox="0 0 320 230" className={className} role="img" aria-label="Map showing a school bus on its route">
      <defs>
        <pattern id={`${id}-blocks`} width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#eef2f8" />
          <rect x="4" y="4" width="32" height="32" rx="3" fill="#e4e9f2" />
        </pattern>
        <radialGradient id={`${id}-pulse`}>
          <stop offset="0%" stopColor="#f2b01e" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f2b01e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* City blocks, a park and the sea */}
      <rect width="320" height="230" fill={`url(#${id}-blocks)`} />
      <path d="M0 0h60c-8 30-30 60-60 70Z" fill="#d6e6f7" />
      <rect x="200" y="140" width="90" height="60" rx="8" fill="#dcefe2" />
      {/* Main roads */}
      <g stroke="#fff" strokeWidth="7" strokeLinecap="round" fill="none">
        <path d="M0 120 H320" />
        <path d="M150 0 V230" />
        <path d="M0 200 L320 30" opacity="0.6" />
      </g>

      {fleet && (
        <g>
          <path
            d="M20 60 C 80 70, 110 40, 170 50 S 260 110, 305 150"
            fill="none"
            stroke="#8fb0f8"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1 8"
          />
          <circle cx="232" cy="96" r="9" fill="#1e40af" stroke="#fff" strokeWidth="3" />
        </g>
      )}

      {/* Route A */}
      <path d={routePath} fill="none" stroke="#1e40af" strokeOpacity="0.18" strokeWidth="10" strokeLinecap="round" />
      <path d={routePath} fill="none" stroke="#1e40af" strokeWidth="4" strokeLinecap="round" className="animate-draw" />
      {stops.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i === stops.length - 1 ? 7 : 5}
          fill={i < 2 ? '#1e40af' : '#fff'}
          stroke="#1e40af"
          strokeWidth="2.5"
        />
      ))}
      {/* School */}
      <rect x="286" y="10" width="20" height="16" rx="3" fill="#0f172a" />
      <path d="M290 14h12M290 18h12M290 22h8" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />

      {/* Live bus */}
      <circle cx={bus[0]} cy={bus[1]} r="22" fill={`url(#${id}-pulse)`} />
      <circle cx={bus[0]} cy={bus[1]} r="11" fill="#f2b01e" stroke="#fff" strokeWidth="3" />
      <rect x={bus[0] - 5} y={bus[1] - 4.5} width="10" height="8" rx="2" fill="#0f172a" />
      <rect x={bus[0] - 3.5} y={bus[1] - 3} width="7" height="3" rx="0.8" fill="#f2b01e" />
    </svg>
  )
}
