import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

// like this: 

storageKey = 'theme';
themes = ['light, dark'];


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp