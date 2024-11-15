import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");

      console.log(response.data);

      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className=" container">
      <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products &&
          products.map((product) => (
            <div key={product.id} className="flex items-start">
              <div className="flex flex-col border-2 ">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className=" object-contain h-64"
                />
                <div className="  grid grid-cols-2 mx-6 gap-4 mb-4">
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
                <button className=" bg-purple-600 py-2 mx-6 mb-6 rounded-md text-md font-bold text-white">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
