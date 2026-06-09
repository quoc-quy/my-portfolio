import { portfolioData } from '@/data/portfolioData'
import Navbar from '@/components/Navbar'
import FloatingCV from '@/components/FloatingCV' // <--- Import component mới
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home(props: Props) {
  const searchParams = await props.searchParams
  const lang = searchParams?.lang === 'en' ? 'en' : 'vi'
  const data = portfolioData[lang]

  return (
    <main className="min-h-screen selection:bg-primary selection:text-primary-foreground">
      <Navbar lang={lang} navData={data.nav} />

      {/* Thêm nút Floating CV vào trang */}
      <FloatingCV cvLabel={data.hero.viewCV} />

      <Hero data={data.hero} />
      <About data={data.about} />
      <Skills data={data.skills} />
      <Projects data={data.projects} />
      <Contact data={data.contact} />
    </main>
  )
}
