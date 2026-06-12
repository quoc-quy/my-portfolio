/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, fadeRight } from '@/lib/animations'
import { MotionDiv, MotionH2, MotionP } from '@/components/Motion'
import { Quote, GraduationCap, Play, RefreshCw, Terminal as TerminalIcon } from 'lucide-react'

// Custom mini TS logo icon
function TsIcon() {
  return (
    <span className="bg-[#3178c6] text-white text-[10px] font-black px-1.5 py-0.5 rounded mr-2 select-none">
      TS
    </span>
  )
}

export default function About({ data }: { data: any }) {
  const [isRunning, setIsRunning] = useState(false)
  const [consoleLogs, setConsoleLogs] = useState<string[]>([])

  const runCode = () => {
    if (isRunning) return
    setIsRunning(true)
    setConsoleLogs([])

    const logs = [
      'Compiling aboutMe.ts...',
      'Running developer.code()...',
      '⚡ Online: 127.0.0.1:3000',
      `🚀 "${data.greeting || "Hello, I'm Tran Nguyen Quoc Quy!"}"`
    ]

    logs.forEach((log, index) => {
      setTimeout(
        () => {
          setConsoleLogs((prev) => [...prev, log])
          if (index === logs.length - 1) {
            setIsRunning(false)
          }
        },
        (index + 1) * 500
      )
    })
  }

  // Automatically simulate running on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      runCode()
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left column: Interactive Code Editor mockup */}
        <MotionDiv
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="relative flex justify-center w-full"
        >
          <Quote className="absolute -top-6 left-0 w-20 h-20 text-primary/10 -rotate-12 pointer-events-none" />

          <div className="w-full max-w-md h-[440px] rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden flex flex-col relative group">
            {/* Header tab bar */}
            <div className="h-11 bg-slate-950/80 border-b border-slate-800/80 flex items-center justify-between px-4 flex-shrink-0 select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>

              <div className="flex items-center bg-slate-900 border-x border-t border-slate-800/60 px-4 py-1.5 rounded-t-lg text-xs font-semibold text-slate-400">
                <TsIcon />
                developer.ts
              </div>

              {/* Action trigger button */}
              <button
                onClick={runCode}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground text-xs font-bold rounded-lg transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-sm"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    <span>Running</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current" />
                    <span>Run</span>
                  </>
                )}
              </button>
            </div>

            {/* Code lines container */}
            <div className="flex-grow flex p-5 font-mono text-[13px] overflow-hidden text-left leading-relaxed">
              {/* Line numbers column */}
              <div className="text-slate-600 pr-4 text-right select-none space-y-1">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
              </div>

              {/* Colorful code tags */}
              <div className="text-slate-300 space-y-1 select-text flex-grow">
                <div>
                  <span className="text-pink-500">const</span>{' '}
                  <span className="text-cyan-400">developer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">name</span>:{' '}
                  <span className="text-amber-300">&apos;Tran Nguyen Quoc Quy&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">focus</span>:{' '}
                  <span className="text-amber-300">&apos;React, Next.js & Node.js&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">building</span>:{' '}
                  <span className="text-amber-300">&apos;Real-time & AI-powered Apps&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">interests</span>:{' '}
                  <span className="text-amber-300">
                    &apos;UI/UX, Performance & Scalability&apos;
                  </span>
                </div>
                <div>{'}'};</div>

                <div className="h-3"></div>

                <div className="text-slate-500">{'// Ready for new challenges'}</div>
                <div>
                  <span className="text-cyan-400">developer</span>.
                  <span className="text-emerald-400 font-bold">code</span>();
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="inline-block w-1.5 h-4 ml-0.5 bg-primary align-middle"
                  />
                </div>
              </div>
            </div>

            {/* Console output display */}
            <div
              className={`absolute bottom-0 inset-x-0 bg-slate-950/95 border-t border-slate-800/80 transition-all duration-500 overflow-hidden ${
                consoleLogs.length > 0 ? 'h-[140px]' : 'h-0'
              }`}
            >
              <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800/50 text-[11px] font-bold text-slate-500 select-none">
                <div className="flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-primary animate-pulse" />
                  <span>TERMINAL CONSOLE</span>
                </div>
                <button
                  onClick={() => setConsoleLogs([])}
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Clear
                </button>
              </div>
              <div className="p-4 font-mono text-[12px] text-left space-y-0.5 overflow-hidden h-[96px]">
                {consoleLogs.map((log, idx) => {
                  const isSuccess =
                    log.includes('Success') ||
                    log.includes('Online') ||
                    log.includes('Hello') ||
                    log.includes('Trần')
                  const colorClass = isSuccess ? 'text-emerald-400 font-semibold' : 'text-slate-400'
                  return (
                    <div key={idx} className={colorClass}>
                      <span className="text-slate-600 select-none mr-2">$</span>
                      {log}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </MotionDiv>

        {/* Right column: About textual info */}
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
              <GraduationCap className="text-primary" /> {data.educationTitle || 'Education'}
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
