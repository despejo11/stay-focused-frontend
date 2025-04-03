'use client'

import styles from './style.module.scss'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import useThemeClass from '@/hooks/useThemeClass'
import Menu from './Menu/Menu'
import { PagesConfig } from '@/config/pages.config'
import { TransitionLink } from '@/components/utils/TransitionLink'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className={useThemeClass(styles.desktop, styles.darkDesktop)}>
          <div className={styles.links}>
            <TransitionLink href={PagesConfig.home} className={styles.logo}>
              <img src='/images/logos/logoBlue.svg' alt='Logo' />
            </TransitionLink>

            <div>
              <TransitionLink href={PagesConfig.home}>Home</TransitionLink>
              <TransitionLink href={PagesConfig.about}>About</TransitionLink>
              <TransitionLink href={PagesConfig.home}>
                Methodologies
              </TransitionLink>
            </div>
          </div>

          <div className={styles.buttons}>
            <ThemeToggle />

            <span />

            <TransitionLink href={PagesConfig.home} className={styles.login}>
              Log in
            </TransitionLink>

            <div className={styles.menu}>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
