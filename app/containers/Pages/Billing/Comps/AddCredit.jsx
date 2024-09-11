import React from 'react';
import { Papper } from 'enl-components';
import {
    Stack,
    Typography,
    Avatar,
    Box,
    Button,
} from '@mui/material';
import {
    TextField,
    InputAdornment,
} from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyles from '../billing-jss';

const AddCredit = () => {
    const { classes } = useStyles();
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
                        <AddCardIcon fontSize='small' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Add Credit
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ p: 3 }}>
                <Stack gap={2.5} width={'100%'}>
                    <Stack gap={0.5} width={'100%'}>
                        <Typography variant='subtitle2'>
                            Amount
                        </Typography>
                        <TextField
                            fullWidth
                            variant='outlined'
                            type='number'
                            className={classes.input}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><AttachMoneyIcon fontSize='small' /></InputAdornment>,
                                endAdornment: <InputAdornment position="end">USD</InputAdornment>,
                            }}
                        />
                    </Stack>
                    <Stack gap={0.5} width={'100%'}>
                        <Typography variant='subtitle2'>
                            Total Credit
                        </Typography>
                        <TextField
                            className={classes.input}
                            fullWidth
                            variant='outlined'
                            type='number'
                        />
                    </Stack>
                    <Button variant='contained' color='success' size='large' startIcon={<AddCircleIcon fontSize='small' />}>
                        Add credits
                    </Button>
                </Stack>
            </Box>
        </Papper>
    )
}

export default AddCredit
