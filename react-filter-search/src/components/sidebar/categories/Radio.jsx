import React from "react";

const Radio = ({ category }) => {
  return (
    <div>
      <label className="relative flex items-center gap-4 font-medium text-gray-700 cursor-pointer">
        <input
          type="radio"
          className="peer sr-only" // Hide default radio
        />
        <span
          className="h-5 w-5 rounded-full border-2 border-gray-400 flex items-center justify-center
                     peer-checked:border-blue-600 peer-checked:bg-blue-600
                     before:content-[''] before:block before:h-2 before:w-2 before:rounded-full 
                     before:bg-transparent before:transition-transform 
                     peer-checked:before:bg-white peer-checked:before:scale-100 before:scale-0"
        ></span>
        <span className="text-gray-600 peer-checked:text-blue-600">
          {category}
        </span>
      </label>
    </div>
  );
};

export default Radio;
