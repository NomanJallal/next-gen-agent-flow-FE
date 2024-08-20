import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

const Trigger = ({ label, icon }) => {
    return (
        <Stack
            direction={'row'}
            alignItems={'center'}
            gap={1}
            sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: 1.5,
                px: 1.5,
                py: 1,
                color: 'primary.main',
            }}
        >
            {icon}
            <Typography color={'text.secondary'}>
                {label}
            </Typography>
        </Stack>
    )
}


Trigger.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default Trigger
