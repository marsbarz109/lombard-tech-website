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
    <section ref={ref} id="about" className="py-24 lg:py-32 bg-lt-ivory">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header with Two-Column Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 mb-16 items-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Image Placeholder */}
          <div className="bg-lt-navy/5 aspect-video w-full rounded-lg"></div>
          
          {/* Content */}
          <div>
            <h2 className="font-lombard text-4xl lg:text-5xl text-lt-gold mb-8">
              About Lombard Tech
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-lt-slate leading-relaxed">
                Our recruiters are experienced, well-connected, and focused on results. We work across Infrastructure and Cloud, Cybersecurity, Data, and Software Development — covering both contract and permanent hiring, from hands-on roles to leadership.
              </p>
              <p className="text-lg text-lt-slate leading-relaxed">
                As a specialist, independent firm, we operate with minimal off-limits, giving clients broad access to the market and faster results.
              </p>
              <div className="bg-lt-gold/10 p-6 border-l-4 border-lt-gold">
                <h3 className="font-lombard text-xl text-lt-gold mb-4">
                  Why We Exist
                </h3>
                <p className="text-lg text-lt-navy">
                  Lombard Tech delivers a fast, honest, and intelligent approach to hiring. We combine deep market knowledge with tech and AI tools to provide a modern, agile recruitment service, grounded in expertise and built for long-term impact.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Values with Two-Column Layout (Reversed) */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 mb-16 items-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Content - Order reversed for visual rhythm */}
          <div className="order-2 lg:order-1">
            <h3 className="font-lombard text-3xl text-lt-gold mb-8">
              What We Stand For
            </h3>
            <motion.div
              className="grid gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {COMPANY_VALUES.slice(0, 3).map((value, index) => {
                const IconComponent = iconMap[value.icon as keyof typeof iconMap]
                return (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className={cn(
                      "group p-6 bg-lt-ivory hover:bg-lt-gold/10",
                      "border border-lt-navy/10 hover:border-lt-gold",
                      "transition-all duration-300 ease-out",
                      "cursor-pointer rounded-lg"
                    )}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <IconComponent className={cn(
                          "h-6 w-6 text-lt-gold",
                          "group-hover:scale-110 transition-transform duration-300"
                        )} />
                      </div>
                      <div>
                        <h4 className="font-lombard text-lg text-lt-navy mb-2 group-hover:text-lt-gold transition-colors duration-300">
                          {value.title}
                        </h4>
                        <p className="text-lt-slate text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
          
          {/* Image Placeholder */}
          <div className="bg-lt-navy/5 aspect-video w-full rounded-lg order-1 lg:order-2"></div>
        </motion.div>

        {/* What We Want to Be Known For */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-lt-navy p-12 rounded-lg text-center">
            <h3 className="font-lombard text-2xl text-lt-gold mb-6">
              What We Want to Be Known For
            </h3>
            <p className="text-lg text-lt-ivory max-w-3xl mx-auto leading-relaxed">
              A disruptive, fast-growing upstart with the sharpest recruiters in the market. Respected for integrity, trusted for expertise, and liked for how we work.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            variants={staggerItem}
            className="group p-8 bg-lt-ivory hover:bg-lt-gold/10 border border-lt-navy/10 hover:border-lt-gold hover:shadow-lg transition-all duration-300 rounded-lg"
          >
            <Zap className="h-8 w-8 mx-auto text-lt-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-lt-navy mb-2">Fast</div>
            <div className="text-sm font-medium text-lt-slate uppercase tracking-wide">
              Response Times
            </div>
          </motion.div>
          
          <motion.div
            variants={staggerItem}
            className="group p-8 bg-lt-ivory hover:bg-lt-gold/10 border border-lt-navy/10 hover:border-lt-gold hover:shadow-lg transition-all duration-300 rounded-lg"
          >
            <TrendingUp className="h-8 w-8 mx-auto text-lt-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-lt-navy mb-2">Growth</div>
            <div className="text-sm font-medium text-lt-slate uppercase tracking-wide">
              Focused Partnership
            </div>
          </motion.div>
          
          <motion.div
            variants={staggerItem}
            className="group p-8 bg-lt-ivory hover:bg-lt-gold/10 border border-lt-navy/10 hover:border-lt-gold hover:shadow-lg transition-all duration-300 rounded-lg"
          >
            <Award className="h-8 w-8 mx-auto text-lt-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-lt-navy mb-2">Trusted</div>
            <div className="text-sm font-medium text-lt-slate uppercase tracking-wide">
              Reputation
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 