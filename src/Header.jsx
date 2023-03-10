import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMui from './DrawerMui'; 
import PersonIcon from '@mui/icons-material/Person';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar >
        <Toolbar>

        <DrawerMui/>
           <IconButton 
           
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
            <MenuIcon />
          </IconButton> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
Acceuil          </Typography>
          <Button color="inherit">Déconnection</Button>
          
        </Toolbar>
      </AppBar>
    </Box>



  );
}