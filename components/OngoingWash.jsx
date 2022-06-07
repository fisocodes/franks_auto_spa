import { Card } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { Title } from "@mantine/core";
import { Text } from "@mantine/core";
import { Button } from "@mantine/core";
import { Grid } from "@mantine/core";
import { Transition } from '@mantine/core';
import { Collapse } from "@mantine/core";

import { MdCancel } from 'react-icons/md';
import { MdCheckCircle } from 'react-icons/md';

import { useStopwatch } from 'react-timer-hook';
import { useState } from 'react';
import { useEffect } from 'react';

import { getSession } from 'next-auth/react';

const axios =  require('axios').default;

export default function OngoingWash({date, employee, service, removeWash}){

    const secondsOffset = Math.floor((Date.now() - date)/1000);
    const stopwatchOffset = new Date();
    stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + secondsOffset);

    const {seconds, minutes, hours, start} = useStopwatch({offsetTimestamp: stopwatchOffset});
    const [mounted, setMounted] = useState(false);
    const [loadCancel, setLoadCancel] = useState(false);
    const [loadFinish, setLoadFinish] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [collapse, setCollapse] = useState(true);

    const handleCancel = async () => {
        setDisabled(true);
        setLoadCancel(true);
        const cancelResponse =  await axios.put(`/api/ongoing/cancel`, {date: date});
        setLoadCancel(false);
        setMounted(false);
    }

    const handleFinish = async () => {
        setDisabled(true);
        setLoadFinish(true);
        const session = await getSession();
        const finishResponse =  await axios.post(`/api/ongoing/finish`, {user_id: session.user.id, date: date, time: (hours * 60) + minutes});
        setLoadFinish(false);
        setMounted(false);
        console.log(finishResponse);
    }

    useEffect(() => {
        setMounted(true);
        start();
    }, [])

    return(
        <Collapse in={collapse} onTransitionEnd={() => removeWash(date)} transitionDuration={600}>
            <Transition mounted={mounted} transition="slide-right" duration={Math.random() * 500 + 300} timingFunction="ease" onExit={() => setCollapse(false)}>
                {
                    (styles) => 
                        <Card style={styles}>
                            <Grid align="center" justify="center">
                                <Grid.Col span={6} align="center">
                                    <Avatar size="lg">{employee ? `${employee.firstname[0]}${employee.lastname1[0]}` : 'Secador desconocido'}</Avatar>
                                </Grid.Col>
                                <Grid.Col span={6} align="center">
                                    <Title order={4}>{`${employee.firstname} ${employee.lastname1}`}</Title>
                                </Grid.Col>
                                <Grid.Col span={12} align="center">
                                    <Text size="xl">{new Date(date).toLocaleString()}</Text>
                                </Grid.Col>
                                <Grid.Col span={6} align="center">
                                    <Text size="xl">{service}</Text>
                                </Grid.Col>
                                <Grid.Col span={6} align="center">
                                    <Text size="xl">{`${hours} : ${minutes} : ${seconds}`}</Text>        
                                </Grid.Col>
                                <Grid.Col span={6} align="center" >
                                    <Button color="teal" leftIcon={<MdCheckCircle/>} onClick={handleFinish} loading={loadFinish} disabled={disabled}>Finalizar</Button>
                                </Grid.Col>
                                <Grid.Col span={6} align="center">
                                <Button color="red" leftIcon={<MdCancel/>} onClick={handleCancel} loading={loadCancel} disabled={disabled}>Cancelar</Button>
                                </Grid.Col>
                            </Grid>
                        </Card>
                }
            </Transition>
        </Collapse>
    )

}