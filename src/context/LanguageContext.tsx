'use client'
import React, { createContext, useContext, useState } from 'react'
import { dict, Language, Translations } from '@/data/i18n'

type LanguageContextType = {
  lang: Language
  toggleLanguage: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('en')

  const toggleLanguage = () => {
    setLang((prev: Language) => (prev === 'en' ? 'vi' : 'en'))
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: dict[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
