// ThemeContext.js
import React, { createContext, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import darkTheme from '../providers/themeDark'
import lightTheme from '../providers/themeLight'

export const ThemeContext = createContext()

export default function ThemeProviderComponent({ children }) {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const theme = darkMode ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
