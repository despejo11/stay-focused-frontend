import styles from './style.module.scss'
import useThemeClass from '@/hooks/useThemeClass'
import { shakeVariants } from '../../variants'
import { blue, lightBlue, transition, PHASE, PHASE_DATA } from '../../utils'
import { fadeInOutVariants } from '@/config/animations.config'
import { useEffect, useRef, useState, useMemo } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion'
import clsx from 'clsx'

interface ITimerProps {
  focusTime: number
  relaxTime: number
  sets: number
}

export default function Timer({ focusTime, relaxTime, sets }: ITimerProps) {
  const startTimeRef = useRef<number>(Date.now())
  const alarmSoundRef = useRef<HTMLAudioElement | null>(null)
  const pauseTimeRef = useRef<number | null>(null)

  const [currentSet, setCurrentSet] = useState(1)
  const [phase, setPhase] = useState<(typeof PHASE)[keyof typeof PHASE]>(
    PHASE.FOCUS
  )
  const [timeLeft, setTimeLeft] = useState(focusTime)
  const [hasStarted, setHasStarted] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isAlarmActive, setIsAlarmActive] = useState(false)
  const [isFinalAlarm, setIsFinalAlarm] = useState(false)
  const [isEndingSoon, setIsEndingSoon] = useState(false)

  const isFocusPhase = phase === PHASE.FOCUS

  const radius = 90
  const stroke = 10
  const normalizedRadius = radius - stroke / 2
  const circumference = 2 * Math.PI * normalizedRadius
  const arcLength = circumference / 3
  const progress = useMotionValue(1)

  const animatedRotation = useTransform(progress, (p) => -120 + 360 * (1 - p))
  const smoothRotation = useSpring(animatedRotation, {
    damping: 20,
    stiffness: 100,
  })

  const isLastSetFinished = useMemo(
    () => currentSet === sets && timeLeft === 0,
    [currentSet, sets, timeLeft]
  )

  const switchPhase = (
    nextPhase: (typeof PHASE)[keyof typeof PHASE],
    duration: number,
    isFinal = false
  ) => {
    setIsAlarmActive(true)
    alarmSoundRef.current?.play()
    setTimeLeft(duration)
    setPhase(nextPhase)

    navigator.vibrate?.(
      isFinal
        ? [500, 300, 500, 300, 1000]
        : nextPhase === PHASE.FOCUS
        ? [500, 300, 500]
        : [300, 300, 300]
    )

    if (!isFinal) {
      progress.set(1)
      setTimeout(
        () => {
          setIsAlarmActive(false)
          if (alarmSoundRef.current) {
            alarmSoundRef.current.pause()
            alarmSoundRef.current.currentTime = 0
          }
          startTimeRef.current = Date.now()
        },
        nextPhase === PHASE.FOCUS ? 2000 : 4000
      )
    }
  }

  useEffect(() => {
    if (!hasStarted || isPaused || isAlarmActive) return

    const duration = isFocusPhase ? focusTime : relaxTime

    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const remaining = Math.max(duration - elapsed, 0)
      setTimeLeft(Math.ceil(remaining))
      setIsEndingSoon(Math.ceil(remaining) === 1)

      if (remaining <= 0) {
        clearInterval(interval)
        cancelAnimationFrame(frame)

        if (isFocusPhase) {
          if (currentSet === sets) {
            switchPhase(PHASE.RELAX, 0, true)
            setIsFinalAlarm(true)
            return
          }
          switchPhase(PHASE.RELAX, relaxTime)
        } else {
          setCurrentSet((prev) => prev + 1)
          switchPhase(PHASE.FOCUS, focusTime)
        }
      }
    }, 500)

    let frame: number
    const animateProgress = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000
      const remaining = Math.max(duration - elapsed, 0)
      progress.set(remaining / duration)
      frame = requestAnimationFrame(animateProgress)
    }
    frame = requestAnimationFrame(animateProgress)

    return () => {
      clearInterval(interval)
      cancelAnimationFrame(frame)
    }
  }, [hasStarted, isPaused, isFocusPhase, currentSet, isAlarmActive])

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, '0')

  const seconds = Math.floor(timeLeft % 60)
    .toString()
    .padStart(2, '0')

  return (
    <div className={styles.wrapper}>
      <audio
        ref={alarmSoundRef}
        src='/sounds/alarmSound.mp3'
        preload='auto'
        loop
      />

      <AnimatePresence mode='wait'>
        {isAlarmActive && (
          <motion.div
            variants={fadeInOutVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className={styles.alarm}
          >
            <div className={styles.firstLines}>
              <motion.span variants={shakeVariants} animate='shaking' />
              <motion.span variants={shakeVariants} animate='shaking' />
            </div>
            <div className={styles.secondLines}>
              <motion.span variants={shakeVariants} animate='shaking' />
              <motion.span variants={shakeVariants} animate='shaking' />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <svg viewBox='0 0 200 200' className={styles.circle}>
        <defs>
          <linearGradient id='tailGradient' x1='0' y1='0' x2='1' y2='0'>
            <stop offset='0%' stopColor={lightBlue} stopOpacity='1' />
            <stop offset='100%' stopColor={blue} stopOpacity='0' />
          </linearGradient>
        </defs>

        <circle
          className={styles.background}
          cx='100'
          cy='100'
          r={normalizedRadius}
          strokeWidth={stroke}
        />

        <AnimatePresence mode='wait'>
          {timeLeft > 0 && (
            <motion.circle
              key='progressTail'
              className={styles.progressTail}
              cx='100'
              cy='100'
              r={normalizedRadius}
              strokeWidth={stroke}
              stroke='url(#tailGradient)'
              strokeLinecap='round'
              fill='none'
              strokeDasharray={`${arcLength} ${circumference - arcLength}`}
              style={{ rotate: smoothRotation }}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: transition }}
            />
          )}
        </AnimatePresence>
      </svg>

      <AnimatePresence mode='wait'>
        {!isLastSetFinished && (
          <motion.img
            key={phase}
            variants={fadeInOutVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className={styles.phaseIcon}
            src={PHASE_DATA[phase].icon}
            alt={PHASE_DATA[phase].label}
          />
        )}
      </AnimatePresence>

      <div className={styles.time}>
        {minutes}:{seconds}
      </div>

      <div className={styles.setsIndicator}>
        {Array.from({ length: sets }).map((_, index) => {
          const completed =
            index < currentSet - (isFocusPhase ? 1 : 0) ||
            (index === sets - 1 && isLastSetFinished)
          const active =
            index === currentSet - 1 && isFocusPhase && timeLeft > 0
          return (
            <div
              key={index}
              className={clsx(useThemeClass(styles.set, styles.darkSet), {
                [styles.completed]: completed,
                [styles.active]: active,
              })}
            />
          )
        })}
      </div>

      <AnimatePresence mode='wait'>
        {!isLastSetFinished && (
          <motion.p
            key={`${phase}-text`}
            variants={fadeInOutVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            className={styles.phaseText}
          >
            {PHASE_DATA[phase].label}
          </motion.p>
        )}
      </AnimatePresence>

      <div className={styles.controls}>
        <AnimatePresence mode='wait'>
          {!isAlarmActive && !hasStarted && !isFinalAlarm && (
            <motion.button
              key='start'
              className={styles.defaultButton}
              variants={fadeInOutVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              onClick={() => {
                setHasStarted(true)
                setIsPaused(false)
                startTimeRef.current = Date.now()
              }}
            >
              Start
            </motion.button>
          )}

          {hasStarted && !isPaused && !isAlarmActive && !isFinalAlarm && (
            <motion.button
              key='pause'
              className={styles.defaultButton}
              variants={fadeInOutVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              onClick={() => {
                setIsPaused(true)
                pauseTimeRef.current = Date.now()
              }}
              disabled={isEndingSoon}
            >
              Pause
            </motion.button>
          )}

          {isPaused && !isAlarmActive && !isFinalAlarm && (
            <>
              <motion.button
                key='reset'
                className={styles.roundButton}
                variants={fadeInOutVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                onClick={() => {
                  setHasStarted(false)
                  setIsPaused(false)
                  setPhase(PHASE.FOCUS)
                  setCurrentSet(1)
                  setTimeLeft(focusTime)
                  startTimeRef.current = Date.now()
                  progress.set(1)
                }}
              >
                <img src='/images/icons/reset.svg' alt='Reset' />
              </motion.button>

              <motion.button
                key='continue'
                className={styles.roundButton}
                variants={fadeInOutVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                onClick={() => {
                  if (pauseTimeRef.current) {
                    const pausedDuration = Date.now() - pauseTimeRef.current
                    startTimeRef.current += pausedDuration
                  }
                  setIsPaused(false)
                }}
              >
                <img src='/images/icons/continue.svg' alt='Continue' />
              </motion.button>
            </>
          )}

          {isFinalAlarm && (
            <motion.button
              key='stop'
              className={styles.defaultButton}
              variants={fadeInOutVariants}
              initial='initial'
              animate='animate'
              exit='exit'
              onClick={() => {
                setIsFinalAlarm(false)
                setIsAlarmActive(false)
                if (alarmSoundRef.current) {
                  alarmSoundRef.current.pause()
                  alarmSoundRef.current.currentTime = 0
                }
                setHasStarted(false)
                setIsPaused(false)
                setPhase(PHASE.FOCUS)
                setCurrentSet(1)
                setTimeLeft(focusTime)
                startTimeRef.current = Date.now()
                progress.set(1)
              }}
            >
              Stop
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
