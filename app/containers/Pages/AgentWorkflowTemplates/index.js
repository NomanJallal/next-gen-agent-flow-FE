import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { Stack, Grid } from '@mui/material';
import { injectIntl } from 'react-intl';
import Card from '@mui/material/Card';
import { toUnitless } from '@mui/material/styles/cssUtils';
import { SelectBox, SearchInput } from '../../../components/common';

function AgentWorkflowTemplates(props) {
  const { intl } = props;
  const title = brand.name + ' - Workflow Templates';
  const description = brand.desc;
  const [filters, setFilters] = React.useState({
    search: '',
    type: '',
  });

  const workFlowData = [
    {
      id: 1,
      icon: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user',
      title: 'Insurance',
    },
    {
      id: 1,
      icon: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user',
      title: 'Real Estate',
    },
    {
      id: 1,
      icon: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user',
      title: 'Insurance',
    },
    {
      id: 1,
      icon: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user',
      title: 'Insurance',
    },
    {
      id: 1,
      icon: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user',
      title: 'Insurance',
    },
    {
      id: 1,
      icon: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user',
      title: 'Insurance',
    },
    {
      id: 1,
      icon: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user',
      title: 'Insurance',
    },
    {
      id: 1,
      icon: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user',
      title: 'Insurance',
    },
  ];

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
        <Stack direction={'row'} gap={2} sx={{ pb: 3, mb: 2, }}>
          <SearchInput
            onChnage={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
            value={filters?.search}
            placeholder={'Search Agents'}
            size="small"
          />
          <SelectBox
            onChnage={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
            value={filters.type}
            options={[{ value: 'All', label: 'All' }]}
            placeholder={'Search Call types'}
          />
        </Stack>
        {/* Grid */}
        <Grid container spacing={2} direction="row">
          {
            workFlowData.map((items) => (
              <Grid item xs={12} md={6} lg={3} key={items.title}>
                <Card style={{ padding: '10px 0px', border: '1px solid #E0E0E0' }}>
                  <div style={{
                    height: '60px', width: '60px', backgroundColor: '#304FFE3B', borderRadius: '50px', margin: 'auto'
                  }}>
                  </div>
                  <p style={{
                    fontSize: '16px', fontWeight: 500, textAlign: 'center', marginTop: '10px'
                  }}>{items.title}</p>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Papper>
    </div>
  );
}

AgentWorkflowTemplates.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(AgentWorkflowTemplates);
