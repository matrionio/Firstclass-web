'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { VEHICLES } from '@/utils/constants'
import SectionTitle from '@/components/shared/SectionTitle'
import VehicleCard from '@/components/shared/VehicleCard'
import { useLanguage } from '@/context/LanguageContext'

export default function FleetPreview() {
  const { t } = useLanguage()
  const featuredVehicles = VEHICLES.slice(0, 3)

  return (
    <section className="py-28 bg-primary relative overflow-hidden" aria-labelledby="fleet-preview-title">

      <div className="absolute top-0 left-0 right-0 h-px gold-line" />

      {/* Side label */}
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <div className="w-px h-16 bg-gradient-to-b from-secondary/40 to-transparent" />
        <span
          className="text-secondary/30 text-xs tracking-[0.4em] uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Premium Fleet
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionTitle
            eyebrow={t.fleetPreview.eyebrow}
            title={t.fleetPreview.title}
            subtitle={t.fleetPreview.subtitle}
            id="fleet-preview-title"
            light
          />
          <Link
            href="/fleet"
            className="flex items-center gap-3 text-secondary text-xs font-medium tracking-[0.3em] uppercase hover:gap-5 transition-all duration-300 whitespace-nowrap group"
          >
            {t.fleetPreview.viewAll}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  )
}
