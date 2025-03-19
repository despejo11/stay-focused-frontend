'use client'

import styles from './style.module.scss'
import { ThemeContext } from '../../providers/ThemeProvider'
import { useContext } from 'react'

type ThemeContextType = [string, React.Dispatch<React.SetStateAction<string>>]

export default function ThemeToggle() {
  const context = useContext(ThemeContext)

  const [theme, setTheme] = context as ThemeContextType

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button className={styles.toggle} onClick={changeTheme}>
      {theme === 'light' ? (
        <img src='/images/icons/dark.svg' alt='Dark' />
      ) : (
        <img src='/images/icons/light.svg' alt='Light' />
      )}
    </button>
  )
}
