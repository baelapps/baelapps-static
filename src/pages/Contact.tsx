import { ArrowRight, ChevronDown, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { useId, useState, type FormEvent, type ReactNode } from 'react'
import { Accent, PageHero } from '../components/layout/PageHero'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { products } from '../data/products'
import { contact, contactForm } from '../data/site'
import { productPath } from '../products/types'
import { useRouter } from '../router/location'
import { Link } from '../router/Router'

type Fields = { name: string; email: string; company: string; topic: string; message: string }
type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error' } | { kind: 'not-connected' }

const topics = [
  { value: 'general', label: 'General enquiry' },
  ...products.map((p) => ({ value: p.slug, label: p.name })),
]

function Field({ label, hint, children, id }: { label: string; hint?: string; children: ReactNode; id: string }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-semibold text-ink">
        {label}
        {hint && <span className="text-xs font-normal text-ink-muted">{hint}</span>}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  )
}

const inputClass =
  'block w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-[0.95rem] text-ink shadow-[inset_0_1px_2px_rgb(0_0_0/0.03)] transition-colors placeholder:text-ink-muted/70 hover:border-ink/30 focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none'

function mailtoFor(f: Fields) {
  const topic = topics.find((t) => t.value === f.topic)?.label ?? 'General enquiry'
  const lines = [`Name: ${f.name}`, `Email: ${f.email}`]
  if (f.company) lines.push(`Company / Business: ${f.company}`)
  const body = [...lines, '', f.message].join('\n')
  return `mailto:${contact.email}?subject=${encodeURIComponent(`${topic} — website enquiry`)}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  const { search } = useRouter()
  const id = useId()
  // topic is '' until the visitor picks one; until then it follows the URL (/contact?product=…)
  const [draft, setFields] = useState<Fields>({ name: '', email: '', company: '', topic: '', message: '' })
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const fromUrl = new URLSearchParams(search).get('product')
  const fields: Fields = {
    ...draft,
    topic: draft.topic || (topics.some((t) => t.value === fromUrl) ? fromUrl! : 'general'),
  }

  const update = (key: keyof Fields) => (e: { target: { value: string } }) =>
    setFields((f) => ({ ...f, [key]: e.target.value }))

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!contactForm.endpoint) {
      setStatus({ kind: 'not-connected' })
      return
    }
    setStatus({ kind: 'sending' })
    try {
      const res = await fetch(contactForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      })
      setStatus(res.ok ? { kind: 'sent' } : { kind: 'error' })
    } catch {
      setStatus({ kind: 'error' })
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s Build Something <Accent>Useful.</Accent>
          </>
        }
        intro="Questions about Boutiquo360 or TrackBuddi, or a problem you think software should solve? Send us a message."
      />

      <section aria-label="Contact form and details" className="pb-24 sm:pb-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal>
              {status.kind === 'sent' ? (
                <div role="status" className="rounded-3xl border border-line bg-white p-8 sm:p-12">
                  <p className="text-2xl font-semibold tracking-tight text-ink">
                    Thank you — your message is on its way.
                  </p>
                  <p className="mt-3 text-ink-muted">We’ll reply to {fields.email} as soon as we can.</p>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="rounded-3xl border border-line bg-white p-6 shadow-(--shadow-card) sm:p-10"
                  noValidate={false}
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Name" id={`${id}-name`}>
                      <input
                        id={`${id}-name`}
                        name="name"
                        required
                        autoComplete="name"
                        value={fields.name}
                        onChange={update('name')}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Email" id={`${id}-email`}>
                      <input
                        id={`${id}-email`}
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={fields.email}
                        onChange={update('email')}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Company / Business" hint="Optional" id={`${id}-company`}>
                      <input
                        id={`${id}-company`}
                        name="company"
                        autoComplete="organization"
                        value={fields.company}
                        onChange={update('company')}
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Regarding" id={`${id}-topic`}>
                      <div className="relative">
                        <select
                          id={`${id}-topic`}
                          name="topic"
                          value={fields.topic}
                          onChange={update('topic')}
                          className={`${inputClass} appearance-none pr-11`}
                        >
                          {topics.map((t) => (
                            <option key={t.value} value={t.value}>
                              {t.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          aria-hidden="true"
                          className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-ink-muted"
                        />
                      </div>
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Message" id={`${id}-message`}>
                        <textarea
                          id={`${id}-message`}
                          name="message"
                          required
                          rows={6}
                          value={fields.message}
                          onChange={update('message')}
                          className={`${inputClass} resize-y`}
                          placeholder="How can we help?"
                        />
                      </Field>
                    </div>
                  </div>

                  {status.kind === 'not-connected' && (
                    <div role="status" className="mt-6 rounded-2xl border border-hl-light bg-hl-soft/60 p-5 text-sm">
                      <p className="font-semibold text-ink">Your message hasn’t been sent yet.</p>
                      <p className="mt-1 text-ink-muted">
                        Online sending isn’t available at the moment. You can send the same message from your email app
                        instead — it’s ready to go.
                      </p>
                      <a
                        href={mailtoFor(fields)}
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-semibold text-paper transition-colors hover:bg-accent-deep"
                      >
                        <Mail className="h-4 w-4" /> Open in email app
                      </a>
                    </div>
                  )}
                  {status.kind === 'error' && (
                    <p role="alert" className="mt-6 rounded-2xl bg-[#fdecec] p-4 text-sm text-[#8a1f1f]">
                      Something went wrong and your message wasn’t sent. Please try again, or email us at{' '}
                      <a className="font-semibold underline" href={`mailto:${contact.email}`}>
                        {contact.email}
                      </a>
                      .
                    </p>
                  )}

                  <div className="mt-8 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-ink-muted">
                      We only use your details to reply to you. See our{' '}
                      <Link href="/privacy" className="underline hover:text-ink">
                        privacy policy
                      </Link>
                      .
                    </p>
                    <button
                      type="submit"
                      disabled={status.kind === 'sending'}
                      className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-ink px-7 text-[0.95rem] font-semibold text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-deep disabled:opacity-60"
                    >
                      {status.kind === 'sending' ? 'Sending…' : 'Send Message'}
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </Reveal>

            <Reveal delay={120} as="aside" className="space-y-4">
              <div className="rounded-3xl bg-ink p-7 text-white sm:p-9">
                <p className="text-sm font-semibold tracking-[0.18em] text-hl-light uppercase">Reach us directly</p>
                <ul className="mt-6 space-y-5">
                  <li>
                    <a href={`mailto:${contact.email}`} className="group flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                        <Mail className="h-5 w-5 text-hl-light" />
                      </span>
                      <span>
                        <span className="block text-sm text-white/60">Email</span>
                        <span className="block font-semibold group-hover:underline">{contact.email}</span>
                      </span>
                    </a>
                  </li>
                  {contact.phone && (
                    <li>
                      <a href={contact.phone.href} className="group flex items-center gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                          <Phone className="h-5 w-5 text-hl-light" />
                        </span>
                        <span>
                          <span className="block text-sm text-white/60">Phone</span>
                          <span className="block font-semibold group-hover:underline">{contact.phone.display}</span>
                        </span>
                      </a>
                    </li>
                  )}
                  {contact.whatsapp && (
                    <li>
                      <a
                        href={contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                          <MessageCircle className="h-5 w-5 text-hl-light" />
                        </span>
                        <span>
                          <span className="block text-sm text-white/60">WhatsApp</span>
                          <span className="block font-semibold group-hover:underline">Chat with us</span>
                        </span>
                      </a>
                    </li>
                  )}
                  <li className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <MapPin className="h-5 w-5 text-hl-light" />
                    </span>
                    <span>
                      <span className="block text-sm text-white/60">Based in</span>
                      <span className="block font-semibold">{contact.location}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border border-line bg-white p-7 sm:p-9">
                <p className="font-semibold text-ink">Looking for a product?</p>
                <ul className="mt-4 space-y-3">
                  {products.map((p) => {
                    const Mark = p.mark
                    return (
                      <li key={p.slug}>
                        <Link href={productPath(p)} className="group flex items-center gap-3">
                          <Mark className="h-9 w-9" />
                          <span className="flex-1">
                            <span className="block text-sm font-semibold text-ink">{p.name}</span>
                            <span className="block text-xs text-ink-muted">{p.tagline}</span>
                          </span>
                          <ArrowRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
