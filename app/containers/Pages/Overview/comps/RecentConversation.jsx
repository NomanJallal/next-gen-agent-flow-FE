import React from 'react';
import { Papper } from 'enl-components';
import { Stack, Typography, Avatar, Box } from '@mui/material';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CallReceivedIcon from '@mui/icons-material/CallReceived';

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
                        RecentConversation
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ p: 2 }}>

                <Box sx={{ display: "flex", alignItems: "flex-end", marginLeft: "13px", marginBottom: "20px" }}>
                    <CallOutlinedIcon sx={{ color: "#3F51B5", marginBottom: "3px" }} fontSize='small' />
                    <Typography fontWeight={400} fontSize={20} color={'#000'} sx={{ marginLeft: "15px" }}>+1 325 283 1577</Typography>
                    &nbsp;&nbsp;<Box fontWeight={400} fontSize={13} color={'#00000066'} display={'flex'}>
                        <CallReceivedIcon sx={{ fontSize: "20px" }} />
                        <Typography >July 1, 2025, 02:33pm </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end", marginLeft: "10px", marginBottom: "20px" }}>
                    <CallOutlinedIcon sx={{ color: "#3F51B5", marginBottom: "3px" }} fontSize='small' />
                    <Typography fontWeight={400} fontSize={20} color={'#000'} sx={{ marginLeft: "15px" }}>+1 325 283 1577</Typography>
                    &nbsp;&nbsp;<Box fontWeight={400} fontSize={13} color={'#00000066'} display={'flex'}>
                        <CallReceivedIcon sx={{ fontSize: "20px" }} />
                        <Typography >July 1, 2025, 02:33pm </Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-end", marginLeft: "10px", marginBottom: "20px" }}>
                    <CallOutlinedIcon sx={{ color: "#3F51B5", marginBottom: "3px" }} fontSize='small' />
                    <Typography fontWeight={400} fontSize={20} color={'#000'} sx={{ marginLeft: "15px" }}>+1 325 283 1577</Typography>
                    &nbsp;&nbsp;<Box fontWeight={400} fontSize={13} color={'#00000066'} display={'flex'}>
                        <CallReceivedIcon sx={{ fontSize: "20px" }} />
                        <Typography >July 1, 2025, 02:33pm </Typography>
                    </Box>
                </Box>


            </Box>
        </Papper>
    )
}

export default RecentConversation;
