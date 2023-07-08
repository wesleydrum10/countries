/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import CardCountry from '../components/cardCountry'
import HeadComponent from '../components/head'
import HeaderComponent from '../components/header'
import MainComponent from '../components/main'
import Search from '../components/search'
import SelectComponent from '../components/Select'
import { useListCountries } from '../context/useListCountries'
import { Container } from '../styles/home-style'
import useDebounce from '../utils/useDebounce'

export default function Home() {
  const { countries, listing, finding } = useListCountries()
  const [text, setText] = useState('')

  const textSearch = useDebounce(value => {
    finding(value)
  }, 800)

  const handleChange = (value) => {
    setText(value)
    textSearch(value)
  }

  useEffect(() => {
    listing()
  }, [text])

  useEffect(() => {
    if (text) finding(text)
  }, [text])

  console.log('text', text)
  return (
    <Container>
      <HeadComponent />
      <HeaderComponent />
      <MainComponent>
        <Grid
          container
          sx={{
            justifyContent: 'space-between',
            '@media(max-width: 600px)': { flexDirection: 'column', gap: 2 },
          }}
          mt={4}
        >
          <Search handleText={handleChange} />
          <SelectComponent />
        </Grid>
        <Grid
          container
          spacing={6}
          sx={{
            marginTop: '1rem',
            '@media(max-width: 600px)': {
              marginBottom: '3rem',
            },
          }}
        >
          {countries?.map((item) => (
            <Grid
              item
              sx={{ '@media(max-width: 600px)': { width: '100%' } }}
              xs={12}
              sm={12}
              md={3}
              lg={3}
            >
              <CardCountry country={item} />
            </Grid>
          ))}
        </Grid>
      </MainComponent>
    </Container>
  )
}
