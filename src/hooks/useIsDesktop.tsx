'use client'

import { useEffect, useState } from 'react'

export default function useIsDesktop(breakpoint = 1000) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth > breakpoint : true
  )

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > breakpoint)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [breakpoint])

  return isDesktop
}
