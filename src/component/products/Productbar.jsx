import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

const Example = () => {
  const [opacity, setOpacity] = useState({ uv: 1, pv: 1 });

  const handleMouseEnter = (key) => {
    setOpacity((prevOpacity) => ({
      ...prevOpacity,
      [key]: 0.5,
    }));
  };

  const handleMouseLeave = (key) => {
    setOpacity((prevOpacity) => ({
      ...prevOpacity,
      [key]: 1,
    }));
  };

  return (
    <div className="p-4 bg-black rounded-lg shadow-md min-w-[300px]"> {/* Added min-width */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            onMouseEnter={({ value }) => handleMouseEnter(value)}
            onMouseLeave={({ value }) => handleMouseLeave(value)}
          />
          <Line type="monotone" dataKey="pv" strokeOpacity={opacity.pv} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" strokeOpacity={opacity.uv} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-gray-600 mt-2">Tips: Hover over the legend to adjust line opacity.</p>
    </div>
  );
};

Example.demoUrl = 'https://codesandbox.io/p/sandbox/customized-legend-event-gwscjg';

export default Example;
