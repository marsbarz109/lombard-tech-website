'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MARKET_COVERAGE } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function MarketCoverageSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="market-coverage" className="py-24 lg:py-32 bg-pure-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-primary-black mb-6">
            Market Coverage
          </h2>
          <p className="large-body text-text-gray max-w-3xl mx-auto">
            We specialize in recruiting across key technology sectors, 
            providing deep expertise in each domain.
          </p>
        </motion.div>

        {/* Coverage Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {MARKET_COVERAGE.map((area, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group"
            >
              <div className={cn(
                "p-6 text-center",
                "bg-light-gray",
                "hover:bg-accent-blue hover:text-pure-white",
                "transition-all duration-300 ease-out",
                "cursor-pointer"
              )}>
                <h3 className="font-semibold text-lg mb-2">
                  {area}
                </h3>
                <div className={cn(
                  "w-8 h-0.5 bg-accent-blue mx-auto",
                  "group-hover:bg-pure-white",
                  "transition-colors duration-300"
                )} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 