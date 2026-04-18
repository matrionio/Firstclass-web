'use client'

import { motion } from 'framer-motion'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  id?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  id,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7 }}
      className={centered ? 'text-center' : ''}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
          <span className="w-8 h-px bg-secondary" />
          <p className="text-secondary text-xs font-medium tracking-[0.35em] uppercase">
            {eyebrow}
          </p>
          <span className="w-8 h-px bg-secondary" />
        </div>
      )}
      <h2
        id={id}
        className={`font-serif font-light leading-tight ${
          light ? 'text-white' : 'text-text'
        }`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '0.02em' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 leading-relaxed max-w-2xl text-base ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-gray-400' : 'text-textLight'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
