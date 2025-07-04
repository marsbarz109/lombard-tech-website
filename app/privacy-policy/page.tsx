import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Lombard Tech privacy policy and data protection information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="section-heading text-primary-black mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-text-gray mb-6">
            <strong>Last updated:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-black mb-4">1. Introduction</h2>
            <p className="text-text-gray mb-4">
              Lombard Tech ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our recruitment services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-black mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-medium text-primary-black mb-2">Personal Information</h3>
            <ul className="text-text-gray mb-4 space-y-1">
              <li>• Name and contact information</li>
              <li>• Employment history and qualifications</li>
              <li>• CV/Resume and cover letters</li>
              <li>• Interview feedback and assessments</li>
            </ul>
            
            <h3 className="text-xl font-medium text-primary-black mb-2">Technical Information</h3>
            <ul className="text-text-gray mb-4 space-y-1">
              <li>• IP address and browser information</li>
              <li>• Website usage analytics</li>
              <li>• Cookies and tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-black mb-4">3. How We Use Your Information</h2>
            <ul className="text-text-gray mb-4 space-y-1">
              <li>• To provide recruitment services</li>
              <li>• To match candidates with suitable opportunities</li>
              <li>• To communicate about job opportunities</li>
              <li>• To improve our services and website</li>
              <li>• To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-black mb-4">4. Information Sharing</h2>
            <p className="text-text-gray mb-4">
              We may share your information with prospective employers, but only with your explicit consent. 
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-black mb-4">5. Data Security</h2>
            <p className="text-text-gray mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-black mb-4">6. Your Rights</h2>
            <ul className="text-text-gray mb-4 space-y-1">
              <li>• Right to access your data</li>
              <li>• Right to correct inaccurate data</li>
              <li>• Right to delete your data</li>
              <li>• Right to object to processing</li>
              <li>• Right to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-primary-black mb-4">7. Contact Us</h2>
            <p className="text-text-gray mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-text-gray">
              Email: privacy@lombard-tech.io<br />
              Phone: +44 20 7123 4567<br />
              Address: London, United Kingdom
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 