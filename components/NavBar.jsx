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
import { Affix } from '@mantine/core'

import { MdDashboard } from 'react-icons/md';
import { MdOutlineTimer } from 'react-icons/md';
import { MdLocalCarWash } from 'react-icons/md';
import { MdPerson } from 'react-icons/md';
import { MdExitToApp } from 'react-icons/md';

import NewWashModal from './NewWashModal';

export default function NavBar({title})
{
    const router = useRouter();
    const [drawerOpened, setDrawerOpened] = useState(false);
    const [newWashOpened, setNewWashOpened] = useState(false);
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
        setDrawerOpened(false);
    }

    const handleOngoingClick = () => {
        router.push('/ongoing');
        setDrawerOpened(false);
    }

    const handleEmployeesClick = () => {
        router.push('/employees');
        setDrawerOpened(false);
    }

    return(
        <>
            <Header p="xs" fixed>
                {
                    user ?
                    <Group position="left">
                        <Burger opened={drawerOpened} onClick={() => setDrawerOpened(!drawerOpened)}/>
                        <Title order={2}>{title}</Title>
                    </Group>
                    :
                    <Group position="apart">
                        <Title order={2}>{title}</Title>
                        <Button onClick={() => signIn()}>Iniciar sesión</Button>
                    </Group>
                }
            </Header>
            {
                user ?   
                <Drawer opened={drawerOpened} onClose={() => setDrawerOpened(false)} size="xs">
                    <Stack align="center">
                        <Avatar size="xl">{`${user.firstname.toUpperCase()[0]} ${user.lastname1.toUpperCase()[0]}`}</Avatar>
                        <Title order={4}>{`${user.firstname} ${user.lastname1}`}</Title>
                        <Button leftIcon={<MdExitToApp/>} variant="subtle" fullWidth onClick={() => signOut()} color="red">Cerrar sesión</Button>
                        <Divider size="xl" variant='solid'/>
                        <Button leftIcon={<MdDashboard/>} variant="subtle" fullWidth onClick={handleDashboardClick}>Panel</Button>
                        <Button leftIcon={<MdOutlineTimer/>} variant="subtle" fullWidth onClick={handleOngoingClick}>En curso</Button>
                        <Button leftIcon={<MdLocalCarWash/>} variant="subtle" fullWidth>Lavados</Button>
                        <Button leftIcon={<MdPerson/>} variant="subtle" fullWidth onClick={handleEmployeesClick}>Secadores</Button>
                    </Stack>
                </Drawer>
                :null
            }
            {
                user ?
                <>
                    <NewWashModal opened={newWashOpened} setOpened={setNewWashOpened}/>
                    <Affix position={{bottom: 20, right: 20}}>
                        <Button leftIcon={<MdLocalCarWash/>} color="yellow" onClick={() => setNewWashOpened(!newWashOpened)} size="lg">Nuevo</Button>
                    </Affix>
                </> 
                :null
            }
        </>
    );
}