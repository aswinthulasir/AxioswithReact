import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product Details
          </Typography>
         <Link to={'/'}> <Button variant="contained" color="primary">Home</Button></Link>
         <Link to={'/add'}><Button variant="contained" color="primary">Add</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar


//steps to add routes
//1.install the package
//2.inform that the application is going to use the routing by using browser router component in main.jsx
//3.add the routes to the respective links
//4.add link component