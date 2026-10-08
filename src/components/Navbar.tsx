'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/ThemeProvider'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Globe, ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Navbar({ lang, navData }: { lang: string; navData: any[] }) {
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      // 1. Detect scroll threshold for expanding/shrinking navbar
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // 2. Active section detection
      const scrollPosition = window.scrollY + 200
      for (const item of navData) {
        const element = document.getElementById(item.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navData])

  const getLangUrl = (newLang: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', newLang)
    return `${pathname}?${params.toString()}`
  }

  return (
    <motion.header
      layout
      transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out select-none ${
        isScrolled
          ? 'top-3 md:top-5 w-[92vw] md:w-auto'
          : 'top-4 md:top-6 w-[94vw] max-w-7xl'
      }`}
    >
      <motion.nav
        layout
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className={`glass-panel border shadow-2xl flex items-center justify-between transition-all duration-300 backdrop-blur-xl ${
          isScrolled
            ? 'px-3 md:px-4 py-1.5 rounded-full bg-background/80 dark:bg-zinc-950/80 border-border/70 gap-3 md:gap-4'
            : 'px-5 md:px-8 py-3.5 md:py-4 rounded-2xl md:rounded-3xl bg-background/50 dark:bg-zinc-950/50 border-white/15 dark:border-cyan-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_35px_rgba(6,182,212,0.06)]'
        }`}
      >
        {/* Brand / Logo (hiển thị rõ ở trạng thái to như ảnh mẫu) */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-xl transition-all cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            title="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>

          <a
            href="#about"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-background dark:bg-zinc-950 rounded-[7px] flex items-center justify-center overflow-hidden p-1">
                <Image
                  src="/logo.png"
                  alt="QuocQuy Logo"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain group-hover:rotate-6 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
            {!isScrolled && (
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                className="hidden sm:flex flex-col text-left leading-tight"
              >
                <span className="font-extrabold text-sm md:text-base tracking-tight text-foreground font-mono">
                  QuocQuy<span className="text-cyan-500">.dev</span>
                </span>
              </motion.div>
            )}
          </a>
        </div>

        {/* Desktop Menu links */}
        <div
          className={`hidden md:flex items-center transition-all ${
            isScrolled ? 'gap-1.5' : 'gap-2 lg:gap-3'
          }`}
        >
          {navData.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative transition-all tracking-wide whitespace-nowrap select-none ${
                  isScrolled
                    ? 'px-3.5 py-1.5 rounded-full text-xs font-semibold'
                    : 'px-4 py-2 rounded-xl text-sm font-medium'
                } ${
                  isActive
                    ? 'text-foreground font-bold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className={`absolute inset-0 rounded-full -z-10 border transition-all ${
                      isScrolled
                        ? 'bg-primary/10 dark:bg-cyan-500/15 border-primary/20 dark:border-cyan-500/30'
                        : 'bg-primary/15 dark:bg-cyan-500/20 border-primary/30 dark:border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            )
          })}
        </div>

        {/* Right Tools & Action Button (Tông xanh Cyan/Blue, không dùng tím) */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {/* Language selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-primary/10 dark:hover:bg-cyan-500/10 text-xs font-bold text-muted-foreground hover:text-foreground transition-all cursor-pointer border border-transparent hover:border-border"
            >
              <Globe className="w-3.5 h-3.5 text-muted-foreground" />
              <span>{lang.toUpperCase()}</span>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </button>
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  className="absolute top-full mt-2 right-0 bg-card/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl flex flex-col gap-1 min-w-[125px] overflow-hidden p-1 z-50"
                >
                  <Link
                    href={getLangUrl('vi')}
                    onClick={() => setIsLangOpen(false)}
                    className={`px-3 py-2 text-left rounded-lg text-xs font-semibold hover:bg-secondary transition-colors ${
                      lang === 'vi'
                        ? 'text-cyan-500 dark:text-cyan-400 bg-secondary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    Tiếng Việt
                  </Link>
                  <Link
                    href={getLangUrl('en')}
                    onClick={() => setIsLangOpen(false)}
                    className={`px-3 py-2 text-left rounded-lg text-xs font-semibold hover:bg-secondary transition-colors ${
                      lang === 'en'
                        ? 'text-cyan-500 dark:text-cyan-400 bg-secondary'
                        : 'text-muted-foreground'
                    }`}
                  >
                    English
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle Button */}
          {/* <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-primary/10 dark:hover:bg-cyan-500/10 rounded-lg transition-all cursor-pointer border border-transparent hover:border-border"
            title="Toggle Theme"
          >
            {mounted ? (
              theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-muted-foreground hover:text-cyan-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-muted-foreground hover:text-blue-600" />
              )
            ) : (
              <Sun className="w-3.5 h-3.5 text-muted-foreground opacity-60" />
            )}
          </button> */}

          {/* Featured Action Button (như nút Đăng nhập trong ảnh, chuyển sang phong cách Gradient Xanh) */}
          <a
            href="#contact"
            className={`hidden sm:inline-flex items-center gap-1.5 font-bold transition-all cursor-pointer rounded-xl select-none ${
              isScrolled
                ? 'px-3 py-1.5 text-xs bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20'
                : 'px-4 py-2 text-xs md:text-sm bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.55)] hover:scale-[1.02]'
            }`}
          >
            <span>{lang === 'vi' ? 'Liên hệ' : 'Contact'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            className="mt-3 w-full bg-background/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-border rounded-2xl shadow-2xl flex flex-col p-2 md:hidden overflow-hidden z-50 gap-0.5"
          >
            {navData.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-cyan-500 dark:text-cyan-400 bg-secondary border border-border'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
            <div className="pt-2 px-1">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
              >
                <span>{lang === 'vi' ? 'Liên hệ ngay' : 'Contact Me'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
