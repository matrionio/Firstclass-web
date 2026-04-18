'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/utils/constants'
import SectionTitle from '@/components/shared/SectionTitle'
import { useLanguage } from '@/context/LanguageContext'

export default function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-28 bg-primary relative overflow-hidden" aria-labelledby="testimonials-title">

      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      {/* Background quote mark */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 font-serif text-white/[0.015] select-none pointer-events-none leading-none"
        style={{ fontSize: '40vw' }}
        aria-hidden="true"
      >
        "
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-16">
          <SectionTitle
            eyebrow={t.testimonials.eyebrow}
            title={t.testimonials.title}
            subtitle={t.testimonials.subtitle}
            centered
            light
            id="testimonials-title"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-surface border border-border hover:border-secondary/50 p-8 group transition-all duration-400 overflow-hidden"
              style={{ transition: 'border-color 0.4s ease' }}
            >
              {/* Top gold line on hover */}
              <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-secondary transition-all duration-500" />

              {/* Large opening quote */}
              <span
                className="absolute top-4 right-5 font-serif text-6xl text-secondary/10 group-hover:text-secondary/20 transition-colors duration-400 leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-5" aria-label={`Rating: ${testimonial.rating} out of 5`}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={12} className="text-secondary fill-secondary" aria-hidden="true" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-8 font-light italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-secondary/40 mb-4" />

              {/* Author */}
              <div>
                <p className="font-serif font-light text-white text-base" style={{ letterSpacing: '0.02em' }}>
                  {testimonial.name}
                </p>
                <p className="text-secondary text-xs tracking-widest uppercase mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  )
}
