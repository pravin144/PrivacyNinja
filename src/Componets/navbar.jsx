import React from 'react';
import { AppBar, Toolbar, Typography, Button,IconButton } from '@mui/material';
import {Link } from 'react-router-dom';
import YourImageIcon from './Pages/Images/Ninja_Icon.png';


const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" size='10px'>
          <img src={YourImageIcon} alt="Icon" width={'50'} height={'50px'}/>
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Privacy Ninja
        </Typography>
        <Button color="inherit" component={Link} to='/'>Home</Button>
        <Button color="inherit" component={Link}to ='/about'>About</Button>
        <Button color="inherit" component={Link} to='/ourTeam'>Team</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
