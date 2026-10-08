import type { Metadata } from 'next'
import { Be_Vietnam_Pro, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import ClickFireworks from '@/components/ClickFireworks'

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'vietnamese'],
  variable: '--font-be-vietnam-pro',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://quocquy-portfolio.vercel.app'),
  title: {
    default: 'Trần Nguyễn Quốc Quý | Web Developer',
    template: '%s | Trần Nguyễn Quốc Quý',
  },
  description:
    'Portfolio of Tran Nguyen Quoc Quy - Web Developer Intern specializing in Next.js 16, React 19, TypeScript, and modern real-time systems.',
  keywords: [
    'Tran Nguyen Quoc Quy',
    'Quoc Quy',
    'Web Developer',
    'Frontend Developer',
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Automation Land',
    'TalentCore',
    'ChatPulse',
    'TripBee'
  ],
  authors: [{ name: 'Trần Nguyễn Quốc Quý', url: 'https://github.com/quoc-quy' }],
  creator: 'Trần Nguyễn Quốc Quý',
  icons: {
    icon: '/logo.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://quocquy-portfolio.vercel.app',
    siteName: 'Trần Nguyễn Quốc Quý Portfolio',
    title: 'Trần Nguyễn Quốc Quý | Web Developer',
    description:
      'Xây dựng ứng dụng web hiện đại với giao diện trực quan, hiệu năng cao và tích hợp AI.',
    images: [
      {
        url: '/avatar.png',
        width: 1200,
        height: 630,
        alt: 'Trần Nguyễn Quốc Quý - Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trần Nguyễn Quốc Quý | Web Developer',
    description:
      'Xây dựng ứng dụng web hiện đại với giao diện trực quan, hiệu năng cao và tích hợp AI.',
    images: ['/avatar.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} ${jetbrainsMono.variable} font-sans antialiased transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ClickFireworks />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
