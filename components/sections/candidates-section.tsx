'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, TrendingUp, Award, Target, ArrowRight, Upload } from 'lucide-react'
import { fadeInUp, scaleOnHover, staggerContainer } from '@/lib/animations'

export function CandidatesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const careerServices = [
    {
      icon: Target,
      title: 'Career Strategy',
      description: 'Personalized career planning and goal setting to accelerate your professional growth.'
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description: 'Stay informed with the latest salary trends, skill demands, and market opportunities.'
    },
    {
      icon: Award,
      title: 'Interview Preparation',
      description: 'Expert coaching and preparation to help you excel in technical and behavioral interviews.'
    },
    {
      icon: Users,
      title: 'Network Building',
      description: 'Connect with industry professionals and expand your network within the tech community.'
    }
  ]

  return (
    <section ref={ref} id="candidates" className="py-24 lg:py-32 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="section-heading text-primary-black mb-6">
            Advance Your Tech Career
          </h2>
          <p className="large-body text-text-gray max-w-3xl mx-auto mb-12">
            Partner with industry experts to unlock new opportunities, accelerate your growth, 
            and find roles that match your ambitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary-black text-pure-white border border-primary-black text-sm font-semibold tracking-wide hover:bg-pure-white hover:text-primary-black transition-all duration-300"
            >
              <Upload className="mr-2 h-4 w-4" />
              Submit Your CV
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 bg-transparent text-primary-black border border-primary-black text-sm font-semibold tracking-wide hover:bg-primary-black hover:text-pure-white transition-all duration-300"
            >
              Explore Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Career Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {careerServices.map((service, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={scaleOnHover}
              whileHover="hover"
            >
              <div className="bg-pure-white p-8 border border-medium-gray group-hover:border-accent-blue hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <service.icon className="h-12 w-12 mx-auto text-accent-blue group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-primary-black mb-4">
                  {service.title}
                </h3>
                <p className="regular-body text-text-gray">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Career Levels */}
        <motion.div
          className="mt-20"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <h3 className="sub-heading text-primary-black mb-6">
              Opportunities at Every Level
            </h3>
            <p className="large-body text-text-gray max-w-3xl mx-auto">
              From graduate positions to executive roles, we have opportunities across all career stages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                level: 'Graduate & Junior',
                description: 'Launch your tech career with mentorship and guidance',
                salaryRange: '£25k - £45k'
              },
              {
                level: 'Mid-Level & Senior',
                description: 'Advance your skills and take on greater responsibilities',
                salaryRange: '£45k - £140k'
              },
              {
                level: 'Lead & Executive',
                description: 'Shape the future of technology organizations',
                salaryRange: '£80k - £300k+'
              },
              {
                level: 'Specialist Roles',
                description: 'Expert positions in cutting-edge technologies',
                salaryRange: '£60k - £200k+'
              }
            ].map((level, index) => (
              <motion.div
                key={index}
                className="p-8 bg-pure-white border border-medium-gray hover:border-accent-blue transition-colors duration-300"
                variants={scaleOnHover}
                whileHover="hover"
              >
                <h4 className="text-xl font-semibold text-primary-black mb-4">
                  {level.level}
                </h4>
                <p className="text-text-gray mb-4">
                  {level.description}
                </p>
                <p className="text-accent-blue font-semibold text-lg">
                  {level.salaryRange}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          className="mt-20 bg-primary-black p-12 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-semibold text-pure-white mb-8">Career Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <blockquote className="text-pure-white">
              <p className="italic mb-4">
                "Lombard Tech helped me transition from a mid-level developer to a technical lead role at a unicorn startup. The guidance and opportunities were invaluable."
              </p>
              <div className="text-accent-blue font-semibold">
                — Sarah Chen, Technical Lead
              </div>
            </blockquote>
            
            <blockquote className="text-pure-white">
              <p className="italic mb-4">
                "The market insights and salary negotiation support resulted in a 40% increase in compensation. Couldn't be happier with the outcome."
              </p>
              <div className="text-accent-blue font-semibold">
                — Marcus Thompson, Senior Product Manager
              </div>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 