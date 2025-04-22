import styles from './style.module.scss'
import useThemeClass from '@/hooks/useThemeClass'

export default function OrLine() {
  return (
    <div className={useThemeClass(styles.line, styles.darkLine)}>
      <span />
      <p>or</p>
      <span />
    </div>
  )
}
