'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/utils/constants'
import SectionTitle from '@/components/shared/SectionTitle'
import ServiceCard from '@/components/shared/ServiceCard'
import { useLanguage } from '@/context/LanguageContext'

export default function ServicesPreview() {
  const { t } = useLanguage()
  const previewServices = SERVICES.slice(0, 4)

  return (
    <section className="py-28 bg-accent relative overflow-hidden" aria-labelledby="services-preview-title">

      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      {/* Background text watermark */}
      <div
        className="absolute bottom-0 left-0 font-serif font-light text-white/[0.02] select-none pointer-events-none leading-none"
        style={{ fontSize: '18vw' }}
        aria-hidden="true"
      >
        FIRST CLASS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionTitle
            eyebrow={t.servicesPreview.eyebrow}
            title={t.servicesPreview.title}
            subtitle={t.servicesPreview.subtitle}
            id="services-preview-title"
            light
          />
          <Link
            href="/services"
            className="flex items-center gap-3 text-secondary text-xs font-medium tracking-[0.3em] uppercase hover:gap-5 transition-all duration-300 whitespace-nowrap group"
          >
            {t.servicesPreview.viewAll}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {previewServices.map((service, index) => (
            <div key={service.id} className="bg-accent">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  )
}
