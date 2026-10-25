import { Bell, CalendarClock, CircleCheck, ClipboardList, IndianRupee, Package, Search, Truck } from 'lucide-react'
import { sample } from './sampleData'
import { AppFrame, AppSidebar, StatusBadge } from './parts'

const heroStats = [
  { label: "Today's Sales", value: '₹24,850', note: '+12%', icon: IndianRupee },
  { label: 'Active Orders', value: '18', note: '5 new', icon: ClipboardList },
  { label: 'Deliveries', value: '7', note: '3 due this week', icon: Truck },
  { label: 'Inventory', value: '1,240', note: 'items', icon: Package },
]

const revenueBars = [42, 58, 36, 66, 61, 88, 78]

/** Product preview shown in the hero. Purely illustrative. */
export function HeroDashboard() {
  return (
    <div className="relative">
      <AppFrame>
        <div className="flex">
          <AppSidebar compact />
          <div className="min-w-0 flex-1 bg-[#fcfaf6] p-4 sm:p-5">
            {/* Top bar */}
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[0.68rem] font-medium tracking-wide text-ink-muted uppercase">Saturday, 4 Oct</p>
                <p className="truncate text-[1.05rem] font-bold tracking-tight text-ink">
                  Good morning, Aarna Boutique
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2" aria-hidden="true">
                <span className="hidden h-8 w-36 items-center gap-2 rounded-lg bg-white px-2.5 text-[0.65rem] text-ink-muted ring-1 ring-ink/8 md:flex">
                  <Search className="h-3.5 w-3.5" /> Search customers…
                </span>
                <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white ring-1 ring-ink/8">
                  <Bell className="h-3.5 w-3.5 text-ink-muted" />
                  <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
              {heroStats.map(({ label, value, note, icon: Icon }, i) => (
                <div
                  key={label}
                  className={`rounded-xl p-3 ring-1 ${
                    i === 0 ? 'bg-ink text-paper ring-ink' : 'bg-white text-ink ring-ink/6'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[0.68rem] font-medium ${i === 0 ? 'text-paper/65' : 'text-ink-muted'}`}>
                      {label}
                    </span>
                    <Icon className={`h-3.5 w-3.5 ${i === 0 ? 'text-hl-light' : 'text-hl'}`} />
                  </div>
                  <p className="mt-1.5 text-lg leading-none font-bold tracking-tight">{value}</p>
                  <p className={`mt-1 text-[0.66rem] ${i === 0 ? 'text-hl-light' : 'text-ink-muted'}`}>{note}</p>
                </div>
              ))}
            </div>

            {/* Revenue + orders */}
            <div className="mt-3 grid gap-2.5 md:grid-cols-5">
              <div className="hidden rounded-xl bg-white p-3.5 ring-1 ring-ink/6 sm:block md:col-span-2">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs font-semibold text-ink">Revenue</p>
                  <p className="text-[0.66rem] text-ink-muted">This week</p>
                </div>
                <p className="mt-1 text-base font-bold text-ink">₹1,37,000</p>
                <div className="mt-3 flex h-20 items-end gap-1.5" aria-hidden="true">
                  {revenueBars.map((v, i) => (
                    <span
                      key={i}
                      className={`animate-bar flex-1 rounded-t-[4px] ${i === 5 ? 'bg-accent' : 'bg-hl-light/70'}`}
                      style={{ height: `${v}%`, animationDelay: `${300 + i * 70}ms` }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-white p-3.5 ring-1 ring-ink/6 md:col-span-3">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs font-semibold text-ink">Customer Orders</p>
                  <p className="text-[0.66rem] font-semibold text-hl-deep">View all</p>
                </div>
                <ul className="mt-2 divide-y divide-ink/5">
                  {sample.orders.slice(0, 3).map((o) => (
                    <li key={o.customer} className="flex items-center justify-between gap-2 py-2">
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-canvas text-[0.66rem] font-bold text-accent">
                          {o.customer
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[0.75rem] font-semibold text-ink">{o.customer}</p>
                          <p className="truncate text-[0.66rem] text-ink-muted">{o.order}</p>
                        </div>
                      </div>
                      <StatusBadge status={o.status} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AppFrame>

      {/* Floating detail cards */}
      <div
        className="animate-float-soft absolute -bottom-6 -left-3 hidden w-56 rounded-2xl border border-white/70 bg-white/95 p-3.5 shadow-(--shadow-lift) backdrop-blur sm:block lg:-left-8"
        aria-hidden="true"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <CalendarClock className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="text-[0.75rem] font-semibold text-ink">Trial today · 4:30 PM</p>
            <p className="text-[0.68rem] text-ink-muted">Priya N. — Silk saree blouse</p>
          </div>
        </div>
      </div>

      <div
        className="animate-float-soft absolute -top-5 -right-3 hidden rounded-2xl border border-white/70 bg-white/95 px-3.5 py-3 shadow-(--shadow-lift) backdrop-blur sm:block lg:-right-2 xl:-right-8"
        style={{ animationDelay: '-3.5s' }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e3f0e1] text-[#2f6b3a]">
            <CircleCheck className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[0.75rem] font-semibold text-ink">Order ready for pickup</p>
            <p className="text-[0.68rem] text-ink-muted">WhatsApp update sent to Meera</p>
          </div>
        </div>
      </div>
    </div>
  )
}
