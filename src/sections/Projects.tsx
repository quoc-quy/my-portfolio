/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { Github, ExternalLink, Terminal } from 'lucide-react'
import Image from 'next/image'

export default function Projects({ data }: { data: any }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = data.categories || {
    all: 'Tất cả',
    main: 'Dự án chính',
    tailwind: 'Tailwind CSS',
    js: 'JavaScript',
    'html-css': 'HTML & CSS'
  }

  const filteredItems = data.items.filter((item: any) => {
    if (activeCategory === 'all') return true
    return item.category === activeCategory
  })

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-secondary/10">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black flex items-center gap-4"
          >
            <Terminal className="w-10 h-10 text-primary" /> {data.title}
          </motion.h2>
        </div>

        {/* Category Filtering Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16 border-b border-border/60 pb-8"
        >
          {Object.entries(categories).map(([key, label]: [string, any]) => {
            const isActive = activeCategory === key
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground bg-secondary/20 hover:bg-secondary/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {label}
              </button>
            )
          })}
        </motion.div>

        <motion.div
          layout
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((project: any) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-[480px]"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500"></div>

                {/* Preview Image container */}
                <div className="relative h-48 w-full overflow-hidden bg-muted border-b border-border flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />

                  {/* Dark overlay with action buttons on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 z-10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full text-white transition-all hover:scale-110"
                      title={data.viewGithub}
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-primary/90 hover:bg-primary border border-primary/50 backdrop-blur-md rounded-full text-white transition-all hover:scale-110"
                        title={data.viewDemo}
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Details Content Box */}
                <div className="p-6 relative z-10 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {project.desc}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 content-start max-h-[80px] overflow-y-auto scrollbar-none">
                    {project.stack.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer links */}
                  <div className="flex items-center gap-6 mt-auto pt-4 border-t border-border/50 flex-shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> {data.viewGithub}
                    </a>
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-xs font-bold text-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> {data.viewDemo}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
