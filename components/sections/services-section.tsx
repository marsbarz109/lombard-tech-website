'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { staggerContainer, staggerItem, scaleOnHover } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section ref={ref} id="services" className="py-24 lg:py-32 bg-pure-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-company-gold mb-6">
            Our Services
          </h2>
          <p className="large-body text-deep-navy max-w-4xl mx-auto">
            Whether you're building new teams, replacing key talent, or expanding into new regions, we provide the clarity, pace, and market knowledge to make it happen. Our recruiters combine hands-on experience with deep networks, helping clients secure the right people without delays or distractions. We work across both contract and permanent hiring models, and can support individual hires or full build-outs. Every brief is approached with care, urgency, and discretion.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              variants={staggerItem}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={cn(
                  "relative overflow-hidden h-48",
                  "bg-light-gray border border-medium-gray",
                  "hover:border-company-gold hover:shadow-lg",
                  "transition-all duration-300 ease-out",
                  "cursor-pointer group"
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Background overlay for hover state */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-deep-navy to-text-gray opacity-0 group-hover:opacity-95 transition-opacity duration-300"
                />
                
                {/* Default State - Number and Title */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-center group-hover:opacity-0 transition-opacity duration-300">
                  {/* Service Number */}
                  <div className="mb-4">
                    <span className="text-4xl font-black text-company-gold opacity-80">
                      {service.id}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold mb-4 text-deep-navy">
                    {service.title}
                  </h3>

                  {/* Hover Indicator */}
                  <div className="w-8 h-0.5 bg-company-gold" />
                </div>

                {/* Hover State - Description */}
                <motion.div
                  className="absolute inset-0 z-20 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="mb-3">
                    <span className="text-2xl font-black text-company-gold">
                      {service.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
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
          <p className="regular-body text-deep-navy mb-6">
            Ready to find your next opportunity or top talent?
          </p>
          <motion.a
            href="/contact"
            className={cn(
              "btn-hover",
              "inline-flex items-center px-8 py-4",
              "bg-company-gold text-deep-navy",
              "rounded-none border border-company-gold",
              "text-sm font-semibold tracking-wide",
              "hover:bg-pure-white hover:text-company-gold",
              "transition-all duration-300 ease-out",
              "focus:outline-none focus:ring-2 focus:ring-deep-navy focus:ring-offset-2"
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