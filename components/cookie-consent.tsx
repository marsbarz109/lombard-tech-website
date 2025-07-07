'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie } from 'lucide-react'
import { cn } from '@/lib/utils'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem('cookie-consent')
    if (!hasConsent) {
      // Show banner after a small delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className={cn(
              "bg-deep-navy border border-company-gold border-opacity-30 shadow-2xl",
              "p-6 flex flex-col lg:flex-row items-start lg:items-center gap-4",
              "relative"
            )}>
              {/* Close Button */}
              <button
                onClick={handleClose}
                className={cn(
                  "absolute top-4 right-4 p-1",
                  "text-gray-300 hover:text-pure-white",
                  "transition-colors duration-200",
                  "lg:hidden"
                )}
                aria-label="Close cookie banner"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Cookie Icon */}
              <div className="flex-shrink-0">
                <Cookie className="h-6 w-6 text-company-gold" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-semibold text-pure-white mb-2">
                  We use cookies to enhance your experience
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  We use cookies to analyze website traffic and optimize your experience. 
                  By accepting, you consent to our use of cookies in accordance with our{' '}
                  <a 
                    href="/cookie-policy" 
                    className="text-company-gold hover:underline"
                  >
                    Cookie Policy
                  </a>
                  .
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 w-full lg:w-auto">
                <button
                  onClick={handleReject}
                  className={cn(
                    "flex-1 lg:flex-none px-4 py-2",
                    "bg-transparent text-pure-white",
                    "border border-gray-500",
                    "text-sm font-medium",
                    "hover:bg-gray-700",
                    "transition-colors duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-company-gold focus:ring-offset-2"
                  )}
                >
                  Reject
                </button>
                <button
                  onClick={handleAccept}
                  className={cn(
                    "flex-1 lg:flex-none px-4 py-2",
                    "bg-company-gold text-deep-navy",
                    "border border-company-gold",
                    "text-sm font-medium",
                    "hover:bg-pure-white hover:text-company-gold",
                    "transition-colors duration-200",
                    "focus:outline-none focus:ring-2 focus:ring-pure-white focus:ring-offset-2"
                  )}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 