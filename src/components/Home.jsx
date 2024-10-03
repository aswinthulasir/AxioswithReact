import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import axios from 'axios';

// Custom styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 'bold',
  fontSize: 16,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const Home = () => {
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
    <TableContainer component={Paper} sx={{ mt: 4, boxShadow: 3, borderRadius: 2 }}>
      <Table sx={{ minWidth: 700 }} aria-label="product table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Title</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">
                <img src={row.image} alt={row.title} style={{ width: 50, height: 50 }} />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


          





  );






};

export default Home;
