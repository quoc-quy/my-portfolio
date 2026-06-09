'use client'
import { fadeUp, stagger, fadeRight } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import { Quote, GraduationCap } from 'lucide-react'

export default function About({ data }: { data: any }) {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <MotionDiv
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="relative flex justify-center"
        >
          <Quote className="absolute -top-6 left-0 w-20 h-20 text-primary/20 -rotate-12" />
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 border-2 border-primary/20 shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
            <span className="text-primary/50 font-bold text-xl">Insert your Image Here</span>
          </div>
        </MotionDiv>

        <MotionDiv
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <MotionH2 variants={fadeUp} className="text-4xl font-bold mb-6 flex items-center gap-4">
            <span className="w-10 h-1 bg-primary rounded-full"></span>
            {data.title}
          </MotionH2>
          <MotionP variants={fadeUp} className="text-lg text-muted-foreground leading-relaxed mb-4">
            {data.description}
          </MotionP>

          {data.professionalSummary && (
            <MotionP
              variants={fadeUp}
              className="text-base text-primary font-medium italic mb-8 border-l-4 border-primary pl-4 py-1 bg-primary/5 rounded-r-lg"
            >
              {data.professionalSummary}
            </MotionP>
          )}

          <div className="space-y-4 mt-8">
            <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
              <GraduationCap className="text-primary" /> Education
            </h3>
            {data.education.map((edu: any, i: number) => (
              <MotionDiv
                variants={fadeUp}
                key={i}
                className="group p-5 bg-card border border-border hover:border-primary/50 rounded-2xl hover:-translate-y-1 transition-all duration-300 shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
                <span className="text-sm font-bold text-primary mb-1 block">{edu.time}</span>
                <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {edu.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{edu.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  )
}
