import { Card } from "@mantine/core";
import { Title } from "@mantine/core";
import { Text } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { Grid } from "@mantine/core";
import { MdDelete } from 'react-icons/md';

const axios =  require('axios').default;

export default function Wash({wash, employee, removeWash}){

    const handleDelete = async () => {
        const deleteResponse = await axios.delete('api/washes/delete', {data: {wash: wash}});
        removeWash(wash.date);
        console.log(deleteResponse.data);
    }

    return(
        <Card>
            <Grid align="center" justify="center">
                <Grid.Col span={5}>
                    <Text>{new Date(wash.date).toLocaleDateString()}</Text>
                </Grid.Col>
                <Grid.Col span={5}>
                    <Title order={5}>{`${employee.firstname} ${employee.lastname1}`}</Title>
                </Grid.Col>
                <Grid.Col span={2} align="center">
                    <ActionIcon variant="filled" color="red" onClick={handleDelete}>
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
    )

}