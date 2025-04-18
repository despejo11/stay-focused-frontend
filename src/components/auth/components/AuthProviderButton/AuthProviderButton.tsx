'use client'

import styles from './style.module.scss'
import useTheme from '@/hooks/useTheme'
import useThemeClass from '@/hooks/useThemeClass'

interface IAuthProviderButtonProps {
  icon: string
  text: string
}

export default function AuthProviderButton({
  icon,
  text,
}: IAuthProviderButtonProps) {
  const githubIcon = useTheme<string>(
    '/images/icons/blackGitHub.svg',
    '/images/icons/whiteGitHub.svg'
  )

  return (
    <button className={useThemeClass(styles.button, styles.darkButton)}>
      <img
        src={icon === 'Google' ? '/images/icons/google.svg' : githubIcon}
        alt={icon}
      />
      <p>{text}</p>
    </button>
  )
}
