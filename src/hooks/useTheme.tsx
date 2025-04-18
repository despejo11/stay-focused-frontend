'use client'

import { useContext, Dispatch, SetStateAction } from 'react'
import { ThemeContext } from '@/providers/ThemeProvider'

type TThemeContextType = [string, Dispatch<SetStateAction<string>>] | undefined

export default function useTheme<T>(lightValue: T, darkValue: T): T {
  const context = useContext(ThemeContext) as TThemeContextType

  if (!context) {
    return lightValue
  }

  const [theme] = context
  return theme === 'dark' ? darkValue : lightValue
}
