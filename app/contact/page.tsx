import { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact-form'
import { CVUploadForm } from '@/components/forms/cv-upload-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Lombard Tech. Submit your CV or contact us for recruitment services.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-pure-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading text-primary-black mb-6">
            Get in Touch
          </h1>
          <p className="large-body text-text-gray max-w-3xl mx-auto">
            Ready to take the next step in your career or find exceptional talent? 
            We're here to help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="sub-heading text-primary-black mb-8">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* CV Upload */}
          <div>
            <h2 className="sub-heading text-primary-black mb-8">
              Submit your CV
            </h2>
            <CVUploadForm />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-24 py-16 border-t border-medium-gray">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-semibold text-primary-black mb-4">Email</h3>
              <a 
                href="mailto:hello@lombard-tech.io"
                className="text-accent-blue hover:text-hover-blue transition-colors"
              >
                hello@lombard-tech.io
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-primary-black mb-4">Phone</h3>
              <a 
                href="tel:+442071234567"
                className="text-accent-blue hover:text-hover-blue transition-colors"
              >
                +44 20 7123 4567
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-primary-black mb-4">Location</h3>
              <p className="text-text-gray">London, United Kingdom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 