import { Mail, MapPin } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { products } from '../../data/products'
import { contact, footerNav, site, social } from '../../data/site'
import { productPath } from '../../products/types'
import { Link } from '../../router/Router'
import { BaelAppsLogo } from '../ui/BaelAppsLogo'
import { Container } from '../ui/Container'
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from '../ui/SocialIcons'

const socialIcons: Record<keyof typeof social, [string, ComponentType<SVGProps<SVGSVGElement>>]> = {
  linkedin: ['LinkedIn', LinkedinIcon],
  instagram: ['Instagram', InstagramIcon],
  x: ['X', XIcon],
  github: ['GitHub', GithubIcon],
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-xs font-semibold tracking-[0.18em] text-ink-muted uppercase">{title}</h2>
      <ul className="mt-4 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="inline-block py-1.5 text-[0.95rem] text-ink/80 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Footer() {
  const socials = (Object.keys(socialIcons) as (keyof typeof social)[]).filter((k) => social[k])
  return (
    <footer data-theme="baelapps" className="relative overflow-hidden border-t border-line pt-16 pb-10 sm:pt-20">
      {/* Oversized wordmark, cropped by the bottom edge */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-[0.28em] text-center text-[22vw] leading-none font-semibold tracking-[-0.06em] text-ink/[0.035] select-none"
      >
        BaelApps
      </p>
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <BaelAppsLogo />
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-ink-muted">{site.footerTagline}</p>
            <ul className="mt-6 space-y-2 text-sm text-ink-muted">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4" /> {contact.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4" /> {contact.location}
              </li>
            </ul>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-2">
                {socials.map((key) => {
                  const [label, Icon] = socialIcons[key]
                  return (
                    <li key={key}>
                      <a
                        href={social[key]!}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`BaelApps on ${label}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink/30 hover:text-ink"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <FooterColumn title="Products" links={products.map((p) => ({ label: p.name, href: productPath(p) }))} />
          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footerNav.copyright}</p>
          <a href="#top" className="transition-colors hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  )
}
