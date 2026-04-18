'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const base =
      'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:ring-offset-1 focus:ring-offset-primary disabled:opacity-40 disabled:cursor-not-allowed tracking-[0.2em] uppercase'

    const variants = {
      primary:
        'bg-secondary text-primary hover:bg-goldLight focus:ring-secondary',
      secondary:
        'bg-surface text-white border border-border hover:border-secondary hover:text-secondary focus:ring-secondary',
      outline:
        'bg-transparent text-secondary border border-secondary/50 hover:bg-secondary hover:border-secondary hover:text-primary focus:ring-secondary',
      ghost:
        'bg-transparent text-white/70 hover:text-secondary focus:ring-secondary',
    }

    const sizes = {
      sm: 'px-5 py-2.5 text-xs',
      md: 'px-6 py-3 text-xs',
      lg: 'px-8 py-4 text-xs',
    }

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
