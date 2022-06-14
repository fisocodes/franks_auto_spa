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
        router.push(`/employees/${employee.id}/edit`);
    }

    const handleDelete = async (e) => {
        setDisabled(true);
        setLoadDelete(true);
        e.preventDefault();
        const response = await axios.delete(`/api/employees/${employee.id}`);
        router.push(`/employees`);
    }

    const [data_units, setData] = useState([]);
    const [data_times, setTimes] = useState([]);
    const [data_porcentage, setPorcentage] = useState([]);

    const data = {
        labels: ['Express', 'Master', 'Premium'],
        datasets: [{
            label: [' '],
            backgroundColor: ['#6a994e','#4ea8de','#f08080'],
            borderColor: ['#90a955','#56cfe1','#f4978e'],
            borderwidth: 1,
            hoverBackgroundColor: ['#90a955','#56cfe1','#f4978e'], 
            hoverBorderColor: ['#6a994e','#4ea8de','#f08080'],
            data: data_units
        }]
    };
    
    const time = {
        labels: ['Express', 'Master', 'Premium'],
        datasets: [{
            label: ' ',
            backgroundColor: ['#6a994e','#4ea8de','#f08080'],
            borderColor: ['#90a955','#56cfe1','#f4978e'],
            borderwidth: 1,
            hoverBackgroundColor: ['#90a955','#c56cfe1','#f4978e'],
            hoverBorderColor: ['#6a994e','#4ea8de','#f08080'],
            data: data_times
        }]
    };

    const porcentage = {
        labels: ['Express', 'Master', 'Premium'],
        datasets: [{
            label: 'Promedio Total',
            backgroundColor: ['#6a994e','#4ea8de','#f08080'],
            borderColor: ['#6a994e','#4ea8de','#f08080'],
            borderwidth: 1,
            hoverBackgroundColor: ['#90a955','#56cfe1','#f4978e'],
            hoverBorderColor: ['#6a994e','#4ea8de','#f08080'],
            data: data_porcentage
        }]
    };

    const graphicConfig = {
        maintainAspectRatio: false,
        responsive: true
    }

    const petitionApi = async()=>{
        await axios.get(`/api/employees/${employee.id}/stats`)
        .then(response=>{
            var respuesta = response.data.stats;
            setData([respuesta.express_units, respuesta.master_units, respuesta.premium_units]);
            var times = response.data.stats;
            setTimes([times.express_average_time, times.master_average_time, times.premium_average_time]);

            var porE = (respuesta.express_units * 100)/respuesta.total_units;
            var porM = (respuesta.master_units * 100)/respuesta.total_units;
            var porP = (respuesta.premium_units * 100)/respuesta.total_units;
            setPorcentage([porE, porM, porP]);
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
                    <h2>Unidades por servicio</h2>
                    <Bar data= {data} options={graphicConfig}/>
                </div>
            </Stack>   

            <Stack mb={80}>
                <div className="Employee" style={{width: '100%', height: '500px'}}>
                    <h2>Tiempos promedio por servicio</h2>
                    <Bar data= {time} options={graphicConfig}/>
                </div>
            </Stack>  

            <Stack mb={80}>
                <div className="Employee" style={{width: '100%', height: '500px'}}>
                    <h2>Promedios total por servicio</h2>
                    <Doughnut data= {porcentage} options={graphicConfig}/>
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