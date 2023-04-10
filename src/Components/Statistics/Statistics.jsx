import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {

    const rangeData = [
        {
          "Assignment": "A1",
          "Marks": 57
        },
        {
          "Assignment": "A2",
          "Marks": 58
        },
        {
          "Assignment": "A3",
          "Marks": 60
        },
        {
          "Assignment": "A4",
          "Marks": 60
        },
        {
          "Assignment": "A5",
          "Marks": 60
        },
        {
          "Assignment": "A6",
          "Marks": 60
        },
        {
          "Assignment": "A7",
          "Marks": 60
        }
    ]
      

    return (
        <div className='my-7 bg-sky-100 p-2'>

            <h2 className='text-4xl font-bold my-5 text-center'>Assignment Marks</h2>

            <div className="max-w-7xl w-full h-96">
                <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart
                        width={1240}
                        height={300}
                        data={rangeData}
                        margin={{
                            top: 20, right: 20, bottom: 20, left: 20,
                        }}
                        >
                        <XAxis dataKey="Assignment" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="7 7" />
                        <Area dataKey="Marks" stroke="#8884d8" fill="#8884d8" />
                        <Tooltip />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            
        </div>
    );
};

export default Statistics;