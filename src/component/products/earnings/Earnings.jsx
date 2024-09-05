import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const MyPieChart = () => {
  const data = [
    { name: 'Category A', value: 10 },
    { name: 'Category B', value: 20 },
    { name: 'Category C', value: 30 },
    { name: 'Category D', value: 40 },
  ];

  return (
    <div style={{ width: '500px', height: '500px' }}> 
      <PieChart
        series={[
          {
            data: data,
            innerRadius: 0,  
            outerRadius: 100,
            paddingAngle: 5,
            cornerRadius: 5,
            startAngle: -45,
            endAngle: 315,  
            cx: 200,        
            cy: 200,        
          }
        ]}
      />
    </div>
  );
};

export default MyPieChart;
