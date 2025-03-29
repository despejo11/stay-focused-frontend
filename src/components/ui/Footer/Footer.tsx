'use client'

import styles from './style.module.scss'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import useThemeClass from '@/hooks/useThemeClass'
import { PagesConfig } from '@/config/pages.config'
import { ThemeContext } from '@/providers/ThemeProvider'
import { useContext } from 'react'
import Link from 'next/link'

export default function Footer() {
  const context = useContext(ThemeContext)

  if (!context) {
    return null
  }

  const [theme] = context

  return (
    <footer className={useThemeClass(styles.background, styles.darkBackground)}>
      <div className='container'>
        <div className={styles.content}>
          <div className={styles.topFlex}>
            <Link href={PagesConfig.home} className={styles.logo}>
              <img
                src={
                  theme === 'dark'
                    ? '/images/logos/logoWhite.svg'
                    : '/images/logos/logoBlack.svg'
                }
                alt='Logo'
              />
            </Link>

            <div className={styles.flexLinks}>
              <div className={styles.links}>
                <p className={styles.title}>Navigation</p>
                <Link href={PagesConfig.home}>Home</Link>
                <Link href={PagesConfig.home}>Methodologies</Link>
                <Link href={PagesConfig.home}>About</Link>
              </div>

              <div className={styles.links}>
                <p className={styles.title}>More</p>
                <Link href={PagesConfig.home}>Privacy Policy</Link>
                <Link href={PagesConfig.home}>FAQ</Link>
              </div>
            </div>

            <span className={styles.line} />

            <div className={styles.email}>
              <p>If you have any questions, reach out to us via email</p>

              <a href='mailto:info@stayfocused.one' target='_blank'>
                info@stayfocused.one
              </a>
            </div>
          </div>

          <div className={styles.bottomFlex}>
            <div className={styles.left}>
              <p className={styles.reserved}>
                © {new Date().getFullYear()} Stay Focused, all rights reserved
              </p>

              <div className={styles.socialMedia}>
                <a href='https://discord.gg/VPKJBR5bTT' target='_blank'>
                  <img src='/images/socialMedia/discord.svg' alt='Discord' />
                </a>

                <span />

                <a href='mailto:info@stayfocused.one' target='_blank'>
                  <img src='/images/socialMedia/mail.svg' alt='Mail' />
                </a>
              </div>
            </div>

            <div className={styles.right}>
              <ThemeToggle />

              <div className={styles.developers}>
                <p>Designed & Developed by</p>

                <div>
                  <a
                    href='https://www.linkedin.com/in/augustin-gerasym?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
                    target='_blank'
                  >
                    augustin
                  </a>

                  <a href='https://chkstepan.com/' target='_blank'>
                    chkstepan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
