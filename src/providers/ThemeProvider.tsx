'use client'

import useLocalStorage from '@/hooks/useLocalStorage'
import { createContext, useEffect, ReactNode } from 'react'

type ThemeContextType = [string, React.Dispatch<React.SetStateAction<string>>]

interface IThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeProvider({ children }: IThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<string>('Theme', 'light')

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      document.body.classList.add('dark')
      root.style.setProperty('color-scheme', 'dark')
    } else {
      document.body.classList.remove('dark')
      root.style.setProperty('color-scheme', 'light')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}
