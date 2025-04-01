import { Metadata } from 'next'
import styles from '@/styles/not-found.module.scss'
import DecryptedText from '@/components/DecryptedText/DecryptedText'
import IconButton from '@/components/IconButton/IconButton'
import Footer from '@/components/ui/Footer/Footer'

export const metadata: Metadata = {
  title: '404 - Stay Focused',
}

export default function notFound() {
  return (
    <>
      <div className='container'>
        <div className={styles.content}>
          <DecryptedText
            text='404'
            animateOn='view'
            sequential={true}
            speed={330}
            parentClassName={styles.error}
          />

          <IconButton text='Back to Home' link='home' />
        </div>
      </div>

      <Footer />
    </>
  )
}
