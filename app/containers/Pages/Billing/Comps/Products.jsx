import React from 'react';
import { Papper } from 'enl-components';
import {
    Stack,
    Typography,
    Avatar,
    Box,
    LinearProgress,
    Divider,
} from '@mui/material';
import WidgetsIcon from '@mui/icons-material/Widgets';

const Products = () => {

    const data = [
        {
            title: 'Phone Number',
            sub_title: 'Phone Number',
            used: '5 used',
            available: '5 available',
            progress: 50,
        },
        {
            title: 'Bonus Credits',
            sub_title: 'Monthly credits',
            used: '5000 bonus credits provided monthly',
        },
        {
            title: 'Agent',
            sub_title: 'Agent',
            used: '0 used',
            available: '5 available',
            progress: 50,
        },
        {
            title: 'Knowledgebase Items',
            sub_title: 'Items in your knowledgebase.',
            used: '650 used',
            available: '1000 available',
            progress: 65,
        }
    ]

    return (
        <Papper disablePadding sx={{ minHeight: 'unset !important', width: '100%' }}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={3}
                justifyContent={'space-between'}
                sx={{
                    p: 2,
                    borderBottom: 1,
                    borderColor: 'divider',
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
                        <WidgetsIcon fontSize='small' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Products
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ p: 3 }}>
                <Stack gap={2}>
                    {data.map((item, i) => (<>
                        <Stack key={i} gap={1}>
                            <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'space-between'}>
                                <Typography variant='Subtitle1'>{item?.title}</Typography>
                                <Typography variant='body2' color={'text.secondary'}>{item?.sub_title}</Typography>
                            </Stack>
                            {(item?.progress || item?.progress === 0) ? (
                                <LinearProgress variant="determinate" value={item?.progress} sx={{ height: 8 }} />
                            ) : null}
                            <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'space-between'}>
                                <Typography variant='body2' color={'text.secondary'}>{item?.used}</Typography>
                                <Typography variant='body2' color={'text.secondary'}>{item?.available}</Typography>
                            </Stack>
                        </Stack>
                        {data.length !== i + 1 && (
                            <Divider />
                        )}
                    </>))}
                </Stack>
            </Box>
        </Papper>
    )
}

export default Products
