'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { COMPANY_INFO } from '@/utils/constants'

export default function CtaSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-accent" aria-labelledby="cta-title">

      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Large text watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center font-serif font-light text-white/[0.02] select-none pointer-events-none leading-none overflow-hidden"
        style={{ fontSize: '20vw' }}
        aria-hidden="true"
      >
        FIRST CLASS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-secondary" />
              <span className="text-secondary text-xs tracking-[0.35em] uppercase font-medium">
                {t.cta.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              id="cta-title"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif font-light text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', letterSpacing: '0.02em' }}
            >
              {t.cta.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 leading-relaxed mb-0"
            >
              {t.cta.subtitle}
            </motion.p>
          </div>

          {/* Right: Actions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="flex items-center justify-between px-8 py-5 bg-secondary hover:bg-goldLight text-primary font-semibold text-sm tracking-[0.2em] uppercase transition-all duration-300 group"
            >
              {t.cta.bookRide}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            {/* Phone CTA */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-between px-8 py-5 border border-secondary/30 hover:border-secondary text-white hover:text-secondary transition-all duration-300 group"
            >
              <span className="text-sm tracking-[0.2em] uppercase font-medium">{t.cta.callUs}</span>
              <div className="flex items-center gap-3">
                <Phone size={15} />
                <span className="font-mono text-sm">{COMPANY_INFO.phone}</span>
              </div>
            </a>

            {/* Trust badge */}
            <div className="flex items-center gap-4 pt-2">
              <div className="w-8 h-px bg-secondary/30" />
              <p className="text-textLight text-xs tracking-widest uppercase">Available 24 / 7 — 365 days</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  )
}
