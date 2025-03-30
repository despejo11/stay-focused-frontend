'use client'

import Lenis from 'lenis'
import { ReactNode, useEffect } from 'react'

export default function Template({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return <>{children}</>
}
