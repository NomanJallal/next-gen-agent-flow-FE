import React from 'react';
import { Typography, Card } from '@mui/material';
import MeetIcon from '../assets/google_meet.png';

const LinkGoogleMeet = () => (
  <div>
    <Card sx={{ border: '1px solid #D7D7D7', padding: '22px' }}>
      <img src={MeetIcon} style={{ height: '54px', width: '310px' }} />
      <Typography sx={{ marginTop: '20px' }} variant='h5' fontWeight={400} fontSize={20}>No Account linked</Typography>
      <Typography sx={{ marginTop: '10px' }} color={'#AAAAAA'} fontWeight={400} fontSize={18}>Connect to your google calendar from the scenario builder </Typography>
    </Card>
  </div>
);

export default LinkGoogleMeet;
