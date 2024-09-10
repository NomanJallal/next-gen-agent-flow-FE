import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Grid } from '@mui/material';
import { injectIntl } from 'react-intl';
import Wallet from './Comps/Wallet';
import CurrentPlan from './Comps/CurrentPlan';
import Products from './Comps/Products';
import AddCredit from './Comps/AddCredit';
import AutoReload from './Comps/AutoReload';

function Billing(props) {
    const { intl } = props;
    const title = brand.name + ' - Billing';
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
                <Grid item xs={12} container sx={{ flexDirection: 'column' }} gap={3} lg={6}>
                    <Wallet />
                    <CurrentPlan />
                    <Products />
                </Grid>
                <Grid item xs={12} container sx={{ flexDirection: 'column' }} gap={3} lg={6}>
                    <AddCredit />
                    <AutoReload />
                </Grid>
            </Grid>
        </div>
    );
}

Billing.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(Billing);