import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, AreaChart, CartesianGrid, ReferenceLine, Area } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <AreaChart width={700} height={200} data={data.data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
                <ReferenceLine y={4000} label="Max" stroke="red" strokeDasharray="3 3" />
                <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>

        </div>
    );
};

export default Statistics;