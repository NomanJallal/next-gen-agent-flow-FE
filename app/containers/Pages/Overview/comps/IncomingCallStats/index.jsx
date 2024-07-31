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

const IncomingCallStats = () => {

    const data = [
        {
            count: '0',
            title: 'Calls Today',
            icon: 'call',
        },
        {
            count: '5',
            title: 'Calls Last Month',
            icon: 'calendar',
        },
        {
            count: '0',
            title: 'Contacts',
            icon: 'contacts',
        },
        {
            count: '0',
            title: 'Quires answered',
            icon: 'time',
        },
        {
            count: '1',
            title: 'Minutes saved',
            icon: 'watch',
        },
        {
            count: '0m 12s',
            title: 'Avg. Call duration',
            icon: 'timeline',
        }
    ]

    return (
        <Papper disablePadding sx={{ minHeight: 'unset !important' }}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={3}
                justifyContent={'space-between'}
                sx={{
                    p: 3,
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
                        <CallReceived fontSize='small' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Incoming Call Stats
                    </Typography>
                </Stack>
                <Button
                    startIcon={<AccountCircle />}
                    variant='contained'
                >
                    LOG IN
                </Button>
            </Stack>
            <Box sx={{ p: 2 }}>
                <Grid container spacing={1.5}>
                    {data.map((item, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={2}>
                            <CountCard {...item} filled={!i} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Papper>
    )
}

export default IncomingCallStats
