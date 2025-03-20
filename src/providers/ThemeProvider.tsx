'use client'

import useLocalStorage from '@/hooks/useLocalStorage'
import { createContext, useEffect, ReactNode } from 'react'

type ThemeContextType = [string, React.Dispatch<React.SetStateAction<string>>]

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useLocalStorage<string>('Theme', 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}
