import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = () => {
  return (
    <section className="border-2 border-gray-300 p-4 rounded-md">
      <img
        src="https://images.unsplash.com/photo-1729830114379-4c3dfe391a74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
        alt="Some Laptop"
        className="w-[200px]  rounded-md mb-4"
      />
      <div className="space-y-2">
        <h3>Product Title</h3>
        <section className="flex items-baseline">
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />

          <span>4.5</span>
        </section>
        <section className="flex justify-around gap-6">
          <div>
            <del>399</del> 299
          </div>

          <div>
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
