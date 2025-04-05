import { Metadata } from 'next'
import Header from '@/components/ui/Header/Header'
import AboutContent from '@/components/ui/AboutContent/AboutContent'
import Footer from '@/components/ui/Footer/Footer'

export const metadata: Metadata = {
  title: 'About - Stay Focused',
}

export default function About() {
  return (
    <>
      <Header />
      <AboutContent />
      <Footer />
    </>
  )
}
