import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import {
  Stack, Card, CardContent, Typography, Box, Tabs, Tab, Avatar, Grid, Button
} from '@mui/material';
import { injectIntl } from 'react-intl';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useStyles from './calllogs-jss';
import { SelectBox, SearchInput } from '../../../components/common';
function CallLogs(props) {
  const [value, setValue] = useState('0');
  const { intl } = props;
  const { classes } = useStyles();
  const title = brand.name + ' - Call Logs';
  const description = brand.desc;
  const [filters, setFilters] = useState({
    search: '',
    type: '',
  });
  const [selectedCard, setSelectedCard] = useState(1);

  const callsData = [
    {
      id: 1, phone: '+1 325 283 2377', date: 'July 24, 2024', daysAgo: '8 Days ago', callDuration: '9 Seconds', time: '5:15 PM'
    },
    {
      id: 2, phone: '+1 325 283 4277', date: 'July 23, 2024', daysAgo: '9 Days ago', callDuration: '15 Seconds', time: '3:22 PM'
    },
    {
      id: 3, phone: '+1 325 283 15277', date: 'July 22, 2024', daysAgo: '10 Days ago', callDuration: '30 Seconds', time: '2:45 PM'
    },
    {
      id: 4, phone: '+1 325 283 15527', date: 'July 21, 2024', daysAgo: '11 Days ago', callDuration: '5 Seconds', time: '4:50 PM'
    },
    {
      id: 5, phone: '+1 325 283 15743', date: 'July 20, 2024', daysAgo: '12 Days ago', callDuration: '20 Seconds', time: '1:30 PM'
    },
    {
      id: 6, phone: '+1 325 283 15131', date: 'July 19, 2024', daysAgo: '13 Days ago', callDuration: '25 Seconds', time: '6:10 PM'
    },
  ];

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
      <Papper>
        <Stack direction={'row'} sx={{ padding: '0px' }}>
          <SearchInput
            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
            value={filters?.search}
            placeholder={'Search Agents'}
            size="small"
          />&nbsp;
          <SelectBox
            onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
            value={filters.type}
            options={[{ value: 'All', label: 'All' }]}
            placeholder={'Search Call types'}
          />
        </Stack>

        <Grid container spacing={2} style={{ height: '100vh', borderTop: '2px solid #0000000D', marginTop: '20px' }}>
          <Grid item xs={4} style={{ height: '100vh', overflowY: 'auto' }} >
            <Box sx={{ display: 'flex', flexDirection: 'column', border: 'none', }} >
              {callsData.map((item) => (
                <Card
                  key={item.id}
                  sx={{
                    // backgroundColor: "#fff",
                    textAlign: 'left',
                    width: '348px',
                    padding: '16px 24px',
                    border: '0px 0px 1px 0px',
                    opacity: '0.9',
                    transition: 'opacity 0.3s',
                    cursor: 'pointer',
                    backgroundColor: selectedCard?.id === item.id ? '#E1E6FE' : '#fff'
                  }}
                  onClick={() => setSelectedCard(item)}
                >
                  <CardContent>
                    <Typography sx={{
                      color: selectedCard?.id === item.id ? '#3F51B5' : '#000000', fontWeight: 400, fontSize: '20px', mb: 2
                    }}>
                      {item.phone}
                    </Typography>
                    <Typography sx={{
                      color: selectedCard?.id === item.id ? '#3F51B5' : '#00000066', fontWeight: 400, fontSize: '13px', mb: 1.5
                    }}>
                      <CalendarTodayIcon fontSize='small' /> {item.date}
                    </Typography>
                    <Typography sx={{
                      color: selectedCard?.id === item.id ? '#3F51B5' : '#00000066', fontWeight: 400, fontSize: '13px', mb: 1.5
                    }}>
                      <TimerOutlinedIcon fontSize='small' /> {item.daysAgo}
                    </Typography>
                    <Typography sx={{
                      color: selectedCard?.id === item.id ? '#3F51B5' : '#00000066', fontWeight: 400, fontSize: '13px', mb: 1.5
                    }}>
                      <CallIcon fontSize='small' /> {item.callDuration}
                    </Typography>
                    <Typography sx={{
                      color: selectedCard?.id === item.id ? '#3F51B5' : '#00000066', fontWeight: 400, fontSize: '13px', mb: 1.5
                    }}>
                      <AccessTimeIcon fontSize='small' /> {item.time}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>

          <Grid item xs={8} >
            {selectedCard ? (
              <Box>
                <Box sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid #0000000D', padding: '15px 5px 12px 5px'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{
                      width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <PersonIcon />
                    </Avatar>&nbsp;&nbsp;
                    <Typography style={{ fontWeight: '500', fontSize: '20px', lineHeight: '29.05px', }}>Unknown Caller</Typography>
                  </Box>
                  <MoreHorizIcon />
                </Box>
                <Grid container>
                  <Grid xs={9} >
                    <Box>
                      <Typography sx={{
                        marginTop: 2, fontWeight: '400', fontSize: '20px', lineHeight: '24.05px', mb: 2
                      }} >{selectedCard.phone}</Typography>
                      <Typography variant="body1" sx={{
                        display: 'flex', alignItems: 'center', gap: 1, color: '#00000066', fontWeight: 400, fontSize: '13px', marginBottom: '7px'
                      }} >
                        <CalendarTodayIcon style={{ height: '13px' }} />  {selectedCard.date}
                      </Typography>
                      <Typography variant="body1" sx={{
                        display: 'flex', alignItems: 'center', gap: 1, color: '#00000066', fontWeight: 400, fontSize: '13px', marginBottom: '7px'
                      }}>
                        <TimerOutlinedIcon style={{ height: '13px' }} />  {selectedCard.daysAgo}
                      </Typography>
                      <Typography variant="body1" sx={{
                        display: 'flex', alignItems: 'center', gap: 1, color: '#00000066', fontWeight: 400, fontSize: '13px', marginBottom: '7px'
                      }}>
                        <CallIcon style={{ height: '13px' }} />  {selectedCard.callDuration}
                      </Typography>
                      <Typography variant="body1" sx={{
                        display: 'flex', alignItems: 'center', gap: 1, color: '#00000066', fontWeight: 400, fontSize: '13px', marginBottom: '7px'
                      }}>
                        <AccessTimeIcon style={{ height: '13px' }} />  {selectedCard.time}
                      </Typography>
                    </Box>
                  </Grid>
                  {/* Buttons */}
                  <Grid xs={3}>
                    <Box >
                      <Button sx={{ borderRadius: '3px', width: '100%' }} variant="outlined" startIcon={<StarBorderIcon />} color="info">
                        Add to Favorite
                      </Button>
                      <Button sx={{ marginTop: '10px', borderRadius: '3px', width: '100%' }} variant="outlined" startIcon={<AddIcon />} color="primary">
                        Add Contact
                      </Button>
                      <Button sx={{ marginTop: '10px', borderRadius: '3px', width: '100%' }} variant="outlined" startIcon={<DeleteIcon />} color="error">
                        Delete
                      </Button>
                      <Button sx={{ marginTop: '10px', borderRadius: '3px', width: '100%' }} variant="outlined" startIcon={<BlockIcon />} color="error">
                        Block Number
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Typography>Select a card to view details</Typography>
            )}
          </Grid>
        </Grid>
      </Papper>

    </div>
  );
}
CallLogs.propTypes = { intl: PropTypes.object.isRequired };
export default injectIntl(CallLogs);
