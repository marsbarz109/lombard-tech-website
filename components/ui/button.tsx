import * as React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

const buttonVariants = {
  primary: [
    'bg-company-gold text-deep-navy',
    'border border-company-gold',
    'hover:bg-pure-white hover:text-company-gold',
  ],
  secondary: [
    'bg-deep-navy text-pure-white',
    'border border-deep-navy',
    'hover:bg-company-gold hover:text-deep-navy',
  ],
  outline: [
    'bg-transparent text-deep-navy',
    'border border-deep-navy',
    'hover:bg-deep-navy hover:text-pure-white',
  ],
  ghost: [
    'bg-transparent text-deep-navy',
    'border border-transparent',
    'hover:bg-light-gray',
  ],
}

const sizeVariants = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          'btn-hover',
          'inline-flex items-center justify-center',
          'font-semibold tracking-wide',
          'rounded-none',
          'transition-all duration-300 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-company-gold focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          buttonVariants[variant],
          sizeVariants[size],
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button' 