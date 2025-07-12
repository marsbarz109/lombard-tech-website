import * as React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)
    const inputId = id || React.useId()

    const handleFocus = () => setIsFocused(true)
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      setHasValue(!!e.target.value)
      props.onBlur?.(e)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!e.target.value)
      props.onChange?.(e)
    }

    return (
      <div className="relative">
        <input
          ref={ref}
          type={type}
          id={inputId}
          className={cn(
            'block w-full px-4 py-4',
            'bg-lt-navy border border-lt-gold/20',
            'text-lt-ivory placeholder-transparent',
            'focus:border-lt-gold focus:outline-none',
            'transition-all duration-200 ease-out',
            'peer rounded-lg',
            error && 'border-red-400 focus:border-red-400',
            className
          )}
          placeholder={label || ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        
        {label && (
          <motion.label
            htmlFor={inputId}
            className={cn(
              'absolute left-4 transition-all duration-200 ease-out',
              'text-lt-ivory/70 pointer-events-none',
              'peer-placeholder-shown:top-4 peer-placeholder-shown:text-base',
              'peer-focus:top-2 peer-focus:text-xs peer-focus:text-lt-gold',
              (isFocused || hasValue || props.value) && 'top-2 text-xs text-lt-gold',
              error && 'peer-focus:text-red-400'
            )}
            animate={{
              y: (isFocused || hasValue || props.value) ? 0 : 8,
              scale: (isFocused || hasValue || props.value) ? 0.85 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {label} {props.required && '*'}
          </motion.label>
        )}
        
        {error && (
          <motion.p
            className="mt-2 text-sm text-red-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input' 