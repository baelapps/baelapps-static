import { products } from '../../data/products'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ProductCard } from './ProductCard'

export function ProductEcosystem() {
  return (
    <section aria-labelledby="ecosystem-heading" className="py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          id="ecosystem-heading"
          eyebrow="Our products"
          title="Products Built With Purpose."
          intro="We build focused software that solves real problems without unnecessary complexity."
        />
        <ul className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-2 lg:gap-6">
          {products.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 120}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
