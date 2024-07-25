import React from 'react';
import { Box, Card, Grid, Switch } from '@mui/material';
const Builder = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#F2F4F7', p: 3, minHeight: 'calc(100vh - 260px)', borderRadius: '0 0 16px 16px' }}>
            <Card style={{
                width: '150px', borderRadius: '25px',
            }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    alignItems="center"
                >
                    <Switch />
                    <p style={{ marginTop: '10px' }}>Slide View</p>
                </Grid>
            </Card>
        </Box>
    )
}

export default Builder
