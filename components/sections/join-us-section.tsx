'use client'

import { motion } from 'framer-motion'
import { Users, Settings, DollarSign, Building, TrendingUp, MessageCircle, Target, Eye, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const whatWeOffer = [
  {
    icon: Users,
    title: 'Autonomy',
    description: 'Build and run your market without unnecessary process',
  },
  {
    icon: Settings,
    title: 'Tools',
    description: 'Full access to CRM, AI sourcing, video interviewing, and automation',
  },
  {
    icon: DollarSign,
    title: 'Commercial Clarity',
    description: 'A very generous commission scheme, competitive base salary, and transparent terms',
  },
  {
    icon: Building,
    title: 'Professional Environment',
    description: 'Experienced team, lean structure, minimal admin',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    description: 'Scope to shape your desk and help grow the business',
  },
]

const whatWeLookFor = [
  {
    icon: Target,
    title: 'Recruitment experience (contract or perm)',
  },
  {
    icon: MessageCircle,
    title: 'Clear, professional communication',
  },
  {
    icon: Eye,
    title: 'Strong market understanding',
  },
  {
    icon: CheckCircle,
    title: 'Ability to work independently and deliver consistently',
  },
]

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
          <p className="text-xl text-lt-ivory max-w-4xl mx-auto leading-relaxed">
            We're building a recruitment business for people who value independence, efficiency, and professionalism. If you're an experienced recruiter or resourcer looking for more freedom to operate, better tools, a larger cut of your billings, and a focused environment without bureaucracy, we'd be happy to speak.
          </p>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="font-lombard text-3xl text-lt-gold mb-8 text-center">
            What We Offer
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeOffer.map((item, index) => (
              <motion.div
                key={item.title}
                className={cn(
                  "group p-6 bg-lt-navy hover:bg-lt-gold/10",
                  "border border-lt-gold/20 hover:border-lt-gold",
                  "transition-all duration-300 ease-out",
                  "cursor-pointer rounded-lg"
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lt-gold/10 rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-lt-gold" />
                  </div>
                  <div>
                    <h4 className="font-lombard text-lg text-lt-ivory mb-2 group-hover:text-lt-gold transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-lt-ivory/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Look For Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="font-lombard text-3xl text-lt-gold mb-8 text-center">
            What We Look For
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {whatWeLookFor.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-center space-x-4 p-6 bg-lt-gold/10 border border-lt-gold/20 rounded-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-lt-gold/20 rounded-full flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-lt-gold" />
                </div>
                <p className="text-lt-ivory font-medium">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-lombard text-2xl text-lt-gold mb-6">
            Ready to Join Our Team?
          </h3>
          <p className="text-lt-ivory leading-relaxed mb-8 max-w-2xl mx-auto">
            If you're interested in joining a focused, professional recruitment environment where you can make a real impact, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </motion.div>
      </div>
    </section>
  )
} 