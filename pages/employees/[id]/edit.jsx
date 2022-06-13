import { getSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

import { Stack } from '@mantine/core';
import { Grid } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';
import { Switch } from '@mantine/core';

import { MdSave } from 'react-icons/md';
import { MdCancel } from 'react-icons/md';

const axios =  require('axios').default;

export default ({employee, setTitle}) => {
    const router = useRouter();

    const [firstName, setFirstName] = useState(employee.firstname);
    const [middleName, setMiddleName] = useState(employee.middlename);
    const [lastName1, setLastName1] = useState(employee.lastname1);
    const [lastName2, setLastName2] = useState(employee.lastname2);
    const [state, setState] = useState(employee.state);
    
    const [loadSave, setLoadSave] = useState(false);
    const [loadCancel, setLoadCancel] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => setTitle('Editar secador'), []);

    const handleCancel = (e) => {
        setDisabled(true);
        setLoadCancel(true);
        e.preventDefault();
        router.back();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setLoadSave(true);
        const response = await axios.put(`/api/employees/${employee.id}`, {
            id: employee.id,
            firstname: firstName,
            middlename: middleName,
            lastname1: lastName1,
            lastname2: lastName2,
            state: state
        });
        router.back();
    }

    return(
        <Stack m={10}>
            <form onSubmit={handleSubmit}>
                <Grid grow>
                    <Grid.Col span={6}>
                        <TextInput required label="Primer nombre" value={firstName} onChange={event => setFirstName(event.currentTarget.value)}/>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput label="Segundo nombre" value={middleName} onChange={event => setMiddleName(event.currentTarget.value)}/>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput required label="Apellido paterno" value={lastName1} onChange={event => setLastName1(event.currentTarget.value)}/>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <TextInput label="Apellido materno" value={lastName2} onChange={event => setLastName2(event.currentTarget.value)}/>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Switch label="Estado (activo/inactivo)" checked={state} onChange={event => setState(event.currentTarget.checked)}/>
                    </Grid.Col>
                    <Grid.Col span={6} align="center">
                        <Button disabled={disabled} leftIcon={<MdSave/>} color="teal" type={'submit'} loading={loadSave}>Guardar</Button>
                    </Grid.Col>
                    <Grid.Col span={6} align="center">
                        <Button disabled={disabled} leftIcon={<MdCancel/>} color="red" onClick={handleCancel} loading={loadCancel}>Cancelar</Button>
                    </Grid.Col>
                </Grid>
            </form>
        </Stack>
    );
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);
    const {id} = ctx.query;

    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    const response =  await axios.get(`${process.env.BASE_URL}/api/employees/${id}`);
    const employee = response.data.employee;

    if(!employee)
        return {
            redirect: {
                destination: "/employees",
                permanent: false
            }
        }

    return {
        props: {
            user: session ? session.user : null,
            employee: employee
        }
    }
}