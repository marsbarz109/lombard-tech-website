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
    'bg-lt-gold text-lt-navy',
    'border border-lt-gold',
    'hover:bg-lt-ivory hover:text-lt-navy',
  ],
  secondary: [
    'bg-lt-navy text-lt-ivory',
    'border border-lt-navy',
    'hover:bg-lt-gold hover:text-lt-navy',
  ],
  outline: [
    'bg-transparent text-lt-ivory',
    'border border-lt-ivory',
    'hover:bg-lt-ivory hover:text-lt-navy',
  ],
  ghost: [
    'bg-transparent text-lt-ivory',
    'border border-transparent',
    'hover:bg-lt-gold/10',
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
          'rounded-lg',
          'transition-all duration-300 ease-out',
          'focus:outline-none focus:ring-2 focus:ring-lt-gold focus:ring-offset-2 focus:ring-offset-lt-navy',
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