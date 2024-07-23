import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Button, Typography } from '@mui/material';
import { IconButton, Switch } from '@mui/material';
import {
    ArrowBackIosNew,
    Edit,
    Refresh,
} from '@mui/icons-material';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import useStyles from './header-jss';

const Header = (props) => {
    const { handleTabChange } = props;
    const { classes } = useStyles();
    return (
        <Stack>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={2} sx={{ px: 4, py: 2, borderBottom: 1, borderColor: 'divider' }}
            >
                <Button
                    sx={{ color: 'text.primary' }}
                    startIcon={<ArrowBackIosNew fontSize='small' />}
                >
                    Back to work flow
                </Button>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                        Name of agent Workflow
                    </Typography>
                    <IconButton sx={{ color: 'text.primary' }}>
                        <Edit />
                    </IconButton>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <IconButton sx={{ color: 'text.primary' }}>
                        <Refresh />
                    </IconButton>
                    <Button
                        variant='outlined'
                    >
                        SAVED
                    </Button>
                </Stack>
            </Stack>
            {/* Sub header */}
            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={2}
                sx={{ px: 4, py: 0, borderBottom: 1, borderColor: 'divider' }}
            >
                <Stack direction={'row'} alignItems={'center'} flexGrow={1} justifyContent={'center'} gap={2}>
                    <TabList onChange={handleTabChange} className={classes.tabList}>
                        <Tab label="Builder" value="builder" />
                        <Tab label="Settings" value="settings" />
                        <Tab label="Enrollment History" value="enrollment_history" />
                        <Tab label="Execution logs" value="execution_logs" />
                    </TabList>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                    <Button
                        sx={{
                            backgroundColor: 'primary.light',
                            px: 3,
                            textTransform: 'uppercase',
                        }}
                    >
                        Test workflow
                    </Button>
                    <Stack direction="row" alignItems="center">
                        <Typography>Draft</Typography>
                        <Switch color="primary" />
                        <Typography>Publish</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

Header.PropTypes = {
    handleTabChange: PropTypes.func.isRequired,
}

export default Header
