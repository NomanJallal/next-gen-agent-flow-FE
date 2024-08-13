import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Grid } from '@mui/material';
import { injectIntl } from 'react-intl';
// Comps
import IncomingCallStats from './comps/IncomingCallStats';
import CallLastMonth from './comps/CallLastMonth';
import CallStateChart from './comps/IncomingCallStatsGraph/CallStateChart';
import Agents from './comps/Agents';
import CallActivity from './comps/CallActivity/CallActivity';
import TotalContacts from './comps/TotalContacts/TotalContacts';
import RecentConversation from './comps/RecentConversation';

function Overview(props) {
  const { intl } = props;
  const title = brand.name + ' - Overview';
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
          <IncomingCallStats />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CallLastMonth />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CallStateChart />
        </Grid>
        <Grid item xs={12}>
          <Agents />
          <RecentConversation/>
        </Grid>
        <Grid item xs={12}>
          <CallActivity />
        </Grid>
        <Grid item xs={12}>
          <TotalContacts />
        </Grid>
      </Grid>
    </div>
  );
}

Overview.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Overview);
