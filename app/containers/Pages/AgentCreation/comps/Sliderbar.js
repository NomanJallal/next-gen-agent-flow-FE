import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

const Sliderbar = () => {
    const [value, setValue] = useState();

    const handleChange = () => {
      setValue(+1);
    };
  return (
    <div>
  <Box>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider aria-label="Volume" value={value} onChange={handleChange} 
        
       
                  sx={{
                    color: '#2196F3', // Change this to your desired color
                    '& .MuiSlider-thumb': {
                      backgroundColor: '#2196F3', // Change this to your desired thumb color
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: 'secondary.main', // Change this to your desired track color
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: '#2196F3', // Change this to your desired rail color
                    },
                  }}


        />
      </Stack>
    </Box>
    </div>
  )
}

export default Sliderbar