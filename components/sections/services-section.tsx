'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import { staggerContainer, staggerItem, scaleOnHover } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCardInteraction = (index: number) => {
    if (isMobile) {
      // On mobile, toggle the active card
      setActiveCard(activeCard === index ? null : index)
    } else {
      // On desktop, use hover
      setHoveredCard(index)
    }
  }

  const handleCardLeave = () => {
    if (!isMobile) {
      setHoveredCard(null)
    }
  }

  const isCardActive = (index: number) => {
    return isMobile ? activeCard === index : hoveredCard === index
  }

  return (
    <section ref={ref} id="services" className="py-24 lg:py-32 bg-lt-navy">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-lombard text-4xl lg:text-5xl text-lt-gold mb-6">
            Our Services
          </h2>
          <p className="text-lg text-lt-ivory max-w-4xl mx-auto leading-relaxed">
            Whether you're building new teams, replacing key talent, or expanding into new regions, we bring practical insight, proven delivery, and strong market knowledge to make it happen. Our recruiters combine hands-on experience with deep networks, helping clients secure the right people with focus and efficiency. We work across both contract and permanent hiring models and can support individual hires or full build-outs. Every brief is approached with care, urgency, and discretion.
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
              onMouseEnter={() => handleCardInteraction(index)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardInteraction(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={cn(
                  "relative overflow-hidden h-48",
                  "bg-lt-navy hover:bg-lt-gold/10",
                  "border border-lt-gold/20 hover:border-lt-gold",
                  "transition-all duration-300 ease-out",
                  "cursor-pointer group rounded-lg",
                  isCardActive(index) && "bg-lt-gold/10 border-lt-gold"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Background overlay for hover/active state */}
                <motion.div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br from-lt-gold to-lt-gold/80 transition-opacity duration-300",
                    isCardActive(index) ? "opacity-95" : "opacity-0 group-hover:opacity-95"
                  )}
                />
                
                {/* Default State - Title Only */}
                <div className={cn(
                  "relative z-10 p-6 h-full flex flex-col justify-center transition-opacity duration-300",
                  isCardActive(index) ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                )}>
                  {/* Service Title */}
                  <h3 className="font-lombard text-xl text-lt-ivory mb-4 group-hover:text-lt-gold transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Hover Indicator */}
                  <div className="w-8 h-0.5 bg-lt-gold" />
                </div>

                {/* Hover/Active State - Description */}
                <motion.div
                  className={cn(
                    "absolute inset-0 z-20 p-6 transition-opacity duration-300 flex flex-col justify-center",
                    isCardActive(index) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isCardActive(index) ? 1 : 0 }}
                >
                  <h3 className="font-lombard text-xl text-lt-navy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-lt-navy/90 leading-relaxed">
                    {service.description}
                  </p>
                  {isMobile && (
                    <button
                      className="mt-4 text-xs text-lt-navy/70 underline self-end"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveCard(null)
                      }}
                    >
                      Close
                    </button>
                  )}
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
          <p className="text-lg text-lt-ivory mb-6">
            Ready to find your next opportunity or top talent?
          </p>
          <motion.a
            href="/contact"
            className={cn(
              "btn-hover",
              "inline-flex items-center px-8 py-4",
              "bg-lt-gold text-lt-navy",
              "rounded-none border border-lt-gold",
              "text-sm font-semibold tracking-wide",
              "hover:bg-lt-ivory hover:text-lt-navy",
              "transition-all duration-300 ease-out",
              "focus:outline-none focus:ring-2 focus:ring-lt-ivory focus:ring-offset-2"
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