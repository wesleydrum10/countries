import { DarkMode, DarkModeOutlined } from '@mui/icons-material'
import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { HeaderContent } from '../../styles/home-style'
import { ThemeContext } from '../../context/useTheme'

export default function HeaderComponent() {
  const router = useRouter()
  const {toggleTheme, darkMode} = useContext(ThemeContext)

  return (
    <HeaderContent>
      <Typography variant='h6' fontWeight={700} onClick={() => router.push('/')} sx={{ cursor: 'pointer' }}>
        Where in the world?
      </Typography>
      <Button
        variant="text"
        color="inherit"
        sx={{ textTransform: 'capitalize' }}
        startIcon={darkMode ? <DarkMode /> :<DarkModeOutlined />}
        onClick={() => toggleTheme()}
      >
        Dark Mode
      </Button>
    </HeaderContent>
  )
}
