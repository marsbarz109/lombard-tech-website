'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { cn } from '@/lib/utils'

export function JoinUsSection() {
  return (
    <section id="join-us" className="py-24 bg-lt-navy">
      {/* Main Content Section (Content Left, Image Right) */}
      <motion.div
        className="grid lg:grid-cols-2 items-stretch"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Content - Left Side */}
        <div className="flex items-center">
          <div className="w-full max-w-2xl mx-auto px-6 lg:px-12 py-16">
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
              </div>
            </div>
          </div>
        </div>

        {/* Image Placeholder - Right Side (Full Width) */}
        <div className="relative">
          <div className="h-full bg-lt-gold/10 rounded-none border-l border-lt-gold/20 flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Users className="h-16 w-16 text-lt-gold/40 mx-auto mb-4" />
              <p className="text-lt-ivory/60 text-sm">Join us image</p>
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