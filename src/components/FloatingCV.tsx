'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, X, Download } from 'lucide-react'

export default function FloatingCV({ cvLabel }: { cvLabel: string }) {
  const [isOpen, setIsOpen] = useState(false)

  // Khóa cuộn trang nền khi mở Modal
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
      {/* Nút bấm Fixed góc dưới phải */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-2xl hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_20px_var(--color-primary)] transition-all border border-primary-foreground/20"
      >
        <FileText className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden md:inline text-base">{cvLabel}</span>
      </button>

      {/* Modal trượt từ phải sang trái */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Lớp nền mờ (Overlay) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            {/* Khung Modal (Drawer) */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-[100dvh] w-full md:w-[800px] lg:w-[1000px] bg-background shadow-2xl z-[70] flex flex-col border-l border-border"
            >
              {/* Header của Modal */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-border bg-card">
                <h2 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                  <FileText className="text-primary w-6 h-6" />
                  {cvLabel}
                </h2>
                <div className="flex items-center gap-3">
                  <a
                    href="/Tran-Nguyen-Quoc-Quy.pdf"
                    download
                    className="p-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors flex items-center gap-2 px-4"
                  >
                    <Download className="w-5 h-5" />
                    <span className="hidden md:inline text-sm font-bold">Tải xuống</span>
                  </a>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Khu vực hiển thị PDF */}
              <div className="flex-grow w-full h-full bg-secondary/50 relative overflow-hidden">
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
