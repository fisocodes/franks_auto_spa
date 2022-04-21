import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NavBar()
{

    const [user, setUser] =  useState({name: "Oscar", email: "fisocodes@gmail.com"});
    const [isDrawer, setIsDrawer] = useState(false);
    const router = useRouter();

    const handleNav = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        setIsDrawer(false);

        setTimeout(() => {
            router.push(href)
        }, 200);
    }

    return(
        <>
            <AppBar position='sticky'>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={4} align="left">
                            {
                                user && <IconButton color="inherit" onClick={() => setIsDrawer(true)}><MenuIcon/></IconButton> 
                            }
                        </Grid>
                        <Grid item xs={4} align="center">
                            <Avatar variant="square" src="https://franksautospa.mx/wp-content/uploads/2021/09/logo.png"/>
                        </Grid>
                        <Grid item xs={4} align="right">
                            {
                                user ? 
                                <Avatar>{user.name[0].toUpperCase()}</Avatar>
                                :
                                <Button color="inherit">Log In</Button>
                            }
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrawer} onClose={() => setIsDrawer(false)}>
                <Stack alignItems="center" mt={3}>
                    <Avatar sx={{width: 75, height: 75}}>{user ? user.name[0].toUpperCase() : null}</Avatar>
                    <List>
                        <ListItem>
                           <ListItemText>{user ? user.name.toUpperCase() : null}</ListItemText> 
                        </ListItem>
                        <ListItem>
                            <ListItemButton sx={{p: 0}}>
                                <ListItemIcon>
                                    <LogoutIcon/>
                                </ListItemIcon>
                                <ListItemText>Cerrar sesión</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Stack>
                <Divider/>
                <List>
                    <ListItem>
                        <ListItemButton sx={{p: 0}} href="/" onClick={handleNav}>
                            <ListItemIcon>
                                <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText>Panel</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{p: 0}} href="/employees" onClick={handleNav}>
                            <ListItemIcon>
                                <PersonIcon/>
                            </ListItemIcon>
                            <ListItemText>Secadores</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton sx={{p: 0}} href="/washes" onClick={handleNav}>
                            <ListItemIcon>
                                <LocalCarWashIcon/>
                            </ListItemIcon>
                            <ListItemText>Lavados</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}