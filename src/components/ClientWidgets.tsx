'use client'
import dynamic from 'next/dynamic'

// Client-only dynamic imports with ssr: false to offload client bundle
const FloatingCV = dynamic(() => import('@/components/FloatingCV'), {
  ssr: false,
})

type ClientWidgetsProps = {
  cvLabel: string
  downloadLabel: string
  lang?: string
}

export default function ClientWidgets({
  cvLabel,
  downloadLabel,
  lang,
}: ClientWidgetsProps) {
  return <FloatingCV cvLabel={cvLabel} downloadLabel={downloadLabel} lang={lang} />
}
