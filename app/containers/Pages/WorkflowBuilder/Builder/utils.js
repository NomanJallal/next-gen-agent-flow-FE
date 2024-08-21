
export const initialNodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: {
            title: 'Node 1',
            value: 'node-1',
        },
        type: 'custom',
    },
    {
        id: '2',
        position: { x: 0, y: 100 },
        data: {
            title: 'Node 2',
            value: 'node-2',
        },
        type: 'custom',
    },
];

export const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
        type: 'custom'
    }
]