'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/context/LanguageContext'
import { Phone } from 'lucide-react'
import { COMPANY_INFO } from '@/utils/constants'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary" aria-label="Hero section">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: "url('/images/fleet/hero4.png')" }}
        role="presentation"
      />

      {/* Overlay — dark on left (text area), transparent on right (car visible) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      {/* Vertical decorative text */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 z-10"
        aria-hidden="true"
      >
        <span
          className="text-secondary/30 text-xs tracking-[0.4em] uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Driven by Excellence
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-secondary/30 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="max-w-xl">

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-serif font-light text-white leading-none mb-4"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.01em' }}
          >
            {t.hero.title.split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="text-gradient-gold italic">
              {t.hero.title.split(' ').slice(2, 4).join(' ')}
            </span>
            <br />
            <span className="font-light">
              {t.hero.title.split(' ').slice(4).join(' ')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          {t.hero.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-gray-300 font-light tracking-widest text-base uppercase mb-12"
              style={{ letterSpacing: '0.3em' }}
            >
              {t.hero.subtitle}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg">{t.hero.bookRide}</Button>
            </Link>
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 px-6 py-4 border border-white/20 hover:border-secondary text-white hover:text-secondary transition-all duration-300 text-sm tracking-widest uppercase font-medium">
              <Phone size={16} />
              {COMPANY_INFO.phone}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex gap-12 pt-8 border-t border-white/10"
          >
            {[
              { value: '5+', label: t.hero.years },
              { value: '2K+', label: t.hero.clients },
              { value: '24/7', label: t.hero.availability },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-light text-secondary" style={{ letterSpacing: '0.05em' }}>
                  {stat.value}
                </p>
                <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Logo watermark bottom right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-8 hidden lg:block z-10"
        aria-hidden="true"
      >
        <Image
          src="/images/Firstclasss.jpeg"
          alt=""
          width={100}
          height={100}
          className="opacity-20"
          style={{ width: '80px', height: 'auto' }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-14 bg-gradient-to-b from-secondary/60 to-transparent" />
          <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </motion.div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  )
}
