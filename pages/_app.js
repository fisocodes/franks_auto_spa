import { SessionProvider } from 'next-auth/react';

import { AppShell } from '@mantine/core';
import { Stack } from '@mantine/core';

import NavBar from '../components/NavBar';

import '../styles/main_style.css'

export default function FranksApp({ Component, pageProps }) {
    return(
      <SessionProvider>
        <AppShell padding="md" header={<NavBar/>}>
          <Stack mt={40}>
            <Component {...pageProps} />
          </Stack>
        </AppShell>
      </SessionProvider>
    ) 
}