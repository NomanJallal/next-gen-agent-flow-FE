import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { injectIntl } from 'react-intl';
import TabContext from '@mui/lab/TabContext';
import {
  Box, Button, Card, Stack, Avatar, Typography
} from '@mui/material';

// icons
import BlockIcon from '@mui/icons-material/Block';
import AddIcon from '@mui/icons-material/Add';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Person3Icon from '@mui/icons-material/Person3';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddBoxIcon from '@mui/icons-material/AddBox';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LinkIcon from '@mui/icons-material/Link';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function TeamSelection(props) {
  const { intl } = props;
  const title = brand.name + ' - Agent Workflow Management';
  const description = brand.desc;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Card sx={{ padding: '15px' }}>
        <Stack gap={2}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={1}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{
                backgroundColor: 'background.default',
                width: 44,
                height: 44,
                color: 'primary.main'
              }}>
                <PeopleAltIcon fontSize='small' />
              </Avatar>&nbsp;&nbsp;
              <Typography variant='h5' fontWeight={600} fontSize={20}>
                                Your teams
              </Typography>
            </Box>
            <Box direction={'row'}>
              <Button variant="outlined" sx={{ borderRadius: '4px', width: '175px' }}><PeopleAltIcon/>TEAMS</Button>&nbsp;
              <Button variant="outlined" sx={{ borderRadius: '4px', width: '175px' }}><PersonAddIcon/> INVITATIONS</Button>&nbsp;
              <Button variant="outlined" sx={{ borderRadius: '4px', width: '175px' }}><LinkIcon/>REFERRAL</Button>&nbsp;
              <Button variant="outlined" color="error" sx={{ borderRadius: '4px', width: '175px' }}><ExitToAppIcon/>EXIT</Button>
            </Box>

          </Stack>

          <Card sx={{ padding: '12px' }}>
            <Typography fontWeight={600} fontSize={32} color={'#304FFE'}>CGG</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{
                  marginBottom: '3px', backgroundColor: 'red', width: 8, height: 8, color: 'red'
                }}></Avatar>&nbsp;&nbsp;
                <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>Inactive</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                <Person3Icon sx={{
                  marginBottom: '3px', backgroundColor: '#fff', width: 15, height: 17, color: '#0000008A'
                }} />&nbsp;
                <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>2 Members</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                <SupportAgentIcon sx={{
                  marginBottom: '3px', backgroundColor: '#fff', width: 15, height: 17, color: '#0000008A'
                }} />&nbsp;
                <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>Agents</Typography>
              </Box>
            </Box>
          </Card>

          <Card sx={{ padding: '12px' }}>
            <Typography fontWeight={600} fontSize={32} color={'#304FFE'}>CGG</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{
                  marginBottom: '3px', backgroundColor: 'red', width: 8, height: 8, color: 'red'
                }}></Avatar>&nbsp;&nbsp;
                <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>Inactive</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                <LocalPhoneIcon sx={{
                  marginBottom: '3px', backgroundColor: '#fff', width: 15, height: 17, color: '#0000008A'
                }} />&nbsp;
                <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>+1 325 283 1577</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                <Person3Icon sx={{
                  marginBottom: '3px', backgroundColor: '#fff', width: 15, height: 17, color: '#0000008A'
                }} />&nbsp;
                <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>2 Members</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                <SupportAgentIcon sx={{
                  marginBottom: '3px', backgroundColor: '#fff', width: 15, height: 17, color: '#0000008A'
                }} />&nbsp;
                <Typography fontWeight={400} fontSize={14} color={'#3F4A5D'}>Agents</Typography>
              </Box>
            </Box>
          </Card>

          <Card sx={{ border: '1px solid #304FFE', backgroundColor: '#304FFE0D' }}>
            <Box sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', height: '95px'
            }}>
              <AddBoxIcon sx={{ height: '30px', width: '30px', color: '#304FFE' }} />&nbsp;&nbsp;
              <Typography fontWeight={600} fontSize={20} color={'#304FFE'}>Add new team</Typography>
            </Box>
          </Card>
        </Stack>
      </Card>

    </div>
  );
}

TeamSelection.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(TeamSelection);
