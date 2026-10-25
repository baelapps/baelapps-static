import {
  ChartColumn,
  ClipboardList,
  LayoutDashboard,
  Package,
  Receipt,
  Scissors,
  Settings2,
  Store,
  Users,
} from 'lucide-react'
import type { ReactNode } from 'react'
import type { OrderStatus } from './sampleData'

/** Browser-style window chrome around a mockup. */
export function AppFrame({ children, url = 'app.boutiquo360.com' }: { children: ReactNode; url?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-(--shadow-mockup) ring-1 ring-white/60">
      <div className="flex items-center gap-3 border-b border-ink/6 bg-[#f7f3ec] px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e6b8a8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ecd59c]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#b9d3b0]" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-[16rem] items-center justify-center rounded-md bg-white/80 text-[0.65rem] font-medium text-ink-muted ring-1 ring-ink/5">
          {url}
        </div>
        <div className="w-10" aria-hidden="true" />
      </div>
      {children}
    </div>
  )
}

const sidebarItems = [LayoutDashboard, Users, Scissors, ClipboardList, Package, Receipt, ChartColumn, Store]

/** Slim icon sidebar, hidden on small screens. */
export function AppSidebar({ compact = false }: { compact?: boolean }) {
  const items = compact ? sidebarItems.slice(0, 6) : sidebarItems
  return (
    <div className="hidden w-14 shrink-0 flex-col items-center gap-1.5 bg-ink py-4 sm:flex" aria-hidden="true">
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-hl-soft font-display text-base font-bold text-ink">
        B
      </div>
      {items.map((Icon, i) => (
        <span
          key={i}
          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
            i === 0 ? 'bg-white/10 text-hl-light' : 'text-paper/45'
          }`}
        >
          <Icon className="h-4 w-4" strokeWidth={1.8} />
        </span>
      ))}
      <span className="mt-auto flex h-9 w-9 items-center justify-center text-paper/40">
        <Settings2 className="h-4 w-4" strokeWidth={1.8} />
      </span>
    </div>
  )
}

const statusStyles: Record<OrderStatus, string> = {
  'In Tailoring': 'bg-accent-soft text-accent',
  'Trial Scheduled': 'bg-hl-soft text-[#7a5a17]',
  Ready: 'bg-[#e3f0e1] text-[#2f6b3a]',
  Alteration: 'bg-[#f8e6dc] text-[#9a4a26]',
  Delivered: 'bg-ink/6 text-ink-muted',
}

export function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.68rem] font-semibold whitespace-nowrap ${statusStyles[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </span>
  )
}

/** Smooth area chart drawn in SVG; scales to its container. */
export function SalesChart({ data, className = '' }: { data: { day: string; value: number }[]; className?: string }) {
  const w = 520
  const h = 180
  const padX = 8
  const padTop = 16
  const padBottom = 6
  const max = Math.max(...data.map((d) => d.value)) * 1.15
  const step = (w - padX * 2) / (data.length - 1)
  const pts = data.map((d, i) => [padX + i * step, padTop + (1 - d.value / max) * (h - padTop - padBottom)])

  // Catmull-Rom → cubic Bézier for a soft curve
  const line = pts.reduce((acc, [x, y], i, arr) => {
    if (i === 0) return `M${x},${y}`
    const [x0, y0] = arr[i - 2] ?? arr[i - 1]
    const [x1, y1] = arr[i - 1]
    const [x3, y3] = arr[i + 1] ?? [x, y]
    const c1x = x1 + (x - x0) / 6
    const c1y = y1 + (y - y0) / 6
    const c2x = x - (x3 - x1) / 6
    const c2y = y - (y3 - y1) / 6
    return `${acc} C${c1x},${c1y} ${c2x},${c2y} ${x},${y}`
  }, '')
  const baseline = h - padBottom
  const area = `${line} L${pts[pts.length - 1][0]},${baseline} L${pts[0][0]},${baseline} Z`
  const peak = pts.reduce((best, _p, i) => (data[i].value > data[best].value ? i : best), 0)

  return (
    <div className={className}>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full" role="img" aria-label="Weekly sales trend chart">
        <defs>
          <linearGradient id="salesFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#c9a24d" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#c9a24d" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((t) => (
          <line
            key={t}
            x1={padX}
            x2={w - padX}
            y1={padTop + t * (baseline - padTop)}
            y2={padTop + t * (baseline - padTop)}
            stroke="#1b161d"
            strokeOpacity="0.06"
            strokeDasharray="3 5"
          />
        ))}
        <path d={area} fill="url(#salesFill)" />
        <path d={line} fill="none" stroke="#b38a35" strokeWidth="2.5" strokeLinecap="round" className="animate-draw" />
        <circle cx={pts[peak][0]} cy={pts[peak][1]} r="9" fill="#c9a24d" fillOpacity="0.18" />
        <circle cx={pts[peak][0]} cy={pts[peak][1]} r="4.5" fill="#fff" stroke="#5a2a52" strokeWidth="2.5" />
      </svg>
      <div className="mt-1.5 flex justify-between px-0.5 text-[0.65rem] font-medium text-ink-muted" aria-hidden="true">
        {data.map((d) => (
          <span key={d.day}>{d.day}</span>
        ))}
      </div>
    </div>
  )
}
