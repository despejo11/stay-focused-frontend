import styles from './style.module.scss'
import IconButton from '@/components/IconButton/IconButton'

export default function Welcome() {
  return (
    <div className={styles.content}>
      <div className={styles.head}>
        <p className={styles.title}>Focus on what Matters</p>
        <p className={styles.description}>
          <span>Stay Focused</span> is a productivity tool to help you focus,
          track time, and achieve your goals. Set focus sessions, choose your
          methodology, and stay in control.
        </p>

        <img
          className={styles.pattern}
          src='/images/patterns/HomeHeadPattern.svg'
          alt='Pattern'
        />

        <div className={styles.card}></div>

        <IconButton link='home' text='Get Started' />
      </div>
    </div>
  )
}
