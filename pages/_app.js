import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/roboto/400.css';

import '../styles/main_style.css'

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#2980b9',
        },
        secondary: {
          main: '#f1c40f',
        },
        background: {
          default: '#f4f6f6',
        },
        text: {
          primary: '#34495e',
          secondary: 'rgba(52,73,94,0.54)',
          disabled: 'rgba(52,73,94,0.38)',
          hint: 'rgba(52,73,94,0.38)',
        },
      },
      typography: {
        fontFamily: 'Roboto',
      },
})

export default ({ Component, pageProps }) => {
    return <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
}