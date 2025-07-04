import { Metadata } from 'next'
import { AboutSection } from '@/components/sections/about-section'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Lombard Tech\'s mission, values, and expertise in technology recruitment.',
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-pure-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="section-heading text-primary-black mb-8">
            About Lombard Tech
          </h1>
          <p className="large-body text-text-gray max-w-4xl mx-auto">
            We are a leading technology recruitment consultancy, dedicated to connecting 
            exceptional talent with innovative companies across the UK and Europe.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 lg:py-32 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h2 className="sub-heading text-primary-black mb-6">Our Mission</h2>
              <p className="regular-body text-text-gray">
                To bridge the gap between exceptional talent and innovative companies, 
                creating lasting partnerships that drive technological advancement and career growth.
              </p>
            </div>
            <div className="text-center">
              <h2 className="sub-heading text-primary-black mb-6">Our Vision</h2>
              <p className="regular-body text-text-gray">
                To be the most trusted technology recruitment partner, recognized for our 
                expertise, integrity, and commitment to excellence in every placement.
              </p>
            </div>
            <div className="text-center">
              <h2 className="sub-heading text-primary-black mb-6">Our Values</h2>
              <ul className="regular-body text-text-gray space-y-2">
                <li>• Excellence in service delivery</li>
                <li>• Integrity in all relationships</li>
                <li>• Innovation in our approach</li>
                <li>• Commitment to long-term success</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Component */}
      <AboutSection />

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 bg-pure-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-primary-black mb-6">
              Why Choose Lombard Tech?
            </h2>
            <p className="large-body text-text-gray max-w-3xl mx-auto">
              Our proven track record and deep industry expertise set us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Industry Expertise',
                description: 'Deep understanding of technology roles, market trends, and compensation benchmarks across all levels.'
              },
              {
                title: 'Extensive Network',
                description: 'Strong relationships with top talent and leading companies built over years of successful partnerships.'
              },
              {
                title: 'Personalized Approach',
                description: 'Tailored recruitment strategies that understand both client needs and candidate aspirations.'
              },
              {
                title: 'Quality Guarantee',
                description: 'Rigorous vetting process ensures we present only the most qualified and suitable candidates.'
              },
              {
                title: 'Market Intelligence',
                description: 'Regular insights and updates on salary trends, skill demands, and market opportunities.'
              },
              {
                title: 'Long-term Partnerships',
                description: 'Committed to building lasting relationships that support continued growth and success.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-primary-black mb-4">
                  {item.title}
                </h3>
                <p className="regular-body text-text-gray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 