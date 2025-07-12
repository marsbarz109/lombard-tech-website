import { Metadata } from 'next'
import { ServicesSection } from '@/components/sections/services-section'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive technology recruitment services including executive search, contract staffing, and talent consulting.',
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-pure-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="section-heading text-primary-black mb-8">
            Our Services
          </h1>
          <p className="large-body text-text-gray max-w-4xl mx-auto">
            Comprehensive recruitment solutions tailored to meet the unique needs 
            of technology companies and professionals.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesSection />

      {/* Detailed Services */}
      <section className="py-24 lg:py-32 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <span className="text-6xl font-black text-accent-blue mr-4">
                      {service.id}
                    </span>
                    <h2 className="sub-heading text-primary-black">
                      {service.title}
                    </h2>
                  </div>
                  <p className="large-body text-text-gray mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    {service.id === '01' && (
                      <ul className="regular-body text-text-gray space-y-2">
                        <li>• C-level and VP-level positions</li>
                        <li>• Technical leadership roles</li>
                        <li>• Board and advisory positions</li>
                        <li>• Confidential search capabilities</li>
                      </ul>
                    )}
                    {service.id === '02' && (
                      <ul className="regular-body text-text-gray space-y-2">
                        <li>• Software engineers and developers</li>
                        <li>• Data scientists and analysts</li>
                        <li>• DevOps and cloud specialists</li>
                        <li>• Product and UX professionals</li>
                      </ul>
                    )}
                    {service.id === '03' && (
                      <ul className="regular-body text-text-gray space-y-2">
                        <li>• Short-term project specialists</li>
                        <li>• Contract-to-permanent options</li>
                        <li>• Interim leadership roles</li>
                        <li>• Flexible engagement models</li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className={`bg-primary-black p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="text-pure-white">
                    <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Expert market knowledge and insights</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Access to passive candidate networks</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Comprehensive screening and assessment</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>Ongoing support and relationship management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 lg:py-32 bg-pure-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-heading text-primary-black mb-6">
              Our Process
            </h2>
            <p className="large-body text-text-gray max-w-3xl mx-auto">
              A proven methodology that ensures successful outcomes for all stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your needs, culture, and requirements in detail.'
              },
              {
                step: '02',
                title: 'Search Strategy',
                description: 'Developing a tailored approach to identify the right candidates.'
              },
              {
                step: '03',
                title: 'Assessment',
                description: 'Rigorous evaluation of technical skills and cultural fit.'
              },
              {
                step: '04',
                title: 'Placement',
                description: 'Facilitating successful offers and smooth onboarding.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-blue text-pure-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
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