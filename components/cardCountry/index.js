import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import { format } from '../../utils/formatPopulation'

export default function CardCountry({country}) {
  const theme = useTheme()
  const router = useRouter()

  return (
    <Card sx={{ width: '100%', borderRadius: '.4rem', cursor: 'pointer', background: theme.palette.primary.main, border: '1px solid transparent' , ':hover': {border: `1px solid ${theme.palette.primary.contrastText}` } }} onClick={() => router.push(`/details-country/${country.cca3}`)}>
      <CardMedia
        sx={{ height: 180}}
        image={country.flags.png}
        title={country.name.common}
      />
      <CardContent sx={{ padding: '1rem 2rem' }}>
        <Typography gutterBottom variant="subtitle1" fontWeight={600}>
          {country.name.common}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '.5rem',
            margin: '1rem 0rem',
          }}
        >
          <Box sx={{ display: 'flex', gap: '.2rem' }}>
            <Typography variant="body2">Population:</Typography>
            <Typography variant="body2" color="text.secondary">
              {format(country.population)}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '.2rem' }}>
            <Typography variant="body2">Region:</Typography>
            <Typography variant="body2" color="text.secondary">
              {country.region}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '.2rem' }}>
            <Typography variant="body2">Capital:</Typography>
            <Typography variant="body2" color="text.secondary">
              {country.capital}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
