import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { Stack, Card, CardContent, Typography, Box, Tabs, Tab, Avatar } from '@mui/material';
import { injectIntl } from 'react-intl';
import { SelectBox, SearchInput } from '../../../components/common';
import useStyles from './calllogs-jss';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TimerIcon from '@mui/icons-material/Timer';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderCard = (phoneNumber, date, daysAgo, duration, time, isSelected) => (
    <Card sx={{ width: '100%', backgroundColor: isSelected ? "#E1E6FE" : "", textAlign: "left" }}>
      <CardContent>
        <Typography style={{ color: isSelected ? "#3F51B5" : "#000000", fontWeight: "400", fontSize: "20px" }} component="div">
          {phoneNumber}
        </Typography>
        <Typography style={{ color: isSelected ? "#3F51B5" : "#00000066", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
          <CalendarTodayIcon fontSize='small' /> {date}
        </Typography>
        <Typography style={{ color: isSelected ? "#3F51B5" : "#00000066", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
          <TimerOutlinedIcon fontSize='small' /> {daysAgo}
        </Typography>
        <Typography style={{ color: isSelected ? "#3F51B5" : "#00000066", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
          <CallIcon fontSize='small' /> {duration}
        </Typography>
        <Typography style={{ color: isSelected ? "#3F51B5" : "#00000066", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
          <AccessTimeIcon fontSize='small' /> {time}
        </Typography>
      </CardContent>
    </Card>
  );

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
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}>
          <TabContext value={value}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label={<>
                <Card sx={{ backgroundColor: "#E1E6FE", textAlign: "left", width: "348px", padding: "16px 24px 16px 24px", gap: "40px", border: "0px 0px 1px 0px solid #E0E0E0", opacity: "0px" }}>
                  <CardContent>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "20px",height:"24px",lineHeight:"24px" }} component="div">
                      +1 325 283 1578
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <CalendarTodayIcon fontSize='small' /> July 25, 2024
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <TimerOutlinedIcon fontSize='small' /> 7 Days ago
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <CallIcon fontSize='small' /> 11 Second
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <AccessTimeIcon fontSize='small' />6:42 PM
                    </Typography>
                  </CardContent>
                </Card>
              </>
              }
                value="0">
                  
                </Tab>
              <Tab label={<>
                <Card sx={{ backgroundColor: "#fff", textAlign: "left", width: "348px", padding: "16px 24px 16px 24px", gap: "40px", border: "0px 0px 1px 0px", opacity: "0px" }}>
                  <CardContent>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "20px" }} component="div">
                      +1 325 283 1577
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <CalendarTodayIcon fontSize='small' /> July 25, 2024
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <TimerOutlinedIcon fontSize='small' /> 7 Days ago
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <CallIcon fontSize='small' /> 11 Second
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <AccessTimeIcon fontSize='small' />6:42 PM
                    </Typography>
                  </CardContent>
                </Card>
              </>
              }
                value="2">

                </Tab>
              <Tab label={<>
                <Card sx={{ backgroundColor: "#ffff", textAlign: "left", width: "348px", padding: "16px 24px 16px 24px", gap: "40px", border: "0px 0px 1px 0px", opacity: "0px" }}>
                  <CardContent>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "20px" }} component="div">
                      +1 325 283 1577
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <CalendarTodayIcon fontSize='small' /> July 25, 2024
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <TimerOutlinedIcon fontSize='small' /> 7 Days ago
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <CallIcon fontSize='small' /> 11 Second
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <AccessTimeIcon fontSize='small' />6:42 PM
                    </Typography>
                  </CardContent>
                </Card>
              </>
              }
                value="3">

                </Tab>
              <Tab label={<>
                <Card sx={{ backgroundColor: "#fffff", textAlign: "left", width: "348px", padding: "16px 24px 16px 24px", gap: "40px", border: "0px 0px 1px 0px", opacity: "0px" }}>
                  <CardContent>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "20px" }} component="div">
                      +1 325 283 1577
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <CalendarTodayIcon fontSize='small' /> July 25, 2024
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <TimerOutlinedIcon fontSize='small' /> 7 Days ago
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <CallIcon fontSize='small' /> 11 Second
                    </Typography>
                    <Typography style={{ color: "#3F51B5", fontWeight: "400", fontSize: "13px" }} sx={{ mb: 1.5 }} color="text.secondary">
                      <AccessTimeIcon fontSize='small' />6:42 PM
                    </Typography>
                  </CardContent>
                </Card>
              </>
              }
                value="4">

                </Tab>
            </Tabs>
            <TabPanel value="0">
              <Card>
                <CardContent>
                  <Avatar />
                  <Typography variant="h5" component="div">
                    Item One
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description for Item One
                  </Typography>
                  <Typography variant="body2">
                    Detailed content for Item One.
                  </Typography>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value="1">
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Item Two
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description for Item Two
                  </Typography>
                  <Typography variant="body2">
                    Detailed content for Item Two.
                  </Typography>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value="2">
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Item Threes
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description for Item Three
                  </Typography>
                  <Typography variant="body2">
                    Detailed content for Item Three.
                  </Typography>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value="3">
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Item Four
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description for Item Four
                  </Typography>
                  <Typography variant="body2">
                    Detailed content for Item Four.
                  </Typography>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value="4">
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Item Five
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description for Item Five
                  </Typography>
                  <Typography variant="body2">
                    Detailed content for Item Five.
                  </Typography>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value="5">
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Item Six
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description for Item Six
                  </Typography>
                  <Typography variant="body2">
                    Detailed content for Item Six.
                  </Typography>
                </CardContent>
              </Card>
            </TabPanel>
            <TabPanel value="6">
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Item Seven
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Description for Item Seven
                  </Typography>
                  <Typography variant="body2">
                    Detailed content for Item Seven.
                  </Typography>
                </CardContent>
              </Card>
            </TabPanel>
          </TabContext>
        </Box>
      </Papper>
    </div>
  );
}

CallLogs.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(CallLogs);
