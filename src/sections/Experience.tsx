'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import {
  ExternalLink,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MapPin,
  UploadCloud,
  Cpu,
  BarChart3,
  Layers,
  FileCheck2,
  Building2,
  Sparkles,
  Calendar,
  CheckCircle2,
  Terminal,
  Activity,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'

// Icon map for technical highlight bullet points
const getHighlightIcon = (title: string) => {
  const t = title.toLowerCase()
  if (t.includes('lead') || t.includes('bảo mật') || t.includes('security')) {
    return <ShieldCheck className="w-4 h-4 text-cyan-400" />
  }
  if (
    t.includes('svg') ||
    t.includes('mapping') ||
    t.includes('sa bàn') ||
    t.includes('tour')
  ) {
    return <MapPin className="w-4 h-4 text-sky-400" />
  }
  if (t.includes('upload') || t.includes('sse') || t.includes('video')) {
    return <UploadCloud className="w-4 h-4 text-blue-400" />
  }
  if (t.includes('geofencing') || t.includes('engine') || t.includes('redis')) {
    return <Cpu className="w-4 h-4 text-cyan-400" />
  }
  if (t.includes('admin') || t.includes('recharts') || t.includes('analytics')) {
    return <BarChart3 className="w-4 h-4 text-sky-400" />
  }
  if (t.includes('trang chủ') || t.includes('floating') || t.includes('overlap')) {
    return <Layers className="w-4 h-4 text-cyan-400" />
  }
  return <FileCheck2 className="w-4 h-4 text-blue-400" />
}

// Timeline node icon map
const getTimelineIcon = (index: number) => {
  switch (index) {
    case 0:
      return <MapPin className="w-5 h-5" />
    case 1:
      return <Cpu className="w-5 h-5" />
    case 2:
      return <Building2 className="w-5 h-5" />
    default:
      return <Activity className="w-5 h-5" />
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Experience({ data, lang }: { data: any; lang?: string }) {
  const isVi = lang !== 'en'
  // Active image index for each project
  const [selectedImageMap, setSelectedImageMap] = useState<Record<string, number>>({
    'vinhomes-hoc-mon': 0,
    'cham-cong': 0,
    'bat-dong-san-so-do': 0
  })

  // Fullscreen Lightbox Modal state
  const [lightboxData, setLightboxData] = useState<{
    images: { src: string; title: string }[]
    currentIndex: number
  } | null>(null)

  // Timeline tracking states
  const timelineContainerRef = useRef<HTMLDivElement>(null)
  const milestoneRefs = useRef<(HTMLDivElement | null)[]>([])
  const projectRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const [lineGeometry, setLineGeometry] = useState<{
    top: number
    left: number
    totalHeight: number
  }>({ top: 0, left: 24, totalHeight: 0 })

  const [activeLineHeight, setActiveLineHeight] = useState<number>(0)
  const [reachedMilestones, setReachedMilestones] = useState<number[]>([0])

  // Section Ref and Mouse Spotlight State (Phong cách Linear / Supabase)
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState<{
    x: number
    y: number
    isHovered: boolean
  }>({
    x: -1000,
    y: -1000,
    isHovered: false
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true
    })
  }

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }))
  }

  // Function to calculate exact positions and update progress
  const updateTimelineProgress = useCallback(() => {
    if (!timelineContainerRef.current) return

    const containerRect = timelineContainerRef.current.getBoundingClientRect()
    const validNodes = milestoneRefs.current.filter(Boolean) as HTMLDivElement[]
    if (validNodes.length === 0) return

    const firstNode = validNodes[0]
    const lastNode = validNodes[validNodes.length - 1]

    const firstRect = firstNode.getBoundingClientRect()
    const lastRect = lastNode.getBoundingClientRect()

    // Find the last project card element to calculate full height
    const lastProjId = data.projects[data.projects.length - 1]?.id
    const lastProjectEl = lastProjId ? projectRefs.current[lastProjId] : null

    // Centers of the first node relative to container
    const relativeTop = firstRect.top - containerRect.top + firstRect.height / 2
    const relativeLeft =
      firstRect.left - containerRect.left + firstRect.width / 2 - 1

    // Extend timeline to the bottom of the final project card
    let totalDistance =
      lastRect.top + lastRect.height / 2 - (firstRect.top + firstRect.height / 2)
    if (lastProjectEl) {
      const lastProjectRect = lastProjectEl.getBoundingClientRect()
      // Subtract small margin so line aligns perfectly with the bottom edge of the card
      totalDistance =
        lastProjectRect.bottom - 20 - (firstRect.top + firstRect.height / 2)
    }

    setLineGeometry({
      top: Math.max(0, relativeTop),
      left: Math.max(0, relativeLeft),
      totalHeight: Math.max(0, totalDistance)
    })

    // Viewport focus trigger line (center of screen, 52% viewport height)
    const focusY = window.innerHeight * 0.52
    const currentProgress = focusY - (firstRect.top + firstRect.height / 2)

    let clampedHeight = 0
    if (currentProgress > 0) {
      clampedHeight = Math.min(totalDistance, currentProgress)
    }
    setActiveLineHeight(clampedHeight)

    // Determine which milestones have been reached
    const reached: number[] = []
    validNodes.forEach((node, idx) => {
      const nodeRect = node.getBoundingClientRect()
      const nodeCenterY = nodeRect.top + nodeRect.height / 2
      // Milestone activates when scroll passes through its center line
      if (focusY >= nodeCenterY - 20) {
        reached.push(idx)
      }
    })

    // If near top of section, milestone 0 is at least reached
    if (reached.length === 0 && focusY >= firstRect.top - 100) {
      reached.push(0)
    }

    setReachedMilestones(reached)
  }, [])

  // Scroll and resize listener
  useEffect(() => {
    let ticking = false
    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateTimelineProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })

    // Initial update + delayed triggers for image rendering
    updateTimelineProgress()
    const t1 = setTimeout(updateTimelineProgress, 150)
    const t2 = setTimeout(updateTimelineProgress, 600)

    // ResizeObserver for container size shifts
    let ro: ResizeObserver | null = null
    if (timelineContainerRef.current && typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        updateTimelineProgress()
      })
      ro.observe(timelineContainerRef.current)
    }

    return () => {
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      clearTimeout(t1)
      clearTimeout(t2)
      if (ro) ro.disconnect()
    }
  }, [data.projects, updateTimelineProgress])

  const scrollToProject = (id: string) => {
    const el = projectRefs.current[id]
    if (el) {
      const targetY = el.getBoundingClientRect().top + window.scrollY - 110
      window.scrollTo({ top: targetY, behavior: 'smooth' })
    }
  }

  const handleSelectImage = (projectId: string, index: number) => {
    setSelectedImageMap((prev) => ({ ...prev, [projectId]: index }))
  }

  const openLightbox = (images: { src: string; title: string }[], index: number) => {
    setLightboxData({ images, currentIndex: index })
  }

  const closeLightbox = () => setLightboxData(null)

  const nextLightbox = () => {
    if (!lightboxData) return
    setLightboxData({
      ...lightboxData,
      currentIndex: (lightboxData.currentIndex + 1) % lightboxData.images.length
    })
  }

  const prevLightbox = () => {
    if (!lightboxData) return
    setLightboxData({
      ...lightboxData,
      currentIndex:
        (lightboxData.currentIndex - 1 + lightboxData.images.length) %
        lightboxData.images.length
    })
  }

  return (
    <section
      ref={sectionRef}
      id="experience"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-12 md:py-32 px-4 sm:px-6 relative bg-background border-t border-border/70 overflow-hidden"
    >
      {/* ================= PHONG CÁCH 3: DOT MATRIX + INTERACTIVE SPOTLIGHT (LINEAR & SUPABASE) ================= */}

      {/* 1. Base Dot Matrix Layer (Ma trận chấm vi tính rõ nét và sáng hơn) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.55] dark:opacity-[0.48]"
        style={{
          backgroundImage: `radial-gradient(rgba(56, 189, 248, 0.5) 1.35px, transparent 1.35px)`,
          backgroundSize: '24px 24px',
          maskImage:
            'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 98%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 98%)'
        }}
      />

      {/* 2. Highlighted Dot Layer under Mouse Cursor (Các chấm sáng rực rỡ dưới vị trí chuột) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          opacity: mousePos.isHovered ? 1 : 0,
          backgroundImage: `radial-gradient(rgba(34, 211, 238, 0.8) 1.5px, transparent 1.5px)`,
          backgroundSize: '24px 24px',
          maskImage: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, black 30%, transparent 80%)`
        }}
      />

      {/* 3. Interactive Cursor Spotlight (Quầng hào quang rọi theo con trỏ chuột) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: mousePos.isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.18), transparent 75%)`
        }}
      />

      {/* 4. Active Project Ambient Spotlight (Quầng sáng chuyển động theo vị trí dự án đang active) */}
      <div
        className="absolute pointer-events-none transition-all duration-700 ease-out blur-[120px]"
        style={{
          top: `${lineGeometry.top + (activeLineHeight || 0)}px`,
          left: '50%',
          width: '580px',
          height: '400px',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.22), rgba(56, 189, 248, 0.1), transparent 70%)'
        }}
      />

      {/* 4. Micro-noise Matte Texture Overlay (Lớp hạt texture mịn cao cấp loại bỏ hiện tượng bẹt màu) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16 space-y-2 md:space-y-4">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{data.badge || 'KINH NGHIỆM LÀM VIỆC'}</span>
          </MotionDiv>

          <MotionH2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[28px] md:text-5xl font-black tracking-tight text-foreground leading-tight"
          >
            {data.title}
          </MotionH2>

          <MotionP
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans max-w-2xl mx-auto"
          >
            {data.subtitle}
          </MotionP>
        </div>

        {/* ================= COMPANY OVERVIEW BANNER CARD ================= */}
        <div className="max-w-4xl mx-auto mb-20 p-5 sm:p-6 rounded-2xl glass-panel border border-cyan-500/45 dark:border-cyan-400/45 bg-card/90 dark:bg-zinc-950/90 backdrop-blur-xl shadow-[0_0_35px_rgba(6,182,212,0.25),0_10px_40px_rgba(0,0,0,0.5)] flex flex-wrap items-center justify-between gap-4 relative overflow-hidden group hover:border-cyan-400/70 hover:shadow-[0_0_45px_rgba(6,182,212,0.35),0_15px_45px_rgba(0,0,0,0.6)] transition-all duration-300">
          {/* Subtle glowing background light for the banner card */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none opacity-80" />

          <div className="flex items-center gap-3.5 relative z-10">
            <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-300">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-foreground">
                  {data.company}
                </h3>
                <span className="hidden sm:flex px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/15 border border-emerald-500/35 text-emerald-500 dark:text-emerald-400 items-center gap-1 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                {data.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs relative z-10 w-full sm:w-auto">
            <span className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg bg-secondary/80 dark:bg-zinc-900/90 border border-border text-muted-foreground font-medium shadow-sm whitespace-nowrap">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              <span>{data.period}</span>
            </span>
            <span className="px-2 sm:px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/35 text-cyan-600 dark:text-cyan-300 font-mono font-bold shadow-[0_0_12px_rgba(6,182,212,0.15)] whitespace-nowrap">
              {isVi ? '3 Dự Án Thực Chiến' : '3 Hands-on Projects'}
            </span>
          </div>
        </div>

        {/* ================= MAIN TIMELINE & PROJECTS CONTAINER ================= */}
        <div
          ref={timelineContainerRef}
          className="relative"
        >
          {/* ================= CONTINUOUS VERTICAL TIMELINE TRACK ================= */}
          {/* Nối thẳng từ tâm mốc 01 xuống mốc 02 và mốc 03 */}
          {lineGeometry.totalHeight > 0 && (
            <div
              className="absolute pointer-events-none z-0 hidden lg:block"
              style={{
                top: `${lineGeometry.top}px`,
                left: `${lineGeometry.left}px`,
                width: '2px',
                height: `${lineGeometry.totalHeight}px`
              }}
            >
              {/* Inactive Base Track */}
              <div className="w-full h-full bg-border/80 dark:bg-white/10 rounded-full" />

              {/* Terminal End Cap Dot */}
              <div className="absolute -left-[3px] bottom-0 w-2 h-2 rounded-full bg-border/80 dark:bg-white/20" />

              {/* Active Glowing Progress Track (Sáng dần khi cuộn tới đâu) */}
              <div
                className="absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_16px_rgba(6,182,212,0.95)] transition-[height] duration-75 ease-out"
                style={{ height: `${activeLineHeight}px` }}
              >
                {/* Glowing Laser Head Bead at Current Scroll Position */}
                {activeLineHeight > 0 &&
                  activeLineHeight < lineGeometry.totalHeight && (
                    <div className="absolute -left-[5px] bottom-0 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_15px_#38bdf8,0_0_30px_#06b6d4] animate-pulse" />
                  )}
              </div>

              {/* When reached the very bottom, terminal end cap lights up */}
              {activeLineHeight >= lineGeometry.totalHeight &&
                lineGeometry.totalHeight > 0 && (
                  <div className="absolute -left-[3px] bottom-0 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#38bdf8]" />
                )}
            </div>
          )}

          {/* ================= LIST OF PROJECTS WITH MILESTONES ================= */}
          <div className="space-y-8 lg:space-y-28">
            {data.projects.map((proj: any, idx: number) => {
              const currentImgIdx = selectedImageMap[proj.id] || 0
              const currentImg = proj.images[currentImgIdx] || proj.images[0]
              const isReached = reachedMilestones.includes(idx)
              const isLatestActive =
                reachedMilestones[reachedMilestones.length - 1] === idx

              return (
                <div
                  key={proj.id}
                  id={proj.id}
                  ref={(el) => {
                    projectRefs.current[proj.id] = el
                  }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                >
                  {/* ================= CỘT TRÁI: CỘT MỐC DỰ ÁN (lg:col-span-4) ================= */}
                  <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 self-start z-10">
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Milestone Node Circle (Cột mốc tròn nằm ngay trên đường thẳng) */}
                      <div
                        ref={(el) => {
                          milestoneRefs.current[idx] = el
                        }}
                        onClick={() => scrollToProject(proj.id)}
                        className={`relative z-10 w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300 select-none ${
                          isReached
                            ? 'bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 text-white border-2 border-cyan-300 shadow-[0_0_22px_rgba(6,182,212,0.85)] scale-105'
                            : 'bg-card/90 dark:bg-zinc-950/90 text-muted-foreground border-2 border-border/80 hover:border-cyan-500/50 hover:text-foreground'
                        }`}
                        title={isVi ? `Cuộn đến dự án ${proj.name}` : `Scroll to project ${proj.name}`}
                      >
                        {getTimelineIcon(idx)}

                        {/* Active Pulse Wave on currently focused node */}
                        {isLatestActive && (
                          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                        )}
                      </div>

                      {/* Milestone Information Beside the Node */}
                      <div className="space-y-2 pt-0.5">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-xs font-black tracking-wider uppercase transition-colors ${
                              isReached
                                ? 'text-cyan-500 dark:text-cyan-400'
                                : 'text-muted-foreground'
                            }`}
                          >
                            {isVi ? 'DỰ ÁN' : 'PROJECT'} {proj.number}
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-secondary/80 dark:bg-zinc-900 border border-border text-foreground/70">
                            {proj.period || '07/2026 - 10/2026'}
                          </span>
                        </div>

                        <h3
                          onClick={() => scrollToProject(proj.id)}
                          className={`text-xl sm:text-2xl font-black tracking-tight cursor-pointer transition-colors ${
                            isReached
                              ? 'text-foreground'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {proj.name}
                        </h3>

                        <p className="text-xs sm:text-sm font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                          {proj.category}
                        </p>

                        <div className="pt-2 flex items-center gap-2">
                          <button
                            onClick={() => scrollToProject(proj.id)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-500 hover:text-cyan-400 transition-colors cursor-pointer group"
                          >
                            <span>{isVi ? 'Xem chi tiết' : 'View details'}</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ================= CỘT PHẢI: NỘI DUNG CHI TIẾT DỰ ÁN (lg:col-span-8) ================= */}
                  <div className="lg:col-span-8 z-10">
                    <div
                      className={`relative rounded-3xl p-4 sm:p-8 md:p-10 transition-all duration-500 border ${
                        isLatestActive
                          ? 'border-cyan-500/40 bg-card/90 dark:bg-zinc-950/90 shadow-[0_20px_50px_rgba(0,0,0,0.35),0_0_25px_rgba(6,182,212,0.12)]'
                          : 'border-white/10 dark:border-border/70 bg-card/60 dark:bg-zinc-950/60 shadow-xl opacity-95'
                      } backdrop-blur-2xl overflow-hidden`}
                    >
                      {/* Subtle Card Grid Pattern Overlay */}
                      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                      {/* Corner Tech Decorative Accents */}
                      <span className="absolute top-3 left-3 w-2 h-2 border-t-2 border-l-2 border-cyan-400/40" />
                      <span className="absolute top-3 right-3 w-2 h-2 border-t-2 border-r-2 border-cyan-400/40" />

                      {/* Card Header Bar */}
                      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-border/70">
                        <div className="flex items-center gap-4">
                          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600/20 via-sky-500/15 to-cyan-500/10 border border-cyan-500/35 flex items-center justify-center font-mono font-black text-lg text-cyan-500 dark:text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                            {proj.number}
                          </span>
                          <div>
                            <h4 className="text-xl sm:text-2xl font-black text-foreground tracking-tight">
                              {proj.name}
                            </h4>
                            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold tracking-wide">
                              {proj.category}
                            </p>
                          </div>
                        </div>

                        {/* Live Website Link if available */}
                        {proj.link && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-[0_0_18px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.55)] transition-all hover:-translate-y-0.5 select-none"
                          >
                            <span>{isVi ? 'Xem Website Live' : 'View Live Site'}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="relative z-10 flex flex-wrap items-center gap-2 mb-8">
                        {proj.tags.map((tag: string, tIdx: number) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-secondary/60 dark:bg-zinc-900/70 border border-border/80 text-foreground/80 hover:border-cyan-500/40 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Tech Window Mockup (Hình ảnh thực tế) */}
                      <div className="relative z-10 mb-8 space-y-3.5">
                        <div className="rounded-2xl border border-white/20 dark:border-cyan-500/30 bg-card/60 dark:bg-zinc-950/70 backdrop-blur-xl shadow-2xl overflow-hidden group">
                          {/* Window Top Bar Header */}
                          <div className="flex items-center justify-between px-4 py-2.5 bg-secondary/60 dark:bg-zinc-900/80 border-b border-border/60 text-xs font-mono">
                            <div className="flex items-center gap-2">
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                              </span>
                              <span className="font-bold text-[11px] text-foreground tracking-wide">
                                {currentImg.title || (isVi ? 'DỰ ÁN SHOWCASE' : 'PROJECT SHOWCASE')}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                <Terminal className="w-3 h-3 text-cyan-400" />
                                <span>automation-land</span>
                              </span>
                              <button
                                onClick={() =>
                                  openLightbox(proj.images, currentImgIdx)
                                }
                                className="flex items-center gap-1 text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                                title={isVi ? 'Phóng to ảnh' : 'Enlarge image'}
                              >
                                <Maximize2 className="w-3 h-3" />
                                <span>{isVi ? 'Phóng to' : 'Enlarge'}</span>
                              </button>
                            </div>
                          </div>

                          {/* Main Image Preview */}
                          <div
                            onClick={() => openLightbox(proj.images, currentImgIdx)}
                            className="relative aspect-video w-full bg-secondary/20 dark:bg-zinc-900/50 overflow-hidden cursor-zoom-in"
                          >
                            <Image
                              src={currentImg.src}
                              alt={currentImg.title}
                              fill
                              className="object-cover object-top transition-transform duration-700 group-hover:scale-105 select-none"
                              unoptimized
                            />
                            {(proj.id === 'cham-cong' || proj.id === 'talentcore') && (
                              <div className="absolute top-3 left-3 z-10">
                                <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-medium bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/40 flex items-center gap-1.5 shadow-lg select-none">
                                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                  <span>{isVi ? 'Dữ liệu trong ảnh là dữ liệu giả' : 'Data in image is mock data'}</span>
                                </span>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                              <span className="text-xs text-white font-medium drop-shadow-md">
                                {isVi ? 'Click để xem ảnh kích thước đầy đủ' : 'Click to view full size image'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Thumbnails Row */}
                        {proj.images.length > 1 && (
                          <div className="flex items-center gap-3 overflow-x-auto pb-1 pt-1">
                            {proj.images.map((img: any, iIdx: number) => {
                              const isSelected = iIdx === currentImgIdx
                              return (
                                <button
                                  key={iIdx}
                                  onClick={() => handleSelectImage(proj.id, iIdx)}
                                  className={`relative w-20 sm:w-24 aspect-video rounded-xl overflow-hidden border transition-all cursor-pointer shrink-0 ${
                                    isSelected
                                      ? 'border-cyan-500 ring-2 ring-cyan-500/50 scale-105'
                                      : 'border-border/70 opacity-60 hover:opacity-100 hover:border-cyan-500/40'
                                  }`}
                                  title={img.title}
                                >
                                  <Image
                                    src={img.src}
                                    alt={img.title}
                                    fill
                                    className="object-cover object-top"
                                    unoptimized
                                  />
                                </button>
                              )
                            })}
                          </div>
                        )}
                      </div>

                      {/* Technical Contribution Highlights Grid */}
                      <div className="relative z-10 space-y-4">
                        <h5 className="text-xs font-mono font-bold tracking-wider text-muted-foreground uppercase flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{isVi ? 'Đóng góp kỹ thuật cốt lõi:' : 'Core Technical Contributions:'}</span>
                        </h5>

                        <div className="space-y-3.5">
                          {proj.highlights.map((item: any, hIdx: number) => (
                            <div
                              key={hIdx}
                              className="p-4 sm:p-5 rounded-2xl bg-secondary/35 dark:bg-zinc-900/40 border border-border/60 hover:border-cyan-500/30 transition-all duration-300 space-y-2 group"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="p-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                                  {getHighlightIcon(item.title)}
                                </div>
                                <h6 className="text-sm sm:text-base font-bold text-foreground">
                                  {item.title}
                                </h6>
                              </div>
                              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-8 font-sans">
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ================= FULLSCREEN LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:px-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-50"
              title="Đóng (ESC)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            {lightboxData.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevLightbox()
                  }}
                  className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-50"
                  title="Ảnh trước"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextLightbox()
                  }}
                  className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-50"
                  title="Ảnh tiếp theo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Modal Image Content */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[75vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src={lightboxData.images[lightboxData.currentIndex].src}
                  alt={lightboxData.images[lightboxData.currentIndex].title}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Caption and Index Counter */}
              <div className="mt-4 flex items-center justify-between w-full text-white/90 text-sm font-mono px-2">
                <span>{lightboxData.images[lightboxData.currentIndex].title}</span>
                <span className="text-white/60">
                  {lightboxData.currentIndex + 1} / {lightboxData.images.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
