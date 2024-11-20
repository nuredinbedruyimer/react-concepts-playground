import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParantAndChild = () => {
  const [count, setCount] = useState(0);
  console.log("Parant Component Render : ");
  return (
    <div className="usestate">
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Add Counter
        </button>
        <button onClick={() => setCount(0)}>Set Counter</button>
        <button onClick={() => setCount(10)}>Set Counter to {10}</button>
      </div>
      <ChildComponent />
    </div>
  );
};

export default ParantAndChild;
