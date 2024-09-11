import React from 'react';
import { Papper } from 'enl-components';
import {
    Stack,
    Typography,
    Avatar,
    Box,
    Grid,
    Button
} from '@mui/material';
import {
    Chip,
    Tooltip,
} from '@mui/material';
import {
    TextField,
    InputAdornment,
} from '@mui/material';
import CachedIcon from '@mui/icons-material/Cached';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InfoIcon from '@mui/icons-material/Info';
import TollIcon from '@mui/icons-material/Toll';
import useStyles from '../billing-jss';

const AutoReload = () => {
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
                        <CachedIcon fontSize='small' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Auto Reload
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ p: 3 }}>
                <Grid container spacing={2.5}>
                    <Grid item xs={12} lg={6}>
                        <Stack gap={0.5} width={'100%'}>
                            <Typography variant='body2' mb={1} color={'text.secondary'}>
                                Default Payment Method: <strong>Yes</strong>
                            </Typography>
                            <Typography variant='subtitle2' className={classes.label}>
                                Threshold (Credits)
                                <Tooltip title="Threshold (Credits)" arrow>
                                    <InfoIcon fontSize="inherit" />
                                </Tooltip>
                            </Typography>
                            <TextField
                                fullWidth
                                variant='outlined'
                                type='number'
                                className={classes.input}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><TollIcon fontSize='small' /></InputAdornment>,
                                    endAdornment: <InputAdornment position="end">Credits</InputAdornment>,
                                }}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Stack gap={0.5} width={'100%'}>
                            <Typography variant='body2' mb={1} color={'text.secondary'}>
                                Current Status: <strong style={{ color: 'red' }}>Disabled</strong>
                            </Typography>
                            <Typography variant='subtitle2' className={classes.label}>
                                Amount (USD)
                                <Tooltip title="Amount USD" arrow>
                                    <InfoIcon fontSize="inherit" />
                                </Tooltip>
                            </Typography>
                            <TextField
                                fullWidth
                                variant='outlined'
                                type='number'
                                className={classes.input}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><AttachMoneyIcon fontSize='small' /></InputAdornment>,
                                    endAdornment: <InputAdornment position="end">= 10000000 Credits</InputAdornment>,
                                }}
                            />
                        </Stack>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='body1' color={'text.secondary'}>
                            1 USD = 100 Credits
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container sx={{ gap: 1, flexWrap: 'wrap' }}>
                        {['20,000 Credits / $20', '50,000 Credits / $50', '100,000 Credits / $100', '200,000 Credits / $200', '500,000 Credits / $500', '1,000,000 Credits / $1000', '2,000,000 Credits / $2000'].map((item, i) => (
                            <Button key={i} size='small' className={classes.chip} color='info'>{item}</Button>
                        ))}
                    </Grid>
                    <Grid item xs={12}>
                        <Button fullWidth variant='contained' color='success' size='large' startIcon={<CachedIcon fontSize='small' />}>
                            Add credits
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Papper >
    )
}

export default AutoReload
