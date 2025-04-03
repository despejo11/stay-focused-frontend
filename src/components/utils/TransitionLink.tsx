'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode
  href: string
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  onClick,
  ...props
}) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === href) {
      if (onClick) onClick()
      return
    }

    e.preventDefault()

    if (onClick) onClick()

    const body = document.querySelector('body')
    body?.classList.add('pageTransition')

    await sleep(333)
    router.push(href)
    await sleep(333)

    body?.classList.remove('pageTransition')
  }

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  )
}
