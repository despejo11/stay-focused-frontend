'use client'

import styles from './style.module.scss'
import Line from '@/components/Line/Line'
import useThemeClass from '@/hooks/useThemeClass'
import { LinksConfig } from '@/config/links.config'
import { useEffect, useRef, useState } from 'react'

export default function AboutContent() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight)
      }
    }

    if (!contentRef.current) return

    const observer = new ResizeObserver(updateHeight)
    observer.observe(contentRef.current)
    updateHeight()

    return () => observer.disconnect()
  }, [])

  return (
    <div className='container'>
      <div className={styles.content} ref={contentRef}>
        <svg
          width='clamp(0.338rem, 0.278rem + 0.3vw, 0.5rem)'
          height={Math.max(0, contentHeight - 30)}
          viewBox='0 0 4 1936'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.progress}
        >
          <line
            x1='2'
            x2='2'
            y2='1936'
            stroke='url(#paint0_linear_136_21)'
            strokeWidth='clamp(0.338rem, 0.278rem + 0.3vw, 0.5rem)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_136_21'
              x1='9.69286e-09'
              y1='1095'
              x2='-0.5'
              y2='1936'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#5271FF' />
              <stop offset='1' stopColor='#5271FF' stopOpacity='0' />
            </linearGradient>
          </defs>
        </svg>

        <div className={styles.card}>
          <img src='/images/other/Ellipse.svg' alt='Ellipse' />

          <div className={styles.text}>
            <p className={styles.title}>About Stay Focused</p>
            <p className={styles.description}>
              <span>Stay Focused</span> is your personal assistant for achieving
              maximum concentration. We created this tool to help you dive
              deeper into your tasks, work productively, and stay focused. Our
              system of flexible timers, productivity methodologies, and ambient
              soundscapes allows you to work, study, or meditate effectively.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img src='/images/other/Ellipse.svg' alt='Ellipse' />

          <div className={styles.text}>
            <p className={styles.title}>Our Mission</p>
            <p className={styles.description}>
              In a world full of distractions, we strive to help people find
              balance between work and rest without losing focus.{' '}
              <span>Stay Focused</span> gives you the ability to customize
              productivity methods to fit your needs - whether it's Pomodoro,
              25-minute work cycles, or fully personalized approaches.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <img src='/images/other/Ellipse.svg' alt='Ellipse' />

          <div className={styles.text}>
            <p className={styles.title}>Why It Matters</p>
            <p className={styles.description}>
              Productivity isn't about how many hours you work — it's about how
              effectively you use your time. <span>Stay Focused</span> helps you
              stay immersed in your tasks by providing the tools for intentional
              work and mindful breaks.
            </p>
          </div>
        </div>

        <div className={styles.cardAlt}>
          <img src='/images/other/Ellipse.svg' alt='Ellipse' />

          <div className={styles.text}>
            <p className={styles.title}>What's Next?</p>
            <p className={styles.subtitle}>
              <span>Stay Focused</span> is continuously evolving, and we have
              exciting plans for the future! Here's what's coming next:
            </p>

            <div className={styles.description}>
              <p>
                <span>— Metrics & Statistics:</span> Track your progress and
                gain insights into your productivity.
              </p>

              <p>
                <span>— Gamification:</span> Make productivity more engaging and
                rewarding. <span>Personalized Characters</span>, customize your
                animated assistant for a more enjoyable experience.
              </p>

              <p>
                <span>— Timer Design Customization:</span> Adjust the look and
                feel of your timer to match your preferences.
              </p>

              <p>
                <span>— Expanded Sound Library:</span> A broader collection of
                sounds to enhance your focus.
              </p>
            </div>

            <p className={styles.subtitle}>
              We're constantly improving <span>Stay Focused</span> to enhance
              your experience. Join us and stay focused!
            </p>
          </div>
        </div>
      </div>

      <Line />

      <div className={useThemeClass(styles.contact, styles.darkContact)}>
        <p className={styles.title}>Get in Touch</p>
        <p className={styles.discord}>
          Join our <a href={LinksConfig.discord}>Discord community</a> - Share
          ideas, give feedback, and discuss productivity with like-minded
          people!
        </p>

        <p className={styles.email}>
          Contact us via email: <br />{' '}
          <a href={LinksConfig.email}>info@stayfocused.one</a> - For
          collaborations, partnerships, and general inquiries.
        </p>
      </div>
    </div>
  )
}
