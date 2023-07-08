import { useRouter } from 'next/router'
import React from 'react'
import HeaderComponent from '../../components/header'
import MainComponent from '../../components/main'
import { Container } from '../../styles/home-style'
import DetailsCountryPage from './country-page'

export default function DetailsCountryContainer() {
  const { query } = useRouter()
  const { code } = query

  return (
    <Container>
      <HeaderComponent />
      <MainComponent>
        <DetailsCountryPage name={code} />
      </MainComponent>
    </Container>
  )
}
