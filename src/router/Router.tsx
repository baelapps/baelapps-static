import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react'
import {
  RouterContext,
  getLocationSnapshot,
  parseLocation,
  pushLocation,
  subscribeToLocation,
  useRouter,
} from './location'

const useIsoLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

function scrollToHash(hash: string) {
  const el = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
  if (el) el.scrollIntoView()
  else window.scrollTo(0, 0)
}

export function RouterProvider({ initialPath, children }: { initialPath: string; children: ReactNode }) {
  // The server (and hydration) see only the pre-rendered path; the browser then supplies the full URL
  const href = useSyncExternalStore(subscribeToLocation, getLocationSnapshot, () => initialPath)
  const location = useMemo(() => parseLocation(href), [href])
  const pendingScroll = useRef<string | null>(null)

  const navigate = useCallback((to: string) => {
    const next = parseLocation(to)
    const current = parseLocation(getLocationSnapshot())
    const url = next.path + next.search + next.hash
    if (next.path === current.path && next.search === current.search) {
      // Same page: just move to the anchor
      if (next.hash !== current.hash) pushLocation(url)
      scrollToHash(next.hash)
      return
    }
    pendingScroll.current = next.hash
    pushLocation(url)
  }, [])

  // After a page change has rendered, jump to the top (or to the requested anchor) without smooth scrolling
  useIsoLayoutEffect(() => {
    if (pendingScroll.current === null) return
    const hash = pendingScroll.current
    pendingScroll.current = null
    const root = document.documentElement
    const prev = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    scrollToHash(hash)
    root.style.scrollBehavior = prev
  }, [location.path])

  const value = useMemo(() => ({ ...location, navigate }), [location, navigate])
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

/** Anchor that navigates client-side for internal paths and behaves normally for everything else. */
export function Link({ href, onClick, target, ...rest }: LinkProps) {
  const { navigate } = useRouter()
  const internal = href.startsWith('/') && !href.startsWith('//')

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (
      e.defaultPrevented ||
      !internal ||
      target === '_blank' ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    )
      return
    e.preventDefault()
    navigate(href)
  }

  return <a href={href} target={target} onClick={handleClick} {...rest} />
}
