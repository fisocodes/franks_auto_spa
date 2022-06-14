import { Title } from "@mantine/core";
import { Center } from "@mantine/core";
import { Stack } from "@mantine/core";
import { RadioGroup} from '@mantine/core';
import { Radio } from "@mantine/core";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useState } from "react";

import OngoingWash from "../components/OngoingWash";

const axios =  require('axios').default;

export default ({setTitle, ongoing}) => {
    const [ongoingArray, setOngoingArray] = useState(ongoing);
    const [order, setOrder] = useState('name');

    useEffect(() => {
        setTitle('En curso');
    }, []);

    const handleOrder = (value) => {
        setOrder(value);

        switch(value){
            case 'name':
                setOngoingArray(ongoingArray.sort((a, b) => a.employee.firstname > b.employee.firstname ? 1 : (b.employee.firstname > a.employee.firstname ? -1 : 0)));
                break;
            case 'time':
                setOngoingArray(ongoingArray.sort((a, b) => a.date < b.date ? 1 : (b.date < a.date ? -1 : 0)));
                break;
            case 'service':
                setOngoingArray(ongoingArray.sort((a, b) => a.service > b.service ? 1 : (b.service > a.service ? -1 : 0)));
                break;
        }
    }

    const removeWash = (date) => {
        setOngoingArray(ongoingArray.filter(wash => date !== wash.date));
    }

    return(
        ongoingArray.length > 0 ?
        <>
            <RadioGroup label="Ordenar" value={order} onChange={value => handleOrder(value)}>
                <Radio value="name" label="Nombre"/>
                <Radio value="time" label="Tiempo"/>
                <Radio value="service" label="Servicio"/>
            </RadioGroup>
            <Stack pt="lg" pb={70}>
                {
                    ongoingArray.map(wash => <OngoingWash key={wash.date} wash={wash} removeWash={removeWash}/>)
                }
            </Stack>
        </>
        :
        <Center style={{height: "80vh"}}>
            <Stack align="center">
                <Title>{":("}</Title>
                <Title order={3}>{"No hay lavados"}</Title>
            </Stack>
        </Center>
    );
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);
    
    const ongoingResponse =  await axios.get(`${process.env.BASE_URL}/api/ongoing`);
    
    if(!session)
        return {
            redirect: {
                destination: "/landing",
                permanent: false
            }
        }

    return { props: {
        ongoing: ongoingResponse.data.ongoing,
    }}
}