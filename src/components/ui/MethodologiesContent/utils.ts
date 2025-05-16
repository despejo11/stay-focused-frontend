export const transition = 0.15

export const blue = '#5271ff'
export const lightBlue = '#529dff'

export const PHASE = {
  FOCUS: 'Focus',
  RELAX: 'Relax',
} as const

export const PHASE_DATA = {
  [PHASE.FOCUS]: {
    icon: '/images/icons/focus.svg',
    label: 'Focus',
  },
  [PHASE.RELAX]: {
    icon: '/images/icons/relax.svg',
    label: 'Relax',
  },
}
