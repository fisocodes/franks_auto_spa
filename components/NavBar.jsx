import { useEffect } from 'react';
import { useState } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import { signIn } from 'next-auth/react';

import { Header } from "@mantine/core";
import { Group } from "@mantine/core";
import { Stack } from '@mantine/core';
import { Burger } from "@mantine/core";
import { Title } from '@mantine/core';
import { Drawer } from '@mantine/core';
import { Divider } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { Button } from '@mantine/core';

import { MdDashboard } from 'react-icons/md';
import { MdLocalCarWash } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { MdExitToApp } from 'react-icons/md';

export default function NavBar()
{
    const router = useRouter();
    const [opened, setOpened] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        const getUser =  async () => {
            const session = await getSession();

            setUser(session ? session.user : undefined);
        }

        getUser();
    }, []);

    const handleDashboardClick = () => {
        router.push('/');
        setOpened(false);
    }

    const handleWashesClick = () => {
        router.push('/washes');
        setOpened(false);
    }

    const handleEmployeesClick = () => {
        router.push('/employees');
        setOpened(false);
    }

    return(
        <>
            <Header p="xs" fixed>
                {
                    user ?
                    <Group position="left">
                        <Burger opened={opened} onClick={() => setOpened(!opened)}/>
                        <Title order={2}>Frank's Auto Spa</Title>
                    </Group>
                    :
                    <Group position="apart">
                        <Title order={2}>Frank's Auto Spa</Title>
                        <Button onClick={() => signIn()}>Iniciar sesión</Button>
                    </Group>
                }
            </Header>
            {
                user ?   
                <Drawer opened={opened} onClose={() => setOpened(false)} size="xs">
                    <Stack align="center">
                        <Avatar size="xl">{`${user.name.toUpperCase()[0]} ${user.surname.toUpperCase()[0]}`}</Avatar>
                        <Title order={4}>{`${user.name} ${user.surname}`}</Title>
                        <Button leftIcon={<MdExitToApp/>} variant="subtle" fullWidth onClick={() => signOut()} color="red">Cerrar sesión</Button>
                        <Divider size="xl" variant='solid'/>
                        <Button leftIcon={<MdDashboard/>} variant="subtle" fullWidth onClick={handleDashboardClick}>Panel</Button>
                        <Button leftIcon={<MdLocalCarWash/>} variant="subtle" fullWidth onClick={handleWashesClick}>Lavados</Button>
                        <Button leftIcon={<MdPerson/>} variant="subtle" fullWidth onClick={handleEmployeesClick}>Secadores</Button>
                    </Stack>
                </Drawer>
                :null
            }
        </>
    );
}