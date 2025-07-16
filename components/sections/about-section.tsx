'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Target, Shield, Heart, Unlock } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const companyValues = [
  {
    title: 'Excellence and Accountability',
    description: 'We prioritise quality, speed, and clear communication throughout every search.',
    icon: Target,
  },
  {
    title: 'Integrity',
    description: 'We act with honesty and discretion. Confidentiality and mutual respect guide all our work.',
    icon: Shield,
  },
  {
    title: 'Human-First',
    description: 'Recruitment is about people. We focus on long-term relationships over short-term wins.',
    icon: Users,
  },
]

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="about" className="pb-24 lg:pb-32 bg-lt-navy scroll-mt-20">
      {/* First Section: About + Leadership (Image Left, Content Right) */}
      <motion.div
        className="grid lg:grid-cols-2 items-stretch mb-24 relative"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* About Us Image - Left Side (Full Width) */}
        <div className="relative">
          <div className="h-full min-h-[500px] lg:min-h-[600px] relative overflow-hidden">
            <Image
              src="/images/about-us-img.jpg"
              alt="About Lombard Tech - Professional recruitment team"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
            {/* Enhanced gradient overlay for seamless blending */}
            <div className="absolute inset-0 bg-gradient-to-l from-lt-navy via-lt-navy/95 to-transparent backdrop-blur-[0.5px]" 
                 style={{
                   background: `linear-gradient(to left, 
                     #061129 0%, 
                     rgba(6, 17, 41, 0.98) 5%, 
                     rgba(6, 17, 41, 0.95) 10%, 
                     rgba(6, 17, 41, 0.90) 15%, 
                     rgba(6, 17, 41, 0.82) 20%, 
                     rgba(6, 17, 41, 0.72) 25%, 
                     rgba(6, 17, 41, 0.60) 30%, 
                     rgba(6, 17, 41, 0.46) 35%, 
                     rgba(6, 17, 41, 0.32) 40%, 
                     rgba(6, 17, 41, 0.20) 45%, 
                     rgba(6, 17, 41, 0.10) 50%, 
                     rgba(6, 17, 41, 0.04) 55%, 
                     transparent 60%)`
                 }}>
            </div>
          </div>
        </div>
        
        {/* Content - Right Side */}
        <div className="flex items-center">
          <div className="w-full max-w-2xl mx-auto px-6 lg:px-12 py-16">
            <h2 className="font-lombard text-4xl lg:text-5xl text-lt-gold mb-8">
              About Lombard Tech
            </h2>
            <p className="text-lg text-lt-ivory leading-relaxed mb-12">
              Lombard Tech is a division of Lombard Consulting Group. Our recruiters are experienced, well-connected, and focused on results. We work across Network Engineering, Cloud & Infrastructure, Trading Systems, and the Digital Workplace, covering both contract and permanent hiring, from hands-on roles to leadership. As a specialist and independent firm, we operate with minimal off-limits, giving our clients broader access to the market.
            </p>
            
            {/* Leadership Section */}
            <div>
              <h3 className="font-lombard text-2xl text-lt-gold mb-6">
                Leadership
              </h3>
              <p className="text-lg text-lt-ivory leading-relaxed">
                Lombard Tech was founded by Joseph Marsden, an experienced IT recruiter with a strong track record across the Western European Network, Cloud, and Infrastructure markets. As one of Phaidon International's top billers in Europe, he generated over £1 million in revenue and maintained a recurring book of approximately £50K per month at exit. He later took on a broader commercial and operational role at another international recruitment firm before founding Lombard Tech, a modern and independent alternative.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Positioned at bottom center of this section */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-8 bg-lt-gold/40" />
            <motion.div
              className="w-1.5 h-1.5 bg-lt-gold rounded-full"
              animate={{
                y: [0, 6, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-1 h-1 bg-lt-gold/60 rounded-full"
              animate={{
                y: [0, 4, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                delay: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Second Section: Mission and Values (Full Width) */}
        <motion.div
          className="text-center"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="font-lombard text-3xl lg:text-4xl text-lt-gold mb-8">
            Our Mission and Values
          </h3>
          
          <div className="bg-lt-gold/10 p-8 border border-lt-gold/20 mb-16 rounded-lg">
            <p className="text-xl text-lt-ivory leading-relaxed">
              At Lombard Tech, our mission is to deliver a smarter, faster, and more transparent approach to hiring. We aim to combine market expertise with technology and AI to offer a recruitment service that is modern, agile, and built for long term impact.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={cn(
                  "group p-8 bg-lt-navy hover:bg-lt-gold/10",
                  "border border-lt-gold/20 hover:border-lt-gold",
                  "transition-all duration-300 ease-out",
                  "rounded-lg text-center"
                )}
              >
                <div className="flex flex-col items-center">
                  <div className="flex-shrink-0 mb-6">
                    <value.icon className={cn(
                      "h-12 w-12 text-lt-gold mx-auto",
                      "group-hover:scale-110 transition-transform duration-300"
                    )} />
                  </div>
                  <div>
                    <h4 className="font-lombard text-xl text-lt-ivory mb-4 group-hover:text-lt-gold transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-lt-ivory/80 leading-relaxed">
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