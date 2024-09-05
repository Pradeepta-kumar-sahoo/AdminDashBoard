import React from "react";
import Example from "./Levels";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faArrowUp19, faArrowUpWideShort, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Sales = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4">
      <div className="bg-gray-950 flex flex-col w-full md:w-3/4 p-8 gap-4 rounded-2xl">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Today's Sales</h1>
          <h2 className="text-xl text-gray-400">Sales Summary</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="bg-black p-4 rounded-md flex-1 flex flex-col items-center text-center">
            <FontAwesomeIcon className="text-yellow-400 text-2xl mb-2" icon={faArrowUpWideShort} />
            <h1 className="text-2xl font-bold mb-1">$5k</h1>
            <p>Total Sales</p>
            <p className="text-yellow-400">+10% from yesterday</p>
          </div>

          <div className="bg-black p-4 rounded-md flex-1 flex flex-col items-center text-center">
            <FontAwesomeIcon className="text-teal-300 text-2xl mb-2" icon={faArrowUp19} />
            <h1 className="text-2xl font-bold mb-1">500</h1>
            <p>Total Orders</p>
            <p className="text-teal-300">+8% from yesterday</p>
          </div>

          <div className="bg-black p-4 rounded-md flex-1 flex flex-col items-center text-center">
            <FontAwesomeIcon className="text-teal-300 text-2xl mb-2" icon={faBagShopping} />
            <h1 className="text-2xl font-bold mb-1">9</h1>
            <p>Products Sold</p>
            <p className="text-teal-300">+2% from yesterday</p>
          </div>

          <div className="bg-black p-4 rounded-md flex-1 flex flex-col items-center text-center">
            <FontAwesomeIcon className="text-sky-500 text-2xl mb-2" icon={faUserPlus} />
            <h1 className="text-2xl font-bold mb-1">12</h1>
            <p>New Customers</p>
            <p className="text-sky-500">+3% from yesterday</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/4"> {/* Sets a fixed width for the chart */}
        <Example />
      </div>
    </div>
  );
};

export default Sales;
