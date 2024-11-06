import React from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { HiHeart } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="flex justify-around  border-b border-gray-500 p-5 items-center z-50">
      {/* Search Input Field Here */}
      <div>
        <input
          type="search"
          placeholder="search..."
          className="mr-5 px-5 py-3 outline-none bg-gray-200 rounded-md w-96 relative"
        />
      </div>
      {/* Some Icons Like Staff Here */}
      <div className="flex justify-between gap-4 text-blue-500">
        <a href="#" className="">
          <HiHeart className="w-8 h-8 text-blue-500" />
        </a>

        <a href="#" className="">
          <AiOutlineShoppingCart className="w-8 h-8 text-blue-500" />
        </a>
        <a href="#" className="">
          <AiOutlineUserAdd className="w-8 h-8 text-blue-500" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
