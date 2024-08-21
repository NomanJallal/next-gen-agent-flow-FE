import React, { useCallback } from 'react';
import { Box } from '@mui/material';
import { useTheme, alpha } from '@mui/material';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomEdge from './comps/CustomEdge';
import CustomNode from './comps/CustomNode';
import { initialEdges, initialNodes } from './utils';

// Custom

const nodeTypes = { custom: CustomNode };
const edgeTypes = { custom: CustomEdge };

const Builder = () => {
    const theme = useTheme();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) =>
            setEdges((eds) => addEdge({
                ...params,
                type: 'custom',
                markerEnd: {
                    type: 'arrowclosed',
                    width: '14px',
                    height: '14px',
                    color: alpha(theme.palette.text.secondary, 0.3)
                },
            }, eds)),
        []
    );

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: '#F2F4F7',
            minHeight: 'calc(100vh - 224px)',
            borderRadius: '0 0 16px 16px',
            display: 'flex',
        }}>
            <div style={{ width: '100%', position: 'relative' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    fitView={true}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    connectionLineStyle={{
                        stroke: alpha(theme.palette.text.secondary, 0.3),
                        strokeWidth: 1,
                        strokeDasharray: '5,5',
                    }}
                >
                    <Controls />
                    <MiniMap />
                    <Background gap={32} />
                </ReactFlow>
            </div>
        </Box>
    )
}

export default Builder
