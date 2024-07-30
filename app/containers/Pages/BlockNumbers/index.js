import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { injectIntl } from 'react-intl';
import {
  Stack,
  Box,
  Button,
  Card,
  Typography,
} from '@mui/material';

// icons
import BlockIcon from '@mui/icons-material/Block';
import AddIcon from '@mui/icons-material/Add';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

function BlockNumbers(props) {
  const { intl } = props;
  const title = brand.name + ' - Block Numbers';
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

      <Papper disablePadding sx={{ display: 'flex', flexDirection: 'column' }}>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          sx={{
            px: 3,
            py: 2,
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Typography sx={{ fontSize: 24, fontWeight: 500 }}>
            <BlockIcon sx={{ marginBottom: '3px', color: 'primary.main' }} /> Block Numbers
          </Typography>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
          >
            ADD
          </Button>
        </Stack>
        <Stack
          justifyContent={'center'}
          alignItems={'center'}
          flexGrow={1}
          width={'100%'}
        >
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            gap={2.8}
            sx={{ p: 5 }}
          >
            <HourglassEmptyIcon
              sx={{
                fontSize: 56,
                color: 'primary.main'
              }}
            />
            <Typography sx={{ fontSize: 20, fontWeight: 400, }}>
              Your block list is empty
            </Typography>
          </Stack>
        </Stack>
      </Papper>
    </div>
  );
}

BlockNumbers.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(BlockNumbers);
