'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { HERO_WORDS, SITE_CONFIG } from '@/lib/constants'
import { textReveal, textRevealItem, buttonHover } from '@/lib/animations'
import { cn } from '@/lib/utils'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pure-white">
      {/* Subtle parallax background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #0066FF 0%, transparent 50%)`,
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <motion.div
          className="mb-8"
          variants={textReveal}
          initial="hidden"
          animate="visible"
        >
          {HERO_WORDS.map((word, index) => (
            <div key={index} className="overflow-hidden">
              <motion.h1
                className={cn(
                  "hero-heading block",
                  "text-primary-black leading-hero"
                )}
                variants={textRevealItem}
              >
                {word}
              </motion.h1>
            </div>
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="large-body text-text-gray">
            {SITE_CONFIG.description}
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
              href="/contact"
              className={cn(
                "btn-hover group",
                "inline-flex items-center px-8 py-4",
                "bg-primary-black text-pure-white",
                "rounded-none border border-primary-black",
                "text-sm font-semibold tracking-wide",
                "hover:bg-pure-white hover:text-primary-black",
                "transition-all duration-300 ease-out",
                "focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
              )}
            >
              Start Your Journey
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
              href="/about"
              className={cn(
                "group",
                "inline-flex items-center px-8 py-4",
                "bg-transparent text-primary-black",
                "rounded-none border border-primary-black",
                "text-sm font-semibold tracking-wide",
                "hover:bg-primary-black hover:text-pure-white",
                "transition-all duration-300 ease-out",
                "focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
              )}
            >
              <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 1.0 }}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-text-gray tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              className="w-px h-8 bg-text-gray"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-1 h-16 bg-accent-blue opacity-20" />
      <div className="absolute bottom-1/4 right-8 w-1 h-16 bg-accent-blue opacity-20" />
    </section>
  )
} 