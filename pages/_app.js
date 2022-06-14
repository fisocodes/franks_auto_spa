import { SessionProvider } from 'next-auth/react';
import { MantineProvider } from '@mantine/core';
import { useState } from 'react';

import { AppShell } from '@mantine/core';
import { Stack } from '@mantine/core';

import NavBar from '../components/NavBar';

import '../styles/main_style.css'

export default function FranksApp({ Component, pageProps }) {
  const [title, setTitle] = useState("Frank's Auto Spa");

    return(
      <MantineProvider theme={{black: '#373A40'}}>
        <SessionProvider>
          <AppShell padding="md" header={<NavBar title={title}/>}>
            <Stack mt={40}>
              <Component {...pageProps} setTitle={setTitle}/>
            </Stack>
          </AppShell>
        </SessionProvider>
      </MantineProvider>
    ) 
}