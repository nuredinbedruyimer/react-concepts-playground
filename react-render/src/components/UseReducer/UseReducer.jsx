import React, { useReducer } from "react";

const UseReducer = () => {
  const actions = {
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset",
  };

  const intialState = 0;

  const reducer = (state, action) => {
    switch (action) {
      case actions.INCREMENT:
        return state + 1;
      case actions.DECREMENT:
        return state - 1;
      case actions.RESET:
        return intialState;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, intialState);
  console.log("Use Reducer Render : ", count);

  return (
    <div className="usestate">
      <h1> Use Reducer Count : {count}</h1>

      <div>
        <button onClick={() => dispatch(actions.INCREMENT)}>Increment</button>
        <button onClick={() => dispatch(actions.DECREMENT)}>Decrement</button>
        <button onClick={() => dispatch(actions.RESET)}>Reset</button>
      </div>
    </div>
  );
};

export default UseReducer;
