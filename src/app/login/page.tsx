import { Metadata } from 'next'
import AuthLayout from '@/components/ui/AuthLayout/AuthLayout'

export const metadata: Metadata = {
  title: 'Log in - Stay Focused',
}

export default function LogIn() {
  return (
    <>
      <AuthLayout
        title='Get Started Now'
        description='Enter your login details to access your account'
      >
        ...
      </AuthLayout>
    </>
  )
}
