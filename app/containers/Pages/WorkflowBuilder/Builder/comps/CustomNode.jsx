import React from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import { alpha } from '@mui/material';
import SubConnection from './SubConnection';
// icons
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SignpostOutlinedIcon from '@mui/icons-material/SignpostOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MicIcon from '@mui/icons-material/Mic';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const icons = {
    scheduling: <CalendarTodayIcon />,
    evaluate: <CheckCircleOutlineIcon />,
    ask_question: <QuestionAnswerIcon />,
    speak: <MicIcon />,
    ai_prompt: <LightbulbIcon />,
}

const CustomNote = (props) => {
    const { data, selected } = props
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
                maxWidth: 300,
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
                    boxShadow: `0 0 0 5px ${alpha(theme.palette.primary.main, 0.1)}`,
                    "svg": {
                        fontSize: 20,
                    },
                    color: theme.palette.primary.main,
                }}>
                    {Boolean(icons[data?.value])
                        ? icons[data?.value]
                        : (<SignpostOutlinedIcon />)
                    }
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
            </Box>

            {data?.connections?.length
                ? data.connections.map((sub, i) => (
                    <SubConnection key={i} parent={data?.value} {...sub} />
                ))
                : (
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
                )
            }
        </Box>
    )
}

export default CustomNote
