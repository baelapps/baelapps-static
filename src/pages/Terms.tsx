import { LegalPage } from '../components/layout/LegalPage'
import { contact } from '../data/site'

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="4 October 2026"
      intro="The terms that apply when you use the BaelApps website."
      sections={[
        {
          heading: 'About these terms',
          body: (
            <p>
              By using this website you agree to these terms. Our products, such as Boutiquo360 and TrackBuddi, are
              covered by their own agreements, which apply when you sign up for or use them.
            </p>
          ),
        },
        {
          heading: 'Use of the website',
          body: (
            <p>
              You may use this website for lawful purposes and to learn about BaelApps and our products. Please don’t
              attempt to disrupt the site, gain unauthorised access to it, or use it to send unsolicited messages.
            </p>
          ),
        },
        {
          heading: 'Product information',
          body: (
            <p>
              We aim to keep information on this website accurate and current. Product descriptions and illustrations —
              including screenshots and sample data — are for general information, may change as our products evolve,
              and do not form an offer or contract.
            </p>
          ),
        },
        {
          heading: 'Intellectual property',
          body: (
            <p>
              The BaelApps, Boutiquo360 and TrackBuddi names, logos, designs and the content of this website belong to
              BaelApps. You may not copy or reuse them without our permission, except as allowed by law.
            </p>
          ),
        },
        {
          heading: 'Links to other websites',
          body: (
            <p>
              Where this website links to other sites, we provide those links for convenience. We are not responsible
              for the content or practices of websites we don’t control.
            </p>
          ),
        },
        {
          heading: 'Limitation of liability',
          body: (
            <p>
              This website is provided “as is”. To the extent permitted by law, BaelApps is not liable for any loss
              arising from your use of, or inability to use, this website.
            </p>
          ),
        },
        {
          heading: 'Changes',
          body: (
            <p>
              We may update these terms from time to time. The date at the top of this page shows when they last
              changed.
            </p>
          ),
        },
        {
          heading: 'Contact',
          body: (
            <p>
              Questions about these terms? Email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          ),
        },
      ]}
    />
  )
}
