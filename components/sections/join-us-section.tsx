'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function JoinUsSection() {
  return (
    <section id="join-us" className="py-24 bg-lt-navy">
      {/* Main Content Section (Content Left, Image Right on Desktop, Image Above Content on Mobile) */}
      <motion.div
        className="grid lg:grid-cols-5 items-stretch"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Join Us Image - Mobile: Above content, Desktop: Right Side (2 columns) */}
        <div className="lg:col-span-2 lg:order-2 relative">
          <div className="h-full min-h-[300px] lg:min-h-[400px] relative overflow-hidden">
            <Image
              src="/images/join-us-img.jpg"
              alt="Join the Lombard Tech team"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              priority={false}
            />
            {/* Enhanced gradient overlay for seamless blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-lt-navy via-lt-navy/95 to-transparent backdrop-blur-[0.5px] lg:block hidden" 
                 style={{
                   background: `linear-gradient(to right, 
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
            {/* Mobile gradient overlay - bottom blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-lt-navy via-lt-navy/95 to-transparent backdrop-blur-[0.5px] lg:hidden" 
                 style={{
                   background: `linear-gradient(to top, 
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

        {/* Content - Mobile: Below image, Desktop: Left Side (3 columns) */}
        <div className="lg:col-span-3 lg:order-1 flex items-center">
          <div className="w-full px-6 lg:px-12 py-16">
            <h2 className="font-lombard text-4xl lg:text-5xl text-lt-gold mb-8">
              Join the Team
            </h2>
            <p className="text-lg text-lt-ivory leading-relaxed mb-12">
              If you're an experienced recruiter or resourcer looking for higher earnings, greater autonomy, and the chance to build your market without bureaucracy, we would be very keen to speak. We offer the platform, support, and incentives to help you maximise your performance and take your career to the next level.
            </p>
            
            {/* What We Look For Section */}
            <div className="mb-12">
              <h3 className="font-lombard text-2xl text-lt-gold mb-6">
                What we look for
              </h3>
              <p className="text-lg text-lt-ivory leading-relaxed">
                We are assembling a top-tier team of recruiters who set the standard in their markets. We want individuals with a clear track record of success in recruitment, deep market knowledge in a complementary sector, and the gravitas, charisma, and communication skills to influence senior stakeholders.
              </p>
            </div>

            {/* What We Offer Section */}
            <div>
              <h3 className="font-lombard text-2xl text-lt-gold mb-6">
                What we offer:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    Excellent remuneration
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    A very generous commission scheme
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    Equity participation for high performers
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    Full autonomy to build and run your market, free from bureaucracy
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    Access to state-of-the-art CRM, AI-driven sourcing tools, video interviewing, automation, and a brand-new tech stack
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    A supportive, high-performing working environment that values focus, independence, and success
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    A brand that's positioning itself as one of the most exciting upstarts in the industry
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    We offer structured, hands-on training in-house, complemented by external coaching and specialist courses to deepen expertise and accelerate performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Call to Action - Centered */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="/contact"
            className={cn(
              "btn-hover group",
              "inline-flex items-center px-8 py-4",
              "bg-lt-gold text-lt-navy",
              "rounded-none border border-lt-gold",
              "text-sm font-semibold tracking-wide",
              "hover:bg-lt-ivory hover:text-lt-navy",
              "transition-all duration-300 ease-out",
              "focus:outline-none focus:ring-2 focus:ring-lt-gold focus:ring-offset-2",
              "shadow-lg hover:shadow-xl"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="mailto:careers@lombard-tech.io"
            className={cn(
              "group",
              "inline-flex items-center px-8 py-4",
              "bg-transparent text-lt-ivory",
              "rounded-none border border-lt-ivory",
              "text-sm font-semibold tracking-wide",
              "hover:bg-lt-ivory hover:text-lt-navy",
              "transition-all duration-300 ease-out",
              "focus:outline-none focus:ring-2 focus:ring-lt-ivory focus:ring-offset-2",
              "shadow-lg hover:shadow-xl"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Your CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 