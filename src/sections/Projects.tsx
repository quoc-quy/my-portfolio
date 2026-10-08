'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import {
  Github,
  ExternalLink,
  Terminal,
  AlertTriangle,
  Cpu,
  Layers,
  Award,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Calendar
} from 'lucide-react'
import SystemDiagram from '@/components/SystemDiagram'
import Image from 'next/image'

type ProjectSectionProps = {
  data: any
  lang: string
}

export default function Projects({ data, lang }: ProjectSectionProps) {
  const isVi = lang === 'vi'
  const [activeTab, setActiveTab] = useState<'featured' | 'labs'>('featured')
  
  // Section Ref and Mouse Spotlight State (Phương án 1: Blueprint Interactive Spotlight)
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState<{ x: number; y: number; isHovered: boolean }>({
    x: -1000,
    y: -1000,
    isHovered: false,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    })
  }

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }))
  }

  // Track deep tab for each project (architecture, challenges, tradeoffs)
  const [caseStudyTabs, setCaseStudyTabs] = useState<Record<string, 'architecture' | 'challenges' | 'tradeoffs'>>({
    talentcore: 'architecture',
    chatpulse: 'architecture',
    tripbee: 'architecture',
  })

  // Selected image index for each project
  const [selectedImageMap, setSelectedImageMap] = useState<Record<string, number>>({
    talentcore: 0,
    chatpulse: 0,
    tripbee: 0,
  })

  // Fullscreen Lightbox Modal state
  const [lightboxData, setLightboxData] = useState<{
    images: { src: string; title: string }[]
    currentIndex: number
  } | null>(null)

  const [activeLabCategory, setActiveLabCategory] = useState<string>('all')

  // Filter main featured projects and baseline practice projects
  const featuredProjects = data.items.filter((item: any) => item.caseStudy)
  const labProjects = data.items.filter((item: any) => !item.caseStudy)

  const filteredLabProjects = labProjects.filter((project: any) => {
    if (activeLabCategory === 'all') return true
    return project.category === activeLabCategory
  })

  const setTabForProject = (projectId: string, tab: 'architecture' | 'challenges' | 'tradeoffs') => {
    setCaseStudyTabs((prev) => ({ ...prev, [projectId]: tab }))
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
      currentIndex: (lightboxData.currentIndex + 1) % lightboxData.images.length,
    })
  }

  const prevLightbox = () => {
    if (!lightboxData) return
    setLightboxData({
      ...lightboxData,
      currentIndex:
        (lightboxData.currentIndex - 1 + lightboxData.images.length) %
        lightboxData.images.length,
    })
  }

  const scrollToProject = (id: string) => {
    const el = document.getElementById(`project-card-${id}`)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Get project impact stats with genuine benchmark notes (Proof-of-work)
  const getProjectMetrics = (projectId: string) => {
    if (projectId === 'talentcore') {
      return [
        {
          value: '< 200ms',
          label: isVi ? 'Độ trễ phản hồi API' : 'API Response Latency',
          proof: isVi ? 'Apache Benchmark 50 req/s, NestJS Modular core' : 'Benchmarked via Apache Bench (50 req/s)',
          color: 'text-cyan-400',
        },
        {
          value: '100%',
          label: isVi ? 'Không AI ảo giác (Rubric 6-Tier)' : 'Zero Hallucination (Rubric)',
          proof: isVi ? 'Đối soát bằng chứng trích xuất từ raw CV text' : 'Cross-checked against raw extracted CV tokens',
          color: 'text-emerald-400',
        },
        {
          value: '5 Stages',
          label: isVi ? 'Kanban kéo thả (@dnd-kit)' : 'Kanban Drag & Drop',
          proof: isVi ? 'Optimistic UI cập nhật tức thì, 60fps mượt mà' : 'Optimistic UI state updates at 60fps',
          color: 'text-sky-400',
        },
        {
          value: 'Real-time',
          label: isVi ? 'Giám sát SLA Tuyển dụng' : 'SLA Analytics Visibility',
          proof: isVi ? 'MongoDB Aggregation Pipeline đa tầng tính Time-to-Hire' : 'Multi-stage MongoDB aggregation pipelines',
          color: 'text-blue-400',
        },
      ]
    }
    if (projectId === 'chatpulse') {
      return [
        {
          value: '92%',
          label: isVi ? 'Độ chính xác RAG AI' : 'RAG AI Accuracy',
          proof: isVi ? 'Semantic Similarity với Gemini Text Embeddings' : 'Gemini Text Embedding cosine threshold 0.78',
          color: 'text-cyan-400',
        },
        {
          value: '7 Users',
          label: isVi ? 'Gọi video đồng thời (LiveKit)' : 'Concurrent Video Participants',
          proof: isVi ? 'LiveKit SFU WebRTC WebAssembly video codec' : 'LiveKit SFU WebRTC WebAssembly engine',
          color: 'text-emerald-400',
        },
        {
          value: '< 50ms',
          label: isVi ? 'Độ trễ tin nhắn Socket.io' : 'Socket.IO Messaging Latency',
          proof: isVi ? 'WebSocket engine tích hợp Redis Pub/Sub adapter' : 'WebSocket pipeline with Redis Pub/Sub backend',
          color: 'text-sky-400',
        },
        {
          value: '2,368',
          label: isVi ? 'Chunks văn bản Vector Search' : 'Vector Chunks Indexed',
          proof: isVi ? 'Phân đoạn ngữ nghĩa 500 tokens lưu trữ vector' : 'Semantic chunking (500 tokens) with metadata filter',
          color: 'text-blue-400',
        },
      ]
    }
    return [
      {
        value: '< 60s',
        label: isVi ? 'Deploy CI/CD GitHub Actions' : 'CI/CD Deploy Speed',
        proof: isVi ? 'Pipeline build, test và release Docker tự động' : 'Automated build, test and Docker image push',
        color: 'text-cyan-400',
      },
      {
        value: '100%',
        label: isVi ? 'Không quá tải chỗ (@Version)' : 'Zero Overbooking Rate',
        proof: isVi ? 'Optimistic Locking (@Version) chống triệt để race condition' : 'Optimistic Locking (@Version) eliminates race hazards',
        color: 'text-emerald-400',
      },
      {
        value: '3 Phút',
        label: isVi ? 'Tự giải phóng chỗ không trả tiền' : 'Auto-release Unpaid Slots',
        proof: isVi ? 'CronJob định kỳ tự hủy booking chưa thanh toán' : 'Scheduled cron worker rolls back abandoned holds',
        color: 'text-amber-400',
      },
      {
        value: '6 Filters',
        label: isVi ? 'Bộ lọc tìm kiếm tour thông minh' : 'Dynamic Search Filters',
        proof: isVi ? 'Spring Data JPA Specifications & Caching Redis' : 'Spring Data JPA Specifications + Redis caching',
        color: 'text-blue-400',
      },
    ]
  }

  return (
    <section
      ref={sectionRef}
      id="projects"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-12 md:py-28 px-4 sm:px-6 relative bg-[#020617] dark:bg-[#030712] overflow-hidden border-t border-border/70"
    >
      {/* ================= PHƯƠNG ÁN 1: SYSTEM BLUEPRINT GRID & INTERACTIVE SPOTLIGHT ================= */}
      
      {/* 1. Base Blueprint Grid (Lưới bản vẽ kỹ thuật CAD 56px x 56px - Kế thừa từ Hero) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.16) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.16) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 50%, transparent 95%)',
        }}
      />

      {/* 2. Grid Intersections Micro Plus Markers (+) hoặc Dots tại các nút giao (Kế thừa từ Experience) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.45] dark:opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.8) 1.5px, transparent 1.5px)`,
          backgroundSize: '56px 56px',
          backgroundPosition: '-0.5px -0.5px',
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 45%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 45%, transparent 95%)',
        }}
      />

      {/* 3. Interactive Cursor Spotlight on Blueprint Grid (Lưới bừng sáng theo vị trí chuột) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          opacity: mousePos.isHovered ? 1 : 0,
          backgroundImage: `
            linear-gradient(to right, rgba(34, 211, 238, 0.55) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.55) 1px, transparent 1px)
          `,
          backgroundSize: '56px 56px',
          maskImage: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 80%)`,
        }}
      />

      {/* 4. Interactive Cursor Radial Halo (Hào quang xanh dịu rọi theo con trỏ chuột) */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: mousePos.isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.16), transparent 75%)`,
        }}
      />

      {/* 5. Deep Ambient Lateral Glow (Chùm sáng định hướng hai bên lề tôn vinh các card) */}
      <div
        className="absolute -top-32 -left-36 w-[650px] h-[550px] rounded-full blur-[90px] opacity-20 dark:opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, #1e3a8a 50%, transparent 75%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <div
        className="absolute top-1/2 -right-36 w-[700px] h-[580px] rounded-full blur-[95px] opacity-15 dark:opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #2563eb 0%, #0284c7 45%, transparent 75%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      <div
        className="absolute -bottom-40 left-1/4 w-[750px] h-[500px] rounded-full blur-[85px] opacity-15 dark:opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, #1d4ed8 50%, transparent 75%)',
          transform: 'translate3d(0, 0, 0)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 md:gap-6 text-left">
          <div className="space-y-3">
            <MotionDiv
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{isVi ? 'DỰ ÁN & HỆ THỐNG CỐT LÕI' : 'FEATURED PORTFOLIO'}</span>
            </MotionDiv>

            <MotionH2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[28px] md:text-5xl font-black tracking-tight text-foreground flex items-center gap-3"
            >
              <Terminal className="w-8 h-8 text-cyan-400" />
              <span>{data.title}</span>
            </MotionH2>

            <MotionP
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-sm md:text-base text-muted-foreground max-w-2xl font-sans leading-relaxed"
            >
              {data.subtitle || (isVi ? 'Các nền tảng ứng dụng thực tế với kiến trúc tối ưu, khả năng chịu tải và tích hợp AI.' : 'High-impact production systems engineered for real-time concurrency, scalability, and AI integrations.')}
            </MotionP>
          </div>

          {/* Core Tabs Trigger (Featured Systems vs. Practice Labs) */}
          <div className="flex border border-cyan-500/35 dark:border-cyan-500/40 p-1.5 rounded-xl bg-card/90 dark:bg-zinc-950/90 self-start md:self-end select-none shadow-[0_0_20px_rgba(6,182,212,0.12)]">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'featured'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-cyan-300/40'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.04]'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>{isVi ? 'Đồ Án Hệ Thống (3)' : 'Core Systems (3)'}</span>
            </button>
            <button
              onClick={() => setActiveTab('labs')}
              className={`px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'labs'
                  ? 'bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-cyan-300/40'
                  : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.04]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isVi ? 'Bài Tập Thực Hành' : 'Practice Labs'}</span>
            </button>
          </div>
        </div>

        {/* ================= TAB CONTENT DISPLAY ================= */}
        <AnimatePresence mode="wait">
          {activeTab === 'featured' ? (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 md:space-y-12"
            >
              {/* Quick Navigation Project Selector Pills */}
              <div className="flex flex-wrap items-center gap-2.5 pb-4 border-b border-border/60 select-none">
                <span className="text-xs font-mono text-muted-foreground mr-1 hidden sm:inline">
                  {isVi ? 'Chuyển nhanh:' : 'Jump to:'}
                </span>
                {featuredProjects.map((project: any, pIdx: number) => (
                  <button
                    key={project.id}
                    onClick={() => scrollToProject(project.id)}
                    className="px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all border border-cyan-500/25 dark:border-cyan-500/30 bg-card/60 dark:bg-zinc-950/70 text-muted-foreground hover:text-foreground hover:border-cyan-400/60 hover:bg-cyan-500/10 cursor-pointer flex items-center gap-2 shadow-sm"
                  >
                    <span className="text-cyan-400 font-bold">0{pIdx + 1}.</span>
                    <span>{project.title.split(' - ')[0]}</span>
                    <span className="text-[10px] text-muted-foreground">↓</span>
                  </button>
                ))}
              </div>

              {/* Stacked Featured Projects List */}
              <div className="space-y-8 md:space-y-20 py-2 md:py-4 relative">
                {featuredProjects.map((project: any, idx: number) => {
                  const activeTabForProj = caseStudyTabs[project.id] || 'architecture'
                  const imagesList = project.images && project.images.length > 0
                    ? project.images
                    : [{ src: project.image, title: project.title }]
                  const currentImgIdx = selectedImageMap[project.id] || 0
                  const currentImg = imagesList[currentImgIdx] || imagesList[0]
                  const metrics = getProjectMetrics(project.id)

                  return (
                    <div
                      key={project.id}
                      id={`project-card-${project.id}`}
                      className="relative w-full rounded-3xl bg-[#090d16]/95 dark:bg-[#070b14]/98 border border-white/10 dark:border-cyan-500/25 p-4 sm:p-8 md:p-10 shadow-2xl transition-all duration-300 overflow-hidden"
                      style={{ contentVisibility: 'auto', containIntrinsicSize: '0 850px' }}
                    >
                      {/* Corner Tech Decorative Accents */}
                      <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400/40" />
                      <span className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400/40" />

                      {/* Card Header Top Bar */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 md:pb-6 md:mb-8 border-b border-border/70">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="hidden sm:flex w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/25 via-sky-500/20 to-cyan-500/15 border border-cyan-500/35 items-center justify-center font-mono font-black text-xl text-cyan-400 shadow-[0_0_18px_rgba(6,182,212,0.25)] shrink-0">
                            0{idx + 1}
                          </span>
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-cyan-400 font-extrabold uppercase">
                                {project.tagline}
                              </span>
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping hidden sm:inline-block" />
                              {project.period && (
                                <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/15 border border-cyan-500/35 text-cyan-300 items-center gap-1 shadow-[0_0_12px_rgba(6,182,212,0.18)]">
                                  <Calendar className="w-3 h-3 text-sky-400" />
                                  <span>{project.period}</span>
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-foreground tracking-tight leading-snug">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        {/* Top Action Links (Source & Demo) */}
                        <div className="flex items-center gap-2 pt-1 sm:pt-0">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono font-bold bg-secondary/80 dark:bg-zinc-900 border border-border hover:border-cyan-500/50 text-foreground transition-all hover:-translate-y-0.5 cursor-pointer shadow-sm select-none"
                            >
                              <Github size={13} />
                              <span>SOURCE</span>
                            </a>
                          )}
                          {project.demo && project.demo !== '#' ? (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono font-bold bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all hover:-translate-y-0.5 cursor-pointer shadow-md select-none"
                            >
                              <ExternalLink size={13} />
                              <span>LIVE DEMO</span>
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] sm:text-[11px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 select-none">
                              <ShieldCheck size={12} />
                              <span>ENTERPRISE ATS</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap items-center gap-2 mb-8">
                        {project.stack.map((tech: string, i: number) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-secondary/70 dark:bg-zinc-900/80 border border-border/80 hover:border-cyan-500/40 text-foreground/90 text-xs font-mono font-bold rounded-lg transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Case Study Details Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                        
                        {/* ================= LEFT SIDE: DEEP ARCHITECTURE & TABS (7 / 12) ================= */}
                        <div className="lg:col-span-7 space-y-6 text-left">
                          
                          {/* Problem / Solution Cards - Styled like Authentic Engineering Notes */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-5 bg-amber-500/[0.04] dark:bg-amber-950/20 border-l-4 border-l-amber-500/80 border border-border/80 rounded-2xl space-y-2 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
                              <div className="flex items-center gap-2 text-amber-500 dark:text-amber-400 font-bold text-xs uppercase tracking-wider font-mono">
                                <AlertTriangle className="w-4 h-4" />
                                <span>{isVi ? 'Bối Cảnh & Thách Thức' : 'Business Context & Problem'}</span>
                              </div>
                              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans italic">
                                &ldquo;{project.caseStudy.problem}&rdquo;
                              </p>
                            </div>

                            <div className="p-5 bg-cyan-500/[0.04] dark:bg-cyan-950/20 border-l-4 border-l-cyan-500/80 border border-border/80 rounded-2xl space-y-2 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
                              <div className="flex items-center gap-2 text-cyan-500 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider font-mono">
                                <Cpu className="w-4 h-4" />
                                <span>{isVi ? 'Kiến Trúc & Giải Pháp' : 'Architectural Resolution'}</span>
                              </div>
                              <p className="text-xs sm:text-sm text-foreground/90 dark:text-zinc-200 leading-relaxed font-sans">
                                {project.caseStudy.solution}
                              </p>
                            </div>
                          </div>

                          {/* Case Study Deep Tabs Navigation (3 Engineering Tabs) */}
                          <div className="hidden lg:block">
                            <div className="flex border-b border-border/80 pb-2 pt-2 gap-4 sm:gap-6 select-none overflow-x-auto">
                              <button
                                onClick={() => setTabForProject(project.id, 'architecture')}
                                className={`pb-2 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer shrink-0 flex items-center gap-1.5 ${
                                  activeTabForProj === 'architecture'
                                    ? 'border-cyan-400 text-cyan-400'
                                    : 'border-transparent text-muted-foreground hover:text-foreground'
                                }`}
                              >
                                <Layers className="w-3.5 h-3.5" />
                                <span>{isVi ? 'Kiến Trúc & Data Flow' : 'Architecture & Flow'}</span>
                              </button>
                              <button
                                onClick={() => setTabForProject(project.id, 'challenges')}
                                className={`pb-2 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer shrink-0 flex items-center gap-1.5 ${
                                  activeTabForProj === 'challenges'
                                    ? 'border-cyan-400 text-cyan-400'
                                    : 'border-transparent text-muted-foreground hover:text-foreground'
                                }`}
                              >
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>{isVi ? 'Thử Thách Kỹ Thuật' : 'Technical Challenges'}</span>
                              </button>
                              <button
                                onClick={() => setTabForProject(project.id, 'tradeoffs')}
                                className={`pb-2 text-xs sm:text-sm font-bold tracking-wide transition-all border-b-2 cursor-pointer shrink-0 flex items-center gap-1.5 ${
                                  activeTabForProj === 'tradeoffs'
                                    ? 'border-cyan-400 text-cyan-400'
                                    : 'border-transparent text-muted-foreground hover:text-foreground'
                                }`}
                              >
                                <Award className="w-3.5 h-3.5" />
                                <span>{isVi ? 'Đánh Đổi & Kết Quả' : 'Trade-offs & Results'}</span>
                              </button>
                            </div>

                            {/* Deep Tab Content */}
                            <div className="pt-2 min-h-[300px]">
                              <AnimatePresence mode="wait">
                                {activeTabForProj === 'architecture' && (
                                  <motion.div
                                    key="architecture"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-4"
                                  >
                                    <SystemDiagram projectId={project.id} lang={lang} />
                                  </motion.div>
                                )}

                                {activeTabForProj === 'challenges' && (
                                  <motion.div
                                    key="challenges"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-4"
                                  >
                                    {project.caseStudy.challenges.map((c: any, cIdx: number) => (
                                      <div
                                        key={cIdx}
                                        className="p-5 bg-secondary/35 dark:bg-zinc-900/50 border border-border/70 rounded-2xl space-y-2 hover:border-cyan-500/30 transition-all duration-300"
                                      >
                                        <h4 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                                          <span className="w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 flex items-center justify-center font-mono text-xs font-bold">
                                            0{cIdx + 1}
                                          </span>
                                          <span>{c.title}</span>
                                        </h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-8 font-sans">
                                          {c.desc}
                                        </p>
                                        <div className="text-xs sm:text-sm text-foreground/90 dark:text-zinc-200 leading-relaxed pt-2.5 mt-2 border-t border-border/60 pl-8">
                                          <strong className="text-cyan-500 dark:text-cyan-400 font-semibold">
                                            {isVi ? 'Giải pháp kỹ thuật: ' : 'Resolution: '}
                                          </strong>
                                          <span className="font-sans">{c.resolution}</span>
                                        </div>
                                      </div>
                                    ))}
                                  </motion.div>
                                )}

                                {activeTabForProj === 'tradeoffs' && (
                                  <motion.div
                                    key="tradeoffs"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="space-y-4"
                                  >
                                    {project.caseStudy.tradeOffs.map((t: any, tIdx: number) => (
                                      <div
                                        key={tIdx}
                                        className="p-5 bg-secondary/35 dark:bg-zinc-900/50 border border-border/70 rounded-2xl space-y-2 hover:border-cyan-500/30 transition-all duration-300"
                                      >
                                        <h4 className="text-sm sm:text-base font-bold text-foreground flex items-center gap-2">
                                          <Layers className="w-4 h-4 text-cyan-400" />
                                          <span>{t.title}</span>
                                        </h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans pl-6">
                                          {t.desc}
                                        </p>
                                      </div>
                                    ))}

                                    <div className="p-5 bg-gradient-to-br from-blue-950/20 via-cyan-950/15 to-transparent border border-cyan-500/30 rounded-2xl space-y-2 relative overflow-hidden">
                                      <div className="flex items-center gap-2">
                                        <Award className="w-4 h-4 text-cyan-400 animate-pulse" />
                                        <h4 className="text-sm sm:text-base font-bold text-foreground">
                                          {isVi ? 'Kết quả thu được thực tế' : 'Key Result Metrics'}
                                        </h4>
                                      </div>
                                      <p className="text-xs sm:text-sm text-foreground/90 dark:text-zinc-200 leading-relaxed font-sans pl-6">
                                        {project.caseStudy.results}
                                      </p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                        </div>

                        {/* ================= RIGHT SIDE: BROWSER MOCKUP & IMAGE SWITCHER (5 / 12) ================= */}
                        <div className="lg:col-span-5 space-y-6">
                          
                          {/* Styled macOS Browser Preview Window */}
                          <div className="rounded-2xl border border-white/15 dark:border-cyan-500/30 bg-card/90 dark:bg-zinc-950/90 shadow-2xl overflow-hidden group">
                            
                            {/* Window Top Bar Header */}
                            <div className="h-9 bg-secondary/70 dark:bg-zinc-900/80 border-b border-border/60 flex items-center justify-between px-3.5 select-none text-xs font-mono">
                              <div className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                                <span className="ml-2 text-[11px] text-muted-foreground hidden sm:inline">
                                  {project.id}.quy.dev
                                </span>
                              </div>
                              <button
                                onClick={() => openLightbox(imagesList, currentImgIdx)}
                                className="flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:underline cursor-pointer"
                                title="Phóng to ảnh"
                              >
                                <Maximize2 className="w-3.5 h-3.5" />
                                <span>Phóng to</span>
                              </button>
                            </div>

                            {/* Main Active Image Display */}
                            <div
                              onClick={() => openLightbox(imagesList, currentImgIdx)}
                              className="relative aspect-video w-full bg-secondary/30 dark:bg-zinc-950 overflow-hidden cursor-zoom-in"
                            >
                              <Image
                                src={currentImg.src}
                                alt={currentImg.title || project.title}
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105 select-none"
                                unoptimized
                              />
                              {(project.id === 'cham-cong' || project.id === 'talentcore') && (
                                <div className="absolute top-3 left-3 z-10">
                                  <span className="px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-medium bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/40 flex items-center gap-1.5 shadow-lg select-none">
                                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                    <span>{isVi ? 'Dữ liệu trong ảnh là dữ liệu giả' : 'Data in image is mock data'}</span>
                                  </span>
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-xs text-white font-medium drop-shadow-md">
                                  {currentImg.title || (isVi ? 'Click để xem kích thước đầy đủ' : 'Click to view full size')}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Thumbnail Strip Switcher */}
                          {imagesList.length > 1 && (
                            <div className="space-y-1.5">
                              <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground px-1">
                                <span>{isVi ? 'Bộ sưu tập giao diện' : 'Screen gallery'} ({imagesList.length})</span>
                                <span className="text-cyan-400 font-semibold">{currentImgIdx + 1}/{imagesList.length}</span>
                              </div>
                              <div className="flex items-center gap-2.5 overflow-x-auto pb-1.5 pt-0.5">
                                {imagesList.map((img: any, iIdx: number) => {
                                  const isSelected = iIdx === currentImgIdx
                                  return (
                                    <button
                                      key={iIdx}
                                      onClick={() => handleSelectImage(project.id, iIdx)}
                                      className={`relative w-20 sm:w-24 aspect-video rounded-xl overflow-hidden border transition-all cursor-pointer shrink-0 ${
                                        isSelected
                                          ? 'border-cyan-400 ring-2 ring-cyan-400/50 scale-105'
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
                            </div>
                          )}

                          {/* Impact Metrics Summary Card with Genuine Benchmark Notes */}
                          <div className="p-6 rounded-2xl bg-secondary/40 dark:bg-zinc-900/60 border border-border/80 space-y-4 text-left shadow-lg">
                            <div className="text-[11px] font-mono tracking-widest text-muted-foreground font-extrabold uppercase flex items-center justify-between">
                              <span>{isVi ? 'CHỈ SỐ ĐO LƯỜNG THỰC TẾ (BENCHMARKED)' : 'VERIFIED BENCHMARKS'}</span>
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                              {metrics.map((m, mIdx) => (
                                <div
                                  key={mIdx}
                                  className="p-3 rounded-xl bg-card/60 dark:bg-zinc-950/60 border border-border/70 space-y-1"
                                >
                                  <div className={`text-2xl font-black ${m.color}`}>
                                    {m.value}
                                  </div>
                                  <div className="text-[11px] text-foreground font-mono leading-tight font-bold">
                                    {m.label}
                                  </div>
                                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono leading-tight italic pt-1 border-t border-border/50">
                                    {m.proof}
                                  </div>
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
            </motion.div>
          ) : (
            <motion.div
              key="labs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 w-full"
            >
              {/* Category Sub-tabs */}
              <div className="flex flex-wrap gap-2.5 select-none border-b border-border/60 pb-5">
                {Object.entries(data.categories || {})
                  .filter(([key]) => key !== 'main')
                  .map(([key, label]: [string, any]) => (
                    <button
                      key={key}
                      onClick={() => setActiveLabCategory(key)}
                      className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 border cursor-pointer ${
                        activeLabCategory === key
                          ? 'bg-cyan-500 text-white border-cyan-300/60 shadow-[0_0_18px_rgba(6,182,212,0.4)]'
                          : 'bg-card/70 dark:bg-zinc-900/80 border-cyan-500/30 dark:border-cyan-500/35 text-muted-foreground hover:text-foreground hover:border-cyan-400/60 hover:bg-cyan-500/10 shadow-sm'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
              </div>

              {/* Grid of Filtered Practice Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLabProjects.map((project: any) => (
                  <div
                    key={project.title}
                    className="group relative bg-card/90 dark:bg-zinc-950/90 border border-white/10 dark:border-cyan-500/20 rounded-2xl transition-all duration-300 flex flex-col justify-between text-left overflow-hidden min-h-[420px] h-full shadow-lg hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                    style={{ contentVisibility: 'auto', containIntrinsicSize: '0 420px' }}
                  >
                    {/* Image Preview at the top */}
                    <div className="relative aspect-video w-full overflow-hidden bg-muted border-b border-border/80 flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      {/* Overlay Category badge */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 bg-background/90 dark:bg-zinc-950/90 text-[10px] font-mono font-bold uppercase rounded-md border border-border/40 text-foreground">
                        {project.category}
                      </div>
                    </div>

                    {/* Content details inside the card */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div className="space-y-3">
                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.stack.slice(0, 3).map((s: string, idx: number) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-secondary dark:bg-zinc-900 text-muted-foreground dark:text-zinc-400 font-mono text-[10px] border border-border/80 rounded font-bold"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <div className="space-y-1.5">
                          <h4 className="font-bold text-foreground text-base line-clamp-1 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed font-sans line-clamp-3">
                            {project.desc}
                          </p>
                        </div>
                      </div>

                      {/* Bottom action links */}
                      <div className="flex items-center justify-between pt-4 border-t border-border/70 mt-4 select-none">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-muted-foreground hover:text-cyan-400 transition-colors"
                        >
                          <Github size={13} />
                          <span>{data.viewGithub}</span>
                        </a>
                        {project.demo && project.demo !== '#' && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-muted-foreground hover:text-cyan-400 transition-colors"
                          >
                            <ExternalLink size={13} />
                            <span>{data.viewDemo}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
