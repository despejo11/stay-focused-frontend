import useTheme from './useTheme'

function useThemeClass(lightClass: string, darkClass: string): string {
  const themeClass = useTheme<string>('', darkClass)

  return `${lightClass} ${themeClass}`.trim()
}

export default useThemeClass
