'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function JoinUsSection() {
  return (
    <section id="join-us" className="py-24 bg-lt-navy">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-lombard text-4xl sm:text-5xl text-lt-gold mb-6">
            Join The Team
          </h2>
          <p className="text-lg text-lt-ivory max-w-4xl mx-auto leading-relaxed">
            We're building a recruitment business for people who value independence, efficiency, and professionalism. If you're an experienced recruiter or resourcer looking for more freedom to operate, better tools, a larger cut of your billings, and a focused environment without bureaucracy, we'd be happy to speak.
          </p>
        </motion.div>

        {/* Two Column Layout for What We Offer and What We Look For - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            {/* What We Offer - Left Column */}
            <div>
              <h3 className="font-lombard text-3xl text-lt-gold mb-6 text-left">
                What We Offer
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    <strong className="font-semibold">Autonomy:</strong> Build and run your market without unnecessary process
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    <strong className="font-semibold">Tools:</strong> Full access to CRM, AI sourcing, video interviewing, and automation
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    <strong className="font-semibold">Commercial Clarity:</strong> A very generous commission scheme, competitive base salary, and transparent terms
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    <strong className="font-semibold">Professional Environment:</strong> Experienced team, lean structure, minimal admin
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    <strong className="font-semibold">Growth:</strong> Scope to shape your desk and help grow the business
                  </p>
                </div>
              </div>
            </div>

            {/* What We Look For - Right Column (shifted right) */}
            <div className="ml-8">
              <h3 className="font-lombard text-3xl text-lt-gold mb-6 text-left">
                What We Look For
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    Recruitment experience (contract or perm)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    Clear, professional communication
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    Strong market understanding
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-lt-gold mr-3 mt-1">•</span>
                  <p className="text-lg text-lt-ivory leading-relaxed">
                    Ability to work independently and deliver consistently
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action - Centered */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
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