/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { motion } from 'framer-motion'
import { fadeUp, stagger } from '@/lib/animations'
import { Github, ExternalLink, Terminal } from 'lucide-react'
import Image from 'next/image'

export default function Projects({ data }: { data: any }) {
  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-secondary/10">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16">
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

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {data.items.map((project: any, idx: number) => (
            <motion.div
              variants={fadeUp}
              key={idx}
              className="group relative bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hiệu ứng Glow (Ánh sáng tỏa ra xung quanh card khi hover) */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500"></div>

              {/* Phần hình ảnh Preview (Scale + Overlay) */}
              <div className="relative h-64 w-full overflow-hidden bg-muted border-b border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />

                {/* Lớp Overlay đen mờ hiện lên khi hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full text-white transition-all hover:scale-110"
                    title="Mã nguồn"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-primary/90 hover:bg-primary border border-primary/50 backdrop-blur-md rounded-full text-white transition-all hover:scale-110"
                    title="Xem Demo"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Phần thông tin nội dung */}
              <div className="p-8 relative z-10 flex flex-col h-[calc(100%-16rem)]">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">{project.desc}</p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Các nút bấm bên dưới */}
                <div className="flex items-center gap-6 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" /> {data.viewGithub}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> {data.viewDemo}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
