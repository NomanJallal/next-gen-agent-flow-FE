import React from 'react';
import { Papper } from 'enl-components';
import { Stack, Typography, Avatar, Box, Button } from '@mui/material';
import {
    SupportAgent
} from '@mui/icons-material';

const Agents = () => {
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
                        <SupportAgent fontSize='small' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Agents
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ p: 2 }}>
                Need to work here
            </Box>
        </Papper>
    )
}

export default Agents
