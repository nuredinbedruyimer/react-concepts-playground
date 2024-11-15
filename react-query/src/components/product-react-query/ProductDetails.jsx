import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productID } = useParams();

  const response = useQuery({
    queryKey: ["products", productID],
    queryFn: () => {
      return axios.get(`http://localhost:5000/products/${productID}`);
    },
  });
  const { isLoading, isError, data } = response;
  const product = data?.data;

  return (
    <div className=" container flex gap-6 items-start border-2 border-emerald-800 rounded-lg">
      <div>
        <img src={product?.imageUrl} alt={product?.name} />
      </div>
      <div className="flex flex-col gap-4 mt-12">
        <p className="text-xl font-extrabold text-purple-600">
          Category :{" "}
          <span className="text-yellow-800">{product?.category}</span>{" "}
        </p>
        <p className="text-xl font-extrabold text-purple-600">
          Name : <span className="text-yellow-800">{product?.name}</span>{" "}
        </p>
        <p className="text-xl font-extrabold text-purple-600">
          Price : <span className="text-yellow-800">{product?.price}</span>{" "}
        </p>
        <p className="text-xl font-extrabold text-purple-600">
          Processor :{" "}
          <span className="text-yellow-800">{product?.processor}</span>{" "}
        </p>
        <p className="text-xl font-extrabold text-purple-600">
          RAM : <span className="text-yellow-800">{product?.ram}</span>{" "}
        </p>
        <button className="text-white bg-purple-600 rounded-md py-2 w-full">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
