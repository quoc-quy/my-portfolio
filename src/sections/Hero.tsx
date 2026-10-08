'use client'
import { fadeUp, stagger, zoomIn, floatContinuous } from '@/lib/animations'
import { MotionDiv, MotionH1, MotionP } from '@/components/Motion'
import {
  Download,
  Github,
  Linkedin,
  MessageSquare,
  Code2,
  MonitorPlay,
  Rocket,
  Database,
  Sparkles,
  Terminal
} from 'lucide-react'
import Image from 'next/image'
import SunraySpotlight from '@/components/SunraySpotlight'
import InteractiveGrid from '@/components/InteractiveGrid'

const techChips = [
  'React / Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Real-time',
  'AI Integration'
]

const dataSatellites = [
  {
    Icon: Code2,
    label: 'React / Next.js',
    bg: 'bg-blue-600',
    pos: 'top-[8%] -left-[8%] lg:-left-[12%]',
    delay: 0
  },
  {
    Icon: MonitorPlay,
    label: 'Responsive',
    bg: 'bg-cyan-500',
    pos: 'top-[22%] -right-[8%] lg:-right-[12%]',
    delay: 1.5
  },
  {
    Icon: Rocket,
    label: 'Performance',
    bg: 'bg-sky-500',
    pos: 'bottom-[24%] -left-[8%] lg:-left-[12%]',
    delay: 3
  },
  {
    Icon: Database,
    label: 'Real-time & AI',
    bg: 'bg-blue-600',
    pos: 'bottom-[10%] -right-[8%] lg:-right-[12%]',
    delay: 4.5
  }
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Hero({ data }: { data: any }) {
  return (
    <section
      id="about"
      className="relative min-h-[96vh] flex items-center justify-center px-4 sm:px-6 pt-24 md:pt-40 pb-10 md:pb-20 overflow-hidden"
    >
      {/* 1. Interactive Mouse Grid: Lưới ô vuông sáng theo chuột, rời chuột tắt dần */}
      <InteractiveGrid size={44} />

      {/* 2. Top Sunray Spotlight: Vầng sáng mặt trời đỉnh đầu thở lúc đậm lúc nhạt màu xanh */}
      <SunraySpotlight />

      {/* 3. Deep Ambient Blue Blobs for volumetric atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

      {/* 4. Main 2-Column Content Layout */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
        {/* Left Column: Information, Headline, Chips, and CTAs */}
        <MotionDiv
          variants={stagger}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 space-y-4 md:space-y-6 text-left"
        >
          {/* Active Status Badge */}
          <MotionDiv
            variants={fadeUp}
            className="inline-flex items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-500 dark:text-cyan-400 font-bold text-xs shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{data.role || 'Web Developer Intern'}</span>
            </span>
          </MotionDiv>

          {/* Large Headline (Tên & Định vị cá nhân theo layout to, ấn tượng của mẫu) */}
          <div className="space-y-1">
            <MotionH1
              variants={fadeUp}
              className="text-[32px] md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.12]"
            >
              {data.name1} <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 dark:from-white dark:via-sky-200 dark:to-cyan-400 drop-shadow-sm">
                {data.name2}
              </span>
            </MotionH1>
          </div>

          {/* Hook sentence with elegant vertical border */}
          <MotionP
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-foreground/90 font-medium border-l-4 border-cyan-500 dark:border-cyan-400 pl-4 py-1 leading-relaxed"
          >
            {data.hook}
          </MotionP>

          {/* Technical Summary */}
          <MotionP
            variants={fadeUp}
            className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl font-sans"
          >
            {data.summary}
          </MotionP>

          {/* Specialty Tags / Chips (Hàng thẻ công nghệ giống hệt layout ảnh mẫu) */}
          <MotionDiv
            variants={fadeUp}
            className="flex flex-wrap items-center gap-2 pt-1"
          >
            {techChips.map((chip, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-secondary/40 dark:bg-zinc-900/60 border border-border/80 hover:border-cyan-500/50 hover:bg-cyan-500/10 text-muted-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-all select-none shadow-sm cursor-default"
              >
                {chip}
              </span>
            ))}
          </MotionDiv>

          {/* Action triggers: Cụm nút kép CTA nổi bật */}
          <MotionDiv
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3.5 pt-3"
          >
            {/* Primary Action Button: Download CV with glowing gradient */}
            <a
              href="/Tran-Nguyen-Quoc-Quy.pdf"
              download
              className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] px-6 py-3.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer select-none hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{data.cta1}</span>
              <Download size={16} />
            </a>

            {/* Secondary Action Button: Contact Me (Viền kính mờ tối giản) */}
            <a
              href="#contact"
              className="hidden sm:flex border border-white/15 dark:border-cyan-500/30 bg-secondary/50 dark:bg-zinc-900/50 hover:bg-cyan-500/10 text-foreground hover:text-cyan-500 dark:hover:text-cyan-400 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all items-center gap-2 cursor-pointer select-none hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-md shadow-sm"
            >
              <span>{data.cta2}</span>
              <MessageSquare
                size={16}
                className="text-cyan-500 dark:text-cyan-400"
              />
            </a>

            {/* Social media connections */}
            <div className="flex items-center gap-2.5">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 hover:bg-primary/20 hover:border-cyan-500/50 text-muted-foreground hover:text-foreground border border-border rounded-xl transition-all flex items-center justify-center w-11 h-11 shadow-sm cursor-pointer"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 hover:bg-primary/20 hover:border-cyan-500/50 text-muted-foreground hover:text-foreground border border-border rounded-xl transition-all flex items-center justify-center w-11 h-11 shadow-sm cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* Right Column: Tech Console Window Frame with Portrait & Satellite Badges */}
        <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none mt-8 lg:mt-0 flex items-center justify-center">
          {/* Floating Satellites around the main window */}
          {dataSatellites.map((sat, idx) => (
            <MotionDiv
              key={idx}
              className={`absolute ${sat.pos} z-30 flex items-center gap-2 pr-3.5 pl-1.5 py-1 rounded-full bg-card/90 dark:bg-zinc-900/90 border border-border/80 shadow-2xl backdrop-blur-md hidden sm:flex`}
              variants={floatContinuous(sat.delay)}
              animate="animate"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`p-1.5 rounded-full ${sat.bg} flex items-center justify-center shadow-md`}
              >
                <sat.Icon className="w-3 h-3 text-white" />
              </div>
              <span className="font-bold text-xs text-foreground tracking-tight">
                {sat.label}
              </span>
            </MotionDiv>
          ))}

          {/* Main Tech Console Window (Phong cách khung giao diện công nghệ như trong ảnh mẫu) */}
          <MotionDiv
            variants={zoomIn}
            initial="hidden"
            animate="show"
            className="relative w-full rounded-2xl md:rounded-3xl glass-panel p-2.5 sm:p-3 shadow-2xl overflow-hidden border border-white/20 dark:border-cyan-500/30 bg-card/40 dark:bg-zinc-950/40 backdrop-blur-2xl group"
          >
            {/* Window Top Bar Header (như thanh DEVOPS của ảnh mẫu) */}
            <div className="flex items-center justify-between px-3.5 py-2.5 mb-2 rounded-xl bg-secondary/40 dark:bg-zinc-900/60 border border-border/50 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-bold tracking-wider text-foreground text-[11px]">
                  FULLSTACK PROFILE
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground text-[10px]">
                <Terminal className="w-3 h-3 text-cyan-500" />
                <span>quoc-quy.dev</span>
              </div>
            </div>

            {/* Inner frame containing Portrait */}
            <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl bg-secondary/30 dark:bg-zinc-900/50 overflow-hidden border border-border flex items-center justify-center transition-all duration-700">
              <Image
                src="/avatar.png"
                alt="Trần Nguyễn Quốc Quý"
                fill
                priority
                className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 select-none"
                unoptimized
              />

              {/* Corner brackets tech decor */}
              <span className="absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400/60" />
              <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400/60" />
              <span className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400/60" />
              <span className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400/60" />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
