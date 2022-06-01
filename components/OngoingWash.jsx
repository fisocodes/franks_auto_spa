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

const axios =  require('axios').default;

export default function OngoingWash({date, employee, service, removeWash}){

    const secondsOffset = Math.floor((Date.now() - date)/1000);
    const stopwatchOffset = new Date();
    stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + secondsOffset);

    const {seconds, minutes, hours} = useStopwatch({autoStart: true, offsetTimestamp: stopwatchOffset});
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

    useEffect(() => {
        setMounted(true);
    }, [])

    return(
        <Collapse in={collapse} onTransitionEnd={() => removeWash(date)} transitionDuration={600}>
            <Transition mounted={mounted} transition="slide-right" duration={400} timingFunction="ease" onExit={() => setCollapse(false)}>
                {
                    (styles) => 
                        <Card style={styles}>
                            <Grid align="center" justify="center">
                                <Grid.Col span={6} align="center">
                                    <Avatar size="lg">{`${employee.firstname[0]}${employee.lastname1[0]}`}</Avatar>
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
                                    <Button color="teal" leftIcon={<MdCheckCircle/>} disabled={disabled}>Finalizar</Button>
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