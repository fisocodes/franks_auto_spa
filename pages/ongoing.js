import { Title } from "@mantine/core";
import { Center } from "@mantine/core";
import { Stack } from "@mantine/core";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";

import OngoingWash from "../components/OngoingWash";

const axios =  require('axios').default;

export default ({setTitle, ongoing, employees}) => {
    const [ongoingArray, setOngoingArray] = useState([]);

    useEffect(() => {
        setTitle('En curso');

        setOngoingArray(ongoing.map(wash => {
            return <OngoingWash key={wash.date} date={wash.date} employee={employees.find(employee => employee.id === wash.employee_id)} service={wash.service} removeWash={removeWash}/>
        }));

    }, []);

    const removeWash = (date) => {
        ongoing = ongoing.filter(wash => date !== wash.date)
        setOngoingArray(ongoing.map(wash => <OngoingWash key={wash.date} date={wash.date} employee={employees.find(employee => employee.id === wash.employee_id)} service={wash.service} removeWash={removeWash}/>));
    }

    return(
        <>
            {
                ongoingArray.length > 0 ?
                <Stack pt="lg" pb={70}>
                    {ongoingArray}
                </Stack>:
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
    
    const ongoingResponse =  await axios.get(`${process.env.BASE_URL}/api/ongoing`);
    const employeesresponse =  await axios.get(`${process.env.BASE_URL}/api/employees`);
    

    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    return { props: {
        ongoing: ongoingResponse.data.ongoing,
        employees: employeesresponse.data.employees
    }}
}