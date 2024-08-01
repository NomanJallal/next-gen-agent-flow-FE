import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { Stack, Grid } from '@mui/material';
import { injectIntl } from 'react-intl';
import { SelectBox, SearchInput } from '../../../components/common';
import AgentsCard from './comps/AgentsCard';
import CreateAgent from './comps/CreateAgent';
import useStyles from './agents-jss';


function Agents(props) {
  const { intl } = props;
  const { classes } = useStyles();
  const title = brand.name + ' - Agents';
  const description = brand.desc;
  const [filters, setFilters] = React.useState({
    search: '',
    type: '',
  })

  const dummyData = [
    {
      username: 'Agent 1',
    },
    {
      username: 'Agent 2',
    }
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
        <Grid container spacing={2}>
          {/* Loop this */}
          {dummyData?.map((item, i) => (
            <Grid key={i} item xs={12} md={6} lg={4}>
              <AgentsCard {...item} />
            </Grid>
          ))}

          <Grid item xs={12} md={6} lg={4}>
            <CreateAgent />
          </Grid>
        </Grid>
      </Papper>
    </div>
  );
}

Agents.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Agents);
