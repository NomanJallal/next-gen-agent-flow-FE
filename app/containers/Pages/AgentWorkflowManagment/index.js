import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { injectIntl } from 'react-intl';
import { Stack, Avatar, Typography } from '@mui/material';
import { AccountTreeRounded } from '@mui/icons-material';
import TableWrapper from './comps/TableWrapper';
import WorkflowTable from './comps/WorkflowTable';

// dummy
import { rows } from './data';

function AgentWorkflowManagment(props) {
    const { intl } = props;
    const title = brand.name + ' - Agents Workflow Managment';
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
            <Papper>
                <Stack gap={4}>
                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                        <Avatar sx={{
                            backgroundColor: 'background.default',
                            width: 44,
                            height: 44,
                            color: 'primary.main'
                        }}>
                            <AccountTreeRounded fontSize='small' />
                        </Avatar>
                        <Typography variant='h5' fontWeight={600} fontSize={20}>
                            Search Workflow
                        </Typography>
                    </Stack>

                    {/* Inbound table */}
                    <TableWrapper title={'Inbound'}>
                        <WorkflowTable
                            rows={rows}
                        />
                    </TableWrapper>

                    {/* Outbound table */}
                    <TableWrapper title={'Outbound'}>
                        <WorkflowTable
                            rows={rows}
                        />
                    </TableWrapper>
                </Stack>
            </Papper>
        </div>
    );
}

AgentWorkflowManagment.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(AgentWorkflowManagment);
