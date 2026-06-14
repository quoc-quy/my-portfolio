'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Globe, ChevronDown, Menu, X } from 'lucide-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Navbar({ lang, navData }: { lang: string; navData: any[] }) {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (const item of navData) {
        const element = document.getElementById(item.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id)
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navData])

  const getLangUrl = (newLang: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', newLang)
    return `${pathname}?${params.toString()}`
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md px-3 md:px-4 py-1.5 rounded-full border border-border shadow-lg flex items-center justify-between gap-4 transition-all w-[92vw] md:w-auto select-none"
    >
      {/* Mobile Menu Trigger */}
      <button
        className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        title="Toggle Menu"
      >
        {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </button>

      {/* Desktop Menu links */}
      <div className="hidden md:flex items-center gap-1.5">
        {navData.map((item) => {
          const isActive = activeSection === item.id
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap transition-colors ${
                isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-black/5 dark:bg-white/10 rounded-full -z-10 border border-border dark:border-white/5"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          )
        })}
      </div>

      <div className="hidden md:block w-px h-4 bg-border mx-0.5"></div>

      <div className="flex items-center gap-1.5">
        {/* Language selector Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-xs font-bold text-muted-foreground hover:text-foreground transition-all cursor-pointer border border-transparent hover:border-border"
          >
            <Globe className="w-3.5 h-3.5 text-muted-foreground/80" />
            <span>{lang.toUpperCase()}</span>
            <ChevronDown className="w-3 h-3 text-muted-foreground/80" />
          </button>
          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute top-full mt-2 right-0 bg-popover border border-border rounded-xl shadow-2xl flex flex-col min-w-[120px] overflow-hidden p-1 z-50"
              >
                <Link
                  href={getLangUrl('vi')}
                  onClick={() => setIsLangOpen(false)}
                  className={`px-3 py-2 text-left rounded-lg text-xs font-semibold hover:bg-secondary transition-colors ${
                    lang === 'vi' ? 'text-foreground bg-secondary' : 'text-muted-foreground'
                  }`}
                >
                  Tiếng Việt
                </Link>
                <Link
                  href={getLangUrl('en')}
                  onClick={() => setIsLangOpen(false)}
                  className={`px-3 py-2 text-left rounded-lg text-xs font-semibold hover:bg-secondary transition-colors ${
                    lang === 'en' ? 'text-foreground bg-secondary' : 'text-muted-foreground'
                  }`}
                >
                  English
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-all cursor-pointer border border-transparent hover:border-border"
          title="Toggle Theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-3.5 h-3.5 text-muted-foreground" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            className="absolute top-full left-0 mt-3 w-full bg-background/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl flex flex-col p-2 md:hidden overflow-hidden z-50 gap-0.5"
          >
            {navData.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive ? 'text-foreground bg-secondary border border-border' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
