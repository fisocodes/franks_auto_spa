import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from 'react';

import { Stack } from '@mantine/core';
import { Grid } from "@mantine/core";
import { Center } from '@mantine/core';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';

import { MdPersonRemove } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { useState } from "react";
import React from "react";
import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import {Chart} from "chart.js/auto";

const axios =  require('axios').default;

export default function Employee({employee, setTitle}){
    const router = useRouter();

    const [loadEdit, setLoadEdit] = useState(false);
    const [loadDelete, setLoadDelete] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => setTitle('Secador'), []);

    const handleEdit = (e) => {
        setDisabled(true);
        setLoadEdit(true);
        e.preventDefault();
        router.push(`/employees/edit/${employee.id}`);
    }

    const handleDelete = async (e) => {
        setDisabled(true);
        setLoadDelete(true);
        e.preventDefault();
        const response = await axios.delete('/api/employees/delete', {data: {id: employee.id}});
        router.push(`/employees/edit/${employee.id}`);
    }

    const [data_units, setData] = useState([]);
    const [data_times, setTimes] = useState([]);
    const [data_total, setTotal] = useState([]);

    const data = {
        labels: ['Express', 'Master', 'Premium'],
        datasets: [{
            label: 'Servicios',
            backgroundcolor: 'rgba(0,255,0,1)',
            bordercolor: 'black',
            borderwidth: 1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#FF0000',
            data: data_units
        }]
    };
    
    const time = {
        labels: ['Express_Tiempos', 'Master_Tiempos', 'Premium_Tiempos'],
        datasets: [{
            label: 'Tiempos',
            backgroundcolor: 'rgba(0,255,0,1)',
            bordercolor: 'black',
            borderwidth: 1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#FF0000',
            data: data_times
        }]
    };

    const total = {
        labels: ['Total_Unidades', 'Total_Tiempos'],
        datasets: [{
            label: 'Promedio Total',
            backgroundcolor: 'rgba(0,255,0,1)',
            bordercolor: 'black',
            borderwidth: 1,
            hoverBackgroundColor: 'rgba(0,255,0,0.2)',
            hoverBorderColor: '#FF0000',
            data: data_total
        }]
    };

    const graphicConfig = {
        maintainAspectRatio: false,
        responsive: true
    }

    const petitionApi = async()=>{
        await axios.get(`/api/employees/stats`,{params: {id: employee.id}})
        .then(response=>{
            var respuesta = response.data.stats;
            setData([respuesta.express_units, respuesta.master_units, respuesta.premium_units]);
            var times = response.data.stats;
            setTimes([times.express_average_time, times.master_average_time, times.premium_average_time]);
            var times = response.data.stats;
            setTimes([times.express_average_time, times.master_average_time, times.premium_average_time]);
            var totals = response.data.stats;
            setTotal([totals.total_units, totals.total_average_time]);
        })
    }
    
    useEffect(()=>{
        petitionApi();
    },[])


    return(
        <Stack m={10} mb={70}>
            <Title order={1}>
                {
                    `${employee.firstname} ${employee.middlename} ${employee.lastname1} ${employee.lastname2}`
                }
            </Title>
            <Stack mb={80}>
                <div className="Employee" style={{width: '100%', height: '500px'}}>
                    <h2>Unidades por Servicios</h2>
                    <Bar data= {data} options={graphicConfig}/>
                </div>
            </Stack>   

            <Stack mb={80}>
                <div className="Employee" style={{width: '100%', height: '500px'}}>
                    <h2>Tiempos por Servicio</h2>
                    <Bar data= {time} options={graphicConfig}/>
                </div>
            </Stack>  

            <Stack mb={80}>
                <div className="Employee" style={{width: '100%', height: '500px'}}>
                    <h2>Promedios Total</h2>
                    <Doughnut data= {total} options={graphicConfig}/>
                </div>
            </Stack>  

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

    const response =  await axios.get(`${process.env.BASE_URL}/api/employees/${ctx.query.id}`);
    const employee = response.data.employee;

    if(!employee)
        return {
            redirect: {
                destination: "/employees",
                permanent: false
            }
        }

    return {
        props: {
            user: session ? session.user : null,
            employee: employee
        }
    }
}