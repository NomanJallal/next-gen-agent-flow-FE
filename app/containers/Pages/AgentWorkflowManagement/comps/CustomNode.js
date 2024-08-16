import React from 'react';
import { Handle } from 'reactflow';
import { Box, Typography, Chip } from '@mui/material';

const CustomNode = ({ data }) => (
  <Box sx={{
    padding: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
    border: '1px solid #ccc',
    minWidth: '150px',
    minHeight: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  }}>
    <Typography variant="subtitle2" color="textPrimary" gutterBottom>
      {data.label}
    </Typography>

    <Box sx={{
      display: 'flex',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: '8px',
    }}>
      <Chip
        label={data.status1 || 'Status 1'}
        size="small"
        sx={{
          backgroundColor: data.status1 === 'Booked' ? '#3f51b5' : '#f50057',
          color: '#fff',
        }}
      />
      <Chip
        label={data.status2 || 'Status 2'}
        size="small"
        sx={{
          backgroundColor: data.status2 === 'True' ? '#4caf50' : '#f44336',
          color: '#fff',
        }}
      />
    </Box>

    <Handle type="target" position="top" style={{ background: '#555' }} />
    <Handle type="source" position="bottom" style={{ background: '#555' }} />
  </Box>
);

export default CustomNode;
