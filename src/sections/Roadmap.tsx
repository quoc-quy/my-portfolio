'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import { Compass, BookOpen, CheckCircle, ArrowRight } from 'lucide-react'

// Map progress bars to specific colorful gradients
const progressGradients: Record<number, string> = {
  0: 'from-blue-500 to-indigo-500',   // Docker
  1: 'from-purple-500 to-rose-500',   // Testing
  2: 'from-orange-500 to-amber-500',  // AWS
  3: 'from-emerald-500 to-cyan-500'   // System Design
}

export default function Roadmap({ data }: { data: any }) {
  return (
    <section id="roadmap" className="py-24 px-6 relative bg-background overflow-hidden border-t border-border">
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
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground flex items-center gap-3"
          >
            <Compass className="w-8 h-8 text-primary animate-pulse" />
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

        {/* Roadmap boards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Block: Currently Learning Column */}
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-2 border-b border-border pb-3 select-none">
              <BookOpen className="w-4 h-4 text-zinc-500" />
              <h3 className="font-bold text-foreground text-base">{data.currentlyLearningTitle}</h3>
            </div>

            <MotionDiv
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {data.learning.map((item: any, idx: number) => {
                const gradientClass = progressGradients[idx] || 'from-primary to-blue-500'
                
                return (
                  <MotionDiv
                    variants={fadeUp}
                    key={idx}
                    className="p-5 bg-card border border-border rounded-xl relative overflow-hidden group flex flex-col justify-between hover:border-zinc-350 dark:hover:border-white/10 transition-colors"
                  >
                    <div className="space-y-3">
                      {/* Badge and Title */}
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <span className="px-2.5 py-0.5 border border-primary/20 bg-primary/5 text-primary text-[9px] font-mono rounded font-bold">
                          {item.status} ({item.progress}%)
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed font-sans font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* Progress indicator outline */}
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-secondary/80 dark:bg-zinc-950">
                      <div 
                        className={`h-full bg-gradient-to-r ${gradientClass} transition-all duration-500`} 
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </MotionDiv>
                )
              })}
            </MotionDiv>
          </div>

          {/* Right Block: Vision & Next Goals Column */}
          <div className="p-6 bg-secondary/20 dark:bg-zinc-900/10 border border-border rounded-2xl text-left space-y-6 relative overflow-hidden flex flex-col justify-between h-full">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-border pb-3 select-none">
                <CheckCircle className="w-4 h-4 text-zinc-500" />
                <h3 className="font-bold text-foreground text-base">{data.nextGoalsTitle}</h3>
              </div>

              {/* Goal milestones lists */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full border border-blue-500/20 bg-blue-500/5 dark:bg-blue-500/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 font-mono">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">AWS Serverless Deployments</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                      Deploying core services using AWS Lambda, API Gateway, and CloudFront CDN for edge routing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full border border-purple-500/20 bg-purple-500/5 dark:bg-purple-500/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold text-purple-600 dark:text-purple-400 font-mono">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">E2E Playwright Automation</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                      Constructing full end-to-end integration tests to safeguard release rollouts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/5 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">System Design Proficiency</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                      Deep diving into queue systems, load distribution routers, database clusters, and partition setups.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card border border-border rounded-xl flex items-center justify-between gap-4 mt-6 z-10 shadow-xs">
              <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider leading-relaxed">
                Aiming to contribute to professional product teams in 2026
              </span>
              <ArrowRight className="w-4 h-4 text-zinc-500 flex-shrink-0" />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
