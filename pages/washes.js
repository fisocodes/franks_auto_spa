import { Title } from "@mantine/core";
import { Center } from "@mantine/core";
import { Stack } from "@mantine/core";
import { Grid } from "@mantine/core";
import { Select } from "@mantine/core";
import { Pagination } from '@mantine/core';

import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";

const axios =  require('axios').default;

export default ({setTitle, employees, pagNumber}) => {

    useEffect(() => {
        setTitle('Lavados');
    }, []);

    return(
        <>
            <Grid>
                <Grid.Col span={6}>
                    <Select label="Secador" data={employees.map(employee => ({value: `${employee.id}`, label: `${employee.firstname} ${employee.lastname1}`}))}/>
                </Grid.Col>
            </Grid>
            <Pagination total={pagNumber}/>
        </>
    );
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);
    
    const employeesresponse =  await axios.get(`${process.env.BASE_URL}/api/employees`);
    

    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    return { props: {
        employees: employeesresponse.data.employees,
        pagNumber: 10
    }}
}