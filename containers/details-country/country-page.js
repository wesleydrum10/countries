/* eslint-disable react/jsx-key */
import { ArrowBack } from '@mui/icons-material'
import { Box, Button, Grid, styled, Typography, useTheme } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useListCountries } from '../../context/useListCountries'
import { format } from '../../utils/formatPopulation'

const Image = styled('img')(() => ({
  backgroundSize: 'fit',
}))

const BoxDescription = styled(Box)(() => ({
  display: 'flex',
  gap: 4,
  marginTop: 2,
  '@media(max-width: 600px)': {
    marginTop: 3,
  },
}))

export default function DetailsCountryPage({ name }) {
  const { country, findingCode } = useListCountries()
  const router = useRouter()
  const [isCode, setIsCode] = useState(false)
  const theme = useTheme()

  const handleRedirect = (code) => {
    setTimeout(() => {
      router.push(`/details-country/${code}`)
    }, 1500)
  }

  const handleCalled = (code) => {
    findingCode(code)
    setIsCode(true)
    handleRedirect(code)
  }

  useEffect(() => {
    findingCode(name)
  }, [])

  useEffect(() => {}, [isCode])

  return (
    <Grid sx={{ width: '100%', marginTop: 5 }}>
      <Button
        variant="outlined"
        color="inherit"
        startIcon={<ArrowBack />}
        onClick={() => router.back()}
        sx={{
          textTransform: 'capitalize',
          border: 'transparent',
          background: theme.palette.primary.main,
          boxShadow: '1px 1px 10px 2px rgba(0,0,0,0.14)',
        }}
      >
        Back
      </Button>
      <Grid container spacing={4} mt={2}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Image
            src={country?.flags?.png}
            alt={country?.name?.common}
            width="100%"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Grid
            container
            sx={{
              flexDirection: 'row',
              padding: '2rem 0rem 2rem 2rem',
              '@media(max-width: 600px)': { padding: 0 },
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h5" fontWeight={500}>
                {country?.name?.common}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ flexDirection: 'column' }}
            >
              <BoxDescription>
                <Typography variant="body1" fontWeight={500}>
                  Native Name:{' '}
                </Typography>
                <Typography variant="body1" color="GrayText">
                  {country?.name?.nativeName &&
                    Object.keys(country?.name?.nativeName).join(', ')}
                </Typography>
              </BoxDescription>
              <BoxDescription>
                <Typography variant="body1" fontWeight={500}>
                  Population:{' '}
                </Typography>
                <Typography variant="body1" color="GrayText">
                  {format(country?.population)}
                </Typography>
              </BoxDescription>
              <BoxDescription>
                <Typography variant="body1" fontWeight={500}>
                  Region:{' '}
                </Typography>
                <Typography variant="body1" color="GrayText">
                  {country?.region}
                </Typography>
              </BoxDescription>
              <BoxDescription>
                <Typography variant="body1" fontWeight={500}>
                  SubRegion:{' '}
                </Typography>
                <Typography variant="body1" color="GrayText">
                  {country?.subregion}
                </Typography>
              </BoxDescription>
              <BoxDescription>
                <Typography variant="body1" fontWeight={500}>
                  Capital:{' '}
                </Typography>
                <Typography variant="body1" color="GrayText">
                  {country?.capital}
                </Typography>
              </BoxDescription>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ flexDirection: 'column' }}
            >
              <BoxDescription>
                <Typography variant="body1" fontWeight={500}>
                  Top Level Domain:{' '}
                </Typography>
                <Typography variant="body1" color="GrayText">
                  {country?.demonyms &&
                    Object.keys(country?.demonyms).join(', ')}
                </Typography>
              </BoxDescription>
              <BoxDescription>
                <Typography variant="body1" fontWeight={500}>
                  Currencies:{' '}
                </Typography>
                <Typography variant="body1" color="GrayText">
                  {country?.currencies &&
                    Object.keys(country?.currencies).join(', ')}
                </Typography>
              </BoxDescription>
              <BoxDescription>
                <Typography variant="body1" fontWeight={500}>
                  Languages:{' '}
                </Typography>
                <Typography variant="body1" color="GrayText">
                  {country?.languages &&
                    Object.values(country?.languages).join(', ')}
                </Typography>
              </BoxDescription>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              mt={2}
              sx={{ display: 'inline-flex', '@media(max-width: 600px)': {flexDirection: 'column'} }}
            >
              <Grid item xs={12} sm={12} md={3} lg={3} mt={2}>
                <Typography variant="body1" fontWeight={500}>
                  Border Countries:
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={9} lg={9} mt={2}>
                {country?.borders &&
                  country?.borders?.map((item) => (
                    <Button
                      variant="outlined"
                      color="inherit"
                      onClick={() => handleCalled(item)}
                      sx={{
                        textTransform: 'capitalize',
                        border: 'transparent',
                        background: theme.palette.primary.main,
                        boxShadow: '1px 1px 10px 2px rgba(0,0,0,0.14)',
                        padding: '0px 16px',
                        margin: .5
                      }}
                    >
                      {item}
                    </Button>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
