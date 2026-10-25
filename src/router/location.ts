import { createContext, useContext } from 'react'

/**
 * A deliberately small client-side router. The site has a handful of static routes and is
 * pre-rendered at build time, so a full routing library would only add weight.
 */

export type RouterValue = { path: string; hash: string; search: string; navigate: (to: string) => void }

export const RouterContext = createContext<RouterValue | null>(null)

export function useRouter() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('useRouter must be used inside <RouterProvider>')
  return ctx
}

/** "/about/" → "/about"; keeps "/" as is. */
export function normalizePath(path: string) {
  const clean = path.replace(/\/+$/, '')
  return clean === '' ? '/' : clean
}

/* Browser location as an external store, so React reads it consistently (and hydration-safe). */
const listeners = new Set<() => void>()

export function subscribeToLocation(callback: () => void) {
  listeners.add(callback)
  window.addEventListener('popstate', callback)
  return () => {
    listeners.delete(callback)
    window.removeEventListener('popstate', callback)
  }
}

export const getLocationSnapshot = () => window.location.pathname + window.location.search + window.location.hash

export function pushLocation(url: string) {
  window.history.pushState(null, '', url)
  listeners.forEach((l) => l())
}

export function parseLocation(href: string) {
  const url = new URL(href, 'https://placeholder.invalid')
  return { path: normalizePath(url.pathname), search: url.search, hash: url.hash }
}
