import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { injectIntl } from 'react-intl';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Header from './comps/Header';

function AgentWorkflowManagement(props) {
    const { intl } = props;
    const title = brand.name + ' - Agent Workflow Management';
    const description = brand.desc;
    const [currentTab, setCurrentTab] = useState('builder');

    const handleTabChange = (_, val) => {
        setCurrentTab(val);
    };

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
            <Papper disablePadding>
                <TabContext value={currentTab}>
                    <Header
                        handleTabChange={handleTabChange}
                    />
                    {/* Content */}
                    <TabPanel value="builder">Builder</TabPanel>
                    <TabPanel value="settings">Settings</TabPanel>
                    <TabPanel value="enrollment_history">Enrollment History</TabPanel>
                    <TabPanel value="execution_logs">Execution logs</TabPanel>
                </TabContext>
            </Papper>

        </div>
    );
}

AgentWorkflowManagement.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(AgentWorkflowManagement);
