import { useState, useEffect } from 'react'

const useDebounce = (value, delay) => {
  const [debounced, setDebounce] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => setDebounce(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  
  return debounced
}

export default useDebounce