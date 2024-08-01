import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = Array.from({ length: 31 }, (_, index) => ({
    day: index + 1,
    call: Math.floor(Math.random() * 6)
}));

const Chart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    right: 30,
                    bottom: 24
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" fill='#747EA9' color='#747EA9' />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="call" fill="#304FFE" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Chart;
