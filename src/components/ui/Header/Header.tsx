'use client'

import styles from './style.module.scss'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import useThemeClass from '@/hooks/useThemeClass'
import Menu from './Menu/Menu'
import { PagesConfig } from '@/config/pages.config'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className={useThemeClass(styles.desktop, styles.darkDesktop)}>
          <div className={styles.links}>
            <Link href={PagesConfig.home} className={styles.logo}>
              <img src='/images/logos/logoBlue.svg' alt='Logo' />
            </Link>

            <div>
              <Link href={PagesConfig.home}>Home</Link>
              <Link href={PagesConfig.home}>About</Link>
              <Link href={PagesConfig.home}>Methodologies</Link>
            </div>
          </div>

          <div className={styles.buttons}>
            <ThemeToggle />

            <span />

            <Link href={PagesConfig.home} className={styles.login}>
              Log in
            </Link>

            <div className={styles.menu}>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
