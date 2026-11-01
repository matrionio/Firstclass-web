'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { COMPANY_INFO, SERVICES, VEHICLES } from '@/utils/constants'
import { SERVICE_LANDING_META, ServiceSlug } from '@/utils/serviceLandings'
import VehicleCard from '@/components/shared/VehicleCard'

const serviceKeyBySlug = {
  'airport-transfers': 'airportTransfers',
  'corporate-transportation': 'corporate',
  'special-events': 'specialEvents',
  'city-tours': 'cityTours',
  'hourly-service': 'hourlyService',
  'point-to-point': 'pointToPoint',
} as const

const landingCopyKeyBySlug = {
  'airport-transfers': 'airportTransfers',
  'corporate-transportation': 'corporateTransportation',
  'special-events': 'specialEvents',
  'city-tours': 'cityTours',
  'hourly-service': 'hourlyService',
  'point-to-point': 'pointToPoint',
} as const

export default function ServiceLandingContent({ slug }: { slug: ServiceSlug }) {
  const { t } = useLanguage()
  const meta = SERVICE_LANDING_META[slug]
  const landing = t.serviceLanding[landingCopyKeyBySlug[slug]]
  const service = SERVICES.find((item) => item.slug === slug)!
  const translatedService = t.services[serviceKeyBySlug[slug]]
  const landingVehicles = VEHICLES.filter((vehicle) => meta.vehicleIds.some((id) => id === vehicle.id))

  return (
    <>
      <section className="bg-primary pt-36 pb-24 relative" aria-labelledby="service-landing-title">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-secondary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
              {t.serviceLanding.common.eyebrow}
            </p>
            <h1 id="service-landing-title" className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              {landing.title}
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mb-5">{landing.subtitle}</p>
            <p className="text-gray-400 leading-relaxed max-w-3xl">{landing.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-9">
              <Link
                href={`/contact?service=${slug}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-secondary text-primary hover:bg-goldLight transition-colors text-xs tracking-[0.2em] uppercase font-semibold"
              >
                {t.serviceLanding.common.requestQuote}
                <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 border border-secondary/40 text-white hover:border-secondary hover:text-secondary transition-colors text-xs tracking-[0.2em] uppercase font-semibold"
              >
                <Phone size={16} />
                {t.serviceLanding.common.callUs}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="service-benefits-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                {t.serviceLanding.common.benefitsTitle}
              </p>
              <h2 id="service-benefits-title" className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6">
                {landing.focusTitle}
              </h2>
              <p className="text-textLight leading-relaxed max-w-xl">{landing.focusText}</p>
              <div className="flex items-center gap-2 mt-8 text-sm text-textLight">
                <MapPin size={16} className="text-secondary" />
                <span>{t.serviceLanding.common.areas}</span>
              </div>
            </div>

            <div className="bg-accent p-8 sm:p-10">
              <h3 className="text-xl font-serif font-bold text-primary mb-6">{translatedService.title}</h3>
              <ul className="space-y-4">
                {translatedService.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-textLight leading-relaxed">
                    <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent" aria-labelledby="service-fleet-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-secondary text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              {t.serviceLanding.common.fleetEyebrow}
            </p>
            <h2 id="service-fleet-title" className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-5">
              {t.serviceLanding.common.fleetTitle}
            </h2>
            <p className="text-textLight leading-relaxed">{t.serviceLanding.common.fleetText}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingVehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/fleet" className="inline-flex items-center gap-2 text-secondary text-xs tracking-[0.2em] uppercase font-semibold hover:gap-3 transition-all">
              {t.serviceLanding.common.viewFleet}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary relative" aria-label="Book this service">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-5">{landing.title}</h2>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">{landing.subtitle}</p>
          <Link
            href={`/contact?service=${slug}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-primary hover:bg-goldLight transition-colors text-xs tracking-[0.2em] uppercase font-semibold"
          >
            {t.serviceLanding.common.requestQuote}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
