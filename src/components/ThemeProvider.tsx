'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  // Khai báo các props cũ từ layout.tsx để không phải sửa file layout
  attribute,
  enableSystem
}: {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme as Theme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
    const storedTheme = localStorage.getItem('theme') as Theme | null
    const activeTheme = storedTheme || (defaultTheme as Theme)

    setThemeState(activeTheme)

    // Áp dụng class lên thẻ <html> thay vì dùng <script>
    if (activeTheme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [defaultTheme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('theme', newTheme)

    if (newTheme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme: mounted ? theme : (defaultTheme as Theme), setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook để thay thế useTheme của next-themes
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
