import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Chip from '@mui/material/Chip';

import NavBar from '../../components/NavBar';

import { useRouter } from "next/router";
import { getSession } from 'next-auth/react';

export default ({user, employees}) => {

    const router = useRouter();

    return (
        <>
            <NavBar user={user}/>
            <Stack m={2} spacing={2}>
                <Typography variant="h3" component="div">SECADORES</Typography>
                <Grid container>
                    <Grid item xs={8} align="center">
                        <Autocomplete size='small' multiple limitTags={1} options={employees} getOptionLabel={(employee) => `${employee.name} ${employee.surname}`} renderInput={(params) => <TextField {...params}/>} />
                    </Grid>
                    <Grid item xs={4} align="center">
                        <Button size="large" startIcon={<AddCircleIcon fontSize="large"/>} onClick={() => router.push(router.pathname + "/new")}>Nuevo</Button>
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);

    const employees = [
        {
            id: 1,
            name: "Gabriel",
            surname: "Ramos",
            status: true
        },
        {
            id: 2,
            name: "Karim",
            surname: "Gonzales",
            status: true
        },
        {
            id: 3,
            name: "Cristian",
            surname: "Tena",
            status: true
        },
        {
            id: 4,
            name: "Martin",
            surname: "Ramos",
            status: true
        },
        {
            id: 5,
            name: "Jose",
            surname: "Garcia",
            status: true
        }
    ];

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
            employees
        }
    }
}