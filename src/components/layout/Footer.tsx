'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { NAV_LINKS, COMPANY_INFO } from '@/utils/constants'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const navLabels = [t.nav.home, t.nav.services, t.nav.fleet, t.nav.about, t.nav.contact]

  return (
    <footer className="bg-primary relative overflow-hidden" role="contentinfo">

      {/* Top gold line */}
      <div className="h-px gold-line" />

      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px gold-line opacity-20" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="FIRST CLASS LIMO Home" className="inline-block mb-6">
              <Image
                src="/images/Firstclasss.jpeg"
                alt="FIRST CLASS LIMO Logo"
                width={120}
                height={120}
                style={{ width: '90px', height: 'auto' }}
              />
            </Link>
            <p className="text-secondary text-xs tracking-[0.3em] uppercase mb-3 font-medium">
              {t.footer.tagline}
            </p>
            <p className="text-textLight text-sm leading-relaxed">
              {t.footer.description} {COMPANY_INFO.established}.
            </p>
            <p className="text-textLight text-sm mt-1">{t.footer.serving}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-xs font-medium tracking-[0.3em] uppercase mb-6 pb-3 border-b border-border">
              {t.footer.quickLinks}
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {NAV_LINKS.slice(0, 5).map((link, i) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-textLight hover:text-secondary text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-3 h-px bg-textMuted group-hover:bg-secondary group-hover:w-5 transition-all duration-300" />
                      {navLabels[i]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xs font-medium tracking-[0.3em] uppercase mb-6 pb-3 border-b border-border">
              {t.footer.contact}
            </h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-start gap-3 group">
                  <Phone size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-textLight group-hover:text-secondary text-sm transition-colors duration-200">
                    {COMPANY_INFO.phone}
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-start gap-3 group">
                  <Mail size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-textLight group-hover:text-secondary text-sm transition-colors duration-200 break-all">
                    {COMPANY_INFO.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-textLight text-sm">{COMPANY_INFO.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-textLight text-sm leading-relaxed">{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white text-xs font-medium tracking-[0.3em] uppercase mb-6 pb-3 border-b border-border">
              {t.footer.serviceAreas}
            </h3>
            <ul className="space-y-2">
              {t.footer.serviceAreasList.slice(0, 7).map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm text-textLight">
                  <span className="w-1 h-1 bg-secondary flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-textLight text-xs tracking-wider">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. {t.footer.rights}
          </p>
          <p className="text-textMuted text-xs tracking-widest uppercase">
            {t.footer.location}
          </p>
        </div>
      </div>
    </footer>
  )
}
