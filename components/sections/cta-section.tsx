'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'
import { fadeInUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function CTASection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-lt-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="font-lombard text-4xl lg:text-5xl text-lt-gold mb-8">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-lt-ivory max-w-3xl mx-auto mb-12 leading-relaxed">
            Whether you're looking for your next career opportunity or seeking exceptional talent 
            for your team, we're here to help you achieve your goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* For Candidates */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className={cn(
                  "btn-hover group",
                  "inline-flex items-center px-8 py-4",
                  "bg-lt-gold text-lt-navy",
                  "rounded-none border border-lt-gold",
                  "text-sm font-semibold tracking-wide",
                  "hover:bg-lt-ivory hover:text-lt-navy",
                  "transition-all duration-300 ease-out",
                  "focus:outline-none focus:ring-2 focus:ring-lt-ivory focus:ring-offset-2 focus:ring-offset-lt-navy"
                )}
              >
                <Upload className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Submit Your CV
              </Link>
            </motion.div>

            {/* For Employers */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className={cn(
                  "group",
                  "inline-flex items-center px-8 py-4",
                  "bg-transparent text-lt-ivory",
                  "rounded-none border border-lt-ivory",
                  "text-sm font-semibold tracking-wide",
                  "hover:bg-lt-ivory hover:text-lt-navy",
                  "transition-all duration-300 ease-out",
                  "focus:outline-none focus:ring-2 focus:ring-lt-ivory focus:ring-offset-2 focus:ring-offset-lt-navy"
                )}
              >
                Find Talent
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 