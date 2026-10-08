'use client'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import {
  Layout,
  Server,
  Database,
  Cloud,
  Cpu,
  Wrench,
  Sparkles
} from 'lucide-react'

type SkillsProps = {
  data: any
  lang?: string
}

const categoryIcons: Record<number, { icon: React.ReactNode; color: string; border: string; glow: string }> = {
  0: {
    icon: <Layout className="w-5 h-5 text-cyan-400" />,
    color: 'text-cyan-400',
    border: 'border-cyan-500/30 group-hover:border-cyan-400/60',
    glow: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
  },
  1: {
    icon: <Server className="w-5 h-5 text-blue-400" />,
    color: 'text-blue-400',
    border: 'border-blue-500/30 group-hover:border-blue-400/60',
    glow: 'group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
  },
  2: {
    icon: <Database className="w-5 h-5 text-sky-400" />,
    color: 'text-sky-400',
    border: 'border-sky-500/30 group-hover:border-sky-400/60',
    glow: 'group-hover:shadow-[0_0_25px_rgba(14,165,233,0.15)]',
  },
  3: {
    icon: <Cloud className="w-5 h-5 text-cyan-400" />,
    color: 'text-cyan-400',
    border: 'border-cyan-500/30 group-hover:border-cyan-400/60',
    glow: 'group-hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
  },
  4: {
    icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    color: 'text-emerald-400',
    border: 'border-emerald-500/30 group-hover:border-emerald-400/60',
    glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
  },
  5: {
    icon: <Wrench className="w-5 h-5 text-blue-400" />,
    color: 'text-blue-400',
    border: 'border-blue-500/30 group-hover:border-blue-400/60',
    glow: 'group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
  },
}

export default function Skills({ data }: SkillsProps) {
  // Section Ref and Mouse Spotlight State (Đồng bộ với Hero, Experience và Projects)
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

  return (
    <section
      ref={sectionRef}
      id="skills"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-12 md:py-28 px-4 sm:px-6 relative bg-[#020617] dark:bg-[#030712] overflow-hidden border-t border-border/70"
    >
      {/* ================= OPTION A: CONCENTRIC ORBITAL RADAR & SATELLITE CONSTELLATION ================= */}
      {/* Helper function / JSX for Concentric Radar Geometry */}
      {(() => {
        const renderRadarGeometry = (isSpotlight = false) => (
          <div
            className="absolute top-[44%] left-1/2 pointer-events-none flex items-center justify-center"
            style={{ transform: 'translate3d(-50%, -50%, 0)' }}
          >
            {/* 1. Center Origin Reticle & Core Node */}
            <div
              className={`relative w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                isSpotlight ? 'border-cyan-400/80' : 'border-cyan-500/40'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  isSpotlight
                    ? 'bg-cyan-300 shadow-[0_0_12px_#67e8f9]'
                    : 'bg-cyan-400/80 shadow-[0_0_8px_#22d3ee]'
                }`}
              />
            </div>

            {/* 2. Radar Primary & Diagonal Axes (Đường trục định vị góc tọa độ) */}
            <div
              className={`absolute w-[2000px] h-px ${
                isSpotlight
                  ? 'bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent'
                  : 'bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent'
              }`}
            />
            <div
              className={`absolute h-[1600px] w-px ${
                isSpotlight
                  ? 'bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent'
                  : 'bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent'
              }`}
            />
            <div
              className={`absolute w-[1800px] h-px border-t border-dashed rotate-45 origin-center ${
                isSpotlight ? 'border-cyan-400/45' : 'border-cyan-500/15'
              }`}
            />
            <div
              className={`absolute w-[1800px] h-px border-t border-dashed -rotate-45 origin-center ${
                isSpotlight ? 'border-cyan-400/45' : 'border-cyan-500/15'
              }`}
            />

            {/* 3. Concentric Orbital Rings (Các vòng quỹ đạo đồng tâm) */}
            {/* Ring 1 (280px) - Lõi quỹ đạo trung tâm */}
            <div
              className={`absolute w-[280px] h-[280px] rounded-full border border-dashed transition-colors duration-300 ${
                isSpotlight
                  ? 'border-cyan-400/70 shadow-[0_0_18px_rgba(34,211,238,0.25)]'
                  : 'border-cyan-500/25'
              }`}
            />

            {/* Ring 2 (540px) - Vòng quỹ đạo lõi + Vệ tinh Node 01 */}
            <div
              className={`absolute w-[540px] h-[540px] rounded-full border transition-colors duration-300 ${
                isSpotlight ? 'border-sky-300/60' : 'border-sky-500/18'
              }`}
            >
              <div className="absolute -top-1.5 right-[22%] flex items-center gap-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      isSpotlight
                        ? 'bg-cyan-300 shadow-[0_0_12px_#67e8f9]'
                        : 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]'
                    }`}
                  />
                </span>
                <span className="font-mono text-[8px] tracking-wider text-cyan-300/60 uppercase select-none hidden sm:inline">
                  SAT_01 // CORE
                </span>
              </div>
            </div>

            {/* Ring 3 (840px) - Vòng quỹ đạo hệ thống + Tọa độ cực 000° & 180° + Vệ tinh Node 02 */}
            <div
              className={`absolute w-[840px] h-[840px] rounded-full border border-dashed transition-colors duration-300 ${
                isSpotlight
                  ? 'border-cyan-400/60 shadow-[0_0_20px_rgba(34,211,238,0.2)]'
                  : 'border-cyan-500/20'
              }`}
            >
              <div className="absolute -bottom-1.5 left-[18%] flex items-center gap-1.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      isSpotlight
                        ? 'bg-emerald-300 shadow-[0_0_12px_#6ee7b7]'
                        : 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
                    }`}
                  />
                </span>
                <span className="font-mono text-[8px] tracking-wider text-emerald-300/60 uppercase select-none hidden sm:inline">
                  SAT_02 // STACK
                </span>
              </div>
              <span className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-widest text-cyan-400/40 uppercase select-none">
                RAD_000°N
              </span>
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[8px] tracking-widest text-cyan-400/40 uppercase select-none">
                RAD_180°S
              </span>
            </div>

            {/* Ring 4 (1180px) - Vòng quỹ đạo mở rộng + Tọa độ cực 090° & 270° + Beacon 03 */}
            <div
              className={`absolute w-[1180px] h-[1180px] rounded-full border transition-colors duration-300 ${
                isSpotlight ? 'border-sky-300/50' : 'border-sky-500/15'
              }`}
            >
              <div className="absolute top-[16%] left-[10%] flex items-center gap-1.5">
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isSpotlight
                      ? 'bg-sky-300 shadow-[0_0_10px_#7dd3fc]'
                      : 'bg-sky-400 shadow-[0_0_6px_#38bdf8]'
                  }`}
                />
                <span className="font-mono text-[8px] tracking-wider text-sky-300/50 uppercase select-none hidden sm:inline">
                  BEACON // 03
                </span>
              </div>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[8px] tracking-widest text-cyan-400/40 uppercase select-none">
                RAD_090°E
              </span>
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[8px] tracking-widest text-cyan-400/40 uppercase select-none">
                RAD_270°W
              </span>
            </div>

            {/* Ring 5 (1560px) - Vòng quỹ đạo viễn cảnh + Beacon 04 */}
            <div
              className={`absolute w-[1560px] h-[1560px] rounded-full border border-dashed transition-colors duration-300 ${
                isSpotlight ? 'border-cyan-400/45' : 'border-cyan-500/12'
              }`}
            >
              <div className="absolute bottom-[20%] right-[14%] flex items-center gap-1.5">
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isSpotlight
                      ? 'bg-cyan-300 shadow-[0_0_10px_#67e8f9]'
                      : 'bg-cyan-400 shadow-[0_0_6px_#22d3ee]'
                  }`}
                />
                <span className="font-mono text-[8px] tracking-wider text-cyan-300/50 uppercase select-none hidden sm:inline">
                  BEACON // 04
                </span>
              </div>
            </div>

            {/* Ring 6 (1980px) - Vành đai chân trời hệ thống */}
            <div
              className={`absolute w-[1980px] h-[1980px] rounded-full border transition-colors duration-300 ${
                isSpotlight ? 'border-sky-400/35' : 'border-sky-600/10'
              }`}
            />
          </div>
        )

        return (
          <>
            {/* 1. Base Concentric Radar Layer (Hệ thống radar quỹ đạo nền mờ dịu) */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.55] dark:opacity-[0.45]"
              style={{
                maskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, black 50%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 50% 50%, black 50%, transparent 95%)',
              }}
            >
              {renderRadarGeometry(false)}
            </div>

            {/* 2. Interactive Spotlight on Radar Rings (Các đường quỹ đạo bừng sáng theo chuột) */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-200"
              style={{
                opacity: mousePos.isHovered ? 1 : 0,
                maskImage: `radial-gradient(460px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 80%)`,
                WebkitMaskImage: `radial-gradient(460px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 80%)`,
              }}
            >
              {renderRadarGeometry(true)}
            </div>

            {/* 3. Interactive Cursor Halo (Hào quang xanh dịu rọi theo con trỏ chuột) */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                opacity: mousePos.isHovered ? 1 : 0,
                background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.16), transparent 75%)`,
              }}
            />

            {/* 4. Central Nebula Core Glow (Hào quang tâm quỹ đạo vũ trụ) */}
            <div
              className="absolute top-[44%] left-1/2 w-[650px] h-[650px] rounded-full blur-[90px] opacity-20 dark:opacity-25 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #06b6d4 0%, #1e3a8a 50%, transparent 75%)',
                transform: 'translate3d(-50%, -50%, 0)',
              }}
            />

            {/* 5. Ambient Lateral Lights (Chùm sáng định hướng hai bên sườn) */}
            <div
              className="absolute -top-28 -left-32 w-[600px] h-[500px] rounded-full blur-[85px] opacity-15 dark:opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #0891b2 0%, #0f172a 55%, transparent 75%)',
                transform: 'translate3d(0, 0, 0)',
              }}
            />
            <div
              className="absolute -bottom-32 -right-32 w-[650px] h-[520px] rounded-full blur-[90px] opacity-15 dark:opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #2563eb 0%, #0284c7 45%, transparent 75%)',
                transform: 'translate3d(0, 0, 0)',
              }}
            />
          </>
        )
      })()}

      <div className="max-w-7xl mx-auto relative z-10 space-y-8 md:space-y-16">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-left space-y-3 max-w-xl">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 uppercase shadow-[0_0_15px_rgba(6,182,212,0.12)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>TECH STACK & CAPABILITIES</span>
          </MotionDiv>

          <MotionH2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground flex items-center gap-3"
          >
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <span>{data.title}</span>
          </MotionH2>

          <MotionP
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans"
          >
            {data.subtitle}
          </MotionP>
        </div>

        {/* ================= 6 BENTO SKILL CARDS ================= */}
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {data.categories.map((category: any, idx: number) => {
            const config = categoryIcons[idx] || categoryIcons[0]

            return (
              <MotionDiv
                variants={fadeUp}
                key={idx}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-[#090d16]/90 dark:bg-[#070b14]/95 border ${config.border} shadow-xl ${config.glow} transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default hover:-translate-y-1`}
              >
                {/* Micro tech grid pattern on card */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] group-hover:opacity-[0.035] transition-opacity pointer-events-none" />

                <div className="space-y-5">
                  {/* Category Header: Icon, Name & Index */}
                  <div className="flex items-start justify-between gap-3 border-b border-border/70 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-card/80 dark:bg-zinc-900 border border-cyan-500/20 group-hover:border-cyan-400/50 shadow-sm transition-colors">
                        {config.icon}
                      </div>
                      <h3 className={`text-base font-bold transition-colors ${config.color}`}>
                        {category.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-500 group-hover:text-cyan-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* 1-Line Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium text-left">
                    {category.desc}
                  </p>

                  {/* Skill Items Pills List */}
                  <div className="flex flex-wrap gap-2 pt-2 text-left">
                    {category.items.map((item: string, i: number) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-mono font-semibold rounded-lg bg-card/60 dark:bg-zinc-900/70 border border-cyan-500/20 dark:border-cyan-500/25 text-foreground/90 hover:border-cyan-400/60 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all cursor-default select-none shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            )
          })}
        </MotionDiv>

      </div>
    </section>
  )
}
