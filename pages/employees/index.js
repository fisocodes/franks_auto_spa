import { getSession } from 'next-auth/react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Stack } from '@mantine/core';
import { Grid } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import { Loader } from '@mantine/core';
import { Center } from '@mantine/core';
import { RadioGroup, Radio } from '@mantine/core';

import EmployeeCard from '../../components/EmployeeCard';
import NewEmployeeButton from '../../components/buttons/NewEmployeeButton';
import { getEmployees } from '../../utils/api';

export default ({setTitle}) => {
    useEffect(() => setTitle('Secadores'), []);

    const [pageLoading, setPageLoading] = useState(true);
    const [order, setOrder] = useState('name');
    const [employees, setEmployees] = useState([]);
    const [selectorData, setSelectorData] = useState([]);
    const [selectorValue, setSelectorValue] = useState([]);

    useEffect(() => {

        getEmployees().then(employees => {
            setEmployees(employees);
            
            setSelectorData(employees.map(employee => {
                return {
                    value: employee.id,
                    label: `${employee.firstname} ${employee.lastname1}`
                }
            }));
        });

        setPageLoading(false);
    }, []);

    const handleOrder = (value) => {
        setOrder(value);

        switch(value){
            case 'name':
                setEmployees(employees.sort((a, b) => a.firstname > b.firstname ? 1 : (b.firstname > a.firstname ? -1 : 0)));
                break;
            case 'units':
                setEmployees(employees.sort((a, b) => a.total_units > b.total_units ? 1 : (b.total_units > a.total_units ? -1 : 0)));
                break;
            case 'time':
                setEmployees(employees.sort((a, b) => a.total_average_time > b.total_average_time ? 1 : (b.total_average_time > a.total_average_time ? -1 : 0)));
                break;
        }
    }

    if(pageLoading){
        return(
            <Center style={{height: "80vh"}}>
                <Loader variant="dots" size="xl" color="yellow"/>:
            </Center>
        );
    }

    return(
        <Stack m={5} mb={70}>
            <Grid align="center" justify="center">
                <Grid.Col xs={8}>
                    <MultiSelect searchable data={selectorData} value={selectorValue} onChange={setSelectorValue} label="Filtrar secadores"/>
                </Grid.Col>
                <Grid.Col xs={4} align="right">
                    <NewEmployeeButton/>
                </Grid.Col>
            </Grid>
            <RadioGroup label="Ordenar" value={order} onChange={value => handleOrder(value)}>
                <Radio value="name" label="Nombre"/>
                <Radio value="units" label="Unidades"/>
                <Radio value="time" label="Tiempo"/>
            </RadioGroup>
            {
                selectorValue.length > 0 ? 
                employees.filter(employee => selectorValue.includes(employee.id)).map(employee => <EmployeeCard employee={employee}/>)
                : employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)
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
    
    return {props:{}}
}