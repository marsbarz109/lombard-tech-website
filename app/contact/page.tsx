import { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact-form'
import { CVUploadForm } from '@/components/forms/cv-upload-form'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Lombard Tech. Submit your CV or contact us for recruitment services.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-pure-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading text-company-gold mb-6">
            Get in Touch
          </h1>
          <p className="large-body text-deep-navy max-w-3xl mx-auto">
            Whether you're hiring, job hunting, or just want to explore how we can help — get in touch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="sub-heading text-company-gold mb-8">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          {/* CV Upload */}
          <div>
            <h2 className="sub-heading text-company-gold mb-8">
              Submit your CV
            </h2>
            <CVUploadForm />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-24 py-16 border-t border-medium-gray">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-light-gray p-6 border border-medium-gray group-hover:border-company-gold hover:shadow-lg transition-all duration-300">
                <MapPin className="h-8 w-8 mx-auto text-company-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-deep-navy mb-4">Address</h3>
                <p className="text-text-gray text-sm leading-relaxed">
                  71–75 Shelton Street<br />
                  London<br />
                  WC2H 9JQ
                </p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-light-gray p-6 border border-medium-gray group-hover:border-company-gold hover:shadow-lg transition-all duration-300">
                <Phone className="h-8 w-8 mx-auto text-company-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-deep-navy mb-4">Phone</h3>
                <a 
                  href="tel:07917442221"
                  className="text-company-gold hover:text-hover-blue transition-colors font-medium"
                >
                  07917 442221
                </a>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-light-gray p-6 border border-medium-gray group-hover:border-company-gold hover:shadow-lg transition-all duration-300">
                <Mail className="h-8 w-8 mx-auto text-company-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-deep-navy mb-4">Email</h3>
                <a 
                  href="mailto:Joseph.Marsden@lombard-tech.io"
                  className="text-company-gold hover:text-hover-blue transition-colors font-medium"
                >
                  Joseph.Marsden@lombard-tech.io
                </a>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-light-gray p-6 border border-medium-gray group-hover:border-company-gold hover:shadow-lg transition-all duration-300">
                <Clock className="h-8 w-8 mx-auto text-company-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold text-deep-navy mb-4">Response Time</h3>
                <p className="text-text-gray">
                  We'll get back to you<br />
                  <span className="text-company-gold font-semibold">promptly</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Contact Section */}
        <div className="mt-16 bg-light-gray p-12 border-l-4 border-company-gold">
          <h3 className="text-2xl font-semibold text-company-gold mb-6 text-center">
            Alternative Contact
          </h3>
          <p className="large-body text-deep-navy max-w-3xl mx-auto text-center mb-8">
            Alternatively, use the form above and we'll get back to you promptly.
          </p>
          <div className="text-center">
            <p className="text-sm text-text-gray">
              All enquiries are handled confidentially with fast response times.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 