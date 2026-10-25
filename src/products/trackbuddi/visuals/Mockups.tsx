import {
  ChartColumn,
  Bell,
  Bus,
  CircleCheck,
  LayoutDashboard,
  MapPin,
  Navigation,
  Route,
  Settings,
  UserRound,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'
import { RouteMap } from './RouteMap'
import { route, trips, type TripStatus } from './sampleData'

/* ------------------------------------------------------------------ */
/* Phone (parent app)                                                  */
/* ------------------------------------------------------------------ */

function StopList({ compact = false }: { compact?: boolean }) {
  const stops = compact ? route.stops.slice(1, 4) : route.stops
  return (
    <ol className="space-y-0">
      {stops.map((s, i) => (
        <li key={s.name} className="relative flex items-center gap-3 py-1.5">
          {i < stops.length - 1 && (
            <span
              aria-hidden="true"
              className={`absolute top-1/2 left-[5px] h-full w-0.5 ${s.state === 'done' ? 'bg-[#1e40af]' : 'bg-[#dfe4ee]'}`}
            />
          )}
          <span
            className={`relative z-10 h-3 w-3 shrink-0 rounded-full border-2 ${
              s.state === 'done'
                ? 'border-[#1e40af] bg-[#1e40af]'
                : s.state === 'next'
                  ? 'border-[#f2b01e] bg-white ring-4 ring-[#f2b01e]/25'
                  : 'border-[#cbd3e1] bg-white'
            }`}
          />
          <span
            className={`flex-1 truncate text-[0.72rem] ${s.state === 'upcoming' ? 'text-[#526077]' : 'font-semibold text-[#0f172a]'}`}
          >
            {s.name}
          </span>
          <span className="text-[0.66rem] text-[#526077] tabular-nums">{s.time}</span>
        </li>
      ))}
    </ol>
  )
}

/** Parent app: live trip view. Illustrative only. */
export function PhoneMockup({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative w-[17rem] rounded-[2.4rem] bg-[#0f172a] p-2.5 shadow-[0_40px_80px_-30px_rgb(19_32_63/0.55)] ring-1 ring-white/10 ${className}`}
    >
      <div className="overflow-hidden rounded-[1.9rem] bg-white">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[0.62rem] font-semibold text-[#0f172a]">
          <span>7:41</span>
          <span className="h-4 w-16 rounded-full bg-[#0f172a]" aria-hidden="true" />
          <span>5G</span>
        </div>
        <div className="px-4 pt-2 pb-3">
          <p className="text-[0.66rem] font-medium text-[#526077]">Aarav · Grade 4</p>
          <div className="flex items-center justify-between">
            <p className="text-[0.95rem] font-bold tracking-tight text-[#0f172a]">Morning trip</p>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#e3eafc] px-2 py-0.5 text-[0.62rem] font-semibold text-[#1e40af]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1e40af]" /> Live
            </span>
          </div>
        </div>
        <RouteMap className="h-40 w-full" />
        <div className="space-y-3 p-4">
          <div className="flex items-center gap-2.5 rounded-xl bg-[#fff3d1] px-3 py-2.5">
            <Bus className="h-4 w-4 text-[#8a5a00]" />
            <div className="min-w-0">
              <p className="text-[0.72rem] font-semibold text-[#0f172a]">Bus departed</p>
              <p className="truncate text-[0.64rem] text-[#526077]">
                {route.name} · next stop {route.stops[2].name}
              </p>
            </div>
          </div>
          <StopList compact />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Admin console (school web dashboard)                                */
/* ------------------------------------------------------------------ */

const adminNav: [LucideIcon, string][] = [
  [LayoutDashboard, 'Dashboard'],
  [Navigation, 'Trips'],
  [Route, 'Routes'],
  [UserRound, 'Drivers'],
  [Bus, 'Buses'],
  [Users, 'Students'],
  [ChartColumn, 'Analytics'],
  [Settings, 'Settings'],
]

const statusStyle: Record<TripStatus, string> = {
  'On route': 'bg-[#e3eafc] text-[#1e40af]',
  Scheduled: 'bg-[#edf0f7] text-[#526077]',
  Completed: 'bg-[#e3f3e8] text-[#24723f]',
}

function AdminFrame({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#0f172a]/10 bg-white shadow-(--shadow-mockup)">
      <div className="flex items-center gap-3 border-b border-[#0f172a]/6 bg-[#f4f6fa] px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#f1b8ad]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f3d78f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#b5d8bd]" />
        </div>
        <div className="mx-auto flex h-6 w-full max-w-[16rem] items-center justify-center rounded-md bg-white text-[0.65rem] font-medium text-[#526077] ring-1 ring-[#0f172a]/5">
          app.trackbuddi.com
        </div>
        <div className="w-10" aria-hidden="true" />
      </div>
      {children}
    </div>
  )
}

/** School admin dashboard: live fleet map and today's trips. Illustrative only. */
export function AdminConsole() {
  const stats = [
    { label: 'Trips on route', value: '2' },
    { label: 'Completed today', value: '1' },
    { label: 'Scheduled', value: '1' },
    { label: 'Alerts sent', value: '64' },
  ]
  return (
    <AdminFrame>
      <div className="flex">
        <nav
          className="hidden w-44 shrink-0 flex-col gap-0.5 border-r border-[#0f172a]/6 bg-[#fbfcfe] p-3 md:flex"
          aria-hidden="true"
        >
          <div className="mb-3 flex items-center gap-2 px-2 py-1">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#1e40af]">
              <MapPin className="h-3.5 w-3.5 text-white" />
            </span>
            <span className="text-[0.8rem] font-bold tracking-tight text-[#0f172a]">TrackBuddi</span>
          </div>
          {adminNav.map(([Icon, label], i) => (
            <span
              key={label}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[0.72rem] font-medium ${
                i === 0 ? 'bg-[#e3eafc] text-[#1e40af]' : 'text-[#526077]'
              }`}
            >
              <Icon className="h-3.5 w-3.5" /> {label}
            </span>
          ))}
        </nav>

        <div className="min-w-0 flex-1 bg-[#f7f8fb] p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="text-[0.68rem] font-medium tracking-wide text-[#526077] uppercase">{route.school}</p>
              <p className="text-lg font-bold tracking-tight text-[#0f172a]">Live fleet</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[0.7rem] font-semibold text-[#0f172a] ring-1 ring-[#0f172a]/8">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#2fb35a]" /> 2 buses live
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-white p-3 ring-1 ring-[#0f172a]/6">
                <p className="text-[0.68rem] font-medium text-[#526077]">{s.label}</p>
                <p className="mt-1 text-xl font-bold tracking-tight text-[#0f172a]">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 lg:grid-cols-5">
            <div className="overflow-hidden rounded-xl bg-white ring-1 ring-[#0f172a]/6 lg:col-span-3">
              <RouteMap fleet className="h-full max-h-72 w-full" />
            </div>
            <div className="rounded-xl bg-white p-3.5 ring-1 ring-[#0f172a]/6 lg:col-span-2">
              <p className="text-xs font-semibold text-[#0f172a]">Today's trips</p>
              <ul className="mt-2 divide-y divide-[#0f172a]/5">
                {trips.map((t) => (
                  <li key={t.route + t.time} className="flex items-center justify-between gap-2 py-2">
                    <div className="min-w-0">
                      <p className="truncate text-[0.74rem] font-semibold text-[#0f172a]">
                        {t.route} <span className="font-normal text-[#526077]">· {t.time}</span>
                      </p>
                      <p className="truncate text-[0.66rem] text-[#526077]">{t.driver}</p>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[0.64rem] font-semibold whitespace-nowrap ${statusStyle[t.status]}`}
                    >
                      {t.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminFrame>
  )
}

/* ------------------------------------------------------------------ */
/* Compositions                                                        */
/* ------------------------------------------------------------------ */

/** Hero: admin map card behind, parent phone in front, plus a live alert. */
export function TrackBuddiHeroVisual() {
  return (
    <div className="relative mx-auto max-w-xl pb-6 sm:pb-24 lg:max-w-none" aria-hidden="true">
      <div className="ml-auto w-full overflow-hidden sm:w-[86%] rounded-2xl border border-[#0f172a]/10 bg-white shadow-(--shadow-mockup)">
        <div className="flex items-center justify-between border-b border-[#0f172a]/6 px-4 py-3">
          <div>
            <p className="text-[0.66rem] font-medium tracking-wide text-[#526077] uppercase">Live fleet</p>
            <p className="text-sm font-bold text-[#0f172a]">{route.school}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e3eafc] px-2.5 py-1 text-[0.66rem] font-semibold text-[#1e40af]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#1e40af]" /> Live
          </span>
        </div>
        <RouteMap fleet className="aspect-[320/230] w-full" />
      </div>
      <div className="absolute bottom-0 left-0 hidden origin-bottom-left scale-[0.62] sm:block lg:-left-4">
        <PhoneMockup className="animate-float-soft" />
      </div>
      <div
        className="animate-float-soft absolute right-2 bottom-0 flex items-center sm:right-4 sm:bottom-10 gap-2.5 rounded-2xl border border-white/70 bg-white/95 px-3.5 py-3 shadow-(--shadow-lift) backdrop-blur sm:right-6"
        style={{ animationDelay: '-3.5s' }}
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e3f3e8] text-[#24723f]">
          <CircleCheck className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[0.75rem] font-semibold text-[#0f172a]">Bus arrived at School Gate</p>
          <p className="text-[0.68rem] text-[#526077]">Guardians notified</p>
        </div>
      </div>
    </div>
  )
}

/** Compact card visual for the home and products pages. */
export function TrackBuddiPreview() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-sm">
      <div className="overflow-hidden rounded-2xl border border-[#0f172a]/8 bg-white shadow-(--shadow-mockup)">
        <RouteMap className="aspect-[320/200] w-full" />
        <div className="flex items-center gap-2.5 border-t border-[#0f172a]/6 px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fff3d1] text-[#8a5a00]">
            <Bell className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[0.75rem] font-semibold text-[#0f172a]">Bus departed · {route.name}</p>
            <p className="truncate text-[0.68rem] text-[#526077]">Next stop: {route.stops[2].name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/** Trip progress used inside the live-tracking feature tile. */
export function TripProgress() {
  return (
    <div aria-hidden="true" className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-white">
          {route.name} · {route.school.split(' ')[0]}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-hl-light">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-hl-light" /> Live
        </span>
      </div>
      <div className="mt-4 flex items-center">
        {route.stops.map((s, i) => (
          <div key={s.name} className="flex flex-1 items-center last:flex-none">
            <span
              className={`h-3 w-3 shrink-0 rounded-full ${
                s.state === 'done' ? 'bg-white' : s.state === 'next' ? 'bg-hl ring-4 ring-hl/30' : 'bg-white/25'
              }`}
            />
            {i < route.stops.length - 1 && (
              <span className={`h-0.5 flex-1 ${s.state === 'done' ? 'bg-white' : 'bg-white/20'}`} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[0.65rem] text-white/60">
        <span>{route.stops[0].name}</span>
        <span>{route.stops[route.stops.length - 1].name}</span>
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/[0.06] px-3 py-2.5">
        <Bell className="h-4 w-4 text-hl-light" />
        <p className="text-xs text-white/80">
          <span className="font-semibold text-white">Bus departed</span> · next stop {route.stops[2].name}
        </p>
      </div>
    </div>
  )
}
