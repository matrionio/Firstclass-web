'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Plane, Briefcase, Sparkles, Map, Clock, MapPin, LucideIcon, ArrowUpRight } from 'lucide-react'
import { Service } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

const iconMap: Record<string, LucideIcon> = { Plane, Briefcase, Sparkles, Map, Clock, MapPin }

interface ServiceCardProps {
  service: Service
  variant?: 'default' | 'detailed'
  index?: number
}

export default function ServiceCard({ service, variant = 'default', index = 0 }: ServiceCardProps) {
  const { t } = useLanguage()
  const Icon = iconMap[service.icon] ?? MapPin

  const serviceKey = service.id.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) as keyof typeof t.services
  const translated = t.services[serviceKey] ?? { title: service.title, description: service.description, benefits: service.benefits }

  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-surface border border-border hover:border-secondary transition-all duration-400 overflow-hidden cursor-pointer"
      style={{ transition: 'border-color 0.4s ease, transform 0.4s ease' }}
    >
      {/* Number watermark */}
      <span
        className="absolute top-4 right-4 font-serif text-6xl font-light text-white/[0.04] select-none pointer-events-none group-hover:text-secondary/10 transition-colors duration-400"
        aria-hidden="true"
      >
        {num}
      </span>

      {/* Gold top accent line */}
      <div className="h-px w-0 group-hover:w-full bg-secondary transition-all duration-500" />

      <div className="p-8">
        {/* Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-secondary/50 transition-colors duration-300">
            <Icon size={20} className="text-secondary" />
          </div>
          <span className="text-secondary/40 font-serif text-sm tracking-widest">{num}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif font-light text-text text-xl mb-3 leading-snug" style={{ letterSpacing: '0.02em' }}>
          {translated.title}
        </h3>

        {/* Description */}
        <p className="text-textLight text-sm leading-relaxed mb-6">{translated.description}</p>

        {/* Benefits (detailed variant) */}
        {variant === 'detailed' && (
          <ul className="space-y-2 mb-6">
            {translated.benefits.map((benefit: string) => (
              <li key={benefit} className="flex items-center gap-3 text-sm text-textLight">
                <span className="w-1 h-1 bg-secondary flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-secondary text-xs tracking-[0.2em] uppercase font-medium hover:gap-3 transition-all duration-300 group/link"
        >
          {t.servicesPreview.bookNow}
          <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  )
}
