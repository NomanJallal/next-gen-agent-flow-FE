import React from 'react';
import { Papper } from 'enl-components';
import {
    Stack,
    Typography,
    Avatar,
    Box,
    Button,
    Alert,
    Link
} from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HistoryIcon from '@mui/icons-material/History';

const Wallet = () => {
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
                        <AccountBalanceWalletIcon fontSize='small' />
                    </Avatar>
                    <Typography variant='h5' fontWeight={600} fontSize={20}>
                        Wallet
                    </Typography>
                </Stack>
            </Stack>
            <Box sx={{ p: 3 }}>
                <Stack sx={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center', py: 3 }} gap={3}>
                    <Box>
                        <Typography variant="h4" fontWeight={700}>
                            0.00
                        </Typography>
                        <Typography variant="body2" color={'text.secondary'}>
                            Credits available
                        </Typography>
                    </Box>
                    <Stack gap={1.5} direction={'row'}>
                        <Button
                            startIcon={<AttachMoneyIcon fontSize='small' />}
                        >
                            Billing Portal
                        </Button>
                        <Button
                            startIcon={<HistoryIcon fontSize='small' />}
                        >
                            Credit History
                        </Button>
                    </Stack>
                </Stack>
                <Alert severity="info" sx={{ border: 1, borderColor: 'divider' }}>
                    You have legacy agents. Please use the <Link href="/app">Legacy Billing</Link> Page to manage your older subscription.
                </Alert>
            </Box>
        </Papper>
    )
}

export default Wallet
