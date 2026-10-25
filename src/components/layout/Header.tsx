import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { products } from '../../data/products'
import { nav } from '../../data/site'
import { productPath } from '../../products/types'
import { useRouter } from '../../router/location'
import { Link } from '../../router/Router'
import { BaelAppsLogo } from '../ui/BaelAppsLogo'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'

function isActive(current: string, href: string) {
  return href === '/' ? current === '/' : current === href || current.startsWith(`${href}/`)
}

/** Desktop "Products" dropdown. Opens on hover or click; closes on Escape, outside click or navigation. */
function ProductsMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        ref.current?.querySelector<HTMLButtonElement>('button')?.focus()
      }
    }
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const show = () => {
    window.clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const hide = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 120)
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="products-menu"
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-ink ${
          active ? 'text-ink' : 'text-ink/65'
        }`}
      >
        Products
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div
        id="products-menu"
        onClick={(e) => (e.target as HTMLElement).closest('a') && setOpen(false)}
        className={`absolute top-full left-1/2 w-[34rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-24px_rgb(18_17_21/0.35)]">
          <ul className="grid gap-1 p-2">
            {products.map((p) => {
              const Mark = p.mark
              return (
                <li key={p.slug}>
                  <Link
                    href={productPath(p)}
                    className="group flex items-start gap-4 rounded-xl p-3.5 transition-colors hover:bg-paper focus-visible:bg-paper"
                  >
                    <Mark className="h-11 w-11" />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2 text-[0.95rem] font-semibold text-ink">
                        {p.name}
                        <span className="text-[0.7rem] font-medium tracking-wide text-ink-muted uppercase">
                          {p.category}
                        </span>
                      </span>
                      <span className="mt-0.5 block text-sm leading-snug text-ink-muted">{p.shortDescription}</span>
                    </span>
                    <ArrowRight className="mt-1 h-4 w-4 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:text-ink" />
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link
            href="/products"
            className="flex items-center justify-between border-t border-line bg-paper/70 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-paper"
          >
            View all products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const { path } = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const elevated = scrolled || open

  return (
    <header
      data-theme="baelapps"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        elevated
          ? `border-b border-ink/6 shadow-[0_8px_30px_-18px_rgb(18_17_21/0.3)] backdrop-blur-xl ${open ? '!bg-paper' : '!bg-paper/85'}`
          : 'border-b border-transparent !bg-transparent'
      }`}
    >
      <Container
        className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-20'}`}
      >
        <Link href="/" aria-label="BaelApps — home" className="rounded-lg">
          <BaelAppsLogo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.links.map((l) =>
              l.href === '/products' ? (
                <li key={l.href}>
                  <ProductsMenu active={isActive(path, l.href)} />
                </li>
              ) : (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={isActive(path, l.href) ? 'page' : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-ink ${
                      isActive(path, l.href) ? 'text-ink' : 'text-ink/65'
                    }`}
                  >
                    {l.label}
                    {isActive(path, l.href) && (
                      <span aria-hidden="true" className="absolute inset-x-4 -bottom-0.5 h-px bg-ink" />
                    )}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href={nav.cta.href}>
              {nav.cta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-y-auto transition-[max-height,opacity] duration-500 ease-out lg:hidden ${
          open ? 'max-h-[calc(100dvh-4rem)] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
        inert={!open}
      >
        <nav
          aria-label="Mobile"
          className="border-t border-ink/6"
          onClick={(e) => (e.target as HTMLElement).closest('a') && setOpen(false)}
        >
          <Container className="py-4">
            <ul className="flex flex-col">
              {nav.links.map((l) => (
                <li key={l.href} className="border-b border-ink/6">
                  <Link
                    href={l.href}
                    aria-current={isActive(path, l.href) ? 'page' : undefined}
                    className="flex items-center justify-between py-4 text-2xl font-semibold tracking-tight text-ink"
                  >
                    {l.label}
                    <ArrowRight className="h-4 w-4 text-ink-muted" />
                  </Link>
                  {l.href === '/products' && (
                    <ul className="-mt-1 grid gap-2 pb-4">
                      {products.map((p) => {
                        const Mark = p.mark
                        return (
                          <li key={p.slug}>
                            <Link
                              href={productPath(p)}
                              className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-line"
                            >
                              <Mark className="h-10 w-10" />
                              <span>
                                <span className="block font-semibold text-ink">{p.name}</span>
                                <span className="block text-sm text-ink-muted">{p.tagline}</span>
                              </span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <ButtonLink href={nav.cta.href} size="lg" className="mt-6 mb-2 w-full">
              {nav.cta.label}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </Container>
        </nav>
      </div>
    </header>
  )
}
