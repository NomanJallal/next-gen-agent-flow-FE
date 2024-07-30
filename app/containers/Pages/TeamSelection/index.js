import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import {
  Box, Button, Card, Stack, Avatar, Typography
} from '@mui/material';

// icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LinkIcon from '@mui/icons-material/Link';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// comps
import Teams from './comps/teams';
import AddTeam from './comps/AddTeam';

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
              <Button variant="outlined" sx={{ borderRadius: '4px', width: '175px' }}><PeopleAltIcon />TEAMS</Button>&nbsp;
              <Button variant="outlined" sx={{ borderRadius: '4px', width: '175px' }}><PersonAddIcon /> INVITATIONS</Button>&nbsp;
              <Button variant="outlined" sx={{ borderRadius: '4px', width: '175px' }}><LinkIcon />REFERRAL</Button>&nbsp;
              <Button variant="outlined" color="error" sx={{ borderRadius: '4px', width: '175px' }}><ExitToAppIcon />EXIT</Button>
            </Box>
          </Stack>

          <Teams />
          <AddTeam />

        </Stack>
      </Card>
    </div>
  );
}

TeamSelection.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(TeamSelection);
