import React from "react";
import Radio from "../categories/Radio";

const Prices = () => {
  return (
    <div>
      <div className="border-2 border-gray-400 rounded-md">
        <h1 className="text-md text-center font-bold text-lime-500">Prices</h1>
        <div className="p-6">
          <Radio category="$0 - $100" />
          <Radio category="$0 - $100" />
          <Radio category="$0 - $100" />
          <Radio category="$0 - $100" />
          <Radio category="$0 - $100" />
        </div>
      </div>
    </div>
  );
};

export default Prices;
