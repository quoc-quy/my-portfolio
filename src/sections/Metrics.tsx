'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import { BarChart3, Database, ShieldAlert, Users, Zap, FileJson } from 'lucide-react'

// Map labels to lucide icons and colors
const configMap: Record<string, { icon: React.ReactNode; color: string; glow: string }> = {
  'AI Integration': {
    icon: <BarChart3 className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
    color: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/25',
    glow: 'glow-purple'
  },
  'Data Management': {
    icon: <Database className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    color: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/25',
    glow: 'glow-blue'
  },
  'System Load': {
    icon: <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    color: 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    glow: 'glow-emerald'
  },
  'DevOps': {
    icon: <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    color: 'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25',
    glow: 'glow-amber'
  },
  'Security': {
    icon: <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
    color: 'text-rose-600 dark:text-rose-400 bg-rose-500/10 border-rose-500/25',
    glow: 'glow-rose'
  },
  'Storage': {
    icon: <FileJson className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
    color: 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
    glow: 'glow-cyan'
  }
}

export default function Metrics({ data }: { data: any }) {
  return (
    <section id="metrics" className="py-24 px-6 relative bg-secondary/10 dark:bg-zinc-950/25 border-y border-border overflow-hidden">
      {/* Dots Grid background */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16 max-w-xl">
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

        {/* Dashboard Grid */}
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.items.map((item: any, idx: number) => {
            const config = configMap[item.category] || {
              icon: <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
              color: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/25',
              glow: 'glow-blue'
            }
            
            return (
              <MotionDiv
                variants={fadeUp}
                key={idx}
                className={`group relative p-6 bg-card border border-border rounded-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default ${config.glow}`}
              >
                {/* Micro overlay card grid pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none" />

                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
                      {item.category}
                    </span>
                    <div className={`p-1.5 rounded-lg border ${config.color} flex items-center justify-center`}>
                      {config.icon}
                    </div>
                  </div>

                  {/* High Density Numbers */}
                  <div className="space-y-1">
                    <div className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight transition-all duration-300 group-hover:scale-[1.02] origin-left">
                      {item.value}
                    </div>
                    <div className="text-sm font-semibold text-foreground/80 dark:text-zinc-200">
                      {item.label}
                    </div>
                  </div>
                </div>

                {/* Subtext description */}
                <p className="text-xs text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border font-sans">
                  {item.desc}
                </p>
              </MotionDiv>
            )
          })}
        </MotionDiv>
        
      </div>
    </section>
  )
}
