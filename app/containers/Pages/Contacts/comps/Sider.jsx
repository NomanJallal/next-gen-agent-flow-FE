import React from 'react';
import {
    Stack,
    Typography,
    Button,
} from '@mui/material';

import {
    Add,
    FileUpload,
    SdStorage,
    Inventory
} from '@mui/icons-material';
import { SearchInput } from '../../../../components/common';

import useStyles from './style-jss';

const Sider = () => {
    const { classes } = useStyles();

    return (
        <Stack sx={{
            flexGrow: 1,
            p: 1,
            borderRight: 1,
            borderColor: 'divider',
            maxWidth: 348,
        }}>
            <Typography sx={{ fontSize: '24px', fontWeight: 500, py: 2, mb: 2 }}>
                Contacts
            </Typography>

            <SearchInput placeholder={'Search Contacts'} size="small" fullWidth />

            <Stack direction={'row'} gap={1} sx={{ mb: 1, mt: 3, }}>
                <Button fullWidth variant="contained" startIcon={<Add />}>
                    ADD CONTACTS
                </Button>
                <Button fullWidth variant="outlined" startIcon={<FileUpload />}>
                    EXPORT
                </Button>
            </Stack>
            <Button fullWidth variant="outlined" startIcon={<SdStorage />}>
                MANAGE STORAGE
            </Button>
            <Stack className={classes.listWrapper}>
                <Stack className={classes.empty}>
                    <Inventory />
                    <Typography sx={{
                        fontSize: 20,
                        fontWeight: 400,
                    }}>
                        No item
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Sider
