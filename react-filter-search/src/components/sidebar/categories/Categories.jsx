import React from "react";
import Radio from "./Radio";

const Categories = () => {
  return (
    <div>
      <div className="border-2 border-gray-400 rounded-md">
        <h1 className="text-md text-center font-bold text-lime-500">
          Categories
        </h1>
        <div className="p-6">
          <Radio category="All" />
          <Radio category="Hp" />
          <Radio category="MacBook" />
          <Radio category="Gaming" />
          <Radio category="ASUS" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
