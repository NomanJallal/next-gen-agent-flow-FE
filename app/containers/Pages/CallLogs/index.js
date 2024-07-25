import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { Stack, Card, CardContent, Typography, Box, Tabs, Tab, Avatar, Grid, Button } from '@mui/material';
import { injectIntl } from 'react-intl';
import { SelectBox, SearchInput } from '../../../components/common';
import useStyles from './calllogs-jss';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';

import { callsData } from './callsData';
function CallLogs(props) {
  console.log(callsData)
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
      <Papper disablePadding={true}>
        <Stack direction={'row'} gap={2} sx={{ p: 3, pb: 3, borderBottom: 1, borderColor: 'divider' }}>
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
      </Papper>

      <Grid container spacing={2} style={{ height: '100vh' }}>
        <Grid item xs={4} style={{ height: '100vh', overflowY: 'auto' }} >
          <Box sx={{ display: 'flex', flexDirection: 'column', border: "none", }} >
            {callsData.map((item) => (
              <Card
                key={item.id}
                sx={{
                  // backgroundColor: "#fff",
                  textAlign: "left",
                  width: "348px",
                  padding: "16px 24px",
                  border: "0px 0px 1px 0px",
                  opacity: "0.9",
                  transition: "opacity 0.3s",
                  cursor: "pointer",
                  backgroundColor: selectedCard?.id === item.id ? "#E1E6FE" : "#fff"

                }}
                onClick={() => setSelectedCard(item)}
              >
                <CardContent>
                  <Typography sx={{ color: selectedCard?.id === item.id ? "#3F51B5" : "#000000", fontWeight: 400, fontSize: "20px", mb: 2 }}>
                    {item.phone}
                  </Typography>
                  <Typography sx={{ color: selectedCard?.id === item.id ? "#3F51B5" : "#00000066", fontWeight: 400, fontSize: "13px", mb: 1.5 }}>
                    <CalendarTodayIcon fontSize='small' /> {item.date}
                  </Typography>
                  <Typography sx={{ color: selectedCard?.id === item.id ? "#3F51B5" : "#00000066", fontWeight: 400, fontSize: "13px", mb: 1.5 }}>
                    <TimerOutlinedIcon fontSize='small' /> {item.daysAgo}
                  </Typography>
                  <Typography sx={{ color: selectedCard?.id === item.id ? "#3F51B5" : "#00000066", fontWeight: 400, fontSize: "13px", mb: 1.5 }}>
                    <CallIcon fontSize='small' /> {item.callDuration}
                  </Typography>
                  <Typography sx={{ color: selectedCard?.id === item.id ? "#3F51B5" : "#00000066", fontWeight: 400, fontSize: "13px", mb: 1.5 }}>
                    <AccessTimeIcon fontSize='small' /> {item.time}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
        {/* 70% Column */}
        <Grid item xs={8} style={{ padding: '16px' }}>
          {selectedCard ? (
            <Box>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar sx={{ width: 70, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PersonIcon />
                </Avatar>                <Typography variant="h5" style={{ fontWeight: "500", fontSize: "24px", lineLeight: "29.05px", }}>Unknown Caller</Typography>
              </Box>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid xs={9} >
                  <Box>
                    <Typography variant="h4" sx={{ marginTop: 2, fontWeight: "500", fontSize: "20px", lineLeight: "24.05px", mb: 2 }} >{selectedCard.phone}</Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: "#00000066", fontWeight: 400, fontSize: "13px", mb: 1.5 }} >
                      <CalendarTodayIcon fontSize='small' />  {selectedCard.date}
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: "#00000066", fontWeight: 400, fontSize: "13px", mb: 1.5 }}>
                      <TimerOutlinedIcon fontSize='small' />  {selectedCard.daysAgo}
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: "#00000066", fontWeight: 400, fontSize: "13px", mb: 1.5 }}>
                      <CallIcon fontSize='small' />  {selectedCard.callDuration}
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: "#00000066", fontWeight: 400, fontSize: "13px", mb: 1.5 }}>
                      <AccessTimeIcon fontSize='small' />  {selectedCard.time}
                    </Typography>
                  </Box>
                </Grid>
                {/* Buttons */}
                <Grid xs={3}>
                  <Box >
                    <Button sx={{ mt: 2, width: "100%" }} variant="outlined" startIcon={<StarBorderIcon />} color="info">
                      Add to Favorite
                    </Button>
                    <Button sx={{ mt: 2, width: "100%" }} variant="outlined" startIcon={<AddIcon />} color="primary">
                      Add Contact
                    </Button>
                    <Button sx={{ mt: 2, width: "100%" }} variant="outlined" startIcon={<DeleteIcon />} color="error">
                      Delete
                    </Button>
                    <Button sx={{ mt: 2, width: "100%" }} variant="outlined" startIcon={<BlockIcon />} color="error">
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

    </div>
  );
}

CallLogs.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(CallLogs);
