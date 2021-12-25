import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value === 0) {
      return null;
    }
    setValue(value - 1);
  };
  const reset = () => {
    setValue(0);
  };
  return (
    <div>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={decrement}>
          Decrease
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={increment}>
          increase
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
