import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { injectIntl } from 'react-intl';
import {
  Box, Button, Card, Stack, Avatar, Typography
} from '@mui/material';
import TextField from '@mui/material/TextField';

import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// icons
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LinkIcon from '@mui/icons-material/Link';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import EmailIcon from '@mui/icons-material/Email';

// comps

function TeamUsers(props) {
  const { intl } = props;
  const title = brand.name + ' - Agent Workflow Management';
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
      <Card sx={{ padding: '15px', borderRadius: '0px', borderBottom: '1px solid #00000033' }}>
        <Stack gap={2}>
          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={1}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{
                backgroundColor: 'background.default',
                width: 44,
                height: 44,
                color: 'primary.main'
              }}>
                <PeopleAltIcon fontSize='small' />
              </Avatar>&nbsp;&nbsp;
              <Typography variant='h5' fontWeight={600} fontSize={20}>
                                Users
              </Typography>
            </Box>
            <Box direction={'row'}>
              <Button variant="outlined" sx={{ borderRadius: '4px', width: '175px' }} startIcon={<PersonAddIcon />}>INVITATIONS</Button>
            </Box>
          </Stack>

        </Stack>
      </Card>
      <Card sx={{ padding: '15px', borderRadius: '0px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ marginTop: '8px' }}>
              <img style={{ height: '35px', width: '35px', borderRadius: '25px' }} src='https://s3-alpha-sig.figma.com/img/2e5f/78f4/4b20ef67ab74659b2552d4e86c81968d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qmah3PqD7RUG0GMjjMW6Fhx58EaVB4eL57FdO7Imgqx9FIoTKAy1sOFTy6T31NuZvas5wN-AZ-WuB5UFNXyC6SGppzK4n8OYpm37~SrGA9iuQr6fa7-u9KHLwRASycYEbJYemskfCiwf~hvw8oJ1cyitSDYQAoClEOSEu0GFieZrcS3D~UYLhxyuOD3bOOt2zoiu8p5HT8~pjF-izkgg~Zsb3E1W00JRAMkWiHResHxXXJZTZ1HQ9d3AMvq0h2YYwcyhIhtY8XlKi07iKYk-VMMzwWCb8jdwjawcVBhTMr3VJFEZQ1fkjEmkV3-4pvKNW-JCg9keVSWi9H~2-sfgjA__' />
              <Box sx={{
                width: '11px', height: '11px', position: 'relative', top: -8, left: 26, backgroundColor: 'green', borderRadius: '25px', border: '3px solid #fff'
              }}></Box>
            </Box>&nbsp;&nbsp;
            <Typography fontWeight={500} fontSize={20} fontFamily={'Montserrat'}>Brandon Bartlett</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
            <Box sx={{
              width: '83px', height: '33px', backgroundColor: '#DAF2EE', color: '#2A7166', border: '1px solid #C8EBE6', borderRadius: '25px', fontWeight: 600, fontSize: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>You</Box>
            <Typography fontWeight={500} fontSize={15} sx={{ marginLeft: '40px' }}><EmailIcon sx={{ color: '#3F51B5', marginBottom: '2px' }} />&nbsp;&nbsp;brandonbartllet@email.com</Typography>
          </Box>
          <Button variant="outlined"
            sx={{
              fontWeight: 500,
              borderRadius: '4px',
              color: '#00000061',
              border: '1px solid #0000001F',
              '&:hover': {
                border: '1px solid #000',
              }
            }}
          >
                        EDIT
          </Button>
        </Box>

      </Card>

      <Card sx={{
        marginTop: '15px', padding: '15px', borderRadius: '0px', borderBottom: '1px solid #00000033'
      }}>
        <Stack gap={2}>
          <Stack gap={1}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{
                backgroundColor: 'background.default',
                width: 44,
                height: 44,
                color: 'primary.main'
              }}>
                <PeopleAltIcon fontSize='small' />
              </Avatar>&nbsp;&nbsp;
              <Typography variant='h5' fontWeight={600} fontSize={20}>
                                Team Details
              </Typography>
            </Box>
          </Stack>

        </Stack>
      </Card>
      <Card sx={{ padding: '15px', borderRadius: '0px' }}>
        <Typography fontSize={16} fontWeight={500}>Enter Email</Typography>
        <Box sx={{
          marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'
        }}>
          <TextField placeholder="Enter the email of the person you want to invite" fullWidth inputProps={{ 'aria-label': 'Without label' }} />&nbsp;&nbsp;
          <Button size="large" variant="contained" >INVITE</Button>
        </Box>
      </Card>

      <Card sx={{
        marginTop: '15px', padding: '15px', borderRadius: '0px', borderBottom: '1px solid #00000033'
      }}>
        <Stack gap={2}>
          <Stack gap={1}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{
                backgroundColor: 'background.default',
                width: 44,
                height: 44,
                color: 'primary.main'
              }}>
                <PeopleAltIcon fontSize='small' />
              </Avatar>&nbsp;&nbsp;
              <Typography variant='h5' fontWeight={600} fontSize={20}>
                                Invitations
              </Typography>
            </Box>
          </Stack>

        </Stack>
      </Card>
      <Card sx={{ padding: '15px', borderRadius: '0px' }}>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px'
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
      </Card>
    </div>
  );
}

TeamUsers.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(TeamUsers);
