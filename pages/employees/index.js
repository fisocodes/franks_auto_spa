import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';

import { Stack } from '@mantine/core';
import { Grid } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import { Button } from '@mantine/core';

import { MdPersonAddAlt1 } from 'react-icons/md';

import EmployeeCard from '../../components/EmployeeCard';

const axios =  require('axios').default;

export default ({employees, setTitle}) => {
    const router = useRouter();

    const[selectorData, setSelectorData] = useState([]);
    const[selectorValue, setSelectorValue] = useState([]);

    useEffect(() => setTitle('Secadores'), []);


    const handleNew = (e) => {
        e.preventDefault();
        router.push("/employees/new");
    }

    useEffect(() => {
        setSelectorData(employees.map(employee => {
            return {
                value: employee.id,
                label: `${employee.firstname} ${employee.lastname1}`
            }
        }));
    }, []);

    return(
        <Stack m={10}>
            <Grid align="center" justify="center">
                <Grid.Col xs={8}>
                    <MultiSelect searchable data={selectorData} value={selectorValue} onChange={setSelectorValue} label="Filtrar secadores"/>
                </Grid.Col>
                <Grid.Col xs={4} align="right">
                    <Button leftIcon={<MdPersonAddAlt1/>} onClick={handleNew}>Nuevo</Button>
                </Grid.Col>
            </Grid>
            {
                selectorValue.length > 0 ? 
                employees.filter(employee => selectorValue.includes(employee.id)).map(employee => <EmployeeCard employee={employee}/>)
                : employees.map(employee => <EmployeeCard employee={employee}/>)
            }
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

    const response =  await axios.get(`${process.env.BASE_URL}/api/employees`);
    const employees = response.data.employees.sort((a, b) => a.firstname > b.firstname ? 1 : (b.firstname > a.firstname ? -1 : 0))

    return {
        props: {
            employees: employees
        }
    }
}