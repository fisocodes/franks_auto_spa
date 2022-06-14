import { Card } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { Title } from "@mantine/core";
import { Text } from "@mantine/core";
import { Button } from "@mantine/core";
import { Grid } from "@mantine/core";
import { Transition } from '@mantine/core';
import { Collapse } from "@mantine/core";
import { Badge } from '@mantine/core';

import FinishButton from "./buttons/FinishButton";
import CancelButton from "./buttons/CancelButton";

import { useStopwatch } from 'react-timer-hook';
import { useState } from 'react';
import { useEffect } from 'react';

import { getSession } from 'next-auth/react';

const axios =  require('axios').default;

export default function OngoingWash({wash, removeWash}){

    const secondsOffset = Math.floor((Date.now() - wash.date)/1000);
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
        const cancelResponse =  await axios.put(`/api/ongoing/cancel`, {date: wash.date});
        setLoadCancel(false);
        setMounted(false);
    }

    const handleFinish = async () => {
        setDisabled(true);
        setLoadFinish(true);
        const session = await getSession();
        const finishResponse =  await axios.post(`/api/ongoing/finish`, {user_id: session.user.id, date: wash.date, time: (hours * 60) + minutes});
        setLoadFinish(false);
        setMounted(false);
    }

    useEffect(() => {
        setMounted(true);
        start();
    }, [])

    return(
        <Collapse in={collapse} onTransitionEnd={() => removeWash(wash.date)} transitionDuration={600}>
            <Transition mounted={mounted} transition="slide-right" duration={Math.random() * 500 + 300} timingFunction="ease" onExit={() => setCollapse(false)}>
                {
                    (styles) => 
                        <Card style={styles}>
                            <Grid align="center" justify="center">
                                <Grid.Col span={6}>
                                    <Title order={4}>{wash.employee ? `${wash.employee.firstname} ${wash.employee.lastname1}` : 'Secador desconocido'}</Title>
                                </Grid.Col>
                                <Grid.Col span={6} align="center">
                                    <Text size="md">{new Date(wash.date).toLocaleString()}</Text>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Badge size="lg" color="yellow" variant="outline">{wash.service}</Badge>
                                </Grid.Col>
                                <Grid.Col span={6} align="center">
                                    <FinishButton onClick={handleFinish}/>
                                </Grid.Col>
                                <Grid.Col span={6}>
                                    <Badge size="lg" color="blue" variant="outline">{`${hours} : ${minutes} : ${seconds}`}</Badge>     
                                </Grid.Col>
                                <Grid.Col span={6} align="center" >
                                    <CancelButton onClick={handleCancel}/>
                                </Grid.Col>
                            </Grid>
                        </Card>
                }
            </Transition>
        </Collapse>
    )

}