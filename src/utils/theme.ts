import { createTheme} from '@mui/material/styles';

type Props = {}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },

  palette: {
    mode: 'light',
    primary: {
      main: '#111111',
      contrastText: '#FFFFFF',
      light: '#999999',
    },
    secondary: {
      main: '#e57373',
      contrastText: '#FFFFFF',
    },
    text: {
      secondary: '#888888',
      primary: '#313131',
      hint: '#E57373',
    },
  },
  typography: {
    fontFamily: 'Crimson Text',
    fontSize: 16,
    h1: {
      fontFamily: 'Oswald',
      fontSize: 24,
      lineHeight: 1.3,
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Oswald',
      fontSize: 22,
      fontWeight: 400,
      lineHeight: 1.3,
    },
    h3: {
      fontFamily: 'Oswald',
      fontSize: 20,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: 'Oswald',
      fontSize: 18,
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: 'Oswald',
      fontSize: 16,
      lineHeight: 1.3,
    },
    h6: {
      fontFamily: 'Oswald',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.3,
    },
    subtitle1: {
      fontSize: 16,
      lineHeight: 1.8,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.8,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.8,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.8,
    },
    button: {
      fontFamily: 'Oswald',
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1,
    },
    caption: {
      fontSize: 14,
      lineHeight: 1.4,
      fontStyle: 'italic',
    },
    overline: {
      fontSize: 14,
      lineHeight: 1.2,
      textTransform: 'none',
    },
  },
  spacing: 1,
  shape: {
    borderRadius: 0,
  },
  status: {
    danger: '#888888',
  },
})

export default theme