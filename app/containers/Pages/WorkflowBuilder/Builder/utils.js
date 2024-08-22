
export const initialNodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: {
            title: 'Scheduling',
            value: 'scheduling',
            connections: [
                {
                    label: "Booked",
                    value: 'booked',
                },
                {
                    label: "Failed",
                    value: 'failed',
                }
            ]
        },
        type: 'custom',
    },
    {
        id: '2',
        position: { x: 400, y: -150 },
        data: {
            title: 'Evaluate',
            value: 'evaluate',
            connections: [
                {
                    label: "True",
                    value: 'true',
                },
                {
                    label: "False",
                    value: 'false',
                }
            ]
        },
        type: 'custom',
    },
    {
        id: '3',
        position: { x: 400, y: 80 },
        data: {
            title: 'Speak',
            value: 'speak',
            connections: [
                {
                    label: "Spoke",
                    value: 'spoke',
                }
            ]
        },
        type: 'custom',
    },
    {
        id: '4',
        position: { x: 520, y: 300 },
        data: {
            title: 'Ask Question',
            value: 'ask_question',
            connections: [
                {
                    label: "Answered",
                    value: 'answered',
                }
            ]
        },
        type: 'custom',
    },
    {
        id: '5',
        position: { x: 850, y: 150 },
        data: {
            title: 'Ai Prompt',
            value: 'ai_prompt',
            connections: [
                {
                    label: "Done",
                    value: 'done',
                },
                {
                    label: "Failed",
                    value: 'failed',
                }
            ]
        },
        type: 'custom',
    },
];

export const initialEdges = [
    {
        id: 'e1-2',
        source: '1',
        sourceHandle: 'scheduling-booked-out',
        target: '2',
        targetHandle: 'evaluate-in',
        type: 'custom'
    },
    {
        id: 'e1-3',
        source: '1',
        sourceHandle: 'scheduling-failed-out',
        target: '3',
        targetHandle: 'spoke-in',
        type: 'custom'
    },
    {
        id: 'e3-4',
        source: '3',
        sourceHandle: 'speak-spoke-out',
        target: '4',
        targetHandle: 'ask_question-in',
        type: 'custom'
    },
    {
        id: 'e4-5',
        source: '4',
        sourceHandle: 'ask_question-answered-out',
        target: '5',
        targetHandle: 'ai_prompt-in',
        type: 'custom'
    }
]