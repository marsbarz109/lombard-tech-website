'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Users, TrendingUp, Award, Target, ArrowRight, Upload, Shield, MessageSquare, Clock } from 'lucide-react'
import { CANDIDATE_SERVICES } from '@/lib/constants'
import { fadeInUp, scaleOnHover, staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function CandidatesSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section ref={ref} id="candidates" className="py-24 lg:py-32 bg-lt-navy">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="font-lombard text-4xl lg:text-5xl text-lt-gold mb-6">
            Advance Your Tech Career
          </h2>
          <p className="text-lg text-lt-ivory max-w-4xl mx-auto mb-8 leading-relaxed">
            Partner with recruiters who understand your world.
          </p>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lt-ivory/80 leading-relaxed">
              Whether you're exploring your next move or ready for a new challenge, we work with you to identify the right opportunities — aligned with your skills, ambitions, and preferences.
            </p>
            <p className="text-lt-ivory/80 leading-relaxed">
              We support professionals across permanent and contract roles, from hands-on technical positions to strategic leadership. Every conversation is confidential, and every recommendation is made with care.
            </p>
            <p className="text-lt-ivory/80 leading-relaxed">
              Our aim is simple: to help you find the right fit, fast — and keep you informed, prepared, and supported throughout the process.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-lt-gold text-lt-navy border border-lt-gold text-sm font-semibold tracking-wide hover:bg-lt-ivory hover:text-lt-navy transition-all duration-300"
            >
              <Upload className="mr-2 h-4 w-4" />
              Submit Your CV
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-lt-ivory border border-lt-ivory text-sm font-semibold tracking-wide hover:bg-lt-ivory hover:text-lt-navy transition-all duration-300"
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Start a Conversation
            </a>
          </div>
        </motion.div>

        {/* Candidate Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {CANDIDATE_SERVICES.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={staggerItem}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="relative overflow-hidden h-32 bg-lt-ivory hover:bg-lt-gold/10 border border-lt-navy/10 hover:border-lt-gold hover:shadow-lg transition-all duration-300 cursor-pointer group rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {/* Background overlay for hover state */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-lt-gold to-lt-gold/80 opacity-0 group-hover:opacity-95 transition-opacity duration-300"
                />
                
                {/* Default State - Title */}
                <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="font-lombard text-xl text-lt-navy mb-3">
                    {service.title}
                  </h3>
                  <div className="w-8 h-0.5 bg-lt-gold mx-auto" />
                </div>

                {/* Hover State - Description */}
                <motion.div
                  className="absolute inset-0 z-20 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="font-lombard text-lg text-lt-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-lt-navy/90 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Privacy Notice */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="text-center border-t border-lt-gold border-opacity-30 pt-8">
            <p className="text-sm text-lt-ivory/80">
              All conversations are confidential. We work in line with GDPR requirements to ensure your data stays secure and in your control.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-lt-ivory p-12 border-l-4 border-lt-gold rounded-lg">
            <h3 className="font-lombard text-2xl text-lt-gold mb-6">
              Looking for a Change?
            </h3>
            <p className="text-lg text-lt-navy max-w-3xl mx-auto mb-8 leading-relaxed">
              Submit your CV or get in touch for a confidential conversation about your next career move.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-lt-gold text-lt-navy border border-lt-gold text-sm font-semibold tracking-wide hover:bg-lt-ivory hover:text-lt-gold transition-all duration-300"
              >
                <Upload className="mr-2 h-4 w-4" />
                Submit Your CV
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-transparent text-lt-navy border border-lt-navy text-sm font-semibold tracking-wide hover:bg-lt-navy hover:text-lt-ivory transition-all duration-300"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 