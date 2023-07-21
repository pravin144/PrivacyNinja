import React from 'react';
import { Box, Typography} from '@mui/material'

const about = () => {
  return (
    <Box mt={4} mx={2}>
      <Typography variant="h4" gutterBottom marginTop={'100px'} align='center' marginBottom={'20px'}>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan
        accumsan tortor, at aliquam lorem posuere quis. Quisque consequat, odio
        in blandit accumsan, nunc sapien auctor purus, at faucibus libero est
        in odio. Etiam vitae ipsum ac tortor tristique congue at eget lacus.
      </Typography>
      <Typography variant="body1" paragraph>
        Vestibulum eu eros at neque elementum aliquam. Aenean in sapien eu erat
        congue lacinia. Nulla facilisi. In ullamcorper ipsum in quam
        ullamcorper, at ultricies velit viverra. Vivamus ullamcorper elit eu
        quam consequat, in tristique mi malesuada.
      </Typography>
    </Box>
  );
};

export default about;
