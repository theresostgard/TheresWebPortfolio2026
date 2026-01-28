import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  return (
    <button
      aria-label="Toggle theme"
      className="theme-toggle"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
    >
      {/* Visa ikonen för temat som kommer efter klick */}
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
