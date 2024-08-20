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
} from '@mui/material';
import { SearchInput } from '../../../components/common';
import Trigger from './Trigger';

// icons
import { AccessTime } from '@mui/icons-material';
import { triggers } from './utils';

function WorkflowTriggers(props) {
  const { intl } = props;
  const title = brand.name + ' - Workflow Triggers';
  const description = brand.desc;
  const [search, setSearch] = useState('');

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
          sx={{
            p: 3,
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
              <AccessTime fontSize='small' />
            </Avatar>
            <Typography variant='h5' fontWeight={600} fontSize={20}>
              Workflow Triggers
            </Typography>
          </Stack>
          <Typography variant='body2' color={'text.secondary'}>
            Adds a workflow trigger, and on execution, the contacts gets added to the workflow.
          </Typography>
        </Stack>
        <Stack flexGrow={1} padding={3} gap={2}>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Triggers"
            size="small"
            fullWidth
          />

          <Typography variant='subtitle1'>
            Contacts
          </Typography>
          <Stack
            flexGrow={1}
            gap={2}
            sx={{
              overflow: 'auto',
              height: 0,
            }}
          >
            {triggers.filter((trigger) => trigger?.label.toLowerCase()?.includes(search?.toLowerCase())).map((trigger, i) => (
              <Trigger key={i} {...trigger} />
            ))}
          </Stack>
        </Stack>
      </Papper>
    </div>
  );
}

WorkflowTriggers.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(WorkflowTriggers);
