import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import TransactionProvider from "../context/TransactionContext";
import "../css/globals.css";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Navbar />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </TransactionProvider>
  );
}

export default MyApp;
