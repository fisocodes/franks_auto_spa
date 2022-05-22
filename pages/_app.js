import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';

import { AppShell } from '@mantine/core';
import { Stack } from '@mantine/core';

import NavBar from '../components/NavBar';

import '../styles/main_style.css'

export default function FranksApp({ Component, pageProps }) {
  const [title, setTitle] = useState("Frank's Auto Spa");

    return(
      <SessionProvider>
        <AppShell padding="md" header={<NavBar title={title}/>}>
          <Stack mt={40}>
            <Component {...pageProps} setTitle={setTitle}/>
          </Stack>
        </AppShell>
      </SessionProvider>
    ) 
}