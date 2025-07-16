import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Lombard Tech',
  description: 'Lombard Tech privacy policy and data protection information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16 bg-lt-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-lombard text-4xl lg:text-5xl text-lt-navy mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-lt-navy space-y-8">
          
          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">1. Who We Are</h2>
            <p className="text-lt-navy/80 mb-4">
              <strong>Lombard Tech Ltd</strong> ("Lombard Tech," "we," "us," or "our") is a recruitment technology and advisory firm serving clients and candidates globally. We are the organization that determines how and why the personal data described in this Policy is processed. For purposes of data‑protection law we act as a <strong>Data Controller</strong> (EU/UK) and a <strong>Business</strong> (California and other U.S. state privacy laws) for most of the processing described here. In some situations we may act as a <strong>Processor / Service Provider</strong> when we handle personal data strictly on behalf of a client under contract.
            </p>
            <div className="bg-lt-navy/5 p-4 rounded-lg">
              <p className="text-lt-navy/80 mb-2"><strong>Registered Office:</strong> 71‑75 Shelton Street, London, WC2H 9JQ, United Kingdom</p>
              <p className="text-lt-navy/80 mb-2"><strong>Telephone:</strong> +44 (0)20 3807 3032</p>
              <p className="text-lt-navy/80"><strong>General Privacy Email:</strong> privacy@lombardtech.com</p>
            </div>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">2. Scope of This Policy</h2>
            <p className="text-lt-navy/80 mb-4">
              This Policy explains how we collect, use, disclose, store, transfer, and otherwise process personal data relating to:
            </p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• <strong>Candidates</strong> – job‑seekers, interim consultants, contractors, advisors, executives, and other professionals whose information we receive in connection with recruitment, talent mapping, or market intelligence services.</li>
              <li>• <strong>Client Contacts</strong> – employees, agents, hiring managers, procurement contacts, and decision‑makers at organizations that engage, may engage, or are evaluated by Lombard Tech.</li>
              <li>• <strong>Website Visitors & Online Users</strong> – visitors to www.lombardtech.com, recipients of our marketing communications, webinar registrants, event participants, and users of any portals or talent platforms we operate.</li>
              <li>• <strong>Vendors & Partners</strong> – service providers, technology partners, background screening partners, payroll / benefits intermediaries, and others who help us deliver services.</li>
              <li>• <strong>Other Individuals</strong> – people whose data we receive from publicly available sources or from referrals.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">3. Personal Data We Collect</h2>
            
            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">3.1 Identification & Contact Data</h3>
            <p className="text-lt-navy/80 mb-4">
              Name, title, company, postal address, email address, telephone numbers, professional profile URLs, government identifiers where required for payroll/placement compliance (collected only where lawful and necessary).
            </p>

            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">3.2 Professional & Employment Data</h3>
            <p className="text-lt-navy/80 mb-4">
              CVs/resumés, employment history, skills, certifications, education, salary expectations, compensation history (where lawful), right‑to‑work status, references, interview feedback, and notes from conversations.
            </p>

            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">3.3 Assessment & Screening Data</h3>
            <p className="text-lt-navy/80 mb-4">
              Interview recordings, psychometric or technical assessments, background check results, and work eligibility documentation.
            </p>

            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">3.4 Marketing & Preference Data</h3>
            <p className="text-lt-navy/80 mb-4">
              Subscriptions, event registrations, content downloads, marketing preferences, cookie and tracking data.
            </p>

            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">3.5 Device / Technical Data</h3>
            <p className="text-lt-navy/80 mb-4">
              IP address, device identifiers, browser type, operating system, referral URLs, pages viewed, and interaction logs gathered via cookies, pixels, or similar technologies.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">4. How We Use Personal Data</h2>
            <p className="text-lt-navy/80 mb-4">We use personal data for the following purposes:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• <strong>Candidate sourcing & talent mapping</strong> – Building talent networks and fulfilling client mandates</li>
              <li>• <strong>Recruitment process management</strong> – Screening, shortlisting, presenting candidates to clients</li>
              <li>• <strong>Background & compliance checks</strong> – Verification and due diligence where required</li>
              <li>• <strong>Communications & marketing</strong> – Insights, market reports, event invitations, and service updates</li>
              <li>• <strong>Analytics & service improvement</strong> – Improving database quality and enhancing technology features</li>
            </ul>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">5. Disclosures of Personal Data</h2>
            <p className="text-lt-navy/80 mb-4">We disclose personal data only as necessary for the purposes described in this Policy:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• <strong>Client Organizations</strong> – Candidate information shared with client hiring teams when appropriate</li>
              <li>• <strong>Vetted Service Providers</strong> – IT hosting, CRM platforms, background screening, skills testing, and other contractors</li>
              <li>• <strong>Professional Referees</strong> – With your consent or at your request for reference checks</li>
              <li>• <strong>Legal & Regulatory Authorities</strong> – Where required to comply with law or protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">6. Data Security</h2>
            <p className="text-lt-navy/80 mb-4">
              We implement technical and organizational measures designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. These measures include access controls, encryption, secure hosting, vendor due diligence, incident response procedures, and employee training.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">7. Your Privacy Rights</h2>
            
            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">7.1 EU/EEA & UK Rights</h3>
            <p className="text-lt-navy/80 mb-2">Subject to legal limits, you may have the right to:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-1">
              <li>• Access your personal data and receive a copy</li>
              <li>• Rectify inaccurate or incomplete data</li>
              <li>• Erase certain data ("right to be forgotten")</li>
              <li>• Restrict processing</li>
              <li>• Object to processing based on legitimate interests and to direct marketing</li>
              <li>• Data portability</li>
              <li>• Withdraw consent at any time where processing relies on consent</li>
            </ul>

            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">7.2 California & Other U.S. State Rights</h3>
            <p className="text-lt-navy/80 mb-2">Depending on your state of residence, you may have rights to:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-1">
              <li>• Know/access the personal information collected about you</li>
              <li>• Delete personal information (subject to exemptions)</li>
              <li>• Correct inaccurate personal information</li>
              <li>• Opt out of sale or sharing of personal information</li>
              <li>• Non‑discrimination for exercising your privacy rights</li>
            </ul>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">8. How to Exercise Your Rights</h2>
            <p className="text-lt-navy/80 mb-4">
              To exercise your rights, please contact us at <strong>privacy@lombardtech.com</strong>. Please specify the nature of your request (e.g., access, deletion, correction, opt‑out). We will verify your identity before fulfilling requests.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">9. Data Retention</h2>
            <p className="text-lt-navy/80 mb-4">
              We retain personal data only for as long as necessary to fulfill the purposes described in this Policy, including to satisfy legal, accounting, or reporting requirements. When determining retention periods we consider the nature and sensitivity of the data, ongoing relationships, statutory requirements, and legitimate business needs.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">10. Contact Us</h2>
            <div className="bg-lt-navy/5 p-6 rounded-lg">
              <p className="text-lt-navy/80 mb-2"><strong>Primary Contact:</strong> privacy@lombardtech.com</p>
              <p className="text-lt-navy/80 mb-2"><strong>Postal:</strong> 71‑75 Shelton Street, London, WC2H 9JQ, United Kingdom</p>
              <p className="text-lt-navy/80"><strong>Telephone:</strong> +44 (0)20 3807 3032</p>
            </div>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">11. Changes to This Policy</h2>
            <p className="text-lt-navy/80 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in law, technology, our services, or our data practices. When we make material changes, we will post a prominent notice on our website and update the "Last Updated" date below.
            </p>
          </section>

          <section className="bg-lt-gold/10 p-6 rounded-lg">
            <p className="text-lt-navy font-semibold"><strong>Effective Date:</strong> 16 July 2025</p>
            <p className="text-lt-navy font-semibold"><strong>Last Updated:</strong> 16 July 2025</p>
          </section>

        </div>
      </div>
    </div>
  )
} 