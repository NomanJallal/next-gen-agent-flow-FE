import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';

import Grid from '@mui/material/Grid';
import {
  Stack, Box, Avatar, Typography, alpha, Button, Card
} from '@mui/material';

// icons
import AddIcon from '@mui/icons-material/Add';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import SdStorageIcon from '@mui/icons-material/SdStorage';
import InventoryIcon from '@mui/icons-material/Inventory';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CallIcon from '@mui/icons-material/Call';
import { SearchInput } from '../../../components/common';

function Contact(props) {
  const { intl } = props;
  const title = brand.name + ' - Agent Workflow Management';
  const description = brand.desc;
  const [currentTab, setCurrentTab] = useState('builder');

  const handleTabChange = (_, val) => {
    setCurrentTab(val);
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
      <div>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography sx={{
              fontSize: '24px', fontWeight: 500, fontFamily: 'inter', marginBottom: '25px'
            }}>
                            Contacts
            </Typography>
            <SearchInput placeholder={'Search Agents'} size="small" fullWidth />

            <Box sx={{ display: 'flex', margin: '5px 0px' }}>
              <Button variant="contained" startIcon={<AddIcon />}>
                                ADD ICONS
              </Button>&nbsp;

              <Button variant="outlined" startIcon={<FileUploadIcon />}>
                                EXPORT
              </Button>
            </Box>
            <Button fullWidth variant="outlined" startIcon={<SdStorageIcon />}>
                            MANAGE STORAGE
            </Button>
            <Box sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 300px)'
            }}>
              <Card sx={{ padding: '30px 40px', textAlign: 'center', border: '1px solid #E0E0E0' }}>
                <InventoryIcon sx={{ fontSize: '45px', color: '#3F51B5' }} />
                <Typography sx={{
                  fontSize: '20px', fontWeight: 400, fontFamily: 'inter', marginTop: '15px'
                }}>No item</Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box sx={{ borderLeft: '1px solid #E0E0E0', padding: '5px 10px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Activity</Typography>
                <Button variant="contained" color="success" startIcon={<AddIcon />}>VIEW DASHBOARD</Button>
              </Box>
            </Box>
            <Box sx={{ border: '1px solid #E0E0E0', borderRight: 'none', padding: '20px 10px 5px 10px' }}>
              <Box sx={{
                display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '10px 0px'
              }}>
                <PhoneCallbackIcon sx={{ color: '#3F51B5', fontSize: '20px', marginTop: '4px' }} />
                <Box style={{ marginLeft: '10px' }}>
                  <Typography sx={{ fontSize: '20px', fontWeight: 400, fontFamily: 'inter' }}>+1 325 285 1557</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><CalendarTodayIcon sx={{ fontSize: '13px' }} />&nbsp;July 28, 2024</Typography>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><TimerOutlinedIcon sx={{ fontSize: '13px' }} />&nbsp;7 Days Ago</Typography>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><CallIcon sx={{ fontSize: '13px' }} />&nbsp;11 Seconds</Typography>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><AccessTimeIcon sx={{ fontSize: '13px' }} />&nbsp;6:42 PM</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ border: '1px solid #E0E0E0', borderRight: 'none', padding: '5px 10px' }}>
              <Box sx={{
                display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '10px 0px'
              }}>
                <PhoneCallbackIcon sx={{ color: '#3F51B5', fontSize: '20px', marginTop: '4px' }} />
                <Box style={{ marginLeft: '10px' }}>
                  <Typography sx={{ fontSize: '20px', fontWeight: 400, fontFamily: 'inter' }}>+1 325 285 1557</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><CalendarTodayIcon sx={{ fontSize: '13px' }} />&nbsp;July 28, 2024</Typography>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><TimerOutlinedIcon sx={{ fontSize: '13px' }} />&nbsp;7 Days Ago</Typography>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><CallIcon sx={{ fontSize: '13px' }} />&nbsp;11 Seconds</Typography>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><AccessTimeIcon sx={{ fontSize: '13px' }} />&nbsp;6:42 PM</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box sx={{ border: '1px solid #E0E0E0', borderRight: 'none', padding: '5px 10px' }}>
              <Box sx={{
                display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '10px 0px'
              }}>
                <PhoneCallbackIcon sx={{ color: '#3F51B5', fontSize: '20px', marginTop: '4px' }} />
                <Box style={{ marginLeft: '10px' }}>
                  <Typography sx={{ fontSize: '20px', fontWeight: 400, fontFamily: 'inter' }}>+1 325 285 1557</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><CalendarTodayIcon sx={{ fontSize: '13px' }} />&nbsp;July 28, 2024</Typography>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><TimerOutlinedIcon sx={{ fontSize: '13px' }} />&nbsp;7 Days Ago</Typography>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><CallIcon sx={{ fontSize: '13px' }} />&nbsp;11 Seconds</Typography>
                    <Typography sx={{
                      fontSize: '13px', fontWeight: 400, fontFamily: 'inter', color: '#00000066', marginRight: '10px'
                    }}><AccessTimeIcon sx={{ fontSize: '13px' }} />&nbsp;6:42 PM</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Contact.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Contact);
