import { Modal } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';
import { Grid } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { NumberInput } from '@mantine/core';
import { Select } from '@mantine/core';
import { ColorSwatch } from '@mantine/core';

import { MdCancel } from 'react-icons/md'
import { MdCreate } from 'react-icons/md'
import { useEffect } from 'react';
import { useState } from 'react';

const axios =  require('axios').default;

export default function NewWashModal({opened, setOpened})
{
    const [employeesSelectorData, setEmployeesSelectorData] = useState([]);
    const [servicesSelectorData, setServicesSelectorData] = useState([]);
    const [brandsSelectorData, setBrandsSelectorData] = useState([]);
    const [carColor, setCarColor] = useState('#FDFEFE');

    useEffect(() => {

        const getEmployees = async () => {
            const response =  await axios.get(`/api/employees`);
            const employees = response.data.employees.sort((a, b) => a.firstname > b.firstname ? 1 : (b.firstname > a.firstname ? -1 : 0));
            setEmployeesSelectorData(employees.map(employee => {
                return {
                    value: employee.id,
                    label: `${employee.firstname} ${employee.lastname1}`
                }
            }));
        }

        const getServices = async () => {
            const response =  await axios.get(`/api/services`);
            setServicesSelectorData(response.data.services.map(service => {
                return {
                    value: service.id,
                    label: `${service.name}`
                }
            }));
        }

        const getBrands = async () => {
            const response =  await axios.get(`/api/brands`);
            setBrandsSelectorData(response.data.brands.map(brand => {
                return {
                    value: brand.id,
                    label: `${brand.name}`
                }
            }));
        }

        getEmployees();
        getServices();
        getBrands();
        
    }, []);

    return(
        <Modal opened={opened} onClose={() => setOpened(!opened)} title="Nuevo lavado" size="full">
            <Grid gutter="lg">
                <Grid.Col span={8}>
                    <DatePicker label="Fecha" defaultValue={new Date()}/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <NumberInput label="Tiempo (min)" defaultValue={0} min={0}/>
                </Grid.Col>
                <Grid.Col span={12}>
                    <MultiSelect searchable data={employeesSelectorData} label="Secador(es)"/>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Select searchable data={servicesSelectorData} label="Servicio"/>
                </Grid.Col>
                <Grid.Col span={12}>
                    <Title order={6}>Unidad</Title>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Select searchable data={brandsSelectorData} label="Marca"/>
                </Grid.Col>
                <Grid.Col span={6} align="center">
                    <Select label="Color" data={[
                        {
                            value: 'Amarillo',
                            label: 'Amarillo'
                        },
                        {
                            value: 'Azul',
                            label: 'Azul'
                        },
                        {
                            value: 'Beige',
                            label: 'Beige'
                        },
                        {
                            value: 'Blanco',
                            label: 'Blanco'
                        },
                        {
                            value: 'Café',
                            label: 'Café'
                        },
                        {
                            value: 'Gris',
                            label: 'Gris'
                        },
                        
                        {
                            value: 'Negro',
                            label: 'Negro'
                        },
                        {
                            value: 'Naranja',
                            label: 'Naranja'
                        },
                        {
                            value: 'Rojo',
                            label: 'Rojo'
                        },
                        {
                            value: 'Verde',
                            label: 'Verde'
                        },   
                    ]}/>
                </Grid.Col>
                <Grid.Col span={6} align="center">
                    <Button  leftIcon={<MdCreate/>} color="teal">Crear</Button>
                </Grid.Col>
                <Grid.Col span={6} align="center">
                    <Button leftIcon={<MdCancel/>} color="red" onClick={() => setOpened(!opened)}>Cancelar</Button>
                </Grid.Col>
            </Grid>
            
            



        </Modal>
    );
}