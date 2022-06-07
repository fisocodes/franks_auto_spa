import { useRouter } from "next/router";
import { useState } from "react";

import { Card } from "@mantine/core";
import { Group } from "@mantine/core";
import { Avatar } from "@mantine/core";
import { Title } from "@mantine/core";
import { Button } from "@mantine/core";

import { MdVisibility } from 'react-icons/md';

export default function EmployeeCard({employee}){
    const router = useRouter();
    const [loadView, setLoadView] = useState(false);

    const handleView = () => {
        setLoadView(true);
        router.push(`/employees/${employee.id}`);
    }

    return(
        <Card>
            <Group position="apart">
                <Avatar size="lg">
                    {
                        `${employee.firstname.toUpperCase()[0]} ${employee.lastname1.toUpperCase()[0]}`
                    }
                </Avatar>
                <Title order={4}>{`${employee.firstname} ${employee.lastname1}`}</Title>
                <Button leftIcon={<MdVisibility/>} onClick={handleView} loading={loadView}>Ver</Button>
            </Group>
        </Card>
    );
}