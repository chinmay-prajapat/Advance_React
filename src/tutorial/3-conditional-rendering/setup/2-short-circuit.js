import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hellow world";
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <div>
      <h1>{firstValue}</h1>
      <h1>value:{secondValue}</h1>
    </div>
  );
};

export default ShortCircuit;
