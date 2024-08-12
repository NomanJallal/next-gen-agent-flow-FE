import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import {
  Stack, Typography, Avatar, Box, Button
} from '@mui/material';
import { injectIntl } from 'react-intl';
import { CalendarToday, PersonAdd } from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';

import AvaliabilitySlots from './comps/AvaliabilitySlots';
import LinkGoogleMeet from './comps/LinkGoogleMeet';
import AddAvailabilitySlots from './comps/AddAvailabilitySlots';

function TeamCalendar(props) {
  const { intl } = props;
  const title = brand.name + ' - Calendar';
  const description = brand.desc;

  const [open, setOpen] = useState(false);
  const openCloseModal = () => {
    setOpen((prev) => !prev);
  };

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
      <Stack gap={3}>
        <Papper disablePadding sx={{ minHeight: 'unset !important' }}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            gap={3}
            justifyContent={'space-between'}
            sx={{
              p: 3,
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={1}
            >
              <Avatar sx={{
                backgroundColor: 'background.default',
                width: 44,
                height: 44,
                color: 'primary.main'
              }}>
                <CalendarToday fontSize='small' />
              </Avatar>
              <Typography variant='h5' fontWeight={600} fontSize={20}>
                Calendar
              </Typography>
            </Stack>
            <Button
              color='info'
              startIcon={<PersonAdd />}
              variant='outlined'
            >
              INVITATION USER
            </Button>
          </Stack>
          <Box sx={{ p: 2 }}>
            <LinkGoogleMeet />
          </Box>
        </Papper>

        <Papper disablePadding sx={{ minHeight: 'unset !important' }}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            gap={3}
            justifyContent={'space-between'}
            sx={{
              p: 3,
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={1}
            >
              <Avatar sx={{
                backgroundColor: 'background.default',
                width: 44,
                height: 44,
                color: 'primary.main'
              }}>
                <AccessTimeIcon fontSize='small' />
              </Avatar>
              <Typography variant='h5' fontWeight={600} fontSize={20}>
                Availability slots
              </Typography>
            </Stack>
            <Button
              color='info'
              startIcon={<AddIcon />}
              variant='contained'
              onClick={openCloseModal}
            >
              ADD
            </Button>
          </Stack>
          <Box sx={{ p: 2 }}>
            <AvaliabilitySlots />
          </Box>
        </Papper>
        {
          open === true ? (
            <AddAvailabilitySlots openCloseModal={openCloseModal} open={open} />
          ) : null
        }
      </Stack>
    </div>
  );
}

TeamCalendar.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(TeamCalendar);
