import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

import '../styles/fonts.css'
import '../styles/globals.css'
import NavBar from '../components/NavBar/NavBar'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <NavBar/>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
