import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
// import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
