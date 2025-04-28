import styles from './style.module.scss'
import useThemeClass from '@/hooks/useThemeClass'
import useTheme from '@/hooks/useTheme'
import useIsDesktop from '@/hooks/useIsDesktop'
import { fadeInOutVariants } from '@/config/animations.config'
import { IForgotPasswordFormData } from '../../utils'
import {
  sanitizeInput,
  getBorderColor,
  getErrorMessage,
  transition,
} from '../../utils'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
} from 'react-hook-form'

interface IForgotPasswordProps {
  step: 1 | 2 | 3 | 4
  register: UseFormRegister<IForgotPasswordFormData>
  handleSubmit: UseFormHandleSubmit<IForgotPasswordFormData>
  watch: UseFormWatch<IForgotPasswordFormData>
  errors: FieldErrors<IForgotPasswordFormData>
  onSubmit: SubmitHandler<IForgotPasswordFormData>
}

export default function ForgotPasswordForm({
  step,
  register,
  handleSubmit,
  watch,
  errors,
  onSubmit,
}: IForgotPasswordProps) {
  const isDesktop = useIsDesktop(1000)
  const [isHovered, setIsHovered] = useState(false)

  const arrowSrc = useTheme<string>(
    '/images/other/blackNextArrow.svg',
    '/images/other/whiteNextArrow.svg'
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.content}>
      {step === 1 && (
        <>
          <p className={styles.title}>
            Enter your email, we'll send you a confirmation code
          </p>

          <div className={styles.input}>
            <motion.input
              {...register('forgotPasswordEmail', {
                required: 'Required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,
                  message: 'Invalid',
                },
              })}
              type='text'
              placeholder='Enter your email'
              autoComplete='email'
              onInput={sanitizeInput(/[^a-zA-Z0-9@._\-+]/g)}
              animate={{
                borderColor: getBorderColor(
                  'forgotPasswordEmail',
                  watch,
                  errors
                ),
              }}
              transition={{
                duration: transition,
                ease: 'easeInOut',
              }}
            />
            <AnimatePresence mode='wait'>
              {errors?.forgotPasswordEmail && (
                <motion.div
                  variants={fadeInOutVariants}
                  initial='initial'
                  animate='animate'
                  exit='exit'
                  className={styles.error}
                >
                  <img src='/images/icons/error.svg' alt='Error' />
                  <p>{getErrorMessage(errors.forgotPasswordEmail)}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            type='submit'
            className={useThemeClass(styles.nextButton, styles.darkNextButton)}
            onHoverStart={() => isDesktop && setIsHovered(true)}
            onHoverEnd={() => isDesktop && setIsHovered(false)}
          >
            Next
            <motion.img
              src={arrowSrc}
              alt='Arrow'
              initial={{ x: 0 }}
              animate={{ x: isDesktop && isHovered ? 5 : 0 }}
            />
          </motion.button>
        </>
      )}

      {step === 2 && <p>Step 2</p>}

      {step === 3 && <p>Step 3</p>}

      {step === 4 && <p>Step 4</p>}
    </form>
  )
}
