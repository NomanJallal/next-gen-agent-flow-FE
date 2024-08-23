import React from 'react';
import PropTypes from 'prop-types';
import {
    Stack,
    Typography
} from '@mui/material';

const Card = (props) => {
    const { value, title } = props

    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            gap={1}
            justifyContent={'space-between'}
            sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
                minHeight: 92,
                padding: 2,
            }}
        >
            <Stack gap={1}>
                <Typography variant='body2' color={'text.secondary'}>
                    {title}
                </Typography>
                <Typography variant='body1' sx={{ fontSize: 24, color: '#3F51B5' }}>
                    {value}
                </Typography>
            </Stack>
        </Stack>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default Card