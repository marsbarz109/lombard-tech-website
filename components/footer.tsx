import Link from 'next/link'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG, NAVIGATION_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-navy text-pure-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-black mb-4 block text-company-gold">
              {SITE_CONFIG.logo}
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              {SITE_CONFIG.description}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-company-gold" />
                <a 
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-300 hover:text-company-gold transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-company-gold" />
                <a 
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-gray-300 hover:text-company-gold transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-company-gold" />
                <span className="text-gray-300">
                  {SITE_CONFIG.address}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-company-gold">Navigation</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-company-gold transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-company-gold">Legal & Social</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-company-gold transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-company-gold transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-company-gold transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 bg-gray-800 hover:bg-company-gold",
                  "transition-colors duration-300",
                  "rounded-sm"
                )}
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-company-gold border-opacity-30 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 