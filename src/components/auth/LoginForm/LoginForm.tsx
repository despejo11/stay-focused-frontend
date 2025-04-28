'use client'

import styles from './style.module.scss'
import ForgotPasswordForm from './ForgotPasswordForm/ForgotPasswordForm'
import AuthProviderButton from '../components/AuthProviderButton/AuthProviderButton'
import ShowPassword from '../components/ShowPassword/ShowPassword'
import OrLine from '../components/OrLine/OrLine'
import Popup from '@/components/Popup/Popup'
import {
  getBorderColor,
  getErrorMessage,
  ILoginFormData,
  IForgotPasswordFormData,
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
    register: registerLogin,
    handleSubmit: handleLoginSubmit,
    watch: watchLogin,
    formState: { errors: loginErrors },
  } = useForm<ILoginFormData>({ mode: 'onChange' })

  const {
    register: registerForgotPassword,
    handleSubmit: handleForgotPasswordSubmit,
    watch: watchForgotPassword,
    formState: { errors: forgotPasswordErrors },
  } = useForm<IForgotPasswordFormData>({ mode: 'onChange' })

  const [showPassword, setShowPassword] = useState(false)
  const [openPopup, setOpenPopup] = useState(false)
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)

  const handleOpenPopup = () => {
    setOpenPopup(true)
  }

  const onPopupSubmit: SubmitHandler<IForgotPasswordFormData> = async (
    data
  ) => {
    if (step === 1) {
      console.log('Step 1:', data)
    }
  }

  const onLoginSubmit: SubmitHandler<ILoginFormData> = (data) => {
    console.log('Login form data:', data)
  }

  return (
    <div className={styles.content}>
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <ForgotPasswordForm
          step={step}
          register={registerForgotPassword}
          handleSubmit={handleForgotPasswordSubmit}
          watch={watchForgotPassword}
          errors={forgotPasswordErrors}
          onSubmit={onPopupSubmit}
        />
      </Popup>

      <div className={styles.buttons}>
        <AuthProviderButton icon='Google' text='Log in with Google' />
        <AuthProviderButton icon='GitHub' text='Log in with GitHub' />
      </div>

      <OrLine />

      <form onSubmit={handleLoginSubmit(onLoginSubmit)} className={styles.form}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <p className={styles.title}>Email address</p>
            <motion.input
              {...registerLogin('email', {
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
                borderColor: getBorderColor('email', watchLogin, loginErrors),
              }}
              transition={{
                duration: transition,
                ease: 'easeInOut',
              }}
            />
            <AnimatePresence mode='wait'>
              {loginErrors?.email && (
                <motion.div
                  variants={fadeInOutVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  className={styles.error}
                >
                  <img src='/images/icons/error.svg' alt='Error' />
                  <p>{getErrorMessage(loginErrors.email)}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className={styles.input}>
            <div className={styles.titleContainer}>
              <p className={styles.title}>Password</p>

              <button
                onClick={handleOpenPopup}
                type='button'
                className={styles.forgotButton}
              >
                Forgot password?
              </button>
            </div>

            <motion.input
              {...registerLogin('password', {
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
                borderColor: getBorderColor(
                  'password',
                  watchLogin,
                  loginErrors
                ),
              }}
              transition={{
                duration: transition,
                ease: 'easeInOut',
              }}
            />
            <AnimatePresence mode='wait'>
              {loginErrors?.password && (
                <motion.div
                  variants={fadeInOutVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  className={styles.error}
                >
                  <img src='/images/icons/error.svg' alt='Error' />
                  <p>{getErrorMessage(loginErrors.password)}</p>
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
