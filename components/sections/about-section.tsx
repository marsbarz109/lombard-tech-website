'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Shield, Users } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'

const companyValues = [
  {
    title: 'Excellence and Accountability',
    description: 'We prioritise quality, speed, and clear communication throughout every assignment.',
    icon: Target,
  },
  {
    title: 'Integrity',
    description: 'We act with honesty and discretion. Confidentiality and mutual respect guide all our work.',
    icon: Shield,
  },
  {
    title: 'Human First',
    description: 'Recruitment is about people. We focus on long term relationships over short term wins.',
    icon: Users,
  },
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="about" className="py-24 lg:py-32 bg-lt-navy">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header with Two-Column Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 mb-16 items-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-lt-gold/10 rounded-none border border-lt-gold/20 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-16 w-16 text-lt-gold/40 mx-auto mb-4" />
                <p className="text-lt-ivory/60 text-sm">About us image</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="font-lombard text-4xl lg:text-5xl text-lt-gold mb-8">
              About Lombard Tech
            </h2>
            <p className="text-lg text-lt-ivory leading-relaxed">
              Our recruiters are experienced, well connected, and focused on results. We work across Infrastructure and Cloud, Cybersecurity, Data, and Software Development, covering both contract and permanent hiring, from hands-on roles to leadership. As a specialist and independent firm, we operate with minimal off limits. This gives clients broader access to the market and faster results.
            </p>
          </div>
        </motion.div>

        {/* Leadership Section with Two-Column Layout (Reversed) */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 mb-16 items-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Content - Order reversed for visual rhythm */}
          <div className="order-2 lg:order-1">
            <h3 className="font-lombard text-3xl text-lt-gold mb-6">
              Leadership
            </h3>
            <p className="text-lg text-lt-ivory leading-relaxed">
              Lombard Tech was founded by Joseph Marsden, an experienced IT recruiter with a strong track record across the Western European Network, Cloud, and Infrastructure markets. As one of Phaidon International's top billers in Europe, he generated over £1 million in revenue and maintained a recurring book of approximately £50K per month at exit. He later took on a broader commercial and operational role at another international recruitment firm before founding Lombard Tech as an independent and modern alternative.
            </p>
          </div>
          
          {/* Image Placeholder */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] bg-lt-gold/10 rounded-none border border-lt-gold/20 flex items-center justify-center">
              <div className="text-center">
                <Target className="h-16 w-16 text-lt-gold/40 mx-auto mb-4" />
                <p className="text-lt-ivory/60 text-sm">Leadership image</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission and Values Section */}
        <motion.div
          className="mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="font-lombard text-3xl text-lt-gold mb-8 text-center">
            Our Mission and Values
          </h3>
          
          <div className="bg-lt-gold/10 p-8 border border-lt-gold/20 mb-12">
            <p className="text-lg text-lt-ivory leading-relaxed text-center">
              At Lombard Tech, our mission is to deliver a smarter, faster, and more transparent approach to hiring. We aim to combine market expertise with technology and AI to offer a recruitment service that is modern, agile, and built for long term impact.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={cn(
                  "group p-6 bg-lt-navy hover:bg-lt-gold/10",
                  "border border-lt-gold/20 hover:border-lt-gold",
                  "transition-all duration-300 ease-out",
                  "cursor-pointer rounded-lg"
                )}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex-shrink-0 mb-4">
                    <value.icon className={cn(
                      "h-8 w-8 text-lt-gold",
                      "group-hover:scale-110 transition-transform duration-300"
                    )} />
                  </div>
                  <div>
                    <h4 className="font-lombard text-xl text-lt-ivory mb-3 group-hover:text-lt-gold transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-lt-ivory/80 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 