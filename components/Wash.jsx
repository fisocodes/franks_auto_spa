import { Card } from "@mantine/core";
import { Title } from "@mantine/core";
import { Text } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { Grid } from "@mantine/core";
import { Transition } from '@mantine/core';
import { Collapse } from "@mantine/core";

import { MdDelete } from 'react-icons/md';

import { useState } from "react";
import { useEffect } from "react";

const axios =  require('axios').default;

export default function Wash({wash, employee, removeWash}){

    const [loadDelete, setLoadDelete] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [collapse, setCollapse] = useState(true);

    const handleDelete = async () => {
        setLoadDelete(true);
        const deleteResponse = await axios.delete('api/washes/delete', {data: {wash: wash}});
        setMounted(false);
        removeWash(wash.date);
        console.log(deleteResponse.data);
    }

    useEffect(() => {
        setMounted(true);
    }, []);

    return(
        <Collapse in={collapse} onTransitionEnd={() => removeWash(wash.date)} transitionDuration={600}>
            <Transition mounted={mounted} transition="slide-right" duration={Math.random() * 500 + 300} timingFunction="ease" onExit={() => setCollapse(false)}>
                {
                    (styles) =>
                    <Card style={styles}>
                        <Grid align="center" justify="center">
                            <Grid.Col span={5}>
                                <Text>{new Date(wash.date).toLocaleDateString()}</Text>
                            </Grid.Col>
                            <Grid.Col span={5}>
                                <Title order={5}>{employee ? `${employee.firstname[0]}${employee.lastname1[0]}` : 'Secador desconocido'}</Title>
                            </Grid.Col>
                            <Grid.Col span={2} align="center">
                                <ActionIcon variant="filled" color="red" onClick={handleDelete} loading={loadDelete}>
                                    <MdDelete/>
                                </ActionIcon>
                            </Grid.Col>
                            <Grid.Col span={6} align="center">
                                <Text>{wash.service}</Text>
                            </Grid.Col>
                            <Grid.Col span={6} align="center">
                                <Text>{`${wash.time} min`}</Text>
                            </Grid.Col>
                            <Grid.Col span={4} align="center">
                                <Text>{wash.brand}</Text>
                            </Grid.Col>
                            <Grid.Col span={4} align="center">
                                <Text>{wash.model}</Text>
                            </Grid.Col>
                            <Grid.Col span={4} align="center">
                                <Text>{wash.colour}</Text>
                            </Grid.Col>
                        </Grid>
                    </Card>
                }
            </Transition>
            
        </Collapse>
    )

}