import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });
  console.log(size);
  return (
    <div>
      <h2>useEffect cleanup</h2>
      <h4>{size}</h4>
    </div>
  );
};

export default UseEffectCleanup;
