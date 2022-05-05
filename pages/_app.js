import { SessionProvider } from 'next-auth/react';

import '../styles/main_style.css'

export default function FranksApp({ Component, pageProps }) {
    return(
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    ) 
}