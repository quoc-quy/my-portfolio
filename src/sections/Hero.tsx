'use client'
import { fadeUp, stagger, zoomIn, floatContinuous } from '@/lib/animations'
import { MotionDiv, MotionH1, MotionP } from '@/components/Motion'
import { Download, Github, Linkedin, MessageSquare, Code2, MonitorPlay, Rocket, Database } from 'lucide-react'
import Image from 'next/image'

const dataSatellites = [
  {
    Icon: Code2,
    label: 'React / Next.js',
    bg: 'bg-blue-500',
    pos: 'top-[10%] -left-[10%] lg:-left-[15%]',
    delay: 0
  },
  {
    Icon: MonitorPlay,
    label: 'UI/UX Design',
    bg: 'bg-purple-500',
    pos: 'top-[22%] -right-[10%] lg:-right-[15%]',
    delay: 1.5
  },
  {
    Icon: Rocket,
    label: 'Performance',
    bg: 'bg-orange-500',
    pos: 'bottom-[22%] -left-[10%] lg:-left-[15%]',
    delay: 3
  },
  {
    Icon: Database,
    label: 'Real-time Chat',
    bg: 'bg-emerald-500',
    pos: 'bottom-[10%] -right-[10%] lg:-right-[15%]',
    delay: 4.5
  }
]

export default function Hero({ data }: { data: any }) {
  return (
    <section id="about" className="relative min-h-[92vh] flex items-center justify-center px-6 pt-32 pb-16 overflow-hidden">
      {/* Background grid overlays */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Colorful Ambient Glow Blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-blob" />
      <div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-blob" 
        style={{ animationDelay: '2s' }} 
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: High-density introduction */}
        <MotionDiv 
          variants={stagger} 
          initial="hidden" 
          animate="show" 
          className="md:col-span-7 space-y-6 text-left"
        >
          {/* Active recruitment badge */}
          {data.badge && (
            <MotionDiv
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {data.badge}
            </MotionDiv>
          )}

          {/* Name & Target Role */}
          <div className="space-y-2">
            <MotionP 
              variants={fadeUp}
              className="text-xs font-bold tracking-widest text-primary uppercase font-mono"
            >
              {data.role}
            </MotionP>
            <MotionH1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              {data.name1} <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 dark:from-violet-400 dark:via-indigo-300 dark:to-blue-400 drop-shadow-sm">
                {data.name2}
              </span>
            </MotionH1>
          </div>

          {/* Hook sentence with border */}
          <MotionP
            variants={fadeUp}
            className="text-lg md:text-xl text-foreground font-semibold border-l-4 border-primary pl-4 py-1 leading-relaxed"
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

          {/* Action triggers */}
          <MotionDiv 
            variants={fadeUp} 
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Download CV (Colorful Gradient Style) */}
            <a
              href="/Tran-Nguyen-Quoc-Quy.pdf"
              download
              className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] px-6 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md select-none hover:-translate-y-0.5"
            >
              <span>{data.cta1}</span> 
              <Download size={16} />
            </a>

            {/* Talk to AI agent */}
            <a
              href="#ai-assistant"
              className="border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer select-none hover:-translate-y-0.5"
            >
              <span>{data.cta2}</span>
              <MessageSquare size={16} className="text-violet-500 dark:text-violet-400" />
            </a>

            {/* Social media connections */}
            <div className="flex items-center gap-3">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 hover:bg-primary text-muted-foreground hover:text-primary-foreground border border-border rounded-lg transition-all flex items-center justify-center w-11 h-11 shadow-sm cursor-pointer"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 hover:bg-primary text-muted-foreground hover:text-primary-foreground border border-border rounded-lg transition-all flex items-center justify-center w-11 h-11 shadow-sm cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* Right Column: Framed Portrait with Floating Satellites */}
        <div className="md:col-span-5 relative w-full aspect-square max-w-sm justify-self-center md:justify-self-end mt-12 md:mt-0 flex items-center justify-center">
          
          {/* Floating Badges */}
          {dataSatellites.map((sat, idx) => (
            <MotionDiv
              key={idx}
              className={`absolute ${sat.pos} z-20 flex items-center gap-2 pr-4 pl-1 py-1 rounded-full bg-card border border-border shadow-xl hidden sm:flex`}
              variants={floatContinuous(sat.delay)}
              animate="animate"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`p-1.5 rounded-full ${sat.bg} flex items-center justify-center`}>
                <sat.Icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-xs text-foreground">{sat.label}</span>
            </MotionDiv>
          ))}

          {/* Glassmorphic card frame */}
          <MotionDiv
            variants={zoomIn}
            initial="hidden"
            animate="show"
            className="relative w-full h-full rounded-2xl bg-zinc-100/40 dark:bg-zinc-900/40 border border-border p-3 shadow-2xl overflow-hidden group"
          >
            {/* Subtle dot overlay */}
            <div className="absolute inset-0 bg-dots-pattern opacity-20" />

            {/* Inner frame containing the avatar */}
            <div className="relative w-full h-full rounded-xl bg-card dark:bg-zinc-950 overflow-hidden border border-border flex items-center justify-center transition-all duration-750 group-hover:scale-[1.01] rotate-2 group-hover:rotate-0">
              <Image
                src="/avatar.png"
                alt="Trần Nguyễn Quốc Quý"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 select-none"
                unoptimized
              />
              
              {/* Corner decor highlights */}
              <span className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/20" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/20" />
              <span className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/20" />
              <span className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/20" />
            </div>
          </MotionDiv>
          
        </div>
        
      </div>
    </section>
  )
}
