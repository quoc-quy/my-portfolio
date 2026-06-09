'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, Github } from 'lucide-react'

export default function Contact({ data }: { data: any }) {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-primary text-primary-foreground relative overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight drop-shadow-md">
            {data.title}
          </h2>

          <div className="flex flex-col gap-6 items-center w-full max-w-lg mx-auto">
            <a
              href={`mailto:${data.email}`}
              className="group flex items-center justify-center gap-4 text-xl md:text-2xl font-bold bg-card text-foreground w-full py-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
            >
              <Mail className="text-primary group-hover:scale-110 transition-transform" />
              <span>{data.email}</span>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <a
                href={`tel:${data.phone.replace(/ /g, '')}`}
                className="group flex items-center justify-center gap-3 text-lg font-bold bg-primary-foreground/10 backdrop-blur-md py-4 rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
              >
                <Phone className="group-hover:scale-110 transition-transform" />
                <span>{data.phone}</span>
              </a>

              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 text-lg font-bold bg-gray-900 text-white py-4 rounded-2xl border border-gray-800 hover:-translate-y-1 transition-all shadow-lg"
              >
                <Github className="group-hover:scale-110 transition-transform" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
