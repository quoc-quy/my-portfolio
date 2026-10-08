'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, X, Download } from 'lucide-react'

export default function FloatingCV({
  cvLabel,
  downloadLabel,
  lang,
}: {
  cvLabel?: string
  downloadLabel?: string
  lang?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [clientLang, setClientLang] = useState<string>(lang || 'vi')

  // Dynamic language sync with URL and props
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const urlLang = params.get('lang')
      if (urlLang) {
        setClientLang(urlLang)
      } else if (lang) {
        setClientLang(lang)
      }
    }
  }, [lang])

  const isEn = clientLang === 'en' || lang === 'en'
  const displayCvLabel = isEn ? 'View CV' : (cvLabel || 'Xem CV')
  const displayDownloadLabel = isEn ? 'Download CV' : (downloadLabel || 'Tải xuống CV')
  const drawerHeaderTitle = isEn ? 'Curriculum Vitae (PDF)' : 'Hồ Sơ Năng Lực (CV)'

  // Lock scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <style>{`
        @keyframes border-beam-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* Floating Action Button with Gentle Border Beam Glow */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 group">
        <div className="relative p-[1.5px] rounded-full overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300">
          {/* Animated Gentle Border Beam (Vệt sáng chạy vòng quanh viền nhẹ nhàng) */}
          <div
            className="absolute -inset-[150%] pointer-events-none"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0 65%, rgba(6, 182, 212, 0.25) 75%, rgba(34, 211, 238, 0.85) 90%, rgba(56, 189, 248, 1) 100%)',
              animation: 'border-beam-spin 6.5s linear infinite',
            }}
          />

          {/* Button Surface */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative z-10 flex items-center gap-2 px-4 py-2.5 md:px-5 md:py-3 bg-white/95 dark:bg-zinc-950/95 hover:bg-white dark:hover:bg-zinc-900 text-cyan-600 dark:text-cyan-400 font-semibold rounded-full shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer backdrop-blur-md select-none"
            title={displayCvLabel}
          >
            <FileText className="w-4 h-4 md:w-5 md:h-5 text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
            <span className="text-xs md:text-sm tracking-tight font-mono font-bold">
              {displayCvLabel}
            </span>
          </button>
        </div>
      </div>

      {/* Slide Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xs z-[60]"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 220 }}
              className="fixed top-0 right-0 h-[100dvh] w-full md:w-[750px] lg:w-[950px] bg-zinc-950 shadow-2xl z-[70] flex flex-col border-l border-white/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-white/10 bg-zinc-950 flex-shrink-0 select-none overflow-hidden">
                <h2 className="text-sm sm:text-base md:text-xl font-semibold flex items-center gap-2 text-zinc-100 font-mono truncate mr-2">
                  <FileText className="text-cyan-400 w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  <span className="truncate">{drawerHeaderTitle}</span>
                </h2>
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  <a
                    href="/Tran-Nguyen-Quoc-Quy.pdf"
                    download
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-full text-[10px] sm:text-xs font-semibold transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] whitespace-nowrap"
                  >
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="hidden min-[375px]:inline">{displayDownloadLabel}</span>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 sm:p-2 bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 rounded-full transition-all cursor-pointer shrink-0"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Container */}
              <div className="flex-grow w-full h-full bg-zinc-900 relative overflow-hidden">
                <iframe
                  src="/Tran-Nguyen-Quoc-Quy.pdf#toolbar=0"
                  className="w-full h-full border-none"
                  title="CV PDF"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
