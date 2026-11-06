import { useCallback, useState } from 'react'

const KEY = 'medcore-theme'

// The inline script in index.html has already set data-theme before React starts.
function readTheme() {
  const attr = document.documentElement.getAttribute('data-theme')
  return attr === 'dark' ? 'dark' : 'light'
}

export default function useTheme() {
  const [theme, setTheme] = useState(readTheme)

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem(KEY, next) // only saved when the visitor chooses
      } catch {
        /* storage blocked: the theme still changes for this visit */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}