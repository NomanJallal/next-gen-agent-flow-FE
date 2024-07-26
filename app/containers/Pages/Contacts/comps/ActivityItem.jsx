import React from 'react';
import {
    Stack,
    Typography,
} from '@mui/material';
import {
    PhoneCallback,
    CalendarToday,
    AccessTime,
    CallOutlined,
    TimerOutlined,
} from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CallIcon from '@mui/icons-material/Call';

const ActivityItem = ({ extra }) => {

    return (
        <Stack
            direction={'row'}
            gap={2}
            sx={{
                color: 'primary.main',
                p: 2,
            }}>
            <PhoneCallback sx={{ mt: 0.5 }} />
            <Stack color={'text.primary'} gap={1.5}>
                <Typography sx={{ fontSize: '20px', fontWeight: 400 }}>
                    +1 325 285 1557
                </Typography>
                <Stack direction={'row'} gap={2} flexWrap={'wrap'}>
                    <Typography variant='caption' sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        gap: 0.5,
                        alignItems: 'center',
                    }}>
                        <CalendarToday fontSize='inherit' />
                        July 25, 2024
                    </Typography>
                    <Typography variant='caption' sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        gap: 0.5,
                        alignItems: 'center',
                    }}>
                        <AccessTime fontSize='inherit' />
                        07 Days ago
                    </Typography>
                    <Typography variant='caption' sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        gap: 0.5,
                        alignItems: 'center',
                    }}>
                        <CallOutlined fontSize='inherit' />
                        11 Seconds
                    </Typography>
                    <Typography variant='caption' sx={{
                        color: 'text.secondary',
                        display: 'flex',
                        gap: 0.5,
                        alignItems: 'center',
                    }}>
                        <TimerOutlined fontSize='inherit' />
                        6:42 PM
                    </Typography>
                </Stack>
                {extra ? (
                    <Typography variant='caption' sx={{
                        color: 'text.secondary',
                        mt: 1,
                    }}>
                        Some text for this spaceSome text for this spaceSome text for this spaceSome text for this spaceSome text for this spaceSome text for this space
                    </Typography>
                ) : null}
            </Stack>
        </Stack>
    )
}

export default ActivityItem