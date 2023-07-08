import { useRef } from 'react'

export default function useDebounce(func, delay) {
  const timeoutRef = useRef(null)

  function debounceFn(...params) {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      func(...params)
    }, delay)
  }

  return debounceFn
}
