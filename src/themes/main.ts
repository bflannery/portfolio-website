import { createTheme } from '@mui/material'
import { green, navy, slate } from './palette'

export const mainTheme = {
  typography: {
    fontFamily: 'Fira Code',
    h2: {
      fontFamily: 'Roboto Mono',
    },
  },
  palette: {
    background: {
      default: navy[500],
    },
    primary: {
      light: slate[100],
      main: slate[500],
      dark: slate[900],
    },
    secondary: {
      main: green[500],
      dark: green[900],
    },
  },
}

export default createTheme(mainTheme)
