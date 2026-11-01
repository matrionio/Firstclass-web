'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export type ConsentPreferences = {
  necessary: true
  analytics: boolean
  advertising: boolean
}

const STORAGE_KEY = 'firstclasslimo-consent-v1'
const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true,
  analytics: false,
  advertising: false,
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
    openCookiePreferences?: () => void
  }
}

function pushConsentUpdate(preferences: ConsentPreferences) {
  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer.push(args))
  window.gtag('consent', 'update', {
    analytics_storage: preferences.analytics ? 'granted' : 'denied',
    ad_storage: preferences.advertising ? 'granted' : 'denied',
    ad_user_data: preferences.advertising ? 'granted' : 'denied',
    ad_personalization: preferences.advertising ? 'granted' : 'denied',
  })
}

function readPreferences(): ConsentPreferences | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    if (!value) return null
    const parsed = JSON.parse(value) as Partial<ConsentPreferences>
    if (typeof parsed.analytics !== 'boolean' || typeof parsed.advertising !== 'boolean') return null
    return { necessary: true, analytics: parsed.analytics, advertising: parsed.advertising }
  } catch {
    return null
  }
}

export default function ConsentBanner() {
  const { lang } = useLanguage()
  const [preferences, setPreferences] = useState<ConsentPreferences>(DEFAULT_PREFERENCES)
  const [visible, setVisible] = useState(false)
  const [manage, setManage] = useState(false)

  useEffect(() => {
    const saved = readPreferences()
    if (saved) {
      setPreferences(saved)
      pushConsentUpdate(saved)
    } else {
      pushConsentUpdate(DEFAULT_PREFERENCES)
      setVisible(true)
    }

    window.openCookiePreferences = () => {
      const current = readPreferences() ?? DEFAULT_PREFERENCES
      setPreferences(current)
      setManage(true)
      setVisible(true)
    }
    return () => { delete window.openCookiePreferences }
  }, [])

  const copy = lang === 'fr' ? {
    title: 'Vos préférences de confidentialité',
    text: 'Les témoins nécessaires sont toujours actifs. Choisissez si FIRST CLASS LIMO peut utiliser des technologies facultatives d’analyse ou de publicité. Nous utilisons Google Analytics uniquement après votre acceptation; rien de facultatif ne se charge avant.',
    accept: 'Tout accepter', reject: 'Refuser les témoins facultatifs', manage: 'Gérer les préférences', save: 'Enregistrer mes choix', back: 'Retour',
    necessary: 'Strictement nécessaires', necessaryText: 'Essentiels au fonctionnement et à la sécurité du site.', analytics: 'Analytique', analyticsText: 'Autorise les outils d’analyse facultatifs.', advertising: 'Publicité', advertisingText: 'Autorise les outils publicitaires facultatifs.',
  } : {
    title: 'Your privacy preferences',
    text: 'Necessary cookies are always active. Choose whether FIRST CLASS LIMO may use optional analytics or advertising technologies. We use Google Analytics only after you accept; nothing optional loads until then.',
    accept: 'Accept All', reject: 'Reject Non-Essential', manage: 'Manage Preferences', save: 'Save my choices', back: 'Back',
    necessary: 'Strictly Necessary', necessaryText: 'Required for the site to function and remain secure.', analytics: 'Analytics', analyticsText: 'Allows optional analytics tools.', advertising: 'Advertising', advertisingText: 'Allows optional advertising tools.',
  }

  const save = (next: ConsentPreferences) => {
    setPreferences(next)
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch { /* Storage may be disabled by the browser. */ }
    pushConsentUpdate(next)
    setVisible(false)
    setManage(false)
  }

  if (!visible) return null

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="cookie-consent-title" className="fixed inset-x-0 bottom-0 z-[100] border-t border-secondary/40 bg-primary shadow-2xl">
      <div className="mx-auto max-h-[85vh] max-w-7xl overflow-y-auto px-4 py-5 sm:px-6 lg:px-8">
        <h2 id="cookie-consent-title" className="mb-2 font-serif text-xl font-bold text-white">{copy.title}</h2>
        <p className="mb-5 max-w-4xl text-sm leading-relaxed text-gray-300">{copy.text}</p>
        {manage && <div className="mb-5 grid gap-3 sm:grid-cols-3">
          <PreferenceRow title={copy.necessary} description={copy.necessaryText} checked disabled onChange={() => {}} />
          <PreferenceRow title={copy.analytics} description={copy.analyticsText} checked={preferences.analytics} onChange={(analytics) => setPreferences((current) => ({ ...current, analytics }))} />
          <PreferenceRow title={copy.advertising} description={copy.advertisingText} checked={preferences.advertising} onChange={(advertising) => setPreferences((current) => ({ ...current, advertising }))} />
        </div>}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
          {manage && <button type="button" onClick={() => setManage(false)} className="border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:border-secondary">{copy.back}</button>}
          <button type="button" onClick={() => save(DEFAULT_PREFERENCES)} className="border border-secondary px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:bg-secondary hover:text-primary">{copy.reject}</button>
          <button type="button" onClick={() => manage ? save(preferences) : setManage(true)} className="border border-secondary/50 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-secondary">{manage ? copy.save : copy.manage}</button>
          {!manage && <button type="button" onClick={() => save({ necessary: true, analytics: true, advertising: true })} className="bg-secondary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-goldLight">{copy.accept}</button>}
        </div>
      </div>
    </div>
  )
}

function PreferenceRow({ title, description, checked, disabled, onChange }: { title: string; description: string; checked: boolean; disabled?: boolean; onChange: (checked: boolean) => void }) {
  return <label className="flex items-start gap-3 border border-white/10 bg-white/5 p-4 text-white">
    <input type="checkbox" className="mt-1 accent-[#C9A961]" checked={checked} disabled={disabled} onChange={(event) => onChange(event.target.checked)} />
    <span><span className="block text-sm font-semibold">{title}{disabled ? ' · Always on' : ''}</span><span className="mt-1 block text-xs leading-relaxed text-gray-300">{description}</span></span>
  </label>
}
