import { Title } from "@mantine/core";
import { Center } from "@mantine/core";
import { Stack } from "@mantine/core";
import { Pagination } from '@mantine/core';

import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";

import Wash from "../components/Wash";

const axios =  require('axios').default;

export default ({setTitle, employees, total_washes}) => {

    const[page, setPage] = useState(1);
    const[washes, setWashes] = useState([]);

    useEffect(() => {
        setTitle('Lavados');

        const getWashes = async () => {
            const washesResponse = await axios.get('/api/washes/page', {params: {page: page}});
            setWashes(washesResponse.data.washes);
        }

        getWashes();

    }, [page]);

    const removeWash = (date) => {
        setWashes(washes.filter(wash => date !== wash.date));
    }

    return(
        <>
            {
                washes.length > 0 ? 
                <>
                    <Stack pt="lg" pb={70}>
                        {washes.map(wash => <Wash key={wash.id} wash={wash} employee={employees.find(employee => employee.id === wash.employee_id)} removeWash={removeWash}/>)}
                    </Stack>
                    <Pagination total={Math.ceil(total_washes / 5)} page={page} onChange={setPage} position="center"/>
                </>
                :
                <Center style={{height: "80vh"}}>
                    <Stack align="center">
                        <Title>{":("}</Title>
                        <Title order={3}>{"No hay lavados"}</Title>
                    </Stack>
                </Center>
            }
        </>
    );
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);
    
    const employeesResponse =  await axios.get(`${process.env.BASE_URL}/api/employees`);
    const washesResponse = await axios.get(`${process.env.BASE_URL}/api/washes/`);

    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    return { props: {
        employees: employeesResponse.data.employees,
        total_washes: washesResponse.data.total_washes
    }}
}