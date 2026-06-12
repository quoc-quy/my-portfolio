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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md px-3 md:px-4 py-2 rounded-full border border-border shadow-md flex items-center justify-between gap-2 transition-all w-[92vw] md:w-auto"
    >
      <button
        className="md:hidden p-2 text-foreground hover:bg-muted rounded-full transition-colors cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <div className="hidden md:flex items-center gap-1">
        {navData.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors ${activeSection === item.id ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_0_10px_var(--color-primary)]"
              />
            )}
            {item.label}
          </a>
        ))}
      </div>

      <div className="hidden md:block w-px h-6 bg-border mx-1"></div>

      <div className="flex items-center gap-1">
        <div className="relative">
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center gap-1 px-3 py-2 rounded-full hover:bg-muted text-sm font-bold transition-colors cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{lang.toUpperCase()}</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full mt-2 right-0 md:left-1/2 md:-translate-x-1/2 bg-popover border border-border rounded-xl shadow-lg flex flex-col min-w-[120px] overflow-hidden"
              >
                <Link
                  href={getLangUrl('vi')}
                  onClick={() => setIsLangOpen(false)}
                  className="px-4 py-3 md:py-2 text-left hover:bg-muted text-sm font-medium"
                >
                  Tiếng Việt
                </Link>
                <Link
                  href={getLangUrl('en')}
                  onClick={() => setIsLangOpen(false)}
                  className="px-4 py-3 md:py-2 text-left hover:bg-muted text-sm font-medium"
                >
                  English
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full hover:bg-muted transition-colors text-foreground cursor-pointer"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-yellow-400" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            className="absolute top-full left-0 mt-3 w-full bg-card/95 backdrop-blur-xl border border-border rounded-3xl shadow-2xl flex flex-col p-3 md:hidden overflow-hidden z-50 gap-1"
          >
            {navData.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative w-full text-left px-5 py-4 rounded-2xl text-base font-bold transition-all ${activeSection === item.id ? 'text-primary-foreground bg-primary shadow-md' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
