import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Aside } from '@mantine/core';

export default function NewEmployee({open, setOpen}){

    return(
        <Modal open={open}>
            <Paper>
                <Grid container>
                    <Grid item xs={6} align="center">
                        <Button>Crear</Button>
                    </Grid>
                    <Grid item xs={6} align="center">
                        <Button color="error" onClick={() => setOpen(false)}>Cancelar</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Modal>
    );
}