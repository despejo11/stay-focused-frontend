import styles from './style.module.scss'
import { PagesConfig } from '@/config/pages.config'
import Link from 'next/link'

interface IIconButtonProps {
  link: string
  text: string
}

export default function IconButton({ link, text }: IIconButtonProps) {
  return (
    <Link href={PagesConfig[link]} className={styles.button}>
      <p>{text}</p>

      <span>
        <img src='/images/icons/arrowButton.svg' alt='Arrow' />
      </span>
    </Link>
  )
}
