import React, { useState } from 'react';
import { 
  Box, 
  Grid, 
  TextField, 
  Button, 
} from '@mui/material';

const Dell = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productDetails: '',
    price: '',
    imageUrl: '',
  });

  const [errors, setErrors] = useState({
    productName: '',
    productDetails: '',
    price: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the corresponding error message
    setErrors({
      ...errors,
      [name]: '',
    });

    // Live validation based on the field being edited
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';

    switch (name) {
      case 'productName':
        // Check if product name contains numbers
        if (/\d/.test(value)) {
          errorMessage = 'Product name should not contain numbers.';
        }
        break;
      case 'price':
        // Check if price contains letters or is non-positive
        if (!/^\d*\.?\d*$/.test(value)) {
          errorMessage = 'Price should be a positive number without letters.';
        }
        break;
      case 'productDetails':
        // Validate product details (e.g., required)
        if (!value) {
          errorMessage = 'Product details are required.';
        }
        break;
      case 'imageUrl':
        // Validate image URL (e.g., required)
        if (!value) {
          errorMessage = 'Image URL is required.';
        } else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp)$/.test(value)) {
          errorMessage = 'Please enter a valid image URL.';
        }
        break;
      default:
        break;
    }

    // Update the error state
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Final validation before submission
    if (!Object.values(errors).some((error) => error)) {
      console.log('Form Data:', formData);
      alert('Form submitted successfully!');
      // Reset form data if needed
      setFormData({
        productName: '',
        productDetails: '',
        price: '',
        imageUrl: '',
      });
    } else {
      alert('Please fix the errors before submitting the form.');
    }
  };

  const buttonStyle = {
    backgroundColor: '#E50914',
    color: 'white',
    padding: '10px 70px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
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
            error={!!errors.productName}
            helperText={errors.productName} // Display error message
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="productDetails"
            label="Product Details"
            fullWidth
            value={formData.productDetails}
            onChange={handleChange}
            error={!!errors.productDetails}
            helperText={errors.productDetails} // Display error message
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="price"
            label="Price"
            type="text"
            fullWidth
            value={formData.price}
            onChange={handleChange}
            error={!!errors.price}
            helperText={errors.price} // Display error message
            sx={textFieldStyles}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="imageUrl"
            label="Image URL"
            fullWidth
            value={formData.imageUrl}
            onChange={handleChange}
            error={!!errors.imageUrl}
            helperText={errors.imageUrl} // Display error message
            sx={textFieldStyles}
          />
        </Grid>
      </Grid>
      <div className='btncls'>
        <button style={buttonStyle} type="submit">
          Click Me
        </button>
      </div>
    </Box>
  );
};

// Styles for the TextField
const textFieldStyles = {
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E50914',
    },
    '&:hover fieldset': {
      borderColor: '#E50914',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#E50914',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'white',
    opacity: 1,
  },
};

export default Dell;
