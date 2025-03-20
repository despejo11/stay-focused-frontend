'use client'

import styles from './style.module.scss'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import useThemeClass from '@/hooks/useThemeClass'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className={useThemeClass(styles.desktop, styles.darkDesktop)}>
          <div className={styles.links}>
            <Link href='/' className={styles.logo}>
              <img src='/images/other/logoBlue.svg' alt='Logo' />
            </Link>

            <div>
              <Link href='/'>Home</Link>
              <Link href='/about'>About</Link>
              <Link href='/methodologies'>Methodologies</Link>
            </div>
          </div>

          <div className={styles.buttons}>
            <ThemeToggle />

            <span />

            <Link href='/login' className={styles.login}>
              Log in
            </Link>
          </div>
        </div>

        <div className={styles.mobile}></div>
      </div>
    </header>
  )
}
