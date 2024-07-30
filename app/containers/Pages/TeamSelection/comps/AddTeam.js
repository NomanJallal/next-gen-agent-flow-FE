import React from 'react';

import { Card, Box, Typography } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';

const AddTeam = () => (
  <div>
    <Card sx={{ border: '1px solid #304FFE', backgroundColor: '#304FFE0D' }}>
      <Box sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95px'
      }}>
        <AddBoxIcon sx={{ height: '30px', width: '30px', color: '#304FFE' }} />&nbsp;&nbsp;
        <Typography fontWeight={600} fontSize={20} color={'#304FFE'}>Add new team</Typography>
      </Box>
    </Card>
  </div>
);

export default AddTeam;
