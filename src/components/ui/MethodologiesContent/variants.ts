import { transition } from './utils'
import { Variants } from 'framer-motion'

export const shakeVariants: Variants = {
  initial: { x: 0, y: 0, rotate: 0 },
  shaking: {
    x: [0, -1.5, 1.5, -1, 1, 0],
    y: [0, 1.5, -1.5, 1, -1, 0],
    rotate: [0, 1, -1, 1, -1, 0],
    transition: {
      duration: transition,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    },
  },
  stop: { x: 0, y: 0, rotate: 0 },
}
