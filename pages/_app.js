import '../styles/globals.css'
import { CustomTheme } from '../components/CustomTheme'
import CssBaseline from '@mui/material/CssBaseline'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '@mui/material'

function MyApp({ Component, pageProps }) {
  return (
    <CustomTheme>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" component="main">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </CustomTheme>
  )
}

export default MyApp
