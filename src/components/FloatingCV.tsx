'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, X, Download } from 'lucide-react'

export default function FloatingCV({ cvLabel, downloadLabel = 'Download' }: { cvLabel: string; downloadLabel?: string }) {
  const [isOpen, setIsOpen] = useState(false)

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
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 bg-white/80 dark:bg-zinc-900/80 hover:bg-white dark:hover:bg-zinc-800 text-violet-600 dark:text-violet-400 border border-violet-500/20 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] font-semibold rounded-full shadow-2xl hover:-translate-y-0.5 transition-all cursor-pointer backdrop-blur-md select-none"
      >
        <FileText className="w-4 h-4 md:w-5 md:h-5 text-violet-600 dark:text-violet-400" />
        <span className="hidden md:inline text-sm tracking-tight">{cvLabel}</span>
      </button>

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
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-zinc-950 flex-shrink-0 select-none">
                <h2 className="text-lg md:text-xl font-semibold flex items-center gap-2 text-zinc-100">
                  <FileText className="text-zinc-400 w-5 h-5" />
                  {cvLabel}
                </h2>
                <div className="flex items-center gap-3">
                  <a
                    href="/Tran-Nguyen-Quoc-Quy.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-zinc-200 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>{downloadLabel}</span>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 rounded-full transition-all cursor-pointer"
                  >
                    <X className="w-5 h-5" />
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
