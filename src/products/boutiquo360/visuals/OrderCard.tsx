import { CalendarClock, ImageIcon, Ruler, Scissors, Truck } from 'lucide-react'
import { sample } from './sampleData'

// CSS "fabric swatches" standing in for design-reference photos
const swatches = [
  { background: 'repeating-linear-gradient(135deg, #5a2a52 0 6px, #6d3864 6px 12px)' },
  { background: 'radial-gradient(circle, #e2c98d 1.4px, transparent 2px) 0 0 / 10px 10px, #8a2f3c' },
  { background: 'repeating-linear-gradient(90deg, #c9a24d 0 2px, #f3e6c4 2px 9px)' },
]

/** A tailoring order mid-way through its journey. Illustrative only. */
export function OrderCard() {
  const current = 4 // "Trial"
  const stages = sample.tailoringStages
  return (
    <div className="relative rounded-3xl border border-white/10 bg-paper p-5 text-ink shadow-[0_40px_80px_-30px_rgb(0_0_0/0.6)] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-hl-deep uppercase">Order #B-1042</p>
          <p className="mt-1 text-xl font-bold tracking-tight">Bridal Lehenga</p>
          <p className="text-sm text-ink-muted">Ananya Sharma · Repeat customer</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent text-hl-soft">
          <Scissors className="h-5 w-5" strokeWidth={1.7} />
        </span>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs font-semibold">
          <span className="text-ink">Stage: {stages[current]}</span>
          <span className="text-ink-muted">
            {current + 1} of {stages.length}
          </span>
        </div>
        <div className="mt-2 flex gap-1" aria-hidden="true">
          {stages.map((s, i) => (
            <span
              key={s}
              className={`h-1.5 flex-1 rounded-full ${i < current ? 'bg-hl' : i === current ? 'bg-accent' : 'bg-line-strong'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
            <Ruler className="h-3.5 w-3.5 text-hl" /> Measurements
          </p>
          <dl className="mt-2.5 grid grid-cols-3 gap-2">
            {sample.measurements.map(([k, v]) => (
              <div key={k} className="rounded-lg bg-canvas px-2.5 py-2">
                <dt className="text-[0.62rem] text-ink-muted">{k}</dt>
                <dd className="text-sm font-bold">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <p className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
            <ImageIcon className="h-3.5 w-3.5 text-hl" /> Design reference
          </p>
          <div className="mt-2.5 grid grid-cols-3 gap-2" aria-hidden="true">
            {swatches.map((s, i) => (
              <span key={i} className="aspect-[4/3] rounded-lg ring-1 ring-ink/10 sm:aspect-[3/4]" style={s} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-line pt-5 text-sm">
        <div className="flex items-center gap-2.5">
          <CalendarClock className="h-4 w-4 text-accent" />
          <div>
            <p className="text-[0.65rem] text-ink-muted">Trial</p>
            <p className="font-semibold">Wed, 08 Oct</p>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <Truck className="h-4 w-4 text-accent" />
          <div>
            <p className="text-[0.65rem] text-ink-muted">Delivery</p>
            <p className="font-semibold">Sun, 12 Oct</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Compact order preview used inside the tailoring feature tile. */
export function MiniOrder() {
  return (
    <div aria-hidden="true" className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-semibold text-white">Bridal Lehenga · Ananya S.</span>
        <span className="text-xs whitespace-nowrap text-hl-light">Trial · Wed, 08 Oct</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2">
        {sample.measurements
          .filter(([k]) => ['Bust', 'Waist', 'Hip', 'Length'].includes(k))
          .map(([k, v]) => (
            <div key={k} className="rounded-lg bg-white/[0.06] px-2.5 py-2">
              <p className="text-[0.65rem] text-white/55">{k}</p>
              <p className="text-sm font-bold text-white">{v}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
