import React from "react";
import Navbar from "./components/navigation/Navbar";
import Product from "./components/product/Product";
import Recommeded from "./components/recommended/Recommeded";
import Sidebar from "./components/sidebar/Sidebar";
import { laptops } from "./data/data";

const App = () => {
  const [query, setQuery] = useState("");
  const [selectCategory, setSelectCategory] = useState(null);

  const filterItems = laptops.filter((laptop) =>
    laptop.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  const handleRadioChange = (event) => setSelectCategory(event.target.value);

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };
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
