'use client'

import styles from './style.module.scss'
import AuthProviderButton from '../components/AuthProviderButton/AuthProviderButton'
import ShowPassword from '../components/ShowPassword/ShowPassword'
import OrLine from '../components/OrLine/OrLine'
import {
  getBorderColor,
  getErrorMessage,
  ILoginFormData,
  sanitizeInput,
  transition,
} from '../utils'
import { TransitionLink } from '@/components/utils/TransitionLink'
import { PagesConfig } from '@/config/pages.config'
import { fadeInOutVariants } from '@/config/animations.config'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILoginFormData>({ mode: 'onChange' })

  const [showPassword, setShowPassword] = useState(false)

  const onSubmit: SubmitHandler<ILoginFormData> = (data) => {
    console.log(data)
  }

  return (
    <div className={styles.content}>
      <div className={styles.buttons}>
        <AuthProviderButton icon='Google' text='Log in with Google' />
        <AuthProviderButton icon='GitHub' text='Log in with GitHub' />
      </div>

      <OrLine />

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputs}>
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

          <div className={styles.input}>
            <div className={styles.titleContainer}>
              <p className={styles.title}>Password</p>

              <button type='button' className={styles.forgotButton}>
                Forgot password?
              </button>
            </div>

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
        </div>

        <button className={styles.submit} type='submit'>
          Login
        </button>

        <p className={styles.SignUpLink}>
          Don't have an account?{' '}
          <TransitionLink href={PagesConfig.signup}>Sign up</TransitionLink>
        </p>
      </form>
    </div>
  )
}
