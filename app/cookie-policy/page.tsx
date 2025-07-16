import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - Lombard Tech',
  description: 'Lombard Tech cookie policy and tracking technology information.',
}

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-16 bg-lt-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="font-lombard text-4xl lg:text-5xl text-lt-navy mb-8 text-center">
          Cookie Policy
        </h1>
        
        <div className="prose prose-lg max-w-none text-lt-navy space-y-8">
          
          <div className="bg-lt-gold/10 p-6 rounded-lg border border-lt-gold/20">
            <p className="text-lt-navy/80 font-medium">
              <strong>Note:</strong> This Cookie Policy is designed to work alongside the Lombard Tech Privacy Policy. It explains how and why cookies and similar tracking technologies are used on our digital properties (the "Site"), what choices you have, and how to manage your preferences.
            </p>
          </div>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">1. About This Cookie Policy</h2>
            <p className="text-lt-navy/80 mb-4">
              This Cookie Policy describes how <strong>Lombard Tech Ltd</strong> ("Lombard Tech," "we," "us," or "our") uses cookies, pixels, tags, SDKs, and similar technologies (collectively, "cookies") when you visit, access, or interact with:
            </p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• Our public website at <strong>www.lombardtech.com</strong> (and any sub‑domains) (the "Site")</li>
              <li>• Candidate, client, or event registration landing pages we host</li>
              <li>• Email communications that contain tracking pixels or similar technologies</li>
            </ul>
            <p className="text-lt-navy/80">
              This Policy should be read together with our <strong>Privacy Policy</strong> which explains how we process personal data more broadly.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">2. What Are Cookies?</h2>
            <p className="text-lt-navy/80 mb-4">
              Cookies are small data files placed on your device when you visit a website. They may be set by the website owner ("first‑party cookies") or by third parties that provide services to the website ("third‑party cookies"). Cookies can be "session" cookies (deleted when you close your browser) or "persistent" cookies (remain until they expire or are deleted). Related technologies include:
            </p>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• <strong>Pixels / Web Beacons:</strong> Tiny transparent images embedded in web pages or emails that track whether content was viewed</li>
              <li>• <strong>Local Storage / HTML5 Storage:</strong> Browser‑based storage mechanisms that can hold larger amounts of data</li>
              <li>• <strong>JavaScript / Tag Libraries:</strong> Code that can collect device and usage information</li>
              <li>• <strong>SDKs / Mobile Identifiers:</strong> Software components in mobile apps performing similar functions</li>
            </ul>
            <p className="text-lt-navy/80">
              For simplicity, we refer to all of these collectively as "cookies" in this Policy.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">3. Why We Use Cookies</h2>
            <p className="text-lt-navy/80 mb-4">We use cookies for several reasons:</p>
            <ul className="text-lt-navy/80 mb-4 space-y-3">
              <li>• <strong>Strictly Necessary / Essential</strong> – Enable core functionality such as page navigation, session management, security, load balancing, and consent management. The Site cannot function properly without these.</li>
              <li>• <strong>Performance / Analytics</strong> – Help us understand how visitors use the Site (pages visited, time on page, navigation paths) so we can improve usability and content.</li>
              <li>• <strong>Functionality / Personalization</strong> – Remember choices you make, such as language, location, or saved form inputs.</li>
              <li>• <strong>Targeting / Advertising / Retargeting</strong> – Deliver relevant content, measure campaign effectiveness, and build audience segments. We use these only where legally permitted.</li>
              <li>• <strong>Security & Fraud Prevention</strong> – Detect suspicious activity, prevent abuse, and protect accounts.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">4. Legal Basis for Using Cookies</h2>
            <p className="text-lt-navy/80 mb-4">
              Where local law requires consent for storing or accessing information on your device (for example, under the EU ePrivacy Directive as implemented in Member States, and the UK Privacy and Electronic Communications Regulations (PECR)), we will obtain your consent before setting non‑essential cookies (analytics, personalization, advertising). Essential cookies are deployed based on our legitimate interest in delivering a secure, functioning website.
            </p>
            <p className="text-lt-navy/80">
              In jurisdictions that recognize opt‑out rights for targeted advertising or sale/share of personal information (e.g., California), we honor those rights through the mechanisms described in Section 10 (Your Choices & Controls).
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">5. Categories of Cookies We Use</h2>
            <p className="text-lt-navy/80 mb-4">
              Below is a summary of the cookie categories used across Lombard Tech digital properties:
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-lt-navy/20 text-sm">
                <thead>
                  <tr className="bg-lt-navy/5">
                    <th className="border border-lt-navy/20 p-3 text-left font-lombard">Category</th>
                    <th className="border border-lt-navy/20 p-3 text-left font-lombard">Description</th>
                    <th className="border border-lt-navy/20 p-3 text-left font-lombard">Consent Required?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-lt-navy/20 p-3 font-semibold">Strictly Necessary</td>
                    <td className="border border-lt-navy/20 p-3">Required for core site operations, security, consent logging.</td>
                    <td className="border border-lt-navy/20 p-3">No (essential)</td>
                  </tr>
                  <tr className="bg-lt-navy/5">
                    <td className="border border-lt-navy/20 p-3 font-semibold">Performance / Analytics</td>
                    <td className="border border-lt-navy/20 p-3">Measure traffic & usage; improve site performance.</td>
                    <td className="border border-lt-navy/20 p-3">Yes in EU/UK; opt‑out elsewhere as required</td>
                  </tr>
                  <tr>
                    <td className="border border-lt-navy/20 p-3 font-semibold">Functionality</td>
                    <td className="border border-lt-navy/20 p-3">Remember preferences and improve user experience.</td>
                    <td className="border border-lt-navy/20 p-3">Often requires consent in EU/UK unless strictly necessary</td>
                  </tr>
                  <tr className="bg-lt-navy/5">
                    <td className="border border-lt-navy/20 p-3 font-semibold">Targeting / Advertising</td>
                    <td className="border border-lt-navy/20 p-3">Build audiences, deliver or measure campaigns, retarget visitors on other sites.</td>
                    <td className="border border-lt-navy/20 p-3">Consent in EU/UK; opt‑out in U.S. states</td>
                  </tr>
                  <tr>
                    <td className="border border-lt-navy/20 p-3 font-semibold">Security / Anti‑Fraud</td>
                    <td className="border border-lt-navy/20 p-3">Detect bots, abuse, or unusual activity.</td>
                    <td className="border border-lt-navy/20 p-3">No (legitimate interest / essential)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">6. Cookie & Tracker Details</h2>
            
            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">6.1 Strictly Necessary Cookies</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-lt-navy/20 text-sm">
                <thead>
                  <tr className="bg-lt-navy/5">
                    <th className="border border-lt-navy/20 p-3 text-left">Cookie Name</th>
                    <th className="border border-lt-navy/20 p-3 text-left">Provider</th>
                    <th className="border border-lt-navy/20 p-3 text-left">Purpose</th>
                    <th className="border border-lt-navy/20 p-3 text-left">Expires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-lt-navy/20 p-3 font-mono">lt_session</td>
                    <td className="border border-lt-navy/20 p-3">Lombard Tech</td>
                    <td className="border border-lt-navy/20 p-3">Maintains logged‑in user session / form progress</td>
                    <td className="border border-lt-navy/20 p-3">Session</td>
                  </tr>
                  <tr className="bg-lt-navy/5">
                    <td className="border border-lt-navy/20 p-3 font-mono">cookie_consent</td>
                    <td className="border border-lt-navy/20 p-3">Lombard Tech</td>
                    <td className="border border-lt-navy/20 p-3">Stores user cookie preferences (opt‑in/opt‑out)</td>
                    <td className="border border-lt-navy/20 p-3">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">6.2 Performance / Analytics Cookies</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-lt-navy/20 text-sm">
                <thead>
                  <tr className="bg-lt-navy/5">
                    <th className="border border-lt-navy/20 p-3 text-left">Cookie Name</th>
                    <th className="border border-lt-navy/20 p-3 text-left">Provider</th>
                    <th className="border border-lt-navy/20 p-3 text-left">Purpose</th>
                    <th className="border border-lt-navy/20 p-3 text-left">Expires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-lt-navy/20 p-3 font-mono">_ga</td>
                    <td className="border border-lt-navy/20 p-3">Google Analytics</td>
                    <td className="border border-lt-navy/20 p-3">Visitor analytics (unique ID, usage metrics)</td>
                    <td className="border border-lt-navy/20 p-3">13 months</td>
                  </tr>
                  <tr className="bg-lt-navy/5">
                    <td className="border border-lt-navy/20 p-3 font-mono">_gid</td>
                    <td className="border border-lt-navy/20 p-3">Google Analytics</td>
                    <td className="border border-lt-navy/20 p-3">Distinguishes users for 24h stats</td>
                    <td className="border border-lt-navy/20 p-3">24 hrs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">6.3 Targeting / Advertising Cookies</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-lt-navy/20 text-sm">
                <thead>
                  <tr className="bg-lt-navy/5">
                    <th className="border border-lt-navy/20 p-3 text-left">Cookie Name</th>
                    <th className="border border-lt-navy/20 p-3 text-left">Provider</th>
                    <th className="border border-lt-navy/20 p-3 text-left">Purpose</th>
                    <th className="border border-lt-navy/20 p-3 text-left">Expires</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-lt-navy/20 p-3 font-mono">_gcl_au</td>
                    <td className="border border-lt-navy/20 p-3">Google Ads</td>
                    <td className="border border-lt-navy/20 p-3">Conversion tracking & ad campaign measurement</td>
                    <td className="border border-lt-navy/20 p-3">90 days</td>
                  </tr>
                  <tr className="bg-lt-navy/5">
                    <td className="border border-lt-navy/20 p-3 font-mono">UserMatchHistory</td>
                    <td className="border border-lt-navy/20 p-3">LinkedIn Ads</td>
                    <td className="border border-lt-navy/20 p-3">Ad analytics / retargeting</td>
                    <td className="border border-lt-navy/20 p-3">30 days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">7. Managing Cookies</h2>
            <p className="text-lt-navy/80 mb-4">
              When you first visit the Site, you will see a cookie banner asking you to accept, reject, or customize cookies. Non‑essential cookies are set only after you provide consent (in applicable regions).
            </p>
            <p className="text-lt-navy/80 mb-4">
              You can update your preferences at any time by selecting <strong>Cookie Settings</strong> (usually available via a persistent icon or link in the Site footer).
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">8. Your Choices & Controls</h2>
            
            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">8.1 EU/EEA & UK</h3>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• Consent required for non‑essential cookies; withdraw consent any time via Cookie Settings</li>
              <li>• Browser controls: You may block or delete cookies in your browser; essential cookies may be required for core functionality</li>
            </ul>

            <h3 className="font-lombard text-xl font-medium text-lt-navy mb-3">8.2 California & Other U.S. States</h3>
            <ul className="text-lt-navy/80 mb-4 space-y-2">
              <li>• If certain third‑party tags constitute a "sale" or "share" of personal information for cross‑context behavioral advertising, you may opt out via our <strong>Do Not Sell or Share My Personal Information</strong> link in the Site footer</li>
              <li>• We honor Global Privacy Control (GPC) signals where required. If we detect a valid GPC signal, we will treat it as an opt‑out from sale/share and targeted advertising cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">9. Browser & Device Controls</h2>
            <p className="text-lt-navy/80 mb-4">
              You can manage cookies through your browser settings. Instructions vary by browser; common paths include Settings > Privacy > Cookies or Site Data. Deleting or blocking cookies may impact Site functionality. Some browsers offer global opt‑out signals for tracking (e.g., GPC). Mobile operating systems may provide advertising ID resets or opt‑outs.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">10. Updates to This Cookie Policy</h2>
            <p className="text-lt-navy/80 mb-4">
              We may update this Cookie Policy to reflect changes in technology, law, or our cookie practices. Material changes will be indicated by updating the "Last Updated" date and, where required, re‑prompting for consent.
            </p>
          </section>

          <section>
            <h2 className="font-lombard text-2xl font-semibold text-lt-navy mb-4">11. Contact Us</h2>
            <p className="text-lt-navy/80 mb-4">Questions about our use of cookies? Contact us:</p>
            <div className="bg-lt-navy/5 p-6 rounded-lg">
              <p className="text-lt-navy/80 mb-2"><strong>Email:</strong> privacy@lombardtech.com</p>
              <p className="text-lt-navy/80 mb-2"><strong>Postal:</strong> 71‑75 Shelton Street, London, WC2H 9JQ, United Kingdom</p>
              <p className="text-lt-navy/80"><strong>Telephone:</strong> +44 (0)20 3807 3032</p>
            </div>
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