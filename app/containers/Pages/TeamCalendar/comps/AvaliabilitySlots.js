import React from 'react';
import { Typography, Box } from '@mui/material';

import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const AvaliabilitySlots = () => (
  <div>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '150px'
      }}
    >
      <Box>
        <HourglassEmptyIcon sx={{
          display: 'block', margin: '0 auto', fontSize: '46.67px', color: '#3F51B5'
        }} />
        <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>
                        No items
        </Typography>
      </Box>
    </Box>
  </div>
);

export default AvaliabilitySlots;
