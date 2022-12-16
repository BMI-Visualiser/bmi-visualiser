import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import theme from '../styles/theme';
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        {/* TODO use config */}
        <title>BMI Visualiser</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <CssBaseline />
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
