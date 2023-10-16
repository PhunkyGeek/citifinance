import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%">
      <AreaChart
        data={data}
        margin={{
          top: 24,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amount" stroke="#29AABB" fill="#29AABB" />
        <Area type="monotone" dataKey="type" stroke="#F15742" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
