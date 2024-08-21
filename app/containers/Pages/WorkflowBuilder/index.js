import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { injectIntl } from 'react-intl';
import {
  Stack,
  Avatar,
  Typography,
  IconButton,
  Button,
  Switch,
} from '@mui/material';

// icons
import { AccountTree, Edit, Refresh } from '@mui/icons-material';

import Builder from './Builder';

function WorkflowBuilder(props) {
  const { intl } = props;
  const title = brand.name + ' - Workflow Builder';
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
          gap={2}
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{
            p: 2,
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Stack direction={'row'} alignItems={'center'} gap={1}>
            <Avatar sx={{
              backgroundColor: 'background.default',
              width: 44,
              height: 44,
              color: 'primary.main'
            }}>
              <AccountTree fontSize='small' />
            </Avatar>
            <Stack direction={'row'} alignItems={'center'} gap={1}>
              <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                Name of agent Workflow
              </Typography>
              <IconButton sx={{ color: 'text.primary' }}>
                <Edit fontSize='small' />
              </IconButton>
            </Stack>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} gap={2}>
            <Button
              sx={{
                backgroundColor: 'primary.light',
                px: 3,
                textTransform: 'uppercase',
              }}
            >
              Test workflow
            </Button>
            <Stack direction="row" alignItems="center">
              <Typography>Draft</Typography>
              <Switch color="primary" />
              <Typography>Publish</Typography>
            </Stack>
            <IconButton sx={{ color: 'text.primary' }}>
              <Refresh size='small' />
            </IconButton>
            <Button
              variant='outlined'
            >
              SAVED
            </Button>
          </Stack>
        </Stack>
        <Stack flexGrow={1}>
          <Builder />
        </Stack>
      </Papper>
    </div>
  );
}

WorkflowBuilder.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(WorkflowBuilder);
