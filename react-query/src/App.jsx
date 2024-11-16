import React from "react";
import ProductList from "./components/product-v1/ProductList";
import Navbar from "./components/Layout/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Layout/HomePage";
import JustHooks from "./components/product-v1/JustHooks";
import ReactQuery from "./components/product-react-query/ReactQuery";
import ReactToolKits from "./components/product-v2/ReactToolKits";
import ProductDetails from "./components/product-react-query/ProductDetails";
import InfiniteScroll from "./components/product-react-query/InfiniteScroll";

const App = () => {
  return (
    <div className="container flex flex-col mx-auto gap-12 py-4">
      <Navbar />
      <Routes>
        <Route index element={<InfiniteScroll />} />

        <Route path="/just-hooks" element={<JustHooks />} />
        <Route path="/react-tool-kit" element={<ReactToolKits />} />
        <Route path="/react-query" element={<ReactQuery />} />
        <Route path="/react-query/:productID" element={<ProductDetails />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
