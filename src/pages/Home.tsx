import { Hero } from '../components/home/Hero'
import { HomeCTA } from '../components/home/HomeCTA'
import { Philosophy } from '../components/home/Philosophy'
import { ProductEcosystem } from '../components/home/ProductEcosystem'
import { ProductSpotlight } from '../components/home/ProductSpotlight'
import { WhyBaelApps } from '../components/home/WhyBaelApps'
import { products } from '../data/products'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductEcosystem />
      <WhyBaelApps />
      {products.slice(0, 1).map((p) => (
        <ProductSpotlight key={p.slug} product={p} />
      ))}
      <Philosophy />
      {products.slice(1).map((p) => (
        <ProductSpotlight key={p.slug} product={p} />
      ))}
      <HomeCTA />
    </>
  )
}
