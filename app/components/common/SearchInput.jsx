import React from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
const SearchInput = (props) => {
    const { value, onChnage, ...other } = props
    return (
        <TextField
            onChange={onChnage}
            value={value}
            variant='outlined'
            sx={{
                backgroundColor: '#EFEFF1',
                borderRadius: 1.5,
                width: 180,
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        border: 'none',
                    },
                },
                "&::placeholder": {
                    color: 'text.disable'
                },
                ...props?.sx
            }}
            InputProps={{
                startAdornment:
                    <InputAdornment size={props?.size} position="start" sx={{ color: '#B4B4B5' }}>
                        <SearchIcon fontSize={props?.size || 'inherit'} />
                    </InputAdornment>,
            }}
            {...other}
        />
    )
}

PropTypes.SearchInput = {
    value: PropTypes.string,
    onChnage: PropTypes.func.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
}

export default SearchInput
