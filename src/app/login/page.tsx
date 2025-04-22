import { Metadata } from 'next'
import AuthLayout from '@/components/ui/AuthLayout/AuthLayout'
import LoginForm from '@/components/auth/LoginForm/LoginForm'

export const metadata: Metadata = {
  title: 'Log in - Stay Focused',
}

export default function Login() {
  return (
    <>
      <AuthLayout
        title='Get Started Now'
        description='Enter your login details to access your account'
      >
        <LoginForm />
      </AuthLayout>
    </>
  )
}
