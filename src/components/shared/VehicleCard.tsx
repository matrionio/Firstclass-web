'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Luggage, Wifi, ArrowUpRight } from 'lucide-react'
import { Vehicle } from '@/types'
import { useLanguage } from '@/context/LanguageContext'

interface VehicleCardProps {
  vehicle: Vehicle
  index?: number
}

export default function VehicleCard({ vehicle, index = 0 }: VehicleCardProps) {
  const { t } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-surface border border-border hover:border-secondary overflow-hidden"
      style={{ transition: 'border-color 0.4s ease' }}
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden bg-black">
        <Image
          src={vehicle.images[0]}
          alt={`${vehicle.name} — ${vehicle.category}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-secondary text-primary text-xs font-semibold px-3 py-1 tracking-[0.2em] uppercase">
          {vehicle.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name & model */}
        <div className="mb-4">
          <h3 className="font-serif font-light text-text text-xl leading-tight" style={{ letterSpacing: '0.02em' }}>
            {vehicle.name}
          </h3>
          <p className="text-secondary text-xs tracking-widest uppercase mt-1">{vehicle.model}</p>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-5 py-4 border-y border-border mb-4">
          <div className="flex items-center gap-2 text-sm text-textLight">
            <Users size={14} className="text-secondary" />
            <span>{vehicle.capacity} {t.fleetPage.passengers}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-textLight">
            <Luggage size={14} className="text-secondary" />
            <span>{vehicle.luggage} {t.fleetPage.luggage}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-textLight">
            <Wifi size={14} className="text-secondary" />
            <span>WiFi</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {vehicle.amenities.slice(0, 3).map((amenity) => (
            <span key={amenity} className="text-xs border border-border text-textLight px-2 py-1">
              {amenity}
            </span>
          ))}
          {vehicle.amenities.length > 3 && (
            <span className="text-xs border border-border text-textLight px-2 py-1">
              +{vehicle.amenities.length - 3}
            </span>
          )}
        </div>

        {/* Book button */}
        <Link
          href={`/contact?vehicle=${encodeURIComponent(vehicle.name)}`}
          className="flex items-center justify-between w-full px-5 py-3 bg-secondary/10 border border-secondary/30 hover:bg-secondary hover:border-secondary text-secondary hover:text-primary transition-all duration-300 text-xs tracking-[0.2em] uppercase font-semibold group/btn"
        >
          {t.fleetPage.bookVehicle}
          <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  )
}
