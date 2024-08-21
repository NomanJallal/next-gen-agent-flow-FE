import React from 'react';
import { IconButton, useTheme, alpha } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {
    BaseEdge,
    EdgeLabelRenderer,
    useReactFlow,
    getBezierPath
} from 'reactflow';

export default function CustomEdge({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    selected,
}) {
    const theme = useTheme();
    const { setEdges } = useReactFlow();
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const onEdgeClick = () => {
        setEdges((edges) => edges.filter((edge) => edge.id !== id));
    };

    return (
        <>
            <BaseEdge
                path={edgePath}
                markerEnd={markerEnd}
                style={{
                    ...style,
                    stroke: selected ? theme.palette.primary.main : alpha(theme.palette.text.secondary, 0.3),
                    strokeWidth: 1,
                }}
            />
            {selected ? (
                <EdgeLabelRenderer>
                    <div
                        style={{
                            position: 'absolute',
                            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                            fontSize: 12,
                            pointerEvents: 'all',
                        }}
                    >
                        <IconButton
                            sx={{
                                bgcolor: 'background.paper',
                                border: 1,
                                borderColor: 'primary.main',
                                fontSize: '12px',
                                borderRadius: '50%',
                                boxShadow: '0 0 8px rgba(0,0,0,0.2)',
                                ".MuiSvgIcon-root": {
                                    width: 12,
                                    height: 12,
                                },
                                '&:hover': {
                                    bgcolor: 'background.paper',
                                    borderColor: 'error.main',
                                },
                            }}
                            size='small'
                            onClick={onEdgeClick}
                        >
                            <DeleteOutlinedIcon fontSize='inharit' color='error' />
                        </IconButton>
                    </div>
                </EdgeLabelRenderer>
            ) : null}
        </>
    );
}
