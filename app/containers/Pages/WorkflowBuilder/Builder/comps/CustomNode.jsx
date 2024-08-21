import React from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import { alpha } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';

const CustomNote = (props) => {
    const { data, selected, id } = props
    const theme = useTheme();
    const { setNodes } = useReactFlow();

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                border: 1,
                borderColor: selected ? 'primary.main' : 'divider',
                borderRadius: '8px',
                boxShadow: '0 0 15px rgba(0,0,0,0.1)',
                minWidth: 260,
                maxWidth: 320,
                position: 'relative',
                ".react-flow__handle-left": {
                    left: '-5px'
                },
                ".react-flow__handle-right": {
                    right: '-5px'
                }
            }}>

            <Box sx={{
                py: 1.5,
                px: 2,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
                position: 'relative',
            }}>
                <Handle
                    style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: theme.palette.background.paper,
                        borderWidth: '2px',
                        borderColor: '#34C759',
                    }}
                    type="target"
                    position={Position.Left}
                    id={data?.value + '-in'}
                />

                <Box sx={{
                    minWidth: 32,
                    minHeight: 32,
                    width: 32,
                    height: 32,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: alpha(theme.palette.primary.main, 0.3),
                    borderRadius: '50%',
                    boxShadow: `0 0 0 5px ${alpha(theme.palette.primary.main, 0.1)}`
                }}>
                    <SignpostOutlinedIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} />
                </Box>
                <Typography variant='subtitle2' marginRight={'auto'} fontWeight={700}>{data?.title}</Typography>
                {selected ? (
                    <IconButton
                        sx={{
                            width: '24px',
                            height: '24px',
                            opacity: 0.5,
                            color: 'text.secondary',
                            '&:hover': {
                                opacity: 1,
                                color: 'error.main'
                            }
                        }}
                        size='small'
                    >
                        <DeleteOutlinedIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                ) : null}
                <Handle
                    style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: theme.palette.background.paper,
                        borderWidth: '2px',
                        borderColor: theme.palette.primary.main,
                    }}
                    type="source"
                    position={Position.Right}
                    id={data?.value + '-out'}
                />
            </Box>

        </Box>
    )
}

export default CustomNote
