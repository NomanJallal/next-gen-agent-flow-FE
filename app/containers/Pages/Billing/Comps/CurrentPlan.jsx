import React from 'react';
import { Papper } from 'enl-components';
import {
    Stack,
    Typography,
    Avatar,
    Box,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';

const CurrentPlan = () => {
    return (
        <Papper disablePadding sx={{ minHeight: 'unset !important', width: '100%' }}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={3}
                justifyContent={'space-between'}
                sx={{
                    p: 2,
                    borderBottom: 1,
                    borderColor: 'divider',
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
                        <InboxIcon fontSize='small' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Current Plan
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ p: 3 }}>
                <Typography variant='h6' fontWeight={700}>Pro Bundle</Typography>
                <Typography variant='body2' color={'text.secondary'}>The pro bundle</Typography>
            </Box>
        </Papper>
    )
}

export default CurrentPlan
