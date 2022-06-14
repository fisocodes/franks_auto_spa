import { Modal } from '@mantine/core';
import { Title } from '@mantine/core';
import { Button } from '@mantine/core';
import { Grid } from '@mantine/core';
import { Select } from '@mantine/core';

import { MdCancel } from 'react-icons/md'
import { MdCreate } from 'react-icons/md'
import { useEffect } from 'react';
import { useState } from 'react';

import { brands } from '../constants/brands';
import { services } from '../constants/services';
import { colours } from '../constants/colours';

const axios =  require('axios').default;

export default function NewWashModal({opened, setOpened})
{
    const [employeesSelectorData, setEmployeesSelectorData] = useState([]);
    
    const servicesSelectorData = services.map(service => {
        return {
            value: `${service}`,
            label: `${service}`
        }
    });

    const brandsSelectorData = brands.map(brand => {
        return {
            value: `${brand.name}`,
            label: `${brand.name}`
        }
    });

    const [modelsSelectorData, setModelsSelectorData] = useState([]);
    const colourSelectorData = colours.map(colour => {
        return {
            value: `${colour}`,
            label: `${colour}`
        }
    });
    
    const [employee, setEmployee] = useState("0");
    const [service, setService] = useState("EXPRESS");
    const [brand, setBrand] = useState("ABARTH");
    const [model, setModel] = useState("124 SPIDER");
    const [colour, setColour] = useState("BLANCO");

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
                    value: `${employee.id}`,
                    label: `${employee.firstname} ${employee.lastname1}`
                }
            }));
        }

        getEmployees();
        
    }, []);

    const handleCreateWash = async (e) => {
        e.preventDefault();
        const response = await axios.post('/api/ongoing/new', {
            date: Date.now(),
            employee_id: employee,
            service: service,
            unit: {
                brand: brand,
                model: model,
                colour: colour
            }
        });
        setOpened(!opened);
    }

    return(
        <Modal centered opened={opened} onClose={() => setOpened(!opened)} title="Nuevo lavado" size="full">
            <form onSubmit={handleCreateWash}>    
                <Grid gutter="lg">
                    <Grid.Col span={12}>
                        <Select required searchable data={employeesSelectorData} onChange={setEmployee} label="Secador(es)"/>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Select searchable value={service} onChange={setService} data={servicesSelectorData} label="Servicio"/>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Title order={6}>Unidad</Title>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Select searchable value={brand} onChange={handleBrandChange} data={brandsSelectorData} label="Marca"/>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Select searchable value={model} onChange={setModel} data={modelsSelectorData} label="Modelo"/>
                    </Grid.Col>
                    <Grid.Col span={12} align="center">
                        <Select label="Color" value={colour} onChange={setColour} data={colourSelectorData}/>
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