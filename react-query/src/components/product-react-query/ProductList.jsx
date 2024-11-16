import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ProductList = ({ setRefetchProducts }) => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  // Pagination logic
  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1); // Only decrement if the page is greater than 1
    }
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1); // Increment without any condition for now
  };

  const response = useQuery({
    queryKey: ["products", page, limit], // Include `page` in the queryKey for React Query caching
    queryFn: () => {
      return axios.get(
        `http://localhost:5000/products?_limit=${limit}&_page=${page}`
      );
    },
  });

  const { isLoading, isError, data, error } = response;
  const products = data?.data;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p className="text-xl font-bold text-red-700">{error.message}</p>;
  }

  return (
    <div className="container">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products &&
          products.map((product) => (
            <NavLink to={`/react-query/${product.id}`} key={product.id}>
              <div className="flex items-start">
                <div className="flex flex-col border-2">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-contain h-64"
                  />
                  <div className="grid grid-cols-2 mx-6 gap-4 mb-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-xl text-lime-900 font-extrabold">
                        {product.category}
                      </p>

                      <span>{product.processor}</span>

                      <span>{product.color}</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span>{product.brand}</span>
                      <span>{product.price}</span>
                      <p>{product.name.slice(0, 12)}</p>
                    </div>
                  </div>
                  <button className="bg-purple-600 py-2 mx-6 mb-6 rounded-md text-md font-bold text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            </NavLink>
          ))}
      </div>
      <div className="py-12 flex justify-center gap-4">
        <button
          className="text-white px-12 py-2 bg-blue-700 rounded-sm"
          onClick={handlePrev}
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          className="text-white px-12 py-2 bg-blue-700 rounded-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
