import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { Stack, Grid } from '@mui/material';
import { injectIntl } from 'react-intl';
import Card from '@mui/material/Card';
import { toUnitless } from '@mui/material/styles/cssUtils';

// icons
import BarChartIcon from '@mui/icons-material/BarChart';
import CompareIcon from '@mui/icons-material/Compare';
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
      icon: <CompareIcon/>,
      title: 'Insurance',
    },
    {
      id: 1,
      icon: <BarChartIcon/>,
      title: 'Real Estate',
    },
    {
      id: 1,
      icon: <CompareIcon/>,
      title: 'Insurance',
    },
    {
      id: 1,
      icon: <CompareIcon/>,
      title: 'Insurance',
    },
    {
      id: 1,
      icon: <CompareIcon/>,
      title: 'Insurance',
    },
    {
      id: 1,
      icon: <CompareIcon/>,
      title: 'Insurance',
    },
    {
      id: 1,
      icon: <CompareIcon/>,
      title: 'Insurance',
    },
    {
      id: 1,
      icon: <CompareIcon/>,
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
                    height: '60px', width: '60px', backgroundColor: '#304FFE3B', borderRadius: '50px', margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#304FFE'
                  }}>
                    {items.icon}
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
