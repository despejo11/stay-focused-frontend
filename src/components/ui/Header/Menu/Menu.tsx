'use client'

import styles from './style.module.scss'
import useThemeClass from '@/hooks/useThemeClass'
import { PagesConfig } from '@/config/pages.config'
import { LinksConfig } from '@/config/links.config'
import { ThemeContext } from '@/providers/ThemeProvider'
import { fadeInOutVariants } from '@/config/animations.config'
import { TransitionLink } from '@/components/utils/TransitionLink'
import { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const themeClass = useThemeClass(styles.menu, styles.darkMenu)
  const context = useContext(ThemeContext)

  if (!context) {
    return null
  }

  const [theme] = context

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.documentElement.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <>
      <button onClick={handleToggle} className={styles.handleToggle}>
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.img
              key='open'
              variants={fadeInOutVariants}
              className={styles.closeIcon}
              initial='initial'
              animate='animate'
              exit='exit'
              src='/images/icons/close.svg'
              alt='Close'
            />
          ) : (
            <motion.img
              key='closed'
              variants={fadeInOutVariants}
              className={styles.openIcon}
              initial='initial'
              animate='animate'
              exit='exit'
              src='/images/icons/menu.svg'
              alt='Menu'
            />
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={fadeInOutVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className={themeClass}
          >
            <div className={styles.content}>
              <img
                className={styles.pattern}
                src='/images/patterns/menu.svg'
                alt='Pattern'
              />

              <TransitionLink href={PagesConfig.home} onClick={handleLinkClick}>
                <img
                  src={
                    theme === 'dark'
                      ? '/images/logos/logoWhite.svg'
                      : '/images/logos/logoBlack.svg'
                  }
                  className={styles.logo}
                  alt='Logo'
                />
              </TransitionLink>

              <div className={styles.links}>
                <TransitionLink
                  className={styles.link}
                  href={PagesConfig.home}
                  onClick={handleLinkClick}
                >
                  Home
                </TransitionLink>
                <TransitionLink
                  className={styles.link}
                  href={PagesConfig.about}
                  onClick={handleLinkClick}
                >
                  About
                </TransitionLink>
                <TransitionLink
                  className={styles.link}
                  href={PagesConfig.home}
                  onClick={handleLinkClick}
                >
                  Methodologies
                </TransitionLink>
                <TransitionLink
                  className={styles.login}
                  href={PagesConfig.home}
                  onClick={handleLinkClick}
                >
                  Log in
                </TransitionLink>
              </div>

              <div className={styles.socialMedia}>
                <a href={LinksConfig.discord} target='_blank'>
                  <img src='/images/socialMedia/discord.svg' alt='Discord' />
                </a>

                <span />

                <a href={LinksConfig.email} target='_blank'>
                  <img src='/images/socialMedia/mail.svg' alt='Email' />
                </a>
              </div>

              <p className={styles.reserved}>
                © {new Date().getFullYear()} Stay Focused, all rights reserved
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
