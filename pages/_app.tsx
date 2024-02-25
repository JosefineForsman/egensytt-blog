import '../styles/globals.css'
import Layout from '../components/Layout'
import theme from '@/styles/theme'
import { ThemeProvider } from '@mui/material/styles'

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
  )
}

export default MyApp