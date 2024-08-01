import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardContent, CardActions, Button } from '@mui/material';
import { Avatar, Typography, IconButton, Stack } from '@mui/material';
import {
    SupportAgent,
    MoreHoriz
} from '@mui/icons-material';

const AgentsCard = ({ username, profile }) => {
    return (
        <Card
            elevation={0}
            sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
            }}
        >
            <CardContent
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 3,
                    py: 4,
                    position: 'relative',
                }}
            >
                <Stack alignItems={'center'} justifyContent={'center'} gap={2}>
                    <Avatar
                        sx={{
                            width: 100,
                            height: 100,
                            backgroundColor: '#304FFE',
                            color: '#fff',
                            fontSize: 56,
                        }}
                    >
                        <SupportAgent fontSize='inherit' />
                    </Avatar>
                    <Typography variant='subtitle1' fontSize={20} fontWeight={600}>
                        {username}
                    </Typography>
                </Stack>
                <IconButton size='small' sx={{
                    color: 'text.primary',
                    position: 'absolute',
                    top: 8,
                    right: 12
                }}>
                    <MoreHoriz fontSize='small' />
                </IconButton>
            </CardContent>
            <CardActions sx={{ px: 3, py: 2, flexDirection: 'column', gap: 1 }}>
                <Stack direction={'row'} gap={1} width={'100%'}>
                    <Button variant="outlined" fullWidth size='large' sx={{ borderRadius: 1 }}>
                        View Workflows
                    </Button>
                    <Button variant="outlined" fullWidth size='large' sx={{ borderRadius: 1 }}>
                        Edit Master Settings
                    </Button>
                </Stack>
                <Button variant="outlined" fullWidth size='large' sx={{ borderRadius: 1 }}>
                    Make A Test Call
                </Button>
            </CardActions>
        </Card>
    )
}

AgentsCard.propTypes = {
    username: PropTypes.string.isRequired,
};

export default AgentsCard
