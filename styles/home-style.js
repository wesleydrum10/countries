import { Grid, styled } from '@mui/material'

const Container = styled(Grid)(({theme}) => ({
  width: '100vw',
  height: '100vh',
  display: 'grid',
  overflow: 'auto',
  background: theme.palette.primary.dark,
  gridTemplateRows: '10vh auto',
  gridTemplateAreas: `"header"
                     "main"`,
}))

const HeaderContent = styled('header')(({theme}) => ({
  display: 'flex',
  gridArea: 'header',
  width: '100%',
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0rem 5rem',
  boxShadow: '1px 1px 0px 10px #000000',
  '@media(max-width: 600px)': {
    padding: '0rem 1rem',
  }
}))

const MainContent = styled('main')(({theme}) => ({
  display: 'flex',
  gridArea: 'main',
  flexDirection: 'column',
  padding: '0rem 5rem 5rem',
  background: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  '@media(max-width: 600px)': {
    padding: '0rem 1rem',
    flexDirection: 'column'
  }
}))

export {
  Container,
  HeaderContent,
  MainContent
}
