import React from 'react';
import { Papper } from 'enl-components';
import { Stack, Typography, Avatar, Box } from '@mui/material';
import Chart from './Chart';

const CallLastMonth = () => {
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
                        Call Last Month
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ width: '100%', height: 280 }}>
                <Chart />
            </Box>
        </Papper>
    )
}

export default CallLastMonth
