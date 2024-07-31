import React from 'react';
import PropTypes from 'prop-types';
import {
    Stack,
    Typography,
    Box,
    alpha,
} from '@mui/material';
import {
    Call,
    CalendarToday,
    Contacts,
    AccessTime,
    TimerOutlined,
    Timeline,
} from '@mui/icons-material';

const CountCard = (props) => {
    const { count, title, icon, filled } = props

    const iconsSet = {
        call: <Call fontSize='inherit' />,
        calendar: <CalendarToday fontSize='inherit' />,
        contacts: <Contacts fontSize='inherit' />,
        time: <AccessTime fontSize='inherit' />,
        watch: <TimerOutlined fontSize='inherit' />,
        timeline: <Timeline fontSize='inherit' />,
    }

    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            gap={1}
            justifyContent={'space-between'}
            sx={{
                border: 1,
                borderColor: '#304FFE',
                borderRadius: 2,
                minHeight: 112,
                padding: 3,
                bgcolor: filled && '#304FFE'
            }}
        >
            <Stack gap={1}>
                <Typography variant='h4' sx={{ fontSize: 32, fontWeight: 600, color: filled ? '#fff' : '#304FFE' }}>
                    {count}
                </Typography>
                <Typography variant='body2' color={filled ? alpha('#fff', 0.5) : 'text.secondary'} fontWeight={500}>
                    {title}
                </Typography>
            </Stack>
            {Boolean(iconsSet[icon]) && (
                <Box sx={{
                    fontSize: 56,
                    color: (theme) => filled ? alpha('#fff', 0.5) : alpha('#304FFE', 0.5),
                    lineHeight: 1,
                }}>
                    {iconsSet[icon]}
                </Box>
            )}
        </Stack>
    )
}

CountCard.propTypes = {
    filled: PropTypes.bool,
    count: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}

export default CountCard
