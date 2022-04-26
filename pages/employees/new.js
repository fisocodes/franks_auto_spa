import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import NavBar from '../../components/NavBar';

import { getSession } from 'next-auth/react';

export default function New({user}){
    return(
        <>
            <NavBar user={user}/>
            <Stack m={2} spacing={2}>
                <Typography variant="h3" component="div">Nuevo secador</Typography>
            </Stack>
        </>
    )
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

    return {
        props: {
            user: session ? session.user : null
        }
    }
}