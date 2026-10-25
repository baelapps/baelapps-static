import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

export const InstagramIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
)

export const FacebookIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3.5H9V21h3.5v-8.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z" />
  </svg>
)

export const YoutubeIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
    <path d="m10.5 9.5 4 2.5-4 2.5z" fill="currentColor" />
  </svg>
)

export const LinkedinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 10.5V16M8 7.8v.01M11.5 16v-5.5M11.5 13c0-1.7 1-2.6 2.3-2.6s2.2.9 2.2 2.6v3" />
  </svg>
)

export const XIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 4l16 16M20 4 4 20" />
  </svg>
)

export const GithubIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.3 11.3 0 0 0-6 0C6.7 2.6 5.7 2.9 5.7 2.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.3 9.3c0 4.6 2.8 5.6 5.5 6a3 3 0 0 0-.8 2.3V21" />
  </svg>
)
