'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { staggerContainer, staggerItem, scaleOnHover } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="services" className="py-24 lg:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-primary-black mb-6">
            Our Services
          </h2>
          <p className="large-body text-text-gray max-w-3xl mx-auto">
            We provide comprehensive recruitment solutions across the technology sector, 
            connecting exceptional talent with innovative companies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              className="group"
            >
              <motion.div
                variants={scaleOnHover}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={cn(
                  "p-8 h-full",
                  "bg-pure-white border border-medium-gray",
                  "hover:border-accent-blue hover:shadow-lg",
                  "transition-all duration-300 ease-out",
                  "cursor-pointer"
                )}
              >
                {/* Service Number */}
                <div className="mb-6">
                  <span className={cn(
                    "text-4xl font-black text-accent-blue",
                    "opacity-80 group-hover:opacity-100",
                    "transition-opacity duration-300"
                  )}>
                    {service.id}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className={cn(
                  "sub-heading text-primary-black mb-4",
                  "group-hover:text-accent-blue",
                  "transition-colors duration-300"
                )}>
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="regular-body text-text-gray leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Indicator */}
                <div className={cn(
                  "mt-6 w-8 h-0.5 bg-accent-blue",
                  "transform scale-x-0 group-hover:scale-x-100",
                  "transition-transform duration-300 ease-out",
                  "origin-left"
                )} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="regular-body text-text-gray mb-6">
            Ready to find your next opportunity or top talent?
          </p>
          <motion.a
            href="/contact"
            className={cn(
              "btn-hover",
              "inline-flex items-center px-8 py-4",
              "bg-primary-black text-pure-white",
              "rounded-none border border-primary-black",
              "text-sm font-semibold tracking-wide",
              "hover:bg-pure-white hover:text-primary-black",
              "transition-all duration-300 ease-out",
              "focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 