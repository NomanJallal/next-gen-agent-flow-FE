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

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
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
