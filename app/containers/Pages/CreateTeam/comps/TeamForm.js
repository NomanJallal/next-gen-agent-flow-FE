import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const TeamForm = () => {
  const [formValues, setFormValues] = useState({
    teamBusinessName: '',
    industry: '',
    hearAboutUs: '',
    address: '',
    firstGridSelect: '',
    secondGridSelect: '',
    thirdGridSelect: '',
    fourthGridSelect: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div>
      <FormControl fullWidth sx={{ marginTop: '15px' }}>
        <p style={{ fontSize: '16px', fontWeight: 500 }}>Team / Business Name</p>
        <Select
          name="teamBusinessName"
          inputProps={{ 'aria-label': 'Without label' }}
          value={formValues.teamBusinessName}
          onChange={handleChange}
          placeholder="Custom webhook"
        >
          <MenuItem value="team1">Team 1</MenuItem>
          <MenuItem value="team2">Team 2</MenuItem>
        </Select>

        <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>What industry are you in?</p>
        <Select
          name="industry"
          inputProps={{ 'aria-label': 'Without label' }}
          value={formValues.industry}
          onChange={handleChange}
        >
          <MenuItem value="tech">Tech</MenuItem>
          <MenuItem value="finance">Finance</MenuItem>
        </Select>

        <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>How did you hear about us?</p>
        <Select
          name="hearAboutUs"
          inputProps={{ 'aria-label': 'Without label' }}
          value={formValues.hearAboutUs}
          onChange={handleChange}
        >
          <MenuItem value="internet">Internet</MenuItem>
          <MenuItem value="friend">Friend</MenuItem>
        </Select>

        <p style={{ fontSize: '16px', fontWeight: 500, marginTop: '13px' }}>Address</p>
        <Select
          name="address"
          inputProps={{ 'aria-label': 'Without label' }}
          value={formValues.address}
          onChange={handleChange}
        >
          <MenuItem value="address1">Address 1</MenuItem>
          <MenuItem value="address2">Address 2</MenuItem>
        </Select>

        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ marginTop: '12px' }}>
            <Select
              name="firstGridSelect"
              fullWidth
              inputProps={{ 'aria-label': 'Without label' }}
              value={formValues.firstGridSelect}
              onChange={handleChange}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '12px' }}>
            <Select
              name="secondGridSelect"
              fullWidth
              inputProps={{ 'aria-label': 'Without label' }}
              value={formValues.secondGridSelect}
              onChange={handleChange}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={6} sx={{ marginTop: '12px' }}>
            <Select
              name="thirdGridSelect"
              fullWidth
              inputProps={{ 'aria-label': 'Without label' }}
              value={formValues.thirdGridSelect}
              onChange={handleChange}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '12px' }}>
            <Select
              name="fourthGridSelect"
              fullWidth
              inputProps={{ 'aria-label': 'Without label' }}
              value={formValues.fourthGridSelect}
              onChange={handleChange}
            >
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
};

export default TeamForm;
