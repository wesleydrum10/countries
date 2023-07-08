import React from 'react'
import { IconButton, InputBase, Paper, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function Search({ handleText }) {
  
  const theme = useTheme()

  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.primary.main,
        width: 450,
        '@media(max-width: 600px)': { width: 'auto' },
      }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for a country"
        inputProps={{ 'aria-label': 'search for a country' }}
        onChange={(e) => handleText(e.target.value)}
      />
    </Paper>
  )
}
