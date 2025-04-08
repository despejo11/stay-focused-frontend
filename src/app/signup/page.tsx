import { Metadata } from 'next'
import AuthLayout from '@/components/ui/AuthLayout/AuthLayout'

export const metadata: Metadata = {
  title: 'Sign up - Stay Focused',
}

export default function SignUp() {
  return (
    <>
      <AuthLayout
        title='Take the first step'
        description='Fill in the fields below to complete sign up'
      >
        ...
      </AuthLayout>
    </>
  )
}
