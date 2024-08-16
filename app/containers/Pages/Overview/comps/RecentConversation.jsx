import React from 'react';
import { Papper } from 'enl-components';
import { Stack, Typography, Avatar, Box, Divider } from '@mui/material';
import { Button } from '@mui/material';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import { ArrowForward } from '@mui/icons-material';

const RecentConversation = () => {
    return (
        <Papper disablePadding sx={{ minHeight: 'unset !important', marginTop: "25px" }}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={3}
                justifyContent={'space-between'}
                sx={{
                    p: 3,
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
                        <CallOutlinedIcon fontSize='small' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Recent Conversation
                    </Typography>
                </Stack>
            </Stack>
            <Box>
                {Array.from({ length: 3 }, (_, index) => (<>
                    <Stack key={index} direction={'row'} alignItems={'center'} gap={1} sx={{ py: 2, px: 4 }}>
                        <CallOutlinedIcon sx={{ color: "primary.main" }} />
                        <Typography fontWeight={400} fontSize={20} lineHeight={1}>+1 325 283 1577</Typography>
                        <Stack direction={'row'} alignItems={'center'} fontWeight={400} fontSize={13} color={'text.secondary'}>
                            <CallReceivedIcon sx={{ fontSize: 15 }} />
                            July 1, 2025, 02:33pm
                        </Stack>
                    </Stack>
                    <Divider />
                </>))}

                <Stack direction={'row'} alignItems={'center'} gap={1} sx={{ py: 1, px: 3 }}>
                    <Button size='large' endIcon={<ArrowForward />}>
                        See more...
                    </Button>
                </Stack>
            </Box>
        </Papper>
    )
}

export default RecentConversation;
