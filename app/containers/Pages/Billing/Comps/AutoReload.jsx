import React from 'react';
import { Papper } from 'enl-components';
import {
    Stack,
    Typography,
    Avatar,
    Box,
} from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';

const AutoReload = () => {
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
                        <CachedIcon fontSize='small' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Auto Reload
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ p: 2 }}>
                Auto Reload data here
            </Box>
        </Papper>
    )
}

export default AutoReload
