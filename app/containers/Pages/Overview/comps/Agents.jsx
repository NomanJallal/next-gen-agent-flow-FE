import React from 'react';
import { Papper } from 'enl-components';
import { Stack, Typography, Avatar, Box, Button } from '@mui/material';
import {
    SupportAgent
} from '@mui/icons-material';

import CallReceivedIcon from '@mui/icons-material/CallReceived';

const Agents = () => {
    return (
        <Papper disablePadding sx={{ minHeight: 'unset !important' }}>
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
                        <CallReceivedIcon fontSize='small' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Agents
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ p: 2 }}>

                <Box sx={{display:"flex", alignItems:"center", marginLeft:"10px"}}>
                    <img src="./images/Chatbot.png" alt='icon-call-bot' sx={{width:"40px"}} />
                    <Box sx={{marginLeft:"15px"}}>
                        <Typography fontWeight={400} fontSize={20} color={'#000'}>Assistant</Typography>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <Typography fontWeight={400} fontSize={13} color={'#00000066'}>1 Scenario</Typography>&nbsp;
                            <Typography fontWeight={400} fontSize={13} color={'#00000066'}>0 References</Typography>
                        </Box>
                    </Box>
                </Box>


            </Box>
        </Papper>
    )
}

export default Agents
