// darkTheme.js
import { createTheme } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'hsl(209, 23%, 22%)',
      dark: 'hsl(207, 26%, 17%)'
    },
  }, 
})

export default darkTheme
