import React from 'react';
import { Papper } from 'enl-components';
import {
    Box,
    Grid,
} from '@mui/material';
import Card from './Card';

const ResellerDetails = () => {

    const data = [
        { title: 'Name', value: 'Next Gen Calls, Inc' },
        { title: 'Client ID', value: '400303750' },
        { title: 'Total Calls', value: '285.00' },
        { title: 'Total Minutes', value: '196.43' },
        { title: 'Call Pause', value: 'No' },
        { title: 'Total Outbound Minutes', value: '6.79' },
        { title: 'Total Inbound Minutes', value: '189.64' },
        { title: 'Total Outbound Calls', value: '13.00' },
        { title: 'Total Inbound Calls', value: '272.00' },
        { title: 'Outbound Price/min', value: '0.13' },
        { title: 'Inbound Price/min', value: '0.13' },
        { title: 'Account Balance', value: '-29.52' },
    ]

    return (
        <Papper disablePadding sx={{ minHeight: 'unset !important' }}>
            <Box sx={{ p: 3 }}>
                <Grid container spacing={1.5}>
                    {data.map((item, i) => (
                        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
                            <Card {...item} filled={!i} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Papper>
    )
}

export default ResellerDetails