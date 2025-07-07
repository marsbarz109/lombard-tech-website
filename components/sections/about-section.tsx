'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Shield, Users, Heart, Unlock, Zap, TrendingUp, Award } from 'lucide-react'
import { COMPANY_VALUES } from '@/lib/constants'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'

const iconMap = {
  target: Target,
  shield: Shield,
  users: Users,
  heart: Heart,
  unlock: Unlock,
}

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="about" className="py-24 lg:py-32 bg-pure-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="section-heading text-company-gold mb-8">
            About Lombard Tech
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-light-gray p-8 border-l-4 border-company-gold">
              <h3 className="text-xl font-semibold text-company-gold mb-4">
                Why We Exist
              </h3>
              <p className="large-body text-deep-navy">
                Lombard Tech delivers a fast, honest, and intelligent approach to hiring. We combine deep market knowledge with tech and AI tools to provide a modern, agile recruitment service, grounded in expertise and built for long-term impact.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="sub-heading text-company-gold mb-12 text-center">
            What We Stand For
          </h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {COMPANY_VALUES.map((value, index) => {
              const IconComponent = iconMap[value.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className={cn(
                    "group p-6 bg-light-gray border border-medium-gray",
                    "hover:border-company-gold hover:shadow-lg",
                    "transition-all duration-300 ease-out",
                    "cursor-pointer"
                  )}
                >
                  <div className="mb-4">
                    <IconComponent className={cn(
                      "h-8 w-8 text-company-gold",
                      "group-hover:scale-110 transition-transform duration-300"
                    )} />
                  </div>
                  <h4 className="text-lg font-semibold text-deep-navy mb-3 group-hover:text-company-gold transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="regular-body text-text-gray">
                    {value.description}
                  </p>
                  <div className={cn(
                    "mt-4 w-8 h-0.5 bg-company-gold",
                    "transform scale-x-0 group-hover:scale-x-100",
                    "transition-transform duration-300 ease-out",
                    "origin-left"
                  )} />
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* What We Want to Be Known For */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-deep-navy p-12 text-center">
            <h3 className="text-2xl font-semibold text-company-gold mb-6">
              What We Want to Be Known For
            </h3>
            <p className="large-body text-pure-white max-w-3xl mx-auto">
              A disruptive, fast-growing upstart with the sharpest recruiters in the market. Respected for integrity, trusted for expertise, and liked for how we work.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={staggerItem}
            className="group p-6 bg-light-gray border border-medium-gray hover:border-company-gold hover:shadow-lg transition-all duration-300"
          >
            <Zap className="h-8 w-8 mx-auto text-company-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-deep-navy mb-2">Fast</div>
            <div className="text-sm font-medium text-text-gray uppercase tracking-wide">
              Response Times
            </div>
          </motion.div>
          
          <motion.div
            variants={staggerItem}
            className="group p-6 bg-light-gray border border-medium-gray hover:border-company-gold hover:shadow-lg transition-all duration-300"
          >
            <TrendingUp className="h-8 w-8 mx-auto text-company-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-deep-navy mb-2">Growth</div>
            <div className="text-sm font-medium text-text-gray uppercase tracking-wide">
              Focused Partnership
            </div>
          </motion.div>
          
          <motion.div
            variants={staggerItem}
            className="group p-6 bg-light-gray border border-medium-gray hover:border-company-gold hover:shadow-lg transition-all duration-300"
          >
            <Award className="h-8 w-8 mx-auto text-company-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-deep-navy mb-2">Trusted</div>
            <div className="text-sm font-medium text-text-gray uppercase tracking-wide">
              Reputation
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 