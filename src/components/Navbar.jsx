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
  <AppBar position="fixed" sx={{ width: '100%', bgcolor: '#000000' }}>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
            
          </IconButton>
          <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          fontWeight: 'bold', // Use lowercase 'bold'
          color: '#E50914',
          ml: 1, 
        }}
      >
        PRODUCT STORE
      </Typography>
         <Link to={'/'}> <Button variant="contained"sx={{ backgroundColor: '#E50914', color: 'white',margin: '5px', '&:hover': {backgroundColor: '#B20710',},}}>Home</Button></Link>
         <Link to={'/add'}><Button variant="contained"sx={{ backgroundColor: '#E50914', color: 'white', margin: '5px', '&:hover': {backgroundColor: '#B20710',},}}>Products</Button></Link>
         <Link to={'/dell'}><Button variant="contained"sx={{ backgroundColor: '#E50914', color: 'white', margin: '5px', '&:hover': {backgroundColor: '#B20710',},}}>Sell</Button></Link>
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