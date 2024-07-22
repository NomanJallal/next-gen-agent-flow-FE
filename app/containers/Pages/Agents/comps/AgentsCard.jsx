import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { Avatar, Typography, IconButton, Stack } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const AgentsCard = ({ username, profile, userId, date }) => {
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
                    justifyContent: 'space-between',
                    px: 3,
                }}
            >
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                    <Avatar
                        alt={username}
                        src={profile}
                        sx={{
                            width: 80,
                            height: 80,
                        }}
                    />
                    <Typography variant='body1' fontWeight={500}>
                        {username}
                    </Typography>
                </Stack>
                <IconButton sx={{ color: 'text.primary' }}>
                    <MoreHorizIcon fontSize='large' />
                </IconButton>
            </CardContent>
            <CardContent sx={{ px: 3, display: 'flex', flexDirection: 'column', gap: 4.5 }}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={2}>
                    <Chip label={'Outbound'} color='warning' />
                    <Typography variant='body1' fontWeight={500}>
                        {date}
                    </Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={2}>
                    <Typography variant='body1' fontWeight={500}>
                        Agent ID <br />
                        ({userId})
                    </Typography>
                    <IconButton sx={{ color: 'primary.main' }}>
                        <FileCopyIcon fontSize='large' />
                    </IconButton>
                </Stack>
            </CardContent>
            <CardActions sx={{ px: 3, py: 2 }}>
                <Button variant="outlined" fullWidth size='large' sx={{ borderRadius: 1 }}>
                    Make A Call
                </Button>
            </CardActions>
        </Card>
    )
}

AgentsCard.propTypes = {
    username: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default AgentsCard
