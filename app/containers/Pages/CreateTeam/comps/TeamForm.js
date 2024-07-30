import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';

const TeamForm = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth sx={{ marginTop: '15px' }}>
        <p style={{ fontSize: '16px', fontWeight: 500 }}>Team  / Business Name</p>
        <Select
          inputProps={{ 'aria-label': 'Without label' }}
          value={age}
          placeholder="Custom webhook"
        >
          <MenuItem value={10}>custom webhook</MenuItem>
          <MenuItem value={11}>custom webhook</MenuItem>
        </Select>

        <p
          style={{
            fontSize: '16px',
            fontWeight: 500,
            marginTop: '13px',
          }}
        >
                    What industry are you in?
        </p>
        <Select
          inputProps={{ 'aria-label': 'Without label' }}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>custom webhook</MenuItem>
          <MenuItem value={11}>custom webhook</MenuItem>
        </Select>

        <p
          style={{
            fontSize: '16px',
            fontWeight: 500,
            marginTop: '13px',
          }}
        >
                    How did you hear about us?
        </p>
        <Select
          inputProps={{ 'aria-label': 'Without label' }}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>custom webhook</MenuItem>
          <MenuItem value={11}>custom webhook</MenuItem>
        </Select>

        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ marginTop: '12px' }}>
            <Select
              fullWidth
              inputProps={{ 'aria-label': 'Without label' }}
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>custom webhook</MenuItem>
              <MenuItem value={11}>custom webhook</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '12px' }}>
            <Select
              fullWidth
              inputProps={{ 'aria-label': 'Without label' }}
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>custom webhook</MenuItem>
              <MenuItem value={11}>custom webhook</MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={6} sx={{ marginTop: '12px' }}>
            <Select
              fullWidth
              inputProps={{ 'aria-label': 'Without label' }}
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>custom webhook</MenuItem>
              <MenuItem value={11}>custom webhook</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6} sx={{ marginTop: '12px' }}>
            <Select
              fullWidth
              inputProps={{ 'aria-label': 'Without label' }}
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={10}>custom webhook</MenuItem>
              <MenuItem value={11}>custom webhook</MenuItem>
            </Select>
          </Grid>
        </Grid>

      </FormControl>
    </div>
  );
};

export default TeamForm;
