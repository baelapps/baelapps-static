import { CalendarClock, Plus, Search } from 'lucide-react'
import { sample } from './sampleData'
import { AppFrame, AppSidebar, SalesChart, StatusBadge } from './parts'

const upcoming = [
  { time: '11:00', title: 'Trial — Bridal Lehenga', who: 'Ananya S.' },
  { time: '14:30', title: 'Measurement — Kurta set', who: 'New customer' },
  { time: '17:00', title: 'Pickup — Anarkali Suit', who: 'Meera K.' },
]

/** Full dashboard used in the showcase section. Purely illustrative. */
export function DashboardMockup() {
  const total = sample.weeklySales.reduce((s, d) => s + d.value, 0)
  return (
    <AppFrame>
      <div className="flex">
        <AppSidebar />
        <div className="min-w-0 flex-1 bg-[#fcfaf6] p-4 sm:p-6">
          {/* Header row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium tracking-wide text-ink-muted uppercase">Dashboard</p>
              <p className="text-xl font-bold tracking-tight text-ink sm:text-2xl">Today at your boutique</p>
            </div>
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="hidden h-9 w-56 items-center gap-2 whitespace-nowrap rounded-lg bg-white px-3 text-xs text-ink-muted ring-1 ring-ink/8 md:flex">
                <Search className="h-3.5 w-3.5" /> Search orders, customers…
              </span>
              <span className="flex h-9 items-center gap-1.5 rounded-lg bg-ink px-3 text-xs font-semibold text-paper">
                <Plus className="h-3.5 w-3.5" /> New Order
              </span>
            </div>
          </div>

          {/* Stat cards */}
          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {sample.stats.map(({ label, value, delta, icon: Icon }) => (
              <div key={label} className="rounded-xl bg-white p-3.5 ring-1 ring-ink/6 sm:p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-[0.7rem] leading-tight font-medium text-ink-muted sm:text-xs">{label}</p>
                  <span className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-hl-soft/70 text-hl sm:flex">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                </div>
                <p className="mt-2 text-xl font-bold tracking-tight text-ink sm:text-2xl">{value}</p>
                <p className="mt-1 text-[0.65rem] text-ink-muted sm:text-[0.7rem]">{delta}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {/* Recent orders */}
            <div className="overflow-hidden rounded-xl bg-white ring-1 ring-ink/6 lg:col-span-2">
              <div className="flex items-center justify-between px-4 pt-4 pb-2">
                <p className="text-sm font-semibold text-ink">Recent Orders</p>
                <p className="text-xs font-semibold text-hl-deep">View all</p>
              </div>
              {/* Table on wider screens */}
              <table className="hidden w-full text-left text-xs sm:table">
                <thead>
                  <tr className="border-y border-ink/5 bg-paper/70 text-[0.68rem] tracking-wide text-ink-muted uppercase">
                    <th scope="col" className="px-4 py-2.5 font-semibold">
                      Customer
                    </th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">
                      Order
                    </th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">
                      Status
                    </th>
                    <th scope="col" className="px-4 py-2.5 text-right font-semibold">
                      Delivery Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5">
                  {sample.orders.map((o) => (
                    <tr key={o.customer}>
                      <td className="px-4 py-3 font-semibold text-ink">{o.customer}</td>
                      <td className="px-4 py-3 text-ink-muted">{o.order}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={o.status} />
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-ink">{o.delivery}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Stacked list on phones */}
              <ul className="divide-y divide-ink/5 border-t border-ink/5 sm:hidden">
                {sample.orders.slice(0, 4).map((o) => (
                  <li key={o.customer} className="flex items-center justify-between gap-3 px-4 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-ink">{o.customer}</p>
                      <p className="truncate text-xs text-ink-muted">
                        {o.order} · {o.delivery}
                      </p>
                    </div>
                    <StatusBadge status={o.status} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Sales chart + schedule */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl bg-white p-4 ring-1 ring-ink/6">
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-ink">Sales this week</p>
                  <p className="text-xs font-semibold text-[#2f6b3a]">+18%</p>
                </div>
                <p className="mt-1 text-xl font-bold text-ink">₹{(total * 1000).toLocaleString('en-IN')}</p>
                <SalesChart data={sample.weeklySales} className="mt-2" />
              </div>
              <div className="rounded-xl bg-ink p-4 text-paper">
                <div className="flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-hl-light" />
                  <p className="text-sm font-semibold">Today's schedule</p>
                </div>
                <ul className="mt-3 space-y-2.5">
                  {upcoming.map((u) => (
                    <li key={u.time} className="flex gap-3 text-xs">
                      <span className="w-10 shrink-0 font-semibold text-hl-light">{u.time}</span>
                      <span className="min-w-0">
                        <span className="block truncate font-medium text-paper">{u.title}</span>
                        <span className="block text-paper/55">{u.who}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  )
}
