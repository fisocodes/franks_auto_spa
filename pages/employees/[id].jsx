import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from 'react';

import { Stack } from '@mantine/core';
import { Grid } from "@mantine/core";
import { Center } from '@mantine/core';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';

import { MdPersonRemove } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { useState } from "react";

const axios =  require('axios').default;

export default function Employee({employee, setTitle}){
    const router = useRouter();

    const [loadEdit, setLoadEdit] = useState(false);
    const [loadDelete, setLoadDelete] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => setTitle('Secador'), []);

    const handleEdit = (e) => {
        setDisabled(true);
        setLoadEdit(true);
        e.preventDefault();
        router.push(`/employees/edit/${employee.id}`);
    }

    const handleDelete = async (e) => {
        setDisabled(true);
        setLoadDelete(true);
        e.preventDefault();
        const response = await axios.delete('/api/employees/delete', {data: {id: employee.id}});
        router.push(`/employees/edit/${employee.id}`);
    }

    return(
        <Stack m={10}>
            <Title order={1}>
                {
                    `${employee.firstname} ${employee.middlename} ${employee.lastname1} ${employee.lastname2}`
                }
            </Title>

            <Grid>
                <Grid.Col span={6} align="center">
                    <Button leftIcon={<MdEdit/>} onClick={handleEdit} loading={loadEdit} disabled={disabled}>Editar</Button>
                </Grid.Col>
                <Grid.Col span={6} align="center">
                    <Button leftIcon={<MdPersonRemove/>} color="red" onClick={handleDelete} loading={loadDelete} disabled={disabled}>Eliminar</Button>
                </Grid.Col>
            </Grid>
            <Center>
            </Center>
        </Stack>
    );
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

    const response =  await axios.get(`${process.env.BASE_URL}/api/employees/${ctx.query.id}`);
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