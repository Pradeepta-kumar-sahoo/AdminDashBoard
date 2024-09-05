import React from "react";
import Sales from "../../../sales/Sales";
import Topproducts from "../../products/Topproducts";

import Totalearnings from "../../products/earnings/Totalearnings";

const Main = () => {
  return (
    <div className=" h-screen my-10">
      <div>
        <Sales />
        <Topproducts />

        <Totalearnings />
      </div>
    </div>
  );
};

export default Main;
