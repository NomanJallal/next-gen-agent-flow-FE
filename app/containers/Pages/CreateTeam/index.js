import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import {
  Box, Button, Card, Stack, Avatar, Typography
} from '@mui/material';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LinkIcon from '@mui/icons-material/Link';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import TeamForm from './comps/TeamForm';

// comps

function CreateTeam(props) {
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
      <Card sx={{ padding: '15px', borderRadius: '8px' }}>
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
                Create team
              </Typography>
            </Box>
            <Stack direction={'row'} gap={1}>
              <Button variant="outlined" sx={{ borderRadius: '4px', minWidth: '175px' }} startIcon={<PeopleAltIcon />}>TEAMS</Button>
              <Button variant="outlined" sx={{ borderRadius: '4px', minWidth: '175px' }} startIcon={<PersonAddIcon />}>INVITATIONS</Button>
              <Button variant="outlined" sx={{ borderRadius: '4px', minWidth: '175px' }} startIcon={<LinkIcon />}>REFERRAL</Button>
              <Button variant="outlined" color="error" sx={{ borderRadius: '4px', minWidth: '175px' }} startIcon={<ExitToAppIcon />}>EXIT</Button>
            </Stack>
          </Stack>

          <Box>
            <TeamForm />
          </Box>

        </Stack>
      </Card>
      <Box sx={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
        <Button variant="contained" size="large">CREATE TEAM</Button>&nbsp;&nbsp;
        <Typography fontSize={16} fontWeight={400} color={'#00000099'}>By click the above button you are agree to our terms  of services and privacy policy. You You also agree to receive emails from us. </Typography>
      </Box>
    </div>
  );
}

CreateTeam.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(CreateTeam);
