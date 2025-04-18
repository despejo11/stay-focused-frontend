import styles from './style.module.scss'
import useTheme from '@/hooks/useTheme'

interface IShowPasswordProps {
  showPassword: boolean
  setShowPassword: (value: boolean) => void
}

export default function ShowPassword({
  showPassword,
  setShowPassword,
}: IShowPasswordProps) {
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const openEyeIcon = useTheme<string>(
    '/images/icons/blackEye.svg',
    '/images/icons/whiteEye.svg'
  )
  const closedEyeIcon = useTheme<string>(
    '/images/icons/blackCloseEye.svg',
    '/images/icons/whiteCloseEye.svg'
  )

  return (
    <button
      className={styles.button}
      type='button'
      onClick={togglePasswordVisibility}
    >
      <img
        src={showPassword ? openEyeIcon : closedEyeIcon}
        alt={showPassword ? 'Show' : 'Hide'}
      />
    </button>
  )
}
