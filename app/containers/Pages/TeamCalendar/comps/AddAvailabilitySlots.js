import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {
  Stack, Typography, Avatar, Box, Button, TextField, FormControlLabel, Switch, Grid
} from '@mui/material';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const fiveAM = dayjs().set('hour', 5).startOf('hour');
const nineAM = dayjs().set('hour', 9).startOf('hour');

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#fff',
  border: '1px solid #00000033',
  boxShadow: 24,
};

const AddAvailabilitySlots = ({ openCloseModal, open }) => {
  const [startTime, setStartTime] = useState(fiveAM);
  const [endTime, setEndTime] = useState(nineAM);

  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={openCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: 1,
                borderColor: 'divider',
                p: 3

              }}
            >
              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={1}
              >
                <Avatar sx={{
                  backgroundColor: 'background.default',
                  width: 44,
                  height: 44,
                  color: 'primary.main'
                }}>
                  <AccessTimeIcon fontSize='small' />
                </Avatar>
                <Typography variant='h5' fontWeight={600} fontSize={20}>
                                    Calendar
                </Typography>
              </Stack>
              <Button
                color='info'
                variant='outlined'
              >
                                SAVE
              </Button>
            </Box>

            <Box sx={{ padding: '10px 20px' }}>
              <Typography fontSize={16} fontWeight={500} color={'#141515'} sx={{ mt: 1, mb: 1 }}>Name</Typography>
              <TextField inputProps={{ 'aria-label': 'Without label' }} type='text' placeholder='Enter the name of your availability slot' fullWidth id="outlined-basic" variant="outlined" />

              <Grid container sx={{ mt: 1.5 }}>
                <Grid item xs={4}>
                  <Box flexDirection={'row'}>
                    <FormControlLabel sx={{
                      marginRight: '0px',
                      '& .MuiFormControlLabel-label': {
                        fontWeight: 'bold',
                      }
                    }} control={<Switch defaultChecked />} label="Monday" />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box flexDirection={'row'}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TimePicker
                          value={startTime}
                          onChange={(newValue) => setStartTime(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                sx: { color: '#00000099' },
                              }}
                              InputLabelProps={{
                                ...params.InputLabelProps,
                                sx: { color: '#00000099' },
                              }}
                            />
                          )}

                          disablePast

                        />
                        <Typography sx={{ mx: 2 }}>-</Typography>
                        <TimePicker
                          value={endTime}
                          onChange={(newValue) => setEndTime(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                sx: { color: '#00000099' },
                              }}
                              InputLabelProps={{
                                ...params.InputLabelProps,
                                sx: { color: '#00000099' },
                              }}
                            />
                          )}

                          disablePast

                        />
                      </Box>
                    </LocalizationProvider>
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ mt: 1.5 }}>
                <Grid item xs={4}>
                  <Box flexDirection={'row'}>
                    <FormControlLabel sx={{
                      marginRight: '0px',
                      '& .MuiFormControlLabel-label': {
                        fontWeight: 'bold',
                      }
                    }} control={<Switch defaultChecked />} label="Tuesday" />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box flexDirection={'row'}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TimePicker
                          value={startTime}
                          onChange={(newValue) => setStartTime(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                sx: { color: '#00000099' },
                              }}
                              InputLabelProps={{
                                ...params.InputLabelProps,
                                sx: { color: '#00000099' },
                              }}
                            />
                          )}

                          disablePast

                        />
                        <Typography sx={{ mx: 2 }}>-</Typography>
                        <TimePicker
                          value={endTime}
                          onChange={(newValue) => setEndTime(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                sx: { color: '#00000099' },
                              }}
                              InputLabelProps={{
                                ...params.InputLabelProps,
                                sx: { color: '#00000099' },
                              }}
                            />
                          )}

                          disablePast

                        />
                      </Box>
                    </LocalizationProvider>
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ mt: 1.5 }}>
                <Grid item xs={4}>
                  <Box flexDirection={'row'}>
                    <FormControlLabel sx={{
                      marginRight: '0px',
                      '& .MuiFormControlLabel-label': {
                        fontWeight: 'bold',
                      }
                    }} control={<Switch defaultChecked />} label="Wednesday" />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box flexDirection={'row'}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TimePicker
                          value={startTime}
                          onChange={(newValue) => setStartTime(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                sx: { color: '#00000099' },
                              }}
                              InputLabelProps={{
                                ...params.InputLabelProps,
                                sx: { color: '#00000099' },
                              }}
                            />
                          )}

                          disablePast

                        />
                        <Typography sx={{ mx: 2 }}>-</Typography>
                        <TimePicker
                          value={endTime}
                          onChange={(newValue) => setEndTime(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                sx: { color: '#00000099' },
                              }}
                              InputLabelProps={{
                                ...params.InputLabelProps,
                                sx: { color: '#00000099' },
                              }}
                            />
                          )}

                          disablePast

                        />
                      </Box>
                    </LocalizationProvider>
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ mt: 1.5 }}>
                <Grid item xs={4}>
                  <Box flexDirection={'row'}>
                    <FormControlLabel sx={{
                      marginRight: '0px',
                      '& .MuiFormControlLabel-label': {
                        fontWeight: 'bold',
                      }
                    }} control={<Switch defaultChecked />} label="Thursday" />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box flexDirection={'row'}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TimePicker
                          value={startTime}
                          onChange={(newValue) => setStartTime(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                sx: { color: '#00000099' },
                              }}
                              InputLabelProps={{
                                ...params.InputLabelProps,
                                sx: { color: '#00000099' },
                              }}
                            />
                          )}

                          disablePast

                        />
                        <Typography sx={{ mx: 2 }}>-</Typography>
                        <TimePicker
                          value={endTime}
                          onChange={(newValue) => setEndTime(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                sx: { color: '#00000099' },
                              }}
                              InputLabelProps={{
                                ...params.InputLabelProps,
                                sx: { color: '#00000099' },
                              }}
                            />
                          )}

                          disablePast

                        />
                      </Box>
                    </LocalizationProvider>
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ mt: 1.5 }}>
                <Grid item xs={4}>
                  <Box flexDirection={'row'}>
                    <FormControlLabel sx={{
                      marginRight: '0px',
                      '& .MuiFormControlLabel-label': {
                        fontWeight: 'bold',
                      }
                    }} control={<Switch defaultChecked />} label="Friday" />
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box flexDirection={'row'}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TimePicker
                          value={startTime}
                          onChange={(newValue) => setStartTime(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                sx: { color: '#00000099' },
                              }}
                              InputLabelProps={{
                                ...params.InputLabelProps,
                                sx: { color: '#00000099' },
                              }}
                            />
                          )}

                          disablePast

                        />
                        <Typography sx={{ mx: 2 }}>-</Typography>
                        <TimePicker
                          value={endTime}
                          onChange={(newValue) => setEndTime(newValue)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              InputProps={{
                                ...params.InputProps,
                                sx: { color: '#00000099' },
                              }}
                              InputLabelProps={{
                                ...params.InputLabelProps,
                                sx: { color: '#00000099' },
                              }}
                            />
                          )}

                          disablePast

                        />
                      </Box>
                    </LocalizationProvider>
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ mt: 1.5 }}>
                <Grid item xs={4}>
                  <Box flexDirection={'row'}>
                    <FormControlLabel sx={{
                      marginRight: '0px',
                      '& .MuiFormControlLabel-label': {
                        fontWeight: 'bold',
                      }
                    }} control={<Switch defaultChecked />} label="Saturday" />
                  </Box>
                </Grid>
              </Grid>

              <Grid container sx={{ mt: 1.5 }}>
                <Grid item xs={4}>
                  <Box flexDirection={'row'}>
                    <FormControlLabel sx={{
                      marginRight: '0px',
                      '& .MuiFormControlLabel-label': {
                        fontWeight: 'bold',
                      }
                    }} control={<Switch defaultChecked />} label="Sunday" />
                  </Box>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default AddAvailabilitySlots;
