import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { useStopwatch } from 'react-timer-hook';

export default function OngoingWash({wash}){

    const washDate = new Date(wash.start);
    const date = new Date();
    const s = (date - washDate) / 1000;
    date.setSeconds(date.getSeconds() + s);

    const { seconds, minutes, hours} = useStopwatch({autoStart: true, offsetTimestamp: date});

    return(
        <Card sx={{borderRadius: 3}} elevation={0}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Typography variant="h6" align="center">{wash.employee}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6"  align="center">{`${hours} : ${minutes} : ${seconds}`}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography align="center">{new Date(wash.start).toLocaleString()}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography align="center">{wash.unit}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography align="center">{wash.color}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button>Finalizar</Button>
                <Button color="error">Eliminar</Button>
            </CardActions>
        </Card>
    )

}