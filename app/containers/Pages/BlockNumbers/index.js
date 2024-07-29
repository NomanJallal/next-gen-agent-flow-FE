import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { injectIntl } from 'react-intl';
import TabContext from '@mui/lab/TabContext';
import {
  Box, Button, Card, Typography
} from '@mui/material';

// icons
import BlockIcon from '@mui/icons-material/Block';
import AddIcon from '@mui/icons-material/Add';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

function BlockNumbers(props) {
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
      <Box>
        <Box>
          <Card sx={{ borderBottom: '1px solid #E0E0E0', borderRadius: '1px', padding: '15px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: 500, lineHeight: '29.05px' }}><BlockIcon sx={{ marginBottom: '3px', color: '#3F51B5' }} /> Block Numbers</Typography>
              <Button variant="contained" color="success"><AddIcon /> ADD</Button>
            </Box>
          </Card>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 200px)'
          }}
        >
          <Box>
            <HourglassEmptyIcon sx={{
              display: 'block', margin: '0 auto', fontSize: '46.67px', color: '#3F51B5'
            }} />
            <Typography sx={{ fontSize: '20px', fontWeight: 400, textAlign: 'center' }}>
                            Your block list is empty
            </Typography>
          </Box>
        </Box>

      </Box>

    </div>
  );
}

BlockNumbers.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(BlockNumbers);
