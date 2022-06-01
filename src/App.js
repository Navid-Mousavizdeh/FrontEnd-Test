import * as React from 'react'
// Import Theme
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme/ThemeGenerator'
// import MUI components
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
// Import components
import AppBar from './Components/AppBar'
import WeatherCastPanel from './Components/WeatherCastPanel'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* Theme providing for whole page */}
      <ThemeProvider theme={theme}>
        {/* Grid every component of the page each will be placed in a item grid */}
        <Grid container sx={{ p: 2 }}>
          {/* ------- AppBar  ------- */}
          <Grid item container>
            <AppBar />
          </Grid>
          <Grid item container>
            {/* ------- Weather cast section  ------- */}
            <WeatherCastPanel />
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
