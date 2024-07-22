import React from 'react';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const SelectBox = (props) => {
    const {
        onChnage,
        value,
        options,
        label,
        fullWidth,
        size,
        placeholder,
    } = props

    return (
        <FormControl
            fullWidth={fullWidth}
            variant="outlined"
            sx={{ minWidth: 180 }}
            size={size || 'small'}
        >
            {label ? (
                <InputLabel>{label}</InputLabel>
            ) : null}
            <Select
                value={value}
                onChange={onChnage}
                label={label}
                MenuProps={{
                    disableScrollLock: true,
                }}
                displayEmpty
                sx={{
                    '.MuiSelect-select': {
                        color: !value ? 'text.disable' : null
                    }
                }}
            >
                <MenuItem value="">
                    {placeholder}
                </MenuItem>
                {options?.length ? options.map((item, i) => (
                    <MenuItem key={i} value={item?.value}>{item?.label}</MenuItem>
                )) : null}
            </Select>
        </FormControl>
    )
}


SelectBox.propTypes = {
    value: PropTypes.string,
    onChnage: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    label: PropTypes.string,
    fullWidth: PropTypes.bool,
};

export default SelectBox;
