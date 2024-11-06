import React from "react";
import Navbar from "./components/navigation/Navbar";
import Product from "./components/product/Product";
import Recommeded from "./components/recommended/Recommeded";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="">
        <Navbar />

        <Recommeded />

        <Product />
      </div>
    </div>
  );
};

export default App;
