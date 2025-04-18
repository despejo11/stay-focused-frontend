const transition = 0.15

export const fadeInOutVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: transition,
    },
  },
  exit: { opacity: 0 },
}
