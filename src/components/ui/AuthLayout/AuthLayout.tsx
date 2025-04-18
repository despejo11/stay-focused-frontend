'use client'

import styles from './style.module.scss'
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle'
import useThemeClass from '@/hooks/useThemeClass'
import { TransitionLink } from '@/components/utils/TransitionLink'
import { PagesConfig } from '@/config/pages.config'

interface IAuthLayoutProps {
  title: string
  description: string
  children: React.ReactNode
}

export default function AuthLayout({
  title,
  description,
  children,
}: IAuthLayoutProps) {
  return (
    <div className='container'>
      <div className={styles.content}>
        <div className={styles.formContainer}>
          <div className={styles.head}>
            <TransitionLink href={PagesConfig.home} className={styles.logo}>
              <img src='/images/logos/logoBlue.svg' alt='Logo' />
            </TransitionLink>

            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>

          <div>{children}</div>

          <div className={useThemeClass(styles.end, styles.endDark)}>
            <ThemeToggle />
            <p>© 2025 Stay Focused, all rights reserved</p>
          </div>
        </div>

        <div className={styles.banner}>
          <p className={styles.title}>Start your focus session now!</p>
          <p className={styles.description}>
            No setup required — just press start and get to work. Let the timer
            guide your focus while you stay immersed in what matters.
          </p>
        </div>
      </div>
    </div>
  )
}
