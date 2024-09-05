import React from "react";
import Example from "./Productbar";

const Topproducts = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4">
      {/* Product Table Section */}
      <div className="flex-1 bg-black p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-semibold mb-4">Top Products</h1>
        <div className="overflow-x-auto my-3">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="p-3 text-left text-gray-300">#</th>
                <th className="p-3 text-left text-gray-300">Name</th>
                <th className="p-3 text-left text-gray-300">Popularity</th>
                <th className="p-3 text-left text-gray-300">Sales</th>
              </tr>
            </thead>
            <tbody>
              {/* Example rows, replace with dynamic content */}
              <tr className="border-b border-gray-600">
                <td className="p-3 text-gray-400">1</td>
                <td className="p-3 text-gray-400">Product A</td>
                <td className="p-3">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between"></div>
                    <div className="flex mt-2">
                      <div className="w-full bg-gray-300 rounded-full h-2.5">
                        <div
                          className="bg-yellow-400 h-2.5 rounded-full"
                          style={{ width: "78%" }} // Example width, adjust as needed
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <button className="border-2 border-yellow-400 text-yellow-400 p-2 rounded-md w-full">
                    78%
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-3 text-gray-400">2</td>
                <td className="p-3 text-gray-400">Product B</td>
                <td className="p-3">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between"></div>
                    <div className="flex mt-2">
                      <div className="w-full bg-gray-300 rounded-full h-2.5">
                        <div
                          className="bg-cyan-500 h-2.5 rounded-full"
                          style={{ width: "62%" }} // Example width, adjust as needed
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <button className="border-2 border-cyan-500 text-cyan-500 p-2 rounded-md w-full">
                    62%
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-3 text-gray-400">3</td>
                <td className="p-3 text-gray-400">Product c</td>
                <td className="p-3">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between"></div>
                    <div className="flex mt-2">
                      <div className="w-full bg-gray-300 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: "51%" }} // Example width, adjust as needed
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <button className="border-2 border-blue-600  text-blue-600  p-2 rounded-md w-full">
                    51%
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="p-3 text-gray-400">4</td>
                <td className="p-3 text-gray-400">Product D</td>
                <td className="p-3">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between"></div>
                    <div className="flex mt-2">
                      <div className="w-full bg-gray-300 rounded-full h-2.5">
                        <div
                          className="bg-pink-500 h-2.5 rounded-full"
                          style={{ width: "29%" }} // Example width, adjust as needed
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <button className="border-2 border-pink-500  text-pink-500  p-2 rounded-md w-full">
                    29%
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>

      {/* Example Chart Section */}
      <div className="w-full md:w-1/4">
        <Example />
      </div>
    </div>
  );
};

export default Topproducts;
