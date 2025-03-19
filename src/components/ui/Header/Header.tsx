'use client'

import styles from './style.module.scss'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'

export default function Header() {
  return (
    <header className={styles.content}>
      <ThemeToggle />
    </header>
  )
}
