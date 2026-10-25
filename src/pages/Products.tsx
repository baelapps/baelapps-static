import { HomeCTA } from '../components/home/HomeCTA'
import { ProductCard } from '../components/home/ProductCard'
import { Accent, PageHero } from '../components/layout/PageHero'
import { Container } from '../components/ui/Container'
import { Reveal } from '../components/ui/Reveal'
import { products } from '../data/products'

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={
          <>
            Focused software for <Accent>real work.</Accent>
          </>
        }
        intro="Each BaelApps product is built for a specific group of people and the problem they deal with every day."
      />
      <section aria-label="All products" className="pb-8">
        <Container>
          <ul className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {products.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 120}>
                <ProductCard product={p} headingLevel="h2" />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <HomeCTA
        heading="Not Sure Which Product Fits?"
        text="Tell us about your business or school and we’ll help you find the right fit."
      />
    </>
  )
}
