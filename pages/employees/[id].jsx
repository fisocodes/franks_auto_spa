import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

import { Stack } from '@mantine/core';
import { Grid } from "@mantine/core";
import { Center } from '@mantine/core';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';

import { MdPersonRemove } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';

const axios =  require('axios').default;

export default function Employee({employee}){
    const router = useRouter();

    const handleEdit = (e) => {
        e.preventDefault();
        router.push(`/employees/edit/${employee.id}`);
        console.log('Editing employee...');
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        console.log(`Employee '${employee.firstname}' deleted`);
        const response = await axios.delete('/api/employees/delete', {data: {id: employee.id}});
        console.log(response.data);
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
                    <Button leftIcon={<MdEdit/>} onClick={handleEdit}>Editar</Button>
                </Grid.Col>
                <Grid.Col span={6} align="center">
                    <Button leftIcon={<MdPersonRemove/>} color="red" onClick={handleDelete}>Eliminar</Button>
                </Grid.Col>
            </Grid>
            <Center>
            </Center>
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