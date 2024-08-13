import React from 'react';
import { Papper } from 'enl-components';
import { Stack, Typography, Avatar, Box, Button } from '@mui/material';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import Chart from './Chart';

const CallStateChart = () => {
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
                        <img src='./images/Graph.png' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Incoming Call Stats
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ p: 2 }}>
                <Chart />
            </Box>
        </Papper>
    )
}

export default CallStateChart
