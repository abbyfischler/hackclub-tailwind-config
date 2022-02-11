import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem="true">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
