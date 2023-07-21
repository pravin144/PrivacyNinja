import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

const TeamMember = ({ name, role, image }) => {
  return (
    <Box p={2}>
      <Avatar alt={name} src={image} style={{ width: 150, height: 150, marginBottom: 10 }} />
      <Typography variant="h6" gutterBottom marginLeft={'10px'}>
        {name}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" marginLeft={'50px'}>
        {role}
      </Typography>
    </Box>
  );
};

export default TeamMember;
