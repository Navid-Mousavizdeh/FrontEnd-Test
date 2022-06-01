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
      primary: '#757575',
      secondary: '#0097a7',
    },
  },

  spacing: 8,
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
})
