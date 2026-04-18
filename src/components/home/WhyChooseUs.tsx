'use client'

import { motion } from 'framer-motion'
import { UserCheck, Car, Clock, DollarSign, Shield, Star, LucideIcon } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const iconMap: Record<string, LucideIcon> = { UserCheck, Car, Clock, DollarSign, Shield, Star }
const iconKeys = ['UserCheck', 'Car', 'Clock', 'DollarSign', 'Shield', 'Star']

export default function WhyChooseUs() {
  const { t } = useLanguage()

  const items = [
    t.whyUs.items.chauffeurs,
    t.whyUs.items.fleet,
    t.whyUs.items.availability,
    t.whyUs.items.rates,
    t.whyUs.items.insured,
    t.whyUs.items.experience,
  ]

  return (
    <section className="py-28 bg-accent relative overflow-hidden" aria-labelledby="why-choose-us-title">

      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-secondary" />
              <p className="text-secondary text-xs font-medium tracking-[0.35em] uppercase">
                {t.whyUs.eyebrow}
              </p>
            </div>
            <h2
              id="why-choose-us-title"
              className="font-serif font-light text-white leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '0.02em' }}
            >
              {t.whyUs.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-end"
          >
            <p className="text-gray-400 text-base leading-relaxed border-l border-secondary/30 pl-6">
              {t.whyUs.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((item, index) => {
            const Icon = iconMap[iconKeys[index]] ?? Star
            const num = String(index + 1).padStart(2, '0')

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative bg-accent p-8 group hover:bg-surface transition-colors duration-300 overflow-hidden"
              >
                {/* Number watermark */}
                <span
                  className="absolute bottom-2 right-4 font-serif text-7xl font-light text-white/[0.03] select-none pointer-events-none group-hover:text-secondary/5 transition-colors duration-500"
                  aria-hidden="true"
                >
                  {num}
                </span>

                {/* Top accent */}
                <div className="h-px w-0 group-hover:w-full bg-secondary transition-all duration-500 absolute top-0 left-0" />

                <Icon size={22} className="text-secondary mb-5" />
                <h3 className="font-serif font-light text-white text-lg mb-2" style={{ letterSpacing: '0.02em' }}>
                  {item.title}
                </h3>
                <p className="text-textLight text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  )
}
