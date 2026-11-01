'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function PrivacyPolicyPage() {
  const { t } = useLanguage()
  const p = t.legal
  return <main className="min-h-screen bg-white px-4 pb-24 pt-36 text-primary"><article className="mx-auto max-w-4xl">
    <h1 className="mb-6 font-serif text-4xl font-bold">{p.privacyTitle}</h1><p className="mb-10 leading-relaxed text-textLight">{p.privacyIntro}</p>
    <h2 className="mb-3 font-serif text-2xl font-bold">{p.privacyCollectedTitle}</h2><p className="mb-8 leading-relaxed text-textLight">{p.privacyCollected}</p>
    <h2 className="mb-3 font-serif text-2xl font-bold">{p.privacyUseTitle}</h2><p className="mb-8 leading-relaxed text-textLight">{p.privacyUse}</p>
    <h2 className="mb-3 font-serif text-2xl font-bold">{p.privacyChoiceTitle}</h2><p className="mb-8 leading-relaxed text-textLight">{p.privacyChoice}</p>
    <h2 className="mb-3 font-serif text-2xl font-bold">{p.privacyContactTitle}</h2><p className="mb-10 leading-relaxed text-textLight">{p.privacyContact}</p>
    <h2 className="mb-4 font-serif text-2xl font-bold">{p.pendingTitle}</h2><ul className="list-disc space-y-2 pl-6 leading-relaxed text-textLight">{p.pending.map((item) => <li key={item}>{item}</li>)}</ul>
  </article></main>
}
