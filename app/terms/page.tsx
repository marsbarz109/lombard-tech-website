import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Lombard Tech',
  description: 'Lombard Tech website terms of service and usage policies.',
}

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 pb-16 bg-lt-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-lombard text-4xl lg:text-5xl text-lt-navy mb-8 text-center">
          Terms of Service
        </h1>
        
        <div className="prose prose-lg max-w-none text-lt-navy space-y-8">
          
          <div className="bg-lt-gold/10 p-6 rounded-lg border border-lt-gold/20">
            <p className="text-lt-navy/80 font-medium">
              <strong>Important Legal Notice:</strong> These Terms of Service (the "Terms") govern your access to and use of the websites and related online touchpoints made available by <strong>Lombard Tech Ltd</strong> ("Lombard Tech," "we," "us," or "our"). By accessing or using any of our Sites (defined below), you agree to be bound by these Terms and by the policies referenced in them, including our Privacy Policy and Cookie Policy. If you do not agree, do not access or use our Sites.
            </p>
          </div>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">1. About Lombard Tech & Contract Formation</h2>
            <p className="text-lt-navy/80 mb-4">
              When we say "Lombard Tech," we mean <strong>Lombard Tech Ltd</strong>, a company established in the United Kingdom.
            </p>
            <div className="bg-lt-navy/5 p-4 rounded-lg mb-4">
              <p className="text-lt-navy/80 mb-2"><strong>Registered Office:</strong> 71–75 Shelton Street, London, WC2H 9JQ, United Kingdom</p>
              <p className="text-lt-navy/80 mb-2"><strong>Legal Contact Email:</strong> Joseph.Marsden@lombard-tech.io</p>
              <p className="text-lt-navy/80"><strong>Telephone:</strong> +44 (0)20 3807 3032</p>
            </div>
            <p className="text-lt-navy/80 mb-4">
              These Terms form a binding agreement between you and Lombard Tech when you: (a) browse, access, or use any Lombard Tech website; (b) submit information (including a CV/resumé) through a web form, email link, or upload widget we provide; or (c) interact with content delivered under the lombardtech.com domain family (together, the "Sites").
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">2. Scope: What Do These Terms Cover?</h2>
            <p className="text-lt-navy/80 mb-4">These Terms apply to:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• The public marketing site available at or under <strong>lombardtech.com</strong> (including HTTP/HTTPS variants and country redirects).</li>
              <li>• Any web pages or landing pages we host for events, reports, or candidate intake that link to these Terms.</li>
              <li>• CV or profile submission forms we operate (even if embedded in a third‑party form tool) when the form references these Terms.</li>
            </ul>
            <p className="text-lt-navy/80">
              <strong>Not Covered:</strong> Client portals or platforms operated under separate contract; third‑party services you access via outbound links; or any offline agreements with Lombard Tech unless those documents incorporate these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">3. Age & Eligibility</h2>
            <p className="text-lt-navy/80 mb-4">
              Our Sites are intended for professional and business use. You must be <strong>at least 16 years old</strong> (or the minimum age of digital consent in your jurisdiction if higher) to submit personal data to us. By using the Sites, you represent that you meet this age threshold and have the authority to provide any information you submit.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">4. Your Submissions & User Content</h2>
            <p className="text-lt-navy/80 mb-4">
              You may submit CVs/resumés, professional profiles, cover letters, references, and other materials (collectively, <strong>"User Content"</strong>) through our Sites. By submitting User Content, you grant Lombard Tech a <strong>non‑exclusive, worldwide, royalty‑free license</strong> to host, store, reproduce, analyze, edit for formatting, and share that material <strong>with our recruitment consultants and relevant client organizations</strong> for the purpose of evaluating, contacting, and placing you (or the individual described in the submission) in current and future roles.
            </p>
            <p className="text-lt-navy/80 mb-4">This license is:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• <strong>Limited in purpose</strong> to recruitment, executive search, talent mapping, advisory projects, and related administrative functions</li>
              <li>• <strong>Revocable:</strong> You may withdraw or request deletion as permitted under applicable privacy laws</li>
              <li>• <strong>Sub‑licensable to our clients</strong> solely as needed to evaluate candidates for roles</li>
            </ul>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">5. Accuracy, Lawfulness & Prohibited Data</h2>
            <p className="text-lt-navy/80 mb-4">You are responsible for ensuring that all information you submit is:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• <strong>Accurate</strong> and not misleading</li>
              <li>• <strong>Lawfully obtained</strong> (no unauthorized disclosure of confidential employer data, private health records, etc.)</li>
              <li>• <strong>Non‑infringing</strong> of privacy, IP, or contractual rights</li>
              <li>• <strong>Non‑discriminatory</strong>—please avoid including protected‑class details unless required or expressly requested</li>
            </ul>
            <p className="text-lt-navy/80">
              Please <strong>do not</strong> upload the following unless specifically requested and lawful: government ID scans, full financial account numbers, detailed health records, or information about minors.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">6. Acceptable Use (What You May Not Do)</h2>
            <p className="text-lt-navy/80 mb-4">You agree not to:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• Attempt to interfere with or disrupt the operation or security of the Sites</li>
              <li>• Use any data‑mining, scraping, bots, or similar data‑gathering tools without our express written permission</li>
              <li>• Upload malware, malicious scripts, or content that could harm systems or data</li>
              <li>• Post unlawful, defamatory, obscene, or harassing material</li>
              <li>• Submit personal data of third parties without proper authority and lawful basis</li>
              <li>• Misrepresent your affiliation with any person or entity</li>
              <li>• Use Site content to build or enhance a competing product or service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">7. Intellectual Property</h2>
            <p className="text-lt-navy/80 mb-4">
              All content on the Sites—text, graphics, logos, icons, images, reports, layouts, and underlying code—is owned by or licensed to Lombard Tech and is protected by copyright, database rights, and other intellectual property laws. Subject to your compliance with these Terms, we grant you a <strong>limited, non‑exclusive, revocable license</strong> to access and view the Sites for lawful, informational, and recruitment‑related purposes.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">8. Privacy & Cookies</h2>
            <p className="text-lt-navy/80 mb-4">Your use of the Sites is also subject to:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• <strong>Privacy Policy</strong> (how we collect, use, and protect personal data), and</li>
              <li>• <strong>Cookie Policy</strong> (how we use cookies/trackers and how you control them)</li>
            </ul>
            <p className="text-lt-navy/80">
              If these Terms conflict with either policy in relation to personal data handling, <strong>the Privacy Policy and Cookie Policy control</strong> for those data‑protection issues.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">9. No Guarantee of Placement; No Professional Advice</h2>
            <p className="text-lt-navy/80 mb-4">
              Submitting a CV or communicating with Lombard Tech does <strong>not</strong> guarantee that you will be contacted, interviewed, or placed in a role. Hiring decisions rest with client organizations. Content on our Sites is for general information only and is <strong>not legal, HR, tax, investment, or other professional advice</strong>. You should obtain advice from qualified professionals before relying on information for decisions.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">10. Disclaimers</h2>
            <p className="text-lt-navy/80 mb-4">
              To the maximum extent permitted by law, the Sites are provided <strong>"as is" and "as available"</strong> without warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, title, and non‑infringement. We do not warrant that the Sites will be uninterrupted, secure, or error‑free.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">11. Limitation of Liability</h2>
            <p className="text-lt-navy/80 mb-4">To the fullest extent permitted by law:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• <strong>Indirect damages excluded:</strong> Lombard Tech will not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages</li>
              <li>• <strong>Direct damages cap:</strong> Our aggregate liability to you for all claims will not exceed <strong>£100 GBP</strong></li>
            </ul>
            <p className="text-lt-navy/80">
              These limitations do <strong>not</strong> exclude or limit liability for death or personal injury caused by negligence, fraud, fraudulent misrepresentation, or any other liability that cannot be excluded under applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">12. Governing Law</h2>
            <p className="text-lt-navy/80 mb-4">
              These Terms and any dispute or claim arising out of or in connection with them (including non‑contractual disputes or claims) are governed by the laws of <strong>England and Wales</strong>, without regard to conflict‑of‑laws principles.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">13. Changes to These Terms</h2>
            <p className="text-lt-navy/80 mb-4">
              We may update these Terms from time to time. When we do, we will revise the "Last Updated" date below and post the updated Terms on the Sites. If the changes are material, we may provide additional notice. Continued use of the Sites after the effective date of updated Terms constitutes acceptance of the changes.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">14. Contact & Notices</h2>
            <p className="text-lt-navy/80 mb-4">Questions about these Terms? Please contact us:</p>
            <div className="bg-lt-navy/5 p-6 rounded-lg">
              <p className="text-lt-navy/80 mb-2"><strong>Lombard Tech Ltd</strong></p>
              <p className="text-lt-navy/80 mb-2">71–75 Shelton Street, London, WC2H 9JQ, United Kingdom</p>
              <p className="text-lt-navy/80 mb-2">Email: Joseph.Marsden@lombard-tech.io</p>
              <p className="text-lt-navy/80">Telephone: +44 (0)20 3807 3032</p>
            </div>
          </section>

          <section className="bg-lt-gold/10 p-6 rounded-lg">
            <p className="text-lt-navy font-semibold"><strong>Last Updated:</strong> 16 July 2025</p>
          </section>

        </div>
      </div>
    </div>
  )
} 