import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';

// icons
import LinkIcon from '@mui/icons-material/Link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Settings = () => {
  const [values, setValues] = useState({
    actionName: '',
    event: '',
    method: '',
    url: '',
    authorization: '',
    contentType: '',
    rawBody: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Box sx={{ flexGrow: 1, margin: '-24px', backgroundColor: '#F2F4F7' }}>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <Card
            style={{
              width: '150px',
              marginTop: '20px',
              borderRadius: '25px',
              margin: '20px 10px',
            }}
          >
            <Grid container direction="row" justifyContent="start" alignItems="center">
              <Switch />
              <p style={{ marginTop: '10px' }}>Slide View</p>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={7}>
          <Card sx={{ padding: '10px 40px', border: 'none', borderRadius: '0px' }}>
            <p style={{ fontSize: '24px', fontWeight: 600, marginBottom: '0px' }}>
              Custom webHooks
            </p>
            <p style={{ fontSize: '14px', fontWeight: 400, color: '#717579' }}>
              Customize your agent’s name and greeting messages
            </p>

            <FormControl fullWidth sx={{ marginTop: '40px' }}>
              <p style={{ fontSize: '16px', fontWeight: 500 }}>Action Name</p>
              <Select
                name="actionName"
                value={values.actionName}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
                placeholder="Custom webhook"
              >
                <MenuItem value={'custom webhook 1'}>custom webhook 1</MenuItem>
                <MenuItem value={'custom webhook 2'}>custom webhook 2</MenuItem>
              </Select>

              <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>Event</p>
              <Select
                name="event"
                value={values.event}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={'custom'}>custom</MenuItem>
                <MenuItem value={'static'}>static</MenuItem>
              </Select>

              <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>Method</p>
              <Select
                name="method"
                value={values.method}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
                <MenuItem value={'DELETE'}>DELETE</MenuItem>
                <MenuItem value={'UPDATE'}>UPDATE</MenuItem>
              </Select>

              <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>URL</p>
              <TextField
                name="url"
                value={values.url}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
                id="outlined-start-adornment"
                placeholder="http://domainname.com"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <LinkIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '8px',
                  },
                }}
              />

              <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>
                Authorization
              </p>
              <Select
                name="authorization"
                value={values.authorization}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={''}>None</MenuItem>
                <MenuItem value={''}>Custom</MenuItem>
              </Select>

              <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>Headers</p>
              <div
                style={{
                  height: '33px',
                  width: '130px',
                  borderRadius: '20px',
                  backgroundColor: '#2196F333',
                  padding: '5px 12px',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <AddCircleOutlineIcon style={{ color: '#304FFE' }} />
                  &nbsp;
                  <p style={{ color: '#304FFE', fontWeight: 500, fontSize: '14px' }}>
                    ADD ITEM
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>
                Query Parameters
              </p>
              <div
                style={{
                  height: '33px',
                  width: '130px',
                  borderRadius: '20px',
                  backgroundColor: '#2196F333',
                  padding: '5px 12px',
                }}
              >
                <div style={{ display: 'flex' }}>
                  <AddCircleOutlineIcon style={{ color: '#304FFE' }} />
                  &nbsp;
                  <p style={{ color: '#304FFE', fontWeight: 500, fontSize: '14px' }}>
                    ADD ITEM
                  </p>
                </div>
              </div>

              <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>
                Content-Type
              </p>
              <Select
                name="contentType"
                value={values.contentType}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={'json'}>application/json</MenuItem>
                <MenuItem value={'custom'}>custom webhook 1</MenuItem>
              </Select>

              <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>Raw Body</p>
              <Select
                name="rawBody"
                value={values.rawBody}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ marginBottom: '20px' }}
              >
                <MenuItem value={'json'}>application/json</MenuItem>
                <MenuItem value={'custom'}>custom webhook 1</MenuItem>
              </Select>
            </FormControl>
          </Card>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#E0E0E0' }}></div>
          <Card sx={{ borderRadius: '0px', border: 'none', padding: '20px 40px' }}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Button variant="outlined" sx={{ borderRadius: '4px' }} color="error">
                Delete
              </Button>
              <div>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: '4px',
                    color: '#0000001F',
                    border: '1px solid #0000001F',
                    marginRight: '10px',
                    '&:hover': {
                      border: '1px solid #000',
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: '4px',
                    color: '#fff',
                    border: 'none',
                    backgroundColor: '#2196F3',
                  }}
                >
                  Save
                </Button>
              </div>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
