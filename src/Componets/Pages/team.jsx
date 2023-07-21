import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import TeamMember from './TeamMember';
import PravinImage from './Images/Pravin_Image.jpeg';

const teamMembersData = [
  {
    name: 'Chetan Parmar',
    role: 'Advisor',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Mukul Jaggi',
    role: 'Advisor',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Hari Sankar',
    role: 'Hacker',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Hiren Bhanushali',
    role: 'Hacker',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'AnandKumar Shukla ',
    role: 'Hacker',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Manjiri Kadam',
    role: 'Hacker',
    image: 'https://via.placeholder.com/150',
  },
  {
    name: 'Pravin Maragale',
    role: 'Hacker',
    image: PravinImage,
  },
  // Add more team members data here...
];

const team = () => {
  return (
    <Box mt={4} mx={2}>
      <Typography variant="h4" gutterBottom align='center' paddingBottom={'10px'} marginTop={'100px'}>
        Our Team
      </Typography>
      <Grid container spacing={2}>
        {teamMembersData.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <TeamMember name={member.name} role={member.role} image={member.image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default team;
