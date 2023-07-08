import React, { createContext, useContext, useState } from 'react'
import { service } from '../services'

export const ListCountriesContext = createContext()

const ListCountriesProvider = ({children}) => {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState([])

  const listing = () => {
    service.listingCountry.list().then(setCountries).catch((err) => console.error(err))
  }

  const finding = (name_country) => {
    service.listingCountry.findName(name_country).then(setCountries).catch((err) => console.error(err))
  }

  const findingCode = (code) => {
    service.listingCountry.findCode(code).then((data) => setCountry(data[0])).catch((err) => console.error(err))
  }

  const findingRegion = (region) => {
    service.listingCountry.findRegion(region).then(setCountries).catch((err) => console.error(err))
  }

  const value = {listing, countries, country, finding, findingCode, findingRegion}
  return <ListCountriesContext.Provider value={value}>{children}</ListCountriesContext.Provider>
}

const useListCountries = () => {
  const context = useContext(ListCountriesContext)
  return context
}

export {ListCountriesProvider, useListCountries}