import { FieldValues, Path, UseFormReturn } from 'react-hook-form'

export const getErrorMessage = (error: any) =>
  typeof error?.message === 'string' ? error.message : 'Invalid input'

export const sanitizeInput =
  (pattern: RegExp) => (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget
    target.value = target.value.replace(pattern, '')
  }

export const transition = 0.15
export const errorBorderColor = '#f35e5e'
const successBorderColor = '#59db5e'

export const getBorderColor = <T extends FieldValues>(
  name: Path<T>,
  watch: UseFormReturn<T>['watch'],
  errors: UseFormReturn<T>['formState']['errors']
) => {
  const value = watch(name)
  const error = errors?.[name]

  if (error) return errorBorderColor
  if (value?.length > 0) return successBorderColor
  return undefined
}

export interface ISignUpFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface ILoginFormData {
  email: string
  password: string
}
