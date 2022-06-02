import * as React from 'react'
// import Theme
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme/ThemeGenerator'
import { styled } from '@mui/system'
// import MUI components
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Fab from '@mui/material/Fab'
// import components
import AppBar from './Components/AppBar'
import WeatherCastPanel from './Components/WeatherCastPanel'
// import Icons
import AddIcon from '@mui/icons-material/Add'
// import Data
import { allData } from './Data'

const GridContainerPage = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
}))

const GridContainerFloatingButton = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(2),
  justifyContent: 'flex-end',
}))

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <GridContainerPage container>
          <Grid item container>
            <AppBar Title={allData.AppBarTitle} />
          </Grid>
          <Grid item container>
            <WeatherCastPanel Data={allData} />
          </Grid>
          <GridContainerFloatingButton item container>
            <Fab color='primary'>
              <AddIcon />
            </Fab>
          </GridContainerFloatingButton>
        </GridContainerPage>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
