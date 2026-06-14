'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, MapPin, CheckCircle, Send } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'

export default function Contact({ data, lang }: { data: any; lang: string }) {
  const isVi = lang === 'vi'
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return
    // Simulate API submission
    setFormSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const footerLinks = [
    { id: 'about', label: isVi ? 'Giới thiệu' : 'About' },
    { id: 'metrics', label: isVi ? 'Chỉ số' : 'Metrics' },
    { id: 'projects', label: isVi ? 'Dự án' : 'Projects' },
    { id: 'skills', label: isVi ? 'Kỹ năng' : 'Skills' },
    { id: 'mindset', label: isVi ? 'Tư duy' : 'Mindset' },
    { id: 'roadmap', label: isVi ? 'Lộ trình' : 'Roadmap' }
  ]

  return (
    <section id="contact" className="pt-24 pb-16 px-6 bg-background border-t border-border relative overflow-hidden flex flex-col items-center">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      {/* Colorful ambiance glow blobs */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-left space-y-3 max-w-xl">
          <MotionH2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground"
          >
            {data.title}
          </MotionH2>
          <MotionP
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-sm text-muted-foreground leading-relaxed font-sans"
          >
            {data.subtitle}
          </MotionP>
        </div>

        {/* Split Grid Details / Form */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Info Cards (Vibrant accents restored) */}
          <div className="md:col-span-5 flex flex-col justify-between p-8 bg-card border border-border rounded-2xl relative overflow-hidden text-left shadow-sm">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-zinc-550 dark:text-zinc-500 font-extrabold uppercase">
                {isVi ? 'THÔNG TIN KẾT NỐI' : 'CONNECT CHANNELS'}
              </span>

              {/* Direct Info list items */}
              <div className="space-y-4 select-text">
                {/* Email (Orange Accent) */}
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-lg border border-orange-500/20 bg-orange-500/5 text-orange-600 dark:text-orange-400 hover:bg-orange-500/10 hover:border-orange-500/35 transition-all text-xs font-bold shadow-sm"
                >
                  <Mail className="w-4 h-4 text-orange-650 dark:text-orange-400 flex-shrink-0" />
                  <span>{data.email}</span>
                </a>

                {/* Phone (Cyan Accent) */}
                <a
                  href={`tel:${data.phone.replace(/ /g, '')}`}
                  className="flex items-center gap-3.5 p-3 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/35 transition-all text-xs font-bold shadow-sm"
                >
                  <Phone className="w-4 h-4 text-cyan-650 dark:text-cyan-400 flex-shrink-0" />
                  <span>{data.phone}</span>
                </a>

                {/* Location (Slate Accent) */}
                <div className="flex items-center gap-3.5 p-3 rounded-lg border border-border bg-secondary/50 dark:bg-zinc-950/40 text-muted-foreground dark:text-zinc-300 text-xs font-semibold select-none">
                  <MapPin className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                  <span>{data.location}</span>
                </div>
              </div>
            </div>

            {/* Social channels (Restored brand accent colors) */}
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border relative z-10 select-none">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-500/5 border border-purple-500/20 hover:bg-purple-500/10 text-purple-650 dark:text-purple-400 hover:text-purple-800 dark:hover:text-white text-xs font-mono font-bold rounded-lg transition-all cursor-pointer shadow-sm"
              >
                <Github size={13} />
                <span>GITHUB</span>
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/5 border border-blue-500/20 hover:bg-blue-500/10 text-blue-650 dark:text-blue-400 hover:text-blue-800 dark:hover:text-white text-xs font-mono font-bold rounded-lg transition-all cursor-pointer shadow-sm"
              >
                <Linkedin size={13} />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* Right Block: Message Form */}
          <div className="md:col-span-7 p-8 bg-card border border-border rounded-2xl relative overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4 text-left relative z-10"
                >
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 font-extrabold uppercase block mb-2 select-none">
                    {data.formTitle}
                  </span>

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 font-sans uppercase">
                      {data.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-background border border-border focus:border-primary/45 rounded-lg text-xs focus:outline-none transition-all text-foreground placeholder:text-zinc-405"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 font-sans uppercase">
                      {data.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 bg-background border border-border focus:border-primary/45 rounded-lg text-xs focus:outline-none transition-all text-foreground placeholder:text-zinc-405"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 font-sans uppercase">
                      {data.formMessage}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3 py-2.5 bg-background border border-border focus:border-primary/45 rounded-lg text-xs focus:outline-none transition-all text-foreground placeholder:text-zinc-450 resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] py-3 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 select-none hover:-translate-y-0.5"
                  >
                    <span>{data.formSubmit}</span>
                    <Send size={12} />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full min-h-[300px] flex flex-col items-center justify-center text-center space-y-4 py-8 relative z-10"
                >
                  <CheckCircle className="w-12 h-12 text-primary animate-pulse" />
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                      {isVi ? 'GỬI THÀNH CÔNG!' : 'MESSAGE SENT!'}
                    </h4>
                    <p className="text-xs text-muted-foreground max-w-xs leading-relaxed font-sans font-medium">
                      {data.formSuccess}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer copyright only */}
        <div className="border-t border-border pt-12 flex justify-center items-center text-xs text-muted-foreground select-none text-center w-full">
          <span>Copyright © 2026 Tran Nguyen Quoc Quy.</span>
        </div>

      </div>
    </section>
  )
}
