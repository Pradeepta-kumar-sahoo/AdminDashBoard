import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="p-4 flex justify-between items-center  shadow-md">
      
      <div className="flex-grow max-w-md mr-4">
        <input
          className="w-full p-2 border rounded-lg"
          type="search"
          placeholder="Search here.."
        />
      </div>

  
      <div className="flex items-center gap-4">
        <div>
          <FontAwesomeIcon icon={faBell} size="lg" />
        </div>

        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s"
            alt="Profile"
            className="rounded-full w-10 h-10 object-cover"
          />
        </div>

        <div>
          <FontAwesomeIcon icon={faCaretDown} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
