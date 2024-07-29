import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import {
  Stack,
  Card,
  Typography,
  Box,
  Avatar,
  Grid,
  Button,
  IconButton,
} from '@mui/material';
import { injectIntl } from 'react-intl';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BlockIcon from '@mui/icons-material/Block';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import CallEndIcon from '@mui/icons-material/CallEnd';
import {
  CalendarToday,
  AccessTime,
  CallOutlined,
  TimerOutlined,
} from '@mui/icons-material';
import image from './comps/frame.png';
import { SelectBox, SearchInput } from '../../../components/common';
import Sidebar from './comps/Sidebar';

import { callsData } from './dummy';

function CallLogs(props) {
  const { intl } = props;
  const title = brand.name + ' - Call Logs';
  const description = brand.desc;
  const [filters, setFilters] = useState({
    search: '',
    type: '',
  });
  const [selectedCard, setSelectedCard] = useState(callsData[0]);

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
      <Papper disablePadding>
        <Stack direction={'row'} gap={2} sx={{ padding: 3, borderBottom: 1, borderColor: 'divider' }}>
          <SearchInput
            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
            value={filters?.search}
            placeholder={'Search Agents'}
            size="small"
          />
          <SelectBox
            onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
            value={filters.type}
            options={[{ value: 'All', label: 'All' }]}
            placeholder={'Search Call types'}
          />
        </Stack>

        <Stack direction={'row'} sx={{ flexGrow: 1, width: '100%' }}>
          <Sidebar
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
          <Stack flexGrow={1} sx={{ p: 3 }}>
            <Stack
              direction={'row'}
              gap={3}
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 3,
                py: 2,
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Stack direction={'row'} alignItems={'center'} gap={2}>
                <Avatar sx={{
                  width: 80,
                  height: 80,
                }}>
                  <PersonIcon />
                </Avatar>
                <Typography style={{ fontWeight: '500', fontSize: 20 }}>Unknown Caller</Typography>
              </Stack>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Stack>

            <Stack
              direction={'row'}
              gap={3}
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 3,
                py: 2,
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Stack gap={2}>
                <Typography sx={{
                  fontSize: '20px',
                  fontWeight: 400,
                }}>
                  {selectedCard.phone}
                </Typography>
                <Stack
                  gap={1}
                  flexWrap={'wrap'}
                  sx={{
                    color: 'text.secondary',
                  }}
                >
                  <Typography variant='caption' sx={{
                    display: 'flex',
                    gap: 0.5,
                    alignItems: 'center',
                  }}>
                    <CalendarToday fontSize='inherit' />
                    {selectedCard.date}
                  </Typography>
                  <Typography variant='caption' sx={{
                    display: 'flex',
                    gap: 0.5,
                    alignItems: 'center',
                  }}>
                    <AccessTime fontSize='inherit' />
                    {selectedCard.daysAgo}
                  </Typography>
                  <Typography variant='caption' sx={{
                    display: 'flex',
                    gap: 0.5,
                    alignItems: 'center',
                  }}>
                    <CallOutlined fontSize='inherit' />
                    {selectedCard.callDuration}
                  </Typography>
                  <Typography variant='caption' sx={{
                    display: 'flex',
                    gap: 0.5,
                    alignItems: 'center',
                  }}>
                    <TimerOutlined fontSize='inherit' />
                    {selectedCard.time}
                  </Typography>
                </Stack>
              </Stack>
              <Stack gap={2} sx={{ maxWidth: 200 }}>
                <Button size='large' fullWidth variant="outlined" startIcon={<StarIcon />} color="info">
                  Add to Favorite
                </Button>
                <Button size='large' fullWidth variant="outlined" startIcon={<AddIcon />} color="primary">
                  Add Contact
                </Button>
                <Button size='large' fullWidth variant="outlined" startIcon={<DeleteOutlineIcon />} color="error">
                  Delete
                </Button>
                <Button size='large' fullWidth variant="outlined" startIcon={<BlockIcon />} color="error">
                  Block Number
                </Button>
              </Stack>
            </Stack>

            <Stack
              gap={2.5}
              sx={{
                flexGrow: 1,
                overflow: 'auto',
                height: 0,
                minHeight: 200,
                px: 3,
                py: 2,
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}
            >
              <Typography variant='body2' fontWeight={400} color={'primary.main'}>
                <PhoneCallbackIcon sx={{ height: '18px' }} />
                Call Pickup
              </Typography>
              <Card sx={{ backgroundColor: 'primary.main', padding: '10px', width: '100%' }} >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: '16px', color: '#fff' }}> Hi, Thank you for contacting us</Typography>
                  <img src={image} />
                </Box>
              </Card>
              <Typography variant='body2' fontWeight={400} color={'primary.main'}>
                <CallEndIcon sx={{ height: '18px' }} />
                Call Ended
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Papper>

    </div >
  );
}
CallLogs.propTypes = { intl: PropTypes.object.isRequired };
export default injectIntl(CallLogs);
