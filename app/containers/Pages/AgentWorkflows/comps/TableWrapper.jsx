import React from 'react';
import propTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const TableWrapper = (props) => {
    const { children, title } = props;

    return (
        <Box sx={{
            border: 1,
            borderColor: 'divider',
            borderRadius: 2,
        }}>
            <Box sx={{
                px: 4,
                py: 2,
                borderBottom: 1,
                borderColor: 'divider',
            }}>
                <Typography sx={{ fontSize: 20, fontWeight: 400 }}>
                    {title || 'Untitled'}
                </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
                {children}
            </Box>
        </Box>
    )
}

TableWrapper.propTypes = {
    children: propTypes.node.isRequired,
    title: propTypes.string,
}

export default TableWrapper
