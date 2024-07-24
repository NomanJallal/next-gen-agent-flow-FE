import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { Stack, Grid } from '@mui/material';
import { injectIntl } from 'react-intl';
import { SelectBox, SearchInput } from '../../../components/common';
import useStyles from './calllogs-jss';


function CallLogs(props) {
  const { intl } = props;
  const { classes } = useStyles();
  const title = brand.name + ' - Call Logs';
  const description = brand.desc;
  const [filters, setFilters] = React.useState({
    search: '',
    type: '',
  })

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
      <Papper disablePadding={true}>
        <Stack direction={'row'} gap={2} sx={{ p: 3, pb: 3, borderBottom: 1, borderColor: 'divider' }}>
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
        {/* work below */}
      Call Logs History 
      </Papper>
    </div>
  );
}

CallLogs.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(CallLogs);
