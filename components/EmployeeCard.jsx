import { useRouter } from "next/router";

import { Card } from "@mantine/core";
import { Grid } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { Title } from "@mantine/core";
import { Badge } from '@mantine/core';

import ViewButton from "./buttons/ViewButton";

export default function EmployeeCard({employee}){
    const router = useRouter();

    const handleView = () => {
        router.push(`/employees/${employee.id}`);
    }

    return(
        <Card>
            <Grid align="center">
                <Grid.Col span={4}>
                    <Avatar size="lg">
                        {
                            `${employee.firstname.toUpperCase()[0]} ${employee.lastname1.toUpperCase()[0]}`
                        }
                    </Avatar>
                </Grid.Col>
                <Grid.Col span={8}>
                    <Title order={4}>{`${employee.firstname} ${employee.lastname1}`}</Title>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Badge color="yellow" variant="outline">{`Unidades: ${employee.total_units}`}</Badge>
                </Grid.Col>
                <Grid.Col span={6}>
                    
                </Grid.Col>
                <Grid.Col span={6}>
                    <Badge color="blue" variant="outline">{`Tiempo prom: ${employee.total_average_time}`}</Badge>
                </Grid.Col>
                <Grid.Col span={6} align="right">
                    <ViewButton onClick={handleView}/>
                </Grid.Col>
            </Grid>
        </Card>
    );
}