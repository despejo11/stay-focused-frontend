'use client'

import { useState, useEffect } from 'react'

export default function useLocalStorage<T>(
  key: string,
  defData: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(defData)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const localData = localStorage.getItem(key)

    if (localData) {
      setState(JSON.parse(localData) as T)
    }
    setInitialized(true)
  }, [key])

  useEffect(() => {
    if (initialized) {
      localStorage.setItem(key, JSON.stringify(state))
    }
  }, [key, state, initialized])

  return [state, setState]
}
