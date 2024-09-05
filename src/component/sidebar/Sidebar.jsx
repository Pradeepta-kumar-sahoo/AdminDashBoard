import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {faClockRotateLeft} from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <div className="h-screen w-32 sticky top-0 flex flex-col items-center py-8 shadow-md">
      <h2 className="text-lg font-semibold mb-8">Sidebar</h2>
      <div>
        <ul className="space-y-6">
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faHouseChimney} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faUser} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faChartColumn} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faLock} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faChartLine} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faComment} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faGear} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faStar} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faClockRotateLeft} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
          </li>
          <li className="hover:bg-gray-700 p-4 rounded-lg cursor-pointer transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faUserPlus} size="lg" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
