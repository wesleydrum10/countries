/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { FormControl, InputLabel, MenuItem, Paper, Select, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useListCountries } from '../../context/useListCountries'

export default function SelectComponent() {
  const theme = useTheme()
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  const [region, setRegion] = useState('')
  const { findingRegion } = useListCountries()
  
  useEffect(() => {
    if (region) findingRegion(region)
  }, [region])

  return (
    <Paper
      component="form"
      sx={{
        p: '0px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 170,
        height: 48,
        background: theme.palette.primary.main
      }}
    >
      <FormControl fullWidth sx={{height: 40}}>
        <InputLabel id="demo-simple-select-label">Filter by Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="Filter by Region"
          placeholder='Filter by Region'
          onChange={(e) => setRegion(e.target.value)}
          sx={{outline: 'none', color: theme.palette.primary.contrastText, height: 42,}}
        >
          {regions.map((region) => (
            <MenuItem value={region} sx={{ background: theme.palette.primary.main}}>{region}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  )
}
