import { portfolioData } from '@/data/portfolioData'
import Navbar from '@/components/Navbar'
import FloatingCV from '@/components/FloatingCV'
import Chatbot from '@/components/Chatbot'
import Hero from '@/sections/Hero'
import Metrics from '@/sections/Metrics'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Mindset from '@/sections/Mindset'
import Roadmap from '@/sections/Roadmap'
import AISection from '@/sections/AISection'
import Contact from '@/sections/Contact'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home(props: Props) {
  const searchParams = await props.searchParams
  const lang = searchParams?.lang === 'vi' ? 'vi' : 'en'
  const data = portfolioData[lang]

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground antialiased overflow-x-hidden">
      {/* Sleek Floating Navbar */}
      <Navbar lang={lang} navData={data.nav} />

      {/* Floating CV capsule Trigger */}
      <FloatingCV
        cvLabel={data.hero.viewCV}
        downloadLabel={lang === 'vi' ? 'Tải xuống CV' : 'Download CV'}
      />

      {/* Chatbot overlay recruiter widget */}
      <Chatbot lang={lang} />

      {/* Core Portfolio Sections */}
      <Hero data={data.hero} />
      
      <Metrics data={data.metrics} />
      
      <Projects data={data.projects} lang={lang} />
      
      <Skills data={data.skills} />
      
      <Mindset data={data.mindset} />
      
      <Roadmap data={data.roadmap} />
      
      <AISection data={data.aiAssistant} lang={lang} />
      
      <Contact data={data.contact} lang={lang} />
    </main>
  )
}
