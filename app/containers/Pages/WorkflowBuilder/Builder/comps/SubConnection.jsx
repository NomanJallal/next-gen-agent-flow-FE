import React from 'react';
import { Handle, Position } from 'reactflow';
import { Box, Typography, useTheme, Divider } from '@mui/material';

const SubConnection = (props) => {
    const { parent, label, value } = props;
    const theme = useTheme();
    return (<>
        <Divider />
        <Box sx={{
            width: '100%',
            py: 1.5,
            px: 2,
            position: 'relative',
        }}>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                {label}
            </Typography>

            <Handle
                style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: theme.palette.background.paper,
                    borderWidth: '2px',
                    borderColor: ['false', 'failed'].includes(value) ? theme.palette.error.main : theme.palette.primary.main,
                }}
                type="source"
                position={Position.Right}
                id={parent + '-' + value + '-out'}
            />
        </Box>
    </>)
}

export default SubConnection
