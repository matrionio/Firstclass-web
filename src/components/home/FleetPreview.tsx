'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Luggage, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { VEHICLES } from '@/utils/constants'
import SectionTitle from '@/components/shared/SectionTitle'
import VehicleCard from '@/components/shared/VehicleCard'
import { useLanguage } from '@/context/LanguageContext'

export default function FleetPreview() {
  const { t } = useLanguage()

  const featured = VEHICLES.find(v => v.id === 'audi-s8')!
  const secondary = [
    VEHICLES.find(v => v.id === 'cadillac-escalade')!,
    VEHICLES.find(v => v.id === 'cadillac-lyriq')!,
  ]

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

        {/* Asymmetric layout: featured left (60%) + two stacked right (40%) */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">

          {/* Featured Cadillac Escalade */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden bg-surface border border-border hover:border-secondary"
            style={{ minHeight: '540px', transition: 'border-color 0.4s ease' }}
          >
            <Image
              src={featured.images[0]}
              alt={`${featured.name} — ${featured.category}`}
              fill
              className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/97 via-black/40 to-transparent" />

            {/* Top hover line */}
            <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-secondary transition-all duration-500" />

            {/* Badges */}
            <span className="absolute top-5 left-5 bg-secondary text-primary text-xs font-semibold px-3 py-1 tracking-[0.2em] uppercase">
              {featured.category}
            </span>
            <span className="absolute top-5 right-5 border border-secondary/60 text-secondary text-xs font-medium px-3 py-1 tracking-[0.15em] uppercase">
              ★ Featured
            </span>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-secondary text-xs tracking-widest uppercase mb-2">{featured.model}</p>
              <h3
                className="font-serif font-light text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', letterSpacing: '0.02em' }}
              >
                {featured.name}
              </h3>

              <div className="flex flex-wrap items-center gap-5 mb-7 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-secondary" />
                  <span>{featured.capacity} {t.fleetPage.passengers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Luggage size={14} className="text-secondary" />
                  <span>{featured.luggage} {t.fleetPage.luggage}</span>
                </div>
                {featured.amenities.slice(0, 2).map(a => (
                  <span key={a} className="text-xs border border-white/10 text-gray-400 px-2 py-0.5">{a}</span>
                ))}
              </div>

              <Link
                href={`/contact?vehicle=${encodeURIComponent(featured.name)}`}
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-secondary hover:bg-goldLight text-primary font-semibold text-xs tracking-[0.25em] uppercase transition-all duration-300 group/btn"
              >
                {t.fleetPage.bookVehicle}
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* Secondary vehicles stacked */}
          <div className="flex flex-col gap-6">
            {secondary.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index + 1} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px gold-line" />
    </section>
  )
}
