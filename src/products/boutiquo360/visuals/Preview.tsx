import { IndianRupee, Scissors } from 'lucide-react'
import { StatusBadge } from './parts'
import { sample } from './sampleData'

/** Compact Boutiquo360 visual for product cards. Illustrative only. */
export function Boutiquo360Preview() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-sm">
      <div className="rounded-2xl border border-line bg-white p-4 shadow-(--shadow-mockup)">
        <div className="flex items-center justify-between">
          <p className="text-[0.7rem] font-semibold tracking-wide text-ink-muted uppercase">Today</p>
          <span className="text-[0.7rem] font-semibold text-hl-deep">View all</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-ink p-3 text-white">
            <div className="flex items-center justify-between text-[0.68rem] text-white/65">
              Sales <IndianRupee className="h-3 w-3 text-hl-light" />
            </div>
            <p className="mt-1 text-lg leading-none font-bold">₹24,850</p>
          </div>
          <div className="rounded-xl bg-canvas p-3">
            <div className="flex items-center justify-between text-[0.68rem] text-ink-muted">
              In tailoring <Scissors className="h-3 w-3 text-hl" />
            </div>
            <p className="mt-1 text-lg leading-none font-bold text-ink">11</p>
          </div>
        </div>
        <ul className="mt-3 divide-y divide-ink/5">
          {sample.orders.slice(0, 3).map((o) => (
            <li key={o.customer} className="flex items-center justify-between gap-2 py-2">
              <div className="min-w-0">
                <p className="truncate text-[0.75rem] font-semibold text-ink">{o.customer}</p>
                <p className="truncate text-[0.68rem] text-ink-muted">{o.order}</p>
              </div>
              <StatusBadge status={o.status} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
