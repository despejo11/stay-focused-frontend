import { Metadata } from 'next'
import Header from '@/components/ui/Header/Header'
import PrivacyContent from '@/components/ui/PrivacyContent/PrivacyContent'
import Footer from '@/components/ui/Footer/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Stay Focused',
}

export default function Privacy() {
  return (
    <>
      <Header />
      <PrivacyContent />
      <Footer />
    </>
  )
}
