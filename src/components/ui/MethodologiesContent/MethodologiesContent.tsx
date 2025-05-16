'use client'

import styles from './style.module.scss'
import Timer from './components/Timer/Timer'

export default function MethodologiesContent() {
  return (
    <div className='container'>
      <div className={styles.content}>
        <Timer focusTime={7} relaxTime={3} sets={4} />
      </div>
    </div>
  )
}
