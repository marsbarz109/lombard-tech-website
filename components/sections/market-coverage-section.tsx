'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MARKET_COVERAGE } from '@/lib/constants'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function MarketCoverageSection() {
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

  const handleCardClick = (index: number) => {
    if (isMobile) {
      setActiveCard(activeCard === index ? null : index)
    }
  }

  const handleCardHover = (index: number) => {
    if (!isMobile) {
      setHoveredCard(index)
    }
  }

  const handleCardLeave = () => {
    if (!isMobile) {
      setHoveredCard(null)
    }
  }

  const isCardRevealed = (index: number) => {
    return isMobile ? activeCard === index : hoveredCard === index
  }

  const isCardExpanded = (index: number) => {
    return !isMobile && hoveredCard === index
  }

  // Determine if card is in bottom row (for 3-column grid)
  const isBottomRow = (index: number) => {
    return index >= 3 // Cards 3, 4, 5 are in bottom row
  }

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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {MARKET_COVERAGE.map((area, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className={cn(
                "group relative",
                isMobile && "touch-manipulation",
                // Disable pointer events on original card when expanded to prevent hover
                !isMobile && isCardExpanded(index) && "pointer-events-none"
              )}
              onMouseEnter={() => !isCardExpanded(index) && handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardClick(index)}
            >
              {/* Base Card - Dynamic height on mobile when expanded */}
              <motion.div
                className={cn(
                  "relative overflow-hidden cursor-pointer rounded-lg",
                  "bg-lt-navy transition-all duration-300 ease-out",
                  // Mobile: dynamic height when expanded, fixed when not
                  isMobile 
                    ? (isCardRevealed(index) ? "min-h-[380px]" : "h-48")
                    : "h-48", // Desktop: always fixed height
                  // Completely hide when expanded on desktop
                  !isMobile && isCardExpanded(index) 
                    ? "invisible"
                    : "border border-lt-gold/20",
                  // Mobile: use explicit active state
                  isMobile && isCardRevealed(index) && "bg-lt-gold/10 border-lt-gold",
                  // Desktop: use hover states (only when not expanded)
                  !isMobile && !isCardExpanded(index) && "hover:bg-lt-gold/10 hover:border-lt-gold"
                )}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                layout={isMobile} // Enable layout animation for mobile height changes
              >
                {/* Background overlay for hover/active state - hide when expanded */}
                <motion.div
                  className={cn(
                    "absolute inset-0 bg-lt-gold",
                    "transition-opacity duration-300",
                    // Hide completely when expanded on desktop
                    !isMobile && isCardExpanded(index) ? "hidden" :
                    // Mobile: show/hide based on active state
                    isMobile && isCardRevealed(index) ? "opacity-100" : 
                    isMobile ? "opacity-0" :
                    // Desktop: show/hide based on hover (only when not expanded)
                    "opacity-0 group-hover:opacity-100"
                  )}
                />
                
                {/* Default State - Title Only - hide when expanded */}
                <motion.div 
                  className={cn(
                    "relative z-10 p-6 h-full flex flex-col justify-center",
                    "transition-opacity duration-300",
                    // Hide when expanded on desktop
                    !isMobile && isCardExpanded(index) ? "hidden" :
                    // Mobile: hide when active
                    isMobile && isCardRevealed(index) ? "opacity-0" :
                    isMobile ? "opacity-100" :
                    // Desktop: hide on hover
                    "opacity-100 group-hover:opacity-0"
                  )}
                >
                  <h3 className="font-lombard text-lg text-lt-ivory mb-3 text-center">
                    {area.title}
                  </h3>
                  <div className="w-12 h-1 bg-lt-gold mx-auto" />
                </motion.div>

                {/* Mobile Expanded Content (in-place with proper spacing) */}
                {isMobile && (
                  <motion.div
                    className={cn(
                      "absolute inset-0 z-20 p-5 flex flex-col",
                      "transition-opacity duration-300",
                      isCardRevealed(index) ? "opacity-100" : "opacity-0"
                    )}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isCardRevealed(index) ? 1 : 0 }}
                  >
                    <h3 className="font-lombard text-lg mb-3 text-lt-navy">
                      {area.title}
                    </h3>
                    <p className="text-sm mb-3 text-lt-navy/90 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="border-t border-lt-navy/30 pt-3 mb-3 flex-1">
                      <p className="text-xs font-semibold text-lt-navy mb-2">
                        Roles include:
                      </p>
                      <p className="text-xs text-lt-navy/80 leading-relaxed">
                        {area.roles}
                      </p>
                    </div>
                    <button
                      className="text-xs text-lt-navy/70 underline self-end mt-auto"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveCard(null)
                      }}
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </motion.div>

              {/* Desktop Expanded Overlay - Absolute positioned */}
              <AnimatePresence>
                {!isMobile && isCardExpanded(index) && (
                  <motion.div
                    className="absolute z-40"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1.02 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{
                      transformOrigin: isBottomRow(index) ? 'bottom center' : 'top center',
                      pointerEvents: 'auto', // Block pointer events to prevent hover on original card
                      // Position based on row - bottom row expands upward
                      ...(isBottomRow(index) 
                        ? { 
                            bottom: 0,
                            left: 0,
                            right: 0,
                          }
                        : { 
                            top: 0,
                            left: 0,
                            right: 0,
                          }
                      )
                    }}
                  >
                    <motion.div
                      className="relative overflow-hidden cursor-pointer rounded-lg"
                      style={{
                        height: '280px', // Reduced from 384px - only partially overlaps
                        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.4)',
                      }}
                      onClick={() => setHoveredCard(null)}
                    >
                      {/* Background overlay - fully opaque gold background */}
                      <div className="absolute inset-0 bg-lt-gold" />
                      
                      {/* Expanded Content */}
                      <div className="relative z-20 p-6 h-full flex flex-col justify-start">
                        <h3 className="font-lombard text-xl mb-4 text-lt-navy">
                          {area.title}
                        </h3>
                        <p className="text-sm mb-4 text-lt-navy/90 leading-relaxed">
                          {area.description}
                        </p>
                        <div className="border-t border-lt-navy/30 pt-3 flex-1">
                          <p className="text-xs font-semibold text-lt-navy mb-2">
                            Roles include:
                          </p>
                          <p className="text-xs text-lt-navy/80 leading-relaxed">
                            {area.roles}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 