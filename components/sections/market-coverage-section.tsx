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
    <section ref={ref} id="market-coverage" className="py-24 lg:py-32 bg-lt-navy">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-lombard text-4xl lg:text-5xl text-lt-gold mb-6">
            Market Coverage
          </h2>
          <p className="text-lg text-lt-ivory max-w-5xl mx-auto leading-relaxed">
            We partner with organisations across Europe, from VC-backed scale-ups to listed multinationals, typically in sectors where technical capability underpins competitive advantage. Our focus is on delivering hard-to-find talent into high growth, high demand environments.
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
                  "bg-lt-navy hover:bg-lt-gold/10",
                  "border border-lt-gold/20 hover:border-lt-gold",
                  "transition-all duration-300 ease-out",
                  "cursor-pointer group rounded-lg"
                )}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Background overlay for hover state */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-lt-gold to-lt-gold/80 opacity-0 group-hover:opacity-95 transition-opacity duration-300"
                />
                
                {/* Default State - Title */}
                <motion.div 
                  className="relative z-10 p-8 h-full flex flex-col justify-center group-hover:opacity-0 transition-opacity duration-300"
                >
                  <h3 className="font-lombard text-xl text-lt-ivory mb-4">
                    {area.title}
                  </h3>
                  <div className="w-12 h-1 bg-lt-gold" />
                </motion.div>

                {/* Hover State - Full Information */}
                <motion.div
                  className="absolute inset-0 z-20 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="font-lombard text-xl mb-4 text-lt-navy">
                    {area.title}
                  </h3>
                  <p className="text-base mb-6 text-lt-navy/90 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="border-t border-lt-navy/30 pt-4">
                    <p className="text-sm font-semibold text-lt-navy mb-2">
                      Roles include:
                    </p>
                    <p className="text-sm text-lt-navy/80 leading-relaxed">
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