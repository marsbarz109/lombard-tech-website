'use client'

import { motion } from 'framer-motion'
import { Users, Settings, DollarSign, Building, TrendingUp, MessageCircle, Target, Eye, CheckCircle, Briefcase } from 'lucide-react'
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
            We're building a recruitment business for people who value independence, efficiency, and professionalism.
          </p>
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left Column - Text Content */}
          <div>
            <div className="mb-12">
              <p className="text-lg text-lt-ivory leading-relaxed mb-8">
                If you're an experienced recruiter or resourcer looking for more freedom to operate, better tools, a larger cut of your billings, and a focused environment without bureaucracy, we'd be happy to speak.
              </p>
            </div>

            {/* What We Offer */}
            <div className="mb-12">
              <h3 className="font-lombard text-3xl text-lt-gold mb-6">
                What We Offer
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-lombard text-xl text-lt-ivory mb-3 flex items-center">
                    <Users className="h-5 w-5 text-lt-gold mr-3" />
                    Autonomy
                  </h4>
                  <p className="text-lt-ivory/80 leading-relaxed ml-8">
                    Build and run your market without unnecessary process
                  </p>
                </div>
                <div>
                  <h4 className="font-lombard text-xl text-lt-ivory mb-3 flex items-center">
                    <Settings className="h-5 w-5 text-lt-gold mr-3" />
                    Tools
                  </h4>
                  <p className="text-lt-ivory/80 leading-relaxed ml-8">
                    Full access to CRM, AI sourcing, video interviewing, and automation
                  </p>
                </div>
                <div>
                  <h4 className="font-lombard text-xl text-lt-ivory mb-3 flex items-center">
                    <DollarSign className="h-5 w-5 text-lt-gold mr-3" />
                    Commercial Clarity
                  </h4>
                  <p className="text-lt-ivory/80 leading-relaxed ml-8">
                    A very generous commission scheme, competitive base salary, and transparent terms
                  </p>
                </div>
                <div>
                  <h4 className="font-lombard text-xl text-lt-ivory mb-3 flex items-center">
                    <Building className="h-5 w-5 text-lt-gold mr-3" />
                    Professional Environment
                  </h4>
                  <p className="text-lt-ivory/80 leading-relaxed ml-8">
                    Experienced team, lean structure, minimal admin
                  </p>
                </div>
                <div>
                  <h4 className="font-lombard text-xl text-lt-ivory mb-3 flex items-center">
                    <TrendingUp className="h-5 w-5 text-lt-gold mr-3" />
                    Growth
                  </h4>
                  <p className="text-lt-ivory/80 leading-relaxed ml-8">
                    Scope to shape your desk and help grow the business
                  </p>
                </div>
              </div>
            </div>

            {/* What We Look For */}
            <div className="mb-12">
              <h3 className="font-lombard text-3xl text-lt-gold mb-6">
                What We Look For
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Target className="h-5 w-5 text-lt-gold mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lt-ivory leading-relaxed">
                    Recruitment experience (contract or perm)
                  </p>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="h-5 w-5 text-lt-gold mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lt-ivory leading-relaxed">
                    Clear, professional communication
                  </p>
                </div>
                <div className="flex items-start">
                  <Eye className="h-5 w-5 text-lt-gold mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lt-ivory leading-relaxed">
                    Strong market understanding
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-lt-gold mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-lt-ivory leading-relaxed">
                    Ability to work independently and deliver consistently
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
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
          
          {/* Right Column - Image Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/3] bg-lt-gold/10 rounded-none border border-lt-gold/20 flex items-center justify-center">
              <div className="text-center">
                <Briefcase className="h-16 w-16 text-lt-gold/40 mx-auto mb-4" />
                <p className="text-lt-ivory/60 text-sm">Team image placeholder</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 