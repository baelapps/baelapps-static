import { LegalPage } from '../components/layout/LegalPage'
import { contact } from '../data/site'

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="4 October 2026"
      intro="How BaelApps handles information when you visit this website or contact us."
      sections={[
        {
          heading: 'Scope',
          body: (
            <p>
              This policy covers the BaelApps website. Our products, such as Boutiquo360 and TrackBuddi, are provided
              under their own terms and privacy notices, which apply when you use them.
            </p>
          ),
        },
        {
          heading: 'Information we collect',
          body: (
            <>
              <p>
                You can browse this website without telling us who you are. We collect information only when you choose
                to share it:
              </p>
              <ul>
                <li>
                  When you contact us, we receive the details you provide — such as your name, email address, business
                  name and message.
                </li>
                <li>
                  Like most websites, our hosting provider may keep standard server logs (for example IP address,
                  browser type and pages requested) to keep the site secure and working.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: 'Cookies and analytics',
          body: (
            <p>
              This website does not use advertising or tracking cookies. If we introduce analytics in the future, we
              will update this policy first.
            </p>
          ),
        },
        {
          heading: 'Third-party services',
          body: (
            <p>
              Fonts on this website are served by Google Fonts, which means your browser connects to Google’s servers to
              load them. Google’s own privacy policy applies to that connection.
            </p>
          ),
        },
        {
          heading: 'How we use your information',
          body: (
            <p>
              We use the information you send us only to reply to your enquiry and to follow up on the conversation you
              started. We do not sell your personal information.
            </p>
          ),
        },
        {
          heading: 'Retention and your choices',
          body: (
            <p>
              We keep enquiry emails only as long as needed to respond and maintain a record of our correspondence. You
              can ask us to access, correct or delete the information you have shared by emailing{' '}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          ),
        },
        {
          heading: 'Changes to this policy',
          body: (
            <p>
              We may update this policy from time to time. The date at the top of this page shows when it last changed.
            </p>
          ),
        },
        {
          heading: 'Contact',
          body: (
            <p>
              Questions about privacy? Email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
            </p>
          ),
        },
      ]}
    />
  )
}
