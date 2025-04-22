'use client'

import styles from './style.module.scss'
import useTheme from '@/hooks/useTheme'
import useThemeClass from '@/hooks/useThemeClass'
import ShowPassword from '../components/ShowPassword/ShowPassword'
import OrLine from '../components/OrLine/OrLine'
import AuthProviderButton from '../components/AuthProviderButton/AuthProviderButton'
import {
  getErrorMessage,
  sanitizeInput,
  transition,
  errorBorderColor,
  getBorderColor,
  ISignUpFormData,
} from '../utils'
import { fadeInOutVariants } from '@/config/animations.config'
import { PagesConfig } from '@/config/pages.config'
import { TransitionLink } from '@/components/utils/TransitionLink'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ISignUpFormData>({ mode: 'onChange' })

  const [showPassword, setShowPassword] = useState(false)
  const [isAgreed, setIsAgreed] = useState(false)
  const [showError, setShowError] = useState(false)

  const onSubmit: SubmitHandler<ISignUpFormData> = (data) => {
    if (!isAgreed) {
      setShowError(true)
      return
    }

    console.log(data)
  }

  return (
    <div className={styles.content}>
      <div className={styles.buttons}>
        <AuthProviderButton icon='Google' text='Sign up with Google' />
        <AuthProviderButton icon='GitHub' text='Sign up with GitHub' />
      </div>

      <OrLine />

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <p className={styles.title}>Name</p>
            <motion.input
              {...register('name', {
                required: 'Required',
                pattern: {
                  value: /^[a-zA-Z\s.'-]+$/,
                  message: 'Invalid',
                },
                minLength: {
                  value: 2,
                  message: 'Min length 2',
                },
                maxLength: {
                  value: 15,
                  message: 'Max length 15',
                },
                validate: (value) => {
                  if (/^[\s.'-]*$/.test(value)) {
                    return 'Invalid'
                  }
                  return true
                },
              })}
              type='text'
              placeholder='Enter your name'
              autoComplete='name'
              onInput={sanitizeInput(/[^a-zA-Z\s.'-]/g)}
              animate={{
                borderColor: getBorderColor('name', watch, errors),
              }}
              transition={{
                duration: transition,
                ease: 'easeInOut',
              }}
            />
            <AnimatePresence mode='wait'>
              {errors?.name && (
                <motion.div
                  variants={fadeInOutVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  className={styles.error}
                >
                  <img src='/images/icons/error.svg' alt='Error' />
                  <p>{getErrorMessage(errors.name)}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={styles.input}>
            <p className={styles.title}>Email address</p>
            <motion.input
              {...register('email', {
                required: 'Required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,
                  message: 'Invalid',
                },
              })}
              type='text'
              placeholder='Enter your email'
              autoComplete='email'
              onInput={sanitizeInput(/[^a-zA-Z0-9@._\-+]/g)}
              animate={{
                borderColor: getBorderColor('email', watch, errors),
              }}
              transition={{
                duration: transition,
                ease: 'easeInOut',
              }}
            />
            <AnimatePresence mode='wait'>
              {errors?.email && (
                <motion.div
                  variants={fadeInOutVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  className={styles.error}
                >
                  <img src='/images/icons/error.svg' alt='Error' />
                  <p>{getErrorMessage(errors.email)}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={styles.passwordContainer}>
            <div className={styles.input}>
              <p className={styles.title}>Password</p>
              <motion.input
                {...register('password', {
                  required: 'Required',
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@._\-+!#$%^&*]).{8,}$/,
                    message: 'Must include upper, lower, number, symbol',
                  },
                  minLength: {
                    value: 8,
                    message: 'Min length 8',
                  },
                  maxLength: {
                    value: 16,
                    message: 'Max length 16',
                  },
                })}
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                autoComplete='new-password'
                onInput={sanitizeInput(/[^\x00-\x7F]/)}
                animate={{
                  borderColor: getBorderColor('password', watch, errors),
                }}
                transition={{
                  duration: transition,
                  ease: 'easeInOut',
                }}
              />
              <AnimatePresence mode='wait'>
                {errors?.password && (
                  <motion.div
                    variants={fadeInOutVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className={styles.error}
                  >
                    <img src='/images/icons/error.svg' alt='Error' />
                    <p>{getErrorMessage(errors.password)}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <ShowPassword
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>

            <div className={styles.input}>
              <motion.input
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === watch('password') || 'Passwords do not match',
                })}
                type='password'
                placeholder='Repeat your password'
                autoComplete='new-password'
                onInput={sanitizeInput(/[^\x00-\x7F]/)}
                animate={{
                  borderColor: getBorderColor('confirmPassword', watch, errors),
                }}
                transition={{
                  duration: transition,
                  ease: 'easeInOut',
                }}
              />
              <AnimatePresence mode='wait'>
                {errors?.confirmPassword && (
                  <motion.div
                    variants={fadeInOutVariants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className={styles.error}
                  >
                    <img src='/images/icons/error.svg' alt='Error' />
                    <p>{getErrorMessage(errors.confirmPassword)}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className={styles.privacyAgree}>
          <div className={styles.label}>
            <label>
              <input
                name='privacy'
                autoComplete='off'
                type='checkbox'
                checked={isAgreed}
                onChange={(e) => {
                  setIsAgreed(e.target.checked)
                  if (e.target.checked) {
                    setShowError(false)
                  }
                }}
              />
              <svg viewBox='0 0 64 64' height='1.1em' width='1.1em'>
                <path
                  d='M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16'
                  pathLength='575.0541381835938'
                  stroke={
                    showError
                      ? errorBorderColor
                      : useTheme('#1e1e1f', '#ffffff')
                  }
                />
              </svg>
            </label>
            <AnimatePresence mode='wait'>
              {showError && (
                <motion.img
                  variants={fadeInOutVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  src='/images/icons/error.svg'
                  alt='Error'
                />
              )}
            </AnimatePresence>
          </div>

          <p className={useThemeClass(styles.privacy, styles.darkPrivacy)}>
            I agree to the{' '}
            <TransitionLink href={PagesConfig.privacy}>
              Privacy Policy
            </TransitionLink>
          </p>
        </div>

        <button className={styles.submit} type='submit'>
          Sign Up
        </button>

        <p className={styles.loginLink}>
          Already have an account?{' '}
          <TransitionLink href={PagesConfig.login}>Log in</TransitionLink>
        </p>
      </form>
    </div>
  )
}
