import React from 'react';
import MyPieChart from './Earnings';
import MyAreaChart from './Earningschart';

const Totalearnings = () => {
  return (
    <div className="p-6 rounded-lg shadow-md ">
      <div className="flex flex-col md:flex-row gap-6">
        {/* First Component */}
        <div className="flex-1 bg-gray-950 rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-200">Earnings</h1>
            <h2 className="text-xl font-semibold text-gray-400 mt-4">Total Expenses</h2>
            <p className="text-2xl font-bold text-gray-100 mt-2">$6078.76</p>
            <p className="text-md text-green-400 mt-1">Profit is 48% More than last Month</p>
          </div>
          <div className="h-80"> {/* Set  fixed height for the PieChart */}
            <MyPieChart />
          </div>
        </div>

        {/* Second Component */}
        <div className="flex-1 bg-gray-950 rounded-lg shadow-md p-6">
          <div className="h-80"> {/* Set  fixed height for the AreaChart */}
            <MyAreaChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totalearnings;
