'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
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
            filter: 'blur(0.5px)',
            transform: 'scale(1.05)',
          }}
        >
          <source src="/videos/hero-video-hd.mp4" type="video/mp4" />
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
        {/* Logo */}
        <motion.div
          className="mb-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            src="/lombard-tech-logo.png" 
            alt="Lombard Tech"
            className="mx-auto max-w-[300px] sm:max-w-[450px] w-full h-auto drop-shadow-lg"
          />
        </motion.div>

        {/* Motto Line - Fades in 0.6s after logo */}
        <motion.p
          className="font-lombard text-xl sm:text-2xl text-lt-gold italic mb-12 drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
        >
          Decisive hiring, delivered with clarity and integrity
        </motion.p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-1 h-16 bg-lt-ivory opacity-30 z-40" />
      <div className="absolute bottom-1/4 right-8 w-1 h-16 bg-lt-ivory opacity-30 z-40" />
    </section>
  )
} 