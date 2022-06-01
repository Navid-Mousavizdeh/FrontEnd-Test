import * as React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme/ThemeGenerator'

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>Design will go here</ThemeProvider>
    </React.Fragment>
  )
}

export default App
