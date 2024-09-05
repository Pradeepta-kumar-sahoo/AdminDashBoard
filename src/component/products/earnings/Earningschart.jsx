import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  // Add more data points as needed
];

class MyAreaChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={300} className= "bg-black my-11">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
            curve={curveCardinal} // Use curveCardinal here
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
            curve={curveCardinal} // Use curveCardinal here
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default MyAreaChart;
