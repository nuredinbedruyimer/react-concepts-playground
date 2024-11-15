import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container flex justify-between items-center border-b shadow-md px-4">
      <div>
        <h1 className="text-3xl font-bold text-purple-800">ReactQuery</h1>
      </div>
      <div className="flex flex-row gap-8 uppercase text-sm font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/just-hooks">Just Hooks</NavLink>
        <NavLink to="/react-tool-kit">React Tool Kit</NavLink>
        <NavLink to="/react-query">React Query</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
