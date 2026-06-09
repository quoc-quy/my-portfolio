/* eslint-disable react/jsx-key */
'use client'
import { fadeUp, stagger, zoomIn } from '@/lib/animations'
import { MotionDiv, MotionH2 } from '@/components/Motion'
import { Workflow, Code2, Layers, Cpu, Wrench } from 'lucide-react'

export default function Skills({ data }: { data: any }) {
  const icons = [
    <Code2 size={24} />,
    <Layers size={24} />,
    <Workflow size={24} />,
    <Cpu size={24} />
  ]

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-secondary/10">
      <div className="absolute inset-0 bg-dots-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <MotionH2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-16 text-center text-foreground flex items-center justify-center gap-4"
        >
          <Wrench className="w-10 h-10 text-primary animate-float" />
          {data.title}
        </MotionH2>

        <div className="space-y-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground border-l-4 border-primary pl-4 py-1">
              {data.hardSkillsTitle}
            </h3>
            <MotionDiv
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {data.hardSkills.map((skill: any, idx: number) => (
                <MotionDiv
                  variants={fadeUp}
                  key={idx}
                  className="p-6 bg-card border border-border/50 rounded-3xl hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
                  <div className="mb-4 text-primary bg-primary/10 w-fit p-3 rounded-2xl">
                    {icons[idx % icons.length]}
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>

          <MotionDiv
            variants={zoomIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-card border border-primary/20 rounded-[2.5rem] shadow-xl relative overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">{data.softSkillsTitle}</h3>
                <div className="flex flex-wrap gap-3">
                  {data.softSkills.map((item: string, i: number) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 bg-background border border-border rounded-xl font-semibold text-sm transition-transform hover:-translate-y-1 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary">{data.toolsTitle}</h3>
                <div className="flex flex-wrap gap-3">
                  {data.tools.map((item: string, i: number) => (
                    <span
                      key={i}
                      className="px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-bold text-sm shadow-md"
                    >
                      {item}
                    </span>
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
