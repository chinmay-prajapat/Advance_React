import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
  });
  console.log("render component");
  return (
    <div>
      <h2>{value}</h2>
      <button type="button" onClick={() => setValue(value + 1)}>
        Press Me!
      </button>
    </div>
  );
};

export default UseEffectBasics;
