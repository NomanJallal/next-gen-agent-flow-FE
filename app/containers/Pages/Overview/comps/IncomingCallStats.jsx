import React from 'react';
import { Papper } from 'enl-components';
import { Stack, Typography, Avatar, Box, Button } from '@mui/material';
import {
    CallReceived,
    AccountCircle,
} from '@mui/icons-material';

const IncomingCallStats = () => {
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
                Need to work here
            </Box>
        </Papper>
    )
}

export default IncomingCallStats
