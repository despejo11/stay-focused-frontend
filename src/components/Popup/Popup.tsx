'use client'

import styles from './style.module.scss'
import useTheme from '@/hooks/useTheme'
import {
  contentTransition,
  contentVariants,
  overlayTransition,
  overlayVariants,
} from './variants'
import { AnimatePresence, motion } from 'framer-motion'
import { MouseEvent, ReactNode, useContext, useEffect } from 'react'
import { ThemeContext } from '@/providers/ThemeProvider'

interface IPopupProps {
  openPopup: boolean
  setOpenPopup: (open: boolean) => void
  children: ReactNode
}

export default function Popup({
  openPopup,
  setOpenPopup,
  children,
}: IPopupProps) {
  const context = useContext(ThemeContext)

  if (!context) {
    return null
  }

  const [theme] = context

  const closeSrc = useTheme<string>(
    '/images/icons/blackClose.svg',
    '/images/icons/whiteClose.svg'
  )

  useEffect(() => {
    if (openPopup) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'auto'
    }

    return () => {
      document.documentElement.style.overflow = 'auto'
    }
  }, [openPopup])

  const handleClosePopup = () => {
    setOpenPopup(false)
  }

  const onWrapperClick = (event: MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).classList.contains(styles.wrapper)) {
      handleClosePopup()
    }
  }

  return (
    <AnimatePresence>
      {openPopup && (
        <motion.div
          key='popup'
          variants={overlayVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={overlayTransition}
          className={styles.overlay}
        >
          <div className={styles.wrapper} onClick={onWrapperClick}>
            <motion.div
              variants={contentVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              transition={contentTransition}
              className={`${styles.content} ${
                theme === 'dark' ? styles.darkContent : ''
              }`}
            >
              <img
                className={styles.pattern}
                src='/images/patterns/popup.svg'
                alt='Pattern'
              />

              <button className={styles.closeButton} onClick={handleClosePopup}>
                <img src={closeSrc} alt='Close' />
              </button>

              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
