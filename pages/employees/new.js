import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Stack } from '@mantine/core';
import { Grid } from '@mantine/core';
import { Title } from '@mantine/core';

import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';
import { Switch } from '@mantine/core';

import { MdSave } from 'react-icons/md';
import { MdCancel } from 'react-icons/md';

const axios =  require('axios').default;

export default function New({user}){
    const router =  useRouter();

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName1, setLastName1] = useState('');
    const [lastName2, setLastName2] = useState('');
    const [state, setState] = useState(true);

    const handleCancel = (e) => {
        e.preventDefault();
        router.back();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/employees/new', {
            firstname: firstName,
            middlename: middleName,
            lastname1: lastName1,
            lastname2: lastName2,
            state: state
        });

        console.log(response.data);
        router.push('/employees');
    }

    return(
        <Stack m={10}>
            <Title>Nuevo secador</Title>
            <form onSubmit={handleSubmit}>
                <Grid grow>
                    <Grid.Col span={6}>
                        <TextInput required label="Primer nombre" onChange={event => setFirstName(event.currentTarget.value)}/>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput label="Segundo nombre" onChange={event => setMiddleName(event.currentTarget.value)}/>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput required label="Apellido paterno" onChange={event => setLastName1(event.currentTarget.value)}/>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput label="Apellido materno" onChange={event => setLastName2(event.currentTarget.value)}/>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Switch label="Estado (activo/inactivo)" checked={state} onChange={event => setState(event.currentTarget.checked)}/>
                    </Grid.Col>
                    <Grid.Col span={6} align="center">
                        <Button leftIcon={<MdSave/>} color="teal" type={'submit'}>Guardar</Button>
                    </Grid.Col>
                    <Grid.Col span={6} align="center">
                        <Button leftIcon={<MdCancel/>} color="red" onClick={handleCancel}>Cancelar</Button>
                    </Grid.Col>
                </Grid>
            </form>
        </Stack>
    )
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);

    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    return {
        props: {
            user: session ? session.user : null
        }
    }
}