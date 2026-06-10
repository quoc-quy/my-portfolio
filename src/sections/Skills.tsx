'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger, zoomIn } from '@/lib/animations'
import { MotionDiv, MotionH2 } from '@/components/Motion'
import { Code2, Server, Database, Terminal, CheckCircle2, Wrench } from 'lucide-react'

export default function Skills({ data }: { data: any }) {
  const getSkillConfig = (index: number) => {
    const configs = [
      {
        icon: <Code2 className="w-6 h-6" />,
        color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
        badgeColor: 'bg-blue-500/5 text-blue-400 border-blue-500/10 hover:bg-blue-500/15 hover:border-blue-500/30',
        glow: 'hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.12)]'
      },
      {
        icon: <Server className="w-6 h-6" />,
        color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
        badgeColor: 'bg-emerald-500/5 text-emerald-400 border-emerald-500/10 hover:bg-emerald-500/15 hover:border-emerald-500/30',
        glow: 'hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]'
      },
      {
        icon: <Database className="w-6 h-6" />,
        color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
        badgeColor: 'bg-purple-500/5 text-purple-400 border-purple-500/10 hover:bg-purple-500/15 hover:border-purple-500/30',
        glow: 'hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]'
      },
      {
        icon: <Terminal className="w-6 h-6" />,
        color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
        badgeColor: 'bg-amber-500/5 text-amber-400 border-amber-500/10 hover:bg-amber-500/15 hover:border-amber-500/30',
        glow: 'hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.12)]'
      }
    ]
    return configs[index % configs.length]
  }

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-secondary/5 border-y border-border/50">
      {/* Background Dots Grid */}
      <div className="absolute inset-0 bg-dots-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <MotionH2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-20 text-center text-foreground flex items-center justify-center gap-4"
        >
          <Wrench className="w-10 h-10 text-primary animate-pulse" />
          {data.title}
        </MotionH2>

        <div className="space-y-20">
          {/* Hard Skills Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-6 bg-primary rounded-full"></span>
              <h3 className="text-2xl font-black text-foreground">
                {data.hardSkillsTitle}
              </h3>
            </div>
            
            <MotionDiv
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {data.hardSkills.map((skill: any, idx: number) => {
                const config = getSkillConfig(idx)
                const techTags = skill.desc.split(',').map((t: string) => t.trim())
                
                return (
                  <MotionDiv
                    variants={fadeUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    key={idx}
                    className={`p-6 bg-card/40 backdrop-blur-md border border-border rounded-3xl transition-all duration-500 shadow-sm hover:shadow-2xl relative overflow-hidden group flex flex-col justify-between ${config.glow}`}
                  >
                    {/* Background glow circle */}
                    <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500 pointer-events-none"></div>
                    
                    <div>
                      {/* Icon */}
                      <div className={`mb-5 text-primary w-fit p-3.5 rounded-2xl border ${config.color} flex items-center justify-center transition-transform duration-500 group-hover:rotate-6`}>
                        {config.icon}
                      </div>
                      
                      {/* Name */}
                      <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h4>
                    </div>

                    {/* Tech Badges List */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/40">
                      {techTags.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className={`px-2.5 py-1 text-[11px] font-bold rounded-xl border transition-all ${config.badgeColor}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </MotionDiv>
                )
              })}
            </MotionDiv>
          </div>

          {/* Soft Skills & Tools Cards */}
          <MotionDiv
            variants={zoomIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-card/30 backdrop-blur-md border border-border/80 rounded-[3rem] shadow-xl relative overflow-hidden group"
          >
            {/* Soft Ambient Blobs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
              {/* Soft Skills Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-foreground flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  {data.softSkillsTitle}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data.softSkills.map((item: string, i: number) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-5 py-2.5 bg-card/60 border border-border hover:border-primary/30 rounded-2xl font-semibold text-sm transition-all shadow-sm hover:shadow-md cursor-default text-muted-foreground hover:text-foreground flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary opacity-80" />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Tools Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-foreground flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                  {data.toolsTitle}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {data.tools.map((item: string, i: number) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-5 py-2.5 bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-default flex items-center gap-2.5"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                      </span>
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
