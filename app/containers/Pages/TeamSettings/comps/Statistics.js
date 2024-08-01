import React from 'react';
import { Papper } from 'enl-components';
import {
  Stack,
  Typography,
  Avatar,
  Box,
  Button,
  Grid,
} from '@mui/material';
import {
  CallReceived,
  AccountCircle,
} from '@mui/icons-material';
import CountCard from './CountCard';

const Statistics = () => {
  const data = [
    {
      count: '4',
      title: 'Call Members',
      icon: 'call',
    },
    {
      count: '1',
      title: 'Agents',
      icon: 'calendar',
    },
    {
      count: '0',
      title: 'Users',
      icon: 'contacts',
    },
    {
      count: '1',
      title: 'Phone Numbers',
      icon: 'time',
    },
    {
      count: '0',
      title: 'Contacts',
      icon: 'watch',
    },
    {
      count: '9',
      title: 'Calls',
      icon: 'timeline',
    }
  ];

  return (
    <div>
      <>
        <Grid container spacing={1.5}>
          {data.map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={4} lg={4}>
              <CountCard {...item} filled={!i} />
            </Grid>
          ))}
        </Grid>
      </>
    </div>
  );
};

export default Statistics;
