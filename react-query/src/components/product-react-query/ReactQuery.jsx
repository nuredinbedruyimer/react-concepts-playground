import React from "react";
import ProductList from "./ProductList";

function ReactQuery() {
  return (
    <div className="container flex flex-col gap-8 ">
      <h1 className="text-3xl font-extrabold text-blue-800">
        Fetched Products Using{" "}
        <span className="italic text-red-900">React Query</span>
      </h1>
      <ProductList />
    </div>
  );
}

export default ReactQuery;
