'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MARKET_COVERAGE } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function MarketCoverageSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section ref={ref} id="market-coverage" className="py-24 lg:py-32 bg-deep-navy">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-company-gold mb-6">
            Market Coverage
          </h2>
          <p className="large-body text-pure-white max-w-5xl mx-auto">
            We work with a wide range of organisations across the UK and Europe, including VC-backed scale-ups, private equity portfolios, and listed global companies. Our independence gives us full access to the market, with no internal blockers or conflicts of interest.
          </p>
        </motion.div>

        {/* Coverage Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {MARKET_COVERAGE.map((area, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className={cn(
                  "relative overflow-hidden h-80",
                  "bg-pure-white border border-medium-gray",
                  "hover:border-company-gold",
                  "transition-all duration-300 ease-out",
                  "cursor-pointer group"
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Background overlay for hover state */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-company-gold to-hover-blue opacity-0 group-hover:opacity-95 transition-opacity duration-300"
                />
                
                {/* Default State - Title */}
                <motion.div 
                  className="relative z-10 p-8 h-full flex flex-col justify-center group-hover:opacity-0 transition-opacity duration-300"
                >
                  <h3 className="font-semibold text-2xl mb-4 text-deep-navy">
                    {area.title}
                  </h3>
                  <div className="w-12 h-1 bg-company-gold" />
                </motion.div>

                {/* Hover State - Full Information */}
                <motion.div
                  className="absolute inset-0 z-20 p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="font-semibold text-2xl mb-4 text-deep-navy">
                    {area.title}
                  </h3>
                  <p className="text-base mb-6 text-deep-navy/90 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="border-t border-deep-navy/30 pt-4">
                    <p className="text-sm font-semibold text-deep-navy mb-2">
                      Roles include:
                    </p>
                    <p className="text-sm text-deep-navy/80 leading-relaxed">
                      {area.roles}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 