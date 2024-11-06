import React from "react";

const Recommeded = () => {
  return (
    <div className="  mt-8">
      <h1 className="text-xl font-extrabold text-blue-500">
        Recommended Product
      </h1>
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 border border-blue-500 rounded-md">
          All Products
        </button>
        <button className="px-4 py-2 border border-blue-500 rounded-md">
          {" "}
          Hp
        </button>
        <button className="px-4 py-2 border border-blue-500 rounded-md">
          {" "}
          Mac M2
        </button>
        <button className="px-4 py-2 border border-blue-500 rounded-md">
          Lenovo
        </button>
        <button className="px-4 py-2 border border-blue-500 rounded-md">
          {" "}
          ASUS
        </button>
      </div>
    </div>
  );
};

export default Recommeded;
