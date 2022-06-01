import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#303F9F',
      light: '#3F51B5',
      dark: '#1A237E',
      contrastText: '#fce4ec',
    },
    secondary: {
      main: '#FFA000',
      light: '#FFB300',
      dark: '#0097a7',
      contrastText: '#090020',
    },
    warning: {
      main: '#ff9800',
      light: '#ffb74d',
      dark: '#ff9800',
    },
    error: {
      main: '#ef5350',
      light: '#e57373',
      dark: '#f44336',
    },
    text: {
      primary: '#242754',
      secondary: '#0097a7',
    },
  },
  typography: {
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 900,
    },
    h3: {
      fontWeight: 800,
    },
    h4: {
      fontWeight: 800,
    },
    h5: {
      fontWeight: 800,
      fontSize: '1.6rem',
    },
    subtitle1: {
      fontWeight: 700,
    },
  },
  spacing: 8,
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
})
