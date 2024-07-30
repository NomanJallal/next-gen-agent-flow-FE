import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { Stack, Typography, Avatar, Box, Button } from '@mui/material';
import { injectIntl } from 'react-intl';
import {
    Group,
    BarChart,
    SupportAgent,
    PersonAdd,
} from '@mui/icons-material';


function TeamSettings(props) {
    const { intl } = props;
    const title = brand.name + ' - Team Settings';
    const description = brand.desc;

    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
            </Helmet>
            <Stack gap={3}>
                <Papper disablePadding sx={{ minHeight: 'unset !important' }}>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        gap={3}
                        justifyContent={'space-between'}
                        sx={{
                            p: 3,
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
                                <Group fontSize='small' />
                            </Avatar>
                            <Typography variant='h5' fontWeight={600} fontSize={20}>
                                Team Settings
                            </Typography>
                        </Stack>
                        <Button
                            color='info'
                            startIcon={<PersonAdd />}
                            variant='outlined'
                        >
                            INVITATION USER
                        </Button>
                    </Stack>
                    <Box sx={{ p: 2 }}>
                        Need to work here
                    </Box>
                </Papper>
                <Papper disablePadding sx={{ minHeight: 'unset !important' }}>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        gap={1}
                        sx={{
                            p: 3,
                            borderBottom: 1,
                            borderColor: 'divider',
                        }}
                    >
                        <Avatar sx={{
                            backgroundColor: 'background.default',
                            width: 44,
                            height: 44,
                            color: 'primary.main'
                        }}>
                            <BarChart fontSize='small' />
                        </Avatar>
                        <Typography variant='h5' fontWeight={600} fontSize={20}>
                            Statistics
                        </Typography>
                    </Stack>
                    <Box sx={{ p: 2 }}>
                        Need to work here
                    </Box>
                </Papper>
                <Papper disablePadding sx={{ minHeight: 'unset !important' }}>
                    <Stack
                        direction={'row'}
                        alignItems={'center'}
                        gap={1}
                        sx={{
                            p: 3,
                            borderBottom: 1,
                            borderColor: 'divider',
                        }}
                    >
                        <Avatar sx={{
                            backgroundColor: 'background.default',
                            width: 44,
                            height: 44,
                            color: 'primary.main'
                        }}>
                            <SupportAgent fontSize='small' />
                        </Avatar>
                        <Typography variant='h5' fontWeight={600} fontSize={20}>
                            Agents
                        </Typography>
                    </Stack>
                    <Box sx={{ p: 2 }}>
                        Need to work here
                    </Box>
                </Papper>
            </Stack>
        </div>
    );
}

TeamSettings.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(TeamSettings);
