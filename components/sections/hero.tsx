'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Enhanced video loading and autoplay
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const attemptPlay = async () => {
      try {
        // Ensure video is muted for autoplay to work
        video.muted = true
        await video.play()
        setVideoPlaying(true)
      } catch (error) {
        console.log('Autoplay failed:', error)
        // Fallback: try to play on user interaction
        const playOnInteraction = () => {
          video.play().then(() => {
            setVideoPlaying(true)
            document.removeEventListener('touchstart', playOnInteraction)
            document.removeEventListener('click', playOnInteraction)
          }).catch(console.error)
        }
        
        document.addEventListener('touchstart', playOnInteraction, { once: true })
        document.addEventListener('click', playOnInteraction, { once: true })
      }
    }

    // Use intersection observer to start video when hero is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.paused) {
            setTimeout(() => {
              attemptPlay()
            }, 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    // Initial play attempt
    if (video.readyState >= 3) {
      attemptPlay()
    } else {
      video.addEventListener('canplay', attemptPlay, { once: true })
    }

    return () => {
      observer.disconnect()
      document.removeEventListener('touchstart', () => {})
      document.removeEventListener('click', () => {})
    }
  }, [])

  const handleVideoLoad = () => {
    setVideoLoaded(true)
  }

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lt-ivory">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* First frame poster/fallback background */}
        <div 
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat",
            "transition-opacity duration-1000",
            videoLoaded ? "opacity-0" : "opacity-100"
          )}
          style={{
            backgroundImage: "url('/images/hero-poster.jpg')", // First frame of video
            filter: 'blur(0.5px)',
            transform: 'scale(1.05)',
          }}
        />
        
        {/* Video element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="metadata"
          poster="/images/hero-poster.jpg"
          onCanPlay={handleVideoLoad}
          onLoadedData={handleVideoLoad}
          webkit-playsinline="true"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            videoLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{
            filter: 'blur(0.5px)',
            transform: 'scale(1.05)',
          }}
        >
          <source src="/videos/hero-video-hd.mp4" type="video/mp4" />
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
      {!isMobile && (
        <div 
          className="absolute inset-0 z-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 196, 158, 0.15) 0%, transparent 50%)`,
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        />
      )}

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
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <div className="w-px h-12 bg-lt-ivory opacity-40" />
          <motion.div
            className="w-2 h-2 bg-lt-gold rounded-full"
            animate={{
              y: [0, 8, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  )
} 