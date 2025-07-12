import { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact-form'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Lombard Tech. Submit your CV or contact us for recruitment services.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-lt-navy">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-lombard text-4xl lg:text-5xl text-lt-gold mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-lt-ivory max-w-3xl mx-auto leading-relaxed">
            Whether you're hiring, job hunting, or just want to explore how we can help — get in touch.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          {/* Left Column - Contact Form (2/3 width) */}
          <div className="lg:col-span-2">
            <h2 className="font-lombard text-3xl text-lt-gold mb-8">
              Send us a message / Upload your CV
            </h2>
            <ContactForm />
          </div>

          {/* Right Column - Contact Information Cards (1/3 width) */}
          <div className="space-y-6">
            <div className="group">
              <div className="bg-lt-navy hover:bg-lt-gold/10 border border-lt-gold/20 hover:border-lt-gold p-6 transition-all duration-300 rounded-lg h-full">
                <MapPin className="h-8 w-8 text-lt-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lombard text-lg text-lt-ivory mb-3">Address</h3>
                <p className="text-lt-ivory/80 text-sm leading-relaxed">
                  71–75 Shelton Street<br />
                  London<br />
                  WC2H 9JQ
                </p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-lt-navy hover:bg-lt-gold/10 border border-lt-gold/20 hover:border-lt-gold p-6 transition-all duration-300 rounded-lg h-full">
                <Phone className="h-8 w-8 text-lt-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lombard text-lg text-lt-ivory mb-3">Phone</h3>
                <a 
                  href="tel:07917442221"
                  className="text-lt-gold hover:text-lt-ivory transition-colors font-medium"
                >
                  07917 442221
                </a>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-lt-navy hover:bg-lt-gold/10 border border-lt-gold/20 hover:border-lt-gold p-6 transition-all duration-300 rounded-lg h-full">
                <Mail className="h-8 w-8 text-lt-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lombard text-lg text-lt-ivory mb-3">Email</h3>
                <a 
                  href="mailto:Joseph.Marsden@lombard-tech.io"
                  className="text-lt-gold hover:text-lt-ivory transition-colors font-medium break-all"
                >
                  Joseph.Marsden@lombard-tech.io
                </a>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-lt-navy hover:bg-lt-gold/10 border border-lt-gold/20 hover:border-lt-gold p-6 transition-all duration-300 rounded-lg h-full">
                <Clock className="h-8 w-8 text-lt-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-lombard text-lg text-lt-ivory mb-3">Response Time</h3>
                <p className="text-lt-ivory/80">
                  We'll get back to you<br />
                  <span className="text-lt-gold font-semibold">promptly</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="bg-lt-gold/10 p-8 border border-lt-gold/20 rounded-lg">
          <h3 className="font-lombard text-xl text-lt-gold mb-4 text-center">
            Confidential & Professional
          </h3>
          <p className="text-lt-ivory/80 text-center leading-relaxed">
            All enquiries are handled confidentially with fast response times. We respect your privacy and will only use your information to respond to your inquiry.
          </p>
        </div>
      </div>
    </div>
  )
} 