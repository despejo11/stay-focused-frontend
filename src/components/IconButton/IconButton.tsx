import styles from './style.module.scss'
import { PagesConfig } from '@/config/pages.config'
import Link from 'next/link'

interface IIconButtonProps {
  link: string
  text: string
}

export default function IconButton({ link, text }: IIconButtonProps) {
  const isGetStarted = text === 'Get Started'

  const buttonClass = isGetStarted
    ? `${styles.button} ${styles.border}`
    : styles.button

  const linkStyle = {
    border: isGetStarted ? '0px' : '2px solid #6d6d70',
  }

  return (
    <Link href={PagesConfig[link]} className={buttonClass} style={linkStyle}>
      <p>{text}</p>

      <span>
        <img
          src={
            text === 'Get Started'
              ? '/images/icons/arrowButton.svg'
              : '/images/icons/errorButton.svg'
          }
          alt='Icon'
        />
      </span>
    </Link>
  )
}
