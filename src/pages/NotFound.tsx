import { ArrowRight } from 'lucide-react'
import { Accent, PageHero } from '../components/layout/PageHero'
import { ButtonLink } from '../components/ui/Button'

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title={
        <>
          This page took a <Accent>different route.</Accent>
        </>
      }
      intro="The page you’re looking for doesn’t exist or has moved."
    >
      <div className="mt-10 flex flex-col gap-3 pb-20 sm:flex-row">
        <ButtonLink href="/" size="lg">
          Back to home
          <ArrowRight className="h-4 w-4" />
        </ButtonLink>
        <ButtonLink href="/products" variant="outline" size="lg">
          View products
        </ButtonLink>
      </div>
    </PageHero>
  )
}
