import { fadeUp, stagger, zoomIn, floatContinuous } from '@/lib/animations'
import { MotionDiv, MotionH1, MotionP } from '@/components/Motion'
import { Code2, MonitorPlay, Rocket, Database, ChevronRight, Download } from 'lucide-react'
import Image from 'next/image'

const dataSatellites = [
  {
    Icon: Code2,
    label: 'React / Next.js',
    bg: 'bg-blue-500',
    pos: 'top-[15%] -left-[10%]',
    delay: 0
  },
  {
    Icon: MonitorPlay,
    label: 'UI/UX',
    bg: 'bg-purple-500',
    pos: 'top-[25%] -right-[15%]',
    delay: 1.5
  },
  {
    Icon: Rocket,
    label: 'Performance',
    bg: 'bg-orange-500',
    pos: 'bottom-[25%] -left-[15%]',
    delay: 3
  },
  {
    Icon: Database,
    label: 'Real-time',
    bg: 'bg-green-500',
    pos: 'bottom-[15%] -right-[10%]',
    delay: 4.5
  }
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-blob" />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-blob"
        style={{ animationDelay: '2s' }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <MotionDiv variants={stagger} initial="hidden" animate="show" className="relative">
          <MotionDiv
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-primary font-bold text-sm mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {data.role}
          </MotionDiv>
          <MotionH1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight"
          >
            {data.name1} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 drop-shadow-sm">
              {data.name2}
            </span>
          </MotionH1>
          <MotionP
            variants={fadeUp}
            className="text-xl md:text-2xl text-foreground font-semibold mb-4 border-l-4 border-primary pl-5 py-1"
          >
            &quot;{data.hook}&quot;
          </MotionP>
          <MotionP
            variants={fadeUp}
            className="text-base text-muted-foreground mb-8 leading-relaxed lg:pr-10"
          >
            {data.summary}
          </MotionP>
          <MotionDiv variants={fadeUp} className="flex flex-wrap gap-4">
            <a
              href="/Tran-Nguyen-Quoc-Quy.pdf"
              download
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:-translate-y-1 hover:shadow-lg transition-all flex items-center gap-2"
            >
              {data.cta1} <Download size={20} />
            </a>
            <a
              href="#contact"
              className="border-2 border-border bg-background/50 backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary hover:-translate-y-1 transition-all"
            >
              {data.cta2}
            </a>
          </MotionDiv>
        </MotionDiv>

        <div className="relative justify-self-center md:justify-self-end w-full max-w-md aspect-square mt-10 md:mt-0">
          {dataSatellites.map((sat, idx) => (
            <MotionDiv
              key={idx}
              className={`absolute ${sat.pos} z-20 flex items-center gap-3 pr-5 pl-1.5 py-1.5 rounded-full bg-card border border-border shadow-xl hidden md:flex`}
              variants={floatContinuous(sat.delay)}
              animate="animate"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`p-2 rounded-full ${sat.bg} flex items-center justify-center`}>
                <sat.Icon className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm">{sat.label}</span>
            </MotionDiv>
          ))}
          <MotionDiv
            variants={zoomIn}
            initial="hidden"
            animate="show"
            className="relative w-full h-full z-10 flex items-center justify-center"
          >
            <div className="w-full h-full aspect-square rounded-[3rem] bg-card border border-border shadow-2xl relative rotate-3 hover:rotate-0 transition-all duration-500 overflow-hidden">
              <Image
                src="/avatar.png"
                alt="Trần Nguyễn Quốc Quý"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
