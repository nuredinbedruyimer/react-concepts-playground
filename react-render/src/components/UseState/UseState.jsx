import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("UseState Render : ", count);
  return (
    <div className="usestate">
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Add Counter
        </button>
        <button onClick={() => setCount(0)}>Set Counter</button>
        <button onClick={() => setCount(10)}>Set Counter to {count}</button>
      </div>
    </div>
  );
};

export default UseState;
