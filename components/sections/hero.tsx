'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'
import { buttonHover } from '@/lib/animations'
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lt-ivory">
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
            transform: 'scale(1.05)',
          }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Navy Gradient Overlay */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(6, 17, 41, 0.85) 0%, rgba(6, 17, 41, 0.75) 100%)'
          }}
        />
      </div>

      {/* Radial gradient cursor parallax background with lt-gold */}
      <div 
        className="absolute inset-0 z-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 196, 158, 0.15) 0%, transparent 50%)`,
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      />

      <div className="relative z-30 max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
        {/* Main Headline */}
        <motion.h1
          className="font-lombard text-7xl sm:text-8xl text-lt-gold tracking-tight drop-shadow mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Lombard Tech
        </motion.h1>

        {/* Motto Line - Fades in 0.6s after H1 */}
        <motion.p
          className="font-lombard text-xl sm:text-2xl text-lt-gold italic mb-12 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          Decisive hiring, delivered with clarity and integrity
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
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
                "bg-lt-gold text-lt-navy",
                "rounded-none border border-lt-gold",
                "text-sm font-semibold tracking-wide",
                "hover:bg-lt-ivory hover:text-lt-navy",
                "transition-all duration-300 ease-out",
                "focus:outline-none focus:ring-2 focus:ring-lt-ivory focus:ring-offset-2",
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
                "bg-transparent text-lt-ivory",
                "rounded-none border border-lt-ivory",
                "text-sm font-semibold tracking-wide",
                "hover:bg-lt-ivory hover:text-lt-navy",
                "transition-all duration-300 ease-out",
                "focus:outline-none focus:ring-2 focus:ring-lt-gold focus:ring-offset-2",
                "shadow-lg hover:shadow-xl"
              )}
            >
              <Upload className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Submit Your CV
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-1 h-16 bg-lt-ivory opacity-30 z-40" />
      <div className="absolute bottom-1/4 right-8 w-1 h-16 bg-lt-ivory opacity-30 z-40" />
    </section>
  )
} 