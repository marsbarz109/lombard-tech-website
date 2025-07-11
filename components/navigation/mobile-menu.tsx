'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { NAVIGATION_ITEMS, SITE_CONFIG } from '@/lib/constants'
import { useActiveSection } from '@/lib/hooks/use-active-section'
import { 
  mobileMenuVariants,
  mobileMenuItemsVariants,
  mobileMenuItemVariants 
} from '@/lib/animations'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname()
  const activeSection = useActiveSection()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
      onClose()
      const homeElement = document.querySelector('#home')
      if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else if (href.startsWith('#')) {
      e.preventDefault()
      onClose()
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
    } else {
      // For navigation between pages, close menu and let default behavior handle it
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-lt-navy bg-opacity-75 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Mobile Menu */}
          <motion.div
            className={cn(
              "fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm",
              "bg-lt-navy shadow-2xl lg:hidden",
              "flex flex-col"
            )}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Menu Header */}
            <div className="p-6 border-b border-lt-gold border-opacity-30">
              <Link 
                href="/" 
                className="text-xl font-black text-lt-gold"
                onClick={onClose}
              >
                {SITE_CONFIG.logo}
              </Link>
            </div>

            {/* Navigation Items */}
            <motion.nav
              className="flex-1 px-6 py-8"
              variants={mobileMenuItemsVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="space-y-6">
                {NAVIGATION_ITEMS.map((item) => (
                  <motion.li key={item.href} variants={mobileMenuItemVariants}>
                    {item.href.startsWith('#') ? (
                      <a
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(item.href, e)
                        }}
                        className={cn(
                          "block text-lg font-medium py-2",
                          "transition-colors duration-200",
                          "hover:text-lt-gold",
                          isActiveNavItem(item.href) ? 
                            "text-lt-gold" : 
                            "text-lt-ivory"
                        )}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(item.href, e)
                        }}
                        className={cn(
                          "block text-lg font-medium py-2",
                          "transition-colors duration-200",
                          "hover:text-lt-gold",
                          isActiveNavItem(item.href) ? 
                            "text-lt-gold" : 
                            "text-lt-ivory"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            {/* CTA Section */}
            <motion.div
              className="p-6 border-t border-lt-gold border-opacity-30"
              variants={mobileMenuItemVariants}
            >
              <Link
                href="/contact"
                onClick={onClose}
                className={cn(
                  "btn-hover w-full",
                  "inline-flex items-center justify-center px-6 py-4",
                  "bg-lt-gold text-lt-navy",
                  "rounded-none border border-lt-gold",
                  "text-sm font-medium",
                  "hover:bg-lt-ivory hover:text-lt-navy",
                  "transition-all duration-300 ease-out",
                  "focus:outline-none focus:ring-2 focus:ring-lt-ivory focus:ring-offset-2"
                )}
              >
                Submit CV
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="p-6 bg-lt-navy bg-opacity-50 text-center border-t border-lt-gold border-opacity-20"
              variants={mobileMenuItemVariants}
            >
              <p className="text-sm text-lt-ivory/80 mb-2">
                Get in touch
              </p>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-lt-gold hover:text-lt-ivory transition-colors duration-200"
              >
                {SITE_CONFIG.email}
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
} 