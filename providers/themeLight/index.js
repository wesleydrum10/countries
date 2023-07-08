// lightTheme.js
import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'hsl(0, 0%, 100%)',
      dark: 'hsl(0, 0%, 98%)'
    },
  },
})

export default lightTheme
