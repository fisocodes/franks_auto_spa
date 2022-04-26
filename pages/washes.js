import { getSession } from "next-auth/react";

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import NavBar from "../components/NavBar";
import OngoingWash from "../components/OngoingWash";

export default ({user, ongoing}) => {

    return (
        <>
            <NavBar user={user}/>
            <Stack m={2} spacing={2}>
                <Typography variant="h3" component="div">LAVADOS</Typography>
                <Typography variant="h5" component="div" textAlign="center">En curso</Typography>
                {
                    ongoing.map( wash => <OngoingWash wash={wash}/>)
                }
                <Typography variant="h5" component="div" textAlign="center">Finalizados</Typography>
            </Stack>
        </>
    );
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);

    const ongoing = [
        {
            employee: "Gabriel Ramos",
            start: new Date(2022, 3, 24, 15, 31, 51).toISOString(),
            unit: "Nissan Versa",
            color: "Rojo",
            status: true
        },
        {
            employee: "Karim Gonzales",
            start: new Date(2022, 3, 24, 15, 22, 11).toISOString(),
            unit: "Toyota Tacoma",
            color: "Blanco",
            status: true
        },
        {
            employee: "Cristian Tena",
            start: new Date(2022, 3, 24, 15, 27, 32).toISOString(),
            unit: "Mazda CX-3",
            color: "Negro",
            status: true
        },
    ]

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
            ongoing,
        }
    }
}