import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Grid, Container } from '@mui/material';
import axios from 'axios';

const Add = () => {
  // State to manage form input values
  const [rows, setRows] = useState([]);

  // Fetching data from the external API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setRows(res.data); // Correct: using res.data to set rows
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
    <Grid container spacing={4}>
      {rows.map((row, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'black' }}>
            <CardMedia
              component="img"
              height="140"
              image={row.image}
              alt={row.title}
              
            />
            <CardContent sx={{ flexGrow: 1 , color:'white'}}>
              <Typography gutterBottom variant="h5" component="div">
                {row.title}
              </Typography>
              <Typography variant="body2" color='white'>
                {row.description.substring(0, 100)}... 
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                Price: ${row.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" sx={{color:'#e50914'}}>Buy Now</Button>
              <Button size="small">Add to cart</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
}

export default Add;
