import type { Metadata } from 'next'
import { portfolioData } from '@/data/portfolioData'
import Navbar from '@/components/Navbar'
import ClientWidgets from '@/components/ClientWidgets'
import Hero from '@/sections/Hero'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Contact from '@/sections/Contact'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// Next.js Dynamic SEO Metadata Generation based on active language
export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = await props.searchParams
  const lang = searchParams?.lang === 'vi' ? 'vi' : 'en'
  const data = portfolioData[lang]

  return {
    title: `${data.hero.name1} ${data.hero.name2} | ${data.hero.role}`,
    description: data.hero.hook,
    openGraph: {
      title: `${data.hero.name1} ${data.hero.name2} - ${data.hero.role}`,
      description: data.hero.summary,
      url: `https://quocquy-portfolio.vercel.app/?lang=${lang}`,
      siteName: `${data.hero.name2} Portfolio`,
      locale: lang === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
    },
    alternates: {
      canonical: 'https://quocquy-portfolio.vercel.app',
      languages: {
        'vi-VN': '/?lang=vi',
        'en-US': '/?lang=en',
      },
    },
  }
}

export default async function Home(props: Props) {
  const searchParams = await props.searchParams
  const lang = searchParams?.lang === 'vi' ? 'vi' : 'en'
  const data = portfolioData[lang]

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground antialiased overflow-x-hidden">
      {/* Sleek Floating Navbar (Server Rendered Structure) */}
      <Navbar lang={lang} navData={data.nav} />

      {/* Code-split Client Interactive Widgets (Floating CV) */}
      <ClientWidgets
        cvLabel={data.hero.viewCV}
        downloadLabel={lang === 'vi' ? 'Tải xuống CV' : 'Download CV'}
        lang={lang}
      />

      {/* Core Portfolio Sections (Server-Driven) */}
      <Hero data={data.hero} />
      
      <Experience data={data.experience} lang={lang} />
      
      <Projects data={data.projects} lang={lang} />
      
      <Skills data={data.skills} lang={lang} />
      
      <Contact data={data.contact} lang={lang} />
    </main>
  )
}
