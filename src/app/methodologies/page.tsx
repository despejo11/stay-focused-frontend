import { Metadata } from 'next'
import Header from '@/components/ui/Header/Header'
import MethodologiesContent from '@/components/ui/MethodologiesContent/MethodologiesContent'

export const metadata: Metadata = {
  title: 'Methodologies - Stay Focused',
}

export default function Methodologies() {
  return (
    <>
      <Header />
      <MethodologiesContent />
    </>
  )
}
