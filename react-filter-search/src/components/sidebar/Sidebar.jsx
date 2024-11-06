import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Categories from "./categories/Categories";
import Colors from "./color/Colors";
import Prices from "./price/Prices";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center  min-w-80">
      <div className="mt-24 text-xl flex items-baseline font-bold text-blue-600">
        <AiOutlineShoppingCart />
        <h1 className="mb-24">NFIlteringDemo</h1>
      </div>
      <Categories />
      <Prices />
      <Colors />
    </div>
  );
};

export default Sidebar;
