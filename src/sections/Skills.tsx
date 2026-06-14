'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import { Wrench } from 'lucide-react'

// Map category index to color themes
const configMap: Record<number, { color: string; badge: string; glow: string }> = {
  0: { // Frontend
    color: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:bg-blue-500/10',
    glow: 'glow-blue'
  },
  1: { // Backend
    color: 'text-emerald-600 dark:text-emerald-400',
    badge: 'bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/10',
    glow: 'glow-emerald'
  },
  2: { // Database
    color: 'text-purple-600 dark:text-purple-400',
    badge: 'bg-purple-500/5 text-purple-600 dark:text-purple-400 border-purple-500/20 hover:bg-purple-500/10',
    glow: 'glow-purple'
  },
  3: { // Cloud & DevOps
    color: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-500/5 text-amber-600 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/10',
    glow: 'glow-amber'
  },
  4: { // AI Integration
    color: 'text-rose-600 dark:text-rose-450',
    badge: 'bg-rose-500/5 text-rose-600 dark:text-rose-400 border-rose-500/20 hover:bg-rose-500/10',
    glow: 'glow-rose'
  },
  5: { // Tools
    color: 'text-cyan-600 dark:text-cyan-400',
    badge: 'bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/10',
    glow: 'glow-cyan'
  }
}

export default function Skills({ data }: { data: any }) {
  return (
    <section id="skills" className="py-24 px-6 relative bg-background overflow-hidden border-t border-border">
      {/* Background Dots Grid */}
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
            <Wrench className="w-8 h-8 text-primary animate-pulse" />
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

        {/* Skill categories grid */}
        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.categories.map((category: any, idx: number) => {
            const config = configMap[idx] || {
              color: 'text-blue-600 dark:text-blue-400',
              badge: 'bg-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:bg-blue-500/10',
              glow: 'glow-blue'
            }

            return (
              <MotionDiv
                variants={fadeUp}
                key={idx}
                className={`group relative p-6 bg-card border border-border rounded-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default ${config.glow}`}
              >
                {/* Micro grid overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] group-hover:opacity-[0.04] transition-opacity pointer-events-none" />

                <div className="space-y-4">
                  {/* Category Name & Desc */}
                  <div className="space-y-1.5 text-left">
                    <h4 className={`text-base font-bold transition-colors ${config.color}`}>
                      {category.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium">
                      {category.desc}
                    </p>
                  </div>

                  {/* Skill Items tags list */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {category.items.map((item: string, i: number) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 text-[10px] font-bold font-mono rounded-md border transition-all cursor-default ${config.badge}`}
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
