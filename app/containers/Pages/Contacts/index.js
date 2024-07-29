import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import { Papper } from 'enl-components';
import {
  Stack,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import {
  QueryStats
} from '@mui/icons-material';
import Sider from './comps/Sider';
import ActivityItem from './comps/ActivityItem';

function Contacts(props) {
  const { intl } = props;
  const title = brand.name + ' - Agent Contacts';
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
      <Papper disablePadding sx={{ display: 'flex', boxShadow: 'none !important' }}>
        <Stack direction={'row'} sx={{ flexGrow: 1, width: '100%' }}>
          <Sider />
          <Stack flexGrow={1} sx={{ minHeight: '600px' }}>
            <Stack
              direction={'row'}
              gap={3}
              alignItems="center"
              justifyContent={'space-between'}
              sx={{
                py: 2,
                px: 3,
                borderBottom: 1,
                borderColor: 'divider'
              }}
            >
              <Typography variant="h6" sx={{ fontSize: 24, fontWeight: 500 }}>
                Activity
              </Typography>
              <Button variant="contained" color="success" startIcon={<QueryStats />}>
                VIEW BOARD
              </Button>
            </Stack>
            <Stack sx={{
              flexGrow: 1,
              height: 0,
              overflow: 'auto',
              py: 3,
            }}>
              <ActivityItem />
              <Divider />
              <ActivityItem extra />
              <Divider />
            </Stack>
          </Stack>
        </Stack>
      </Papper>
    </div>
  );
}

Contacts.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Contacts);
