import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import {
  Stack, Typography, Avatar, Box, Button, Card
} from '@mui/material';
import { injectIntl } from 'react-intl';
import {
  CalendarToday,
  PersonAdd,
} from '@mui/icons-material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import MeetIcon from './assets/google_meet.png';

function TeamCalendar(props) {
  const { intl } = props;
  const title = brand.name + ' - Calendar';
  const description = brand.desc;

  const [openModal, setOpenModal] = useState(false);

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
            <Card sx={{ border: '1px solid #D7D7D7', padding: '22px' }}>
              <img src={MeetIcon} style={{ height: '54px', width: '310px' }} />
              <Typography sx={{ marginTop: '20px' }} variant='h5' fontWeight={400} fontSize={20}>No Account linked</Typography>
              <Typography sx={{ marginTop: '10px' }} color={'#AAAAAA'} fontWeight={400} fontSize={18}>Connect to your google calendar from the scenario builder </Typography>
            </Card>
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
            >
                            ADD
            </Button>
          </Stack>
          <Box sx={{ p: 2 }}>
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
                                    Your block list is empty
                </Typography>
              </Box>
            </Box>
          </Box>
        </Papper>
      </Stack>
    </div>
  );
}

TeamCalendar.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(TeamCalendar);
