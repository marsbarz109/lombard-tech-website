'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'
import { HERO_WORDS, HERO_SPECIALIZATIONS, SITE_CONFIG } from '@/lib/constants'
import { textReveal, textRevealItem, buttonHover } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentSpecialization, setCurrentSpecialization] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Typing animation for specializations
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentSpecialization((prev) => (prev + 1) % HERO_SPECIALIZATIONS.length)
        setIsTyping(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pure-white">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'blur(1.5px)',
            transform: 'scale(1.05)', // Slight scale to hide any edge artifacts from blur
          }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(10, 22, 40, 0.85) 0%, rgba(10, 22, 40, 0.75) 100%)'
          }}
        />
      </div>

      {/* Subtle parallax background - now with reduced opacity since we have video */}
      <div 
        className="absolute inset-0 z-20 opacity-3"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #0066FF 0%, transparent 50%)`,
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      />

      <div className="relative z-30 max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
        {/* Main Headline */}
        <motion.div
          className="mb-8"
          variants={textReveal}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-pure-white leading-tight mb-4 drop-shadow-lg"
              variants={textRevealItem}
            >
              Lombard Tech
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-accent-blue leading-tight mb-8 drop-shadow-md"
              variants={textRevealItem}
            >
              Decisive hiring, delivered with clarity and integrity.
            </motion.div>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="large-body text-pure-white mb-6 drop-shadow-md">
            {SITE_CONFIG.description}
          </p>
          <p className="regular-body text-gray-200 drop-shadow-sm">
            Our recruiters are experienced, well-connected, and focused on results. We work across Infrastructure and Cloud, Cybersecurity, Data, and Software Development — covering both contract and permanent hiring, from hands-on roles to leadership.
          </p>
          <p className="regular-body text-gray-200 mt-4 drop-shadow-sm">
            As a specialist, independent firm, we operate with minimal off-limits, giving clients broad access to the market and faster results.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          {/* Primary CTA */}
          <motion.div
            variants={buttonHover}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="#services"
              className={cn(
                "btn-hover group",
                "inline-flex items-center px-8 py-4",
                "bg-company-gold text-deep-navy",
                "rounded-none border border-company-gold",
                "text-sm font-semibold tracking-wide",
                "hover:bg-pure-white hover:text-company-gold",
                "transition-all duration-300 ease-out",
                "focus:outline-none focus:ring-2 focus:ring-pure-white focus:ring-offset-2",
                "shadow-lg hover:shadow-xl"
              )}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            variants={buttonHover}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            <Link
              href="/contact"
              className={cn(
                "group",
                "inline-flex items-center px-8 py-4",
                "bg-transparent text-pure-white",
                "rounded-none border border-pure-white",
                "text-sm font-semibold tracking-wide",
                "hover:bg-pure-white hover:text-deep-navy",
                "transition-all duration-300 ease-out",
                "focus:outline-none focus:ring-2 focus:ring-company-gold focus:ring-offset-2",
                "shadow-lg hover:shadow-xl"
              )}
            >
              <Upload className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Submit Your CV
            </Link>
          </motion.div>
        </motion.div>


      </div>

      {/* Decorative Elements - now with white/light colors for contrast */}
      <div className="absolute top-1/4 left-8 w-1 h-16 bg-pure-white opacity-30 z-40" />
      <div className="absolute bottom-1/4 right-8 w-1 h-16 bg-pure-white opacity-30 z-40" />
    </section>
  )
} 