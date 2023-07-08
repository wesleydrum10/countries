import { ListCountriesProvider } from '../context/useListCountries'
import ThemeProviderComponent from '../context/useTheme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProviderComponent>
        <ListCountriesProvider>
          <Component {...pageProps} />
        </ListCountriesProvider>
      </ThemeProviderComponent>
  )
}

export default MyApp
