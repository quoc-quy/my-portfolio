'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, Github } from 'lucide-react'
import { fadeUp, stagger } from '@/lib/animations'

export default function Contact({ data }: { data: any }) {
  const isVi = data.title === 'Sẵn Sàng Kiến Tạo?'

  const labels = isVi ? {
    email: 'Email liên hệ',
    emailAction: 'Gửi mail ngay',
    phone: 'Số điện thoại',
    phoneAction: 'Gọi trực tiếp',
    github: 'Mã nguồn mở',
    githubAction: 'Ghé thăm trang GitHub',
    footerBio: 'Thực tập sinh Web Developer đam mê thiết kế UI/UX tinh tế, tối ưu hiệu suất và kiến trúc Web vững chắc.',
    navAbout: 'Giới thiệu',
    navSkills: 'Kỹ năng',
    navProjects: 'Dự án',
    navContact: 'Liên hệ',
    copyright: 'Bản quyền © 2026 Trần Nguyễn Quốc Quý. Đã đăng ký bản quyền.'
  } : {
    email: 'Email Address',
    emailAction: 'Send mail now',
    phone: 'Phone Number',
    phoneAction: 'Call directly',
    github: 'Open Source',
    githubAction: 'Visit GitHub profile',
    footerBio: 'Web Developer Intern passionate about crafting refined UI/UX, optimizing performance, and building clean code architectures.',
    navAbout: 'About',
    navSkills: 'Skills',
    navProjects: 'Projects',
    navContact: 'Contact',
    copyright: 'Copyright © 2026 Tran Nguyen Quoc Quy. All rights reserved.'
  }

  return (
    <section
      id="contact"
      className="pt-32 pb-16 px-6 bg-slate-100 dark:bg-[#020408] border-t border-slate-200 dark:border-border/40 relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Background Animated Blobs (Only visible on Dark Mode for subtle ambiance) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none hidden dark:block" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none hidden dark:block" />

      <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-16 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-foreground dark:to-muted-foreground select-none">
            {data.title}
          </h2>
        </motion.div>

        {/* Contact Cards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto w-full text-left"
        >
          {/* Card 1: Email */}
          <motion.a
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            href={`mailto:${data.email}`}
            className="group p-8 rounded-3xl bg-white dark:bg-card border border-slate-200 dark:border-border/60 hover:border-orange-500/30 dark:hover:border-orange-500/30 backdrop-blur-md transition-all duration-500 flex flex-col items-center text-center shadow-sm hover:shadow-[0_0_40px_rgba(249,115,22,0.06)] relative overflow-hidden"
          >
            <div className="absolute -right-6 -top-6 w-20 h-20 bg-orange-500/5 rounded-full blur-xl group-hover:bg-orange-500/10 transition-all pointer-events-none"></div>
            <div className="mb-6 p-4.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 flex items-center justify-center">
              <Mail className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-muted-foreground uppercase tracking-widest mb-1.5">{labels.email}</span>
            <span className="text-lg font-bold text-slate-900 dark:text-foreground mb-4 break-all">{data.email}</span>
            <span className="text-sm font-bold text-primary flex items-center gap-1.5 mt-auto">
              {labels.emailAction} →
            </span>
          </motion.a>

          {/* Card 2: Phone */}
          <motion.a
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            href={`tel:${data.phone.replace(/ /g, '')}`}
            className="group p-8 rounded-3xl bg-white dark:bg-card border border-slate-200 dark:border-border/60 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 backdrop-blur-md transition-all duration-500 flex flex-col items-center text-center shadow-sm hover:shadow-[0_0_40px_rgba(6,182,212,0.06)] relative overflow-hidden"
          >
            <div className="absolute -right-6 -top-6 w-20 h-20 bg-cyan-500/5 rounded-full blur-xl group-hover:bg-cyan-500/10 transition-all pointer-events-none"></div>
            <div className="mb-6 p-4.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 flex items-center justify-center">
              <Phone className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-muted-foreground uppercase tracking-widest mb-1.5">{labels.phone}</span>
            <span className="text-lg font-bold text-slate-900 dark:text-foreground mb-4">{data.phone}</span>
            <span className="text-sm font-bold text-primary flex items-center gap-1.5 mt-auto">
              {labels.phoneAction} →
            </span>
          </motion.a>

          {/* Card 3: GitHub */}
          <motion.a
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-3xl bg-white dark:bg-card border border-slate-200 dark:border-border/60 hover:border-purple-500/30 dark:hover:border-purple-500/30 backdrop-blur-md transition-all duration-500 flex flex-col items-center text-center shadow-sm hover:shadow-[0_0_40px_rgba(168,85,247,0.06)] relative overflow-hidden"
          >
            <div className="absolute -right-6 -top-6 w-20 h-20 bg-purple-500/5 rounded-full blur-xl group-hover:bg-purple-500/10 transition-all pointer-events-none"></div>
            <div className="mb-6 p-4.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 flex items-center justify-center">
              <Github className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-muted-foreground uppercase tracking-widest mb-1.5">{labels.github}</span>
            <span className="text-lg font-bold text-slate-900 dark:text-foreground mb-4">github.com/quoc-quy</span>
            <span className="text-sm font-bold text-primary flex items-center gap-1.5 mt-auto">
              {labels.githubAction} →
            </span>
          </motion.a>
        </motion.div>

        {/* Footer Branding & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left border-t border-slate-200 dark:border-border/30 pt-16 pb-8 max-w-5xl mx-auto w-full flex-shrink-0">
          <div className="space-y-4">
            <div className="text-2xl font-black text-slate-900 dark:text-foreground tracking-wider flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Trần Nguyễn Quốc Quý
            </div>
            <p className="text-slate-600 dark:text-muted-foreground text-sm leading-relaxed max-w-sm">
              {labels.footerBio}
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center space-y-4">
            <div className="flex gap-4">
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white dark:bg-card/60 text-slate-700 dark:text-foreground hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground border border-slate-200 dark:border-border/80 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white dark:bg-card/60 text-slate-700 dark:text-foreground hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground border border-slate-200 dark:border-border/80 rounded-full transition-all hover:-translate-y-1 flex items-center justify-center w-11 h-11"
                title="LinkedIn"
              >
                <span className="font-black text-sm leading-none select-none">in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 mt-4 border-t border-slate-200 dark:border-border/20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 dark:text-muted-foreground max-w-5xl mx-auto w-full flex-shrink-0">
          <p className="text-center md:text-left">
            {labels.copyright}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center font-bold text-slate-700 dark:text-foreground/80">
            <a href="#about" className="hover:text-primary transition-colors">{labels.navAbout}</a>
            <a href="#skills" className="hover:text-primary transition-colors">{labels.navSkills}</a>
            <a href="#projects" className="hover:text-primary transition-colors">{labels.navProjects}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{labels.navContact}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
