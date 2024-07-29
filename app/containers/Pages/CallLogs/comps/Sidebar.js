import React from 'react';
import {
    Stack,
    Card,
    CardContent,
    Typography,
} from '@mui/material';

import {
    CalendarToday,
    AccessTime,
    CallOutlined,
    TimerOutlined,
} from '@mui/icons-material';

import { callsData } from '../dummy';

const Sidebar = ({ selectedCard, setSelectedCard }) => {
    return (
        <Stack sx={{
            width: '100%',
            borderRight: 1,
            borderColor: 'divider',
            maxWidth: 348,
            minHeight: '600px',
            overflow: 'auto',
            height: 'calc(100vh - 184px)',
        }}>
            {callsData.map((item, i) => (
                <Card
                    key={i}
                    sx={{
                        borderRadius: 0,
                        borderBottom: 1,
                        borderColor: 'divider',
                        '&:last-of-type': {
                            borderBottom: 0,
                        },
                        cursor: 'pointer',
                        height: 'fit-content',
                        overflow: 'visible',
                        boxShadow: 0,
                        backgroundColor: selectedCard?.id === item?.id ? 'primary.light' : 'transparent',
                    }}
                    onClick={() => setSelectedCard(item)}
                >
                    <CardContent sx={{ p: 3 }}>
                        <Stack gap={2}>
                            <Typography sx={{
                                fontSize: '20px',
                                fontWeight: 400,
                                color: selectedCard?.id === item?.id && 'primary.main',
                            }}>
                                {item.phone}
                            </Typography>
                            <Stack
                                gap={1}
                                flexWrap={'wrap'}
                                sx={{
                                    color: selectedCard?.id === item?.id ? 'primary.main' : 'text.secondary',
                                }}
                            >
                                <Typography variant='caption' sx={{
                                    display: 'flex',
                                    gap: 0.5,
                                    alignItems: 'center',
                                }}>
                                    <CalendarToday fontSize='inherit' />
                                    {item.date}
                                </Typography>
                                <Typography variant='caption' sx={{
                                    display: 'flex',
                                    gap: 0.5,
                                    alignItems: 'center',
                                }}>
                                    <AccessTime fontSize='inherit' />
                                    {item.daysAgo}
                                </Typography>
                                <Typography variant='caption' sx={{
                                    display: 'flex',
                                    gap: 0.5,
                                    alignItems: 'center',
                                }}>
                                    <CallOutlined fontSize='inherit' />
                                    {item.callDuration}
                                </Typography>
                                <Typography variant='caption' sx={{
                                    display: 'flex',
                                    gap: 0.5,
                                    alignItems: 'center',
                                }}>
                                    <TimerOutlined fontSize='inherit' />
                                    {item.time}
                                </Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            ))}
        </Stack>
    )
}

export default Sidebar
