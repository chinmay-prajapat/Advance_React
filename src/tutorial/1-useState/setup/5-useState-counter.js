import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <section style={{ margin: "4rem 0" }}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn">Decrease</button>
        <button className="btn">reset</button>
        <button className="btn" onClick={increment}>
          increase
        </button>
      </section>
    </div>
  );
};

export default UseStateCounter;
