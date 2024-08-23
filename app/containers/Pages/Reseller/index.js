import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Grid } from '@mui/material';
import { injectIntl } from 'react-intl';
// Comps
import ResellerDetails from './comps/ResellerDetails';
import DataTable from './comps/DataTable';

function Reseller(props) {
  const { intl } = props;
  const title = brand.name + ' - Reseller';
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ResellerDetails />
        </Grid>
        <Grid item xs={12}>
          <DataTable />
        </Grid>
      </Grid>
    </div>
  );
}

Reseller.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Reseller);
