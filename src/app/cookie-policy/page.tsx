'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function CookiePolicyPage() {
  const { t } = useLanguage()
  const p = t.legal
  return <main className="min-h-screen bg-white px-4 pb-24 pt-36 text-primary"><article className="mx-auto max-w-4xl">
    <h1 className="mb-6 font-serif text-4xl font-bold">{p.cookiesTitle}</h1><p className="mb-10 leading-relaxed text-textLight">{p.cookiesIntro}</p>
    <h2 className="mb-4 font-serif text-2xl font-bold">{p.cookiesCategoriesTitle}</h2><ul className="mb-10 list-disc space-y-3 pl-6 leading-relaxed text-textLight"><li>{p.cookiesNecessary}</li><li>{p.cookiesAnalytics}</li><li>{p.cookiesAdvertising}</li></ul>
    <h2 className="mb-3 font-serif text-2xl font-bold">{p.cookiesStorageTitle}</h2><p className="mb-10 leading-relaxed text-textLight">{p.cookiesStorage}</p>
    <h2 className="mb-4 font-serif text-2xl font-bold">{p.pendingTitle}</h2><ul className="list-disc space-y-2 pl-6 leading-relaxed text-textLight">{p.pending.map((item) => <li key={item}>{item}</li>)}</ul>
  </article></main>
}
