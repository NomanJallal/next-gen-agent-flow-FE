import React from 'react';
import {
  Box, Button, FormControlLabel, Grid, IconButton, Switch, TextField, Tooltip, Typography
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const TeamConfiguration = () => (
  <div>
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Box>
          <Typography fontSize={24} fontWeight={600} color={'#303134'}>Team Configuration</Typography>
          <Typography fontSize={14} fontWeight={400} color={'#717579'}>Configure your team settings</Typography>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Box>
          <Typography fontSize={16} fontWeight={500} color={'#141515'} sx={{ mb: 1.5 }}>Enter Email</Typography>
          <TextField inputProps={{ 'aria-label': 'Without label' }} placeholder='Enter the email of the person you want to invite' fullWidth id="outlined-basic" variant="outlined" />
          <Box flexDirection={'row'} sx={{ mt: 1.5 }}>
            <Button variant='contained' sx={{ marginRight: '20px' }} > LOG IN</Button>
            <FormControlLabel sx={{ marginRight: '0px' }} control={<Switch defaultChecked />} label="Enable magic contact" />
            <Tooltip title="Hello,">
              <IconButton>
                <InfoOutlinedIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </div>
);

export default TeamConfiguration;
