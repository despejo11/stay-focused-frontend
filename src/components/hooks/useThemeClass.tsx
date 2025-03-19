import { useContext } from 'react'
import { ThemeContext } from '@/providers/ThemeProvider'

const useThemeClass = (lightClass: string, darkClass: string): string => {
  const context = useContext(ThemeContext)

  if (!context) {
    return lightClass
  }

  const [theme] = context

  return `${lightClass} ${theme === 'dark' ? darkClass : ''}`
}

export default useThemeClass
