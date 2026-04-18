'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, COMPANY_INFO } from '@/utils/constants'
import { useLanguage } from '@/context/LanguageContext'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { lang, setLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  const navLabels = [t.nav.home, t.nav.services, t.nav.fleet, t.nav.about, t.nav.contact, t.nav.blog]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgba(8,8,8,0.98)' : 'rgba(8,8,8,0.7)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid rgba(201,169,97,0.15)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Top gold line */}
      <div className="h-px gold-line opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '105px' }}>

          {/* Logo */}
          <Link href="/" aria-label="FIRST CLASS LIMO Home">
            <Image
              src="/images/Firstclasss.jpeg"
              alt="First Class Logo"
              width={300}
              height={100}
              style={{ height: '100px', width: 'auto', display: 'block' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: pathname === link.href ? '#C9A961' : 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  position: 'relative',
                }}
                onMouseEnter={e => { if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = '#C9A961' }}
                onMouseLeave={e => { if (pathname !== link.href) (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}
              >
                {navLabels[i]}
                {pathname === link.href && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: '#C9A961',
                  }} />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: Lang + Phone */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Language toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              {(['en', 'fr'] as const).map((l, i) => (
                <>
                  {i > 0 && <span key={`sep-${l}`} style={{ color: '#333', fontSize: '11px', padding: '0 2px' }}>|</span>}
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      color: lang === l ? '#C9A961' : 'rgba(255,255,255,0.35)',
                      padding: '4px 6px',
                      transition: 'color 0.2s',
                    }}
                    aria-label={l === 'en' ? 'Switch to English' : 'Passer au français'}
                  >
                    {l.toUpperCase()}
                  </button>
                </>
              ))}
            </div>

            {/* Phone */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                border: '1px solid rgba(201,169,97,0.3)',
                color: '#C9A961',
                fontSize: '11px',
                letterSpacing: '0.15em',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = '#C9A961'
                ;(e.currentTarget as HTMLElement).style.color = '#080808'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
                ;(e.currentTarget as HTMLElement).style.color = '#C9A961'
              }}
            >
              <Phone size={12} />
              {COMPANY_INFO.phone}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            style={{ color: '#C9A961', background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{ backgroundColor: '#080808', borderTop: '1px solid #1a1a1a' }}>
          <nav className="flex flex-col py-4 px-4 gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '14px 16px',
                  fontSize: '11px',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #111',
                  color: pathname === link.href ? '#C9A961' : 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                }}
              >
                {navLabels[i]}
              </Link>
            ))}

            <div style={{ display: 'flex', gap: '8px', padding: '16px 16px 8px' }}>
              {(['en', 'fr'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    background: lang === l ? '#C9A961' : 'transparent',
                    border: '1px solid rgba(201,169,97,0.4)',
                    color: lang === l ? '#080808' : '#C9A961',
                    cursor: 'pointer',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    padding: '6px 14px',
                    transition: 'all 0.2s',
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: '8px 16px',
                padding: '14px 18px',
                background: 'rgba(201,169,97,0.08)',
                border: '1px solid rgba(201,169,97,0.2)',
                color: '#C9A961',
                fontSize: '12px',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              <Phone size={14} />
              {COMPANY_INFO.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
