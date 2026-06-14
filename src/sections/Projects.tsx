'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import { Github, ExternalLink, Terminal, AlertTriangle, Cpu, Layers, Award } from 'lucide-react'
import SystemDiagram from '@/components/SystemDiagram'
import Image from 'next/image'

type ProjectSectionProps = {
  data: any
  lang: string
}

export default function Projects({ data, lang }: ProjectSectionProps) {
  const isVi = lang === 'vi'
  const [activeTab, setActiveTab] = useState<'featured' | 'labs'>('featured')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string>('chatpulse')
  const [caseStudyTab, setCaseStudyTab] = useState<'architecture' | 'challenges' | 'tradeoffs'>('architecture')
  const [activeLabCategory, setActiveLabCategory] = useState<string>('all')

  // Filter main featured projects and baseline practice projects
  const featuredProjects = data.items.filter((item: any) => item.caseStudy)
  const labProjects = data.items.filter((item: any) => !item.caseStudy)

  const filteredLabProjects = labProjects.filter((project: any) => {
    if (activeLabCategory === 'all') return true
    return project.category === activeLabCategory
  })

  const activeProject = featuredProjects.find((p: any) => p.id === selectedCaseStudy) || featuredProjects[0]

  return (
    <section id="projects" className="py-24 px-6 relative bg-background overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-3">
            <MotionH2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground flex items-center gap-3"
            >
              <Terminal className="w-8 h-8 text-primary" />
              {data.title}
            </MotionH2>
            <MotionP
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-sm text-muted-foreground max-w-xl font-sans"
            >
              {data.subtitle}
            </MotionP>
          </div>

          {/* Core Tabs Trigger (Featured Systems vs. Practice Labs) */}
          <div className="flex border border-border p-1 rounded-lg bg-secondary/50 dark:bg-zinc-900/50 backdrop-blur-sm self-start md:self-end select-none">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2 rounded-md text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === 'featured' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {isVi ? 'Đồ Án Hệ Thống' : 'Core Systems'}
            </button>
            <button
              onClick={() => setActiveTab('labs')}
              className={`px-4 py-2 rounded-md text-xs font-bold tracking-wide transition-all cursor-pointer ${
                activeTab === 'labs' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {isVi ? 'Bài Tập Thực Hành' : 'Practice Labs'}
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'featured' ? (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Project Selectors */}
              <div className="flex flex-wrap gap-3 border-b border-border pb-4 select-none">
                {featuredProjects.map((project: any) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setSelectedCaseStudy(project.id)
                      setCaseStudyTab('architecture')
                    }}
                    className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                      selectedCaseStudy === project.id
                        ? 'bg-secondary dark:bg-zinc-900 border-primary/50 text-primary shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                        : 'bg-transparent border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {project.title}
                  </button>
                ))}
              </div>

              {/* Case Study Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Side: Summary & Architecture Tabs */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-primary font-extrabold uppercase">
                      {activeProject.tagline}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground">{activeProject.title}</h3>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.stack.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-secondary dark:bg-zinc-900 border border-border text-zinc-700 dark:text-zinc-300 text-[10px] font-bold rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Problem / Solution Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-card border border-border rounded-xl space-y-2 relative overflow-hidden glow-purple">
                      <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs">
                        <AlertTriangle className="w-4 h-4" />
                        <span>{isVi ? 'Vấn Đề Doanh Nghiệp' : 'Business Problem'}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                        {activeProject.caseStudy.problem}
                      </p>
                    </div>

                    <div className="p-5 bg-card border border-border rounded-xl space-y-2 glow-emerald">
                      <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                        <Cpu className="w-4 h-4" />
                        <span>{isVi ? 'Giải Pháp Kỹ Thuật' : 'Technical Solution'}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                        {activeProject.caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Case Study Deep Tabs Navigation */}
                  <div className="flex border-b border-border pb-2 pt-4 gap-4 select-none">
                    <button
                      onClick={() => setCaseStudyTab('architecture')}
                      className={`pb-2 text-xs font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
                        caseStudyTab === 'architecture' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {isVi ? 'Kiến Trúc & Diagram' : 'Architecture & Flow'}
                    </button>
                    <button
                      onClick={() => setCaseStudyTab('challenges')}
                      className={`pb-2 text-xs font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
                        caseStudyTab === 'challenges' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {isVi ? 'Thử Thách Kỹ Thuật' : 'Technical Challenges'}
                    </button>
                    <button
                      onClick={() => setCaseStudyTab('tradeoffs')}
                      className={`pb-2 text-xs font-bold tracking-wide transition-all border-b-2 cursor-pointer ${
                        caseStudyTab === 'tradeoffs' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {isVi ? 'Đánh Đổi & Kết Quả' : 'Trade-offs & Results'}
                    </button>
                  </div>

                  {/* Deep Tab Content */}
                  <div className="pt-2 min-h-[300px]">
                    <AnimatePresence mode="wait">
                      {caseStudyTab === 'architecture' && (
                        <motion.div
                          key="architecture"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                        >
                          <SystemDiagram projectId={activeProject.id} lang={lang} />
                        </motion.div>
                      )}

                      {caseStudyTab === 'challenges' && (
                        <motion.div
                          key="challenges"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                        >
                          {activeProject.caseStudy.challenges.map((c: any, i: number) => (
                            <div key={i} className="p-5 bg-card border border-border rounded-xl space-y-2 hover:border-zinc-300 dark:hover:border-white/10 transition-colors">
                              <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                <span className="text-primary font-mono">0{i + 1}.</span>
                                {c.title}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed font-sans">{c.desc}</p>
                              <div className="text-xs text-foreground/80 dark:text-zinc-300 leading-relaxed pt-2 border-t border-border">
                                <strong className="text-muted-foreground font-semibold">{isVi ? 'Giải pháp:' : 'Resolution:'} </strong>
                                <span className="font-sans">{c.resolution}</span>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {caseStudyTab === 'tradeoffs' && (
                        <motion.div
                          key="tradeoffs"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                        >
                          {activeProject.caseStudy.tradeOffs.map((t: any, i: number) => (
                            <div key={i} className="p-5 bg-card border border-border rounded-xl space-y-2 hover:border-zinc-300 dark:hover:border-white/10 transition-colors">
                              <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                <Layers className="w-4 h-4 text-primary" />
                                {t.title}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed font-sans">{t.desc}</p>
                            </div>
                          ))}

                          <div className="p-5 bg-card border border-border rounded-xl space-y-2 mt-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
                            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                              <Award className="w-4 h-4 text-primary animate-pulse" />
                              {isVi ? 'Kết quả thu được' : 'Key Result metrics'}
                            </h4>
                            <p className="text-xs text-foreground/80 dark:text-zinc-300 leading-relaxed font-sans">
                              {activeProject.caseStudy.results}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right Side: Demo Visual and Repository Links */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Styled Frame simulating a browser preview */}
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-card border border-border group shadow-lg">
                    {/* Dots pattern overlay */}
                    <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

                    {/* Window Control bar with colored macOS spheres */}
                    <div className="h-6 bg-secondary dark:bg-zinc-900 border-b border-border flex items-center justify-between px-3 select-none">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <span className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[9px] font-mono text-muted-foreground tracking-tight">{activeProject.id}.quy.dev</span>
                      <span className="w-4" />
                    </div>

                    {/* Visual Project Cover */}
                    <div className="relative w-full h-[calc(100%-24px)] overflow-hidden bg-secondary/30 dark:bg-zinc-950/60">
                      <Image
                        src={activeProject.image}
                        alt={activeProject.title}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                      {/* Dark overlay showing details and buttons on hover */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center select-none gap-4">
                        <div className="space-y-1">
                          <div className="text-sm font-bold text-white tracking-tight">{activeProject.title}</div>
                          <p className="text-[10px] text-zinc-300 max-w-xs leading-relaxed font-sans">{activeProject.desc}</p>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                          <a
                            href={activeProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-md text-[10px] font-mono font-bold text-white transition-all cursor-pointer"
                          >
                            <Github size={12} />
                            <span>SOURCE</span>
                          </a>
                          {activeProject.demo && activeProject.demo !== '#' && (
                            <a
                              href={activeProject.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground hover:opacity-95 rounded-md text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm"
                            >
                              <ExternalLink size={12} />
                              <span>LIVE DEMO</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary of Impact stats */}
                  <div className={`p-6 bg-card border border-border rounded-xl space-y-4 text-left transition-all ${activeProject.id === 'chatpulse' ? 'glow-purple' : 'glow-blue'}`}>
                    <div className="text-[10px] font-mono tracking-widest text-zinc-500 font-extrabold uppercase">
                      {isVi ? 'CHỈ SỐ THỰC TẾ' : 'IMPACT HIGHLIGHTS'}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {activeProject.id === 'chatpulse' ? (
                        <>
                          <div className="space-y-1">
                            <div className="text-2xl font-extrabold text-purple-650 dark:text-purple-400">92%</div>
                            <div className="text-[10px] text-muted-foreground font-mono uppercase font-bold">{isVi ? 'Độ chính xác RAG' : 'RAG Accuracy'}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">7</div>
                            <div className="text-[10px] text-muted-foreground font-mono uppercase font-bold">{isVi ? 'Gọi video đồng thời' : 'Video Participants'}</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="space-y-1">
                            <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">&lt; 60s</div>
                            <div className="text-[10px] text-muted-foreground font-mono uppercase font-bold">{isVi ? 'Tốc độ Deploy CI/CD' : 'CI/CD Deploy Speed'}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">12</div>
                            <div className="text-[10px] text-muted-foreground font-mono uppercase font-bold">{isVi ? 'Phân quyền RBAC' : 'RBAC Rules'}</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

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
              <div className="flex flex-wrap gap-2 select-none border-b border-border/60 pb-5">
                {Object.entries(data.categories || {})
                  .filter(([key]) => key !== 'main')
                  .map(([key, label]: [string, any]) => (
                    <button
                      key={key}
                      onClick={() => setActiveLabCategory(key)}
                      className={`relative px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 border cursor-pointer ${
                        activeLabCategory === key
                          ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                          : 'bg-secondary/40 dark:bg-zinc-900 border-border text-muted-foreground hover:text-foreground hover:bg-secondary/70'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
              </div>

              {/* Grid of filtered practice cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLabProjects.map((project: any, i: number) => {
                  const glows = ['glow-blue', 'glow-purple', 'glow-emerald', 'glow-amber', 'glow-rose', 'glow-cyan']
                  const glowClass = glows[i % glows.length]
                  
                  return (
                    <div
                      key={project.title}
                      className={`group relative bg-card border border-border rounded-xl transition-all duration-300 flex flex-col justify-between text-left overflow-hidden min-h-[420px] h-full ${glowClass}`}
                    >
                      {/* Image Preview at the top */}
                      <div className="relative aspect-video w-full overflow-hidden bg-muted border-b border-border flex-shrink-0">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                        {/* Overlay Category badge */}
                        <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-background/80 dark:bg-zinc-950/80 backdrop-blur-md text-[9px] font-mono font-bold uppercase rounded border border-border/40 text-foreground">
                          {project.category}
                        </div>
                      </div>

                      {/* Content details inside the card */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div className="space-y-3">
                          {/* Tech stack badges */}
                          <div className="flex flex-wrap gap-1">
                            {project.stack.slice(0, 3).map((s: string, idx: number) => (
                              <span key={idx} className="px-2 py-0.5 bg-secondary dark:bg-zinc-900 text-muted-foreground dark:text-zinc-400 font-mono text-[9px] border border-border rounded font-bold">
                                {s}
                              </span>
                            ))}
                          </div>

                          <div className="space-y-1">
                            <h4 className="font-bold text-foreground text-sm line-clamp-1 group-hover:text-primary transition-colors">
                              {project.title}
                            </h4>
                            <p className="text-xs text-muted-foreground leading-relaxed font-sans line-clamp-3">
                              {project.desc}
                            </p>
                          </div>
                        </div>

                        {/* Bottom action links */}
                        <div className="flex items-center justify-between pt-3 border-t border-border mt-4 select-none">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={12} />
                            <span>{data.viewGithub}</span>
                          </a>
                          {project.demo && project.demo !== '#' && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink size={12} />
                              <span>{data.viewDemo}</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
