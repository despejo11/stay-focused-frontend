'use client'

import styles from './style.module.scss'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import useThemeClass from '@/hooks/useThemeClass'
import { PagesConfig } from '@/config/pages.config'
import { LinksConfig } from '@/config/links.config'
import { ThemeContext } from '@/providers/ThemeProvider'
import { TransitionLink } from '@/components/utils/TransitionLink'
import { useContext } from 'react'

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
            <TransitionLink href={PagesConfig.home} className={styles.logo}>
              <img
                src={
                  theme === 'dark'
                    ? '/images/logos/logoWhite.svg'
                    : '/images/logos/logoBlack.svg'
                }
                alt='Logo'
              />
            </TransitionLink>

            <div className={styles.flexLinks}>
              <div className={styles.links}>
                <p className={styles.title}>Navigation</p>
                <TransitionLink href={PagesConfig.home}>Home</TransitionLink>
                <TransitionLink href={PagesConfig.home}>
                  Methodologies
                </TransitionLink>
                <TransitionLink href={PagesConfig.about}>About</TransitionLink>
              </div>

              <div className={styles.links}>
                <p className={styles.title}>More</p>
                <TransitionLink href={PagesConfig.home}>
                  Privacy Policy
                </TransitionLink>
                <TransitionLink href={PagesConfig.home}>FAQ</TransitionLink>
              </div>
            </div>

            <span className={styles.line} />

            <div className={styles.email}>
              <p>If you have any questions, reach out to us via email</p>

              <a href={LinksConfig.email} target='_blank'>
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
                <a href={LinksConfig.discord} target='_blank'>
                  <img src='/images/socialMedia/discord.svg' alt='Discord' />
                </a>

                <span />

                <a href={LinksConfig.email} target='_blank'>
                  <img src='/images/socialMedia/mail.svg' alt='Email' />
                </a>
              </div>
            </div>

            <div className={styles.right}>
              <ThemeToggle />

              <div className={styles.developers}>
                <p>Designed & Developed by</p>

                <div>
                  <a href={LinksConfig.augustin} target='_blank'>
                    augustin
                  </a>

                  <a href={LinksConfig.chkstepan} target='_blank'>
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
