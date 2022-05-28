import { Modal } from '@mantine/core';
import { MultiSelect } from '@mantine/core';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';
import { Grid } from '@mantine/core';
import { NumberInput } from '@mantine/core';
import { Select } from '@mantine/core';

import { MdCancel } from 'react-icons/md'
import { MdCreate } from 'react-icons/md'
import { useEffect } from 'react';
import { useState } from 'react';

import { brands } from '../constants/brands';

const axios =  require('axios').default;

export default function NewWashModal({opened, setOpened})
{
    const [employeesSelectorData, setEmployeesSelectorData] = useState([]);
    const [servicesSelectorData, setServicesSelectorData] = useState([]);
    const [brandsSelectorData, setBrandsSelectorData] = useState([]);
    const [modelsSelectorData, setModelsSelectorData] = useState([]);
    
    const [minutes, setMinutes] = useState(0);
    const [employees, setEmployees] = useState([]);
    const [service, setService] = useState("1");
    const [brand, setBrand] = useState("ACURA");
    const [model, setModel] = useState("1");
    const [carColor, setCarColor] = useState("Blanco");

    const handleBrandChange = (brandName) => {
        setBrand(brandName);
        const models = brands.find(brand => brand.name === brandName).models;
        setModelsSelectorData(models.map(model => {
            return {
                value: model,
                label: model
            }
        }));
        setModel(models[0]);

    }

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
                    value: `${service.id}`,
                    label: `${service.name}`
                }
            }));
        }

        setBrandsSelectorData(brands.map(brand => {
            return {
                value: `${brand.name}`,
                label: `${brand.name}`
            }
        }))

        getEmployees();
        getServices();
        
    }, []);

    const handleCreateWash = async (e) => {
        e.preventDefault();
        if(employees.length > 0)
        {
            const response = await axios.post('/api/ongoing', {
                date: Date.now(),
                time: minutes,
                employees: employees,
                service: service,
                brand: brand,
                model: model,
                color: carColor
            });
        }
    }

    return(
        <Modal centered opened={opened} onClose={() => setOpened(!opened)} title="Nuevo lavado" size="full">
            <form onSubmit={handleCreateWash}>    
                <Grid gutter="lg">
                    <Grid.Col span={12}>
                        <MultiSelect required searchable data={employeesSelectorData} onChange={setEmployees} label="Secador(es)"/>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Select searchable value={service} onChange={setService} data={servicesSelectorData} label="Servicio"/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <NumberInput label="Tiempo (min)" value={minutes} onChange={setMinutes} min={0}/>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Title order={6}>Unidad</Title>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Select searchable value={brand} onChange={handleBrandChange} data={brandsSelectorData} label="Marca"/>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Select searchable value={model} onChange={setModel} data={modelsSelectorData} label="Modelo"/>
                    </Grid.Col>
                    <Grid.Col span={4} align="center">
                        <Select label="Color" value={carColor} onChange={setCarColor} data={[
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
                        <Button type='submit' leftIcon={<MdCreate/>} color="teal">Crear</Button>
                    </Grid.Col>
                    <Grid.Col span={6} align="center">
                        <Button leftIcon={<MdCancel/>} color="red" onClick={() => setOpened(!opened)}>Cancelar</Button>
                    </Grid.Col>
                </Grid>
            </form>
            
            



        </Modal>
    );
}