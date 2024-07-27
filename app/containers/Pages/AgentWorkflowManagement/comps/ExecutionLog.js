import React, { useState } from 'react';
import { Typography, Box, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

// icons
import ReplayIcon from '@mui/icons-material/Replay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Refresh from '@mui/icons-material/Refresh';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ExecutionLog = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  function createData(name, cuurentAction, status, action, execution, fileCopy, refresh, replace) {
    return {
      name, cuurentAction, status, action, execution, fileCopy, refresh, replace
    };
  }

  const rows = [
    createData('Brandon', 'Remove from workflow', 'Finish', 'June 22nd 2024, 10:36:02 AM', 'Not Available', <FileCopyIcon/>, <Refresh />, <FindReplaceIcon/>),
    createData('Brandon', 'Remove Contact tag', 'Skipped', 'June 22nd 2024, 10:36:02 AM', 'Not Available', <FileCopyIcon/>, <Refresh />, <FindReplaceIcon/>),
    createData('Brandon', 'Wait stop time', 'Skipped', 'June 22nd 2024, 10:36:02 AM', 'Not Available', <FileCopyIcon/>, <Refresh />, <FindReplaceIcon/>),
  ];

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>Execution Logs</Typography>
          <Typography sx={{ fontWeight: 400, fontSize: '10px', color: '#717579' }}>View a execution of all contacts who have entered this workflow</Typography>
        </Box>
        <Box>
          <Select sx={{ width: '150px' }} value={selectedValue} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} >
            <MenuItem value="" disabled selected >Last 10 Days</MenuItem>
            <MenuItem value={20}>Last 20 Days</MenuItem>
            <MenuItem value={30}>Last 30 Days</MenuItem>
          </Select>&nbsp;
          <Select sx={{ width: '150px' }} value={selectedValue} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} >
            <MenuItem value="" disabled selected >All Actions</MenuItem>
            <MenuItem value={20}>Last 20 Days</MenuItem>
            <MenuItem value={30}>Last 30 Days</MenuItem>
          </Select>&nbsp;
          <Select sx={{ width: '150px' }} value={selectedValue} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} >
            <MenuItem value="" disabled selected >All Status</MenuItem>
            <MenuItem value={20}>Last 20 Days</MenuItem>
            <MenuItem value={30}>Last 30 Days</MenuItem>
          </Select>&nbsp;
          <Select sx={{ width: '150px' }} value={selectedValue} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }} >
            <MenuItem value="" disabled selected >Select Contact</MenuItem>
            <MenuItem value={20}>Last 20 Days</MenuItem>
            <MenuItem value={30}>Last 30 Days</MenuItem>
          </Select>&nbsp;
          <Button variant="outlined" sx={{ borderColor: '#0000003D' }}>
            <RotateRightIcon sx={{ color: '#323232' }} />
          </Button>
        </Box>
      </Box>
      <Box>

        <TableContainer>
          <Table sx={{ borderTop: '1px solid #E0E0E0' }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" sx={{ fontWeight: 500 }}>Contact</TableCell>
                <TableCell align="left" sx={{ fontWeight: 500 }}>Current action</TableCell>
                <TableCell align="left" sx={{ fontWeight: 500 }}>Status</TableCell>
                <TableCell align="left" sx={{ fontWeight: 500 }}>Action</TableCell>
                <TableCell align="left" sx={{ fontWeight: 500 }}>Next execution on</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img style={{ height: '30px', width: '30px', borderRadius: '25px' }} src="https://s3-alpha-sig.figma.com/img/2e5f/78f4/4b20ef67ab74659b2552d4e86c81968d?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kitrLhTAR0v0PhZbdCD0N60t09BANMvvSAWwtE9i1wEmnC7aCcuu5iSA97ZXHDkqXOB1OIeh575DV9NrttumW52i~E7-MywwmBZ89SJQy~T10CqEEwDCO5BDOEfn-KQsPkkqX8V--~BMS3c6VLjdo1INjCFKgPWgycX0yJpBWvP3W-jS7p3TzT6hWqeE~jQ9KFYuHnp598SO8VHjRw2JUzC9HShtvvE23p8O4jk8e7T-XHgj8N869A2Iyx31ytD5iWHbHvz9K0fcC~mGiGoSTtcxSH6hGzLsSmdCaU8CiGEl4Jm6Mb-4KzAaqH8kS5VOMxyBWZSn8ZrRRMAQvzGbVw__" />&nbsp;&nbsp;{row.name}
                  </TableCell>
                  <TableCell align="left"><span style={{
                    height: '7px', width: '7px', borderRadius: '25px', backgroundColor: '#32323299', border: '7px solid #FAFAFA', color: '#32323299'
                  }}><AccessTimeIcon style={{ fontSize: '5px', padding: '9px' }} /></span>&nbsp;{row.cuurentAction}</TableCell>
                  {
                    row.status === 'Finish' ? (
                      <TableCell align="left"><span style={{
                        padding: '5px 10px', height: '20px', width: '20px', borderRadius: '25px', backgroundColor: '#DAF2EE', color: '#2A7166', border: '1px solid #C8EBE6'
                      }}>{row.status}</span></TableCell>
                    ) : (
                      <TableCell align="left"><span style={{
                        padding: '5px 10px', height: '20px', width: '20px', borderRadius: '25px', backgroundColor: '#CECECE', color: '#6F6F6F', border: '1px solid #CECECE'
                      }}>{row.status}</span></TableCell>
                    )
                  }
                  <TableCell align="left">{row.action}</TableCell>
                  <TableCell align="left">{row.execution}</TableCell>
                  <TableCell align="right"><IconButton aria-label="delete" size="small">{row.fileCopy}</IconButton></TableCell>
                  <TableCell align="center">{row.refresh}</TableCell>
                  <TableCell align="left">{row.replace}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            sx={{
              textTransform: 'uppercase',
              borderRadius: '4px',
              color: '#0000001F',
              border: '1px solid #0000001F',
              marginRight: '10px',
              '&:hover': {
                border: '1px solid #000',
              },
            }}
            variant="outlined"
          >
            showing page 1
          </Button>
          <Box>
            <Button
              sx={{
                textTransform: 'uppercase',
                mx: 1,
                borderRadius: '4px',
                color: '#0000001F',
                border: '1px solid #0000001F',
                marginRight: '10px',
                '&:hover': {
                  border: '1px solid #000',
                },
              }}
              variant="outlined"
            >
              <KeyboardArrowLeftIcon/>Previous
            </Button>
            <Button
              sx={{
                backgroundColor: 'primary.light',
                textTransform: 'uppercase',
              }}
            >
              next<KeyboardArrowRightIcon/>
            </Button>
          </Box>
        </Box>

      </Box>
    </div>
  );
};

export default ExecutionLog;
