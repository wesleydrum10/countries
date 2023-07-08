import Axios from 'axios'
import { config } from 'process'

const api = Axios.create({
  data: config,
  baseURL: 'https://restcountries.com',
})

export default api 
