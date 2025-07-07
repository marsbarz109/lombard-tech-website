'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { useActiveSection } from '@/lib/hooks/use-active-section'
import { 
  logoFadeIn, 
  navbarScroll, 
  mobileMenuVariants,
  mobileMenuItemsVariants,
  mobileMenuItemVariants 
} from '@/lib/animations'
import { cn } from '@/lib/utils'
import { MobileMenu } from './mobile-menu'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const activeSection = useActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Helper function to check if nav item is active
  const isActiveNavItem = (href: string) => {
    if (href === '/') {
      // Home is active if we're on the home page and at the home section, or just on home page
      return pathname === '/' && (activeSection === 'home' || activeSection === '')
    }
    if (href.startsWith('#')) {
      return pathname === '/' && activeSection === href.substring(1)
    }
    return pathname === href
  }

  // Helper function to handle navigation clicks
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href === '/' && pathname === '/') {
      // If we're on home page and clicking Home, scroll to top
      e.preventDefault()
      const homeElement = document.querySelector('#home')
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else if (href.startsWith('#')) {
      e.preventDefault()
      if (pathname === '/') {
        // We're on home page, can scroll directly
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // We're on a different page, need to go to home page first
        window.location.href = `/${href}`
      }
    }
    // For other cases (navigation between pages), let the default behavior handle it
  }

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:px-8",
          "transition-all duration-300 ease-out",
          isScrolled ? "bg-deep-navy/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        )}
        variants={navbarScroll}
        animate={isScrolled ? 'scrolled' : 'top'}
        initial="top"
      >
        <nav className="mx-auto max-w-screen-2xl flex items-center justify-between">
          {/* Logo */}
          <motion.div
            variants={logoFadeIn}
            initial="hidden"
            animate="visible"
          >
            <Link 
              href="/" 
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo.svg" 
                alt="Lombard Tech" 
                className="h-12"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {item.href.startsWith('#') ? (
                  <a
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-200",
                      "hover:text-company-gold",
                      "after:absolute after:bottom-0 after:left-0 after:h-0.5",
                      "after:bg-company-gold after:transition-all after:duration-300",
                      isActiveNavItem(item.href) ? 
                        "text-company-gold after:w-full" : 
                        "text-pure-white after:w-0 hover:after:w-full"
                    )}
                    onClick={(e) => {
                      handleNavClick(item.href, e)
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-200",
                      "hover:text-company-gold",
                      "after:absolute after:bottom-0 after:left-0 after:h-0.5",
                      "after:bg-company-gold after:transition-all after:duration-300",
                      isActiveNavItem(item.href) ? 
                        "text-company-gold after:w-full" : 
                        "text-pure-white after:w-0 hover:after:w-full"
                    )}
                    onClick={(e) => {
                      handleNavClick(item.href, e)
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/contact"
                className={cn(
                  "btn-hover",
                  "inline-flex items-center px-6 py-3",
                  "bg-company-gold text-deep-navy",
                  "rounded-none border border-company-gold",
                  "text-sm font-medium",
                  "hover:bg-pure-white hover:text-company-gold",
                  "transition-all duration-300 ease-out",
                  "focus:outline-none focus:ring-2 focus:ring-pure-white focus:ring-offset-2",
                  "shadow-md"
                )}
              >
                Submit CV
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className={cn(
                "p-2 rounded-md",
                "hover:bg-company-gold hover:bg-opacity-20 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-company-gold"
              )}
              aria-label="Toggle mobile menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-pure-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-pure-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}