import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { Stack, Typography, Avatar, Box, Button } from '@mui/material';
import { injectIntl } from 'react-intl';
import {
    CalendarToday,
    PersonAdd,
} from '@mui/icons-material';


function TeamCalendar(props) {
    const { intl } = props;
    const title = brand.name + ' - Calendar';
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
                                <CalendarToday fontSize='small' />
                            </Avatar>
                            <Typography variant='h5' fontWeight={600} fontSize={20}>
                                Calendar
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
            </Stack>
        </div>
    );
}

TeamCalendar.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(TeamCalendar);
