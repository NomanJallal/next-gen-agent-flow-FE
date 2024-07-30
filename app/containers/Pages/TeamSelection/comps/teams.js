import React from 'react';
import {
  Box, Button, Card, Stack, Avatar, Typography
} from '@mui/material';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Person3Icon from '@mui/icons-material/Person3';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LinkIcon from '@mui/icons-material/Link';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const teams = () => (
  <div>
    <Card sx={{ padding: '12px', border: '1px solid #E1E6FE' }}>
      <Typography fontWeight={600} fontSize={32} color={'#304FFE'}>CGG</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{
            marginBottom: '1px', backgroundColor: '#D21F1F', width: 8, height: 8, color: '#D21F1F'
          }}></Avatar>&nbsp;&nbsp;
          <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>Inactive</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <Person3Icon sx={{
            marginBottom: '1px', backgroundColor: '#fff', width: 15, height: 17, color: '#0000008A'
          }} />&nbsp;
          <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>2 Members</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <SupportAgentIcon sx={{
            marginBottom: '1px', backgroundColor: '#fff', width: 15, height: 17, color: '#0000008A'
          }} />&nbsp;
          <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>Agents</Typography>
        </Box>
      </Box>
    </Card>

    <Card sx={{ padding: '12px', border: '1px solid #E1E6FE', marginTop: '15px' }}>
      <Typography fontWeight={600} fontSize={32} color={'#304FFE'}>CGG</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar sx={{
            marginBottom: '1px', backgroundColor: '#38D21F', width: 8, height: 8, color: '#38D21F'
          }}></Avatar>&nbsp;&nbsp;
          <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>Active</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <LocalPhoneIcon sx={{
            marginBottom: '1px', backgroundColor: '#fff', width: 15, height: 17, color: '#0000008A'
          }} />&nbsp;
          <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>+1 325 283 1577</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <Person3Icon sx={{
            marginBottom: '1px', backgroundColor: '#fff', width: 15, height: 17, color: '#0000008A'
          }} />&nbsp;
          <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>2 Members</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
          <SupportAgentIcon sx={{
            marginBottom: '1px', backgroundColor: '#fff', width: 15, height: 17, color: '#0000008A'
          }} />&nbsp;
          <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>Agents</Typography>
        </Box>
      </Box>
    </Card>
  </div>
);

export default teams;
