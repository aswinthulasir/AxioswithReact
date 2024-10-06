import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

// Custom styles for KPI cards (Red background and white text)
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: '#E50914', // Red background
  padding: theme.spacing(3),
  textAlign: 'center',
  color: '#FFFFFF', // White text
}));

// Line chart customization for white lines, labels, and text
const StyledLineChart = styled(LineChart)(({ theme }) => ({
  backgroundColor: '#E50914', // Red background
  color: '#FFFFFF', // White text
}));

const Home = () => {
  const [analyticsData, setAnalyticsData] = useState({
    totalSales: 0,
    totalUsers: 0,
    totalOrders: 0,
    chartData: [],
  });

  // Example of API call to fetch analytics data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/analytics');
        setAnalyticsData(response.data);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchData();
  }, []);

  // Dummy data for the chart
  const dummyChartData = [
    { month: 'Jan', sales: 400 },
    { month: 'Feb', sales: 300 },
    { month: 'Mar', sales: 500 },
    { month: 'Apr', sales: 700 },
    { month: 'May', sales: 600 },
  ];

  return (
    <Grid container spacing={3}>
      {/* Total Sales */}
      <Grid item xs={12} sm={4}>
        <StyledPaper>
          <Typography variant="h6">Total Sales</Typography>
          <Typography variant="h4">${analyticsData.totalSales}</Typography>
        </StyledPaper>
      </Grid>

      {/* Total Users */}
      <Grid item xs={12} sm={4}>
        <StyledPaper>
          <Typography variant="h6">Total Users</Typography>
          <Typography variant="h4">{analyticsData.totalUsers}</Typography>
        </StyledPaper>
      </Grid>

      {/* Total Orders */}
      <Grid item xs={12} sm={4}>
        <StyledPaper>
          <Typography variant="h6">Total Orders</Typography>
          <Typography variant="h4">{analyticsData.totalOrders}</Typography>
        </StyledPaper>
      </Grid>

      {/* Sales Chart */}
      <Grid item xs={12}>
        <Paper style={{ padding: '20px', backgroundColor: '#E50914', color: '#FFFFFF' }}>
          <Typography variant="h6" gutterBottom style={{ color: '#FFFFFF' }}>
            Sales Over Time
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <StyledLineChart data={dummyChartData}>
              <CartesianGrid stroke="#FFFFFF" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#FFFFFF" />
              <YAxis stroke="#FFFFFF" />
              <Tooltip contentStyle={{ backgroundColor: '#000000', color: '#FFFFFF' }} />
              <Line type="monotone" dataKey="sales" stroke="#FFFFFF" strokeWidth={2} />
            </StyledLineChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
