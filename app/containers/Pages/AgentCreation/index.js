import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import { Papper } from 'enl-components';
import { Stack, Grid } from '@mui/material';
import { injectIntl } from 'react-intl';
import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Switch from '@mui/material/Switch';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Sliderbar from './comps/Sliderbar';

// icons

function AgentCreation(props) {
  const location = useLocation();
  const history = { location };
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const dummyData = [
    {
      name: 'John Doe',
      phone: '1234567890',
    },
    {
      name: 'John Doe',
      phone: '1234567890',
    },
    {
      name: 'John Doe',
      phone: '1234567890',
    },
    {
      name: 'John Doe',
      phone: '1234567890',
    },
    {
      name: 'John Doe',
      phone: '1234567890',
    },
    {
      name: 'John Doe',
      phone: '1234567890',
    },
    {
      name: 'John Doe',
      phone: '1234567890',
    },
    {
      name: 'John Doe',
      phone: '1234567890',
    },
    {
      name: 'John Doe',
      phone: '1234567890',
    },
  ];

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
      <Papper>
        <Box sx={{ width: '100%' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={5}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '29.05px',
                  textAlign: 'left',
                  marginBottom: '5px',
                }}
              >
                Profile
              </p>
              <p style={{ fontSize: '14px', fontWeight: 400 }}>
                Customize your agent’s name and greeting messages
              </p>
            </Grid>
            <Grid item xs={7}>
              <Grid
                container
                rowSpacing={1}
                // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <p style={{ fontSize: '16px', fontWeight: 500 }}>Name</p>
                  <TextField
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                      },
                    }}
                  />

                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      marginTop: '10px',
                    }}
                  >
                    Greeting
                  </p>
                  <TextField
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                      },
                    }}
                  />

                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      marginTop: '10px',
                    }}
                  >
                    Hang-up Message
                  </p>
                  <TextField
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: '100%', marginTop: '80px' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={5}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '29.05px',
                  textAlign: 'left',
                  marginBottom: '5px',
                }}
              >
                Instructions
              </p>
              <p style={{ fontSize: '14px', fontWeight: 400 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Grid>
            <Grid item xs={7}>
              <Grid
                container
                rowSpacing={1}
                // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <TextField
                    inputProps={{ 'aria-label': 'Without label' }}
                    multiline
                    rows={4}
                    placeholder="You are a cheerful helpful assistant"
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: '100%', marginTop: '80px' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '29.05px',
                  textAlign: 'left',
                  marginBottom: '5px',
                }}
              >
                Profile
              </p>
              <FormControl fullWidth>
                <p style={{ fontSize: '14px', fontWeight: 400 }}>
                  Choose Language
                </p>
                <Select
                  inputProps={{ 'aria-label': 'Without label' }}
                  fullWidth
                >
                  <MenuItem value={10}>English</MenuItem>
                  <MenuItem value={20}>Urdu</MenuItem>
                  <MenuItem value={30}>Arabic</MenuItem>
                </Select>
              </FormControl>

              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                style={{ marginTop: '30px' }}
              >
                <Grid item xs={9}>
                  <Slider {...settings}>
                    {dummyData.map((items) => (
                      <>
                        <div>
                          <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/d95c1f148207527.62d1246c25004.jpg"
                            style={{
                              width: '75px',
                              height: '75px',
                              borderRadius: '50px',
                            }}
                          />
                          <p>Benjamin</p>
                          <div
                            style={{
                              height: '40px',
                              width: '40px',
                              borderRadius: '50px',
                              backgroundColor: '#2196F34D',
                              marginLeft: '18px',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <PlayArrowIcon style={{ color: '#2196F3' }} />
                          </div>
                        </div>
                      </>
                    ))}
                  </Slider>
                </Grid>
                <Grid item xs={1}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <p style={{ textAlign: 'center', marginTop: '100%' }}>Or</p>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <Card style={{ border: '1px solid #3F51B5' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '25px 0px',
                      }}
                    >
                      <div style={{ marginTop: '10px' }}>
                        <div
                          style={{
                            margin: 'auto',
                            height: '40px',
                            width: '40px',
                            borderRadius: '50px',
                            backgroundColor: '#3F51B5',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <p style={{ color: '#fff', marginTop: '12px' }}>OP</p>
                        </div>
                        <p
                          style={{
                            fontSize: '20px',
                            fontWeight: 400,
                            color: '#3F51B5',
                            marginTop: '10px',
                          }}
                        >
                          Clone a voice
                        </p>
                      </div>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: '100%', marginTop: '80px' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '29.05px',
                  textAlign: 'left',
                  marginBottom: '5px',
                }}
              >
                Voice Options
              </p>
            </Grid>

            <Grid item xs={4} style={{ marginTop: '20px' }}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '16.05px',
                  textAlign: 'left',
                  marginBottom: '5px',
                }}
              >
                Interrupt Security
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '15px',
                }}
              >
                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '14px',
                    fontweight: 400,
                  }}
                >
                  Low
                </p>
                <Switch />
                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '14px',
                    fontweight: 400,
                  }}
                >
                  High
                </p>
              </div>
              <div>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    fontweight: 400,
                  }}
                >
                  Or
                </p>
                <Sliderbar />
              </div>
            </Grid>

            <Grid item xs={4} style={{ marginTop: '20px' }}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '16.05px',
                  textAlign: 'left',
                  marginBottom: '5px',
                }}
              >
                Response Speed
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '15px',
                }}
              >
                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '14px',
                    fontweight: 400,
                  }}
                >
                  Sensitive
                </p>
                <Switch />
                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '14px',
                    fontweight: 400,
                  }}
                >
                  Auto
                </p>
              </div>
              <div>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    fontweight: 400,
                  }}
                >
                  Or
                </p>
                <Sliderbar />
              </div>
            </Grid>

            <Grid item xs={4} style={{ marginTop: '20px' }}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '16.05px',
                  textAlign: 'left',
                  marginBottom: '5px',
                }}
              >
                AI Creativity
              </p>

              <div
                style={{
                  // display: "flex",
                  alignItems: 'center',
                  marginTop: '15px',
                  display: 'none',
                }}
              >
                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '14px',
                    fontweight: 400,
                  }}
                >
                  Low
                </p>
                <Switch />
                <p
                  style={{
                    marginTop: '10px',
                    fontSize: '14px',
                    fontweight: 400,
                  }}
                >
                  High
                </p>
              </div>
              <div style={{ marginTop: '30px' }}>
                <Sliderbar />
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ width: '100%', marginTop: '80px' }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={5}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: '29.05px',
                  textAlign: 'left',
                  marginBottom: '5px',
                }}
              >
                Advance
              </p>
              <p style={{ fontSize: '14px', fontWeight: 400 }}>
                Advance agent settings
              </p>
            </Grid>
            <Grid item xs={7}>
              <Grid
                container
                rowSpacing={1}
                // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <p style={{ fontSize: '16px', fontWeight: 500 }}>Time Zone</p>
                  <Select
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth
                  >
                    <MenuItem value={10}>English</MenuItem>
                    <MenuItem value={20}>Urdu</MenuItem>
                    <MenuItem value={30}>Arabic</MenuItem>
                  </Select>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Switch />
                    <p style={{ marginTop: '10px' }}>
                      Start call with a scenario (skip greetings).
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Switch />
                    <p style={{ marginTop: '10px' }}>
                      Play ”this maybe transcribed for quality and tanning
                      purpose “ Declaimer before each call.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Switch />
                    <p style={{ marginTop: '10px' }}>
                      Enable post call analysis to get call summaries enabled
                      (Recommended)
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Switch />
                    <p style={{ marginTop: '10px' }}>
                      Strict mode (Recommended)
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Switch />
                    <p style={{ marginTop: '10px' }}>
                      Email transcript with summary after call
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Switch />
                    <p style={{ marginTop: '10px' }}>
                      Enable experimental transcription engine
                    </p>
                  </div>

                  <p style={{ fontSize: '16px', fontWeight: 500 }}>
                    Transcription Language
                  </p>
                  <Select
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth
                  >
                    <MenuItem value={10}>English</MenuItem>
                    <MenuItem value={20}>Urdu</MenuItem>
                    <MenuItem value={30}>Arabic</MenuItem>
                  </Select>

                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      marginTop: '7px',
                    }}
                  >
                    Key Phrases
                  </p>
                  <Select
                    inputProps={{ 'aria-label': 'Without label' }}
                    fullWidth
                  >
                    <MenuItem value={10}>English</MenuItem>
                    <MenuItem value={20}>Urdu</MenuItem>
                    <MenuItem value={30}>Arabic</MenuItem>
                  </Select>

                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Switch />
                    <p style={{ marginTop: '10px' }}>
                      Automatically delete call transcripts
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Grid
          sx={{ marginTop: '80px' }}
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: '4px',
              color: '#fff',
              border: 'none',
              backgroundColor: '#2196F3',
            }}
          >
            Save & Continue
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '4px',
              color: '#2196F3',
              border: '1px solid #0000001F',
              marginLeft: '10px',
              '&:hover': {
                border: '1px solid #2196F3',
              },
            }}
          >
            Reset
          </Button>
        </Grid>
      </Papper>
    </div>
  );
}

AgentCreation.propTypes = { intl: PropTypes.object.isRequired };

export default injectIntl(AgentCreation);
