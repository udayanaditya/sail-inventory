import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <Box
      className="page-container"
      sx={{
        backgroundImage: 'url(/steel-plant-2.jpg)',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Paper className="content-overlay">
          <Typography variant="h3" component="h1" gutterBottom>
            About SAIL
          </Typography>
          <Typography variant="body1" paragraph>
            Steel Authority of India Limited (SAIL) is one of India's largest state-owned steel making companies and one of the top steel makers in the world. Established in 1954, SAIL produces iron and steel at five integrated plants and three special steel plants, located principally in the eastern and central regions of India.
          </Typography>
          <Typography variant="body1" paragraph>
            Our inventory management system helps maintain efficient control over our vast resources across multiple plants and locations. This system enables real-time tracking of materials, ensuring smooth operations and optimal resource utilization.
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            To be a respected world-class corporation and the leader in Indian steel business in quality, productivity, profitability and customer satisfaction.
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph>
            To be a respected world-class corporation and the leader in Indian steel business in quality, productivity, profitability and customer satisfaction.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;