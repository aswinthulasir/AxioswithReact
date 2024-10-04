import React, { useEffect, useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  CardActions,  
  Container, 
  TextField, 
  Grid, 
  Box 
} from '@mui/material';
import axios from 'axios';

const Dell = () => {
    const [formData, setFormData] = React.useState({
        productName: '',
        productDetails: '',
        price: '',
        imageUrl: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic
        console.log('Form Data:', formData);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="productName"
              label="Product Name"
              fullWidth
              value={formData.productName}
              onChange={handleChange}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'white', // Text color
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#E50914', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#E50914', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#E50914', // Border color on focus
                  },
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'white', // Placeholder color
                  opacity: 1, // Make sure the placeholder is fully opaque
                },
              }}
              InputLabelProps={{
                style: { color: 'white' }, // Label color
              }}
              placeholder="Enter product name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="productDetails"
              label="Product Details"
              fullWidth
              value={formData.productDetails}
              onChange={handleChange}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'white', // Text color
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#E50914', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#E50914', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#E50914', // Border color on focus
                  },
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'white', // Placeholder color
                  opacity: 1, // Make sure the placeholder is fully opaque
                },
              }}
              InputLabelProps={{
                style: { color: 'white' }, // Label color
              }}
              placeholder="Enter product details"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="price"
              label="Price"
              type="number"
              fullWidth
              value={formData.price}
              onChange={handleChange}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'white', // Text color
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#E50914', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#E50914', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#E50914', // Border color on focus
                  },
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'white', // Placeholder color
                  opacity: 1, // Make sure the placeholder is fully opaque
                },
              }}
              InputLabelProps={{
                style: { color: 'white' }, // Label color
              }}
              placeholder="Enter price"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="imageUrl"
              label="Image URL"
              fullWidth
              value={formData.imageUrl}
              onChange={handleChange}
              sx={{
                '& .MuiInputBase-input': {
                  color: 'white', // Text color
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // Label color
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#E50914', // Border color
                  },
                  '&:hover fieldset': {
                    borderColor: '#E50914', // Border color on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#E50914', // Border color on focus
                  },
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'white', // Placeholder color
                  opacity: 1, // Make sure the placeholder is fully opaque
                },
              }}
              InputLabelProps={{
                style: { color: 'white' }, // Label color
              }}
              placeholder="Enter image URL"
            />
          </Grid>
        </Grid>
      </Box>
    );
};

export default Dell;
