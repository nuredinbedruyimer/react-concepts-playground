import React from "react";
import Radio from "../categories/Radio";
const Colors = () => {
  return (
    <div>
      <div className="border-2 border-gray-400 rounded-md">
        <h1 className="text-md text-center font-bold text-lime-500">Colors</h1>
        <div className="p-6">
          <Radio category="All" />
          <Radio category="red" />
          <Radio category="blue" />
          <Radio category="purple" />
          <Radio category="green" />
        </div>
      </div>
    </div>
  );
};

export default Colors;
