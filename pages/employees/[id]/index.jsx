import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from 'react';
import { useState } from "react";

import { Stack } from '@mantine/core';
import { Grid } from "@mantine/core";
import { Center } from '@mantine/core';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';
import { Loader } from '@mantine/core';
import { Paper } from '@mantine/core';
import { Pagination } from "@mantine/core";

import { ResponsiveContainer } from "recharts";
import { BarChart } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { Bar } from "recharts";
import { Tooltip } from "recharts";
import { PieChart } from "recharts";
import { Pie } from "recharts";

import { MdPersonRemove } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';

import { getEmployee } from "../../../utils/api";
import { getEmployeeStats } from "../../../utils/api";
import { getEmployeePage } from "../../../utils/api";
const axios =  require('axios').default;

import Wash from "../../../components/Wash";

export default function Employee({id, setTitle}){
    const router = useRouter();

    const [employee, setEmployee] = useState(null);
    const [stats, setStats] = useState(null);
    const [unitsData, setUnitsData] = useState(null);
    const [timeData, setTimeData] = useState(null);
    const [percentageData, setPercentageData] = useState(null);
    const [page, setPage] = useState(1);
    const [washes, setWashes] = useState(null);
    const [loadEdit, setLoadEdit] = useState(false);
    const [loadDelete, setLoadDelete] = useState(false);
    const [loadPage, setLoadPage] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setTitle('Secador');

        getEmployee(id).then(employee => {
            if(!employee){
                router.push('/employees');
            }
            setEmployee(employee);
        });

        getEmployeeStats(id).then(stats => {
            setStats(stats);
            setUnitsData([
                {
                    name: "EXPRESS",
                    units: stats.express_units
                },
                {
                    name: "MASTER",
                    units: stats.master_units
                },
                {
                    name: "PREMIUM",
                    units: stats.premium_units
                }
            ]);
            setTimeData([
                {
                    name: "EXPRESS",
                    average_time: stats.express_average_time
                },
                {
                    name: "MASTER",
                    average_time: stats.master_average_time
                },
                {
                    name: "PREMIUM",
                    average_time: stats.premium_average_time
                }
            ]);
            setPercentageData([
                {
                    name: "EXPRESS",
                    percentage: stats.express_units * 100 / stats.total_units
                },
                {
                    name: "MASTER",
                    percentage: stats.master_units * 100 / stats.total_units
                },
                {
                    name: "PREMIUM",
                    percentage: stats.premium_units * 100 / stats.total_units
                },
            ]);
        });
    }, []);

    useEffect(() => {
        setLoadPage(true);
        getEmployeePage(id, page).then(washes => {
            setWashes(washes)
            setLoadPage(false);
        });
    }, [page]);

    const handleEdit = (e) => {
        setDisabled(true);
        setLoadEdit(true);
        e.preventDefault();
        router.push(`/employees/${employee.id}/edit`);
    }

    const handleDelete = async (e) => {
        setDisabled(true);
        setLoadDelete(true);
        e.preventDefault();
        const response = await axios.delete(`/api/employees/${employee.id}`);
        router.push(`/employees`);
    }

    if(!employee && !stats)
    return(
        <Center style={{height: "80vh"}}>
            <Loader variant="dots" size="xl" color="yellow"/>:
        </Center>
    );

    return(
        <Stack m={10} mb={70} spacing="xl">
            <Title order={1}>
                {
                    `${employee?.firstname} ${employee?.middlename} ${employee?.lastname1} ${employee?.lastname2}`
                }
            </Title>

            <Grid>
                <Grid.Col span={6} align="center">
                    <Paper p="md">
                        <Stack>
                            <Title order={5}>Unidades</Title>
                        </Stack>
                        <Stack>
                            <Title order={2}>{stats?.total_units}</Title>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={6} align="center">
                    <Paper p="md">
                        <Stack>
                            <Title order={5}>Tiempo prom</Title>
                        </Stack>
                        <Stack>
                            <Title order={2}>{stats?.total_average_time}</Title>
                        </Stack>
                    </Paper>
                </Grid.Col>
            </Grid>

            <Title order={3}>Unidades por servicio</Title>
            <ResponsiveContainer height={300} width="100%">
                <BarChart data={unitsData}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar name="Unidades" dataKey="units" fill="#2980b9"/>
                </BarChart>
            </ResponsiveContainer>

            <Title order={3}>Tiempo promedio por servicio</Title>
            <ResponsiveContainer height={300} width="100%">
                <BarChart data={timeData}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Bar name="Tiempo promedio" dataKey="average_time" fill="#F5B041"/>
                </BarChart>
            </ResponsiveContainer>

            <Title order={3}>Porcentaje de unidades por servicio</Title>
            <ResponsiveContainer height={300} width="100%">
                <PieChart>
                    <Tooltip/>
                    <Pie data={percentageData} dataKey="percentage" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#2980b9"/>
                </PieChart>
            </ResponsiveContainer>

            <Title order={3}>Lavados terminados</Title>
            {
                loadPage?
                <Center>
                    <Loader variant="dots" size="xl" color="yellow"/>:
                </Center>:
                washes?.map(wash => <Wash key={wash.id} wash={wash} employee={employee} removeWash={() => console.log("Delete pressed...")}/>)
            }
            <Pagination total={Math.ceil(stats?.total_units / 5)} page={page} onChange={setPage} position="center"/>

            <Grid>
                <Grid.Col span={6} align="center">
                    <Button leftIcon={<MdEdit/>} onClick={handleEdit} loading={loadEdit} disabled={disabled}>Editar</Button>
                </Grid.Col>
                <Grid.Col span={6} align="center">
                    <Button leftIcon={<MdPersonRemove/>} color="red" onClick={handleDelete} loading={loadDelete} disabled={disabled}>Eliminar</Button>
                </Grid.Col>
            </Grid>
            <Center>
            </Center>
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

    return {
        props: {
            user: session ? session.user : null,
            id: ctx.query.id
        }
    }
}