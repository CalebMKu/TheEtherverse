import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import TransactionProvider from "../context/TransactionContext";
import "../css/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-gyxj-1gx.us.auth0.com"
      clientId="v9NXJzuuj3Qr48eb79OfxP10ncUO5TXr"
      redirectUri="http://localhost:3000/dashboard"
      cacheLocation="localstorage"
      useRefreshTokens
    >
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
    </Auth0Provider>
  );
}

export default MyApp;
