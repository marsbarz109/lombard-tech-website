'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Target, Award, Zap } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Successful Placements',
  },
  {
    icon: Target,
    value: '95%',
    label: 'Client Satisfaction',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years Experience',
  },
  {
    icon: Zap,
    value: '24h',
    label: 'Average Response Time',
  },
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="about" className="py-24 lg:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h2 className="section-heading text-primary-black mb-8">
              About Lombard Tech
            </h2>
            <div className="space-y-6">
              <p className="large-body text-text-gray">
                Founded on the principle that exceptional talent deserves exceptional opportunities, 
                Lombard Tech has been at the forefront of technology recruitment for over a decade.
              </p>
              <p className="regular-body text-text-gray">
                We specialize in connecting top-tier technology professionals with innovative companies 
                across the UK and Europe. Our deep understanding of the tech landscape, combined with 
                our extensive network, ensures that both candidates and clients receive unparalleled service.
              </p>
              <p className="regular-body text-text-gray">
                From startups to Fortune 500 companies, we help organizations build world-class teams 
                while supporting professionals in advancing their careers in the ever-evolving tech industry.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={cn(
                  "text-center p-6",
                  "bg-pure-white border border-medium-gray",
                  "hover:border-accent-blue hover:shadow-lg",
                  "transition-all duration-300 ease-out",
                  "group"
                )}
              >
                <div className="mb-4">
                  <stat.icon className={cn(
                    "h-8 w-8 mx-auto text-accent-blue",
                    "group-hover:scale-110 transition-transform duration-300"
                  )} />
                </div>
                <div className="mb-2">
                  <span className="text-3xl font-black text-primary-black">
                    {stat.value}
                  </span>
                </div>
                <div>
                  <span className="text-sm font-medium text-text-gray uppercase tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 