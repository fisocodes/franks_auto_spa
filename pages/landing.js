import { getSession } from "next-auth/react";
import { useEffect } from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import CountUp from 'react-countup';

import LandingHeader from "../components/LandingHeader"
import NavBar from "../components/NavBar"

export default ({user}) => {

    useEffect(() => {
        console.log(user);
    });

    return (
        <>
            <NavBar user={user}/>
            <LandingHeader/>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <Card sx={{m: 2, borderRadius: 4}} elevation={0}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} align="center">
                                    <Typography variant="h5" component="div" align="center">Tiempo promedio</Typography>
                                </Grid>
                                <Grid item xs={12} align="center">
                                    <Typography variant="h5" component="div" align="center"><CountUp end={26} suffix=" min"/></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{m: 2, borderRadius: 4}} elevation={0}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} align="center">
                                    <Typography variant="h5" component="div" align="center">Unidades promedio</Typography>
                                </Grid>
                                <Grid item xs={12} align="center">
                                    <Typography variant="h5" component="div" align="center"><CountUp end={13} suffix=" u"/></Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Typography variant="h5" component="div" m={5} textAlign="center">Secadores</Typography>
            <Card sx={{m: 2, borderRadius: 4}} elevation={0}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6} align="center">
                            <Avatar>GR</Avatar>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="div" align="center">Gabriel Ramos</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="p" component="div" align="center">Tiempo promedio</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="p" component="div" align="center">Unidades promedio</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="p" component="div" align="center"><CountUp end={25} suffix=" min"/></Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="p" component="div" align="center"><CountUp end={16} suffix=" u"/></Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{m: 2, borderRadius: 4}} elevation={0}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center">Cristian Tena</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center"><CountUp end={28} suffix=" min"/></Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center"><CountUp end={14} suffix=" u"/></Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{m: 2, borderRadius: 4}} elevation={0}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center">Martin Ramos</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center"><CountUp end={29} suffix=" min"/></Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center"><CountUp end={12} suffix=" u"/></Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{m: 2, borderRadius: 4}} elevation={0}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center">Karim Gonzales</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center"><CountUp end={31} suffix=" min"/></Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center"><CountUp end={12} suffix=" u"/></Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{m: 2, borderRadius: 4}} elevation={0}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center">Paul Flores</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center"><CountUp end={32} suffix=" min"/></Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="p" component="div" align="center"><CountUp end={9} suffix=" u"/></Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export async function getServerSideProps(ctx){
    const session = await getSession(ctx);

    if(session)
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }

    return {
        props: {
            user: session ? session.user : null
        }
    }
}