import { useRouter } from "next/router";

import { Card } from "@mantine/core";
import { Group } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { Title } from "@mantine/core";

export default function EmployeeCard({employee}){
    const router = useRouter();

    const handleClick = () => {
        router.push(`/employees/${employee.id}`);
    }

    return(
        <Card onClick={handleClick}>
            <Group>
                <Avatar size="lg">
                    {
                        `${employee.firstname.toUpperCase()[0]} ${employee.lastname1.toUpperCase()[0]}`
                    }
                </Avatar>
                <Title order={4}>{`${employee.firstname} ${employee.lastname1}`}</Title>
            </Group>
        </Card>
    );
}