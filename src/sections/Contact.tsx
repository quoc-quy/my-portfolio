'use client'
import { useState, useRef, useEffect } from 'react'
import { Mail, Phone, Github, Linkedin, MapPin, Copy, Check, Send, Sparkles, Clock } from 'lucide-react'
import { fadeUp } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'

export default function Contact({ data, lang }: { data: any; lang: string }) {
  const isVi = lang === 'vi'
  const [copied, setCopied] = useState(false)

  // Canvas & Mouse Tracking Refs for Option A: Quantum Network Constellation
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef<{ x: number; y: number; isHovered: boolean }>({
    x: -1000,
    y: -1000,
    isHovered: false,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    mousePosRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    }
  }

  const handleMouseLeave = () => {
    mousePosRef.current = { x: -1000, y: -1000, isHovered: false }
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // ================= OPTION A: QUANTUM NETWORK CONSTELLATION CANVAS LOOP =================
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    // Handle Window Resize
    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    // Initialize Quantum Particle Nodes
    const particleCount = Math.min(Math.floor((width * height) / 18000), 55)
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      color: string
      baseAlpha: number
    }> = []

    const colors = ['#22d3ee', '#38bdf8', '#3b82f6', '#10b981']

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 1.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        baseAlpha: Math.random() * 0.5 + 0.35,
      })
    }

    // Main Canvas Render Loop (60fps)
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const mouse = mousePosRef.current

      // Update and draw particles
      particles.forEach((p, idx) => {
        // Move particle
        p.x += p.vx
        p.y += p.vy

        // Bounce off canvas borders smoothly
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse Attraction & Gravitational Attraction
        if (mouse.isHovered) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxMouseDist = 180

          if (dist < maxMouseDist && dist > 1) {
            const force = (1 - dist / maxMouseDist) * 0.06
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        // Apply slight speed damping to prevent chaotic speed
        p.vx *= 0.99
        p.vy *= 0.99

        // Draw particle node
        ctx.save()
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowColor = p.color
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.restore()

        // Draw Constellation Connection Lines between Nodes
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 130

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.28
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
            ctx.restore()
          }
        }

        // Draw Laser Threads connecting Mouse to nearby Nodes
        if (mouse.isHovered) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxMouseDist = 180

          if (dist < maxMouseDist) {
            const alpha = (1 - dist / maxMouseDist) * 0.65
            ctx.save()
            ctx.beginPath()
            ctx.moveTo(mouse.x, mouse.y)
            ctx.lineTo(p.x, p.y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`
            ctx.shadowColor = '#22d3ee'
            ctx.shadowBlur = 10
            ctx.lineWidth = 1.2
            ctx.stroke()
            ctx.restore()
          }
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-12 md:py-28 px-4 sm:px-6 bg-[#020617] dark:bg-[#030712] border-t border-border/70 relative overflow-hidden flex flex-col items-center"
    >
      {/* ================= OPTION A: QUANTUM NETWORK CONSTELLATION CANVAS BACKGROUND ================= */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      />

      {/* Deep Central Ambiance Glow behind Card */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] rounded-full blur-[110px] opacity-20 dark:opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #06b6d4 0%, #1e3a8a 55%, transparent 75%)',
          transform: 'translate3d(-50%, -50%, 0)',
        }}
      />

      {/* Micro-noise Matte Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04] mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-8 md:space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <MotionDiv
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/25 uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{isVi ? 'LIÊN HỆ & HỢP TÁC' : 'GET IN TOUCH'}</span>
          </MotionDiv>

          <MotionH2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[28px] md:text-5xl font-black tracking-tight text-foreground"
          >
            {data.title}
          </MotionH2>
          <MotionP
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans max-w-lg mx-auto"
          >
            {data.subtitle}
          </MotionP>
        </div>

        {/* Center Contact Info Card - Glassmorphism Cyber Terminal */}
        <MotionDiv
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto w-full p-6 sm:p-10 bg-[#090d16]/90 dark:bg-[#070b14]/95 backdrop-blur-2xl border border-white/10 dark:border-cyan-500/30 rounded-3xl relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_30px_rgba(6,182,212,0.15)] text-left group hover:border-cyan-400/60 transition-all duration-300"
        >
          {/* Corner Tech Brackets */}
          <span className="absolute top-3.5 left-3.5 w-3 h-3 border-t-2 border-l-2 border-cyan-400/50" />
          <span className="absolute top-3.5 right-3.5 w-3 h-3 border-t-2 border-r-2 border-cyan-400/50" />
          <span className="absolute bottom-3.5 left-3.5 w-3 h-3 border-b-2 border-l-2 border-cyan-400/50" />
          <span className="absolute bottom-3.5 right-3.5 w-3 h-3 border-b-2 border-r-2 border-cyan-400/50" />

          {/* Subtle Card Inner Grid Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

          <div className="space-y-8 relative z-10">
            {/* Top Bar Status */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5">
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono tracking-widest text-cyan-400 font-extrabold uppercase">
                  {isVi ? 'KÊNH KẾT NỐI TRỰC TIẾP' : 'DIRECT CHANNELS'}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{isVi ? 'SẴN SÀNG NHẬN VIỆC' : 'OPEN TO WORK'}</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-zinc-400 bg-secondary/80 dark:bg-zinc-900 border border-border px-2.5 py-1 rounded-full">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  <span>{isVi ? 'Phản hồi trong 24h' : '24h Response'}</span>
                </span>
              </div>
            </div>

            {/* Direct Info List Items */}
            <div className="space-y-4">
              {/* Email with 1-click Copy */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl border border-cyan-500/25 bg-cyan-500/5 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 group/email shadow-sm">
                <a
                  href={`mailto:${data.email}`}
                  className="flex items-center gap-3.5 text-cyan-500 dark:text-cyan-400 hover:text-cyan-300 transition-colors text-sm sm:text-base font-bold font-mono tracking-wide"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 group-hover/email:scale-105 transition-transform">
                    <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  </div>
                  <span>{data.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-secondary/90 dark:bg-zinc-900 border border-cyan-500/35 hover:border-cyan-400 hover:bg-cyan-500/20 text-foreground transition-all cursor-pointer select-none self-start sm:self-auto shadow-sm"
                  title="Sao chép Email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{isVi ? 'Đã sao chép!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{isVi ? 'Sao chép Email' : 'Copy Email'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <a
                href={`tel:${data.phone.replace(/ /g, '')}`}
                className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl border border-sky-500/25 bg-sky-500/5 text-sky-500 dark:text-sky-400 hover:border-sky-400/50 hover:bg-sky-500/10 transition-all duration-300 text-sm sm:text-base font-bold font-mono tracking-wide group/phone shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-sky-500/15 border border-sky-500/30 group-hover/phone:scale-105 transition-transform">
                  <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                </div>
                <span>{data.phone}</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl border border-border/80 bg-secondary/40 dark:bg-zinc-900/50 text-muted-foreground dark:text-zinc-300 text-xs sm:text-sm font-medium font-sans select-none">
                <div className="p-2.5 rounded-xl bg-secondary border border-border">
                  <MapPin className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-semibold text-foreground">{data.location}</span>
                  <span className="hidden sm:inline-block text-xs font-mono text-cyan-400 font-bold bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded-md w-max">
                    (UTC+7 / ICT)
                  </span>
                </div>
              </div>
            </div>

            {/* Social channels (No purple, pure slate/blue/cyan palette) */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/70">
              <span className="text-xs font-mono text-muted-foreground font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isVi ? 'Mạng xã hội & Mã nguồn:' : 'Social & Repositories:'}</span>
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-secondary/80 dark:bg-zinc-900 border border-border hover:border-cyan-400 hover:bg-cyan-500/10 text-foreground text-xs font-mono font-bold rounded-xl transition-all cursor-pointer shadow-sm select-none"
                >
                  <Github size={15} className="text-cyan-400" />
                  <span>GITHUB</span>
                </a>
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-blue-600/15 border border-blue-500/30 hover:border-blue-400 hover:bg-blue-600/25 text-blue-400 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer shadow-sm select-none"
                >
                  <Linkedin size={15} />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}

