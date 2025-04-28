import useTheme from './useTheme'

export default function useThemeClass(
  lightClass: string,
  darkClass: string
): string {
  const themeClass = useTheme<string>('', darkClass)

  return `${lightClass} ${themeClass}`.trim()
}
