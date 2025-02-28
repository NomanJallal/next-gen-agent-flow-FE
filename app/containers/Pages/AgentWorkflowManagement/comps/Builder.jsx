import React, { useCallback } from 'react';
import { Box, Card, Grid, Switch } from '@mui/material';
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';

const nodeTypes = {
    customNode: CustomNode,
};

const initialNodes = [
    {
        id: '1',
        type: 'customNode',
        position: { x: 0, y: 0 },
        data: { label: 'Scheduling', status1: 'Booked', status2: 'Failed' },
    },
    {
        id: '2',
        type: 'customNode',
        position: { x: 200, y: 100 },
        data: { label: 'Evaluate', status1: 'True', status2: 'False' },
    },
    {
        id: '3',
        type: 'customNode',
        position: { x: 400, y: 200 },
        data: { label: 'Speak', status1: 'Spoke' },
    },
    {
        id: '4',
        type: 'customNode',
        position: { x: 600, y: 300 },
        data: { label: 'Ask Question', status1: 'Answered' },
    },
    {
        id: '5',
        type: 'customNode',
        position: { x: 800, y: 400 },
        data: { label: 'AI Prompt', status1: 'Done', status2: 'Failed' },
    },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4' },
    { id: 'e4-5', source: '4', target: '5' },
];


const Builder = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: '#F2F4F7',
            minHeight: 'calc(100vh - 260px)',
            borderRadius: '0 0 16px 16px',
            display: 'flex',
        }}>
            {/* <Card style={{
                width: '150px', borderRadius: '25px',
            }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="start"
                    alignItems="center"
                >
                    <Switch />
                    <p style={{ marginTop: '10px' }}>Slide View</p>
                </Grid>
            </Card> */}
            <div style={{ width: '100%', position: 'relative' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                >
                    <MiniMap />
                    <Controls />
                    <Background />
                </ReactFlow>
            </div>
        </Box>
    )
}

export default Builder
