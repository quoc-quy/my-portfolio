'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import { BrainCircuit, Code, Lightbulb, Compass, GitMerge } from 'lucide-react'

// Map mindsets to lucide icons and colors
const configMap: Record<number, { icon: React.ReactNode; color: string; bg: string; glow: string }> = {
  0: {
    icon: <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    glow: 'glow-blue'
  },
  1: {
    icon: <Compass className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    glow: 'glow-emerald'
  },
  2: {
    icon: <GitMerge className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    glow: 'glow-purple'
  },
  3: {
    icon: <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    glow: 'glow-amber'
  },
  4: {
    icon: <BrainCircuit className="w-5 h-5 text-rose-600 dark:text-rose-450" />,
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-500/10 border-rose-500/20',
    glow: 'glow-rose'
  }
}

export default function Mindset({ data }: { data: any }) {
  return (
    <section id="mindset" className="py-24 px-6 relative bg-background overflow-hidden border-t border-border">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-left space-y-3 mb-16 max-w-xl">
          <MotionH2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground flex items-center gap-3"
          >
            <BrainCircuit className="w-8 h-8 text-primary animate-pulse" />
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

        {/* Mindset List Grid */}
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.items.map((item: any, idx: number) => {
            const config = configMap[idx] || {
              icon: <BrainCircuit className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
              color: 'text-blue-600 dark:text-blue-400',
              bg: 'bg-blue-500/10 border-blue-500/20',
              glow: 'glow-blue'
            }

            return (
              <MotionDiv
                variants={fadeUp}
                key={idx}
                className={`group relative p-6 bg-card border border-border rounded-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left cursor-default ${config.glow}`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] group-hover:opacity-[0.04] transition-opacity pointer-events-none" />

                <div className="space-y-4">
                  {/* Top Bar Header */}
                  <div className="flex items-center justify-between border-b border-border pb-3">
                    <span className={`font-mono text-xs font-bold ${config.color}`}>
                      0{idx + 1}.
                    </span>
                    <div className={`p-1.5 rounded-lg border ${config.bg}`}>
                      {config.icon}
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                      {item.desc}
                    </p>
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
