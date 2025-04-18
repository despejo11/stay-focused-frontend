'use client'

import styles from './style.module.scss'
import useTheme from '@/hooks/useTheme'
import { ThemeContext } from '../../providers/ThemeProvider'
import { useContext } from 'react'

type TThemeContextType = [
  'light' | 'dark',
  React.Dispatch<React.SetStateAction<'light' | 'dark'>>
]

export default function ThemeToggle() {
  const [theme, setTheme] = useContext(ThemeContext) as TThemeContextType

  const toggleIcon = useTheme<string>(
    '/images/icons/dark.svg',
    '/images/icons/light.svg'
  )

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button className={styles.toggle} onClick={changeTheme}>
      <img src={toggleIcon} alt={theme === 'light' ? 'Dark' : 'Light'} />
    </button>
  )
}
